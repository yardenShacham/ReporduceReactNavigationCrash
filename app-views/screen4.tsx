import React, {FunctionComponent} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CommonActions} from '@react-navigation/native';

interface Props {
  navigation: any;
}
export const Screen4: FunctionComponent<Props> = ({navigation}) => {
  const moveBack = () => {
    const goBackAction = CommonActions.goBack();
    if (navigation && goBackAction) {
      navigation.dispatch(goBackAction);
    }
  };

  return (
    <View style={styles.container}>
      <Text> This is Screen 4</Text>
      <Button title="move back" onPress={moveBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
