import { ArrowForward, EmailOutlined, LocationOnOutlined, PhoneOutlined } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';

const contactDetails = [
  {
    label: 'Email',
    value: 'info@example.com',
    href: 'mailto:info@example.com',
    icon: EmailOutlined,
  },
  {
    label: 'Phone',
    value: '+234 000 000 0000',
    href: 'tel:+2340000000000',
    icon: PhoneOutlined,
  },
  {
    label: 'Location',
    value: 'Owerri, Imo State',
    icon: LocationOnOutlined,
  },
];

const Contactus = () => {
  return (
    <Box>
      <Header />

      <Box
        component="main"
        sx={{
          pt: { xs: 12, md: 15 },
          pb: { xs: 8, md: 12 },
          background:
            'radial-gradient(circle at 12% 8%, rgba(255, 69, 0, 0.10), transparent 28%), #f8fafc',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center', mb: { xs: 5, md: 8 } }}>
            <Typography
              sx={{
                color: 'orangered',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Contact us
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: '#101828',
                fontSize: { xs: '2.8rem', md: '4.4rem' },
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-0.055em',
              }}
            >
              Let’s start a conversation.
            </Typography>
            <Typography
              sx={{
                maxWidth: 620,
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1.05rem', md: '1.2rem' },
                lineHeight: 1.8,
                mt: 3,
              }}
            >
              Tell us what you’re working on, what you’d like to learn, or where
              technology could help. We’d be glad to hear from you.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' },
              gap: { xs: 3, md: 4 },
              alignItems: 'stretch',
            }}
          >
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: { xs: 'auto', md: 560 },
                p: { xs: 3, sm: 4, md: 5 },
                borderRadius: 4,
                color: '#fff',
                background:
                  'radial-gradient(circle at 95% 8%, rgba(255, 107, 53, 0.26), transparent 32%), linear-gradient(145deg, #101828, #1d2939)',
              }}
            >
              <Box>
                <Typography
                  component="h2"
                  sx={{ fontSize: '1.7rem', fontWeight: 850, letterSpacing: '-0.03em' }}
                >
                  Get in touch
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, mt: 1.5 }}>
                  Choose whichever way works best for you. Share a few details and
                  let’s take it from there.
                </Typography>

                <Stack spacing={3.5} sx={{ mt: 5 }}>
                  {contactDetails.map(({ label, value, href, icon: Icon }) => (
                    <Stack key={label} direction="row" spacing={2} alignItems="center">
                      <Box
                        sx={{
                          display: 'grid',
                          placeItems: 'center',
                          width: 48,
                          height: 48,
                          flexShrink: 0,
                          borderRadius: 2,
                          color: '#ff9b78',
                          backgroundColor: 'rgba(255,255,255,0.09)',
                        }}
                      >
                        <Icon />
                      </Box>
                      <Box>
                        <Typography sx={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.85rem' }}>
                          {label}
                        </Typography>
                        {href ? (
                          <Typography
                            component="a"
                            href={href}
                            sx={{
                              color: '#fff',
                              fontWeight: 700,
                              textDecoration: 'none',
                              '&:hover': { color: '#ff9b78' },
                            }}
                          >
                            {value}
                          </Typography>
                        ) : (
                          <Typography sx={{ color: '#fff', fontWeight: 700 }}>
                            {value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Box>

              <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', mt: 5 }}>
                We look forward to learning more about your goals.
              </Typography>
            </Paper>

            <Paper
              component="form"
              action="mailto:info@example.com"
              method="post"
              encType="text/plain"
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4, md: 5 },
                border: '1px solid #eaecf0',
                borderRadius: 4,
                backgroundColor: '#fff',
              }}
            >
              <Typography
                component="h2"
                sx={{ color: '#101828', fontSize: '1.7rem', fontWeight: 850, letterSpacing: '-0.03em' }}
              >
                Send us a message
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.7, mt: 1, mb: 3.5 }}>
                Fill in the form and your email app will open with the message ready to send.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                  gap: 2.5,
                }}
              >
                <TextField
                  required
                  fullWidth
                  id="contact-name"
                  name="Name"
                  label="Your name"
                  autoComplete="name"
                />
                <TextField
                  required
                  fullWidth
                  id="contact-email"
                  name="Email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                />
                <TextField
                  fullWidth
                  id="contact-topic"
                  name="Topic"
                  label="What can we help with?"
                  select
                  defaultValue=""
                  sx={{ gridColumn: { sm: '1 / -1' } }}
                >
                  <MenuItem value="Cybersecurity">Cybersecurity</MenuItem>
                  <MenuItem value="Software and web development">
                    Software and web development
                  </MenuItem>
                  <MenuItem value="Networking">Networking</MenuItem>
                  <MenuItem value="Training and learning">Training and learning</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <TextField
                  required
                  fullWidth
                  id="contact-message"
                  name="Message"
                  label="Your message"
                  multiline
                  minRows={5}
                  sx={{ gridColumn: { sm: '1 / -1' } }}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  mt: 3,
                  px: 3,
                  py: 1.4,
                  borderRadius: 2,
                  backgroundColor: 'orangered',
                  fontWeight: 700,
                  '&:hover': { backgroundColor: '#d93b00' },
                }}
              >
                Prepare message
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Contactus;
