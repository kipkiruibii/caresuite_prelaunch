import logo from '../../assets/logo3.png';
import { Box, Typography } from '@mui/material';

export default function SitemarkIcon() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
      <img
        src={logo}
        alt="CareSuite Logo"
        style={{ height: 60, width: 80, objectFit: 'contain' }}
      />
      <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
        <span style={{ color: '#1976d2' }}>Care</span>
        <span style={{ color: '#388e3c' }}>Suite</span>
      </Typography>
    </Box>
  );
}
