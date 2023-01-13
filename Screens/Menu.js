import React from 'react'
import { StyleSheet, Text, View ,Button} from 'react-native';
const Menu = ({navigation}) => {
    return (
        
         <View  >
            <Text>dfhnjkhfas</Text>
            <Button style={styles.button}  title="Push notifications"  onPress={()=>navigation.navigate('Notifications')}/>
         </View>
       )
}

export default Menu
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   backgroundColor:'yellow'
    },
    button:{
        padding:30
    }
  });