import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';
import { getDrinks } from '../utilities/actions';

const mapDispatchToProps = dispatch => ({
    loadDrinkData: () => dispatch(getDrinks()),
});

class SearchResults extends Component {
    state = {
        search: ''
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'rgba(0,0,0, .50)',
            
        }
    }

    render() {
        let { search } = this.state;
        let { container, innercontainer, title } = styles;
        // let isConfirmed = badEntry && { borderColor: 'red' }
        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        // resizeMode: 'stretch'
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>
                        <View >
                            <View>

                                {this.props.doneLoading && (
                                    <View style={{ flex: 1 }}>
                                        <Text style={[title, { color: 'white', fontWeight: 'bold', textAlign: 'center' }]}>Drinks</Text>
                                        <FlatList
                                            style={{ flex: 1, backgroundColor: 'rgba(255,0,255, .35)'}}
                                            data={this.props.drinks}
                                            numColumns='2'
                                            renderItem={({ item }) => (
                                                <View style={{ height: 250, width: 200}}>
                                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RecipePage', {item})}>
                                                        <Image source={{ uri: item.drinkPic}} style={{height: 200, width: 200,}}/>
                                                    </TouchableOpacity>
                                                    
                                                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{item.drinkName}</Text>
                                                </View>
                                            )}
                                            keyExtractor={(item, i) => i + ''}
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
        alignItems: 'center',
        marginTop: 20,
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
        fontSize: 50,
        marginTop: 40,
        marginBottom: 20
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);