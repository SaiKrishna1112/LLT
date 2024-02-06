import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPassword from "./Pages/Authentication/ForgotPassword"
import Auth from "./Pages/Authentication/Auth"

const Stack = createNativeStackNavigator();

export default function App() {
	
  return (
			<NavigationContainer>
					<Stack.Navigator
				   	initialRouteName="Login"
								screenOptions = {{
									headerTintColor: 'white',
									headerTitleStyle: styles.headerTitleStyle,
									headerMode: 'float',
									headerShown: false,
									headerStyle: {
							backgroundColor: '#0384d5',
					},}}>
							<Stack.Screen name="Login" component={Auth} />
							<Stack.Screen name="Forgot Password" component={ForgotPassword} />
					</Stack.Navigator>
			</NavigationContainer>
  );
}


	const styles = StyleSheet.create({
		headerTitleStyle: {
						fontWeight: 'bold',
						color: 'white',
						fontSize:17,
						marginLeft:-20
		},
});



