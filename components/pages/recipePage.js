import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, Button } from 'react-native';
import MyButton from '../utilities/button';
import { connect } from 'react-redux';
import { saveDrink } from '../utilities/actions';
import { ScrollView } from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';



class RecipePage extends Component {
  state = {
    search: '',
  }

  static navigationOptions = {
    headerRight: (
      <Button
        onPress={()=>this.props.navigation.navigate('SignIn')}
        title='Log Out'
        color='rgba(255,0,255, .75)'
        borderRadius='100'
        marginRight='10'
      />),
    headerStyle: {
      backgroundColor: 'rgba(0,0,0, .50)',
    }

  }

  saveButton = () => {
    let drink = this.props.navigation.getParam('item', { msg: 'bad navigation' });
    console.log('drinkfromsave', drink)
    // this sends drink to reducer
    this.props.saveDrink(drink);
    
    this.props.navigation.navigate('UserPage')
  }


  render() {
    let { container, innercontainer, title, button, image } = styles;
    const { state } = this.props.navigation;
    const item = state.params.item;
    console.log('Drink:', item)
    console.log('drink name:', item.drinkName)

    return (

      <View style={container}>
        <ImageBackground
          style={{
            flex: 1,
            // resizeMode: 'stretch'
          }}
          source={require('../utilities/drinkbackground.jpg')}>
          <View style={container}>
            <View style={innercontainer}>
              <View>
                {this.props.doneLoading && (
                  <View style={{ height: 1000 }} alignItems='center'>

                    <Text style={[title, { color: 'white', fontWeight: 'bold', textAlign: 'center' }]}>{item.drinkName}</Text>

                    <View style={{ height: 450, width: 300, alignItems: 'center' }}>
                      <ScrollView >
                        <View style={{ flex: 1, alignItems: 'center' }}>
                          <Image source={{ uri: item.drinkPic }} style={image} />
                          <Text
                            style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}
                          >
                            Recommended Glass: {item.glass}
                          </Text>

                          <FlatList
                            style={{ flex: 1 }}
                            data={item.ingredients}
                            renderItem={({ item }) => (
                              <Text
                                style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 20, justifyContent: 'center' }}
                              >
                                {item.ingredient} {item.measurement}
                              </Text>
                            )}
                            keyExtractor={(item, i) => i + ''}
                          />
                          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 16, justifyContent: 'center' }}>{item.instructions}</Text>

                        </View>

                      </ScrollView>
                    </View>
                    <MyButton
                      onPress={this.saveButton}
                      style={button}
                      text='Save'
                      textStyle={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}
                      underlineColorAndroid='transparent'
                    />


                  </View>
                )}
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  doneLoading: state.doneLoading,
  drinks: state.drinks
})

const mapDispatchToProps = dispatch => ({
  saveDrink: drink => dispatch(saveDrink(drink))
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0, .50)',
  },
  innercontainer: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'rgba(255,0,255, .75)',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
    marginTop: 20
  },
  buttonText: {
    color: 'white'
  },
  badPassword: {
    color: 'red',
    marginBottom: 5
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 0,
    justifyContent: 'space-around',
    borderRadius: 25,
    borderColor: 'rgba(90, 203, 238, 1)',
    borderWidth: 2
  },
  textInput: {
    backgroundColor: 'rgba(255,0,255, .75)',
    height: 40,
    width: 250,
    borderRadius: 100,
    marginBottom: 10,
    fontSize: 20,
    color: "white"
  },
  title: {
    fontSize: 40,
    marginBottom: 20
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);