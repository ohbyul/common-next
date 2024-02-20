import type { Config } from 'tailwindcss';

const config: Config = {
   content: [
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
      './node_modules/flowbite-react/lib/**/*.js',
      './public/**/*.html'
   ],
   theme: {
      extend: {
         fontFamily: {
            pretendard:[
               'Pretendard',
               'sans-serif',
            ],
         },
         fontSize: {
            'lg': ['1.125rem',//18px
               { lineHeight: '1.75rem', } //28px
            ],
            'xl': ['1.25rem',//20px
               { lineHeight: '1.75rem', }
            ],
            '2xl': ['1.5rem', //24px
               {lineHeight: '2rem',} //32px
            ],
            '3xl': ['1.75rem', //28px
               {lineHeight: '2.375rem',} //34px
            ],
            '4xl': ['2rem',//32px
               {lineHeight: '2.625rem',}//42px
            ],
            '5xl': ['2.5rem',//40px
               {lineHeight: '3.25rem',} //52px
            ],
            '6xl': ['3rem', //48px
               {lineHeight: '3.875rem',} //62px
            ],
            //Display-----------------------------------------------------------
            '7xl': ['3.5rem', { //56px
               lineHeight: '4.5rem', //72px
            }],
            '8xl': ['4rem', { //64px
               lineHeight: '5rem', //80px
            }],
            '9xl': ['4.5rem', { //72px
               lineHeight: '5.625rem', //90px
            }],
            '10xl': [
               '5rem', { //80px
               lineHeight: '6.25rem', //100px
            }],
            '11xl': ['5.5rem', { //88px
               lineHeight: '7.125rem', //114px
            }],
            '12xl': ['6rem', { //96px
               lineHeight: '7.5rem', //120px
            }],
            '13xl': ['8rem', {
               lineHeight: '1',
               fontWeight: '700',
            }],
         },
         colors: {
            natural: {
               50: '#ececec',
               100: '#e1e1e1',
               200: '#bbbbbb',
               300: '#999999',
               400: '#888888',
               500: '#767676',
               600: '#666666',
               700: '#505050',
               800: '#333333',
               900: '#111111',
            },
            primary: {
               50: '#edeff1',
               100: '#d1d8dc',
               200: '#b3bec4',
               300: '#94a4ad',
               400: '#7d8f9b',
               500: '#667c89',
               600: '#596d79',
               700: '#495a63',
               800: '#3a474e',
               900: '#283237',
            },
            secondary: {
               50: '#ece7f5',
               100: '#cfc5e6',
               200: '#af9fd7',
               300: '#9078c7',
               400: '#785bbc',
               500: '#6040b0',
               600: '#583bab',
               700: '#4c33a2',
               800: '#402d9a',
               900: '#2d218c',
            },
            point: {
               50: '#fce4ec',
               100: '#efbecf',
               200: '#e694b0',
               300: '#df6c92',
               400: '#da4f7a',
               500: '#d63964',
               600: '#c63461',
               700: '#b22e5b',
               800: '#9f2857',
               900: '#7d1e4e',
            },
            red: {
               50: '#fcecee',
               100: '#f7cfd3',
               200: '#e39e9c',
               300: '#d77976',
               400: '#de5e56',
               500: '#e15241',
               600: '#d3483e',
               700: '#c23e38',
               800: '#b63731',
               900: '#b71c1c',
            },
            orange: {
               50: '#fdf3e2',
               100: '#fae1b8',
               200: '#f7cd8b',
               300: '#f4b961',
               400: '#f3aa47',
               500: '#f19c38',
               600: '#ec9135',
               700: '#e68231',
               800: '#df732c',
               900: '#d55b26',
            },
            yellow: {
               50: '#fffde9',
               100: '#fef9ca',
               200: '#fdf4a8',
               300: '#fdf088',
               400: '#fced72',
               500: '#fcea60',
               600: '#f7d859',
               700: '#f2c14f',
               800: '#edaa46',
               900: '#e68437',
            },
            green: {
               50: '#eaf4ea',
               100: '#cee5cb',
               200: '#afd4ab',
               300: '#91c48a',
               400: '#7bb872',
               500: '#258716',
               600: '#4aa63c',
               700: '#107700',
               800: '#39982a',
               900: '#0c5b00',
            },
            teal: {
               50: '#e4f6f9',
               100: '#beeaf1',
               200: '#96dce8',
               300: '#73cede',
               400: '#5fc4d7',
               500: '#54bad1',
               600: '#4caabe',
               700: '#4295a5',
               800: '#38818d',
               900: '#275f63',
            },
            blue: {
               50: '#e8eaf6',
               100: '#c5cae9',
               200: '#9fa8da',
               300: '#7986cb',
               400: '#5c6bc0',
               500: '#3f51b5',
               600: '#3a949ab',
               700: '#303f9f',
               800: '#2a378e',
               900: '#1b2679',
            },
            purple: {
               50: '#f1e6f4',
               100: '#dbc0e4',
               200: '#c597d4',
               300: '#af6ec3',
               400: '#9f50b6',
               500: '#8f36aa',
               600: '#8331a4',
               700: '#712c9c',
               800: '#612694',
               900: '#441d87',
            },
            brown: {
               50: '#eeebe9',
               100: '#d5ccc9',
               200: '#b9aba5',
               300: '#9d8980',
               400: '#886f65',
               500: '#74564a',
               600: '#684d43',
               700: '#594139',
               800: '#4a352f',
               900: '#3b2824',
            },
            gray:{
               50: '#f7f7fb',
               100: '#f1f5f9',
               200: '#f1f1f5',
               300: '#cbd5e1',
               400: '#e5e5ec',
               500: '#64748b',
               600: '#475569',
               700: '#334155',
               800: '#1e293b',
               900: '#0f172a',
            },
            warning:{
               100:'#ffaa00',
            },
            success:{
               100:'#04b014',
            },
            failure:{
               100:'#dc0000',
            },
         },
         maxWidth: {
            '8xl': '90rem',
         },
         lineHeight:{
            inherit:'inherit'
         },
         translate: {
            'neg-1/2': '-50%'
         },
      },
   },
   plugins: [require('flowbite/plugin')],
};
export default config;
