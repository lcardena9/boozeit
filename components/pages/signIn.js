import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, Button } from 'react-native';
import MyButton from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
});

class SignIn extends Component {
    state = {
        username: 'lucas',
        password: 'abc',
        users: [
            {
                username: 'lucas',
                password: 'abc'
            }
        ],
        goodLogin: false,
        badLoginAttempt: false,
    }

    login = user => {
        let users = this.state.users;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === user.email && users[i].password === user.password) {
                this.props.navigation.navigate('UserPage');
                return;
            }
        }
        this.setState({ badLoginAttempt: true })
    }


    formLogin = event => {
        event.preventDefault();
        this.login(this.state);
        this.setState({
            username: 'lucas',
            password: 'abc'
        })
    }

    static navigationOptions = {
        header: null
    }


    goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        let { username, password, badLoginAttempt } = this.state;
        let { textInput, button, badPassword, container, innercontainer } = styles;
        let isBadAttempt = badLoginAttempt && { borderColor: 'red' }
        const resizeMode = "stretch"
        return (

            <View style={container}>
                <ImageBackground
                    style={{
                        flex: 1,

                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>
                        <Image source={require('../utilities/boozeittemplogo.png')}
                            style={{ width: 350, height: 200, resizeMode }} />
                        <View>
                            <Text style={{ color: 'white', fontSize: 20 }}> Username </Text>
                            <TextInput
                                textAlign='center'
                                onChangeText={username => { this.setState({ username }) }}
                                value={username}
                                style={textInput}
                                underlineColorAndroid='transparent'
                            />
                            <Text style={{ color: 'white', fontSize: 20 }}>Password</Text>
                            <TextInput
                                secureTextEntry
                                textAlign='center'
                                onChangeText={password => { this.setState({ password }) }}
                                value={password}
                                style={[textInput, isBadAttempt]}
                                underlineColorAndroid='transparent'
                            />
                            <View>
                                {badLoginAttempt && <Text style={badPassword}>UserName or Password Invalid</Text>}
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <MyButton
                                        onPress={this.formLogin}
                                        style={button}
                                        text='Sign In'
                                        textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <MyButton
                                        onPress={this.goToSignUp}
                                        style={button}
                                        text='Sign Up'
                                        textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
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
    },
    innercontainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .50)',
        justifyContent: 'center'
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
        marginBottom: 5,
        fontSize: 17
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

export default connect(null, mapDispatchToProps)(SignIn);