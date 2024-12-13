import {StyleSheet, Text, TouchableOpacity, View, Image, FlatList, Alert, BackHandler} from 'react-native';
import React, { useEffect, useState } from 'react';
import LogOut from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import axios from 'axios';
 
const AdminScreen = () => {
  const handleBackPress = () => {
    Alert.alert(
      'Exit App',
      'Are you sure you want to exit?',
      [
        {
          text: 'Cancel',
          onPress: ()=> null,
          style: 'cancel'
        },
        {
          text: "Exit",
          onPress: () => BackHandler.exitApp()
        }
      ]
    )
    return true;
  }
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return() =>{
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    })
  )
  const navigation = useNavigation();

  const [userData, setUserData] = useState("");
  const [allUserData, setAllUserData] = useState("");
  const getData = async() => {
    const token =  await AsyncStorage.getItem("token");
    // console.warn(token);
    axios.post("https://jvngo-backend.onrender.com/userData", {token: token})
    .then(res=>{
      // console.warn(res.data)
      setUserData(res.data.data);
    })
  }
  const getAllUser=async(res, req) => {
    axios.get("https://jvngo-backend.onrender.com/getalluser")
    .then(res=>{
      // console.log(res.data);
      setAllUserData(res.data.data);
    })
  }
  const signOut = async() => {
    navigation.navigate("Login");
    AsyncStorage.setItem("isLoggedIn", "");
    AsyncStorage.setItem("token", "");
  }
  const UserCard = ({data}) =>(
    <View style={styles.card}>
      <Image source={require('../assets/user.png')} style={styles.image} />
      <View style={styles.cardDetails}>
        <Text style={styles.name}>Name: {data.name}</Text>
        <Text style={styles.email}>Email: {data.email}</Text>
        <Text style={styles.phone}>Phone: {data.mobile}</Text>
        <Text style={styles.type}>User Type: {data.userType}</Text>
      </View>
    </View>
  )
  useEffect(() => {
    getData();
    getAllUser();
  },[]);

  return (
    <>
      <View style={styles.container1}>                            
        <Text style={styles.txt}>JV GROUP</Text>
        <Image source={require('../assets/jvlogo.png')} style={styles.logo}/>
        <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center"}}>JV Smileys Foundation</Text>
        <Text style={{fontSize:10, fontWeight:"bold", color:"gray", textAlign:"center"}}>One Step To Save Smile</Text>
      </View>
      
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.userType}>{userData.userType}</Text>
        </View>
        <FlatList
          data={allUserData}
          keyExtractor={item=>item._id}
          renderItem={({item}) => (
            <UserCard data={item}/>
          )}
        />

      </View>
      <TouchableOpacity style={styles.logoutIcon} onPress={signOut}>
        <LogOut name="logout" size={24} color={'white'} />
      </TouchableOpacity>
    </>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView:{
    flex:1,
    alignItems:"center",
  },
  container1:{                          //JvNGO logo and some text
    width:"100%",
    height:180,
    backgroundColor:"brown"
  },
  logo:{
    width:100,
    height:100,
    alignSelf:"center"
  },
  txt:{
    fontSize:30,
    fontWeight:"bold",
    color:"yellow",
    textAlign:"center",
  },
  logoutIcon: {
    zIndex: 1,
    color: 'white',
    position: 'absolute',
    right: 2,
    margin: 15,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  userInfo: {
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  userType: {
    fontSize: 18,
    color: '#777777',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 5,
  },
 
  email: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
 
  phone: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
 
  type: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 5,
  },
});
