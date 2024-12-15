import React, { useEffect } from 'react';

import {NavigationContainer} from "@react-navigation/native"       //same on all navigation
import {createNativeStackNavigator} from "@react-navigation/native-stack"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './components/HomeScreen';
import OurProgram from './components/OurProgram';
import Team from './components/Team';
import Policies from './components/Policies';
import Profile from './components/Profile';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/MaterialIcons';
import Icons3 from 'react-native-vector-icons/AntDesign';
import Icons4 from 'react-native-vector-icons/Entypo';
import Login from './components/Login';
import Register from './components/Register';
import JoinAsMember from './components/JoinAsMember';
import AdminScreen from './components/AdminScreen';
import ForgetScreen from './components/ForgetScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = ()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIcon:()=>{
            return(
              // <Image source={require('./assets/icons/home.png')} style={{width:25, height:25}}/>
              <Icons4 name="home" size={25} color="#888"/>
            )
          }
        }} 
      />
      <Tab.Screen name="Program" component={OurProgram}
        options={{
          tabBarLabelStyle: { fontSize: 9.7, fontWeight: 'bold' },
          tabBarIcon:()=>{
            return(
              <Icons4 name="network" size={25} color="#888"/>
            )
          }
        }}
      />
      <Tab.Screen name="Team" component={Team}
        options={{
          tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIcon:()=>{
            return(
              <Icons3 name="team" size={25} color="#888" />
            )
          }
        }}
      />
      <Tab.Screen name="Policies" component={Policies}
        options={{
          tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIcon:()=>{
            return(
              <Icons2 name="policy" size={25} color="#888" />
            )
          }
        }}
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
          tabBarIcon:()=>{
            return(
              <Icons name="user" size={30} color="#888" />  
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}
const App = ()=>{
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  })
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="JoinAsMember" component={JoinAsMember} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;