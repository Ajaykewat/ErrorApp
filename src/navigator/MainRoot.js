import React from 'react'
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducer/rootReducer';
import { createStore } from 'redux';
import Root from './Root';
import ErrorOverlay from '../component/ErrorOverlay';
import withErrorHandling from '../component/withErrorHandling';
import FlashMessage from "react-native-flash-message";


const store = createStore(rootReducer);

const MainRoot = () => {

  const RootComponentWithErrors = withErrorHandling(Root);

  return (
    <Provider store={store}>
    {/* <ErrorOverlay /> */}

    <RootComponentWithErrors/>
    </Provider>
  )
}

export default MainRoot
