import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Text, View} from 'react-native';
import List from '../components/HomeScreen/List';
import Navigate from '../components/Navigatoin';
import expense from '../../../expenses.json';
const HomeScree = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  const [tab, setTab] = React.useState('EXPENSES');
  const [data, setData] = React.useState([]);

  const changeTab = string => {
    const filterData = expense.filter(item => item.type === string);
    setData(filterData);
    setTab(string);
  };
  React.useEffect(() => {
    const filterData = expense.filter(item => item.type === 'EXPENSES');
    setData(filterData);
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

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();
  let name = month[d.getMonth()];

  return (
    <View className="bg-blue-300 h-full">
      <Navigate />
      <Text className="text-white text-center text-2xl font-bold">{name}</Text>
      <View className="flex flex-row justify-between px-10">
        <Text className="text-xl text-white">X</Text>
        <Text className="text-xl text-white">X</Text>
      </View>
      <Text className="text-5xl text-center text-white font-bold">150$</Text>
      <View className="bg-gray-100 mt-5 rounded-t-[50px]">
        <View className="mt-10 px-10">
          <View className="flex flex-row justify-between">
            <Text className="text-lg font-bold">Monthly Budget 150$</Text>
            <Text className="text-lg font-bold">64%</Text>
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
        <View className="bg-white mt-10 h-full rounded-t-[50px]">
          <View className="flex flex-row justify-between mt-5 px-10 items-center">
            <View>
              <Text
                className="text-lg font-bold"
                onPress={() => changeTab('EXPENSES')}>
                Expenses
              </Text>
              {tab === 'EXPENSES' ? (
                <View className="w-full h-1 bg-blue-500 rounded-md" />
              ) : (
                ''
              )}
            </View>
            <View>
              <Text
                className="text-lg font-bold"
                onPress={() => changeTab('INCOME')}>
                Income
              </Text>
              {tab === 'INCOME' ? (
                <View className="w-full h-1 bg-blue-500 rounded-md" />
              ) : (
                ''
              )}
            </View>
          </View>
          <List data={data} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default HomeScree;
