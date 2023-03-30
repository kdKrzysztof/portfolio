import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from 'components/layout';
import { Container, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

theme = responsiveFontSizes(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxSizing: 'border-box',
          margin: '0'
        }}
        disableGutters
        maxWidth={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </ThemeProvider>
  );
}
