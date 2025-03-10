import Link from 'next/link';
import { Box, Button, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 3,
      }}
    >
      <Typography variant="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" size="large">
          Go Back Home
        </Button>
      </Link>
    </Box>
  );
}