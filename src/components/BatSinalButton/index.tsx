import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export function BatSinalButton({ onPress, text = 'Activate BatSignal' }: any) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}