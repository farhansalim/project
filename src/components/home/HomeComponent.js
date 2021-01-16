
import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView, FlatList } from 'react-native';
import Fonts from "../common/Fonts";
import SubjectContainer from './../common/SubjectContainer'
const DATA = [
    { id: 1, name: "Physics", image: require('./../../../assets/images/physics.png'), subTitle: "16 chapters" },
    { id: 2, name: "Chemistry", image: require('./../../../assets/images/chemisrty.png'), subTitle: "16 chapters" },
    { id: 3, name: "Mathematics", image: require('./../../../assets/images/mathematics.png'), subTitle: "16 chapters" },
    { id: 4, name: "Botany", image: require('./../../../assets/images/botany.png'), subTitle: "16 chapters" },
    { id: 5, name: "Zoology", image: require('./../../../assets/images/zoology.png'), subTitle: "16 chapters" },
    { id: 6, name: "English", image: require('./../../../assets/images/english.png'), subTitle: "16 chapters" },
    { id: 7, name: "Hindi", image: require('./../../../assets/images/Hindi.png'), subTitle: "16 chapters" },
]


const HomeComponent = props => {
    const { onPress } = props;
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={DATA}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <SubjectContainer
                            title={item.name}
                            subTitle={item.subTitle}
                            image={item.image}
                            onPress={onPress}
                        />
                    }
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
                <Image source={require('../../../assets/images/HomeFooterImage.png')}
                    style={styles.imageBackgroundStyle}>
                </Image>

            </View>

        </View>
    )
}

export default HomeComponent
const styles = StyleSheet.create({
    container: {
    },
    imageBackgroundStyle: {
        alignSelf: "flex-end",
        height: 252,
        width: "100%",
        marginTop: -150
    }


});





