const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
    customForms: theme => ({
      dark: {
        'input, textarea, multiselect, checkbox, radio': {
          backgroundColor: theme('colors.gray.900'),
          border: theme('colors.gray.700')
        },
        select: {
          backgroundColor: theme('colors.gray.600'),
        },
      },
    }),
  },
  variants: {
    // backgroundColor: [
    //   'dark',
    //   'dark-hover',
    //   'dark-group-hover',
    //   'dark-even',
    //   'dark-odd',
    // ],
    // borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    // textColor: ['dark', 'dark-hover', 'dark-active'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/ui'),
  ],
}
