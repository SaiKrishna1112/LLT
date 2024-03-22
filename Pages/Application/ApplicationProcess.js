import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import StepIndicator from 'react-native-step-indicator';

import dummyData from './applicationdata';

const {height,width} = Dimensions.get("window"||"screen")

const labels =["Info City University od London","Msc Artificial Intelligence","Intake : Spring"]

const customStyles = {
  stepIndicatorSize: 10,
  currentStepIndicatorSize:10,
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

const ApplicationProcess = () => {


  // const [currentPage, setCurrentPage] = React.useState(1); const labels =["Unviersities Shortlisted","Application Submitted","Admission received"]

  const [currentPage, setCurrentPage] = React.useState(1);


  return (
    <View>
      <Text>ApplicationProcess</Text>
      <View style={styles.container}>
        <Text style={styles.heading}>Application Process</Text>
          <View style={styles.blockContainer}>
              <TouchableOpacity>
                  <Text style={styles.textView}>View Application</Text>
              </TouchableOpacity>
              {/* <Text>Info City University of london</Text> */}
              <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          direction={"vertical"}
          currentPosition={currentPage}
          labels={labels}
          renderLabel={({position,stepStatus,label,currentPosition})=>{
            return(
            <View style={styles.ldlContainer}>
              <View style={{flexDirection:"row"}}>
                <View>
                  <Text style={styles.ldlText}>
                  {dummyData.applicationProcess[position].header}
                  </Text>
                </View>

                {dummyData.applicationProcess[position].subtitle!='' ?
                <TouchableOpacity style={styles.subtitlebtn}>
                    <Text>{dummyData.applicationProcess[position].subtitle}</Text>         
                </TouchableOpacity>
                :null}
              </View>
         
            </View>
            )
          }}
        />


          </View>
      </View>
    </View>
  )
}

export default ApplicationProcess

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    elevation:5,
    width:width*0.95,
    height:"auto",
    margin:10,
    borderRadius:10
  },
  heading:{
    color:"#0384d5",
    padding:10,
    fontSize:20,
    fontWeight:"bold"
  },

  blockContainer:{
    backgroundColor:"#c0c0c0",
    width:width*0.85,
    elevation:3,
    height:150,
    alignSelf:"center",
    borderRadius:10,
    margin:20
  },
  textView:{
    alignSelf:"flex-end",
    marginRight:20,
    color:"#0384d5",
    fontWeight:"bold"
  },
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
    fontSize:15,
    color:"black",
    fontWeight:"bold"
  },
  ldlSub:{
    fontSize:13,
    color:"grey"
  },
  subtitlebtn:{
    backgroundColor:"white",
    width:"auto",
    elevation:5,
    marginLeft:15,
    paddingHorizontal:10,
    borderRadius:5
  }
})
