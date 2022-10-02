import React, {useContext} from 'react';
import {ExpensContext} from '../../../contexts/expens';
import {Text, View, Keyboard} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const CreateNewExpense = ({navigation}) => {
  const {expens} = useContext(ExpensContext);
  const [inputs, setInputs] = React.useState({
    title: '',
    price: '',
    date: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.title) {
      handleError('Please input title', 'tile');
      isValid = false;
    }

    if (!inputs.price) {
      handleError('Please input price', 'password');
      isValid = false;
    }

    if (!inputs.date) {
      handleError('Please input date', 'date');
      isValid = false;
    }
    if (isValid) {
      create();
    }
  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  const create = () => {
    const d = new Date();
    const id = d.valueOf();
    // expens.push({...inputs, id, date: d});
    navigation.navigate('DetailScreen');
  };
  return (
    <View className="flex flex-grow items-center justify-center w-full">
      <View className="w-full bg-blue-200 rounded-lg">
        <Text className="font-bold text-xl text-center">
          Create New Expense
        </Text>
        <View className="w-full px-5">
          <Input
            onChangeText={text => handleOnchange(text, 'title')}
            onFocus={() => handleError(null, 'title')}
            label="Title"
            placeholder="Enter your expense"
            error={errors.title}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'price')}
            onFocus={() => handleError(null, 'price')}
            label="Price"
            placeholder="Enter your price"
            error={errors.price}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'date')}
            onFocus={() => handleError(null, 'date')}
            label="Date"
            placeholder="Enter the date"
            error={errors.price}
          />
          <Button title={'Create New'} onPress={validate} />
        </View>
      </View>
    </View>
  );
};
export default CreateNewExpense;
