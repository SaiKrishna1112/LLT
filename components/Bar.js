import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const data = [
  { label: 'January', value: 20, color: '#FF5733' },
  { label: 'February', value: 45, color: '#FFC300' },
  { label: 'March', value: 28, color: '#C70039' },
  { label: 'April', value: 80, color: '#900C3F' },
  { label: 'May', value: 99, color: '#581845' },
  { label: 'June', value: 43, color: '#004E98' },
];

const BarGraph = () => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index} style={styles.barContainer}>
          <View
            style={[
              styles.bar,
              { height: (item.value / maxValue) * 200, backgroundColor: item.color },
            ]}
          />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  barContainer: {
    alignItems: 'center',
  },
  bar: {
    width: 40,
    marginBottom: 5,
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
  },
});

export default BarGraph;
