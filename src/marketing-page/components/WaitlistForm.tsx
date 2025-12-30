import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, TextField, Button, MenuItem, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: theme.shadows[4],
  borderRadius: theme.spacing(2),
}));

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cabo Verde',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Comoros',
  'Congo',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'North Korea',
  'North Macedonia',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Korea',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.caresuite.care/api/v1/website/waiting-list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          location: formData.country,
        }),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: 'Successfully joined the waitlist!',
          severity: 'success',
        });
        setShowThankYou(true);
        setFormData({ name: '', email: '', country: '' });
      } else {
        const errorData = await response.json();
        setSnackbar({
          open: true,
          message: errorData.errors ? 'Please check your information and try again.' : 'Failed to join waitlist. Please try again.',
          severity: 'error',
        });
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Network error. Please check your connection and try again.',
        severity: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="waitlist-form">
      <Box display="flex" justifyContent="center">
        <Box width={{ xs: '100%', md: '50%' }}>
          <StyledCard>
            <CardContent>
              {showThankYou ? (
                <>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Thank You!
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Thank you for joining our waitlist! We'll be in touch soon with updates about CareSuite and your invitation to participate in our pilot program.
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="large" 
                    fullWidth
                    onClick={() => setShowThankYou(false)}
                    sx={{ mt: 2, py: 1.5 }}
                  >
                    Join Another Person
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="h4" component="h2" gutterBottom>
                    Join Our Waitlist
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Be among the first to experience CareSuite. Provide your information below, and we'll keep you updated on our progress and invite you to participate in our pilot program. Your input will be greatly appreciated in helping us improve the product further and refine its features.
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3, 
                        '& .MuiFilledInput-root': { 
                          height: '56px',
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3, 
                        '& .MuiFilledInput-root': { 
                          height: '56px',
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      select
                      label="Business Location (Country)"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      sx={{ 
                        mb: 3, 
                        '& .MuiFilledInput-root': { 
                          height: '56px',
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          },
                          '&.Mui-focused': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          '&.Mui-focused': {
                            color: 'primary.main',
                          },
                        },
                      }}
                    >
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large" 
                      fullWidth
                      disabled={isSubmitting}
                      sx={{ mt: 1, py: 1.5 }}
                    >
                      {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist'}
                    </Button>
                  </Box>
                </>
              )}
            </CardContent>
          </StyledCard>
        </Box>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}