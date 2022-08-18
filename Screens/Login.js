import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, Platform, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={ require('../assets/Group17.png')} resizeMode='stretch' style={{flex:1,}}>
        <View style={styles.heder}/>
        <Image source={ require('../assets/Menu.png')} style={styles.menu}/>
        <Image source={ require('../assets/projectlogomini.png')} style={styles.logomini}/> 
        <Text style={styles.head} >Ayurveda Medi App </Text>
        <Text style={{fontSize:20, textAlign:'center',marginTop:20, }}>This is camera page</Text>
        <StatusBar style="auto" />
        
        
      </ImageBackground>
      </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
        
    },
  
    heder: {
    paddingTop: Platform.OS === 'android' ? StatusBar.height : 0,
    marginTop: 30,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    },

    menu: {
      height:20, 
      width:20, 
      resizeMode:'contain',
      marginLeft:'2%', 
      marginTop:55, 
      position: 'absolute',
      },
      logomini:{
        alignSelf:'flex-end', 
        height:50, 
        width:50, 
        resizeMode:'contain', 
        marginTop:35, 
        position: 'absolute', 
        marginRight:'5%',
        },
        head:{
          textAlign:'center',
          fontSize:20,
          marginTop:-40,
          // fontFamily:'Arial',
        },
        fotter:{
            flex : 1,
            justifyContent: 'space-evenly',
            flexDirection:'row', 
            alignItems:'flex-end', 
            marginBottom: '3%' 
          }
        
})

export default Login;