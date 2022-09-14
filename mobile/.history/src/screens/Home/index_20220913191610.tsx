import React from 'react';
import logoImg from '../../assets/logo-nlw-esports.png'

import {
  Image,
  View
} from 'react-native';

import { styles } from './styles';

export function Home(){
  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />
    </View>
  );
}