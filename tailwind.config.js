/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{css,scss,html,js,php}", "./*.{html,php}", "./**/*.{html,php}"],
    important: true,
    theme: {
        screens: {
            '3xl': { 'max': '1740px' },
            '2xl': { 'max': '1600px' },
            'xl': { 'max': '1440px' },
            'lx': { 'max': '1350px' },
            'lg': { 'max': '1199px' },
            'mxl': { 'max': '1024px' },
            'mx': { 'max': '991px' },
            'md': { 'max': '767px' },
            'sm': { 'max': '576px' },
            'xs': { 'max': '374px' },
            'mxs': { 'max': '319px' },
        },
        colors: {
            'black': '#000',
            'white': '#FFF',
            'light-grayish-orange': '#F1EBE4',
            'millbrook': '#5A4B2E',
            'black-russian': '#242527',
            'greige': '#B0A596',
            'nevada': '#5c6f73',
            'green': '#008000',
        },
        spacing: {
            px: '1px',
            '0': '0px',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '6': '6px',
            '7': '7px',
            '10': '10px',
            '12': '12px',
            '13': '13px',
            '14': '14px',
            '15': '15px',
            '16': '16px',
            '18': '18px',
            '20': '20px',
            '22': '22px',
            '24': '24px',
            '25': '25px',
            '26': '26px',
            '28': '28px',
            '30': '30px',
            '32': '32px',
            '34': '34px',
            '35': '35px',
            '38': '38px',
            '40': '40px',
            '42': '42px',
            '44': '44px',
            '45': '45px',
            '48': '48px',
            '50': '50px',
            '52': '52px',
            '54': '54px',
            '55': '55px',
            '56': '56px',
            '58': '58px',
            '60': '60px',
            '65': '65px',
            '70': '70px',
            '75': '75px',
            '80': '80px',
            '85': '85px',
            '90': '90px',
            '95': '95px',
            '100': '100px',
            '105': '105px',
            '110': '110px',
            '115': '115px',
            '120': '120px',
            '125': '125px',
            '130': '130px',
            '135': '135px',
            '140': '140px',
            '145': '145px',
            '150': '150px',
            '155': '155px',
            '160': '160px',
            '165': '165px',
            '170': '170px',
            '175': '175px',
            '180': '180px',
            '185': '185px',
            '190': '190px',
            '195': '195px',
            '200': '200px',
            '220': '220px',
            '250': '250px',
            '600': '600px',
        },
        fontFamily: {
            'fs-fontawesome-free': 'Font Awesome 6 Free',
            'worksans': 'WorkSans',
            'kumelienpro': 'KumelienPro',
            'antrovectra': 'AntroVectra',
        },
        fontSize: {
            '12': ['12px', { lineHeight: '16px' }],
            '14': ['14px', { lineHeight: '18px' }],
            '15': ['15px', { lineHeight: '20px' }],
            '16': ['16px', { lineHeight: '22px' }],
            '18': ['18px', { lineHeight: '24px' }],
            '20': ['20px', { lineHeight: '24px' }],
            '22': ['22px', { lineHeight: '26px' }],
            '24': ['24px', { lineHeight: '30px' }],
            '26': ['26px', { lineHeight: '32px' }],
            '28': ['28px', { lineHeight: '36px' }],
            '30': ['30px', { lineHeight: '36px' }],
            '32': ['32px', { lineHeight: '38px' }],
            '33': ['33px', { lineHeight: '38px' }],
            '34': ['34px', { lineHeight: '38px' }],
            '35': ['35px', { lineHeight: '42px' }],
            '36': ['36px', { lineHeight: '42px' }],
            '38': ['38px', { lineHeight: '46px' }],
            '40': ['40px', { lineHeight: '48px' }],
            '42': ['42px', { lineHeight: '50px' }],
            '44': ['44px', { lineHeight: '50px' }],
            '45': ['45px', { lineHeight: '52px' }],
            '48': ['48px', { lineHeight: '56px' }],
            '52': ['52px', { lineHeight: '58px' }],
            '54': ['54px', { lineHeight: '62px' }],
            '56': ['56px', { lineHeight: '64px' }],
            '60': ['60px', { lineHeight: '68px' }],
            '62': ['62px', { lineHeight: '70px' }],
            '64': ['64px', { lineHeight: '72px' }],
            '68': ['68px', { lineHeight: '74px' }],
            '72': ['72px', { lineHeight: '78px' }],
            '74': ['74px', { lineHeight: '80px' }],
            '80': ['80px', { lineHeight: '86px' }],
            '84': ['84px', { lineHeight: '86px' }],
            '100': ['100px', { lineHeight: '90px' }],
            '115': ['115px', { lineHeight: '100px' }],
            '120': ['120px', { lineHeight: '108px' }],
            '150': ['150px', { lineHeight: '110px' }],
        },
        fontWeight: {
            thin: '100',
            extralight: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
            '10': '10px',
            '23': '23px',
            '16': '16px',
        },
        extend: {},
    },
    plugins: [],
}