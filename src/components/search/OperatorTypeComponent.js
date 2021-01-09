import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../common/Fonts'
import CustomIcon from '../common/CustomIcon';

const OperatorTypeComponent = (props) => {
    const { operators ,operatorType} = props;
    const DATA = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First ",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second ",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third ",
        },
    ];

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Image style={styles.imageStyle} source={{ uri: item.image }} />
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState(1);

    const getOperatorType = (item) => {
        console.log(item,"item")
        // operatorType(item);
        setSelectedId(item);

    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#3fc0eb" : "#FFF";

        return (
            <Item
                item={item}
                onPress={() => getOperatorType(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.operatorText}>
                Operators
            </Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={operators}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />

        </View>
    )
}

export default OperatorTypeComponent;

const styles = StyleSheet.create({
    container: {
        // height: 70,
        backgroundColor: "#FFF",
        paddingTop: 10,
        paddingLeft: 16,
    },
    item: {
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: 70,
        borderRadius: 6,
        padding: 2,
        marginVertical: 8,
        marginRight: 10,
        elevation: 4

    },
    title: {
        fontSize: 10,
    },
    operatorText: {
        fontFamily: Fonts.OpenSansSemiBold,
        fontSize: 16,
        color: "#000"
    },
    imageStyle: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        overflow: "hidden"
    }



});