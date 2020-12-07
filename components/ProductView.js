import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, Input, FlatList } from 'react-native';
import { ListItem, Image, Avatar } from 'react-native-elements';


const info = [
  {
    id: 1,
    name: 'Zinfandel Rosé',
    image_url: 'https://static.openfoodfacts.org/images/products/430/449/326/1525/front_fr.16.400.jpg',
    code: '4304493261525',
    brands: 'Cimarosa',
    categories: 'Boissons, Boissons alcoolisées, Vins, Vins blancs'
  }
]

const rating = [
  {
    user: 'Jaana',
    avatar_url: 'https://1.bp.blogspot.com/-nbW_pY3B0OQ/WEMcBM6W3RI/AAAAAAAACMk/RkuUBKkuRfAVHcs1hwlMhT5HM0xgrSscACLcB/s1600/024.JPG',
    title: "It's quite okay",
    body: 'I bought this wine because it was on sale. I would recommend this with game or lamb!',
    stars: '2 stars'
  }
]

export default function ProductView() {
return(
<View style={styles.container}>
      {
        info.map((l, i) => (
          <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <Image
                  source={{ uri: l.image_url }}
                  style={{ width: 96, height: 400}}
                />
                <ListItem.Subtitle>{l.code}{"\n"}{l.brands}{"\n"}{l.categories}</ListItem.Subtitle>
              </ListItem.Content>
              <Button onPress={() => {
                this.props.navigation.navigate('New', {
                  screen: 'New',
                  params: {
                     id : l.code
                   },
                 });
                }}
                title="New review"
              />
          </ListItem>
        ))
      }
    <View style={styles.container}>
      {
        rating.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>"{l.title}"</ListItem.Title>
                <ListItem.Subtitle>By: {l.user}{"\n"}{l.body}{"\n"}{l.stars}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
          }
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    paddingBottom: 22,
    paddingLeft: 22,
    paddingRight: 22,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44
  },
  image: {
    padding: 10,
    height: 100,
    width: 100
  }
});
