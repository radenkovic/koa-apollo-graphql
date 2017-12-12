module.exports = {
  extends: ['eslint:recommended', 'airbnb-base'],
  parser: 'babel-eslint',
  plugins: ['import'],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  env: {
    node: true,
  },
  rules: {
    'no-console': 0
    // Additional, per-project rules...
  }
}
