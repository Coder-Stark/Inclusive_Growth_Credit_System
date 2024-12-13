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
          <Text style={styles.txt}>JV GROUP</Text>
          <Image source={require('../assets/jvlogo.png')} style={styles.logo} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            JV Smileys Foundation
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: 'bold',
              color: 'gray',
              textAlign: 'center',
            }}>
            One Step To Save Smile
          </Text>
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
            <Text style={styles.txtBold}>Who we are Suggested text:</Text>
            {'\n'}Our website address is: {'\n'}
            https://jvsmileysfoundation.org.in.{'\n'}
            <Text style={styles.txtBold}>Comments{'\n'}</Text>
            Suggested text: When visitors leave comments on the site we collect
            the data shown in the comments form, and also the visitor’s IP
            address and browser user agent string to help spam detection.{'\n'}
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available here:
            https://automattic.com/privacy/. After approval of your comment,
            your profile picture is visible to the public in the context of your
            comment.{'\n'}
            <Text style={styles.txtBold}>Media{'\n'}</Text>
            Suggested text: If you upload images to the website, you should
            avoid uploading images with embedded location data (EXIF GPS)
            included. Visitors to the website can download and extract any
            location data from images on the website.{'\n'}
            <Text style={styles.txtBold}>Cookies{'\n'}</Text>
            Suggested text: If you leave a comment on our site you may opt-in to
            saving your name, email address and website in cookies. These are
            for your convenience so that you do not have to fill in your details
            again when you leave another comment. These cookies will last for
            one year.{'\n'}
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.{'\n'}
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select "Remember Me", your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
            {'\n'}
            If you edit or publish an article, an additional cookie will be
            saved in your browser. This cookie includes no personal data and
            simply indicates the post ID of the article you just edited. It
            expires after 1 day.{'\n'}
            <Text style={styles.txtBold}>
              Embedded Content from other Websites{'\n'}
            </Text>{' '}
            Suggested text: Articles on this site may include embedded content
            (e.g. videos, images, articles, etc.). Embedded content from other
            websites behaves in the exact same way as if the visitor has visited
            the other website.
            {'\n'}
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.{'\n'}
            <Text style={styles.txtBold}>
              Who we share your data with{'\n'}
            </Text>
            Suggested text: If you request a password reset, your IP address
            will be included in the reset email.{'\n'}
            <Text style={styles.txtBold}>
              How long we retain your data{'\n'}
            </Text>
            Suggested text: If you leave a comment, the comment and its metadata
            are retained indefinitely. This is so we can recognize and approve
            any follow-up comments automatically instead of holding them in a
            moderation queue.{'\n'}
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.{'\n'}
            <Text style={styles.txtBold}>
              What rights you have over your data{'\n'}
            </Text>
            Suggested text: If you have an account on this site, or have left
            comments, you can request to receive an exported file of the
            personal data we hold about you, including any data you have
            provided to us. You can also request that we erase any personal data
            we hold about you. This does not include any data we are obliged to
            keep for administrative, legal, or security purposes.{'\n'}
            <Text style={styles.txtBold}>Where your data is sent{'\n'}</Text>
            Suggested text: Visitor comments may be checked through an automated
            spam detection service.
          </Text>
        </View>
        <View style={styles.container3}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'red',
              marginTop: 10,
            }}>
            Terms and Conditions
          </Text>
          <Text style={{fontSize: 17, color: 'gray', margin: 10}}>
            <Text style={styles.txtBold}>Use of the website is provided by JV Smileys Foundation subject to
            the following Terms and Conditions:</Text>{'\n'}
            {" -> "}By using this website you are
            accepting the terms and conditions. They are effective from your
            first visit.{'\n'} 
            {" -> "}JV Smileys Foundation (JVSF) may change these terms and
            conditions from time to time; your use of the website indicates your
            acceptance of the terms and conditions at the time of use.{'\n'}
            {" -> "}JV Smileys Foundation (JVSF) reserves the right to change the content
            of the website at any time.{'\n'}
            {" -> "}JV Smileys Foundation (JVSF) has taken
            every precaution to make sure the content of this website is
            accurate and legally correct at the time of appearance. If you
            believe the content of any of our pages is inaccurate please contact
            us, email suppport@jvsmileysfoundation.org.in{'\n'}
            {" -> "}JV Smileys Foundation
            (JVSF) accepts no liability for loss or damage, including personal
            injury, resulting from use of this website. JV Smileys Foundation
            (JVSF) makes all reasonable efforts to make sure malware or viruses
            are not transmitted from this website, however this cannot be
            guaranteed. We recommend that you safeguard your IT equipment before
            downloading information and files. JV Smileys Foundation (JVSF) will
            not accept liability for damage caused by viruses.{'\n'}
            {" -> "}When we provide
            links to other websites it does not mean that we approve of or
            endorse the views and information contained in the website. We
            accept no liability for damage caused by malware or viruses on
            websites that we have linked to.{'\n'}
            {" -> "}Please request permission before
            using our logos or other branded material. We reserve the right to
            require our logo to be removed from websites or printed material if
            it is not in our interests.{'\n'}
            {" -> "}Our downloadable documents, brochures
            and web pages are provided for your use. You may copy or print the
            information for private purpose including teaching. You may not
            amend the content or use it for commercial purposes without JV
            Smileys Foundation (JVSF)’ written consent.{'\n'}
            {" -> "}Images and photos used
            on this website are the property of JV Smileys Foundation (JVSF) or
            other Copyright owners. The may not be reproduced or used without JV
            Smileys Foundation (JVSF)’ or the copyright owner’s written consent.{'\n'}
            {" -> "}If there is any conflict between these terms and conditions and
            rules or specific terms of use relating to specific material then
            the latter shall prevail.
          </Text>
        </View>
        <View style={styles.container4}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'green',
              marginTop: 10,
            }}>
            Refund Policy
          </Text>
          <Text style={{fontSize: 17, color: 'gray', margin: 10}}>
            <Text style={styles.txtBold}>Can I cancel a donation that I’ve made?</Text>{'\n'}
            Yes, you can ask for a refund for a donation any time up to 30 days after payment was made. However, in case of refund the Original 80G receipt should be submitted to the Organisation. If 80G receipt is lost by donor then a declaration should be provided stating that “I have lost the donation receipt of Rs. ____________ having receipt number____, and this is to declare that I will not claim this donation amount for income tax exemption”.{'\n'}
            <Text style={styles.txtBold}>Can I get a refund?</Text>{'\n'}
            Like most website operators, JVSF collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. JVSF’s purpose in collecting non-personally identifying information is to better understand how JVSF’s visitors use its website. From time to time, JVSF may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.{'\n'}
            Delivery{'\n'}
            We will send you a receipt for your donation in the post and/or via email, according to your preferences.{'\n'}
            <Text style={styles.txtBold}>Doner Services Contact Information</Text>{'\n'}
            For any information relating to a donation, please email support@jvsmileysfoundation.org.in or telephone the Catalysts for JVSF Donation Department on +91-7004860563 during office hours (9 am to 6 pm Monday-Friday).
          </Text>
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

export default Policies;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  homeView: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    //JvNGO logo and some text
    width: '100%',
    height: 180,
    backgroundColor: 'brown',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
  },

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
