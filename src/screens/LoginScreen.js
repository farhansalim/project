import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native'
import Fonts from '../components/common/Fonts';
import CommonButton from '../components/CommonButton';

const LoginScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <ImageBackground source={require('./../../assets/images/loginHeaderImage.png')}
                        style={styles.headerImage}>
                        <View style={styles.subHeaderImageContainer}>
                            <Image style={styles.headerSubImage}
                                source={require('./../../assets/images/loginIcon.png')} >
                            </Image>
                        </View>
                    </ImageBackground>
                    <View style={styles.WImageContainer}>
                        <Image style={styles.WImage}
                            source={require('./../../assets/images/Wicon.png')} >
                        </Image>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.welcomeText}>WELCOME BACK</Text>
                    <Text style={styles.loginText}>Login to your Account</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputTextContainer]}
                            placeholderTextColor="#C7C7C7"
                            placeholder="Mobile Number" >
                        </TextInput>
                        <View style={styles.buttonContainer}>
                            <CommonButton title="Login"
                                onPress={() => props.navigation.navigate('HomeScreen')} />
                        </View>
                        <Text style={styles.dontText}>
                            Don't have an account? <Text style={styles.signText}>Sign up</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )

}



export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    subContainer: {
        flex: 1
    },
    header: {
        height: "48%",
        width: "100%",
    },
    footer: {
        height: "52%",
        width: "100%",
        alignItems: "center",
        paddingTop: 45
    },
    text: {
        fontSize: 25,
        fontFamily: Fonts.OpenSansBold,
        color: "#000"
    },
    headerImage: {
        width: "100%",
        height: "100%"
    },
    headerSubImage: {
        height: 211,
        width: 230,
        // position:"absolute",
        // top:30,
        // alignContent: "center"
    },
    subHeaderImageContainer: {
        left: 100,
        position: "absolute",
        top: 32
    },
    WImageContainer: {
        position: "absolute",
        top: 270,
        left: "40%"
    },
    WImage: {
        height: 84,
        width: 84
    },
    welcomeText: {
        fontFamily: Fonts.OpenSansRegular,
        fontSize: 18,
        color: "#000",
        fontWeight: "bold"
    },
    loginText: {
        fontFamily: Fonts.OpenSansRegular,
        fontSize: 10,
        color: "#858585",
        letterSpacing: 0.5
    },
    inputContainer: {
        paddingTop: 29,
        paddingHorizontal: 40

    },
    inputTextContainer: {
        paddingHorizontal: 15,
        height: 46,
        width: 280,
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
        fontFamily: Fonts.OpenSansSemiBold,
        fontSize: 15,
        color: '#484F62',
        borderRadius: 6,
        borderColor: "#C7C7C7",
        borderWidth: 1
    },
    buttonContainer: {
        paddingTop: 10,
        paddingBottom: 30
    },
    dontText: {
        fontFamily: Fonts.OpenSansRegular,
        fontSize: 12,
        color: "#858585",
        alignSelf: "center"
    },
    signText: {
        fontFamily: Fonts.OpenSansRegular,
        fontSize: 12,
        color: "#00B7C9",
    }


});