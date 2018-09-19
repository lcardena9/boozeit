import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
});

class SignIn extends Component {
    state = {
        username: '',
        password: '',
    }

    static navigationOptions = {
        header: null
    }

    signIntoApp = () => {
        this.props.navigation.navigate('UserPage');
    }

    goToSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        let { username, password } = this.state;
        let { textInput, button, navigationButton, container, innercontainer } = styles;
        // let isConfirmed = badEntry && { borderColor: 'red' }
        const resizeMode = "stretch"
        return (

            <View style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        
                    }}
                    source={require('../utilities/drinkbackground.jpg')}>
                    <View style={innercontainer}>


                        <Image source={require('../utilities/boozeittemplogo.png')}
                            style={{ width: 350, height: 200, resizeMode }} />


                        {/* <Text style={{ fontSize: 50, color: 'white' }}>Sign In </Text> */}

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
                                style={[textInput]}
                                underlineColorAndroid='transparent'
                            />

                            {/* {badEntry && <Text style={badPassword}>UserName or Password Invalid</Text>} */}

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Button
                                        onPress={this.signIntoApp}
                                        style={button}
                                        text='Sign In'
                                        textStyle={{ color: 'white',fontWeight: 'bold', fontSize: 15 }}
                                    />
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Button
                                        onPress={this.goToSignUp}
                                        style={button}
                                        text='Sign Up'
                                        textStyle={{ color: 'white',fontWeight: 'bold', fontSize: 15 }}
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
    // navigationButton: {
    //     backgroundColor: 'blue',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 35,
    //     width: 120,
    //     borderRadius: 100,
    // },
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
    }
});

export default connect(null, mapDispatchToProps)(SignIn);