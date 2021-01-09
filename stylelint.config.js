module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-scss'
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'mixin',
          'for',
          'function',
          'return',
          'include'
        ]
      }
    ],
    'scss/selector-no-redundant-nesting-selector': true,

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'mixin',
          'for',
          'function',
          'return',
          'include'
        ]
      }
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
}
