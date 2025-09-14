import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link, CircularProgress } from '@mui/material';
// We no longer need Spline here
// import { supabase } from '../supabaseClient'; // Temporarily commented out

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (event) => {
    event.preventDefault();
    alert('Signup functionality is temporarily disabled. Waiting for Supabase keys.');
    /*
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      alert('Signup successful! Please check your email for a verification link.');
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    // New background for a distinct page feel
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #000000ff 10%,  rgba(4, 41, 20, 1) 100%)', // Dark gradient
    }}>
      {/* The Glass Box */}
      <Box sx={{
        p: 4,
        width: '100%',
        maxWidth: '400px',
        borderRadius: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: 'white' }}>
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSignup} sx={{ mt: 1 }}>
          <TextField 
            margin="normal" required fullWidth id="email" label="Email Address" name="email"
            autoComplete="email" autoFocus value={email} onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& label.Mui-focused': { color: '#b39ddb' },
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <TextField
            margin="normal" required fullWidth name="password" label="Password" type="password"
            id="password" value={password} onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& label.Mui-focused': { color: '#b39ddb' },
              '& .MuiOutlinedInput-root': {
                color: 'white',
                '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                '&.Mui-focused fieldset': { borderColor: '#b39ddb' },
              },
              '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
            }}
          />
          <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ mt: 3, mb: 2, py: 1.5 }}>
            {loading ? <CircularProgress size={24} /> : 'Sign Up'}
          </Button>
          <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/LoginPage" variant="body2" sx={{ color: '#b39ddb', fontWeight: 'bold' }}>
              {"Sign In"}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

