import React , { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Screens/Menu';
import Notifications from './Screens/Notification';
const Stack = createNativeStackNavigator();
import PushNotification from "react-native-push-notification";
import Map from './Screens/Map';
const Ap = () => {


  const createChannels = () => {
    PushNotification.createChannel(
        {
            channelId: "test-channel",
            channelName: "Test Channel"
        }
    )
}
useEffect(() => {
   
  createChannels();
}, []);

  return (
      
        
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu"
          component={Menu}/>
            <Stack.Screen name="Notifications"
          component={Notifications}/>
           <Stack.Screen name="Location"
            initialParams={{city:'chandigarh',}}
          component={Map}/>
  
        </Stack.Navigator>
  
      </NavigationContainer>
    
  );
};

export default Ap;
