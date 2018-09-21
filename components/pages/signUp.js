import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
    changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
});

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        badEntry: false
    }


    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'rgba(0,0,0, .50)',
           
        }
    }

    submitUser = () => {
        let { username, email, password, confirm } = this.state;

        if (password !== confirm) {
            this.setState({ badEntry: true })
        } else {
            this.props.addUser({ username, email, password });

            this.setState({
                username: '',
                email: '',
                password: '',
                confirm: '',
                badEntry: false
            })
            
        }
        this.props.navigation.navigate('UserPage');
    }


    render() {
        let { username, email, password, confirm, badEntry } = this.state;
        let { textInput, button, navigationButton, badPassword, container, innercontainer } = styles;
        let isConfirmed = badEntry && { borderColor: 'red' }
        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        // resizeMode: 'stretch'
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>

                <Text style={{ fontSize: 50, color: 'white' }}>Join</Text>

                <View>

                    <Text style={{ color: 'white', fontSize: 20}}> Username </Text>
                    <TextInput
                        textAlign='center'
                        onChangeText={username => { this.setState({ username }) }}
                        value={username}
                        style={textInput}
                        underlineColorAndroid= 'transparent'
                    />

                    <Text style={{ color: 'white', fontSize: 20 }}>Email</Text>
                    <TextInput
                        textContentType='emailAddress'
                        textAlign='center'
                        onChangeText={email => { this.setState({ email }) }}
                        value={email}
                        style={textInput}
                        underlineColorAndroid= 'transparent'
                    />

                    <Text style={{ color: 'white', fontSize: 20 }}>Password</Text>
                    <TextInput
                        secureTextEntry
                        textAlign='center'
                        onChangeText={password => { this.setState({ password }) }}
                        value={password}
                        style={[textInput, isConfirmed]}
                        underlineColorAndroid= 'transparent'
                    />
                    <Text style={{ color: 'white', fontSize: 20 }}>Confirm Password</Text>
                    <TextInput
                        secureTextEntry
                        textAlign='center'
                        onChangeText={confirm => { this.setState({ confirm }) }}
                        value={confirm}
                        style={[textInput, isConfirmed]}
                        underlineColorAndroid= 'transparent'
                    />

                    {badEntry && <Text style={badPassword}>Passwords Do Not Match</Text>}

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Button
                                onPress={this.submitUser}
                                style={button}
                                text='Sign Up'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                underlineColorAndroid= 'transparent'
                            />
                        </View>

                    </View>
                </View>
            </View>
            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, .5)',
    },
    innercontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    button: {
        backgroundColor: 'rgba(255,0,255, .75)',
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
        color: "white",
        borderColor: 'white',
        borderWidth: 2
    }
});

export default connect(null, mapDispatchToProps)(SignUp);