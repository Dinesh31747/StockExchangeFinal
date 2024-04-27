import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newpassword: password,
          token: localStorage.getItem('token'),
        }),
      });

      const result = await response.json();

      if (result.status === 'ok') {
        setSuccess('Password changed successfully!');
        setPassword(''); // Clear password field after success
      } else {
        setError(result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="New Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        error={!!error}
        helperText={error}
      />
      <br />
      <Button variant="contained" type="submit">
        Change Password
      </Button>
      {success && <Alert severity="success">{success}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
    </form>
  );
}

export default ChangePassword;
