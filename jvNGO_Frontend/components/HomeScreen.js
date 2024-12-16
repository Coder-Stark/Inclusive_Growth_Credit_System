import { Button, Image, ScrollView, StyleSheet, Text, View,Linking, TouchableOpacity,BackHandler, Alert } from 'react-native';
import React from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


const HomeScreen = (props) => {
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

  const navigation = useNavigation();
  // const handleJoin = () => {
  //   navigation().navigate("joinAsMember");
  // }
  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
      return() =>{
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }
    })
  )
  const certificate = () => {
    Linking.openURL("https://drive.google.com/file/d/17MwDsI0fKtY93ApUpf0TpgiI-NpF0IQ6/view?usp=drive_link");
  }

  const pancard = () => {
    Linking.openURL("https://drive.google.com/file/d/1V6WTDOAoTwMS06q5YIkkcUyZRHMxCk0I/view?usp=drive_link");
  }
  const shivam = () => {
    Linking.openURL("https://shivam-kumar-rajbhar.netlify.app/");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeView}>
        <View style={styles.container1}>                            
          <Text style={styles.txt}>Poverty Alleviation Credit Platform</Text>
          <Image source={require('../assets/companylogo.png')} style={styles.logo}/>
          <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center"}}>Bridging Dreams with Opportunity.</Text>
        </View>

        <View style={styles.container2}>
          <Image source={require('../assets/bgimg.png')} style={styles.bgImg}></Image>
          <View style={styles.innerTxtView}>
            <Text style={styles.innerTxt2}>Helping Communities Thrive with Opportunity.</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => props.navigation.navigate('JoinAsMember')}
            >
            <Text style={styles.buttonText}>Join as Member</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container4}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>Our Programs</Text>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/loans.png')} style={styles.prog}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/transSave.png')} style={styles.prog}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/transRepay.png')} style={styles.prog}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/rd.png')} style={styles.progrdfd}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/fd.png')} style={styles.progrdfd}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/dashboard.png')} style={styles.prog}/>
          </View>
          <View style={styles.box}>
            <Image source={require('../assets/ourprograms/commsupport.png')} style={styles.prog}/>
          </View>
        </View>

        <View style={styles.container6}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"#9c33ff", marginTop:10}}>Founder Member</Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder1.jpeg')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Shivam Kumar</Text>
                <Text>Developer</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder2.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Rohit Kumar</Text>
                <Text>UI / UX Designer</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container7}>
          <Text style={{fontSize:40, fontWeight:"bold", color:"#8aff33"}}>UseFul Links</Text>
          <TouchableOpacity onPress={certificate}>
            <Text style={styles.linkTxt}>Certificate Of Incorporation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pancard}>
            <Text style={styles.linkTxt}>Business PAN Card</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={ngoDarpan}>
            <Text style={styles.linkTxt}>NGO Darpan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={donate}>
            <Text style={styles.linkTxt}>Donate Now</Text>
          </TouchableOpacity> */}
          <Text style={{fontSize:40, fontWeight:"bold", color:"#8aff33"}}>Contact Us</Text>
          <Text style={{fontSize:15, color:"white"}}>G-mail ID: shivamkumar_se21a15_29@dtu.ac.in rohitkumar_se21a15_16@dtu.ac.in</Text>
          <Text style={{fontSize:15, color:"white"}}>phone: +91 9971365661, +91 92054 66272</Text>

        </View>
        <View style={styles.containerFooter}>
          <Text style={styles.footTxt}>© Poverty Alleviation Credit Platform 2024, Developed By</Text>
          <TouchableOpacity onPress={shivam}>
          <Text style={{fontWeight:"bold", color:"#8aff33"}}>Shivam Kumar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView:{
    flex:1,
    alignItems:"center",
  },

//---------------------------------------------------------------------------
  container1:{                       
    width:"100%",
    height:180,
    backgroundColor:"#9c33ff"
  },
  logo:{
    width:120,
    height:120,
    alignSelf:"center"
  },
  txt:{
    fontSize:22,
    fontWeight:"bold",
    color:"#8aff33",
    textAlign:"center",
  },

  // ------------------------------------------------------------------
  container2:{                        //background image, joinNow button
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",
  },
  bgImg: {
    width: 500,
    height: 490,
  },
  innerTxtView:{
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    padding:10,
  },
  innerTxt1:{
    fontSize:25,
    fontWeight:"bold",
    color:"white",
  },
  innerTxt2:{
    fontSize:33,
    fontWeight:"bold",
    color:"white",
  },
  button: {
    backgroundColor: '#8aff33', // Green background
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black', // Black text color
    fontSize: 20,
    // fontWeight: 'bold',
  },

  //----------------------------------------------------------------------
  container4:{                          //small containers
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  box:{
    width:300,
    height:300,
    backgroundColor:"white",
    alignSelf:"center",
    borderRadius:40,
    elevation:20,
    margin:10,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  prog:{
    width:200,
    height:230
  },
  progrdfd:{
    width:135,
    height:230
  },

  //----------------------------------------------------------------------------
  container6:{                         //Founder Member
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  innerContainer:{
    flex: 1,
    flexDirection: 'column', // To arrange rows vertically
    alignItems: 'center', // To center rows horizontally
    justifyContent: 'center', // To center rows vertically
  },
  row:{
    flexDirection: 'row', // To arrange boxes horizontally
  },
  smallBox:{
    width: 200,
    height: 250,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  founderImg:{
    width:160,
    height:175,
    borderRadius:85,
  },
  smallBoxTxt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9c33ff',
  },

  //-------------------------------------------------------------------------------
  container7:{                          //Useful links
    flex:1,
    alignItems:"center",
    backgroundColor:"#9c33ff",
    width:"100%",
    padding:5
  },
  //-------------------------------------------------------------------------
  containerFooter:{
    flex:1,
    alignItems:"center",
    backgroundColor:"black",
    width:"100%",
  },
  footTxt:{
    color:"white",
  }
})