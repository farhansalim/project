import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../common/Fonts'
import CustomIcon from '../common/CustomIcon';

const SimDetailsComponent = (props) => {
    const { data } = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imageStyle} source={{ uri: data.image }} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.simNameText}>{data.name}</Text>
                <Text style={styles.simTypeText}>{data.plan_type}
                    <Text style={styles.minuteText}>   Minutes : {data.flexi_minutes}</Text></Text>
                <Text style={styles.validityText}>Validity : {data.validity}</Text>
            </View>
            <View style={styles.priceContainer}>
                <Text style={styles.priceText}>{data.currency} {data.price}</Text>
                <Text style={styles.dataText}>{data.data}</Text>
            </View>

        </View>
    )
}
export default SimDetailsComponent;

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: "100%",
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingHorizontal: 10,
        paddingBottom: 10,
        borderRadius: 10,
        elevation: 2,
        marginBottom: 10,
        flexDirection: "row"
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        overflow: "hidden"
    },
    detailsContainer: {
        flex: 3,
        backgroundColor: "#FFF",
        justifyContent: "center"
    },
    simTypeText: {
        fontSize: 16,
        color: "#2AACE2",
        fontFamily: Fonts.OpenSansRegular,
        marginTop: 5
    },
    minuteText: {
        fontSize: 16,
        color: "#333",
        fontFamily: Fonts.OpenSansRegular,
        // marginLeft: 50
    },
    simNameText: {
        fontSize: 16,
        color: "#000",
        fontFamily: Fonts.OpenSansRegular
    },
    validityText: {
        fontSize: 16,
        color: "#333",
        fontFamily: Fonts.OpenSansRegular,
        marginTop: 5
    },
    priceContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center"
    },
    priceText: {
        fontSize: 14,
        color: "#076fd9",
        fontFamily: Fonts.OpenSansRegular,
        textAlign: "center"
    },
    dataText: {
        fontSize: 14,
        color: "#333",
        fontFamily: Fonts.OpenSansRegular,
        marginTop: 5
    }


});