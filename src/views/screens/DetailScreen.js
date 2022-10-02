import React, {useContext} from 'react';
import {ExpensContext} from '../../../contexts/expens';
import {View, Text} from 'react-native';
import DetailList from '../components/DetailScreen/DetailList';
import NavigateDetail from '../components/NavigationDetail';

const DetailScreen = ({navigation}) => {
  const {expens} = useContext(ExpensContext);
  return (
    <View className="bg-blue-200">
      <NavigateDetail navigation={navigation} />
      <Text className="font-blod text-5xl ml-5 mt-7">$2000</Text>
      <Text className="font-blod text-xl ml-5 mt-5">Month</Text>
      <View className="bg-white mt-10 rounded-t-[50px]">
        <DetailList data={expens} />
      </View>
    </View>
  );
};
export default DetailScreen;
