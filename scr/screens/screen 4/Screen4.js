
import React from "react";
import "./Screen4Style.js";
import logo from "../../../asts/logo1.jpeg";
import { styles } from "./Screen4Style.js";

import Button from 'react-native-flat-button';

import { View, Text, Image, TextInput } from "react-native";


function Screen4() {
    return (
        <View style={styles.Hader}>
            <View style={styles.logo}>
                <Image source={require('../../../asts/logo1.jpeg')}  />
            </View>

            <View style={styles.centerView}>

        <TextInput
        style={styles.input}
        placeholderTextColor="#ffff"
       placeholder="User Email"
        
      />
        <TextInput
        style={styles.input}
        placeholderTextColor="#ffff"
       placeholder="Password"
      
        
      />
      <Text style={styles.text} >
          Forget Password
      </Text>

            </View>

            <View style={styles.endView}>
            <Button
          type="negative"
          onPress={() => Alert.alert('Negative Button')}
          containerStyle={styles.buttonContainer}
        >
         Login
        </Button> 

                
            </View>



        </View>

    )
}

export default Screen4;