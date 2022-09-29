import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';
import List from '../components/Expenses/List';
import Navigate from '../components/Navigatoin';
const HomeScree = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <View className="bg-blue-300 h-screen">
      <Navigate />
      <Text className="text-white text-center text-2xl">Months</Text>
      <View className="flex flex-row justify-between px-10">
        <Text className="text-xl text-white">X</Text>
        <Text className="text-xl text-white">X</Text>
      </View>
      <Text className="text-3xl text-center text-white">150$</Text>
      <View className="bg-gray-100 mt-5 rounded-t-[50px]">
        <View className="mt-10 px-10">
          <View className="flex flex-row justify-between">
            <Text className="text-lg">Monthly Budget 150$</Text>
            <Text className="text-lg">64%</Text>
          </View>
          <View className="w-full h-2 bg-gray-400 rounded-lg">
            <View
              style={{width: '64%'}}
              className="h-2 bg-blue-500 rounded-lg"
            />
          </View>
        </View>
      </View>
      <View className="bg-gray-100">
        <View className="bg-white mt-10 rounded-t-[50px]">
          <View className="flex flex-row justify-between mt-5 px-10 items-center">
            <View>
              <Text className="text-lg">Expenses</Text>
              <View className="w-full h-1 bg-gray-500 rounded-md" />
            </View>
            <View>
              <Text className="text-lg">Income</Text>
              <View className="w-full h-1 bg-gray-500 rounded-md" />
            </View>
            <Text>@</Text>
          </View>
          <List />
        </View>
      </View>
    </View>
  );
};

export default HomeScree;
