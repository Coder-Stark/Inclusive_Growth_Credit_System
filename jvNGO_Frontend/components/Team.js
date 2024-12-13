import { ScrollView, StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native'
import React from 'react'

const Team = () => {
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
          <Text style={{fontSize:30, fontWeight:"bold", color:"purple", marginTop:10}}>Our Team's</Text>
          <Text style={{fontSize:17, color:"gray", margin:10}}>Our team is comprised of dedicated volunteers who are passionate about helping the community. We work together to identify needs and create effective solutions that make a positive impact on the people we serve. Our committed members come from all walks of life, united by our common goal to better our society for future generations.</Text>
        </View>
        <View style={styles.container3}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"brown", marginTop:10}}>Founder Member</Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder1.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Mr. Jitendra Kumar</Text>
                <Text>Patron</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder2.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Dr. Amit Kumar</Text>
                <Text>Founder</Text>
              </View>
            </View>
            <View style={styles.row}>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder3.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Poonam Kumari</Text>
                <Text>Director</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder4.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Sumit Kumar</Text>
                <Text>Founder Member</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/founderMembers/founder5.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt}>Dr. Aishwarya kashyap</Text>
                <Text>Founder Member</Text>
            </View>
          </View>
        </View>
        <View style={styles.container4}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"blue", marginTop:10}}>National Committee</Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/national/national1.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt2}>Rahul Kumar</Text>
                <Text>National President</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/national/national2.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt2}>Fatima</Text>
                <Text>National Vice President</Text>
              </View>
            </View>
            <View style={styles.row}>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/national/national3.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt2}>Priyanka Sharma</Text>
                <Text>National Secretary</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/national/national4.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt2}>Sourav Singh</Text>
                <Text>National Vice President</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/national/national5.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt2}>Kamlesh Tiwari</Text>
                <Text>National General Secretary</Text>
            </View>
          </View>
        </View>
        <View style={styles.container5}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"orange", marginTop:10}}>Advisory Committee</Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory1.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Drishti</Text>
                <Text>State Secretary Maharashtra</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory2.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Mohit</Text>
                <Text>State General Secretary Madhya Pradesh</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory3.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Shalini</Text>
                <Text>State Vice President Uttar Pradesh</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory4.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Manish Shukla</Text>
                <Text>State President Uttar Pradesh</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory5.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Anjali</Text>
                <Text>State General Secetary West Bengal</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory6.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Ankit Sharma</Text>
                <Text>State President Delhi</Text>
              </View>
            </View>
            <View style={styles.row}>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory7.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Sakshi</Text>
                <Text>State Secretary Delhi</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory8.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Abhishek Kumar</Text>
                <Text>State President Bihar</Text>
              </View>
            </View>
            <View style={styles.row}>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory9.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Priyanka Sharma</Text>
                <Text>National Secretary</Text>
              </View>
              <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory10.png')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Dushyant</Text>
                <Text>State President Rajasthan</Text>
              </View>
            </View>
            <View style={styles.smallBox}>
                <Image source={require('../assets/teamMembers/advisory/advisory11.jpeg')} style={styles.founderImg}/>
                <Text style={styles.smallBoxTxt3}>Ranjan Swain</Text>
                <Text>State President Odisha</Text>
            </View>
          </View>
        </View>
        <View style={styles.container6}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginTop:10}}>JVSF GoodWill Ambassadors</Text>
          <Text style={{fontSize:17, color:"gray", margin:10}}>Goodwill Ambassadors stand as the distinguished representatives of JV Smileys Foundation (JVSF), with their prominent status, often as celebrities, making them recognizable faces associated with our organization. These individuals play a crucial role in publicly championing and advocating for the values and objectives upheld by JVSF.{"\n"}
          Our designated Goodwill Ambassador is acknowledged for their unwavering dedication to advancing the mission and goals of the JV Smileys Foundation. Collaborating closely with our team, they actively engage in activities to amplify awareness, mobilize resources, and champion the various initiatives that form the essence of our organization. Their exceptional ability to connect with individuals from diverse backgrounds and inspire collective action establishes them as an invaluable asset to our cause.</Text>
        </View>
        <View style={styles.container7}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", justifyContent:"center", alignItems:"center"}}>Current GoodWill Ambassadors</Text>


          <Image source={require('../assets/teamMembers/ambassadors/ambassador1.png')} style={styles.memImg}/>
          <Text style={styles.txtHead}>Ashima Narwal</Text>
          <Text style={styles.text}>Miss Sydney Australia Elegance{"\n"}Miss India Global2015{"\n"}Actor</Text>

          <Image source={require('../assets/teamMembers/ambassadors/ambassador2.png')} style={styles.memImg}/>
          <Text style={styles.txtHead}>Kumar Kanhaiya Singh</Text>
          <Text style={styles.text}>Actor{"\n"}Producer</Text>

          <Text style={{fontSize:30, fontWeight:"bold", color:"black", justifyContent:"center", alignItems:"center", marginTop:10}}>Alumni GoodWill Ambassadors</Text>


          <Image source={require('../assets/teamMembers/ambassadors/ambassador3.png')} style={styles.memImg}/>
          <Text style={styles.txtHead}>Divya Rai</Text>
          <Text style={styles.text}>Actor{"\n"}Writer</Text>
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

export default Team

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

  container2:{                         //Our Teams
    flex:1,
    alignItems:"center",
  },

  container3:{                         //Founder Member
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
    height: 200,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  founderImg:{
    width:150,
    height:150,
    borderRadius:75,
  },
  smallBoxTxt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'brown',
  },


  container4:{                             //National Committee
    flex:1,
    alignItems:"center",
  },
  smallBoxTxt2:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },

  container5:{                            //Advisory committee
    flex:1,
    alignItems:"center",
  },
  smallBoxTxt3:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'orange',
  },

  container6:{                            //JVSF GoodWill Ambassador
    flex:1,
    alignItems:"center",
  },

  container7:{                             //Current & Alumini GoodWill Ambassador
    flex:1,
    alignItems:"center",
  },
  memImg:{
    width:300,
    height:300,
  },
  txtHead:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'brown',
  },
  text:{
    fontSize: 20,
    color: 'gray',
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