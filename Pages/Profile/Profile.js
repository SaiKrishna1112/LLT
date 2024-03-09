import { StyleSheet, Text, View,Dimensions,SafeAreaView ,Image,TouchableOpacity,TextInput,KeyboardAvoidingView,ScrollView} from 'react-native'
import React,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
import PhoneInput from "react-native-phone-number-input";
import { RadioButton,Button  } from 'react-native-paper';
import DatePicker from "@react-native-community/datetimepicker";

const{height,width}=Dimensions.get('window' || 'screen')

const Profile = () => {
const[inputFields,setInputFields]=useState({
  firstName:"",
  lastName:"",
  email: "",
  phoneNumber:"",
  whatsappNumber:"",
  countryCode:"",
		maritalStatus:"",
  passportNumber:"",
		genderSelect:"",
		IssueDate:"Issue Date",
		mode:"date",
		showIssueDate:false,
		date:new Date(),
});



const handlePhoneNumberChange = (value) => {
  try {
    // setmobileNumber(value);
    // setInputFields({...inputFields,phoneNumber: value})
    // console.log(value)
    const callingCode = phoneInput.getCallingCode(value);
    // console.log(callingCode);
    setInputFields({...inputFields,phoneNumber: value,countryCode:callingCode })

    // setcountryCode(callingCode);
  } catch (error) {
    // Handle any parsing errors
  }
};

const handleWhatsappNumberChange = (value1) => {
  try {
    // setmobileNumber(value);
    // setInputFields({...inputFields,phoneNumber: value})
    // console.log(value)
    const callingCode = phoneInput.getCallingCode(value1);
    // console.log(callingCode);
    setInputFields({...inputFields,whatsappNumber: value1,countryCode:callingCode })

    // setcountryCode(callingCode);
  } catch (error) {
    // Handle any parsing errors
  }
};

// Issue Date  Picker //
const onChange = (event, selectDate) => {
	const currentDate = selectDate || inputFields.date;

	let tempDate = new Date(currentDate);
	let fDate =
			tempDate.getDate() +
			"/" +
			(tempDate.getMonth() + 1) +
			"/" +
			tempDate.getFullYear();
	setInputFields({...inputFields,showIssueDate:Platform.OS==="ios",date:currentDate,IssueDate:fDate})


};
const showMode = (currentMode) => {
	// setShow(!show);
	setInputFields({...inputFields,showIssueDate:!inputFields.showIssueDate,mode:currentMode})
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};



  return (
    <View>
      <ScrollView>
      <SafeAreaView>
        <View style={{backgroundColor:"white"}}>


            <View style={styles.container}>
              
              </View>
      
              <View style={styles.rowContainer}>
                    <View style={styles.editContainer}>
                        <FontAwesome5 name="user-edit" size={18} color="#0384d5" style={{justifyContent:"center",alignSelf:"center",}} />
                    </View>
                    <View style={styles.likeContainer}>
                        <Icon name="heart" size={25} color="#0384d5" style={{justifyContent:"center",alignSelf:"center",}} />
                    </View>
                </View>
      
              <View style={styles.imgView}>
                  <Image source={require('../../assets/user.png')} style={styles.img}/>
              </View>

              <View style={{marginLeft:20,width:width*0.9}}>
                        <View style={styles.rowContainer1}>
                            <View style={styles.editContainer1}>
                                <FontAwesome5 name="user" size={15} color="white" style={{justifyContent:"center",alignSelf:"center",}} />
                            </View>
                            <Text style={{fontSize:18}}>Sai Krishna Dharmapuri</Text>
                        </View>

                        <View style={styles.rowContainer1}>
                            <View style={styles.editContainer1}>
                                <FontAwesome5 name="phone" size={13} color="white" style={{justifyContent:"center",alignSelf:"center",top:2}} />
                            </View>
                            <Text style={{fontSize:18}}>+91 9876543210</Text>
                            <View style={styles.editContainer2}>
                                <Icon name="people-outline" size={15} color="white" style={{justifyContent:"center",alignSelf:"center"}} />
                            </View>
                            <Text style={{fontSize:18}}>Male</Text>
                            
                        </View>

                        <View style={styles.rowContainer1}>
                            <View style={styles.editContainer1}>
                                <FontAwesome5 name="calendar-alt" size={15} color="white" style={{justifyContent:"center",alignSelf:"center",}} />
                            </View>
                            <Text style={{fontSize:18}}>12-07-1991</Text>
                        </View>

                        <View style={styles.rowContainer1}>
                            <View style={styles.editContainer1}>
                                <Icon name="mail" size={15} color="white" style={{justifyContent:"center",alignSelf:"center",top:1}} />
                            </View>
                            <Text style={{fontSize:18}}>somethingspecial18181@gmail.com</Text>
                        </View>
              </View>

        </View>

			  {/* Personal Details */}
  
<View>
  <View style={styles.detailsContainer}>
        <View style={styles.rowContainer2}>
                  <View style={styles.detailsView}>
                    <View style={styles.details}>
                      <Text style={styles.detailstext}>Personal Details</Text>
                    </View>


                    <Progress.Bar progress={0.5} 
                          width={width*0.45} 
                          color="#0384d5"
                          borderColor="#c0c0c0"
                          height={15}
                          style={styles.progressBar}/>

                        <View style={styles.textContainer}>
                            <Text style={styles.text}>45% completed</Text>
                        </View>

                    <TouchableOpacity>
                      <FontAwesome5 name="eye" size={15} color="#808080"style={{alignSelf:"center",margin:3}}/>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <FontAwesome5 name="edit" size={15}  color="#808080" style={{alignSelf:"center",margin:3}}/>
                    </TouchableOpacity>
                  </View>
                



        </View>


        <View style={{margin:10,width:width*0.9}}>
              <View style={styles.rowContainer3}>
                  <TextInput style={styles.input} 
                                placeholder="First Name"
                                value={inputFields.firstName}
                                onChange={(text)=>setInputFields({...inputFields, firstName : text})}  
                    />
                  <TextInput style={styles.input} 
                                placeholder="Last Name"
                                value={inputFields.lastName}
                                onChange={(text)=>setInputFields({...inputFields, lastName : text})}  
                    />
              </View>


              <PhoneInput
                containerStyle={styles.input1}
                textInputStyle={styles.phonestyle}
                codeTextStyle={styles.phonestyle1}
                ref={(ref) => (phoneInput = ref)}
                defaultValue={inputFields.phoneNumber}
                defaultCode="IN"
                layout="first"
                autoFocus
                onChangeText={handlePhoneNumberChange}
              />

              <TextInput style={styles.emailinput} 
                          placeholder="Email"
                          value={inputFields.email}
                          onChange={(text)=>setInputFields({...inputFields, email : text})}  
              />


            <PhoneInput
                containerStyle={styles.input1}
                textInputStyle={styles.phonestyle}
                codeTextStyle={styles.phonestyle1}
                ref={(ref) => (phoneInput = ref)}
                defaultValue={inputFields.whatsappNumber}
                defaultCode="IN"
                layout="first"
                // autoFocus
                onChangeText={handleWhatsappNumberChange}
              />

<View style={styles.rowContainer4}>
	<View style={styles.rowContainer5}>
    <View style={{alignSelf:"center"}}>
        <Text>  Marital Status</Text>
    </View>
				  <View style={{alignSelf:"center"}}>
				 		<RadioButton.Group onValueChange = {(value) => setInputFields({...inputFields, maritalStatus: value})}
																			value={inputFields.maritalStatus}>
											<View style={{ flexDirection: 'row'}}>
															<RadioButton value="YES" default="true" color="#007AFF" /><Text style={{alignSelf:"center",left:-3,fontWeight:"800",fontSize:16}}>Y</Text>
															<RadioButton value="NO" color="#007AFF"/><Text style={{alignSelf:"center",left:-3,fontWeight:"800",fontSize:16}}>N </Text>
											</View>
							 </RadioButton.Group>
						</View>
						</View>
						<View style={styles.rowContainer5}>
    <View style={{alignSelf:"center"}}>
        <Text>  Gender</Text>
    </View>
				  <View style={{alignSelf:"center"}}>
				 		<RadioButton.Group onValueChange = {(value) => setInputFields({...inputFields, genderSelect: value})}
																			value={inputFields.genderSelect}>
											<View style={{ flexDirection: 'row'}}>
															<RadioButton value="MALE" default="true" color="#007AFF" /><Text style={{alignSelf:"center",left:-3,fontWeight:"800",fontSize:16}}>M</Text>
															<RadioButton value="FEMALE" color="#007AFF"/><Text style={{alignSelf:"center",left:-3,fontWeight:"800",fontSize:16}}>F </Text>
											</View>
							 </RadioButton.Group>
						</View>
						</View>
</View>

       
            <TextInput style={styles.emailinput} 
                                placeholder="Passport Number"
                                value={inputFields.passportNumber}
                                onChange={(text)=>setInputFields({...inputFields, passportNumber : text})}  
                    />
              <TextInput style={styles.emailinput} 
                                placeholder="Country of Birth"
                                value={inputFields.passportNumber}
                                onChange={(text)=>setInputFields({...inputFields, passportNumber : text})}  
                    />
																				<View style={styles.rowContainer3}>
																				{inputFields.show && (
                          <DatePicker
                            testID="DatePicker"
                            value={inputFields.date}
                            mode={inputFields.mode}
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date()} // Disable future years
                            onChange={onChange}
                          />
                        )}
                        {!inputFields.show && (
                        <TouchableOpacity onPress={() => showMode("date")} style={styles.inputbox1}>
                              <Text style={styles.dateField}>{inputFields.IssueDate}</Text>
                            </TouchableOpacity>
                        )}
                  {/* <TextInput style={styles.input} 
                                placeholder="First Name"
                                value={inputFields.firstName}
                                onChange={(text)=>setInputFields({...inputFields, firstName : text})}  
                    /> */}
                  <TextInput style={styles.input} 
                                placeholder="Last Name"
                                value={inputFields.lastName}
                                onChange={(text)=>setInputFields({...inputFields, lastName : text})}  
                    />
              </View>


        </View>
        
  </View>
</View>





        
  </SafeAreaView>
  </ScrollView>
</View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#0384d5",
    width:width*1,
    height:height/6,
  },
  rowContainer:{
    flexDirection:"row",
    top:-40,
    justifyContent:"flex-end",
    marginRight:10

  },
  editContainer:{
    backgroundColor:"white",
    height:30,
    width:30,
    marginRight:10,
    padding:3,
    paddingLeft:5,
    borderRadius:100
  },
  rowContainer1:{
    flexDirection:"row",
    top:-40,
    marginRight:10,
    marginBottom:10,
    // marginLeft:40

  },
  editContainer1:{
    backgroundColor:"#c0c0c0",
    height:25,
    width:25,
    marginRight:10,
    padding:3,
    // paddingLeft:5,
    borderRadius:100
  },
  editContainer2:{
    backgroundColor:"#c0c0c0",
    height:25,
    width:25,
    marginRight:10,
    padding:3,
    marginLeft:20,    
    borderRadius:100
  },
  likeContainer:{
    backgroundColor:"white",
    height:30,
    width:30,
    borderRadius:100,
    padding:3
  },
  imgView:{
    height:120,
    width:120,
    backgroundColor:"#0384d5",
    borderRadius:100,
    alignSelf:"center",
    top:-80
  },
  img:{
    height:110,
    width:110,
    backgroundColor:"#0384d5",
    borderRadius:100,
    alignSelf:"center",
    top:5
  },
  detailsContainer:{
    backgroundColor:"white",
    marginTop:30,
    borderRadius:10,
    width:width*0.95,
    alignSelf:"center",
    height:'auto'

  },
  rowContainer2:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:-10,
    
  }, 
  rowContainer3:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:10,
    
  }, 
  detailsView:{
    backgroundColor:"white",
    width:width*0.9,
    borderRadius:5,
    elevation:5,
    padding:3,
    flexDirection:"row",
    paddingHorizontal:10
  },

  detailstext:{
    alignSelf:"center",
    color:"#0384d5",
    // top:2,
    fontWeight:"bold",
    fontSize:17
  },
  progressBar: {
    borderRadius: 5,
    backgroundColor:"#c0c0c0",
    alignSelf:"center",
    marginHorizontal:8
  },

  textContainer: {
    position: 'absolute',
    // justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    // height: 30,
    alignSelf:"center"
  },
  text: {
    color: '#fff',
    fontSize: 10,
    fontWeight:"bold"
  },
  input:{
    width:width*0.44,
    height:45,
    borderColor:"#c0c0c0",
    borderWidth:1,
    borderRadius:5,
    paddingLeft:10
  },
  emailinput:{
    width:width*0.89,
    height:45,
    borderColor:"#c0c0c0",
    borderWidth:1,
    borderRadius:5,
    paddingLeft:10,
    marginTop:10,
    // bottom:10,
    alignSelf:"center"
  },
  input1: {
    marginTop: 10,
    width:width*0.89,
    alignSelf: "center",
    height: 45,
    backgroundColor:"white",
    borderColor:"#c0c0c0",
    borderWidth:1,
    borderRadius:5,
    
  },
  phonestyle: {
    // width: width*0.9,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    height: 40,
  },
  phonestyle1: {
    height: 20,
  },
		rowContainer4:{
			flexDirection:"row",
			justifyContent:"space-around",
			marginTop:10,
		},
		rowContainer5:{
			flexDirection:"row",
			justifyContent:"space-around",
			borderColor:"#c0c0c0",
   borderWidth:1,
   borderRadius:5,
			width:width*0.42
		},
		dateField:{
			fontSize:16,
			textAlign:"center"
	},
	inputbox1: {
		width: width*0.2,
		marginTop: 15,
		flexDirection:"row",
		alignSelf:"center",
},
})