import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList, TextInput, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import MyButton from '../utilities/button';
import { connect } from 'react-redux';
import { getDrinks } from '../utilities/actions'
import {Navigation} from 'react-native-navigation';

const mapDispatchToProps = dispatch => ({
  loadDrinkData: (searchTerm) => dispatch(getDrinks(searchTerm)),
});

buttonPress = () => {
  this.props.loadDrinkData(this.state.search);
  this.props.navigation.navigate('Search')
}

class UserPage extends Component {
  state = {
    search: 'margarita',
  }

  searchForDrink = () => {
    this.props.loadDrinkData(this.state.search);
    this.props.navigation.navigate('SearchResults')
  }

  static navigationOptions = {
    headerRight: (
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
    let { textInput, button, container, title, innercontainer } = styles;


    console.log(this.props.navigation)
    const { state } = this.props.navigation;

    const item = state.params !== undefined ? state.params.item : {};
    console.log(item)

    return (

      <View style={container}>
        <ImageBackground
          style={{
            flex: 1,
            // resizeMode: 'stretch'
          }}
          source={require('../utilities/drinkbackground.jpg')}>
          <View style={innercontainer}>
            <Text style={title}> Search n' Sip </Text>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

              <FlatList
                style={{ flex: 1 }}
                data={this.props.savedDrinks}
                numColumns='2'
                renderItem={({ item }) => (
                  <View style={{ height: 250, width: 200 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RecipePage', { item })}>
                      <Image source={{ uri: item.drinkPic }} style={{ height: 195, width: 195, borderRadius: 25 }} />
                    </TouchableOpacity>

                    <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}>{item.drinkName}</Text>
                  </View>
                )}
                keyExtractor={(item, i) => i + ''}
              />


              <TextInput
                textAlign='center'
                onChangeText={(search) => { this.setState({ search }) }}
                value={search}
                style={textInput}
                underlineColorAndroid='transparent'
              />
              <View style={{ alignItems: 'center' }}>
                <MyButton
                  onPress={this.searchForDrink}
                  style={button}
                  text='Search'
                  textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                  underlineColorAndroid='transparent'
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStatetoProps = state => ({
  drinks: state.drinks,
  savedDrinks: state.savedDrinks
})


export default connect(mapStatetoProps, mapDispatchToProps)(UserPage);

const styles = StyleSheet.create({

  title: {
    fontSize: 50,
    marginTop: 40,
    marginBottom: 20,
    color: 'white'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  innercontainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, .50)',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'rgba(255,0,255, .750)',
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
})