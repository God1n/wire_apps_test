module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|react-native-vector-icons)',
  ],
  setupFiles: ['./jest-setup.js'],
};
