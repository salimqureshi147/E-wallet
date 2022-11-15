import {Image, StyleSheet, TabBarIOS, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Verify from './src/screens/Verify';
import ForgotPassword from './src/screens/ForgotPassword';
import ConfirmPassword from './src/screens/ConfirmPassword';
import Home from './src/screens/Home';
import History from './src/screens/History';
import Profile from './src/screens/Profile';
import AddItem from './src/screens/AddItem';
import Statistics from './src/screens/Statistics';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../E_Wallet/src/assets/homeicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../E_Wallet/src/assets/statisticsicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Statics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="AddItem"
        component={AddItem}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                height: 70,
                width: 70,
                alignItems: 'center',
                bottom: 24,

                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 50,
                elevation: 5,
              }}>
              <Image
                resizeMode="contain"
                source={require('../E_Wallet/src/assets/addicon.png')}
                style={{
                  height: 60,
                  width: 60,
                  tintColor: '#5176C2',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../E_Wallet/src/assets/historyicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                resizeMode="contain"
                source={require('../E_Wallet/src/assets/profileicon.png')}
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#5176C2' : '#A3A7B1',
                }}
              />
              <Text
                style={{
                  color: focused ? '#5176C2' : '#A3A7B1',
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;

const styles = StyleSheet.create({});
