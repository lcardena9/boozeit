import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import SignUp from './pages/signUp';
import UserPage from './pages/userPage';
import SignIn from './pages/signIn';
import Search from './pages/search';

import { connect } from 'react-redux';


class MainPage extends React.Component {


    pickScreen = page => {
        switch (page) {
            case 'SIGN_IN':
                return <SignIn />;
            case 'SIGN_UP':
                return <SignUp />;
            case 'USER_PAGE':
                return <UserPage />;
            case 'SEARCH':
                return <Search />;
            default:
                return <Text> BAD PAGE </Text>
        }
    }


    render() {
        const resizeMode = 'stretch'
        return (

            <View style={styles.container}>
                <ImageBackground style={{
                    flex: 1,
                    resizeMode,
                }}
                    source={require('./utilities/drinkbackground.jpg')}>
                  
                    <View style={styles.innercontainer}>
                        {this.pickScreen(this.props.page)}
                    </View>
                
                </ImageBackground>
            </View>

        );
    }
}

const mapStateToProps = state => ({
    page: state.page
})

export default connect(mapStateToProps)(MainPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
    },
    innercontainer: {
        flex: 1,
        alignItems: 'center',
    }
})