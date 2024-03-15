import { StyleSheet, Text, View,Dimensions,Animated,TextInput,TouchableOpacity } from 'react-native'
import React,{useRef,useState} from 'react'
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";

const { width, height } = Dimensions.get("window");

const NamePage = (props) => {
    const [inputFields, setInputFields] = useState({
        fullName:"",
        email:"",
        phoneNumber:"",
        countryCode:"",
        planningTo:"",
        planningToOption:[
          { label: "US", value: "US" },
          { label: "UK", value: "UK" },
        ],
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


  return (
    <View style={styles.container}>
              <View style={styles.whiteContainer}>
                  <Text style={styles.text}>Educational</Text>
                  <Text style={styles.text}>Loans</Text>
              </View>
              <View style={{top:20}}>
                  <TextInput
                          style={styles.input}
                          placeholder="Full Name"
                          value={inputFields.fullName}
                          onChange={(text) =>
                            setInputFields({ ...inputFields, fullName: text })
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
                          placeholder="Email"
                          value={inputFields.email}
                          onChange={(text) =>
                            setInputFields({ ...inputFields, email: text })
                          }
                        />    


                  <Dropdown  style={styles.Dropdownstyle}
                                // placeholder="Select an option"
                                data={inputFields.planningToOption}
                                labelField="label"
                                valueField="value"
                                value={inputFields.planningTo}
                                onChange={(item) => {
                                  setInputFields({
                                    ...inputFields,
                                    planningTo: item.value,
                                  });
                                }}             
                              />

            <TouchableOpacity style={styles.btn} onPress={()=>props.changeView(2)}>
              <Text style={styles.btntxt}>Next</Text>
            </TouchableOpacity>
              </View>
        </View>
  )
}

export default NamePage

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
      },
      container:{
        backgroundColor:"#E5E1E1",
        width:width*0.9,
        height:"auto",
        alignSelf:"center",
        borderRadius:10,
        elevation:5,
      },
      whiteContainer:{
        backgroundColor:"white",
        height:100,
        paddingLeft:30,
        width:width*0.9,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        elevation:5
    
      },
      text:{
        fontSize:30,
        color:"#0384d5",
        fontWeight:"bold",
        top:15
      },
      input: {
        width: width * 0.8,
        height: 45,
        borderColor: "#c0c0c0",
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
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
      },
      Dropdownstyle:{
         height: 50, 
         width: width*0.8,
         borderColor: "#c0c0c0",
         borderWidth:0.8,
         borderRadius:10,
         alignSelf:"center",
         margin:15,
         padding:10
      },
      btn:{
        backgroundColor:"#0384d5",
        height:30,
        width:width*0.25,
        alignSelf:"flex-end",
        marginRight:10,
        justifyContent:"center",
        borderRadius:10,
        marginBottom:50
      },
      btntxt:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
        alignSelf:"center",
        justifyContent:"center",
      }
})