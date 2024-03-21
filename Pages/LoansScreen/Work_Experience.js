import { StyleSheet, Text, View ,Dimensions,TextInput, TouchableOpacity,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/AntDesign"
import IonIcons from "react-native-vector-icons/Ionicons"
import * as DocumentPicker from 'expo-document-picker';
import PhoneInput from "react-native-phone-number-input";
import { RadioButton } from 'react-native-paper';

const {width,height} =Dimensions.get("window" || "screen")

const Work_Experience = (props) => {
  const [inputFields, setInputFields] = useState({
      motherName:"",
      phoneNumber:"",
      countryCode:"",
      Work_Experience:"Yes"
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

  const handleDocumentSelection2= async () => {
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

  const handleDocumentSelection3 = async () => {
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
  
  const handleDocumentSelection4 = async () => {
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

  const handleDocumentSelection5 = async () => {
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
        <View style={{flexDirection:"row"}}>
            <View style={{width:width*0.5}}>
               <Text style={styles.texthead}>Work Experience</Text>
            </View>
            <View style={{width:width*0.3}}>
            <View style={{ top:-4 }}>
                      <RadioButton.Group
                        onValueChange={(value) =>
                          setInputFields({
                            ...inputFields,
                            Work_Experience: value,
                          })
                        }
                        value={inputFields.Work_Experience}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <RadioButton
                            value="YES"
                            default="true"
                            color="#007AFF"
                            style={{left:-30,right:-16}}
                          />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -4,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            Yes
                          </Text>
                          <RadioButton value="NO" color="#007AFF" />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -4,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            No{" "}
                          </Text>
                        </View>
                      </RadioButton.Group>
                    </View>
            </View>
          </View>  
          <ScrollView>
              
              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection} >
                  <Text style={styles.textTitle}>Work Experience Letter</Text>
                  <Icon name={"addfile"} size={18} color="#808080"/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection1} >
                  <Text style={styles.textTitle}>Work Offer Letter</Text>
                  <Icon name={"addfile"} size={18} color="#808080"/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection2} >
                  <View>
                    <Text style={styles.textTitle}>Upload Payslips</Text>
                    <Text style={styles.text1}>(you can select multiple files at one place)</Text>
                  </View>
                  <View>
                      <Icon name={"addfile"} size={18} color="#808080"/>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection3} >
                <View>
                  <Text style={styles.textTitle}>Upload Relieving letter</Text>
                  <Text style={styles.text1}>(You can select multiple files at one place)</Text>
                  </View>
                  <View>
                  <Icon name={"addfile"} size={18} color="#808080"/>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection4} >
                  <View>
                    <Text style={styles.textTitle}>Upload Testscore cards</Text>
                    <Text style={styles.text1}>GRE/GMAT/IELTS/TOFEL/PTE/Duolingo</Text>
                  </View>
                  <View>
                      <Icon name={"addfile"} size={18} color="#808080"/>
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.rowContainer} onPress={handleDocumentSelection5} >
                  <View>
                    <Text style={styles.textTitle}>Upload Admission letter</Text>
                    <Text style={styles.text1}>if you don't have an admit,please leave it empty</Text>
                  </View>
                  <View>
                      <Icon name={"addfile"} size={18} color="#808080"/>
                  </View>
              </TouchableOpacity>

              <TextInput
                  style={styles.input}
                  placeholder="Mother Name"
                  value={inputFields.coApplicantName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, coApplicantName: text })
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


              <View style={styles.rowContainer1} >
                  <TouchableOpacity style={styles.backbtn} onPress={()=>props.changeView(3)}>
                      <IonIcons name={"chevron-back"} size={25} color="white" style={{alignSelf:"center"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextbtn} onPress={()=>props.changeView(5)}>
                     <Text style={styles.nextText}>Next</Text><IonIcons name="chevron-forward" color="white" size={25} style={{top:1}}/>
                  </TouchableOpacity>
              </View>
              </ScrollView>
       </View>
    </View>
  )
}

export default Work_Experience

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
  texthead :{
    fontSize:19,
    fontWeight:"bold"
  },
  input: {
    width: width * 0.8,
    height: 45,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 18,
    alignSelf:"center",
    // top:20
    marginTop: 10,

  },
  input1: {
    marginTop: 10,
    width: width * 0.8,
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
  rowContainer:{
    flexDirection:"row",
    width:width*0.8,
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
  Dropdownstyle:{
    height: 50, 
    width: width*0.8,
    borderColor: "#c0c0c0",
    borderWidth:0.8,
    borderRadius:10,
    alignSelf:"center",
    margin:10,
    padding:10
 },
  textTitle:{
    fontSize:16,
    fontWeight:"500",
    color:"#808080"
  },
  text1:{
    fontSize:12,
    color:"#808080"
  },
  rowContainer1:{
    flexDirection:"row",
    justifyContent:"space-between",
    // marginHorizontal:10,
    marginTop:15
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