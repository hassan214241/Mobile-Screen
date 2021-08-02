import React from 'react';
import "./ScreenStyle.js";
import { styles } from './ScreenStyle.js';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  
} from 'react-native';

const imag = { uri: "https://images.unsplash.com/photo-1549492423-400259a2e574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMHBpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }

function Screen1() {

  return (

    <View style={styles.Hader}>
      <ImageBackground source={imag} resizeMode="cover" style={styles.image}>
        <View style={styles.Hader1}>
          <Text style={styles.Text1}>
            Hassan
          </Text>
          <TextInput
     placeholder="Enter a Number"
       />
        </View>

        <View style={styles.Hader2}>
          <Text style={styles.Text2}>
            Umar
          </Text>
        </View>
        <View style={styles.Hader3}>
          <Text style={styles.Text3}>
            Ali
          </Text>

          

        </View>

        <View>
          
        </View>
      </ImageBackground>
    </View>
  
  );
};



export default Screen1;
