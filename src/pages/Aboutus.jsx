import { Link as RouterLink } from 'react-router-dom';
import {
  ArrowForward,
  Code,
  Groups,
  Lightbulb,
  NetworkCheck,
  Security,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import founderImage from '../assets/semion.jpg';

const focusAreas = [
  {
    title: 'Cybersecurity',
    description:
      'Practical security thinking to help protect systems, information, and the people who depend on them.',
    icon: Security,
  },
  {
    title: 'Software development',
    description:
      'Thoughtful web and software solutions designed to make complex ideas useful and accessible.',
    icon: Code,
  },
  {
    title: 'Networking',
    description:
      'Reliable network foundations that keep teams, tools, and technology connected.',
    icon: NetworkCheck,
  },
];

const principles = [
  {
    title: 'Learn by doing',
    description:
      'We value hands-on practice, clear explanations, and projects that connect learning with real work.',
    icon: Lightbulb,
  },
  {
    title: 'People come first',
    description:
      'Technology works best when it is built with care for the people who use it.',
    icon: Groups,
  },
];

const Aboutus = () => {
  return (
    <Box>
      <Header />

      <Box
        component="main"
        sx={{
          pt: { xs: 12, md: 15 },
          overflow: 'hidden',
          background:
            'radial-gradient(circle at 85% 5%, rgba(255, 69, 0, 0.10), transparent 28%), #f8fafc',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" sx={{ pb: { xs: 8, md: 12 } }}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: 'orangered',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  mb: 2,
                }}
              >
                About Tech-Architect
              </Typography>
              <Typography
                component="h1"
                sx={{
                  maxWidth: 650,
                  color: '#101828',
                  fontSize: { xs: '2.8rem', md: '4.4rem' },
                  fontWeight: 900,
                  lineHeight: 1.04,
                  letterSpacing: '-0.055em',
                }}
              >
                Building skills for a more connected world.
              </Typography>
              <Typography
                sx={{
                  maxWidth: 570,
                  color: 'text.secondary',
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  mt: 3,
                }}
              >
                We bring technology and practical learning together—helping people
                understand digital tools, develop useful solutions, and take their
                next step with confidence.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                <Button
                  component={RouterLink}
                  to="/Services"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    px: 3,
                    py: 1.4,
                    borderRadius: 2,
                    backgroundColor: 'orangered',
                    fontWeight: 700,
                    '&:hover': { backgroundColor: '#d93b00' },
                  }}
                >
                  Explore our services
                </Button>
                <Button
                  component={RouterLink}
                  to="/ContactUs"
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: 1.4,
                    borderRadius: 2,
                    borderColor: 'rgba(16, 24, 40, 0.2)',
                    color: '#101828',
                    fontWeight: 700,
                  }}
                >
                  Get in touch
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  maxWidth: 500,
                  mx: 'auto',
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 5,
                  backgroundColor: '#fff',
                  boxShadow: '0 30px 80px rgba(16, 24, 40, 0.14)',
                  transform: { md: 'rotate(2deg)' },
                }}
              >
                <Box
                  component="img"
                  src={founderImage}
                  alt="Technology and digital learning"
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: { xs: 300, sm: 400 },
                    objectFit: 'cover',
                    borderRadius: 3,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: 12, md: -24 },
                    bottom: { xs: 12, md: 28 },
                    maxWidth: 260,
                    p: 2.5,
                    borderRadius: 3,
                    backgroundColor: '#101828',
                    color: '#fff',
                    boxShadow: '0 14px 35px rgba(16, 24, 40, 0.2)',
                  }}
                >
                  <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                    Technology with purpose
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>
                    Useful skills. Thoughtful solutions. Lasting impact.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#fff' }}>
          <Container maxWidth="lg">
            <Box sx={{ maxWidth: 680, mx: 'auto', textAlign: 'center', mb: 6 }}>
              <Typography
                sx={{
                  color: 'orangered',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                What we do
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: '#101828',
                  fontSize: { xs: '2rem', md: '3rem' },
                  fontWeight: 850,
                  letterSpacing: '-0.04em',
                }}
              >
                Technology made practical
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mt: 2 }}>
                Our work brings together essential technical skills and a practical,
                people-focused approach.
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {focusAreas.map(({ title, description, icon: Icon }) => (
                <Grid item xs={12} md={4} key={title}>
                  <Card
                    elevation={0}
                    sx={{
                      height: '100%',
                      p: { xs: 1, md: 2 },
                      border: '1px solid #eaecf0',
                      borderRadius: 3,
                      transition: 'transform 180ms ease, box-shadow 180ms ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 18px 40px rgba(16, 24, 40, 0.09)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: 'grid',
                          placeItems: 'center',
                          width: 52,
                          height: 52,
                          mb: 3,
                          borderRadius: 2,
                          color: 'orangered',
                          backgroundColor: 'rgba(255, 69, 0, 0.1)',
                        }}
                      >
                        <Icon />
                      </Box>
                      <Typography component="h3" variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                        {title}
                      </Typography>
                      <Typography sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 11 } }}>
          <Grid container spacing={4} alignItems="stretch">
            {principles.map(({ title, description, icon: Icon }) => (
              <Grid item xs={12} md={6} key={title}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2.5,
                    height: '100%',
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    backgroundColor: '#fff',
                    boxShadow: '0 10px 35px rgba(16, 24, 40, 0.06)',
                  }}
                >
                  <Box sx={{ color: 'orangered', flexShrink: 0, mt: 0.5 }}>
                    <Icon fontSize="large" />
                  </Box>
                  <Box>
                    <Typography component="h3" variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                      {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Aboutus;
