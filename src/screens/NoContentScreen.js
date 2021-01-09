import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Fonts from '../components/common/Fonts';
class NoContentScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>No Contents</Text>
            </SafeAreaView>
        )
    }
}

export default NoContentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        fontFamily: Fonts.OpenSansBold,
        color: "#000"
    },


});