import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, ImageBackground, SafeAreaView, Platform, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Camera} from "expo-camera";


function CameraApp() {
    const navigation = useNavigation();
    const [startCamera,setStartCamera] = React.useState(false);
  //   const [previewVisible, setPreviewVisible] = useState(false);
  // const [capturedImage, setCapturedImage] = useState<any>(null);
    

    const __startCamera = async () => {
      const {status} = await Camera.requestCameraPermissionsAsync()
      if(status === 'granted'){
        setStartCamera(true)
      
      }else{
        Alert.alert("Access denied")
      }
    }

    const __takePicture = async () => {
      if (!camera) return
      const photo = await camera.takePictureAsync()
      console.log(photo)
      setPreviewVisible(true)
      setCapturedImage(photo)
    }

    return (
        <SafeAreaView style={{ flex: 1,}}>
        <ImageBackground source={ require('../assets/Group17.png')} resizeMode='stretch' style={{flex:1,}}>
        <View style={styles.heder}>
          <TouchableOpacity onPress={()=> Alert.alert('Navigation Page will pop-up.')}>
            <Image source={ require('../assets/Menu.png')} style={styles.menu}/>
          </TouchableOpacity>
          <Text style={styles.head} >Ayurveda Medi App </Text>
          <Image source={ require('../assets/projectlogomini.png')} style={styles.logomini}/>
        </View>
        <StatusBar style="auto" />
        
        {startCamera ? (
          <Camera
            style={{flex: 1,width:"90%", height:"50%",alignSelf:'center',marginBottom:"2%"}}
            ref={(r) => {
              camera = r
            }}
          ></Camera>
        ) : (
          <View
            style={{
              flex: 1,
              width:"90%",
              height:"50%",
              backgroundColor: '#fff',
              alignSelf:'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom:"2%"
            }}
          >
            <TouchableOpacity
              onPress={__startCamera}
              style={{
                width: 130,
                borderRadius: 4,
                backgroundColor: '#14274e',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Take picture
              </Text>
            </TouchableOpacity>
          </View>
          
        )}
        

        <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          <TouchableOpacity onPress={__takePicture}>
          <Image source={require('../assets/camera.png')}/>
          </TouchableOpacity>
          </View>

        
      
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
        
})

export default CameraApp;