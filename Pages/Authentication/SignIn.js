import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation,useRoute} from '@react-navigation/native'

const { height, width } = Dimensions.get("window");

const Signin = (props) => {

	const navigation = useNavigation();
	const params = useRoute();
	

  return (
										<View>
													<Animated.View  entering={FadeInLeft.delay(500)
														.duration(800)
														.springify()
														.damping(19)} style={[styles.logincontainer]}>
														<View style={{ marginTop: -40, alignSelf: "flex-end",}}>
																<Image
																		source={require("../../assets/02.png")}
																		style={{ height: 45, width: width * 0.19 }}
																/>
														</View>
														<Text style={styles.header}>Sign In</Text>
														<ScrollView>
																<View style={styles.inputBox}>
																		<TextInput
																				style={styles.textInputField}
																				placeholder="First Name"
																				// value={}
																				// onChangeText={() => ()}
																		/>
																</View>
																<View style={styles.inputBox}>
																		<TextInput
																				style={styles.textInputField}
																				placeholder="Confirm Password"
																				// value={}
																				// onChangeText={() => ()}
																		/>
																</View>
																<TouchableOpacity style={{ alignItems: "center", marginTop:20 }} onPress={()=>navigation.navigate("Forgot Password")}>
																	<Text style={{ color: "#808080" }}>Forgot Password?</Text>
																</TouchableOpacity>
														</ScrollView>
														<View>
																<TouchableOpacity style={styles.btn} 
																onPress={()=>navigation.navigate("Tabs")}>
																		<Text
																				style={{
																						textAlign: "center",
																						fontSize: 18,
																						fontWeight: "bold",
																						color: "white",
																				}}
																		>
																				SIGN IN
																		</Text>
																</TouchableOpacity>
														</View>
											 	</Animated.View>
													<Animated.View entering={FadeInRight.delay(600)
														.duration(900)
														.springify()
														.damping(19)} >
														<View style={{ alignItems: "center", position: "relative", }}>
															<View style={{ flexDirection: "row",top:-height*0.05,}}>
																			<TouchableOpacity style={styles.icon}>
																				 <Image source={require("../../assets/google.png")} style={{width:20,height:20}}/>
																			</TouchableOpacity>
																			<TouchableOpacity style={styles.icon}>
																				<Image source={require("../../assets/whatsapp.png")} style={{width:20,height:20}}/>
																			</TouchableOpacity>
																			<TouchableOpacity style={styles.icon}>
																				<Image source={require("../../assets/fb.png")} style={{width:10,height:20}}/>
																			</TouchableOpacity>
															</View>

																<View style={{ flexDirection: "row" }}>
																		<Text style={{ color: "#808080" }}>Don't have an account? </Text>
																		<TouchableOpacity onPress={()=>props.change(true)}>
																				<Text style={{ fontWeight: "bold" }}>Sign Up</Text>
																		</TouchableOpacity>
																</View>
																
														</View>
														<View style={styles.loginFooter}>
																<View style={styles.bottom}>
																		<Image
																				source={require("../../assets/03.png")}
																				style={{ height: 90, width: width * 0.9, opacity: 0.8 }}
																		/>
																</View>
														</View>
													</Animated.View>
					     </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
		logincontainer:{
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
    height: height * 0.30,
    // position: "relative",
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
    width: width * 0.3,
    backgroundColor: "#0384d5",
    justifyContent: "center",
    borderRadius: 25,
    position: "absolute",
    top: -12,
    elevation: 5,
  },
		loginFooter:{
			padding: 10,
			alignItems: "center",
			justifyContent: "center",
			bottom: -height*0.04,
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
		icon:{
			width:40,
			height:40,
			borderRadius:100,
			justifyContent:"center",
			alignItems:"center",
			margin:10,
			borderColor:"#5587ef",
			borderWidth:1.5
		}
});
