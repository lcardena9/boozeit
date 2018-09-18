import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
    changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
});

class Search extends Component {
    state = {
        search: 'vodka'
    }


    render() {
        let { search } = this.state;
        let { textInput, button, navigationButton, badPassword, container } = styles;
        // let isConfirmed = badEntry && { borderColor: 'red' }
        return (

            <View style={container}>
                <Text style={{ fontSize: 50, color: 'white', justifyContent: 'space-around' }}>Search By Ingredient </Text>
                <View>

                    <Text style={{ color: 'white' }}> Ingredient </Text>
                    <TextInput
                        textAlign='center'
                        onChangeText={search => { this.setState({ search }) }}
                        value={search}
                        style={textInput}
                        underlineColorAndroid='transparent'
                    />


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                onPress={this.submitUser}
                                style={button}
                                text='Search'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Button
                                onPress={() => { this.props.changeScreen('SIGN_IN') }}
                                style={navigationButton}
                                text='Back'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                underlineColorAndroid='transparent'
                            />
                        </View>


                        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            {!this.props.isLoading && <Image source ={require('../utilities/loading.gif')} style={{height:200, width: 200}} />}
                            <Image source ={{uri: this.props.drinkUri}} style={{ height: 200, width: 200}} />
                            <Text>Booze it</Text>
                        </View>



                        <FlatList
                            // [ string ]
                            data={this.search}
                            renderItem={({ item }) => (
                                <View style={userBox}>
                                    <View><Text>Username: {item.username}</Text></View>
                                    <View><Text>Email: {item.email}</Text></View>
                                </View>
                            )}
                            keyExtractor={(item, i) => i + ''}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    drinkUri: state.drinkUri
})



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        textAlign: 'center'
    },
    button: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 100,
        borderRadius: 5,
    },
    navigationButton: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 120,
        borderRadius: 5,
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

    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);