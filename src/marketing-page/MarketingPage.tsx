import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoVideo from './components/DemoVideo';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <Features />
        <Divider />
        <DemoVideo />
        <Divider />
        <WaitlistForm />
        <Divider />
         <Footer />
      </div>
    </AppTheme>
  );
}
