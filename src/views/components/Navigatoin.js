import React from 'react';
import {Text, View} from 'react-native';
const Navigate = () => {
  return (
    <View className="flex flex-row p-7 justify-between">
      <View className="flex flex-row gap gap-10">
        <View>
          <Text className="text-white text-lg font-bold">X</Text>
        </View>
        <View>
          <Text className="text-white text-lg font-bold">Expenses</Text>
        </View>
      </View>
      <View className="flex flex-row gap gap-10">
        <View>
          <Text className="text-white text-3xl font-bold">+</Text>
        </View>
        <View>
          <Text className="text-white text-lg font-bold">...</Text>
        </View>
      </View>
    </View>
  );
};
export default Navigate;
