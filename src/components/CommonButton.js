import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Fonts from '../../src/components/common/Fonts';
// import GradientButton from 'react-native-gradient-buttons';
import LinearGradient from 'react-native-linear-gradient';

const CommonButton = props => {
    const { title, style, txtStyle, color, onPress, disabled } = props;
    return (
        <TouchableOpacity activeOpacity={0.5}
            onPress={onPress} disabled={disabled}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#02D384', '#00B7C9']}
                style={[styles.container, style]}>
                <View style={styles.textContainer}>
                    <Text style={[styles.buttonText, txtStyle]}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};
export default CommonButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 45,
        borderRadius: 6,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 13,
        alignSelf: 'center',
        fontFamily: Fonts.DMSansMedium,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
