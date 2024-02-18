import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ForgotPassword from "./Pages/Authentication/ForgotPassword"
import Auth from "./Pages/Authentication/Auth"
import UniversitiesList from "./Pages/Universities/UniversitiesList"
import UniversitiesListAndChat from './Pages/Chat/UniversitiesListAndChat';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {
	
  return (
			<NavigationContainer>
					<Stack.Navigator
				   	initialRouteName="Profile"
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
							<Stack.Screen name="Universities List" component={UniversitiesList} options={{headerShown:true}}/>
							<Stack.Screen name="Universities List And Chat" component={UniversitiesListAndChat} options={{headerShown:true}}/>
							<Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
							<Stack.Screen name="Edit" component={EditProfile} options={{headerShown:true}}/>
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



