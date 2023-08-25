import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {APP_ROUTES} from '../app-routes';
import {CommonActions} from '@react-navigation/native';

interface Props {
  navigation: any;
}
export const Screen1: FunctionComponent<Props> = ({navigation}) => {
  const moveBack = () => {
    const goBackAction = CommonActions.goBack();
    if (navigation && goBackAction) {
      navigation.dispatch(goBackAction);
    }
  };

  const goToScreen2 = () => {
    navigation?.navigate(APP_ROUTES.screen2, {});
  };
  console.warn('i am in screen 1');
  return (
    <View style={styles.container}>
      <Text> This is Screen 1</Text>
      <Button title="Go to Screen 2" onPress={goToScreen2} />
      <Button title="Sign out" onPress={moveBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
