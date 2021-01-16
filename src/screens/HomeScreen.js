import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, ImageBackground, Image, ScrollView } from 'react-native'
import Fonts from '../components/common/Fonts';
import CommonButton from '../components/CommonButton';
import SubjectContainer from './../components/common/SubjectContainer'
import HomeComponent from '../components/home/HomeComponent';
const Homescreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <ImageBackground source={require('./../../assets/images/HomeHeaderImage.png')}
                    style={styles.headerImage}>
                    <Image source={require('./../../assets/images/Wicon.png')}
                        style={styles.wImage} />
                    <View style={styles.subjectListContainer}>
                        <Text style={styles.goodText}>
                            Goodmorning
                        </Text>
                        <Text style={styles.nameText}>
                            Ananthu M Mohan
                        </Text>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: -220 }}>
                    <HomeComponent
                        onPress={() => props.navigation.navigate('CompleteScreen')} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    subContainer: {
        flex: 1
    },
    headerImage: {
        justifyContent: "flex-start",
        // width: "100%",
        height: 400,
        resizeMode: "contain"

    },
    footerImage: {
        justifyContent: "flex-end",
        height: 252,
        resizeMode: "contain",
        // marginTop: -200
    },
    wImage: {
        height: 54,
        width: 54,
        position: "absolute",
        left: 15,
        top: 20
    },
    subjectListContainer: {
        // height:20,
        width: "100%",
        marginTop: 140,
        paddingLeft: 14,
        paddingBottom: 23
    },
    goodText: {
        fontFamily: Fonts.DMSansMedium,
        fontSize: 10,
        color: "#FFFFFF",
        letterSpacing: 0.5,
    },
    nameText: {
        fontFamily: Fonts.DMSansMedium,
        fontSize: 16,
        color: "#FFFFFF",

    }



});