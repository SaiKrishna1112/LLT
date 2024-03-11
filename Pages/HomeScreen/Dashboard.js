import { StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { BarChart } from "react-native-gifted-charts";
import Animated, {
    FadeInDown,
    FadeInLeft,
    FadeInRight,
  } from "react-native-reanimated";

import VerticalStepIndicator from '../../components/Step_Indicate';
import ProgressSteps from '../../components/Steps';
const {width,height} = Dimensions.get("screen" || "window")
const screenWidth = Dimensions.get("window").width*0.95;

const barData = [
          {
          value: 230,
          label: 'Universities',
          frontColor: '#4ABFF4',
          sideColor: '#23A7F3',
          topColor: '#92e6f6',
        },
        {
          value: 180,
          label: 'Applied Universities',
          frontColor: '#79C3DB',
          sideColor: '#68BCD7',
          topColor: '#9FD4E5',
        },
        {
          value: 195,
          label: 'Success',
          frontColor: '#28B2B3',
          sideColor: '#0FAAAB',
          topColor: '#66C9C9',
        },
        {
          value: 250,
          label: 'Reject',
          frontColor: '#4ADDBA',
          sideColor: '#36D9B2',
          topColor: '#7DE7CE',
        },
  ];



const Dashboard = () => {
    const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.boxRow}>
             <Animated.View  entering={FadeInLeft.delay(800)
														.duration(1000)
														.springify()
														.damping(19)} style={styles.boxStyle}>
                <Text style={styles.headerText}>
                    Applied Universities
                </Text>
                <View style={styles.textRow}>
                    <Text style={styles.innerText}>
                        03
                    </Text>
                    <View>
                        <Icon name="person" size={32} style={styles.icon}/>
                    </View>
                </View>
             </Animated.View>
             <Animated.View  entering={FadeInRight.delay(800)
														.duration(1000)
														.springify()
														.damping(19)} style={styles.boxStyle}>
                <Text style={styles.headerText}>
                    Active Application
                </Text>
                <View style={styles.textRow}>
                    <Text style={styles.innerText}>
                        15
                    </Text>
                    <View>
                        <MaterialIcon name="application-edit-outline" size={32} style={styles.icon}/>
                    </View>
                </View>
             </Animated.View>
        </View>
        <View style={styles.boxRow}>
             <Animated.View  entering={FadeInLeft.delay(600)
                                                .duration(800)
                                                .springify()
                                                .damping(19)}  style={styles.boxStyle}>
                <Text style={styles.headerText}>
                    Application Approved
                </Text>
                <View style={styles.textRow}>
                    <Text style={styles.innerText}>
                        09
                    </Text>
                    <View>
                        <MaterialIcon name="application" size={32} style={styles.icon}/>
                    </View>
                </View>
             </Animated.View>
             <Animated.View  entering={FadeInRight.delay(600)
														.duration(1000)
														.springify()
														.damping(19)}  style={styles.boxStyle}>
                <Text style={styles.headerText}>
                    Rejected Application
                </Text>
                <View style={styles.textRow}>
                    <Text style={styles.innerText}>
                        01
                    </Text>
                    <View>
                        <MaterialIcon name="application" size={32} style={styles.icon}/>
                    </View>
                </View>
             </Animated.View>
        </View>
        <View style={{marginTop:20,alignSelf:"center",backgroundColor:"white",elevation:8,width:width*0.85,borderRadius:20,padding:10}}>
            <View style={{flexDirection:"row",marginTop:5,marginLeft:20,marginBottom:20}}>
              <View style={{alignItems:"flex-start",width:width*0.63}}>
                <Text style={{fontSize:19,fontWeight:"600"}}>Total Universities</Text>
              </View>
              <View style={{alignItems:"flex-end"}}>
                <Icon name='menu' size={26}/>
              </View>
            </View>
            <BarChart
            showFractionalValue
            showYAxisIndices
            // hideRules
            spacing={width*0.06}
            noOfSections={8}
            maxValue={400}
            data={barData}
            barWidth={38}
            sideWidth={14}
            isThreeD 
            isAnimated
            side="right"
            />
        </View>
        <View style={{position:"absolute",width:width,height:height-600,backgroundColor:"blue",bottom:0,borderTopRightRadius:40,borderTopLeftRadius:40}}>

        </View>

        <View style={{marginTop:30,alignSelf:"center",backgroundColor:"white",elevation:8,width:width*0.85,borderRadius:20,marginBottom:30,height:height*0.47,position:"relative"}}>
            <VerticalStepIndicator/>
      <View style={{ marginTop: 40 }}>  
      </View>
        </View>
        
        

        </ScrollView>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    boxRow:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginTop:20,
    },
    boxStyle:{
        elevation:3,
        width:width*0.45,
        height:height*0.13,
        backgroundColor:"white",
        borderRadius:20
    },
    textRow:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        // alignSelf:"center"
        marginTop:height*0.015
    },
    headerText:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"600",
        // width:width*0.38,
        marginTop:10
    },
    innerText:{
        fontSize:46,
        fontWeight:"bold",
        opacity:0.5
    },
    icon:{
        // top:10,

    },
    textStyle:{
        fontSize:13,
        fontWeight:"500",
        // marginLeft:30
    }
    
})