/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppStack from './src/routes/AppStack';
import {Provider} from 'react-redux';
import {persistor, store} from './src/state/store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
      </PersistGate>
    </Provider>
  );
}

export default App;
