import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import cyberSecurityImage from '../assets/cyberSecurity.jpg';
import fullStackImage from '../assets/fullStack.jpg';
import networkingImage from '../assets/networking.jpg';
import codingImage from '../assets/coding.jpg';
import devImage from '../assets/dev.jpg';
import uiUxImage from '../assets/UI-UX.jpg';
import pythonImage from '../assets/python.jpg';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Typography,
  styled as muiStyled,
} from '@mui/material';

const services = [
  {
    address: 'Cyber Security',
    price: 'Protecting digital assets and data',
    confidence: 85,
    image: cyberSecurityImage,
  },
  {
    address: 'Full Stack Development',
    price: 'front-end and back-end development',
    confidence: 90,
    image: fullStackImage,
  },
  {
    address: 'Networking Solutions',
    price: 'Network infrastructure and support',
    confidence: 88,
    image: networkingImage,
  },
  {
    address: 'Software Development',
    price: 'Custom software solutions',
    confidence: 92,
    image: codingImage,
  },
  {
    address: 'Web Development',
    price: 'Modern web applications',
    confidence: 94,
    image: devImage,
  },
  {
    address: 'UI/UX Design',
    price: 'User-centered design solutions',
    confidence: 91,
    image: uiUxImage,
  },
  {
    address: 'Python Development',
    price: 'Versatile Python applications',
    confidence: 93,
    image: pythonImage,
  },
];

const DynamicCard = muiStyled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  minHeight: 420,
  borderRadius: 12,
  overflow: 'hidden',
  backgroundColor: '#fff',
  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
  border: '1px solid rgba(148, 163, 184, 0.18)',
}));

const ServiceImage = muiStyled('img')(() => ({
  width: '100%',
  height: 240,
  objectFit: 'cover',
  display: 'block',
}));

const ServiceContent = muiStyled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  flex: 1,
  padding: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },
}));

const Services = () => {
  return (
    <div>
      <Header sx={{ position: 'fixed', top: 0, zIndex: (theme) => theme.zIndex.appBar }} />

      <Typography
        sx={{
          color: 'orangered',
          letterSpacing: '0.08em',
          fontSize: { xs: '0.9rem', md: '1.125rem' },
          fontWeight: 700,
          mt: 10,
          textAlign: 'center',
          mb: 1,
          textTransform: 'uppercase',
        }}
      >
        Transforming the world with tech-driven solutions.
      </Typography>

      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 900,
          color: 'text.primary',
          letterSpacing: '-0.06em',
          textAlign: 'center',
          mb: 4,
        }}
      >
        THE TECH-ARCHITECT.
      </Typography>

      <Box
        component="section"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' },
          gridTemplateRows: { xs: 'auto', sm: 'repeat(3, auto)' },
          gridAutoFlow: { xs: 'row', sm: 'column' },
          gap: 3,
          width: 'min(100%, 1020px)',
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          pb: 6,
        }}
      >
        {services.map((service) => (
          <Box key={service.address}>
            <DynamicCard variant="outlined">
              <ServiceImage src={service.image} alt={service.address} />

              <ServiceContent>
                <div>
                  <Typography component="div" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
                    {service.address}
                  </Typography>

                  <Typography
                    component="div"
                    sx={{
                      color: 'primary.main',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      mt: 0.5,
                    }}
                  >
                    {service.price}
                  </Typography>
                </div>

                <Chip
                  size="small"
                  label={`Confidence score: ${service.confidence}%`}
                  sx={{
                    width: 'fit-content',
                    backgroundColor: 'orangered',
                    color: '#fff',
                    fontWeight: 600,
                    '& .MuiChip-label': {
                      px: 1.5,
                    },
                  }}
                />
              </ServiceContent>
            </DynamicCard>
          </Box>
        ))}
      </Box>

      <Footer />
    </div>
  );
};

export default Services;
