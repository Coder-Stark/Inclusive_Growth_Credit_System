import { ScrollView, Image, StyleSheet, Text, View, Linking , Button, TouchableOpacity} from 'react-native'
import React from 'react'

const OurProgram = () => {
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
          <Text style={{fontSize:30, fontWeight:"bold", color:"black", marginRight:200}}>What We Do</Text>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Easy Loan Application Process</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Hassle-Free Access:</Text> Simplified loan application process without the need for ITR or extensive paperwork.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Affordable Interest Rates:</Text> Get loans at rates significantly lower than private lenders, making credit accessible to low-income individuals.
            </Text>
            <Text style={styles.listItem}>
            <Text style={styles.bold}>Instant Loan Calculator:</Text> Know your loan eligibility, interest rate, and EMIs instantly.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/loans.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Recurring Deposit (RD) Accounts</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Higher Interest Rates:</Text> Open an RD account with us and earn more interest than regular banks.
              </Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Flexible Deposits:</Text> Set your deposit amount as per your capability and watch your savings grow over time.
            </Text>
            <Text style={styles.listItem}>
            <Text style={styles.bold}>Save and Borrow</Text>Build your credibility for better loan terms while simultaneously growing your savings.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/rd.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Transparent Financial Services</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>No Hidden Charges: </Text> All terms and conditions are clear and simple, ensuring trust.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Track Evertything: </Text>View your loan balance, repayment schedule, and RD maturity details right from the app.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/transSave.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Loan Repayment Made Simple</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Multiple Payment Options:</Text>Pay EMIs through UPI, net banking, or cash at local service points.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Grace Period: </Text> Flexibility to accommodate unexpected financial challenges with minimal penalties.
            </Text>
            <Text style={styles.listItem}>
            <Text style={styles.bold}>Automated Reminders</Text> Get reminders for due payments to avoid missed EMIs.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/transRepay.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Personalized Dashboard</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>User Profile: </Text> Manage your profile, view your financial history, and track all transactions in one place.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Financial Insights: </Text> Get insights on your savings and repayment history to plan your future better.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/dashboard.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Creditworthiness Score</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Build Trust:</Text> Improve your creditworthiness by maintaining RD accounts and timely loan repayments.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Exclusive Benefits:</Text> Higher scores unlock better loan terms and additional benefits over time.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/credScore.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Community Support</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>24/7 Assistance:</Text> Dedicated customer support for any issues related to loans or savings accounts.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Financial Education:</Text> Access guides, tips, and videos to help you understand loans, savings, and financial planning better.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/commsupport.png')} style={styles.img}/>

          <Text style={{fontSize:25, fontWeight:"bold", color:"gray", marginTop:20}}>Secure And Reliable</Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Data Protection:</Text> Your data is encrypted and safeguarded to ensure complete privacy.</Text>
            <Text style={styles.listItem}>
              <Text style={styles.bold}>Regulatory Compliance:</Text> All financial services adhere to government regulations and ethical practices.
            </Text>
          </View>
          <Image source={require('../assets/ourprograms/fd.png')} style={styles.img}/>
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

export default OurProgram

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView:{
    flex:1,
    alignItems:"center",
  },

//-------------------------------------------------------------------------
  container1:{                          //JvNGO logo and some text
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

//-----------------------------------------------------------------------------
  container2:{                         //what we do
    flex:1,
    alignItems:"center",
    padding:10
  },
  img:{
    width:200,
    height:200,
    margin:10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
//------------------------------------------------------------------------------
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