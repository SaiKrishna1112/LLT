import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TextInput,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
	Image,
	Modal
} from "react-native";
import React,{useState,useRef} from "react";
import Animated, {
	FadeInDown,
	FadeInLeft,
	FadeInRight,
} from "react-native-reanimated";

import FlashMessage from "react-native-flash-message";
import PhoneInput from "react-native-phone-number-input";
import DatePicker from "@react-native-community/datetimepicker";
import { Root, Popup } from 'popup-ui';

import Icon from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


import { sendemailfunction } from "../../Api/BeforeLogin";
import {submitotp} from "../../Api/BeforeLogin";
import {sendmobileotpfunc} from "../../Api/BeforeLogin";
import { registerfunction } from "../../Api/BeforeLogin";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");

const SignUp = (props) => {
	const flashMessage = useRef(); 

	const[inputFields,setInputFields]=useState({
		firstName:"",
		firstName_Error:false,
		lastName:"",
		lastName_Error:false,
		email:"",
		email_Error:false,
		createPassword:"",
		createPassword_Error:false,
		confirmPassword:"",
		confirmPassword_Error:false,
		emailotp:"",
		emailotp_Error:false,
		show:false,
		loading:false,
		sendemailbtnshow:true,
		confirmotpbtnshow:false,
		loading1:false,
		passwordMatch_Error:false,
		errorEmailInputValid:false,


		mobileNumber:"",
		mobileNumber_Error:false,
		countryCode:"",
		mobileotp:"",
		mobileotp_Error:false,
		show1:false,

		whatsappNumber:"",
		whatsappNumber_Error:false,
		countryCode1:"",

		dob:"dd-mm-yyyy",
    mode: "date",
    showDate:false,
    date: new Date(),

		collegeName:"",
		collegeName_Error:false,
		city:"",
		city_Error:false,

		sendmobileotpbtnshow:true,
		confirmmobileotpbtnshow:false,
		loading2:false,
		loading3:false,

		showContainer:true,
		showContainer1:false,


		successModal:false,
		errorModal:false,
		errorMessage:null
	})
	// var errorMessage


	async function emailfunction(){
		setInputFields({...inputFields,loading:true})


		if(inputFields.firstName=="" || inputFields.firstName==null){
			setInputFields({...inputFields,firstName_Error:true})
			return false
		}
		if(inputFields.lastName=="" || inputFields.lastName==null){
			setInputFields({...inputFields,lastName_Error:true})
			return false
		}
		if(inputFields.email=="" || inputFields.email==null){
			setInputFields({...inputFields,email_Error:true})
			return false
		}
		if (validateEmail(inputFields.email)) {
			// Alert.alert('Valid Email', 'The email address is valid.');
				} 
				else {
						// Alert.alert('Invalid Email', 'Please enter a valid email address.');
						// seterrorEmailInputValid(true)
						setInputFields({...inputFields,errorEmailInputValid:true})
						return false;
				}
		if(inputFields.createPassword=="" || inputFields.createPassword==null){
			setInputFields({...inputFields,createPassword_Error:true})
			return false
		}
		if(inputFields.confirmPassword=="" || inputFields.confirmPassword==null){
			setInputFields({...inputFields,confirmPassword_Error:true})
			return false
		}

		if(inputFields.createPassword!==inputFields.confirmPassword){
			// alert("dwjhgf")
			setInputFields({...inputFields,passwordMatch_Error:true})
			return false
		}

		const data= await sendemailfunction(inputFields);
		console.log("data1",data)
		if(data.error){
			// errorMessage=data.error
			setInputFields({...inputFields,show:false,loading:false,sendemailbtnshow:false,confirmotpbtnshow:true,
													showContainer:true,showContainer1:false,
													sendmobileotpbtnshow:false,confirmmobileotpbtnshow:false,errorMessage:data.error,errorModal:true
												})
		
			// errorModal()
			// setInputFields({...inputFields,})

		}
		else{
			setInputFields({...inputFields,show:true,loading:false,sendemailbtnshow:false,confirmotpbtnshow:true,
													showContainer:true,showContainer1:false,
													sendmobileotpbtnshow:false,confirmmobileotpbtnshow:false})
		}

	}

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	
	async function confirmotpfunction(){
	setInputFields({...inputFields,loading1:true})
		if(inputFields.firstName=="" || inputFields.firstName==null){
			setInputFields({...inputFields,firstName_Error:true})
			return false
		}
		if(inputFields.lastName=="" || inputFields.lastName==null){
			setInputFields({...inputFields,lastName_Error:true})
			return false
		}
		if(inputFields.email=="" || inputFields.email==null){
			setInputFields({...inputFields,email_Error:true})
			return false
		}
		if (validateEmail(inputFields.email)) {
			// Alert.alert('Valid Email', 'The email address is valid.');
				} else {
						// Alert.alert('Invalid Email', 'Please enter a valid email address.');
						// seterrorEmailInputValid(true)
						setInputFields({...inputFields,errorEmailInputValid:true})
						return false;
				}
		if(inputFields.createPassword=="" || inputFields.createPassword==null){
			setInputFields({...inputFields,createPassword_Error:true})
			return false
		}
		if(inputFields.confirmPassword=="" || inputFields.confirmPassword==null){
			setInputFields({...inputFields,confirmPassword_Error:true})
			return false
		}
		if(inputFields.emailotp=="" || inputFields.emailotp==null){
			setInputFields({...inputFields,emailotp_Error:true})
			return false
		}
		// if(inputFields.createPassword!==inputFields.confirmPassword){
		// 	setInputFields({...inputFields,passwordMatch_Error:true})
		// 	return false
		// }


		const data= await submitotp(inputFields);
		console.log("data2",data)
		if(data.error){
			// errorMessage=data.message
			setInputFields({...inputFields,show:true,loading1:false,sendemailbtnshow:false,confirmotpbtnshow:true,
													showContainer:true,showContainer1:false,
													sendmobileotpbtnshow:false,confirmmobileotpbtnshow:false,errorMessage:data.error,errorModal:true})
			
			
			// setInputFields({...inputFields,errorModal:true})

			
		}
		else{
			setInputFields({...inputFields,show:false,loading1:false,
											sendemailbtnshow:false,confirmotpbtnshow:false,showContainer:false,showContainer1:true,
											sendmobileotpbtnshow:true,})

		}

	}



	const handlePhoneNumberChange = (value) => {
		try {
			// setmobileNumber(value);
			// setInputFields({...inputFields,phoneNumber: value})
			// console.log(value)
			const callingCode = phoneInput.getCallingCode(value);
			// console.log(callingCode);
			setInputFields({
				...inputFields,
				mobileNumber: value,
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
				whatsappNumber: value,
				countryCode1: callingCode,
			});

			// setcountryCode(callingCode);
		} catch (error) {
			// Handle any parsing errors
		}
	};


	async function mobileotpfunc(){
		setInputFields({...inputFields,loading2:true})

		if(inputFields.mobileNumber=="" || inputFields.mobileNumber==null){
			setInputFields({...inputFields,mobileNumber_Error:true})
			return false
		}
		if(inputFields.whatsappNumber=="" || inputFields.whatsappNumber==null){
			setInputFields({...inputFields,whatsappNumber_Error:true})
			return false
		}
		if(inputFields.collegeName=="" || inputFields.collegeName==null){
			setInputFields({...inputFields,collegeName_Error:true})
			return false
		}
		if(inputFields.city=="" || inputFields.city==null){
			setInputFields({...inputFields,city_Error:true})
			return false
		}

		const data= await sendmobileotpfunc(inputFields);
		console.log("data3",data)
		if(data.message){
			// errorMessage=data.message

			setInputFields({...inputFields,show1:false,loading2:false,sendemailbtnshow:false,confirmotpbtnshow:false,
				showContainer:false,showContainer1:true,
				sendmobileotpbtnshow:true,confirmmobileotpbtnshow:false,errorMessage:data.message,errorModal:true})

			// errorModal()

		}
		else{
			setInputFields({...inputFields,show1:true,loading2:false,sendemailbtnshow:false,
				confirmotpbtnshow:false,showContainer:false,showContainer1:true,
				sendmobileotpbtnshow:false,confirmmobileotpbtnshow:true})

		}

	}


	async function confirmmobileotpfunc(){
		setInputFields({...inputFields,loading3:true})

		if(inputFields.mobileNumber=="" || inputFields.mobileNumber==null){
			setInputFields({...inputFields,mobileNumber_Error:true})
			return false
		}
		if(inputFields.whatsappNumber=="" || inputFields.whatsappNumber==null){
			setInputFields({...inputFields,whatsappNumber_Error:true})
			return false
		}
		if(inputFields.collegeName=="" || inputFields.collegeName==null){
			setInputFields({...inputFields,collegeName_Error:true})
			return false
		}
		if(inputFields.city=="" || inputFields.city==null){
			setInputFields({...inputFields,city_Error:true})
			return false
		}
		if(inputFields.mobileotp=="" || inputFields.mobileotp==null){
			setInputFields({...inputFields,mobileotp_Error:true})
			return false
		}

	
		const data= await registerfunction(inputFields);
		console.log("data4",data)
		if(data.detail){
			// errorMessage=data.message

			setInputFields({...inputFields,show1:true,loading2:false,sendemailbtnshow:false,
				confirmotpbtnshow:false,showContainer:false,showContainer1:true,
				sendmobileotpbtnshow:false,confirmmobileotpbtnshow:true,errorMessage:data.title,errorModal:true})
			// errorModal()
			// setInputFields({...inputFields,errorModal:true})

		}
		else{
			setInputFields({...inputFields,show1:true,loading3:false,sendemailbtnshow:false,
								confirmotpbtnshow:false,showContainer:false,showContainer1:true,
								sendmobileotpbtnshow:false,confirmmobileotpbtnshow:true,successModal:true})
								// successModal()
								// setInputFields({...inputFields,})

		}

	}

	  // Date of Birth //
		const onChangeDate = (event, selectDate) => {
			const currentDate = selectDate || inputFields.date;
	
			let tempDate = new Date(currentDate);
			let fDate =
				tempDate.getDate() +
				"/" +
				(tempDate.getMonth() + 1) +
				"/" +
				tempDate.getFullYear();
			setInputFields({
				...inputFields,
				showDate: Platform.OS === "ios",
				date: currentDate,
				dob: fDate,
			});
		};
		const showIssueMode = (currentMode) => {
			// setShow(!show);
			setInputFields({
				...inputFields,
				showDate: !inputFields.showDate,
				mode: currentMode,
			});
			// setMode(currentMode);
			// setInputFields({...inputFields,})
		};



		
	return (

			<View>
				<SafeAreaView></SafeAreaView>
			<FlashMessage ref={flashMessage} position="bottom" />
					<View>
							{inputFields.showContainer?
									<View>
											<Animated.View  entering={FadeInRight.delay(500)
													.duration(800)
													.springify()
													.damping(19)} style={[styles.middleContainer]}>
													<View style={{ marginTop: -40, alignSelf: "flex-end" }}>
															<Image
																	source={require("../../assets/04.png")}
																	style={{ height: 45, width: width * 0.12 }}
															/>
													</View>
													<Text style={styles.header}>Sign Up</Text>
													<ScrollView>
															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="First Name"
																			value={inputFields.firstName}
																			onChangeText={(text) => setInputFields({...inputFields, firstName : text , firstName_Error : false})}
																	/>
															</View>

															{inputFields.firstName_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}
															

															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Last Name"
																			value={inputFields.lastName}
																		onChangeText={(text) => setInputFields({...inputFields, lastName : text , lastName_Error : false})}
																	/>
															</View>

															{inputFields.lastName_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Email"
																				value={inputFields.email}
																		onChangeText={(text) => setInputFields({...inputFields, email : text , email_Error : false,errorEmailInputValid:false})}
																	/>
															</View>

															{inputFields.email_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

															{inputFields.errorEmailInputValid?
																<View>
																	<Text style={styles.errorText}> Invalid Email </Text>
																</View>
															:null}

															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Create Password"
																				value={inputFields.createPassword}
																		onChangeText={(text) => setInputFields({...inputFields, createPassword : text , createPassword_Error : false})}
																	/>
															</View>

															{inputFields.createPassword_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Confirm Password"
																				value={inputFields.confirmPassword}
																		onChangeText={(text) => setInputFields({...inputFields, confirmPassword : text , confirmPassword_Error : false,passwordMatch_Error:false})}
																	/>
															</View>

															{inputFields.confirmPassword_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

															{inputFields.passwordMatch_Error?
																<View>
																	<Text style={styles.errorText}>Does not match password </Text>
																</View>
															:null}

													{inputFields.show?
																<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Enter OTP"
																				value={inputFields.emailotp}
																				keyboardType="number-pad"
																				maxLength={4}
																		onChangeText={(number) => setInputFields({...inputFields, emailotp : number , emailotp_Error : false})}
																	/>
																</View>
																:null}
														{inputFields.emailotp_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

													</ScrollView>

												{inputFields.sendemailbtnshow?
														<View>
																{!inputFields.loading?
																	<TouchableOpacity style={styles.sendemailbtn} onPress={()=>emailfunction()}>
																		<Text
																				style={{
																						textAlign: "center",
																						fontSize: 18,
																						fontWeight: "bold",
																						color: "white",
																				}}>
																				SEND EMAIL OTP
																		</Text>
																		</TouchableOpacity>
																		:
																		<View style={styles.sendemailbtn}>
																			<ActivityIndicator size={25} color={"white"} />
																		</View>
																	}
														</View>
												:null}

								{inputFields.confirmotpbtnshow?
														<View>
																{!inputFields.loading1?
																	<TouchableOpacity style={styles.sendemailbtn} onPress={()=>confirmotpfunction()}>
																		<Text
																				style={{
																						textAlign: "center",
																						fontSize: 18,
																						fontWeight: "bold",
																						color: "white",
																				}}>
																				SUBMIT OTP
																		</Text>
																		</TouchableOpacity>
																		:
																		<View style={styles.sendemailbtn}>
																			<ActivityIndicator size={25} color={"white"} />
																		</View>
																	}
																
														</View>
												:null}

											</Animated.View>
									</View>
							:null}

							{inputFields.showContainer1?
									<View>
											<Animated.View  entering={FadeInRight.delay(500)
													.duration(800)
													.springify()
													.damping(19)} style={[styles.middleContainer]}>
													<View style={{ marginTop: -40, alignSelf: "flex-end" }}>
															<Image
																	source={require("../../assets/04.png")}
																	style={{ height: 45, width: width * 0.12 }}
															/>
													</View>
													<Text style={styles.header}>Sign Up</Text>
													<ScrollView>
														<PhoneInput
																placeholder="Mobile Number"
																containerStyle={styles.input1}
																textContainerStyle={styles.textStyle}
																textInputStyle={styles.phonestyle}
																codeTextStyle={styles.phonestyle1}
																ref={(ref) => (phoneInput = ref)}
																defaultValue={inputFields.mobileNumber}
																defaultCode="IN"
																layout="first"
																// autoFocus
																onChangeText={handlePhoneNumberChange}
															/>



														<PhoneInput
																placeholder="Whatsapp Number"
																containerStyle={styles.input1}
																textContainerStyle={styles.textStyle}
																textInputStyle={styles.phonestyle}
																codeTextStyle={styles.phonestyle1}
																ref={(ref) => (phoneInput = ref)}
																defaultValue={inputFields.whatsappNumber}
																defaultCode="IN"
																layout="first"
																// autoFocus
																onChangeText={handlePhoneNumberChange1}
															/>
															

															<View style={styles.dateContainer}>
													<View style={styles.dateView}>
														{inputFields.showDate && (
															<DatePicker
																testID="DatePicker"
																value={inputFields.date}
																mode={inputFields.mode}
																display="default"
																is24Hour={true}
																maximumDate={new Date()} // Disable future years
																onChange={onChangeDate}
															/>
														)}
														<TouchableOpacity
															onPress={() => showIssueMode("date")}
															style={styles.dateInput}
														>
															<View
																style={{
																	alignSelf: "flex-start",
																	left: 8,
																	justifyItem: "center",
																}}
															>
																<Text style={styles.dateField}>
																	{inputFields.dob}
																</Text>
															</View>
															<View style={{ alignSelf: "flex-end", left: -12 }}>
																<FontAwesome5 name={"calendar-alt"} size={18} />
															</View>
														</TouchableOpacity>
													</View>

												</View>




															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Your College Name"
																			value={inputFields.collegeName}
																		onChangeText={(text) => setInputFields({...inputFields, collegeName : text , collegeName_Error : false})}
																	/>
															</View>

															{inputFields.collegeName_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

															<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="City"
																				value={inputFields.city}
																		onChangeText={(text) => setInputFields({...inputFields, city : text , city_Error : false})}
																	/>
															</View>

															{inputFields.city_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

														




													{inputFields.show1?
																<View style={styles.inputBox}>
																	<TextInput
																			style={styles.textInputField}
																			placeholder="Mobile OTP"
																				value={inputFields.mobileotp}
																				keyboardType="number-pad"
																				maxLength={6}
																		onChangeText={(number) => setInputFields({...inputFields, mobileotp : number , mobileotp_Error : false})}
																	/>
																</View>
																:null}
														{inputFields.mobileotp_Error?
																<View>
																	<Text style={styles.errorText}> Field is Mandatory </Text>
																</View>
															:null}

													</ScrollView>

												{inputFields.sendmobileotpbtnshow?
														<View>
																{!inputFields.loading2?
																	<TouchableOpacity style={styles.sendemailbtn} onPress={()=>mobileotpfunc()}>
																		<Text
																				style={{
																						textAlign: "center",
																						fontSize: 18,
																						fontWeight: "bold",
																						color: "white",
																				}}>
																				SEND MOBILE OTP
																		</Text>
																		</TouchableOpacity>
																		:
																		<View style={styles.sendemailbtn}>
																			<ActivityIndicator size={25} color={"white"} />
																		</View>
																	}
														</View>
												:null}

								{inputFields.confirmmobileotpbtnshow?
														<View>
																{!inputFields.loading3?
																	<TouchableOpacity style={styles.sendemailbtn} onPress={()=>confirmmobileotpfunc()}>
																		<Text
																				style={{
																						textAlign: "center",
																						fontSize: 18,
																						fontWeight: "bold",
																						color: "white",
																				}}>
																				REGISTER
																		</Text>
																		</TouchableOpacity>
																		:
																		<View style={styles.sendemailbtn}>
																			<ActivityIndicator size={25} color={"white"} />
																		</View>
																	}
																
														</View>
												:null}


											</Animated.View>
										

									</View>
							:null}
					</View>
								<Animated.View entering={FadeInLeft.delay(600)
										.duration(900)
										.springify()
										.damping(19)}>
										<View style={{ alignItems: "center", position: "relative" }}>
												<View style={{ flexDirection: "row" }}>
														<Text style={{ color: "#808080" }}>Already have an account ? </Text>
														<TouchableOpacity onPress={()=>props.change(false)}>
																<Text style={{ fontWeight: "bold" }}>Sign In</Text>
														</TouchableOpacity>
												</View>
												<View style={{ marginTop: 10 }}>
														<Text
																style={{
																		width: width * 0.65,
																		textAlign: "center",
																		color: "#808080",
																}}
														>
																By tapping Sign Up, you agree with our terms of service and
																privacy policy.{" "}
														</Text>
												</View>
										</View>
										<View style={styles.footer}>
												<View style={styles.bottom}>
														<Image
																source={require("../../assets/03.png")}
																style={{ height: 90, width: width * 0.9, opacity: 0.8 }}
														/>
												</View>
										</View>
								</Animated.View>


						{/* Success Modal */}
								<Modal
                  animationType="slide"
                  visible={inputFields.successModal}
                  transparent={true}
                  onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                    // setmodal1(!modal1);
										setInputFields({...inputFields,successModal:!inputFields.successModal})
                  }}
                >
                  <View style={modal.centeredView}>
                    <View style={modal.modalView}>
                      <View style={modal.imgView}>
                        {/* <Image
                          // source={require("../../assets/Success.gif")}
                          style={modal.img}
                        /> */}
												<Icon name="checkmark-circle-outline" size={height/6.5} color="#32cd32" style={{alignSelf:"center"}}/>
                      </View>
                      <View>
                      <Text style={{color:"#32cd32",fontWeight:"bold",alignSelf:"center",fontSize:20}}>
                          {" "}
                            SUCCESS </Text>
                        <Text style={modal.text}>
                          {" "}
																		Successfully Registered </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={modal.successbtn}
                          onPress={() => {
                            // setmodal1(!modal1),
														setInputFields({...inputFields,successModal:!inputFields.successModal})
														// navigation.navigate("SignIn")
														props.change(false)
                          }}
                        >
                          <Text style={{color:"white",fontWeight:"bold"}}>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>

						{/* Error Modal */}
								<Modal
                  animationType="slide"
                  visible={inputFields.errorModal}
                  transparent={true}
                  onRequestClose={() => {
                    //Alert.alert("Modal has been closed.");
                    // setmodal1(!modal1);
										setInputFields({...inputFields,errorModal:!inputFields.errorModal})
                  }}
                >
                  <View style={modal.centeredView}>
                    <View style={modal.modalView}>
                      <View style={modal.imgView}>
                        {/* <Image
                          // source={require("../../assets/Success.gif")}
                          style={modal.img}
                        /> */}
												<Icon name="close-circle-outline" size={height/6.5} color="#FF9899" style={{alignSelf:"center"}}/>
                      </View>
                      <View>
                      <Text style={{color:"#FF9899",fontWeight:"bold",alignSelf:"center",fontSize:20}}>
                          {" "}
                            Error! </Text>
                        <Text style={modal.text}>
                          {" "}
															{inputFields.errorMessage} </Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          style={modal.errorbtn}
                          onPress={() => {
                            // setmodal1(!modal1),
														setInputFields({...inputFields,errorModal:!inputFields.errorModal})
														// navigation.navigate("SignIn")

														
                          }}
                        >
                          <Text style={{color:"white",fontWeight:"bold"}}>OK</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>


			</View>


	);
};

export default SignUp;

const styles = StyleSheet.create({
	middleContainer: {
			justifyContent: "center",
			alignSelf: "center",
			backgroundColor: "white",
			paddingVertical: 10,
			paddingHorizontal: 10,
			marginHorizontal: 10,
			top: -100,
			width: width * 0.8,
			borderRadius: 25,
			elevation: 5,
			height: height * 0.45,
			position: "relative",
	},
	inputBox: {
			borderRadius: 25,
			width: width * 0.7,
			height: 40,
			margin: 10,
			marginTop: 2,
			borderWidth: 0.5,
			alignSelf: "center",
	},
	errorText:{
		color:"red",
		fontWeight:"bold",
		top:-5,
		left:10
		// textAlign:"center"
	},
	textInputField: {
			width: width * 0.6,
			height: 40,
			fontSize: 16,
			alignSelf: "center",
	},
	header: {
			textAlign: "center",
			fontSize: 25,
			fontWeight: "bold",
			marginBottom: 10,
	},
	btn: {
			alignSelf: "center",
			height: 50,
			width: 'auto',
			backgroundColor: "#0384d5",
			justifyContent: "center",
			borderRadius: 25,
			position: "absolute",
			top: -12,
			elevation: 5,
			padding:10
	},
	sendemailbtn:{
		alignSelf: "center",
			height: 50,
			width: width*0.4,
			backgroundColor: "#0384d5",
			justifyContent: "center",
			borderRadius: 25,
			position: "absolute",
			top: -12,
			elevation: 5,
			padding:10
	},
	
	footer: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		bottom: height*0.08,
		left: 0,
		right: 0,
},
bottom: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		left: 0,
		right: 0,
},
input1: {
	marginTop: 10,
	width:width * 0.7,
	alignSelf: "center",
	height: 40,
	backgroundColor: "white",
	borderColor: "#c0c0c0",
	borderWidth: 1,
	borderRadius: 20,
	// paddingLeft:-10
},
phonestyle: {
	height: 40,
	padding:5,
},
phonestyle1: {
	height:20,
},
textStyle:{
	backgroundColor:"white",
	borderTopRightRadius: 20,
	borderBottomRightRadius: 20,
},
dateContainer: {
	// flexDirection: "row",
	// justifyContent: "space-around",
	margin: 10,
},
dateView: {
	width: width * 0.7,
	height: 40,
	borderColor: "#c0c0c0",
	borderWidth: 1,
	borderRadius: 20,
	padding: 10,
	fontSize: 18,
},
dateInput: {
	justifyContent: "space-between",
	flexDirection: "row",
	alignContent: "center",
},
});

const modal=StyleSheet.create({

  text: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    marginTop:15,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "#dcdcdc",
    borderRadius: 20,
    padding: 25,
    width: width*0.8,
    height: "auto",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  bottom: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
    color: "#dcdcdc",
    fontSize: 30,
  },
  centeredView: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 250,
  },
  logo: {
    top: 10,
    justifyContent: "center",
    alignItems: "center",
  },
imgView:{
  height:150,
  width:150,
  alignSelf:"center"
},
img:{
  height:150,
  width:150
},
successbtn: {
  width: width*0.7,
  alignItems: "center",
  alignSelf: "center",
  height: 35,
  marginTop:20,
  justifyContent: "center",
  backgroundColor: "#32cd32",
  borderRadius: 10,
},
errorbtn: {
  width: width*0.7,
  alignItems: "center",
  alignSelf: "center",
  height: 35,
  marginTop:20,
  justifyContent: "center",
  backgroundColor: "red",
  borderRadius: 10,
},
warningbtn: {
  width: width*0.7,
  alignItems: "center",
  alignSelf: "center",
  height: 35,
  marginTop:20,
  justifyContent: "center",
  backgroundColor: "#FF9899",
  borderRadius: 10,
},
phonestyle:{
	width:'90%',
	height:39,
},
phonestyle1:{
	height:20,
},
input1: {
	marginTop: 10,
	width:width/1.15,
	alignSelf: "center",
	height: 45,
	elevation:4,
	backgroundColor:"white",
	borderColor:"black",
},
verifybtn:{
	// borderWidth:1,
	width:150,
	alignItems:'center',
	alignSelf:'center',
	height:35,
	justifyContent:'center',
	backgroundColor:'#56A5EC',
	borderRadius:10,
	flexDirection:'row',
margin:10
},
animationContainer: {
	alignItems: 'center',
	justifyContent: 'center',
	// flex: 1,
},
})