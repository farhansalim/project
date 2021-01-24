import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput, ImageBackground, Image } from 'react-native'
import CommonButton from '../components/CommonButton';
import * as authActions from './../../store/actions/auth/AuthActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Toast from 'react-native-simple-toast';

const SignUpScreen = (props) => {
    const initialState = {
        email: "",
        password: "",
    };
    const [data, setData] = useState(initialState);

    const onSignUp = () => {
        console.log(data.email, data.password, "farhan")
        const { actions } = props;
        let body = {
            email: data.email,
            password: data.password
        }
        actions.auth.onSignUp(body)
            .then(res => {
                Toast.show(res)
                // props.navigation.navigate('LoginScreen')
            })
            .catch(err => {
                Toast.show("Failed.Try Again")

            })


    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>

                <View style={styles.footer}>
                    <Text style={styles.loginText}>Register Account</Text>
                    <View style={styles.inputContainer}>
                        <TextInput style={[styles.inputTextContainer]}
                            placeholderTextColor="#C7C7C7"
                            placeholder="Email"
                            onChangeText={(val) => {
                                setData({ ...data, email: val });
                            }} >
                        </TextInput>
                        <TextInput style={[styles.inputTextContainer]}
                            placeholderTextColor="#C7C7C7"
                            placeholder="Password"
                            onChangeText={(val) => {
                                setData({ ...data, password: val });
                            }}>
                        </TextInput>
                        <View style={styles.buttonContainer}>
                            <CommonButton title="Register"
                                onPress={onSignUp} />
                        </View>
                        <Text onPress={() => props.navigation.navigate('LoginScreen')}
                            style={styles.dontText}>
                            Go Back    <Text style={styles.signText}>Login</Text>
                        </Text>

                    </View>
                </View>
            </View>
        </SafeAreaView>

    )

}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            auth: bindActionCreators(authActions, dispatch),
        },
    };
};

export default compose(
    connect(null, mapDispatchToProps),
)(SignUpScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    subContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        height: "48%",
        width: "100%",
    },
    footer: {
        // height: "52%",
        width: "100%",
        alignItems: "center",
        paddingTop: 45
    },
    text: {
        fontSize: 25,
        // fontFamily: Fonts.OpenSansBold,
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
        // fontFamily: Fonts.OpenSansRegular,
        fontSize: 18,
        color: "#000",
        fontWeight: "bold"
    },
    loginText: {
      //  fontFamily: Fonts.OpenSansRegular,
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
        letterSpacing: 0.5
    },
    inputContainer: {
        paddingTop: 29,
        paddingHorizontal: 40,


    },
    inputTextContainer: {
        marginBottom: 10,
        paddingHorizontal: 15,
        height: 46,
        width: 280,
        backgroundColor: '#FFFFFF',
        alignSelf: 'stretch',
       // fontFamily: Fonts.OpenSansSemiBold,
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
       // fontFamily: Fonts.OpenSansRegular,
        fontSize: 12,
        color: "#858585",
        alignSelf: "center"
    },
    signText: {
     //   fontFamily: Fonts.OpenSansRegular,
        fontSize: 14,
        color: "#00B7C9",
    }


});