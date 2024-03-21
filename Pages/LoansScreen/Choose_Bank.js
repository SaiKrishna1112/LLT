import { StyleSheet, Text, View ,Dimensions,TextInput, TouchableOpacity} from 'react-native'
import React,{useState,useRef} from 'react'
import IonIcons from "react-native-vector-icons/Ionicons"
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";
import { RadioButton, Button, Checkbox } from "react-native-paper";
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';


const{height,width}=Dimensions.get('window')
const Choose_Bank = (props) => {

  const[inputFields,setInputFields]=useState({
    ChooseBank:"",
    ChooseBankOption:[
      { label: "Bank of Baroda", value: "BankOfBaroda" },
      { label: "SBI", value: "SBI" },
    ],
    name:"",
    phoneNumber:"",
    countryCode:"",

  })
  const [selectBankOffers,setSelectBankOffers] = useState([])
  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [para, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
  });
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

  const handleCheckboxChange = (value) => {
    if (selectBankOffers.includes(value)) {
      setSelectBankOffers(selectBankOffers.filter(item => item !== value));
    } else {
      setSelectBankOffers([...selectBankOffers, value]);
    }
  };

  function toggleFilters() {
    setShowFilters(!showFilters)
    
  };



  return (
    <View>
      <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight:"bold"}}>Choose your bank for a loan</Text>
          <Dropdown  style={styles.Dropdownstyle}
                  placeholder="Choose Bank"
                  data={inputFields.ChooseBankOption}
                  labelField="label"
                  valueField="value"
                  value={inputFields.ChooseBank}
                  onChange={(item) => {
                    setInputFields({
                      ...inputFields,
                      ChooseBank: item.value,
                    });
                  }}             
                />


            <View style={styles.rowContainerBank}>
              <View style={{width:width*0.2}}>
                <Text style={styles.textTitle}>Bank Offers</Text>
              </View>
       
              <View style={{width:width*0.6}}>
                <View style={styles.checkboxContainer}>
                <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option1')} 
                      style={{top:-4}}
                      status={selectBankOffers.includes('option1') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:2,fontSize:16,left:-14,width:width*0.5}}>Apply for a loan of upto 1.5Cr</Text>
                      
                  </View>
                  <View style={styles.checkboxContainer}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option1')} 
                      style={{top:-4}}
                      status={selectBankOffers.includes('option1') ? 'checked' : 'unchecked'}/>  
                    <Text style={{top:2,fontSize:16,left:-14,width:width*0.5}}>At starting interest rate of 9% PA</Text>
                  </View>
              </View>
            </View>

            <Text>Note : The name and Phone nUmber should be same for the corresponding bank details.</Text>

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
            <Text style={styles.TextStyles}>Enter OTP received to Phone Number </Text>

            <CodeField
            ref={ref}
            {...para}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            autoComplete='sms-otp'
            keyboardType={Platform.OS === 'android' ? "numeric" : "numbers-and-punctuation"}
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                    <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                </View>
            )}
        />

        <View style={styles.errorNote}>
           <Text>Please check your mobile number and enter OTP</Text>
        </View>


<View style={styles.rowContainer1} >
                  <TouchableOpacity style={styles.backbtn}>
                      <IonIcons name={"chevron-back"} size={25} color="white" style={{alignSelf:"center"}}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.nextbtn}>
                     <Text style={styles.nextText}>Next</Text><IonIcons name="chevron-forward" color="white" size={25} style={{top:1}}/>
                  </TouchableOpacity>
              </View>



      </View>
    </View>
  )
}

export default Choose_Bank

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
  Dropdownstyle:{
    height: 50, 
    width: width*0.85,
    borderColor: "#c0c0c0",
    borderWidth:0.8,
    borderRadius:10,
    alignSelf:"center",
    margin:15,
    padding:10
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
rowContainerBank:{
  flexDirection:"row",
  width:width*0.85,
  height:"auto",
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
checkboxContainer: {
  flexDirection: 'row',
},
checkbox: {
  alignSelf: 'center',
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
  marginTop:10
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
codeFieldRoot: {
  marginTop: 20,
  width: width*0.8,
  // marginLeft: 10,
  // marginRight: 10,
  // paddingLeft:30
},
cellRoot: {
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  // borderBottomColor: 'white',
  borderWidth: 1.5,
  borderRadius:10,
  // marginLeft:10
},
cellText: {
  color: '#000',
  fontSize: 28,
  textAlign: 'center',
},
focusCell: {
  borderColor: '#007AFF',
  borderBottomWidth: 2.5,
},
TextStyles:{
   fontSize:18,
   fontWeight:"700",
   marginTop:20
},
errorNote:{
  width:width*0.82,
  height:35,
  borderWidth:1,
  marginTop:20,
  justifyContent:"center",
  alignItems:"center",
  borderColor:"#007AFF",
  borderRadius:10
},
rowContainer1:{
  flexDirection:"row",
  justifyContent:"space-between",
  // marginHorizontal:10,
  marginTop:20
},
backbtn:{
    backgroundColor:"#0384d5",
    height:30,
    width:30,
    borderRadius:5,
    justifyContent:"center",
    alignSelf:"center",
    // marginTop:20
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