import { ScrollView, Image, StyleSheet, Text, View, Linking , Button, TouchableOpacity, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const JoinAsMember = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [fatherHusbandName, setFatherHusbandName] = useState('');
  const [martialStatus, setMartialStatus] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [villageWard, setVillageWard] = useState('');
  const [panchayatNagarParishadName, setPanchayatNagarParishadName] = useState('');
  const [block, setBlock] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [mobile, setMobile] = useState('');
  const [qualification, setQualification] = useState('');
  const [occupation, setOccupation] = useState('');

  const handleName = (e)=>{
    setName(e.nativeEvent.text);
  }
  const handleFatherHusbandName = (e)=>{
    setFatherHusbandName(e.nativeEvent.text);
  }
  const handleMartialStatus = (e)=>{
    setMartialStatus(e.nativeEvent.text);
  }
  const handleGender = (e)=>{
    setGender(e.nativeEvent.text);
  }
  const handleDob = (e)=>{
    setDob(e.nativeEvent.text);
  }
  const handleEmail = (e)=>{
    setEmail(e.nativeEvent.text);
  }
  const handleBloodGroup = (e)=>{
    setBloodGroup(e.nativeEvent.text);
  }
  const handleFullAddress = (e)=>{
    setFullAddress(e.nativeEvent.text);
  }
  const handleVillageWard = (e)=>{
    setVillageWard(e.nativeEvent.text);
  }
  const handlePanchayatNagarParishadName = (e)=>{
    setPanchayatNagarParishadName(e.nativeEvent.text);
  }
  const handleBlock = (e)=>{
    setBlock(e.nativeEvent.text);
  }
  const handleDistrict = (e)=>{
    setDistrict(e.nativeEvent.text);
  }
  const handleState = (e)=>{
    setState(e.nativeEvent.text);
  }
  const handlePincode = (e)=>{
    setPincode(e.nativeEvent.text);
  }
  const handleCountry = (e)=>{
    setCountry(e.nativeEvent.text);
  }
  const handleMobile = (e)=>{
    setMobile(e.nativeEvent.text);
  }
  const handleQualification = (e)=>{
    setQualification(e.nativeEvent.text);
  }
  const handleOccupation = (e)=>{
    setOccupation(e.nativeEvent.text);
  }


  
  const handleSubmit = async () => {
    try {
      const formData = {
        name,
        fatherHusbandName,
        martialStatus,
        gender,
        dob,
        email,
        bloodGroup,
        fullAddress,
        villageWard,
        panchayatNagarParishadName,
        block,
        district,
        state,
        pincode,
        country,
        mobile,
        qualification,
        occupation
      };
      // Check if any of the required fields are empty
      if (!name || !fatherHusbandName || !martialStatus || !gender || !dob || !email || !bloodGroup || !fullAddress || !villageWard || !panchayatNagarParishadName || !block || !district || !state || !pincode || !country || !mobile || !qualification || !occupation) {
        Alert.alert("Please fill all the details");
        return; // Exit early if any field is empty
      }
      const response = await axios.post('https://jvngo-backend.onrender.com/member', formData);
      // console.warn(response.data); // Assuming your backend returns some data upon successful insertion
      Alert.alert("Thank You For Joining Us, We Will Contact You Soon");
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  const shivam = () => {
    Linking.openURL("https://shivam-kumar-rajbhar.netlify.app/");
  }
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeView}>
        <View style={styles.container1}>                            
          <Text style={styles.txt}>JV GROUP</Text>
          <Image source={require('../assets/jvlogo.png')} style={styles.logo}/>
          <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center"}}>JV Smileys Foundation</Text>
          <Text style={{fontSize:10, fontWeight:"bold", color:"gray", textAlign:"center"}}>One Step To Save Smile</Text>
        </View>
        <View style={styles.container2}>
          <View style={styles.formContainer}>
          <Text style={styles.text_header}>Join As Member</Text>
          <View style={styles.action}>
              <FontAwesome name="user-o" color="brown" style={styles.smallIcon}/>
              <TextInput placeholder='Enter Full Name' style={styles.textInput} value={name} onChange={e=>handleName(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Father or Husband Name' style={styles.textInput} value={fatherHusbandName} onChange={e=>handleFatherHusbandName(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter (Married or Unmarried)' style={styles.textInput} value= {martialStatus} onChange={e=>handleMartialStatus(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Gender (Male or Female)' style={styles.textInput} value= {gender} onChange={e=>handleGender(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Date of Birth In DD/MM/YYYY' style={styles.textInput} value= {dob} onChange={e=>handleDob(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Email Id' style={styles.textInput} value= {email} onChange={e=>handleEmail(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Blood Group' style={styles.textInput} value= {bloodGroup} onChange={e=>handleBloodGroup(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Full Address' style={styles.textInput} value = {fullAddress} onChange={e=>handleFullAddress(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Village or Ward' style={styles.textInput} value= {villageWard} onChange={e=>handleVillageWard(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder="Panchayat or NagarPanchayat Name" style={styles.textInput} value = {panchayatNagarParishadName} onChange={e=>handlePanchayatNagarParishadName(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter your Block' style={styles.textInput} value = {block} onChange={e=>handleBlock(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your District' style={styles.textInput} value = {district} onChange={e=>handleDistrict(e)}/>
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your State' style={styles.textInput} value = {state} onChange={e=>handleState(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Pincode' style={styles.textInput} value = {pincode} onChange={e=>handlePincode(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Country' style={styles.textInput} value = {country} onChange={e=>handleCountry(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Mobile Number' style={styles.textInput} value= {mobile} onChange={e=>handleMobile(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Qualification' style={styles.textInput} value= {qualification} onChange={e=>handleQualification(e)} />
          </View>
          <View style={styles.action}>
              <TextInput placeholder='Enter Your Occupation' style={styles.textInput} value= {occupation} onChange={e=>handleOccupation(e)} />
          </View>
        </View>
        <View style={{margin:10}}>
        <Button title="Submit" onPress={handleSubmit} />
        </View>
        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.footTxt}>© JV Smileys Foundation 2024, Developed By</Text>
          <TouchableOpacity onPress={shivam}>
          <Text style={{fontWeight:"bold", color:"yellow"}}>Shivam Kumar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default JoinAsMember

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

  container2:{                         //what we do
    flex:1,
    alignItems:"center",
  },
  text_header: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 30,
    width: 340,
  },
  action: {
    flexDirection: 'row',
    paddingTop: 14,
    paddingBottom: 3,
    marginTop: 15,

    paddingHorizontal: 15,

    borderWidth: 1,
    borderColor: 'brown',
    borderRadius: 50,
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  containerFooter:{
    flex:1,
    alignItems:"center",
    backgroundColor:"black",
    width:"100%",
  },
  footTxt:{
    color:"white",
  },
})