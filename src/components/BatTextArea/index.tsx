import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './styles';

export function BatTextArea({ onChange, placeholder = '', value, numberOfLines = 2 }: any) {
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      multiline={true}
      numberOfLines={numberOfLines}
    />
  );
}