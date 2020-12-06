import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './ListView';

export default function ProductView({route, params}) {
   const { id } = route.params;

  return (
    <View style={styles.container}>
    <Text>Product id is {JSON.stringify(id)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
