import React from 'react';

import {
  ActivityIndicator,
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';


type Props = TouchableOpacityProps & {
  title: string,
  color: ColorValue,
  backgroundColor: ColorValue,
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean;
}

export function Button({ title, color, backgroundColor, icon, isLoading = false,...rest}: Props){
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >

      {
        isLoading ?
          <ActivityIndicator color={color}/>
        :
        <>
          <AntDesign name={icon} sizes={24} style={styles.icon} />
          <Text style={[styles.title, { color }]}>
            {title}
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}