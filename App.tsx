import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {APP_ROUTES} from './app-routes';
import {Login} from './login';
import {Root} from './root';

enableScreens();

const AppStack: any = createNativeStackNavigator();

const Navigator = ({}: any) => (
  <NavigationContainer>
    <AppStack.Navigator
      initialRouteName={APP_ROUTES.auth}
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}>
      <AppStack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
        name={APP_ROUTES.auth}
        component={Login}
      />
      <AppStack.Screen
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
        name={APP_ROUTES.root}
        component={Root}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);

class App extends React.Component<any, any> {
  render() {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigator />
      </GestureHandlerRootView>
    );
  }
}

export default App;
