import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressSteps = ({ steps, activeStep }) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={[styles.stepIndicator, index === activeStep ? styles.activeStep : styles.inactiveStep]}>
            <Text style={styles.stepNumber}>{index + 1}</Text>
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepHeading}>{step.heading}</Text>
            <Text style={styles.stepSubtext}>{step.subtext}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepIndicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStep: {
    backgroundColor: '#007bff',
  },
  inactiveStep: {
    backgroundColor: '#CCCCCC',
  },
  stepNumber: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepContent: {
    marginLeft: 10,
  },
  stepHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepSubtext: {
    fontSize: 14,
    color: '#666666',
  },
});

export default ProgressSteps;
