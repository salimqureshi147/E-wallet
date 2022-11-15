import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const screenWidth = Dimensions.get('window').width;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DarkTheme} from '@react-navigation/native';
const data = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(81, 118, 194, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
};
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#fff',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(81, 118, 194, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '5',
    strokeWidth: '2',
    stroke: '#5176C2',
  },
};
const Graph = () => {
  return (
    <View style={{height: 200}}>
      <LineChart
        style={{marginRight: -20}}
        data={data}
        width={screenWidth - 40}
        height={256}
        verticalLabelRotation={20}
        chartConfig={chartConfig}
        withVerticalLines={false}
        withShadow={false}
        bezier
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({});
