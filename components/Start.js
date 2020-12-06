import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Start() {
  const [id, setId] = useState('');
  const [product, setWines] = useState({});

  const getWines = () => {
    const url = 'https://world.openfoodfacts.org/api/v0/product/'+id;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
       setWines(responseJson);
    })
    .catch((error) => {
      Alert.alert('Error' , error);
    });
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.code}
        renderItem={({item}) => <Text>{item.product_name}</Text>}
        ItemSeparatorComponent={listSeparator}
        data={product}
      />
      <TextInput
        style={{fontSize: 18, width: 200}}
        value={id}
        placeholder="Bar code"
        onChangeText={(id) => setId(id)}
      />
     <Button title="Find" onPress={getWines} />
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
