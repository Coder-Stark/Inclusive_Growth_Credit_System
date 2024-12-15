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
  
  const openGoogleForm = () => {
    Linking.openURL("https://docs.google.com/forms/d/e/1FAIpQLScgCdEomZzSP3ol2kDUwgF8I5d7YuRi1HPN9ED3AFSH12DUUg/viewform");
  };
  const certificate = () => {
    Linking.openURL("https://drive.google.com/file/d/17MwDsI0fKtY93ApUpf0TpgiI-NpF0IQ6/view?usp=drive_link");
  }
  const ngoDarpan = () => {
    Linking.openURL("https://drive.google.com/file/d/1i4OcRipnzDNl6_GQgwSF9j09kbd0QHC6/view?usp=drive_link");
  }

  const pancard = () => {
    Linking.openURL("https://drive.google.com/file/d/1V6WTDOAoTwMS06q5YIkkcUyZRHMxCk0I/view?usp=drive_link");
  }
  const donate = () => {
    Linking.openURL("https://razorpay.me/@jvsmileysfoundation");
  }
  const facebook = () => {
    Linking.openURL("https://m.facebook.com/JVSmileysFoundation");
  }
  const twitter = () => {
    Linking.openURL("https://twitter.com/JVSF_NGO");
  }
  const youtube = () => {
    Linking.openURL("https://www.youtube.com/@JVSF_NGO");
  }
  const instagram = () => {
    Linking.openURL("https://www.instagram.com/jvsf_ngo/");
  }
  const whatsapp = () => {
    Linking.openURL("https://www.whatsapp.com/channel/0029Va9QWEuId7nNCQwGiu3x");
  }
  const shivam = () => {
    Linking.openURL("https://shivam-kumar-rajbhar.netlify.app/");
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.homeView}>
        <View style={styles.container1}>                            
          <Text style={styles.txt}>Bank Application</Text>
          <Image source={require('../assets/companylogo.png')} style={styles.logo}/>
          <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center"}}>JV Smileys Foundation</Text>
          <Text style={{fontSize:10, fontWeight:"bold", color:"gray", textAlign:"center"}}>One Step To Save Smile</Text>
        </View>
        <View style={styles.container2}>
          <Image source={require('../assets/bgimg.jpg')} style={styles.bgImg}></Image>
          <View style={styles.innerTxtView}>
            <Text style={styles.innerTxt1}>Together, We Can</Text>
            <Text style={styles.innerTxt2}>Build a world where every face has a SMILE.</Text>
            <TouchableOpacity 
              style={styles.button} 
              onPress={() => props.navigation.navigate('JoinAsMember')}
            >
            <Text style={styles.buttonText}>Join as Member</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container3}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>Our Impact</Text>
          <Text style={{fontSize:20, color:"red", padding:10}}>
            We have positively impacted the lives of more than 50,000 individuals in need through hands-on efforts and direct engagement.
          </Text>
          <Text style={{fontSize:20, color:"black", padding:20}}>
          Through dedicated and compassionate hands-on efforts, our organization has successfully touched the lives of more than 50,000 individuals facing various challenges.{'\n'}

          Our commitment to direct engagement with the community has allowed us to create a meaningful and lasting impact. Whether it’s providing essential resources, offering educational support, or addressing specific needs, we have tirelessly worked towards uplifting those in need.{'\n'}

          Our approach is not just about making a difference; it’s about fostering positive and sustainable change. Each individual we’ve reached has a unique story, and through our hands-on initiatives, we’ve become a catalyst for transformation, turning challenges into opportunities.{'\n'} 

          As we continue our mission, our goal is to extend our reach and deepen our impact, ensuring that every person we encounter experiences a positive change that ripples through their lives and the community as a whole.{'\n'}
          </Text>
          <Image source={require('../assets/impact.jpg')} style={styles.impactImg}/>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>What We Do</Text>
          <Text style={{fontSize:20, color:"red", padding:10}}>
            We have positively impacted the lives of more than 50,000 individuals in need through hands-on efforts and direct engagement.
          </Text>
        </View>
        <View style={styles.container4}>
          <View style={styles.box}>
            <Text style={styles.boxTxtBlue}>Empowering Communities for Positive Change: Our Mission in Action</Text>
            <Text style={styles.boxTxtRed}>we strive to catalyze transformative initiatives that uplift and strengthen the fabric of society.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTxtBlue}>
Transforming Lives through Sustainable Initiatives: A Glimpse into Our Work</Text>
            <Text style={styles.boxTxtRed}>Our work is a testament to the profound impact that conscientious and forward-thinking practices can have on communities and the environment.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTxtBlue}>
Health, Education, Empowerment: Discover the Heart of Our NGO</Text>
            <Text style={styles.boxTxtRed}>This NGO is dedicated to fostering positive change through a three-pronged approach focusing on Health, Education, and Empowerment.</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxTxtBlue}>Serving Humanity: A Closer Look at Our Multifaceted Initiatives</Text>
            <Text style={styles.boxTxtRed}>Whether it’s disaster relief, environmental sustainability, or social welfare, our initiatives are rooted in the belief that collective action can bring about positive change.</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>Our numbers that speak</Text>
          <Text style={{fontSize:20, color:"red", padding:10}}>
          We have numbers that push us to give in our best and make sure that we break our own records. We are happy to be growing and helping more day by day.
          </Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxTxt}>1.5K+</Text>
                <Text>Members</Text>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>9150+</Text>
                <Text>Social Causes</Text>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>5.25K+</Text>
                <Text>Tree Plantation</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Text style={styles.smallBoxTxt}>600+</Text>
                <Text>Free Health Camp</Text>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>INR 45K+</Text>
                <Text>Funds Raised</Text> 
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>800T+</Text>
                <Text>FoodPack Distributed</Text>
              </View>
            </View>
          </View>
          <Image source={require('../assets/social/social1.jpg')} style={{margin:10}}/>
          <Image source={require('../assets/social/social2.jpg')}/>
        </View>
        <View style={styles.container6}>
        <View style={styles.imgContainer}>
          <Text style={{fontSize:40, fontWeight:"bold", color:"gray"}}>OUR PARTNERS</Text>
            <View style={styles.row}>
              <View style={styles.imgBox}>
                <Image source={require('../assets/partners/partner1.png')} style={styles.imgPartner1}/>
              </View>
              <View style={styles.imgBox}>
                <Image source={require('../assets/partners/partner2.png')} style={styles.imgPartner2}/>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.imgBox}>
                <Image source={require('../assets/partners/partner3.png')} style={styles.imgPartner3}/>
              </View>
              <View style={styles.imgBox}>
                <Image source={require('../assets/partners/partner4.jpg')} style={styles.imgPartner4}/>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container7}>
          <Text style={{fontSize:40, fontWeight:"bold", color:"white"}}>UseFul Links</Text>
          <TouchableOpacity onPress={certificate}>
            <Text style={styles.linkTxt}>Certificate Of Incorporation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ngoDarpan}>
            <Text style={styles.linkTxt}>NGO Darpan</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={pancard}>
            <Text style={styles.linkTxt}>NGO PAN Card</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={donate}>
            <Text style={styles.linkTxt}>Donate Now</Text>
          </TouchableOpacity>
          <Text style={{fontSize:40, fontWeight:"bold", color:"white"}}>Contact Us</Text>
          <Text style={{fontSize:20, color:"white"}}>G-mail ID: jvsf.india@gmail.com</Text>
          <Text style={{fontSize:20, color:"white"}}>phone: +91 7004860563</Text>

          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <TouchableOpacity onPress={facebook}>
                <Image source={require('../assets/icons/facebook.png')} style={styles.founderImg}/>
                </TouchableOpacity>
              </View>
              <View style={styles.smallBox}>
                <TouchableOpacity onPress={twitter}>
                <Image source={require('../assets/icons/twitter.png')} style={styles.founderImg}/>
                </TouchableOpacity>
              </View>
              <View style={styles.smallBox}>
                <TouchableOpacity onPress={youtube}>
                <Image source={require('../assets/icons/youtube.png')} style={styles.founderImg}/>
                </TouchableOpacity>
              </View>
              <View style={styles.smallBox}>
                <TouchableOpacity onPress={instagram}>
                <Image source={require('../assets/icons/instagram.png')} style={styles.founderImg}/>
                </TouchableOpacity>
              </View>
              <View style={styles.smallBox}>
                <TouchableOpacity onPress={whatsapp}>
                  <Image source={require('../assets/icons/whatsapp.png')} style={styles.founderImg}/>
                </TouchableOpacity>
              </View>
            </View>
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
  container1:{                          //JvNGO logo and some text
    width:"100%",
    height:180,
    backgroundColor:"#9c33ff"
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

  container2:{                        //background image, joinNow button
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  bgImg: {
    width: 500,
    height: 450,
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
    fontSize:30,
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

  container3:{                           //our imact , impact image, what we do
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  impactImg:{
    width:400,
    height:450,
  },

  container4:{                          //small containers
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  box:{
    width:350,
    height:250,
    backgroundColor:"white",
    alignSelf:"center",
    borderRadius:40,
    elevation:20,
    margin:20,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  boxTxtBlue:{
    fontSize:20,
    color:"blue",
    padding:10
  },
  boxTxtRed:{
    fontSize:20,
    color:"red",
    paddingHorizontal:30
  },

  container5:{                         //our numers of speak and social images
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
    width: 120,
    height: 100,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallBoxTxt:{
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
  },

  container6:{                          //our partners
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  imgContainer:{
    flex: 1,
    flexDirection: 'column', // To arrange rows vertically
    alignItems: 'center', // To center rows horizontally
    justifyContent: 'center', // To center rows vertically
  },
  imgBox:{
    width: 200,
    height: 200,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPartner1:{
    width: 200,
    height: 200,
  },
  imgPartner2:{
    width: 190,
    height: 80,
  },
  imgPartner3:{
    width: 190,
    height: 70,
  },
  imgPartner4:{
    width: 200,
    height: 200,
  },

  container7:{                          //Useful links
    flex:1,
    alignItems:"center",
    backgroundColor:"gray",
    width:"100%",
    padding:5
  },
  linkTxt:{
    // backgroundColor:"white",
    margin:2,
    fontSize:18,
    color:"blue",
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
    width: 70,
    height: 70,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  founderImg:{
    width:40,
    height:40,
    borderRadius:20,
  },
  smallBoxTxt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'brown',
  },
  
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