import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';
import { getDrinks } from '../utilities/actions';
import { ScrollView } from 'react-native-gesture-handler';

const mapDispatchToProps = dispatch => ({
    loadDrinkData: () => dispatch(getDrinks()),
});

class RecipePage extends Component {
    state = {
        search: '',
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'rgba(0,0,0, .50)',
        }
    }

    render() {
        let { container, innercontainer, title, button } = styles;
        const { state } = this.props.navigation;
        const drink = state.params.item;
        console.log('Drink:', drink)
        console.log('drink name:', drink.drinkName)

        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        // resizeMode: 'stretch'
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={container}>
                        <View style={innercontainer}>
                            <View>
                                {this.props.doneLoading && (
                                    <View style={{ height: 1000 }} alignItems='center'>

                                        <Text style={[title, { color: 'white', fontWeight: 'bold', textAlign: 'center' }]}>{drink.drinkName}</Text>
                                        
                                            <View style={{ height: 450, width: 300, alignItems: 'center' }}>
                                        <ScrollView >
                                            <View style={{ flex: 1, alignItems: 'center' }}>
                                                <Image source={{ uri: drink.drinkPic }} style={{ height: 250, width: 250, marginBottom: 0, justifyContent: 'space-around', borderRadius: 25 }} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement1}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient1}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement2}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient2}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement3}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient3}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement4}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient4}</Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredientMeasurement5}</Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}> </Text>
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{drink.ingredient5}</Text>
                                                </View>
                                                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16, justifyContent: 'center' }}>{drink.instructions}</Text>
                                            </View>
                                          
                                        </ScrollView>
                                            </View>
                                            <Button
                                                onPress={()=>this.props.navigation.navigate('UserPage', {drink})}
                                                style={button}
                                                text='Save'
                                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                                underlineColorAndroid='transparent'
                                            />
                                        

                                    </View>
                                )}
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    doneLoading: state.doneLoading,
    drinks: state.drinks
})



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'rgba(0,0,0, .25)',
    },
    innercontainer: {
        flex: 1,
        alignItems: 'stretch',
        marginTop: 20,       
    },
    button: {
        backgroundColor: 'rgba(255,0,255, .75)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        marginTop: 20
    },
    buttonText: {
        color: 'white'
    },
    badPassword: {
        color: 'red',
        marginBottom: 5
    },
    textInput: {
        backgroundColor: 'rgba(255,0,255, .75)',
        height: 40,
        width: 250,
        borderRadius: 100,
        marginBottom: 10,
        fontSize: 20,
        color: "white"
    },
    title: {
        fontSize: 40,
        marginBottom: 20
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);