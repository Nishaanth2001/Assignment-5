import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import { useDispatch } from 'react-redux';
import { addFood } from './actions/food';

const FoodForm = ({ navigation }) => {

  const [food, setFood] = useState('')

  const dispatch = useDispatch();

  const submitFood = (food) => dispatch(addFood(food))

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./assets/logo.jpg')}
      />
      <Text style={styles.title}>WELCOME!</Text>
      <TextInput
        value={food}
        placeholder='Enter Dish'
        style={styles.foodInput}
        onChangeText={(food) => setFood(food)}
      />
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() => {
          submitFood(food)
          setFood('')
        }}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginBottom: 16 }}
        onPress={() =>
          navigation.navigate('Menu')}>
        <Text style={{ fontSize: 22, color: '#5fc9f8' }}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    marginBottom: 30,
    marginTop: 16,
    color: 'white'
  },
  foodInput: {
    fontSize: 24,
    marginBottom: 30,
    borderWidth: 10,
    padding: 12,
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  image: {
    width: 120,
    height: 120,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 0,
  }
});

export default FoodForm;
