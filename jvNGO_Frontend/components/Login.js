import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForget = () => {
    navigation.navigate('ForgetScreen');
  }

  const handleSubmit = () => {
    // console.warn(email, password);
    const userData = {
      email: email,
      password,
    };
    // axios.post('http://192.168.0.108:5001/login', userData)
    axios.post('https://jvngo-backend.onrender.com/login', userData)
      .then(res => {
        // console.warn(res.data)
        if (res.data.status === "ok") {
          Alert.alert("Login Successfully!!!");
          AsyncStorage.setItem('token', res.data.data);
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true)); //for checking if user is logged in or not
          if (res.data.userType === 'Admin') {
            navigation.navigate('AdminScreen');
          } else {
            navigation.navigate('Home');
          }
        }
      })
      .catch(error => {
        // console.error("An error occurred during login:", error);
        Alert.alert("Enter Valid Details");
      });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="always">
      <View style={styles.homeView}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/jvlogo.png')}/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login !!!</Text>
        <View style={styles.action}>
            <FontAwesome name="user-o" color="#420475" style={styles.smallIcon}/>
            <TextInput placeholder='Enter Email Id' style={styles.textInput} onChange={e => setEmail(e.nativeEvent.text)} />
        </View>
        <View style={styles.action}>
            <FontAwesome name="lock" color="#420475" style={styles.smallIcon}/>
            <TextInput placeholder='Enter Password' style={styles.textInput} onChange={e => setPassword(e.nativeEvent.text)} />
        </View>
        <TouchableOpacity style={styles.forgetContainer} onPress={() => handleForget()}>
            <Text style={styles.forget}>Forget Password ?</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.button}>
            <TouchableOpacity style={styles.inBut} onPress={()=> handleSubmit()}>
                <View>
                    <Text style={styles.textSign}>Log In</Text>
                </View>
            </TouchableOpacity>
            <View style={{padding:15}}>
                <Text style={styles.orTxt}>--- or Continue as ---</Text>
            </View>
            <View style={styles.bottomButton}>

                {/* <View style={{alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity style={styles.inBut2}>
                        <FontAwesome name = "user-circle-o" color="white" style={styles.smallIcon2}/>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Guest</Text>
                </View> */}

                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity style={styles.inBut2} onPress={()=> props.navigation.navigate('Register')}>
                        <FontAwesome name = "user-plus" color="white" style={styles.smallIcon2}/>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Sign Up</Text>
                </View>

                <View style={{alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity style={styles.inBut2} onPress={()=> Alert.alert("Coming Soon")}>
                        <FontAwesome name = "google" color="white" style={styles.smallIcon2}/>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Google</Text>
                </View>

                {/* <View style={{alignItems:"center", justifyContent:"center"}}>
                    <TouchableOpacity style={styles.inBut2} onPress={()=> alert("Coming Soon")}>
                        <FontAwesome name = "facebook" color="white" style={styles.smallIcon2}/>
                    </TouchableOpacity>
                    <Text style={styles.bottomText}>Facebook</Text>
                </View> */}
                
            </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    homeView:{
      flex:1,
    },
    mainContainer: {
        backgroundColor: 'white',
    },
    textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
    smallIcon: {
      marginRight: 10,
      fontSize: 24,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      height: 180,
      width: 180,
      marginTop: 30,
    },
    text_footer: {
      color: '#05375a',
      fontSize: 18,
    },
    action: {
      flexDirection: 'row',
      paddingTop: 14,
      paddingBottom: 3,
      marginTop: 15,

      paddingHorizontal: 15,

      borderWidth: 1,
      borderColor: '#420475',
      borderRadius: 50,
    },
    textInput: {
      flex: 1,
      marginTop: -12,

      color: '#05375a',
    },
    loginContainer: {
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    header: {
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
    },
    text_header: {
      color: '#420475',
      fontWeight: 'bold',
      fontSize: 30,
    },
    forgetContainer: {
      // backgroundColor:'red',
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      margin:5,
      marginLeft: 240,
    },
    forget: {
      color: '#420475',
      fontWeight: '700',
    },
    button: {
      alignItems: 'center',
      marginTop: -20,
      alignItems: 'center',
      textAlign: 'center',
      margin: 20,
    },
    inBut: {
      width: '70%',
      backgroundColor: '#420475',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 50,
    },
    orTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#420475',
    },
    inBut2: {
      backgroundColor: '#420475',
      height: 65,
      width: 65,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomButton: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallIcon2: {
      fontSize: 40,
      // marginRight: 10,
    },
    bottomText: {
      color: 'black',
      fontSize: 12,
      fontWeight: '600',
      marginTop: 5,
    },
})