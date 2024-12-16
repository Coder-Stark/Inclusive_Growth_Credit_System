import {StyleSheet, Text, View, ScrollView, Image, Linking, TouchableOpacity} from 'react-native';
import React from 'react';

const Policies = () => {
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
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'purple',
              marginTop: 10,
            }}>
            Privacy's Policy
          </Text>
          <Text style={{fontSize: 17, color: 'gray', margin: 10}}>
            <Text style={styles.txtBold}>Who We Are{'\n'}</Text>
            Poverty Alleviation Credit Platform (PACP) is dedicated to bridging the financial gap for underserved communities by providing accessible and affordable credit solutions. Our website address is: https://povertyalleviationcredit.org.{'\n'}

            <Text style={styles.txtBold}>Data We Collect{'\n'}</Text>
            We collect personal and financial information required to evaluate loan applications and offer personalized services. This includes your name, contact details, and income-related data. Rest assured, all data is securely encrypted to ensure privacy.{'\n'}

            <Text style={styles.txtBold}>How We Use Your Data{'\n'}</Text>
            Your data is used to process loan applications, determine creditworthiness, and provide tailored recommendations. We do not sell or share your data with third parties without your explicit consent, except as required by law or to improve service delivery.{'\n'}

            <Text style={styles.txtBold}>Cookies and Tracking{'\n'}</Text>
            We use cookies to enhance your browsing experience and gather analytics. You can disable cookies in your browser settings, but this may affect platform functionality.{'\n'}

            <Text style={styles.txtBold}>Your Rights{'\n'}</Text>
            You have full control over your data. You can request a copy of the data we hold about you or ask for its deletion at any time, except where it must be retained for legal or operational purposes.{'\n'}

            <Text style={styles.txtBold}>Security{'\n'}</Text>
            We implement advanced encryption and secure protocols to protect your data against unauthorized access. Users are encouraged to maintain strong passwords and update them regularly.{'\n'}

            <Text style={styles.txtBold}>Contact Us{'\n'}</Text>
            If you have any concerns about your data or our policies, contact us at support@povertyalleviationcredit.org or call +91-XXXXXXXXXX during business hours (9 am to 6 pm, Monday-Friday).{'\n'}
          </Text>

        </View>
        <View style={styles.container3}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#9c33ff',
              marginTop: 10,
            }}>
            Terms and Conditions
          </Text>
          <Text style={{fontSize: 17, color: 'gray', margin: 10}}>
            <Text style={styles.txtBold}>Acceptance of Terms{'\n'}</Text>
            By accessing or using the Poverty Alleviation Credit Platform (PACP), you agree to these Terms and Conditions. If you do not agree, please discontinue use of our services immediately.{'\n'}

            <Text style={styles.txtBold}>Platform Use{'\n'}</Text>
            1. PACP is intended to provide accessible credit solutions for low-income individuals and communities. By using the platform, you confirm that all information you provide is accurate and truthful.{'\n'}
            2. You agree not to misuse the platform, including unauthorized access, spamming, or any activity that compromises the security of our users and systems.{'\n'}

            <Text style={styles.txtBold}>Loan Agreements{'\n'}</Text>
            All loan applications and agreements are subject to review and approval based on eligibility criteria. You are responsible for providing all required documentation in a timely manner. Approved loans must be repaid as per the terms outlined in the agreement.{'\n'}

            <Text style={styles.txtBold}>Modification of Terms{'\n'}</Text>
            PACP reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of the platform after changes indicates your acceptance of the revised terms.{'\n'}

            <Text style={styles.txtBold}>Liability Disclaimer{'\n'}</Text>
            PACP strives to ensure the accuracy of information on its platform but does not guarantee the completeness or reliability of any data. Users are responsible for verifying the information before making financial decisions.{'\n'}

            <Text style={styles.txtBold}>Intellectual Property{'\n'}</Text>
            All content, including logos, designs, and platform features, is owned by PACP. Unauthorized reproduction or use is prohibited unless explicitly approved in writing.{'\n'}

            <Text style={styles.txtBold}>Contact Us{'\n'}</Text>
            For any questions regarding these terms, contact us at support@povertyalleviationcredit.org or call +91-XXXXXXXXXX during business hours (9 am to 6 pm, Monday-Friday).{'\n'}
          </Text>

        </View>
        <View style={styles.container4}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#9c33ff',
              marginTop: 10,
            }}>
            Refund Policy
          </Text>
          <Text style={{fontSize: 17, color: 'gray', margin: 10}}>
            <Text style={styles.txtBold}>Refund Policy{'\n'}</Text>
            <Text style={styles.txtBold}>Eligibility for Refunds{'\n'}</Text>
            1. Donations made through our platform are generally non-refundable. However, refunds may be issued in the following scenarios:{'\n'}
              - Duplicate transactions.{'\n'}
              - Technical errors resulting in incorrect amounts being charged.{'\n'}

            <Text style={styles.txtBold}>Requesting a Refund{'\n'}</Text>
            To request a refund, contact us at support@povertyalleviationcredit.org within 30 days of the transaction. Please provide the following details:{'\n'}
            - Transaction ID.{'\n'}
            - Reason for the refund.{'\n'}
            - Proof of payment.{'\n'}

            <Text style={styles.txtBold}>Refund Process{'\n'}</Text>
            Approved refunds will be processed within 7-10 business days to the original payment method. PACP is not responsible for delays caused by payment gateways or financial institutions.{'\n'}

            <Text style={styles.txtBold}>Loan Repayments{'\n'}</Text>
            Repayments for loans are non-refundable unless there has been an error in the transaction. Refunds for such cases will be reviewed on a case-by-case basis.{'\n'}

            <Text style={styles.txtBold}>Contact Information{'\n'}</Text>
            If you have questions or concerns about our refund policy, please reach out to support@povertyalleviationcredit.org or call +91-9971365661.{'\n'}
          </Text>

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

export default Policies;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView: {
    flex: 1,
    alignItems: 'center',
  },

//----------------------------------------------------------------
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

//--------------------------------------------------------------
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  txtBold: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  container3: {
    flex: 1,
    alignItems: 'center',
  },

  container4: {
    flex: 1,
    alignItems: 'center',
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
});
