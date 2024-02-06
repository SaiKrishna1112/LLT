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

import SignIn from "./SignIn"
import SignUp from "./SignUp"

const { height, width } = Dimensions.get("window");

const Auth = () => {
	
	const [isTrue,setIsTrue] = React.useState(false)

	const change = (data) => {
		setIsTrue(data);
		// console.log(data);
	};

	return (
			<View style={styles.container}>
					<View style={styles.upContainer}>
							<View>
									<Image
											source={require("../../assets/01.png")}
											style={{ height: 250, width: width * 0.9, opacity: 0.4 }}
									/>
							</View>
					</View>
					{ isTrue ?
								(
											<View>
													 <SignUp change={change}/>
											</View>
								)
											:
								(
									<View>
											  	<SignIn change={change}/>
									</View>
								)
					}
					
			</View>
	);
};

export default Auth;

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
});
