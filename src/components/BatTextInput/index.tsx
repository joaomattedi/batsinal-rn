import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

export function BatTextInput({ onChange, placeholder = '', value, type = 'default' }: any) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      keyboardType={type}
    />
  );
}