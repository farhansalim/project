import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../common/Fonts'
import CustomIcon from '../common/CustomIcon';


const SearchComponent = (props) => {
    const { value, label, onChange, style, ...rest } = props;
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.searchText}>
                    Search result
                </Text>
               
                <Icon name="menu" size={20} color="#FFF" />
            </View>
            <View style={styles.searchContainer}>
                <TextInput style={[styles.inputContainer, style]}
                    value={value}
                    placeholderTextColor="#C7C7C7"
                    placeholder={label}
                    onChangeText={onChange}
                    {...rest}>
                </TextInput>
            </View>
        </View>

    )
}

export default SearchComponent;

const styles = StyleSheet.create({
    container: {
        // height: 100,
        paddingHorizontal: 16,
        paddingBottom: 18,
        backgroundColor: "#3fc0eb",
    },
    titleComponent: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10

    },
    searchText: {
        fontFamily: Fonts.OpenSansSemiBold,
        fontSize: 16,
        color: "#FFF"
    },
    searchContainer: {
        backgroundColor: "#FFF",
        borderRadius: 25,
        flexDirection: "row",
        paddingHorizontal: 16,
        height: 45,

    },
    inputContainer: {
        height: "100%",
        width: "100%",
        alignSelf: 'stretch',
        fontFamily: Fonts.OpenSansSemiBold,
        fontSize: 14,
        color: '#484F62',

    }



});