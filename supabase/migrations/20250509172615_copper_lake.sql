/*
  # Add default admin user

  1. Changes
    - Create default admin user in auth.users table
    - Add corresponding entry in admin_users table
  
  2. Security
    - Sets up initial admin credentials
    - Email: admin@whitepearls.com
    - Password: admin123
*/

-- Insert admin user into auth.users
DO $$
DECLARE
  user_id uuid;
BEGIN
  INSERT INTO auth.users (
    instance_id,
    id,
    aud,
    role,
    email,
    encrypted_password,
    email_confirmed_at,
    created_at,
    updated_at,
    raw_app_meta_data,
    raw_user_meta_data,
    is_super_admin,
    confirmation_token
  )
  VALUES (
    '00000000-0000-0000-0000-000000000000',
    gen_random_uuid(),
    'authenticated',
    'authenticated',
    'admin@whitepearls.com',
    crypt('admin123', gen_salt('bf')),
    now(),
    now(),
    now(),
    '{"provider":"email","providers":["email"]}',
    '{}',
    false,
    encode(gen_random_bytes(32), 'hex')
  )
  ON CONFLICT (email) DO NOTHING
  RETURNING id INTO user_id;

  -- Insert into admin_users table
  IF user_id IS NOT NULL THEN
    INSERT INTO admin_users (id, email, role)
    VALUES (user_id, 'admin@whitepearls.com', 'admin')
    ON CONFLICT (id) DO NOTHING;
  END IF;
END
$$;