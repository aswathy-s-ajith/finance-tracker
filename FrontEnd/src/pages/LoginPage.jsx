import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link, CircularProgress } from '@mui/material';
import { supabase } from '../supabaseClient'; // We are now importing this for real

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // This function is now fully active
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      navigate('/dashboard'); // On success, go to the dashboard
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000ff 10%, #062b0dff 100%)',
    }}>
      <Box sx={{
        p: 4, width: '100%', maxWidth: '400px', borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'white' }}>
          Sign In
        </Typography>
        {/* We re-added the onSubmit prop here */}
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField 
            margin="normal" required fullWidth id="email" label="Email Address" name="email"
            autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& label.Mui-focused': { color: 'hsla(0, 0%, 100%, 1.00)' },
              '& .MuiOutlinedInput-root': {
                color: 'white', '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <TextField
            margin="normal" required fullWidth name="password" label="Password" type="password"
            id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}
             sx={{
              '& label.Mui-focused': { color: '#b39ddb' },
              '& .MuiOutlinedInput-root': {
                color: 'white', '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ mt: 3, mb: 2, py: 1.5 }}>
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
          <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/signup" variant="body2" sx={{ color: '#b39ddb', fontWeight: 'bold' }}>
              {"Sign Up"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

