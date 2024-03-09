import * as React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import dummyData from './data';

const {height,width} = Dimensions.get("window"||"screen")
const labels =["Unviersities Shortlisted","Application Submitted","Admission received","i20 received","Visa approved"]

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0384d5',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0384d5',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0384d5',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0384d5',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0384d5',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 20,
  currentStepLabelColor: '#0384d5'
}

export default function VerticalStepIndicator() {
  const [currentPage, setCurrentPage] = React.useState(1);
 console.disableYellowBox = true
  return (
    <View>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={5}
          direction={"vertical"}
          currentPosition={currentPage}
          labels={labels}
          renderLabel={({position,stepStatus,label,currentPosition})=>{
            return(
            <View style={styles.ldlContainer}>
              <View style={{flexDirection:"row"}}>
                <View>
                  <Text style={styles.ldlText}>
                  {dummyData.data[position].title}
                  </Text>
                </View>
              </View>
              <Text style={styles.ldlSub}>
                {dummyData.data[position].body}
              </Text>
            </View>
            )
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepIndicator: {
    marginVertical: 15,
    paddingHorizontal: 30,
    height:350
  },
  ldlContainer:{
    marginTop:5,
    padding:10,
    paddingLeft:25,
    // paddingTop:0,
    width:width-100,
    // height:height
  },
  ldlText:{
    fontSize:18,
    color:"black",
    fontWeight:"bold"
  },
  ldlSub:{
    fontSize:13,
    color:"grey"
  }
});