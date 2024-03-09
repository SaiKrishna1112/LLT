import { StyleSheet, Text, View,Dimensions,SafeAreaView ,Image,TouchableOpacity,TextInput, ScrollView} from 'react-native'
import React,{useState} from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RadioButton,Button  } from 'react-native-paper';
import PhoneInput from "react-native-phone-number-input";


const{height,width}=Dimensions.get('window')

const Profile = () => {

  const [inputFields, setInputFields] = useState({
    firstName:"",
    middleName:"",
    lastName:"",
    contactNumber:"",
    genderSelect:"",
    email: "",
    whatsappNumber:"",
    maritalStatus:"",
    selectedOption:"",

    passportNumber:"",
    date:new Date(),
    show:false,
    text:"dd/mm/yyyy",
    mode:"date",
    countryBirth :"",
    date1:new Date(),
    show1:false,
    text1:"dd/mm/yyyy",
    mode1:"date",

    streetName:"",
    city:"",
    district:"",
    state:"",
    country:"",
    pincode:"",

    emergencyName:"",
    emergencyEmail:"",
    emergencyNumber:"",
    emergencyRelation:"",
    emergencyStreet:"",
    emergencyState:"",
    emergencyCity:"",
    emergencyDistrict:"",


    degreeSelect:"",
    degreeSelectOption:[
      {label:"UG",value:"UG"},
      {label:"PG",value:"PG"},
    ],
    date2:new Date(),
    show2:false,
    text2:"Starts From",
    mode2:"date",
    date3:new Date(),
    show3:false,
    text3:"End to",
    mode3:"date",
    collegeName:"",
    collegeAddress:"",
    collegeMarks:"",
    collegeScale:"",

    interSelect:"",
    interSelectOption:[
      {label:"INTERMEDIATE",value:"INTERMEDIATE"},
      {label:"DIPLOMA",value:"DIPLOMA"},
    ],
    date4:new Date(),
    show4:false,
    text4:"Starts From",
    mode4:"date",
    interCollegeName:"",
    interCollegeAddress:"",
    date5:new Date(),
    show5:false,
    text5:"End To ",
    mode5:"date",
    intermarks:"",
    interScale:"",

    schoolSelect:"",
    schoolSelectOption:[
      {label:"SSC",value:"SSC"},
      {label:"CBSE",value:"CBSE"},
    ],
    date6:new Date(),
    show6:false,
    text6:"Starts From",
    mode6:"date",
    schoolName:"",
    schoolAddress:"",
    date7:new Date(),
    show7:false,
    text7:"End To ",
    mode7:"date",
    schoolmarks:"",
    schoolScale:"",


  })

//----------------Issue Date Start-----------------//

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({...inputFields,show:Platform.OS==="ios",date:currentDate,text:fDate})


  };
  const showMode = (currentMode) => {
    // setShow(!show);
    setInputFields({...inputFields,show:!inputFields.show,mode:currentMode})
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
//----------------Issue Date End-----------------//

//----------------Expiry Date Start-----------------//

const onChange1 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date1;
  
  let tempDate = new Date(currentDate);
  let fDate1 =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  // setText(fDate);
  setInputFields({...inputFields,show1:Platform.OS==="ios",date1:currentDate,text1:fDate1})

  // setInputFields({...inputFields,});
  //console.log(fDate);
  // seterrorDOBInput(false)

};
const showMode1 = (currentMode1) => {
  // setShow(!show);
  setInputFields({...inputFields,show1:!inputFields.show1,mode1:currentMode1})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------Expiry Date End-----------------//

//----------------College Start-----------------//

const onChange2 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date2;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show2:Platform.OS==="ios",date:currentDate,text2:fDate})


};
const showMode2 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show2:!inputFields.show2,mode2:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------College Start-----------------//

//----------------college end-----------------//

const onChange3 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date3;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show3:Platform.OS==="ios",date3:currentDate,text3:fDate})


};
const showMode3 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show3:!inputFields.show3,mode3:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------College End-----------------//

//----------------inter start-----------------//

const onChange4 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date4;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show4:Platform.OS==="ios",date4:currentDate,text4:fDate})


};
const showMode4 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show4:!inputFields.show4,mode4:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------inter start-----------------//


//----------------inter end-----------------//

const onChange5 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date5;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show5:Platform.OS==="ios",date5:currentDate,text5:fDate})


};
const showMode5 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show5:!inputFields.show5,mode5:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------inter End-----------------//



//----------------school start-----------------//

const onChange6 = (event, selectDate) => {
  const currentDate = selectDate || inputFields.date6;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show6:Platform.OS==="ios",date6:currentDate,text6:fDate})


};
const showMode6 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show6:!inputFields.show6,mode6:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------school start-----------------//



//----------------school end-----------------//

const onChange7= (event, selectDate) => {
  const currentDate = selectDate || inputFields.date7;

  let tempDate = new Date(currentDate);
  let fDate =
    tempDate.getDate() +
    "/" +
    (tempDate.getMonth() + 1) +
    "/" +
    tempDate.getFullYear();
  setInputFields({...inputFields,show7:Platform.OS==="ios",date7:currentDate,text7:fDate})


};
const showMode7 = (currentMode) => {
  // setShow(!show);
  setInputFields({...inputFields,show7:!inputFields.show7,mode7:currentMode})
  // setMode(currentMode);
  // setInputFields({...inputFields,})
};
//----------------school End-----------------//


//  Phone Number handler  //

const handlerPhoneNumber=(value)=>{
    try {
      setInputFields({...inputFields,contactNumber:value})
      const callingCode = PhoneInput.getCallingCode(value);
      var countryCode = callingCode;
    } catch (error) {
      
    }
}

  return (
    <View>
      <ScrollView>
        <View style={{backgroundColor:"white",width:width*0.96,alignSelf:"center",justifyContent:"center"}}>


        <View style={styles.container1}>
          
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
              {/* <Image source={require('../assets/white-bg.jpg')} style={styles.img}/> */}
          </View>

<View>
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
     

<View>
  <View style={styles.detailsContainer}>
        <View style={styles.rowContainer2}>
                  <View style={styles.detailsView}>
                    <View style={styles.details}>
                      <Text style={styles.detailstext}>Personal Details</Text>
                    </View>
                    <TouchableOpacity>
                      <FontAwesome5 name="edit" size={15} style={{alignSelf:"center",margin:3}}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.saveView}>
                    <TouchableOpacity style={styles.savebtn}>
                      <Text style={styles.savetext}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cancelView}>
                    <TouchableOpacity style={styles.cancelbtn}>
                      <Text style={styles.canceltext}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
        </View>
           {/* Name */}
           <View>
                <View style={{width:width*0.9,left:5}}>
                  <View style={styles.rowContainer2}>
                      <TextInput style={styles.input}
                            placeholder='First Name' 
                            value={inputFields.firstName}
                            onChangeText = {(text) => setInputFields({...inputFields, firstName : text})}  
                                />  
                      <TextInput style={styles.input}
                            placeholder='Last Name' 
                            value={inputFields.lastName}
                            onChangeText = {(text) => setInputFields({...inputFields, lastName : text})}
                                /> 
                  </View>
                </View>

                <View style={{width:width*0.95,}}>
                  <View style={styles.rowContainer2}>
                      {/* <Text>Contact Number: </Text> */}
                      <View>
                         
                      </View>
                      <TextInput style={styles.Contactinput}
                            placeholder='+0 0000 00000' 
                            value={inputFields.contactNumber}
                            keyboardType='number-pad'
                            onChangeText = {(number) => setInputFields({...inputFields, contactNumber : number})}  
                                />  
                                <PhoneInput
                                placeholder='contact number'
                                containerStyle={styles.input}
                                textInputStyle={styles.input}
                                codeTextStyle={styles.input}
                                ref={(ref)=>(phoneInput = ref)}
                                defaultValue=''
                                layout='first'
                                onChangeText={handlerPhoneNumber}/>
                  </View>
                  <Text style={{marginTop:3}}>Gender: </Text>
                      <View style={{marginTop:-5,marginLeft:-10}}>
                          <RadioButton.Group onValueChange = {(value) => setInputFields({...inputFields, genderSelect : value})}
                                      value={inputFields.genderSelect}>
                              <View style={{ flexDirection: 'row'}}>
                                  <RadioButton value="MALE" default="true" color="#007AFF" /><Text style={{marginTop:8,marginLeft:-4}}>M</Text>
                                  <RadioButton value="FEMALE" color="#007AFF"/><Text style={{marginTop:8,marginLeft:-4}}>F</Text>
                              </View>
                          </RadioButton.Group>
                      </View>
                </View>

                <View style={{width:width*0.95}}>
                  <View style={styles.rowContainer2}>
                      <Text>Email: </Text>
                      <TextInput style={styles.emailinput}
                            placeholder='abc@gmail.com' 
                            value={inputFields.email}
                            onChangeText = {(text) => setInputFields({...inputFields, email : text})}  
                                />  
                      <Text style={{marginTop:3}}>Marital Status </Text>
                    
                  </View>
                </View>

                <View style={{width:width*0.95}}>
                  <View style={styles.rowContainer2}>
                      <Text>Whatsapp Number: </Text>
                      <TextInput style={styles.whatsappinput}
                            placeholder='+0 0000 00000' 
                            value={inputFields.whatsappNumber}
                            keyboardType='number-pad'
                            onChangeText = {(number) => setInputFields({...inputFields, whatsappNumber : number})}  
                                />  


                      <View style={styles.container}>
                            <TouchableOpacity
                              style={[styles.button, inputFields.selectedOption === 'yes' && styles.selectedButton]}
                              // onPress={() => setSelectedOption('yes')}
                              onPress={()=>setInputFields({...inputFields,selectedOption:'yes'})}>
                              <Text style={[styles.buttonText, inputFields.selectedOption === 'yes' && styles.selectedButtonText]}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[styles.button, inputFields.selectedOption === 'no' && styles.selectedButton]}
                              // onPress={() => setSelectedOption('no')}
                              onPress={()=>setInputFields({...inputFields,selectedOption:'no'})}>
                              <Text style={[styles.buttonText, inputFields.selectedOption === 'no' && styles.selectedButtonText]}>No</Text>
                            </TouchableOpacity>
                      </View>
                  </View>
                </View>
          </View>

           {/* Passport Number and Country of Birth */}
           <View>
                <View style={{width:width*0.95}}>
                  <View style={styles.rowContainer2}>
                      <Text style={{width:width*0.15}}>Passport Number</Text>
                      <TextInput style={styles.Contactinput}
                            // placeholder='+0 0000 00000' 
                            value={inputFields.passportNumber}
                            keyboardType='number-pad'
                            onChangeText = {(number) => setInputFields({...inputFields, passportNumber : number})}  
                                />  
                      <Text>Issue Date</Text>
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
                              <Text style={styles.dateField}>{inputFields.text}</Text>
                            </TouchableOpacity>
                        )}

                      
                  </View>
                </View>

                <View style={{width:width*0.95}}>
                  <View style={styles.rowContainer2}>
                      <Text style={{width:width*0.15}}>Country of Birth</Text>
                      <TextInput style={styles.Contactinput}
                            // placeholder='+0 0000 00000' 
                            value={inputFields.countryBirth}
                            onChangeText = {(text) => setInputFields({...inputFields, countryBirth : text})}  
                                />  
                      <Text>Expiry Date</Text>
                      {inputFields.show1 && (
                          <DatePicker
                            testID="DatePicker"
                            value={inputFields.date1}
                            mode={inputFields.mode1}
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date()} // Disable future years
                            onChange={onChange1}
                          />
                        )}
                        {!inputFields.show1 && (
                            <TouchableOpacity onPress={() => showMode1("date")} style={styles.inputbox1}>
                              <Text style={styles.dateField}>{inputFields.text1}</Text>
                            </TouchableOpacity>
                        )}

                      
                  </View>
                </View>
          </View>

          {/* Address */}
          <View style={{width:width*0.95}}>
                
                <View style={{flexDirection:"row"}}>
                  <View style={{width:width*0.16,top:5}}>
                    <Text style={{marginLeft:10}}>Address</Text>
                  </View>
                  <View style={{width:width*0.78,flexDirection:"row",justifyContent:"space-around"}}>
                  <TextInput style={styles.input}
                                        placeholder='Street' 
                                        value={inputFields.streetName}
                                        onChangeText = {(text) => setInputFields({...inputFields, streetName : text})}  
                                            />  
                                  <TextInput style={styles.input}
                                        placeholder='City' 
                                        value={inputFields.city}
                                        onChangeText = {(text) => setInputFields({...inputFields, city : text})}
                                            /> 
                                  <TextInput style={styles.input}
                                        placeholder='District' 
                                        value={inputFields.district}
                                        onChangeText = {(text) => setInputFields({...inputFields, district : text})}
                                            /> 
                  </View>
                </View>

                <View style={{flexDirection:"row"}}>
                  <View style={{width:width*0.15}}>
                    {/* <Text style={{marginLeft:10}}>Address</Text> */}
                  </View>
                  <View style={{width:width*0.8,flexDirection:"row",justifyContent:"space-around"}}>
                  <TextInput style={styles.input}
                                        placeholder='State' 
                                        value={inputFields.state}
                                        onChangeText = {(text) => setInputFields({...inputFields, state : text})}  
                                            />  
                                  <TextInput style={styles.input}
                                        placeholder='Country' 
                                        value={inputFields.country}
                                        onChangeText = {(text) => setInputFields({...inputFields, country : text})}
                                            /> 
                                  <TextInput style={styles.input}
                                        placeholder='Pincode' 
                                        value={inputFields.pincode}
                                        keyboardType='number-pad'
                                        onChangeText = {(number) => setInputFields({...inputFields, pincode : number})}
                                            /> 
                  </View>

                </View>

              </View>

 {/* Emergency Address */}
              <View style={{width:width*0.95}}>
                          <View style={styles.columnContainer}>
                                  <View style={{width:width*0.65}}>
                                      <View style={styles.rowContainer2}>
                                          <Text> Emergency Contact</Text>
                                          <TextInput style={styles.input1}
                                                placeholder='Name' 
                                                value={inputFields.emergencyName}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyName : text})}  
                                                    />  
                                      </View>
                                      <View style={styles.rowContainer2}>
                                          <Text> Email Id</Text>
                                          <TextInput style={styles.emailinput}
                                                placeholder='Email Id' 
                                                value={inputFields.emergencyEmail}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyEmail : text})}  
                                                    />  
                                      </View>
                                      <View style={styles.rowContainer2}>
                                          <Text> Contact Number</Text>
                                          <TextInput style={styles.Contactinput1}
                                                placeholder='Contact Number' 
                                                value={inputFields.emergencyNumber}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyNumber : text})}  
                                                    />  
                                      </View>
                                      <View style={styles.rowContainer2}>
                                          <Text> Relation</Text>
                                          <TextInput style={styles.emailinput}
                                                placeholder='Email Id' 
                                                value={inputFields.emergencyEmail}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyEmail : text})}  
                                                    />  
                                      </View>
                                  </View>
                                  <View style={{width:width*0.65}}>
                                      <Text>Address</Text>
                                        <TextInput style={styles.input}
                                                placeholder='Street' 
                                                value={inputFields.emergencyStreet}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyStreet : text})}  
                                                    />  
                                        <TextInput style={styles.input}
                                                placeholder='State' 
                                                value={inputFields.emergencyState}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyState : text})}  
                                                    />  
                                        <TextInput style={styles.input}
                                                placeholder='City' 
                                                value={inputFields.emergencyCity}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyCity : text})}  
                                                    />  
                                        <TextInput style={styles.input}
                                                placeholder='District' 
                                                value={inputFields.emergencyDistrict}
                                                onChangeText = {(text) => setInputFields({...inputFields, emergencyDistrict : text})}  
                                                    />  
                                  </View>
                          </View>
                </View>
  </View>
</View>
</ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container1: {
    backgroundColor:"#0384d5",
    width:width,
    height:height/6,
    justifyContent:"center",
    alignSelf:"center"
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
    marginLeft:20,
    width:width*0.8

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
    top:-80,
    borderWidth:5
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
    width:width*0.95,
    height:"auto",
    borderRadius:10,
    alignSelf:"center",
    backgroundColor:"white",
    elevation:5,
    paddingBottom:10,
    marginBottom:20,
    marginTop:30

  },
  rowContainer2:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:10
  },
  detailsView:{
    backgroundColor:"#c0c0c0",
    width:width*0.43,
    borderRadius:20,
    elevation:5,
    padding:3,
    flexDirection:"row"
  },
  details:{
    backgroundColor:"#0384d5",
    width:width*0.35,
    borderRadius:15
  },
  saveView:{
    backgroundColor:"white",
    width:width*0.23,
    borderRadius:20,
    elevation:5,
    padding:5
  },
  savebtn:{
    backgroundColor:"green",
    width:width*0.21,
    borderRadius:15,
    alignSelf:"center",
    padding:2
  
  },
  cancelView:{
    backgroundColor:"white",
    width:width*0.23,
    borderRadius:15,
    elevation:5,
    padding:5
  },
  cancelbtn:{
    backgroundColor:"red",
    width:width*0.21,
    borderRadius:15,
    alignSelf:"center",
    padding:2
  },
  detailstext:{
    alignSelf:"center",
    color:"white",
    top:2
  },
  savetext:{
    alignSelf:"center",
    color:"white"
  },
  canceltext:{
    alignSelf:"center",
    color:"white"
  },
  input:{
      height:25,
      width:width*0.4,
      paddingHorizontal:5,
      borderColor:"black",
      borderWidth:0.3,
      borderRadius:5,
      margin:5
  },
  schoolinputdropdown:{
    height:25,
    width:width*0.4,
    paddingHorizontal:5,
    borderColor:"black",
    borderWidth:0.3,
    borderRadius:5,
    margin:5
},
  input1:{
    height:25,
    width:width*0.35,
    paddingHorizontal:5,
    borderColor:"black",
    borderWidth:0.3,
    borderRadius:5,
    margin:5
},
collegeNameinput:{
  height:25,
  width:width*0.6,
  paddingHorizontal:5,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
  // margin:5
},
collegeinput2:{
  height:25,
  width:width*0.28,
  paddingHorizontal:5,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
  // margin:5,
  // marginBottom:-5,
  // marginLeft:5,
  right:7
},
collegeAddressinput:{
  height:25,
  width:width*0.65,
  paddingHorizontal:5,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
},
marksgainedinput:{
  height:25,
  width:width*0.26,
  paddingHorizontal:5,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
},
  Contactinput:{
    height:25,
    width:width*0.25,
    paddingHorizontal:2,
    borderColor:"black",
    borderWidth:0.3,
    borderRadius:5,
    marginLeft:-10
},
Contactinput1:{
  height:25,
  width:width*0.4,
  paddingHorizontal:2,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
  // marginLeft:-10
},
whatsappinput:{
  height:25,
  width:width*0.35,
  paddingHorizontal:2,
  borderColor:"black",
  borderWidth:0.3,
  borderRadius:5,
  marginLeft:-10
},
  radioGroup: {
    flexDirection: 'row',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20, // Adjust margin as needed
  },
  emailinput:{
    height:25,
    width:width*0.5,
    paddingHorizontal:5,
    borderColor:"black",
    borderWidth:0.3,
    borderRadius:5
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  button: {
    paddingHorizontal: 10,
    // paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#808080',
   
  },
  buttonText: {
    color: '#808080',
  },
  selectedButton: {
    backgroundColor: '#808080',
  },
  selectedButtonText: {
    color: 'white',
  },
  inputbox1: {
    width: width*0.2,
    marginTop: 15,
    flexDirection:"row",
    // marginLeft: 10,
    alignSelf:"center",
    // justifyContent:"space-evenly"
  },
  inputbox2: {
    width: width*0.26,
    marginTop: 20,
    flexDirection:"row",
    marginLeft: 10,
    alignSelf:"center",
    // justifyContent:"space-evenly"
  },
  inputbox3: {
    width: width*0.26,
    marginTop: 15 ,
    flexDirection:"row",
    // marginLeft: 5,
    alignSelf:"center",
    // justifyContent:"space-evenly"
  },
  dateField:{
    height:25,
    width:width*0.25,
    paddingVertical:2,
    borderColor:"black",
    borderWidth:0.3,
    borderRadius:5,
    marginLeft:-10,
    top:-15,
    textAlign:"center"
  },
  columnContainer:{
    flexDirection:"row",
  }
})