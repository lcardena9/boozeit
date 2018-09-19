import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import { connect } from 'react-redux';


class MainPage extends React.Component {


    render() {

        return (

            <View style={styles.container}>
                <ImageBackground
                    style={{
                        flex: 1,
                        // resizeMode: 'stretch'
                    }}
                    source={require('./utilities/drinkbackground.jpg')}>

                    <View style={styles.innercontainer}>

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