/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    screens: {
      desktop: '768px',
    },
    fontFamily: {
      serif: ['Noto Serif TC', 'serif'],
    },
    fontSize: {
      h0: '100px',
      h1: '48px',
      h2: '40px',
      h3: '32px',
      h4: '28px',
      h5: '24px',
      h6: '20px',
      title: [
        '16px',
        {
          fontWeight: '700',
        },
      ],
      subtitle: [
        '14px',
        {
          fontWeight: '700',
        },
      ],
      body: '16px',
      body2: '14px',
      tiny: '12px',
    },
    lineHeight: {
      heading: '120%',
      normal: '150%',
    },
    letterSpacing: {
      DEFAULT: '1px',
      heading: '5%',
      normal: '2%',
    },
    colors: {
      primary: {
        120: '#7B6651',
        100: '#BF9D7D',
        80: '#AE9984',
        60: '#E1D1C2',
        40: '#F1EAE4',
        10: '#F7F2EE',
        tint: '#FAF7F5',
      },
      success: {
        120: '#299F65',
        100: '#52DD7E',
        20: '#BCFBBD',
        10: '#E8FEE7',
      },
      info: {
        120: '#1D66AC',
        100: '#3BADEF',
        20: '#B1EFFD',
        10: '#E6FBFE',
      },
      alert: {
        120: '#C22538',
        100: '#DA3E51',
        20: '#F5CCD1',
        10: '#FDECEF',
      },
      neutral: {
        bg: '#140F0A',
        black: '#000000',
        80: '#4B4B4B',
        60: '#909090',
        40: '#ECECEC',
        10: '#F9F9F9',
        white: '#FFFFFF',
        transparent: 'transparent',
      },
    },
    extend: {
      boxShadow: {
        neutral: '0px 4px 80px 0px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        15: '60px',
        18: '72px',
        25: '100px',
        29: '116px',
        30: '120px',
        45: '180px',
        50: '200px',
        78: '312px',
      },
      backgroundImage: {
        'primary-to-l': 'linear-gradient(90deg, #be9c7c 0%, #fff 100%)',
        'primary-to-b': 'linear-gradient(180deg, #be9c7c 0%, #fff 100%)',
      },
      borderRadius: {
        10: '40px',
        20: '80px',
      },
    },
  },
  plugins: [],
};
