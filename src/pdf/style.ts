import { Font, StyleSheet } from '@react-pdf/renderer';

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: '/src/assets/fonts/Montserrat-Thin.ttf',
      fontWeight: 100,
    },
    {
      src: '/src/assets/fonts/Montserrat-ThinItalic.ttf',
      fontWeight: 100,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraLight.ttf',
      fontWeight: 200,
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraLightItalic.ttf',
      fontWeight: 200,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-Light.ttf',
      fontWeight: 300,
    },
    {
      src: '/src/assets/fonts/Montserrat-LightItalic.ttf',
      fontWeight: 300,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/src/assets/fonts/Montserrat-RegularItalic.ttf',
      fontWeight: 400,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-Medium.ttf',
      fontWeight: 500,
    },
    {
      src: '/src/assets/fonts/Montserrat-MediumItalic.ttf',
      fontWeight: 500,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-SemiBold.ttf',
      fontWeight: 600,
    },
    {
      src: '/src/assets/fonts/Montserrat-SemiBoldItalic.ttf',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-Bold.ttf',
      fontWeight: 700,
    },
    {
      src: '/src/assets/fonts/Montserrat-BoldItalic.ttf',
      fontWeight: 700,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraBold.ttf',
      fontWeight: 800,
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraBoldItalic.ttf',
      fontWeight: 800,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraBold.ttf',
      fontWeight: 800,
    },
    {
      src: '/src/assets/fonts/Montserrat-ExtraBoldItalic.ttf',
      fontWeight: 800,
      fontStyle: 'italic',
    },
    {
      src: '/src/assets/fonts/Montserrat-Black.ttf',
      fontWeight: 900,
    },
    {
      src: '/src/assets/fonts/Montserrat-BlackItalic.ttf',
      fontWeight: 900,
      fontStyle: 'italic',
    },
  ],
});

Font.register({
  family: 'Cormorant Unicase',
  fonts: [
    {
      src: '/src/assets/fonts/CormorantUnicase-Light.ttf',
      fontWeight: 300,
    },
    {
      src: '/src/assets/fonts/CormorantUnicase-Regular.ttf',
      fontWeight: 400,
    },
    {
      src: '/src/assets/fonts/CormorantUnicase-Medium.ttf',
      fontWeight: 500,
    },
    {
      src: '/src/assets/fonts/CormorantUnicase-SemiBold.ttf',
      fontWeight: 600,
    },
    {
      src: '/src/assets/fonts/CormorantUnicase-Bold.ttf',
      fontWeight: 700,
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    marginTop: '2cm',
    marginBottom: '2cm',
    marginLeft: '2.5cm',
    marginRight: '2.5cm',
    fontFamily: 'Montserrat',
    fontSize: 12,
  },
  header: {
    position: 'absolute',
    top: '-1cm',
    height: '1cm',
  },
  title: {
    fontFamily: 'Cormorant Unicase',
    fontWeight: 600,
    fontSize: 24,
  },
});
