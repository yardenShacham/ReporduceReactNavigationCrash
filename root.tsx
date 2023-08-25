import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {APP_ROUTES} from './app-routes';
import {Screen1} from './app-views/screen1';
import {Screen2} from './app-views/screen2';
import {Screen3} from './app-views/screen3';
import {Screen4} from './app-views/screen4';

interface Props {}

const RootStack: any = createNativeStackNavigator();

export const Root: FunctionComponent<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <RootStack.Navigator
        initialRouteName={APP_ROUTES.screen1}
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}>
        <RootStack.Screen
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          name={APP_ROUTES.screen1}
          component={Screen1}
        />
        <RootStack.Screen
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          name={APP_ROUTES.screen2}
          component={Screen2}
        />
        <RootStack.Screen
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          name={APP_ROUTES.screen3}
          component={Screen3}
        />
        <RootStack.Screen
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
          name={APP_ROUTES.screen4}
          component={Screen4}
        />
      </RootStack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
  },
});
