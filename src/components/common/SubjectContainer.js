import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Fonts from "../common/Fonts";


const SubjectContainer = props => {
    const { title, subTitle, image, onPress } = props
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.container}>
            <ImageBackground source={require('../../../assets/images/iconBackground.png')}
                style={styles.backgroundStyleImage} >
                <View style={styles.iconBackground}>
                    <Image source={image}
                        style={styles.iconImage} />
                </View>
            </ImageBackground>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SubjectContainer
const styles = StyleSheet.create({
    container: {
        height: 185,
        width: 170,
        alignItems: 'center',
        paddingTop: 14,
        paddingHorizontal: 14,
        backgroundColor: "#FFFFFF",
        elevation: 3,
        borderRadius: 20,
        margin: 15
    },
    title: {
        fontFamily: Fonts.DMSansMedium,
        fontSize: 13,
        color: "#5E5E5E",
        letterSpacing: 0.7,
        alignSelf: "center"
    },
    backgroundStyleImage: {
        height: 105,
        width: 127,
        resizeMode: "contain",
        justifyContent: "center"

    },
    textContainer: {
        paddingTop: 10,

    },
    subTitle: {
        fontFamily: Fonts.DMSansMedium,
        fontSize: 10,
        color: "#858585",
        letterSpacing: 0.5,
        alignSelf: "center"
    },
    iconBackground: {
        height: 90,
        width: 90,
        borderRadius: 90,
        backgroundColor: "#EFFFF9",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    iconImage: {
        height: 70,
        width: 70,
        resizeMode: "contain"
    }

});
