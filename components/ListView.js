import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image, Button } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
 import AddReview from './AddReview';

export default class ListView extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://fr-en.openfoodfacts.org/category/wines/1.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.products,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
        <View style={styles.container}>
          <FlatList
          data={this.state.dataSource}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <ListItem>
                <Image style={styles.image}
                source={{ uri: item.image_small_url }}/>
                  <ListItem.Content>
                    <ListItem.Title style={styles.item}>{item.product_name}</ListItem.Title>
                    <ListItem.Subtitle>{item.quantity}</ListItem.Subtitle>
                  </ListItem.Content>
                  <Button onPress={() => {
                    this.props.navigation.navigate('Wine', {
                      screen: 'Wine',
                      params: { id : item.id },
                    })
                    }}
                    title="Details"/>
              </ListItem>
            )}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
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
