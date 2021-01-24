import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, } from 'react-native'
import CommonButton from '../components/CommonButton';

const CompleteScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.successContainer}>
                <Image source={require('./../../assets/images/complete.png')}
                    style={styles.completeImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.successText}>Success!</Text>
                <Text style={styles.yourText}>Your account has been Created</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CommonButton
                    onPress={() => props.navigation.navigate('LoginScreen')}
                    title={"Login your Account"}
                />
            </View>

        </SafeAreaView>
    )
}

export default CompleteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    successContainer: {
        paddingTop: 120,
        alignItems: "center"
    },
    iconContainer: {
        justifyContent: 'center',
        height: 130,
        width: 130,
        borderRadius: 130,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    completeImage: {
        height: 130,
        width: 130,
        resizeMode: "contain"
    },
    textContainer: {
        paddingTop: 30,
        alignItems: "center",
        alignSelf: "center"
    },
    successText: {
        fontSize: 21,
        color: "#474747",
        fontWeight:"bold"
    },
    yourText: {
        fontSize: 14,
        color: "#858585",
        marginTop: 5,
        alignSelf: "center"

    },
    buttonContainer: {
        paddingHorizontal: 41,
        // alignItems:"center",
        paddingTop: 140
    }
});