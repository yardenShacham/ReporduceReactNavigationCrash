import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {APP_ROUTES} from './app-routes';

interface Props {
  navigation: any;
}
export const Login: FunctionComponent<Props> = ({navigation}) => {
  const handleLoginPressed = () => {
    navigation?.navigate(APP_ROUTES.root, {});
  };

  return (
    <View style={styles.container}>
      <Text> This is Login page</Text>
      <Button title="move to App" onPress={handleLoginPressed} />
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
