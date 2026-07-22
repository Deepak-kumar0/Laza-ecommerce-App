// import { View, Text,StyleSheet,Image, TouchableOpacity, } from 'react-native'
// import React from 'react'
// import Buttond from '../components/button';

// export default function login({navigation}: {navigation: any}) {

//   return (
//     <View style={styles.container}>
//       <View style={styles.back}>
//         <Image source={require('../assets/Back.png')}/>
//       </View>
//       <Text style={styles.txt}>Let's get started</Text>

//     <View style={styles.hm}>

//     <TouchableOpacity style={styles.btn}>
//          <Image source={require('../assets/Facebook.png')} style={styles.socialIcon} />
//          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',}}>Facebook</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.btn, {backgroundColor:'#1DA1F2'}]}>
//          <Image source={require('../assets/Twitter.png')} style={styles.socialIcon} />
//          <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',}}>Twitter</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={[styles.btn, {backgroundColor:'#DB4437'}]}>
//         <Image source={require('../assets/Google.png')} style={styles.socialIcon} />
//         <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',}}>Google</Text>
//       </TouchableOpacity>

//     </View>
//       <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:10}}>
//         <Text style={[styles.acc,{fontSize:15, marginBottom:70, fontFamily: 'Inter_18pt-Regular'}]}>Already have an account?</Text>
//           <TouchableOpacity style={styles.acc}
//           onPress={()=> navigation.navigate('welcome')}>
//               <Text style={[styles.acc,{fontSize:15,  fontWeight:'bold',marginBottom:70,}]}>Signin</Text>
//             </TouchableOpacity>
//       </View>

//    {/* <TouchableOpacity style={styles.ca}>
//       < Text style={{color:'#fff',fontSize:20,fontWeight:'bold',}}>Create an Account</Text>
//     </TouchableOpacity> */}

//     <Buttond text="Create your account" onpress={()=>navigation.navigate('signup')}/>

//     </View>
//   )
// }
// const styles = StyleSheet.create({
// container:{
//   flex:1,

// },
// back:{
//     // alignItems:'flex-start',
//     marginLeft:20,
//     marginTop:40,
// },
// acc:{
//   justifyContent:'center',
//   alignItems:'center',
//   // marginBottom:10,

// },
// // ca:{//   justifyContent:'center',
// //   alignItems:'center',
// //   backgroundColor:'#9775FA',
// //   padding:25,
// // },
// hm:{
//   // marginTop:170,
//   alignItems:'center',
//   // flex: 1,
//    justifyContent:'center',

// },
// txt:{
//   fontSize:40,
//   fontWeight:'700',
//   marginTop:45,
//   textAlign:'center',
// },
// btn:{
//   flexDirection:'row',
//   justifyContent:'center',
//   alignItems:'center',
//   borderRadius:10,
//   marginHorizontal:18,
//   padding:20,
//   backgroundColor:'#4267B2',
//   margin:6,
// },

// socialIcon:{
//   width:25,
//   height:25,
//   marginRight:6,
// },

// });

// // import { View, Text,TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
// // import React from 'react';
// // import { useState } from 'react';
// // import CheckBox from '@react-native-community/checkbox';

// // export default function login({navigation}:any) {
// //   const [isChecked, setIsChecked] = useState(false);
// //   const [email, setEmail] = useState('');

// //   return (

// //     <View style={styles.container}>

// //       <Image
// //         source ={require('../assets/amazon-pay.png')}
// //         style={styles.img}
// //       />
// //       <View style={styles.loginview}>
// //       <Text style={styles.text}>Login</Text>

// //       <Text>Email</Text>
// //       <TextInput placeholder="Enter your email"  style={styles.email}
// //       value={email}
// //       onChangeText={setEmail}
// //       />

// //     <View style={styles.passwordLabelContainer}>
// //       <Text>Password</Text>
// //       <TouchableOpacity  onPress={() => navigation.navigate('Home')}>
// //         <Text style={styles.frgtpass}>Forgot Password</Text>
// //       </TouchableOpacity>
// //     </View>

// // <TextInput placeholder="Enter your password" style={styles.pass}/>

// //       <TouchableOpacity style={styles.loginbtn}>
// //         <Text style={styles.logintext}>Login</Text>
// //       </TouchableOpacity>

// //       <View style={styles.checkboxContainer}>
// //         <CheckBox
// //         value={isChecked}
// //         onValueChange={setIsChecked}/>
// //         <Text>Keep me signed in</Text>
// //       </View>

// //     <View style={styles.dividerContainer}>
// //       <View style={styles.line} />
// //       <Text style={styles.dividertext}>
// //         New to Amazon?
// //       </Text>
// //       <View style={styles.line} />

// //     </View>

// //     <View>

// //       <TouchableOpacity style={styles.accountbtn}>
// //         <Text style={styles.accounttext}>Create your Amazon account</Text>
// //       </TouchableOpacity>
// //     </View>

// //        </View>

// //        <View style={styles.footer}>
// //       <View style={styles.footerLinks}>
// //         <TouchableOpacity>
// //           <Text>Contitions of Use</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity>
// //           <Text>Privacy Notice</Text>
// //         </TouchableOpacity>

// //         <TouchableOpacity>
// //           <Text>Help</Text>
// //         </TouchableOpacity>

// //       </View>

// //       <Text>
// //         © 1996-2017, Amazon.com, Inc. or its affiliates
// //       </Text>
// //     </View>
// //     </View>

// //   )
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: 'white',
// //     padding: 20,
// //     // alignItems: 'center',
// //     // justifyContent: 'center',

// //   },
// //   passwordLabelContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     marginBottom: 5,
// //   },

// //   frgtpass:{
// //     textAlign: 'right',
// //     color: '#007185',
// //    marginBottom: 10,
// //    fontSize: 16,
// //   },
// //   footer:{
// //     marginTop: 50,
// //     alignItems: 'center',
// //   },
// //   footerLinks:{
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //     marginBottom: 10,
// //   },
// //   accountbtn:{
// //     borderWidth: 1,
// //     backgroundColor: '#f0c14b',
// //     borderColor: '#a88734',
// //     borderRadius: 6,
// //   },
// //   accounttext:{
// //     textAlign: 'center',
// //     padding: 10,
// //   },

// //   checkboxContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   dividerContainer: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     marginVertical: 20,
// //   },
// //   line:{
// //     flex: 1,
// //     height: 1,
// //     backgroundColor: '#d5d9d9',
// //   },
// //   dividertext:{
// //     marginHorizontal: 10,
// //       color: '#767676',
// //     fontSize: 16,
// //   },

// //   pass:{
// //     borderWidth: 1,
// //     marginBottom: 20,
// //   },
// //   email:{
// //     borderWidth: 1,
// //     marginBottom: 20,
// //   },
// //   text:
// //   {
// //     fontSize: 40,
// //     marginBottom: 20,
// //   },
// //   loginview:{
// //     borderWidth: 1,
// //     borderColor: '#ddd',
// //     borderRadius: 6,
// //     padding: 20,
// //   },
// //   loginbtn:{
// //     borderWidth: 1,
// //     backgroundColor: 'yellow',

// //   },
// //   logintext:{
// //     textAlign: 'center',
// //     padding: 10,
// //   },
// //   img:{
// //     width: 200,
// //     height: 100,
// //     marginTop: 30,
// //     alignSelf: 'center',

// //   },
// // });
// import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Buttond from '../components/button';

export default function Login({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/Back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Let's Get Started</Text>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
          <Image
            source={require('../assets/Facebook.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.twitter]}>
          <Image
            source={require('../assets/Twitter.png')}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialButton, styles.google]}>
          <Image source={require('../assets/Google.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.normalText}>Already have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
          <Text style={styles.signinText}> Signin</Text>
        </TouchableOpacity>
      </View>

      <Buttond
        text="Create an Account"
        onpress={() => navigation.navigate('signup')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    marginTop: 40,
    paddingHorizontal: 20,
  },

  backIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },

  titleContainer: {
    marginTop: 35,
    alignItems: 'center',
  },

  title: {
    fontSize: 38,
    fontWeight: '700',
    color: '#222',
  },

  socialContainer: {
    marginTop: 190,
    paddingHorizontal: 20,
  },

  socialButton: {
    height: 58,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  facebook: {
    backgroundColor: '#4267B2',
  },

  twitter: {
    backgroundColor: '#1DA1F2',
  },

  google: {
    backgroundColor: '#EA4335',
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 100,
  },

  normalText: {
    color: '#9A9A9A',
    fontSize: 17,
  },

  signinText: {
    color: '#222',
    fontSize: 17,
    fontWeight: '700',
  },
});
