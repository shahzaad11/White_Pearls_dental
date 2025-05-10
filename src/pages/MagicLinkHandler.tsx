import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient'; // Adjust path if needed

export default function MagicLinkHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMagicLink = async () => {
      const { error } = await supabase.auth.getSessionFromUrl({ storeSession: true });

      if (error) {
        console.error('Error verifying magic link:', error.message);
      } else {
        console.log('✅ Magic link verified and session stored.');
        navigate('/'); // Redirect after successful login
      }
    };

    handleMagicLink();
  }, [navigate]);

  return <p>Verifying your login link...</p>;
}
