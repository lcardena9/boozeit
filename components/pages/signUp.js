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
    }

    render() {
        let { username, email, password, confirm, badEntry } = this.state;
        let { textInput, button, navigationButton, badPassword, container } = styles;
        let isConfirmed = badEntry && { borderColor: 'red' }
        return (

            <View style={container}>
                <Text style={{ fontSize: 50, color: 'white' }}>Add User </Text>

                <View>

                    <Text style={{ color: 'white' }}> Username </Text>
                    <TextInput
                        textAlign='center'
                        onChangeText={username => { this.setState({ username }) }}
                        value={username}
                        style={textInput}
                        underlineColorAndroid= 'transparent'
                    />

                    <Text style={{ color: 'white' }}>Email</Text>
                    <TextInput
                        textContentType='emailAddress'
                        textAlign='center'
                        onChangeText={email => { this.setState({ email }) }}
                        value={email}
                        style={textInput}
                        underlineColorAndroid= 'transparent'
                    />

                    <Text style={{ color: 'white' }}>Password</Text>
                    <TextInput
                        secureTextEntry
                        textAlign='center'
                        onChangeText={password => { this.setState({ password }) }}
                        value={password}
                        style={[textInput, isConfirmed]}
                        underlineColorAndroid= 'transparent'
                    />
                    <Text style={{ color: 'white' }}>Confirm Password</Text>
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

                        <View style={{ alignItems: 'center' }}>
                            <Button
                                onPress={() => { this.props.changeScreen('SIGN_IN') }}
                                style={navigationButton}
                                text='Sign In'
                                textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                underlineColorAndroid= 'transparent'
                            />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue',
        justifyContent: 'center'
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

export default connect(null, mapDispatchToProps)(SignUp);