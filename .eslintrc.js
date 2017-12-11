module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  parser: 'babel-eslint',
  env: {
    node: true,
  },
  rules: {
    'no-console': 0
    // Additional, per-project rules...
  }
}
