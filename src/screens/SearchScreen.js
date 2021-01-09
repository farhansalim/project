import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import SearchComponent from './../components/search/SearchComponent'
import SimTypeComponent from '../components/search/SimTypeComponent'
import OperatorTypeComponent from '../components/search/OperatorTypeComponent'
import SimDetailsComponent from '../components/search/SimDetailsComponent'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as ProductDetailsActions from './../../store/actions/SearchActions';

class SearchScreen extends Component {

    state = {
        searchInput: "",
        simType: "",
        simOpertaor: ""

    }
    componentDidMount = () => {
        this.fetchData()
    }
    fetchData = async () => {
        const { actions } = this.props;
        const { searchInput, simType, simOpertaor } = this.state
        await actions.search.searchProducts(searchInput, simType, simOpertaor);
    }
    onchange = (val) => {
        this.setState({ searchInput: val }, () => {
            this.fetchData()
        })
    }

    onChangeSimType = (val) => {
        this.setState({ simType: val }, () => {
            this.fetchData()
        })

    }
    // onChangeOperator = (val) => {
    //     this.setState({ simOpertaor: val }, () => {
    //         this.fetchData()
    //     })

    // }
    
    emptyComponent = () => {
        return(
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>No Results Found</Text>
        </View>
        )
       
    }

    render() {
        const { home } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.container}>
                    <SearchComponent
                        onChange={(val) => this.onchange(val)}
                        placeholder={"Search"}  />
                    {
                        home && home.plans && (
                            <SimTypeComponent
                                simTypes={home.plans}
                                simType={(item) => this.onChangeSimType(item)} />
                        )
                    }
                    {
                        home && home.operators && (
                            <OperatorTypeComponent
                                operators={home.operators}
                                operatorType={(item) => this.onChangeSimType(item)} />
                        )
                    }
                    <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
                        {
                            home && home.data && (
                                <FlatList
                                    data={home.data}
                                    ListEmptyComponent={this.emptyComponent}
                                    renderItem={({ item }) =>
                                        <SimDetailsComponent
                                            data={item}
                                        />}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                />
                            )  }
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const mapStateToProps = state => ({
    home: state.homeReducer,
});
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            search: bindActionCreators(ProductDetailsActions, dispatch),
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
    },


});