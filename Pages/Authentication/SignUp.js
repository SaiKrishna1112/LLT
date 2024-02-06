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

const { height, width } = Dimensions.get("window");

const SignUp = (props) => {


	return (
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
																					// value={}
																					// onChangeText={() => ()}
																			/>
																	</View>
																	<View style={styles.inputBox}>
																			<TextInput
																					style={styles.textInputField}
																					placeholder="Last Name"
																					// value={}
																					// onChangeText={() => ()}
																			/>
																	</View>
																	<View style={styles.inputBox}>
																			<TextInput
																					style={styles.textInputField}
																					placeholder="Email Address"
																					// value={}
																					// onChangeText={() => ()}
																			/>
																	</View>
																	<View style={styles.inputBox}>
																			<TextInput
																					style={styles.textInputField}
																					placeholder="Create Password"
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
																					SIGN UP
																			</Text>
																	</TouchableOpacity>
															</View>
													</Animated.View>
													<Animated.View entering={FadeInLeft.delay(600)
															.duration(900)
															.springify()
															.damping(19)}>
															<View style={{ alignItems: "center", position: "relative" }}>
																	<View style={{ flexDirection: "row" }}>
																			<Text style={{ color: "#808080" }}>Already have an account? </Text>
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
			height: height * 0.42,
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
	
	footer: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		bottom: 0,
		left: 0,
		right: 0,
},
bottom: {
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		left: 0,
		right: 0,
}
});
