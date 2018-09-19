import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TextInput, ImageBackground, Image } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';
import { getDrinks } from '../utilities/actions'

const mapDispatchToProps = dispatch => ({
    loadDrinkData: (searchTerm) => dispatch(getDrinks(searchTerm)),
});

buttonPress = () => {
    this.props.loadDrinkData(this.state.search);
    this.props.navigation.navigate('Search')
}

class UserPage extends Component {
    state = {
        search: 'margarita',
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'rgba(0,0,0, .50)',

        }
    }

    signOutOfApp = () => {
        this.props.navigation.navigate('SignIn');
    }
    searchForDrink = () => {
        this.props.loadDrinkData(this.state.search);
        this.props.navigation.navigate('SearchResults')
    }

    render() {
        let { search } = this.state;
        let { textInput, button, container, title, innercontainer } = styles;


        console.log(this.props.navigation)
        const { state } = this.props.navigation;
        
        const drink = state.params !== undefined ? state.params.drink : {};
        console.log(drink)

        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        // resizeMode: 'stretch'
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>
                        <Text style={title}> Drinks {this.props.drinks[0] && this.props.drinks[0].idDrink}</Text>

                        <View>

                            <TextInput
                                textAlign='center'
                                onChangeText={(search) => { this.setState({ search }) }}
                                value={search}
                                style={textInput}
                                underlineColorAndroid='transparent'
                            />
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                onPress={this.searchForDrink}
                                style={button}
                                text='Search'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                underlineColorAndroid='transparent'
                            />

                                                {/* <View style={{ flex: 1, alignItems: 'center' }}>
                                                <Image source={{ uri: drink.drinkPic }} style={{ height: 250, width: 250, marginBottom: 10, justifyContent: 'space-around', borderRadius: 25 }} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement1}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient1}</Text>
                                                </View>
                                                </View> */}






                            <Button
                                onPress={this.signOutOfApp}
                                style={button}
                                text='Sign Out'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                            />
                        </View>
                    </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const mapStatetoProps = state => ({
    drinks: state.drinks
})

// const mapDispatchToProps = dispatch => ({
//     changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
// })

export default connect(mapStatetoProps, mapDispatchToProps)(UserPage);

const styles = StyleSheet.create({
    // recipeBox: {
    //     width: 300,
    //     height: 75,
    //     borderColor: 'blue',
    //     borderWidth: 1,
    //     backgroundColor: 'yellow',
    // },
    title: {
        fontSize: 50,
        marginTop: 40,
        marginBottom: 20,
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    innercontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .25)',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'rgba(255,0,255, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2
    },

    buttonText: {
        color: 'white'
    },
    textInput: {
        backgroundColor: 'rgba(255,0,255, .75)',
        height: 40,
        width: 250,
        borderRadius: 100,
        marginBottom: 10,
        fontSize: 20,
        color: "white"
    }
})