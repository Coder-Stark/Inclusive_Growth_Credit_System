import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const ForgetScreen = (props) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  
  /*
  const handleSubmit = (e) => {
    console.warn(email);
    axios.post('https://jvngo-backend.onrender.com/forgetpassword', {
      email,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
    .then((response) => {
      console.warn(response.data, 'userRegister');
      Alert.alert(response.data.status);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  */

  const handleTempSubmit = ()=>{
    Alert.alert('Comming Soon');
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="always">
      <View style={styles.homeView}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/jvlogo.png')}/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Forget Password ?</Text>
        <Text style={{color:'black'}}>Enter Your Email Address For Reset Password</Text>
        <View style={styles.action}>
            <FontAwesome name="user-o" color="#420475" style={styles.smallIcon}/>
            <TextInput placeholder='Enter Email Id' style={styles.textInput} onChange={(e) => setEmail(e.target.value)} />
        </View>
      </View>
        <View style={styles.button}>
            {/* <TouchableOpacity style={styles.inBut} onPress={()=> handleSubmit()}> */}
            <TouchableOpacity style={styles.inBut} onPress={()=> handleTempSubmit()}>
                <View>
                    <Text style={styles.textSign}>Reset Password</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.forgetContainer}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                    <Text style={styles.forget}>Sign In</Text>
                </TouchableOpacity>
            </View>
    </View>
    </ScrollView>
  )
}

export default ForgetScreen

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
    forgetContainer: {
    //   backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 8,
      marginLeft: 155,
      width: 90,
    },
    forget: {
      color: '#420475',
      fontWeight: '700',
      fontSize: 20,
    },
})