import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'gold',

  colors: {
    gold: [
      '#F8F5EF',
      '#EDE5D8',
      '#DFD1BD',
      '#D0BFA2',
      '#C1AD8D',
      '#AF926C',
      '#9A7D58',
      '#836947',
      '#6D563A',
      '#57432E',
    ],

    red: [
      '#FCEEEE',
      '#F8DCDC',
      '#F2B8B8',
      '#E88E8E',
      '#D96666',
      '#C74646',
      '#B53636',
      '#9B2C2C',
      '#812323',
      '#671B1B',
    ],
  },

  fontFamily: 'Montserrat, sans-serif',

  headings: {
    fontFamily: 'Cormorant Unicase, serif',
    sizes: {
      h1: {
        fontSize: 'clamp(1.5rem, 6.25vw, 3rem)',
      },
      h2: {
        fontSize: 'clamp(2rem, 6.25vw, 3rem)',
      },
      h3: {
        fontSize: 'clamp(1.5rem, 5.21vw, 2.5rem)',
      },
      h4: {
        fontSize: 'clamp(1.25rem, 4.16vw, 2rem)',
      },
      h5: {
        fontSize: 'clamp(1rem, 3.125vw, 1.5rem)',
      },
      h6: {
        fontSize: 'clamp(1rem, 2.6vw, 1.25rem)',
      },
    },
  },
});
