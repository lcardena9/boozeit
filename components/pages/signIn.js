import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
    changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
});

class SignIn extends Component {
    state = {
        username: '',
        password: '',
    }

    submitUser = () => {
        let { username, password } = this.state;
        {
            this.props.addUser({ username, email, password });

            this.setState({
                username: '',
                password: '',
            })
        }
    }

    render() {
        let { username, password } = this.state;
        let { textInput, button, navigationButton, container } = styles;
        // let isConfirmed = badEntry && { borderColor: 'red' }
        const resizeMode = "contain"
        return (



            <View style={container}>

                <Image source={require('../utilities/boozeittemplogo.png')}
                    style={{ width: 350, height: 200, resizeMode }} />


                <Text style={{ fontSize: 50, color: 'white' }}>Sign In </Text>

                <View>

                    <Text style={{ color: 'white' }}> Username </Text>
                    <TextInput
                        textAlign='center'
                        onChangeText={username => { this.setState({ username }) }}
                        value={username}
                        style={textInput}
                        underlineColorAndroid= 'transparent'
                    />

                    <Text style={{ color: 'white' }}>Password</Text>
                    <TextInput
                        secureTextEntry
                        textAlign='center'
                        onChangeText={password => { this.setState({ password }) }}
                        value={password}
                        style={[textInput]}
                        underlineColorAndroid= 'transparent'
                    />

                    {/* {badEntry && <Text style={badPassword}>UserName or Password Invalid</Text>} */}

                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            onPress={() => { this.props.changeScreen('USER_PAGE') }}
                            style={button}
                            text='Sign In'
                            textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                        />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            onPress={() => { this.props.changeScreen('SIGN_UP') }}
                            style={navigationButton}
                            text='Sign Up'
                            textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
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
        alignItems: 'center',
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

export default connect(null, mapDispatchToProps)(SignIn);