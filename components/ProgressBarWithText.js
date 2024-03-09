import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBarWithText = ({ progress }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.progressBar,{width:`${progress * 100}%`}]}/>
            <View style={{position:"absolute"}}>
                <Text style={styles.progressText}>
                    {`${progress * 100}% completed`}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 18,
        backgroundColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        position:"relative"
    },
    progressText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign:"center",
        alignSelf:"center",
        width:150,
        // top:1,
        fontSize:12
    },
});

export default ProgressBarWithText;