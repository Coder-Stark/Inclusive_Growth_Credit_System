import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Error from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import { RadioButton } from 'react-native-paper'

const Register = (props) => {
  const [name, setName] = useState('');
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobile, setMobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('User');
  const [secretKey, setSecretKey] = useState('');

  const navigation = useNavigation();
  const handleSubmit = () => {
    const userData = {
      name: name,
      email: email,
      mobile,                          //same as above
      password,
      userType
    };
    if(nameVerify && emailVerify && mobileVerify && passwordVerify){
      if(userType == 'Admin' && secretKey != 'jvNGO@app123'){
        Alert.alert("Invalid Secret Key");
        return;
      }
      axios.post('https://jvngo-backend.onrender.com/register',userData)
      .then(res => {
        // console.log(res.data)
        if(res.data.status == "ok"){
          Alert.alert("Registered Successfully!!!");
          navigation.navigate('Login');
        }else{
          Alert.alert(JSON.stringify(res.data.data));
        }
      })
      .catch(err => console.log(err));
    }else{
      Alert.alert("Please fill all the details");
    }
  }

  const handleName = (e) => {
    // console.warn(e.nativeEvent.text);
    const nameVar = e.nativeEvent.text;
    setName(nameVar);
    setNameVerify(false);                 //for backspace reset the state

    if(nameVar.length > 1){
      setNameVerify(true);
    }
  }
  const handleEmail = (e) => {
    const emailVar = e.nativeEvent.text;
    setEmail(emailVar);
    setEmailVerify(false);

    if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)){
      setEmailVerify(true);
    }
  }
  const handleMobile = (e) => {
    const mobileVar = e.nativeEvent.text;
    setMobile(mobileVar);
    setMobileVerify(false);

    if(/[6-9]{1}[0-9]{9}/.test(mobileVar)){
      setMobileVerify(true);
    }
  }
  const handlePassword = (e) => {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);

    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)){
      setPasswordVerify(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/companylogo.png')}/>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Register !!!</Text>
        <View style={styles.radioButton_div}> 
          <Text style={styles.radioButton_title}>Login As</Text>
          <View style={styles.radioButton_inner_div}> 
            <Text style={styles.radioButton_text}>User</Text>
            <RadioButton value ="User" 
              status={userType === 'User' ? 'checked' : 'unchecked'}
              onPress={() => setUserType('User')}
            />
          </View>
          <View style={styles.radioButton_inner_div}> 
            <Text style={styles.radioButton_text}>Admin</Text>
            <RadioButton value ="Admin" 
              status={userType === 'Admin' ? 'checked' : 'unchecked'}
              onPress={() => setUserType('Admin')}
            />
          </View>
        </View>

        {
          userType == 'Admin' ? 
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#9c33ff" style={styles.smallIcon}/>
            <TextInput placeholderTextColor="#888" placeholder='Enter Secret Key' style={styles.textInput} onChange={e=>setSecretKey(e.nativeEvent.text)}/>
          </View> :
          null
        }


        <View style={styles.action}>
            <FontAwesome name="user-o" color="#9c33ff" style={styles.smallIcon}/>
            <TextInput placeholderTextColor="#888" placeholder='Enter User Name' style={styles.textInput} onChange={e => handleName(e)} />
            {
              name.length < 1 ? null : 
              nameVerify ? (<Feather name="check-circle" color="green" size={20}/>)
              : (<Error name="error" color="red" size={20} />)
            }
        </View>
        {
          name.length < 1 ? null :
          nameVerify ? null : 
          (<Text style={{color:'red', marginLeft:20}}>Name should be more than 1 character</Text>)
        }
        <View style={styles.action}>
            <Fontisto name="email" color="#9c33ff" style={styles.smallIcon}/>
            <TextInput placeholderTextColor="#888" placeholder='Enter Email Id' style={styles.textInput} onChange={e => handleEmail(e)}/>
            {
              email.length < 1 ? null : 
              emailVerify ? (<Feather name="check-circle" color="green" size={20}/>)
              : (<Error name="error" color="red" size={20} />)
            }
        </View>
        {
          email.length < 1 ? null :
          emailVerify ? null : 
          (<Text style={{color:'red', marginLeft:20}}>Enter Proper Email Address</Text>)
        }
        <View style={styles.action}>
            <Entypo name="mobile" color="#9c33ff" style={styles.smallIcon}/>
            <TextInput placeholderTextColor="#888" placeholder='Enter Mobile Number' style={styles.textInput} onChange={e => handleMobile(e)} maxLength={10}/>
            {
              mobile.length < 1 ? null : 
              mobileVerify ? (<Feather name="check-circle" color="green" size={20}/>)
              : (<Error name="error" color="red" size={20} />)
            }
        </View>
        {
          mobile.length < 1 ? null :
          mobileVerify ? null : 
          (<Text style={{color:'red', marginLeft:20}}>Enter Proper Mobile Number</Text>)
        }
        <View style={styles.action}>
            <FontAwesome name="lock" color="#9c33ff" style={styles.smallIcon}/> 
            <TextInput placeholderTextColor="#888" placeholder='Enter Password' style={styles.textInput} onChange={e => handlePassword(e)} secureTextEntry={showPassword}/>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {
                password.length < 1 ? null :
                !showPassword ? 
                (<Feather name="eye-off" color={passwordVerify ? 'green' : 'red'} style={{marginRight:-10}} size={23}/>) : 
                (<Feather name="eye" color={passwordVerify ? 'green' : 'red'} style={{marginRight:-10}} size={23}/>)
              }
            </TouchableOpacity>
        </View>
        {
          password.length < 1 ? null :
          passwordVerify ? null : 
          (<Text style={{color:'red', marginLeft:20}}>UpperCase, LowerCase, Number and 6 or more characters</Text>)
        }
      </View>
        <View style={styles.button}>
            <TouchableOpacity style={styles.inBut} onPress={()=>handleSubmit()}>
                <View>
                    <Text style={styles.textSign}>Register</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.forgetContainer}>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Login')}>
                    <Text style={styles.forget}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default Register;

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
      // fontWeight: 'bold',
      color: 'black',
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
      borderColor: '#9c33ff',
      borderRadius: 50,
    },
    textInput: {
      flex: 1,
      marginTop: -12,
      // fontWeight: 'bold',
      color: 'black',
      
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
      color: '#9c33ff',
      fontWeight: 'bold',
      fontSize: 30,
    },
    forgetContainer: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginTop: 8,
      marginRight: 10,
    },
    forget: {
      color: '#9c33ff',
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
      backgroundColor: '#8aff33',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderRadius: 50,
    },
    orTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#9c33ff',
    },
    inBut2: {
      backgroundColor: '#9c33ff',
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
    radioButton_div: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    radioButton_inner_div: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radioButton_title: {
      fontSize: 20,
      color: '#9c33ff',
    },
    radioButton_text: {
      fontSize: 16,
      color: 'black',
    },
})