import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, 
    ImageBackground, SafeAreaView, Platform, Image,
     Alert, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Register() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={ require('../assets/Group17.png')} resizeMode='stretch' style={{flex:1,}}>
        <View style={styles.heder}/>
        <Image source={ require('../assets/Menu.png')} style={styles.menu}/>
        <Image source={ require('../assets/projectlogomini.png')} style={styles.logomini}/> 
        <Text style={styles.head} >Ayurveda Medi App </Text>
        <Text style={{fontSize:20, textAlign:'center',marginTop:'7%', marginBottom:'10%' }}>Register</Text>

        <StatusBar style="auto" />
        <View style={styles.textInput}>
            <TextInput placeholder='Register As' style={styles.TypeingText}></TextInput>
        </View>
       
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >Name</Text>
            <TextInput placeholder='Moda Pawi' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >NIC</Text>
            <TextInput placeholder='981234567V' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >District</Text>
            <TextInput placeholder='Allapurate' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >Contact No</Text>
            <TextInput placeholder='0760806879' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >Email</Text>
            <TextInput placeholder='modapawi98@gmail.com' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >Passward</Text>
            <TextInput placeholder='********' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
          
        <View style={{flex:3, flexDirection:'row', alignItems:'center', marginLeft:"10%", marginTop:'2%',}}>
            <Text style={{flex:1, fontSize:16}} >Re-Enter Passward</Text>
            <TextInput placeholder='********' style={{ flex:2, fontSize:16}}></TextInput>
        </View>
        <View style={{backgroundColor: '#000000', height: 2, width:'80%', marginLeft:'10%'}}></View>
        

        <Pressable style={styles.Press} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.ButtonText}>Register</Text>
        </Pressable>
                
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

    textInput:{
        backgroundColor:'#ffffff',
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom:'5%',
        height:45,
        borderRadius:25,
        justifyContent :'center',
        borderWidth:2,
        borderColor: '#1CAB4C',
    },

    TypeingText:{
        marginLeft: 15,
        fontSize:16,
        color:'#1CAB4C',

     },

     Press:{
        backgroundColor:'#1CAB4C',
        marginTop:'10%',
        marginBottom:'5%',
        height:45,
        marginLeft: '30%',
        marginRight:'30%',
        borderRadius:25,
        justifyContent :'center',
     },

     ButtonText:{
        textAlign:'center',
        fontSize:18,
        color:'#ffffff'
     },
    
        
})

export default Register;