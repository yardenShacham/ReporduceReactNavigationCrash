import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {APP_ROUTES} from '../app-routes';

interface Props {
  navigation: any;
}

export const Screen2: FunctionComponent<Props> = ({navigation}) => {

  const goToScreen3and4 = () => {
    // here is when it's going to crash
    navigation?.navigate(APP_ROUTES.screen3, {});
    navigation?.navigate(APP_ROUTES.screen4, {});
  };

  const goToScreen3and4WithResetOption = () => {
    // here is when it's going to crash
    navigation.dispatch((state: any) => {
      const newRoutes = [
          ...state.routes,
        {name:APP_ROUTES.screen3,params:{}},
        {name:APP_ROUTES.screen4,params:{}},
      ]


      const newNavigationState = {
        ...state,
        routes: newRoutes,
        index: newRoutes.length - 1,
        stale: true,
        type: 'stack',
      };

      return CommonActions.reset(newNavigationState);
    });
  };

  const moveBack = () => {
    const goBackAction = CommonActions.goBack();
    if (navigation && goBackAction) {
      navigation.dispatch(goBackAction);
    }
  };

  return (
    <View style={styles.container}>
      <Text> This is Screen 2</Text>
      <Button title="move back" onPress={moveBack} />
      <Button title="go screen 3 and 4" onPress={goToScreen3and4} />
      <Button title="go screen 3 and 4 with RESET option" onPress={goToScreen3and4WithResetOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
