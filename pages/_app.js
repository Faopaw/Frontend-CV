import '../styles/globals.css'
// import { ChakraProvider } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
  // <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  return (
      <Component {...pageProps} />
  )
}

export default MyApp
