import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, Button } from 'react-native';
import MyButton from '../utilities/button';
import { connect } from 'react-redux';
import { getDrinks } from '../utilities/actions';
import {Navigation} from 'react-native-navigation';

class SearchResults extends Component {
    state = {
        search: ''
    }

    static navigationOptions = {
        headerRight:(
            <Button
                onPress={()=>Navigation.handleDeepLink({link:'SignIn'})}
                title='Log Out'
                color='rgba(255,0,255, .75)'
                borderRadius='100'
                marginRight='10'
                />),
            headerStyle: {
                backgroundColor: 'rgba(0,0,0, .50)',
            }
            
        }

    render() {
        let { search } = this.state;
        let { container, innercontainer, title } = styles;
        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>
                        <View >
                            <View>
                            {/* <Image source={require('./margbackground.jpg')} style={{height:200, width: 200}} />} */}
                                {this.props.doneLoading && (
                                                                        
                                    
                                    <View style={{ flex: 1 }}>
                                        <Text style={[title, { color: 'white', fontWeight: 'bold', textAlign: 'center', alignItems: 'center' }]}>Drinks</Text>
                                        <FlatList
                                            style={{ flex: 1}}
                                            data={this.props.drinks}
                                            numColumns='2'
                                            renderItem={({ item }) => (
                                                <View style={{ height: 250, width: 200}}>
                                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('RecipePage', {item})}>
                                                        <Image source={{ uri: item.drinkPic}} style={{height: 195, width: 195, borderRadius: 25}}/>
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
    },
    innercontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .50)',
        justifyContent: 'center'

    },
    button: {
        borderRadius: 100,
        marginRight: 10
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

export default connect(mapStateToProps)(SearchResults);