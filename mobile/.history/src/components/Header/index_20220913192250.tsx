import React from 'react';

import {
  View, Text, ViewProps
} from 'react-native';



import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}


export function Header(){
  return (
    <View style={styles.container}>

    </View>
  );
}