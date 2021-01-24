import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
class SplashScreen extends Component {

    componentDidMount() {
        this.loadApp()
    }

    loadApp = async () => {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('Dashboard')
        }, 3000)
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                    <Text style={styles.text}>TEST</Text>
            </SafeAreaView>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
       fontSize:25,
    //    fontFamily:Fonts.OpenSansBold,
       color:"#000"
    },


});