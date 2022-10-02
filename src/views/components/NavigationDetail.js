import React from 'react';
import {Text, View} from 'react-native';
const NavigateDetail = ({navigation}) => {
  return (
    <View className="flex flex-row p-7 justify-between">
      <View className="flex flex-row gap gap-10">
        <View>
          <Text className="text-black text-lg font-bold">--</Text>
        </View>
        <View>
          <Text className="text-gray-700 text-xl font-bold">Shops</Text>
        </View>
      </View>
      <View className="flex flex-row gap gap-10">
        <View>
          <Text
            className="text-gray-500 text-3xl font-bold"
            onPress={() => navigation.navigate('CreateNewExpense')}>
            +
          </Text>
        </View>
        <View>
          <Text className="text-gray-500 text-lg font-bold">...</Text>
        </View>
      </View>
    </View>
  );
};
export default NavigateDetail;
