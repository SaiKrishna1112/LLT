import { StyleSheet, Text, View ,Dimensions,TextInput, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import IonIcons from "react-native-vector-icons/Ionicons"
import * as DocumentPicker from 'expo-document-picker';
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton, Button, Checkbox } from "react-native-paper";

const {width,height} =Dimensions.get("window" || "screen")

const References = (props) => {

const[inputFields,setInputFields]=useState({
  housecoapplicant:"",
  addressProof:"",
  name:"",
  phoneNumber:"",
  countryCode:"",
  address:"",
  name1:"",
  phoneNumber1:"",
  countryCode1:"",
  address1:"",


})


const handlePhoneNumberChange = (value) => {
  try {
    // setmobileNumber(value);
    // setInputFields({...inputFields,phoneNumber: value})
    // console.log(value)
    const callingCode = phoneInput.getCallingCode(value);
    // console.log(callingCode);
    setInputFields({
      ...inputFields,
      phoneNumber: value,
      countryCode: callingCode,
    });

    // setcountryCode(callingCode);
  } catch (error) {
    // Handle any parsing errors
  }
};

const handlePhoneNumberChange1 = (value) => {
  try {
    // setmobileNumber(value);
    // setInputFields({...inputFields,phoneNumber: value})
    // console.log(value)
    const callingCode = phoneInput.getCallingCode(value);
    // console.log(callingCode);
    setInputFields({
      ...inputFields,
      phoneNumber1: value,
      countryCode1: callingCode,
    });

    // setcountryCode(callingCode);
  } catch (error) {
    // Handle any parsing errors
  }
};






const handleDocumentSelection = async () => {
  try {
    const document = await DocumentPicker.getDocumentAsync({
      type: '*/*', // You can specify the MIME type here. For example: 'application/pdf'
      copyToCacheDirectory: false, // Set to true if you want to copy the file to the app's cache directory
    });

    if (document.type === 'success') {
      // Handle the selected document here, for example, upload it to a server
      console.log('Selected document:', document);
      // You can perform upload operation here
    } else {
      console.log('Document selection cancelled');
    }
  } catch (error) {
    console.error('Error picking document:', error);
  }
};

const handleDocumentSelection1 = async () => {
  try {
    const document = await DocumentPicker.getDocumentAsync({
      type: '*/*', // You can specify the MIME type here. For example: 'application/pdf'
      copyToCacheDirectory: false, // Set to true if you want to copy the file to the app's cache directory
    });

    if (document.type === 'success') {
      // Handle the selected document here, for example, upload it to a server
      console.log('Selected document:', document);
      // You can perform upload operation here
    } else {
      console.log('Document selection cancelled');
    }
  } catch (error) {
    console.error('Error picking document:', error);
  }
};

  return (
    <View>
      <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>References</Text>
            <View style={styles.rowContainer}>
                <Text>Do you or your own house co-applicant</Text>
                  <RadioButton.Group onValueChange={(value) => 
                          setInputFields({ ...inputFields,housecoapplicant: value,})}
                          value={inputFields.housecoapplicant} >
                          <View style={{ flexDirection: "row" }}>
                            <RadioButton value="YES" default="true" color="#007AFF" style={{left:-30,right:-16}}/>
                                <Text style={{alignSelf: "center",left: -4,fontSize: 16,}}>
                                  Yes
                                </Text>
                            <RadioButton value="NO" color="#007AFF" />
                                <Text style={{ alignSelf: "center",left: -4,
                                    fontSize: 16,}}>
                                  No{" "}
                                </Text>
                          </View>
                  </RadioButton.Group>
            </View>

            <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection} >
                  <Text style={styles.textTitle}>Please note that this property is just for address proof not taken as colleteral</Text>
                  <Icon name={"addfile"} size={18} color="#808080"/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.rowContainer1} onPress={handleDocumentSelection1} >
                <View>
                  <Text style={{fontWeight:500,fontSize:20}}>Give your references</Text>
                  <Text style={styles.textTitle}>References are people other than your parents and siblings , who know you . It can be friends /neighbours/relatives</Text>
                </View>
                  <Icon name={"addfile"} size={18} color="#808080"/>
            </TouchableOpacity>

            <Text style={{fontWeight:"bold",fontSize:17}}>Reference 1</Text>

            <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={inputFields.name}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, name: text })
                  }
                />   
            
            <PhoneInput
                    containerStyle={styles.input1}
                    textContainerStyle={styles.textStyle}
                    textInputStyle={styles.phonestyle}
                    codeTextStyle={styles.phonestyle1}
                    ref={(ref) => (phoneInput = ref)}
                    defaultValue={inputFields.phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    // autoFocus
                    onChangeText={handlePhoneNumberChange}
                  />

            <TextInput
                  style={styles.input}
                  placeholder="Address"
                  value={inputFields.address}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, address: text })
                  }
                /> 

      <View style={{top:10}}>
            <Text style={{fontWeight:"bold",fontSize:17}}>Reference 2</Text>

            <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  value={inputFields.name1}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, name1: text })
                  }
                />   

            <PhoneInput
                    containerStyle={styles.input1}
                    textContainerStyle={styles.textStyle}
                    textInputStyle={styles.phonestyle}
                    codeTextStyle={styles.phonestyle1}
                    ref={(ref) => (phoneInput = ref)}
                    defaultValue={inputFields.phoneNumber1}
                    defaultCode="IN"
                    layout="first"
                    // autoFocus
                    onChangeText={handlePhoneNumberChange1}
                  />

            <TextInput
                  style={styles.input}
                  placeholder="Address"
                  value={inputFields.address1}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, address1: text })
                  }
                /> 
      </View>
            <View style={styles.rowContainer2} >
                <TouchableOpacity style={styles.backbtn} onPress={()=>props.changeView(4)}>
                    <IonIcons name={"chevron-back"} size={25} color="white" style={{alignSelf:"center"}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextbtn} onPress={()=>props.changeView(6)}>
                    <Text style={styles.nextText}>Next</Text><IonIcons name="chevron-forward" color="white" size={25} style={{top:1}}/>
                </TouchableOpacity>
            </View>


      </View>
    </View>
  )
}

export default References

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#E5E1E1",
    width:width*0.9,
    height:"auto",
    alignSelf:"center",
    borderRadius:10,
    elevation:5,
    justifyContent:"center",
    padding:20,
    marginTop:20
  },
  rowContainer:{
    flexDirection:"row",
    width:width*0.85,
    height:50,
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
  rowContainer1:{
    flexDirection:"row",
    width:width*0.85,
    height:100,
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
    color:"#808080"
  },
  input: {
    width: width * 0.85,
    height: 45,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 18,
    alignSelf:"center",
    // top:20
    marginTop: 10,
  },
  input1: {
    marginTop: 10,
    width: width * 0.85,
    alignSelf: "center",
    height: 45,
    backgroundColor: "#E5E1E1",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 10,
    // padding:10
  },
  phonestyle: {
    height: 45,
    padding:10,
  },
  phonestyle1: {
    height:20,
  },
  textStyle:{
    backgroundColor:"#E5E1E1",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    // borderWidth:3,
    // borderColor: "#c0c0c0",
  },
  rowContainer2:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:30,
  },
  backbtn:{
      backgroundColor:"#0384d5",
      height:30,
      width:30,
      borderRadius:5,
      justifyContent:"center",
      alignSelf:"center"
  },
  nextbtn:{
    backgroundColor:"#0384d5",
    height:30,
    width:width*0.2,
    borderRadius:5,
    justifyContent:"center",
    alignSelf:"center",
    flexDirection:"row"
  },
  nextText:{
    color:"white",
    alignSelf:"center",
    fontWeight:"bold",
    fontSize:20,
    top:-2
  }
})