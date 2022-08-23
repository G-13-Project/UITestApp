import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, Platform, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={ require('../assets/Group17.png')} resizeMode='stretch' style={{flex:1,}}>
          <View style={styles.heder}>
          <TouchableOpacity onPress={()=> Alert.alert('Navigation Page will pop-up.')}>
            <Image source={ require('../assets/Menu.png')} style={styles.menu}/>
          </TouchableOpacity>
          <Text style={styles.head} >Ayurveda Medi App </Text>
          <Image source={ require('../assets/projectlogomini.png')} style={styles.logomini}/>
          </View>
          <Text style={{fontSize:40, textAlign:'center',marginTop:20, color:"#47D50D"}}>Pre-Medication</Text>
          <StatusBar style="auto" />
            
          
          <View style={styles.fotter}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/home.png')} style={{alignContent:'flex-end'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
            <Image source={require('../assets/camera.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image source={require('../assets/search.png')}/>
            </TouchableOpacity>
          </View>
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
    flexDirection:'row',
    marginTop: 30,
    height: 60,
    width: '100%',
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'space-between',
    },
    menu: {
    height:20, 
    width:20, 
    resizeMode:'contain',
    marginLeft:10,
    },
    head:{
      textAlign:'center',
      fontSize:20,
      // fontFamily:'Arial',
    },
    logomini:{  
    height:50, 
    width:50, 
    resizeMode:'contain',
    marginRight:10,
    },
    
    fotter:{
      flex : 1,
      justifyContent: 'space-evenly',
      flexDirection:'row', 
      alignItems:'flex-end', 
      marginBottom: '3%' 
    }
  });
  

export default Home;