import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View, FlatList, ImageBackground, Image, ScrollView } from 'react-native'
import * as HomeActions from './../../store/actions/home/HomeActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Toast from 'react-native-simple-toast';
import UserComponent from '../components/home/UserComponent';
class Homescreen extends Component {

    componentDidMount = () => {
        console.log("test")
        this.fetchData()
    }
    fetchData = () => {
        const { actions } = this.props;
        actions.home.getUsersList()
    }
    onPressUser = (val) => {
        console.log(val,"val")

        this.props.navigation.navigate('UserDetailScreen', val)
    }

    render() {
        const { list } = this.props;
        console.log(list, "list in scren")
        return (<SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <Text style={{ marginBottom: 50, alignSelf: "center", fontSize: 20, fontWeight: "bold" }}>Users</Text>
                <View style={{ paddingHorizontal: 20 }}>
                    <FlatList
                        data={list}
                        // ListEmptyComponent={this.emptyComponent}
                        renderItem={({ item }) =>
                            <UserComponent
                            onPress={() => this.onPressUser(item)}
                                name={item.first_name}
                                img={item.avatar}
                                email={item.email} />}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}

                    />

                </View>

            </ScrollView>
        </SafeAreaView>

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
)(Homescreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",

    },
    subContainer: {
        flex: 1
    },


});