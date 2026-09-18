import { Font, StyleSheet } from '@react-pdf/renderer';
import MontserratThin from '../assets/fonts/Montserrat-Thin.ttf';
import MontserratThinItalic from '../assets/fonts/Montserrat-ThinItalic.ttf';
import MontserratExtraLight from '../assets/fonts/Montserrat-ExtraLight.ttf';
import MontserratExtraLightItalic from '../assets/fonts/Montserrat-ExtraLightItalic.ttf';
import MontserratLight from '../assets/fonts/Montserrat-Light.ttf';
import MontserratLightItalic from '../assets/fonts/Montserrat-LightItalic.ttf';
import MontserratRegular from '../assets/fonts/Montserrat-Regular.ttf';
import MontserratRegularItalic from '../assets/fonts/Montserrat-Italic.ttf';
import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratMediumItalic from '../assets/fonts/Montserrat-MediumItalic.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratSemiBoldItalic from '../assets/fonts/Montserrat-SemiBoldItalic.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import MontserratBoldItalic from '../assets/fonts/Montserrat-BoldItalic.ttf';
import MontserratExtraBold from '../assets/fonts/Montserrat-ExtraBold.ttf';
import MontserratExtraBoldItalic from '../assets/fonts/Montserrat-ExtraBoldItalic.ttf';
import MontserratBlack from '../assets/fonts/Montserrat-Black.ttf';
import MontserratBlackItalic from '../assets/fonts/Montserrat-BlackItalic.ttf';
import CormorantUnicaseLight from '../assets/fonts/CormorantUnicase-Light.ttf';
import CormorantUnicaseRegular from '../assets/fonts/CormorantUnicase-Regular.ttf';
import CormorantUnicaseMedium from '../assets/fonts/CormorantUnicase-Medium.ttf';
import CormorantUnicaseSemiBold from '../assets/fonts/CormorantUnicase-SemiBold.ttf';
import CormorantUnicaseBold from '../assets/fonts/CormorantUnicase-Bold.ttf';

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: MontserratThin,
      fontWeight: 100,
    },
    {
      src: MontserratThinItalic,
      fontWeight: 100,
      fontStyle: 'italic',
    },
    {
      src: MontserratExtraLight,
      fontWeight: 200,
    },
    {
      src: MontserratExtraLightItalic,
      fontWeight: 200,
      fontStyle: 'italic',
    },
    {
      src: MontserratLight,
      fontWeight: 300,
    },
    {
      src: MontserratLightItalic,
      fontWeight: 300,
      fontStyle: 'italic',
    },
    {
      src: MontserratRegular,
      fontWeight: 400,
    },
    {
      src: MontserratRegularItalic,
      fontWeight: 400,
      fontStyle: 'italic',
    },
    {
      src: MontserratMedium,
      fontWeight: 500,
    },
    {
      src: MontserratMediumItalic,
      fontWeight: 500,
      fontStyle: 'italic',
    },
    {
      src: MontserratSemiBold,
      fontWeight: 600,
    },
    {
      src: MontserratSemiBoldItalic,
      fontWeight: 600,
      fontStyle: 'italic',
    },
    {
      src: MontserratBold,
      fontWeight: 700,
    },
    {
      src: MontserratBoldItalic,
      fontWeight: 700,
      fontStyle: 'italic',
    },
    {
      src: MontserratExtraBold,
      fontWeight: 800,
    },
    {
      src: MontserratExtraBoldItalic,
      fontWeight: 800,
      fontStyle: 'italic',
    },
    {
      src: MontserratBlack,
      fontWeight: 900,
    },
    {
      src: MontserratBlackItalic,
      fontWeight: 900,
      fontStyle: 'italic',
    },
  ],
});

Font.register({
  family: 'Cormorant Unicase',
  fonts: [
    {
      src: CormorantUnicaseLight,
      fontWeight: 300,
    },
    {
      src: CormorantUnicaseRegular,
      fontWeight: 400,
    },
    {
      src: CormorantUnicaseMedium,
      fontWeight: 500,
    },
    {
      src: CormorantUnicaseSemiBold,
      fontWeight: 600,
    },
    {
      src: CormorantUnicaseBold,
      fontWeight: 700,
    },
  ],
});

export type HeadingLevel = 1 | 2 | 3 | 4;

export const styles = StyleSheet.create({
  page: {
    paddingTop: '2cm',
    paddingBottom: '2cm',
    paddingLeft: '2.5cm',
    paddingRight: '2.5cm',
    fontFamily: 'Montserrat',
    fontSize: 12,
    textAlign: 'justify',
  },

  header: {
    position: 'absolute',
    top: '1cm',
    left: '2.5cm',
    right: '2.5cm',
  },

  headerText: {
    textAlign: 'right',
  },

  footer: {
    position: 'absolute',
    bottom: '1cm',
    left: '2.5cm',
    right: '2.5cm',
    textAlign: 'right',
  },

  h1: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 27,
  },

  h2: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 24,
  },

  h3: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 21,
  },

  h4: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 18,
  },

  h5: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 15,
  },

  h6: {
    fontFamily: 'Cormorant Unicase',
    fontSize: 12,
  },

  list: {
    flexDirection: 'column',
    width: '100%',
  },

  listItem: {
    flexDirection: 'row',
    gap: 6,
  },

  number: {
    width: 24,
    textAlign: 'right',
  },

  content: {
    flex: 1,
  },
});
