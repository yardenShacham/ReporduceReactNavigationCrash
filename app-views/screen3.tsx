import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {APP_ROUTES} from '../app-routes';

interface Props {
  navigation: any;
}
export const Screen3: FunctionComponent<Props> = ({navigation}) => {
  const goScreen4 = () => {
    navigation?.navigate(APP_ROUTES.screen4, {});
  };
  const moveBack = () => {
    const goBackAction = CommonActions.goBack();
    if (navigation && goBackAction) {
      navigation.dispatch(goBackAction);
    }
  };

  return (
    <View style={styles.container}>
      <Text> This is Screen 3</Text>
      <Button title="move back" onPress={moveBack} />
      <Button title="go to screen 4" onPress={goScreen4} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
