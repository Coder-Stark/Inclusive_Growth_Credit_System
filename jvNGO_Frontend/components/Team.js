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
          <Text style={styles.txt}>Poverty Alleviation Credit Platform</Text>
          <Image source={require('../assets/companylogo.png')} style={styles.logo}/>
          <Text style={{fontSize:20, fontWeight:"bold", color:"white", textAlign:"center"}}>Bridging Dreams with Opportunity.</Text>
        </View>

        <View style={styles.container2}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"#9c33ff", marginTop:10}}>About Our Team</Text>
          <Text style={styles.paragraph}>
            Our team is driven by the passion to bring meaningful change to underserved communities. With expertise in development and design, we work collaboratively to create solutions that are both innovative and impactful, ensuring accessibility and inclusivity for all.
          </Text>

          {/* Founder 1 Paragraph */}
          <Text style={styles.heading}>Shivam Kumar</Text>
          <Text style={styles.paragraph}>
            Shivam Kumar is a highly skilled developer with a strong background in creating scalable and user-friendly applications. His technical expertise and innovative approach ensure that every feature of the platform is robust and efficient, tailored to address the challenges faced by low-income individuals.
          </Text>

          {/* Founder 2 Paragraph */}
          <Text style={styles.heading}>Rohit Kumar</Text>
          <Text style={styles.paragraph}>
            Rohit Kumar is an exceptional UI/UX designer, passionate about creating visually appealing and user-friendly designs. With a focus on seamless user experiences, they ensure that the platform is intuitive, accessible, and engaging for all users.
          </Text>
        </View>
        <View style={styles.container3}>
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
        <View style={styles.containerFooter}>
          <Text style={styles.footTxt}>© Poverty Alleviation Credit Platform 2024, Developed By</Text>
          <TouchableOpacity onPress={shivam}>
          <Text style={{fontWeight:"bold", color:"#8aff33"}}>Shivam Kumar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Team

//---------------------------------------------------------------------
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView:{
    flex:1,
    alignItems:"center",
  },

//----------------------------------------------------------------------
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

//------------------------------------------------------------------
  container2:{                         //Our Teams
    flex:1,
    alignItems:"center",
    padding:10
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    color: '#555',
  },
//------------------------------------------------------------------
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
    height: 250,
    margin: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  founderImg:{
    width:160,
    height:175,
    borderRadius:75,
  },
  smallBoxTxt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#9c33ff',
  },

//------------------------------------------------------------------
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