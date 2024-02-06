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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from '@react-navigation/native'

const { height, width } = Dimensions.get("window");

const ForgotPassword = () => {
	const navigation = useNavigation();
		return (
			<View style={styles.container}>
				<View style={styles.upContainer}>
						<View>
								<Image
										source={require("../../assets/05.png")}
										style={{ height: 250, width: width * 0.9, opacity: 0.4 }}
								/>
						</View>
				</View>
			 	<View>
							<Animated.View  entering={FadeInLeft.delay(500)
								.duration(800)
								.springify()
								.damping(19)} style={[styles.logincontainer]}>
								<View style={{ marginTop: -55, alignSelf: "flex-end",}}>
										<Image
												source={require("../../assets/06.png")}
												style={{ height: 65, width: 50 }}
										/>
								</View>
								<Text style={styles.header}>Enter your email</Text>
								<View style={{alignSelf:"center",marginBottom:10}}>
								  <Text style={{textAlign:"center",width:width*0.6}}>We will sent you a 4 digits Verification code on your registered email</Text>
								</View>
								<ScrollView>
										<View style={styles.inputBox}>
												<TextInput
														style={styles.textInputField}
														placeholder="Email"
														// value={}
														// onChangeText={() => ()}
												/>
										</View>
										<View style={{ alignItems: "center", marginTop:10 }}>
											<Text style={{ color: "#808080" }}>Forgot Password?</Text>
										</View>
								</ScrollView>
								<View>
										<TouchableOpacity style={styles.btn}>
												<Text
														style={{
																textAlign: "center",
																fontSize: 18,
																fontWeight: "bold",
																color: "white",
														}}
												>
														Next
												</Text>
										</TouchableOpacity>
								</View>
							</Animated.View>
							<Animated.View entering={FadeInRight.delay(600)
								.duration(900)
								.springify()
								.damping(19)} >
								<View style={{ alignItems: "center", position: "relative", }}>
									<TouchableOpacity style={{ flexDirection: "row",}} onPress={()=>navigation.goBack()}>
													<Icon name={"arrow-left-thick"} size={26}/>
													<Text style={{fontSize:18,fontWeight:"bold",marginLeft:15}}>Forgot Password</Text>
									</TouchableOpacity>

										<View style={{ flexDirection: "row",marginTop:25 }}>
												<Text style={{ color: "#808080" }}>Already have an account? </Text>
												<TouchableOpacity onPress={()=>navigation.navigate("Login")}>
														<Text style={{ fontWeight: "bold" }}>Sign In</Text>
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
		</View>
		)
}

export default ForgotPassword

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		display: "flex",
},
upContainer: {
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		backgroundColor: "#0384d5",
		borderBottomRightRadius: 80,
		borderBottomLeftRadius: 80,
		height: height * 0.4,
},
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
		height: height * 0.25,
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
		fontSize: 18,
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
	bottom: -height*0.16,
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
})