module.exports = {
    purge: {
        enabled: true,
        content: ['./src/**/*.vue'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#474747',
                'gradientFirst': '#948E99',
                'gradientSecond': '#485563'
            },
            fonts: {
                'sans': ['Open-Sans', 'sans-serif'],
            },
            screens: {
                'sm': {'min': '300px', 'max': '529px'},
                'md': {'min': '530px', 'max': '719px'},
                'lg': {'min': '720px', 'max': '919px'},
                'xl': {'min': '920px', 'max': '100vw'},
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
