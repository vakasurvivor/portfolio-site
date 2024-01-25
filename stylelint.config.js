/** Stylelint
 *  @see https://stylelint.io/user-guide/configure
 */

/** @type {import('stylelint').Config} */

export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-css-modules',
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  ignoreFiles: ['./node_modules/**', './dist/**'],
};