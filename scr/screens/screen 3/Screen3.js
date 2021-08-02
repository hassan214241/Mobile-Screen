

import React from 'react';
import { Text, View, ImageBackground, Image, } from 'react-native';
import "./Screen3Style.js";
import { styles } from "./Screen3Style.js";
import bg from "../../../asts/bg.jpeg";

import Button from 'react-native-flat-button';


function Screen3() {
    return (
        <View style={styles.Hader}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.bgImage}>

                <View style={styles.logo}>
                    <Image source={require('../../../asts/logo.jpg')} style={styles.logoimag} />
                </View>

                <View style={styles.center}>
                    <Text style={styles.textCenter}>
                        CROWDFUNDING {'\n'} INMOBILIARIO
                    </Text>
                    <Text style={styles.text2}>
                        Email:{'\n'}Password:

                    </Text>
                </View>
                <View style={styles.endView}>
                    <Button
                        type="red"

                        containerStyle={styles.buttonContainer}

                    >
                        Iniciar sesion
                    </Button>


                    <Button
                        type="neutral"
                        onPress={() => Alert.alert('Neutral Button')}
                        containerStyle={styles.buttonContainer}
                    >
                        Crear cuenta
                    </Button>
                    {/* <Button title="Iniciar sesion" color="red"  style={styles.button1} /> */}
                    {/* <Button title="Crear Cuenta" color="green" /> */}
                </View>



            </ImageBackground>



        </View>

    )
}

export default Screen3;