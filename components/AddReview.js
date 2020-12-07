import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { ListItem, Image, Avatar, Rating,} from 'react-native-elements';

export default function AddReview () {
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // const { id } = route.params;
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
      <Text style={{fontSize: 30, fontWeight: "bold"}}>Add a review for product{"\n"}Zinfandel Rosé</Text>
      <TextInput
        style={{fontSize: 25, width: 200}}
        value={user}
        placeholder="Username"
        onChangeText={(user) => setUser(user)}
      />
      <TextInput
        style={{fontSize: 25, width: 200}}
        value={title}
        placeholder="Title for the review"
        onChangeText={(title) => setTitle(title)}
      />
      <TextInput
        style={{fontSize: 25, width: 200}}
        value={body}
        placeholder="Review text"
        onChangeText={(body) => setBody(body)}
      />
      <Rating showRating fractions="{1}" startingValue="{3.3}" />
      <Button style={styles.button} title="Post" />
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
 button: {
   marginTop: 20,
   paddingTop: 20,
 },
});
