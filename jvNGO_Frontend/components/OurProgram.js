import { ScrollView, Image, StyleSheet, Text, View, Linking , Button, TouchableOpacity} from 'react-native'
import React from 'react'

const OurProgram = () => {
  const donate = () => {
    Linking.openURL("https://pages.razorpay.com/JVSF-SocialWelfare");
  };
  const donateCampaign = () => {
    Linking.openURL("https://razorpay.me/@jvsmileysfoundation");
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
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>What We Do</Text>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>YOUTH EMPOWERMENT</Text>
          <Text style={{fontSize:20, color:"orange"}}>We are in search of opportunities to help as many youths as possible. We approach all those who are in need.</Text>
          <Image source={require('../assets/programs/youth.png')} style={styles.img}/>
          <Button onPress={donate} title="Donate ❤️"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>EDUCATION</Text>
          <Text style={{fontSize:20, color:"orange"}}>Explore the dynamic world of education and its profound influence on individual lives and society as a whole.</Text>
          <Image source={require('../assets/programs/education.jpg')} style={styles.img}/>
          <Button onPress={donate} title="Create Future ❤️"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>HEALTH CARE</Text>
          <Text style={{fontSize:20, color:"orange"}}>Join our NGO's healthcare campaign to promote wellness, provide essential medical services, and foster a healthier future for all.</Text>
          <Image source={require('../assets/programs/health.jpg')} style={styles.img}/>
          <Button onPress={donate} title="Hope 4 Health ❤️"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>SOCIAL WELFARE</Text>
          <Text style={{fontSize:20, color:"orange"}}>We champion equality, education, and healthcare for a brighter and inclusive future for all.</Text>
          <Image source={require('../assets/programs/socialwelfare.jpg')} style={styles.img}/>
          <Button onPress={donate} title="Donate ❤️"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>WOMEN EMPOWERMENT</Text>
          <Text style={{fontSize:20, color:"orange"}}>There is no force more powerful than a woman determined to rise</Text>
          <Image source={require('../assets/programs/women.png')} style={styles.img}/>
          <Button onPress={donate} title="Swabhiman ❤️"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>ENVIRONMENT</Text>
          <Text style={{fontSize:20, color:"orange"}}>Join our NGO's Environmental Campaign for a Sustainable Future.</Text>
          <Image source={require('../assets/programs/environment.jpg')} style={styles.img}/>
          <Button onPress={donate} title="Better Earth ❤️"/>
          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>DISASTER RELIEF</Text>
          <Text style={{fontSize:20, color:"orange"}}>We respond swiftly to crises, providing urgent aid, shelter, and support to those affected by natural disasters and emergencies worldwide.</Text>
          <Image source={require('../assets/programs/disaster.png')} style={styles.img}/>
          <Button onPress={donate} title="Ready Relief ❤️"/>
        </View>
        <View style={styles.container3}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:120, marginTop:20}}>Recent Campaigns</Text>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>New Life Of Children, In a new Land</Text>
          <Text style={{fontSize:20, color:"green"}}>
We have built shelter homes in different regions so children can move out of undeveloped areas to live, study and work in bigger and better cities.</Text>
          <Image source={require('../assets/programs/newlife.jpg')} style={styles.img2}/>
          <Button onPress={donateCampaign} title="💰 Donate Now"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>New Life For Exploited Children</Text>
          <Text style={{fontSize:20, color:"green"}}>
          Children and youngsters who are exploited in their early days need a helping hand and support for their mental health. We take them out of this zone to give them a better life.</Text>
          <Image source={require('../assets/programs/newfuture.jpg')} style={styles.img2}/>
          <Button onPress={donateCampaign} title="💰 Donate Now"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>
Bringing Dreams Within Reach For Children</Text>
          <Text style={{fontSize:20, color:"green"}}>
          The underprivileged children do not have access to required financial help and resources needed to live the life of their dreams. We help them with everything they’ll need to live their dreams.</Text>
          <Image source={require('../assets/programs/bringingdreams.jpg')} style={styles.img2}/>
          <Button onPress={donateCampaign} title="💰 Donate Now"/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>
Share The Warmth, Share Your Love</Text>
          <Text style={{fontSize:20, color:"brown"}}>

          The “Campaign Blanket Distribution” aims to provide warmth to those in need during the winter session.{"\n"} 
Your generous contribution can bring comfort and peaceful sleep to individuals who are hopeful that compassionate hearts will provide them with solace.{"\n"}
Join us in making a difference by participating in this initiative and spreading the warmth of kindness.</Text>
          <Image source={require('../assets/programs/jvdonationcard.jpeg')} style={styles.img3}/>
          <Button onPress={donateCampaign} title="💰 Donate Now"/>
          <Text style={{fontSize:50, color:"gray"}}>₹ 47,500</Text>
          <Text style={{fontSize:22, color:"gray"}}>Total Donations Raised So Far This Year</Text>
        </View>
        <View style={styles.container4}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200, marginTop:20}}>News Articles</Text>
          <Image source={require('../assets/newsArticles/news1.jpeg')} style={styles.newsImg1}/>
          <Image source={require('../assets/newsArticles/news2.jpeg')} style={styles.newsImg2}/>
          <Image source={require('../assets/newsArticles/news3.jpeg')} style={styles.newsImg3}/>
          <Image source={require('../assets/newsArticles/news4.jpg')} style={styles.newsImg4}/>
          <Image source={require('../assets/newsArticles/news5.jpg')} style={styles.newsImg5}/>
          <Image source={require('../assets/newsArticles/news6.jpg')} style={styles.newsImg6}/>
        </View>
        <View style={styles.container5}>
          <Text style={{fontSize:30, fontWeight:"bold", color:"black",marginRight:45, marginTop:20}}>What Others Have To Say</Text>
          <View style={styles.innerContainer}>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/testimonials/testImg1.png')} style={styles.testImg}/>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>Dr. Rohit (Physio)</Text>
              </View>
            </View>
            <Text style={{fontSize:20, color:"gray", marginTop:20}}>A NGO that truely works for the upliftment and betterment of society with its vision of considering children as the future of the country..............Great going</Text>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/testimonials/testImg2.png')} style={styles.testImg}/>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>Sumit Kumar (Member)</Text>
              </View>
            </View>
            <Text style={{fontSize:20, color:"gray", marginTop:20}}>We Strongly recommend this NGO , if you wish to work or help.</Text>
            <View style={styles.row}>
              <View style={styles.smallBox}>
                <Image source={require('../assets/testimonials/testImg3.png')} style={styles.testImg}/>
              </View>
              <View style={styles.smallBox}>
              <Text style={styles.smallBoxTxt}>Dr. Aishwarya Kashyap (Physio)</Text>
              </View>
            </View>
            <Text style={{fontSize:20, color:"gray", marginTop:20}}>Being a Member of this NGO it provides me a great scope and opportunity to help needy and treat patient. .. also helping poor child with their education..</Text>
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

export default OurProgram

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
  img:{
    width:400,
    height:200,
    margin:10,
  },
  
  container3:{                        //recent campaigns
    flex:1,
    alignItems:"center",
  },
  img2:{
    width:300,
    height:300,
    margin:10,
  },
  img3:{
    width:400,
    height:700,
    margin:10,
  }, 

  container4:{                      //news Articles
    flex:1,
    alignItems:"center",
  },
  newsImg1:{
    width:400,
    height:285,
    margin:10,
  },
  newsImg2:{
    width:400,
    height:300,
    margin:10,
  },
  newsImg3:{
    width:400,
    height:360,
    margin:10,
  },
  newsImg4:{
    width:400,
    height:410,
    margin:10,
  },
  newsImg5:{
    width:300,
    height:900,
    margin:10,
  },
  newsImg6:{
    width:400,
    height:300,
    margin:10,
  },

  container5:{                            //what others have to say
    flex:1,
    alignItems:"center",
  },
  testImg:{
    width:100,
    height:100,
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
    fontSize: 20,
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