import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Button } from 'react-native';
import PushNotification from "react-native-push-notification";
const Notifications = () => {
    // const createDataChannels=()=>{
    //     channelId:"test-channel",
    //     channelName="testChannel"
    // }

    // useEffect(()=>{
    //     createDataChannels()
    // },[])

    const handleNotificatidfons=()=>{
        PushNotification.localNotification({
            channelId:"test-channel",
            title:'dhan waheguru',
            message:'waheguru ji ka khalsa , waheguru ji ki fateh'
        })
    }
    const handleNotification = () => {

        //previous all notifications clear , when new notification received
       PushNotification.cancelAllLocalNotifications();

        PushNotification.localNotification({
            channelId: "test-channel",
            title: "whatsapp ",
            message:'waheguru ji ka khalsa , waheguru ji ki fateh ',
            bigText:  "  is one of the largest and most beatiful cities in  " ,
            color: "red",
            id: 1
        });

        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm",
            message: "You clicked on " + 596805 + " 20 seconds ago",
            date: new Date(Date.now() + 20 * 1000),
            allowWhileIdle: true,
        });
    }

    return (
        <View style={styles.container}>
         <Text> Notifications screen</Text>
         <Button style={styles.button}  title="send notifications"  onPress={()=>handleNotification()}/>
     </View>
    )
}

export default Notifications
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });