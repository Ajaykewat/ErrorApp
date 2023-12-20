import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import withErrorHandling from '../component/withErrorHandling';
import ErrorOverlay from '../component/ErrorOverlay';
import FlashMessage from 'react-native-flash-message';


const Stack = createNativeStackNavigator();


const Root = () => {
  return (
       <NavigationContainer>
<Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      <FlashMessage statusBarHeight={30} position="top" />
    </NavigationContainer>
    
  )
}

export default withErrorHandling(Root)
