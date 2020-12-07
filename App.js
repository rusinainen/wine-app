import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, Link} from 'react-native';
//Navigation is impoerted underneath
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Components imported underneath
import Start from './components/Start';
import ListView from './components/ListView';
import AddReview from './components/AddReview';
import ProductView from './components/ProductView';
//import ProfileView from './components/ProfileView';
//import LoginPage from './components/LoginPage';

//Creates a stack navigator for our front page/starting page
const StartStack = createStackNavigator();

//Frontpage after login
function StartStackScreen() {
  return (
    <StartStack.Navigator>
      <StartStack.Screen name="Start" component={Start} />
    </StartStack.Navigator>
    );
}

// Creates a stack for our page that lists product reviews
const WineListStack = createStackNavigator();

function ListStackScreen() {
  return (
    <WineListStack.Navigator>
      <WineListStack.Screen name="Products" component={ListView} />
    </WineListStack.Navigator>
    );
}

// Creates a stack for our page that lets user add a new review
const AddStack = createStackNavigator();

function AddStackScreen() {
  return (
    <AddStack.Navigator>
      <AddStack.Screen name="Add a new review" component={AddReview} />
    </AddStack.Navigator>
    );
}

// Creates a stack for our page that lets user see details of the wine product
const WineStack = createStackNavigator();

function WineStackScreen() {
  return (
    <WineStack.Navigator>
      <WineStack.Screen name="Wine" component={ProductView} />
    </WineStack.Navigator>
    );
}

//This creates a bottom navigator
const Tab = createBottomTabNavigator();

//Main function of the app
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="New" component={AddStackScreen}
            options={{
            tabBarLabel: 'New',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plus" color={color} size={26} />
            ),
            }}
          />
          <Tab.Screen name="Start" component={StartStackScreen}
            options={{
            tabBarLabel: 'Start',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
          />
          <Tab.Screen name="List" component={ListStackScreen}
            options={{
              tabBarLabel: 'List',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="format-list-bulleted" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen name="Wine" component={WineStackScreen}
            options={{
            tabBarLabel: 'Product Details',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="food" color={color} size={26} />
            ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  radiusButton: {
    position: 'absolute',
    top: '10%',
    left: '2%',
    zIndex: 0
  },
});
