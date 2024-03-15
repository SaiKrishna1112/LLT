import { StyleSheet, Text, View ,Dimensions,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import IonIcons from "react-native-vector-icons/Ionicons"

const {width,height} =Dimensions.get("window" || "screen")
const DocUpload = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload 10th Certificate</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload 12th Certificate</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload Bacherlor's or Degree Certificate</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload Passport size photo</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload Aadhar card</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload PANCARD</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.rowContainer}>
          <Text style={styles.textTitle}>Upload Passport</Text>
          <Icon name={"addfile"} size={18}/>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.backBtn} onPress={()=>props.changeView(1)}>
            <IonIcons  name={"chevron-back-sharp"} size={28} style={{fontWeight:"bold",color:"white"}}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={()=>props.changeView(3)}>
            <Text style={styles.btntxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DocUpload

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#E5E1E1",
        width:width*0.9,
        height:"auto",
        alignSelf:"center",
        borderRadius:10,
        elevation:5,
        justifyContent:"center"
      },
      rowContainer:{
        flexDirection:"row",
        width:width*0.84,
        height:35,
        borderWidth:1,
        borderColor:"#c0c0c0",
        alignSelf:"center",
        margin:10,
        justifyContent:"space-between",
        alignItems:"center",
        paddingLeft:12,
        paddingRight:12,
        borderRadius:8
      },
      textTitle:{
        fontSize:16,
        fontWeight:"500",
        // color:""
      },
      button:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:12,
        paddingRight:10,

      },
      backBtn:{
        backgroundColor:"#0384d5",
        height:30,
        width:width*0.1,
        alignSelf:"flex-start",
        justifyContent:"center",
        borderRadius:10,
        marginBottom:15,
        alignItems:"center"
      },
      nextBtn:{
        backgroundColor:"#0384d5",
        height:30,
        width:width*0.25,
        alignSelf:"flex-end",
        justifyContent:"center",
        borderRadius:10,
        marginBottom:15
      },
      btntxt:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        alignSelf:"center",
        justifyContent:"center",
      }
})