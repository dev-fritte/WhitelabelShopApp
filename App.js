/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppContainer from './shop/components/common/AppContainer';

const App: () => React$Node = () => {
    console.log('rerender App');

    return <AppContainer />;
};

export default App;
