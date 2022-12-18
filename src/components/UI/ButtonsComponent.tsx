import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextStyles} from '../../styles/TextStyles';

export interface ButtonsComponentProps {
  title: string;
  onPress: Function;
  width: number | undefined;
}
const ButtonsComponent = ({title, onPress, width}: ButtonsComponentProps) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {width: width}]}
      onPress={() => onPress()}>
      <Text style={TextStyles.subHeaderWhite}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonsComponent;

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    height: 48,
    paddingHorizontal: 12,
    marginVertical: 6,
    borderRadius: 4,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
