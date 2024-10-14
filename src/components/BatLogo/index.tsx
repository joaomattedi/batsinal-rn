import React from 'react';
import { Dimensions, Image, View } from 'react-native';

import { styles } from './styles';

export function BatLogo() {
  const dimensions = Dimensions.get('window');   
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;

  return (
    <View style={styles.container} >
      <Image
        style={{height:imageHeight/2,width:imageWidth}}
        resizeMode='contain'
        source={require('../../../assets/Batman-Logo.png')}
      />
    </View>
  );
}