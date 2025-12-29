import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url(https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/admin-dashboard-light.png)`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: 'url(https://caresuite-landing-assets.s3.eu-central-1.amazonaws.com/admin-dashboard-dark.png)',
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Introducing&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={(theme) => ({
                fontSize: 'inherit',
                color: 'primary.main',
                ...theme.applyStyles('dark', {
                  color: 'primary.light',
                }),
              })}
            >
              <span style={{ color: '#1976d2' }}>Care</span>
              <span style={{ color: '#388e3c' }}>Suite</span>

            </Typography>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            <Typography component="span" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
              Streamline care management
            </Typography>{' '}
            with{' '}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              scheduling, HR & payroll, financing.
            </Typography>{' '}
            Manage{' '}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              shifts, staff, clients, medications & eMAR.
            </Typography>{' '}
            Track{' '}
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              tasks, timesheets, digital forms & careplans.
            </Typography>{' '}
            <br />
            <Typography component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              Under development – join our pilot!
            </Typography>
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content', flex: 1 }}
              href="#demo-video"
            >
              Watch Demo Video
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content', flex: 1 }}
              href="#waitlist-form"
            >
              Join Waitlist
            </Button>
          </Stack>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            Learn more about CareSuite by watching our demo video or join our waitlist to get early access.
          </Typography>
        </Stack>
        <StyledBox id="image" />
      </Container>
    </Box>
  );
}
