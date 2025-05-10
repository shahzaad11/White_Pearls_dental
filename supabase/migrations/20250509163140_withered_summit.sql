/*
  # Admin Tables Creation

  1. New Tables
    - `admin_users`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `role` (text)
      - `created_at` (timestamp)
    - `doctor_availability`
      - `id` (uuid, primary key)
      - `doctor_id` (uuid, references users)
      - `day_of_week` (integer)
      - `start_time` (time)
      - `end_time` (time)
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `author_id` (uuid, references users)
      - `published_at` (timestamp)
      - `status` (text)
    - `reviews`
      - `id` (uuid, primary key)
      - `patient_id` (uuid, references users)
      - `rating` (integer)
      - `content` (text)
      - `status` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

DO $$ BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Admins can manage blog_posts" ON blog_posts;
  DROP POLICY IF EXISTS "Public can view published blog_posts" ON blog_posts;
  DROP POLICY IF EXISTS "Admins can manage reviews" ON reviews;
  DROP POLICY IF EXISTS "Public can view approved reviews" ON reviews;
  DROP POLICY IF EXISTS "Admin users can manage admin_users" ON admin_users;
  DROP POLICY IF EXISTS "Admins can manage doctor_availability" ON doctor_availability;
END $$;

-- Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('admin', 'doctor')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin users can manage admin_users"
  ON admin_users
  USING (auth.uid() IN (SELECT id FROM admin_users WHERE role = 'admin'));

-- Doctor Availability Table
CREATE TABLE IF NOT EXISTS doctor_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  doctor_id uuid REFERENCES users(id) ON DELETE CASCADE,
  day_of_week integer CHECK (day_of_week BETWEEN 0 AND 6),
  start_time time NOT NULL,
  end_time time NOT NULL,
  UNIQUE (doctor_id, day_of_week)
);

ALTER TABLE doctor_availability ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage doctor_availability"
  ON doctor_availability
  USING (auth.uid() IN (SELECT id FROM admin_users));

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author_id uuid REFERENCES users(id) ON DELETE SET NULL,
  published_at timestamptz,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage blog_posts"
  ON blog_posts
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Public can view published blog_posts"
  ON blog_posts
  FOR SELECT
  USING (status = 'published');

-- Reviews Table
CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id uuid REFERENCES users(id) ON DELETE SET NULL,
  rating integer CHECK (rating BETWEEN 1 AND 5),
  content text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage reviews"
  ON reviews
  USING (auth.uid() IN (SELECT id FROM admin_users));

CREATE POLICY "Public can view approved reviews"
  ON reviews
  FOR SELECT
  USING (status = 'approved');