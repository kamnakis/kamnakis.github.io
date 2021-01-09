module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        100: '25rem'
      },
      fontSize: {
        '7xl': '5rem'
      },
      screens: {
        xs: { min: '550px', max: '640px' }
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      zIndex: ['hover']
    }
  },
  plugins: []
}
