import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../common/Fonts'
import CustomIcon from '../common/CustomIcon';
const postPaid = require('./../../../assets/images/postpaid.png');
const prePaid = require('./../../../assets/images/prepaid.png');
const broadband = require('./../../../assets/images/broadband.png');

const SimTypeComponent = (props) => {
    const { simTypes, simType } = props;

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Image style={styles.image} source={item === 'postpaid' ?
                postPaid : item === "prepaid" ?
                    prePaid : broadband} />
            <Text style={item === 'postpaid' ?
                styles.postText : item == 'prepaid' ?
                    styles.preText : styles.broadText}>{item}</Text>
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState(0);

    const getSimType = (item) => {
        console.log(item, "item")
        simType(item);
        setSelectedId(item);

    }

    const renderItem = ({ item }) => {
        const backgroundColor = item === selectedId ? "#3fc0eb" : "#FFF";

        return (
            <Item
                item={item}
                // onPress={() => setSelectedId(item)}
                onPress={() => getSimType(item)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={simTypes}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />

        </View>
    )
}

export default SimTypeComponent;

const styles = StyleSheet.create({
    container: {
        // height: 70,
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingLeft: 16,
    },
    item: {
        // height:50,
        width: 150,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        padding: 10,
        marginVertical: 8,
        marginRight: 10,
        elevation: 4
        , paddingHorizontal: 20
    },
    title: {
        fontSize: 10,
    },

    image: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    postText:{
       color:"#000" ,
       fontSize:14,
       fontFamily:Fonts.LatoMedium
    },
    preText:{
        color:"#000" ,
        fontSize:14,
        fontFamily:Fonts.LatoMedium
    },
    broadText:{
        color:"#000" ,
        fontSize:14,
        fontFamily:Fonts.LatoMedium
    }



});