import React, { Component } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image,
    ScrollView, Modal
} from 'react-native'
import * as HomeActions from './../../store/actions/home/HomeActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Toast from 'react-native-simple-toast';
import UserComponent from '../components/home/UserComponent';
import MapView from 'react-native-maps';
import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';


class UserDetailScreen extends Component {
    state = {
        name: this.props.navigation.state.params.first_name,
        image: this.props.navigation.state.params.avatar,
        email: this.props.navigation.state.params.email,
        location: "New Jersy",
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
        imagePath: '',
        mapModal: false


    }


    onRegionChange = (region) => {
        console.log(region, "re")
        this.setState({ region: region, mapModal: false, location: "place changed" });
    }

    selectImage = async () => {
        // await ImageCropPicker.openPicker({
        //     width: 300,
        //     height: 400,
        //     cropping: true
        // }).then(image => {
        // this.setState({imagePath:image},()=>{
        //     this.setState({image:this.state.imagePath.url})
        // })
        //     console.log(image);
        // });
    }

    render() {
        const { list } = this.props;
        console.log(list, "list in scren")
        return (
            <>
                <Modal visible={this.state.mapModal} transparent={true} animationType="fade">
                    <MapView
                        style={styles.container}
                        initialRegion={this.state.region}
                        onRegionChange={this.onRegionChange}
                    />

                </Modal>

                <SafeAreaView style={styles.container}>
                    <ScrollView style={styles.subContainer}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>

                        <Text style={styles.header}>{this.state.name}</Text>
                        <Text style={styles.header}>{this.state.email}</Text>
                        <TouchableOpacity onPress={() => this.selectImage()} >
                            <Image source={{ uri: this.state.image }}
                                style={styles.image} />
                        </TouchableOpacity>
                        <Text onPress={() => this.setState({ mapModal: true })}
                            style={styles.location}>{this.state.location}</Text>
                        <Text style={{ alignSelf: "center" }}>
                            {`(${this.state.region.latitude},${this.state.region.latitude})`}
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </>

        )
    }
}
const mapStateToProps = state => ({
    list: state.homeReducer.list

})
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            home: bindActionCreators(HomeActions, dispatch),
        },
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UserDetailScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    subContainer: {
        flex: 1,
        paddingTop: 150
    },
    header: {
        marginBottom: 50,
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: "contain",
        alignSelf: "center",
        borderRadius: 100
    }, location: {
        marginTop: 50,
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    }


});