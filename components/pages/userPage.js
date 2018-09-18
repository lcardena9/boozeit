import React from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import Button from '../utilities/button';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: 'NEW_USER', newUser: user }),
    changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
});

const UserPage = props => {

    let { navigationButton, container, title, recipeBox } = styles;
    state = {
        search: '',
    }
    return (
        <View style={container}>
            <Text style={title}> Drinks </Text>

            <FlatList
                data={props.drinks}
                renderItem={({ item }) => (
                    <View style={recipeBox}>
                        <View><Text>Recipe Name: {item.recipeName}</Text></View>
                    </View>
                )}
                keyExtractor={(item, i) => i + ''}
            />
            <View>
                <Button
                    onPress={() => { props.changeScreen('SIGN_IN') }}
                    style={navigationButton}
                    text='Sign Out'
                    textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                />
                <Button
                    onPress={() => { props.changeScreen('SEARCH') }}
                    style={navigationButton}
                    text='Find New'
                    textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                />
            </View>
        </View>
    );
}

const mapStatetoProps = state => ({
    drinks: state.drinks
})

const mpaDispatchToProps = dispatch => ({
    changeScreen: page => dispatch({ type: 'CHANGE_PAGE', newPage: page })
})

export default connect(mapStatetoProps, mapDispatchToProps)(UserPage);

const styles = StyleSheet.create({
    recipeBox: {
        width: 300,
        height: 75,
        borderColor: 'blue',
        borderWidth: 1,
        backgroundColor: 'yellow',
    },
    title: {
        fontSize: 50,
        marginTop: 40,
        marginBottom: 20,
        color: 'white'
    },
    container: {
        flex: 1
    },
    button: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 100,
        borderRadius: 10,
    },
    navigationButton: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        height: 35,
        width: 120,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white'
    }
})