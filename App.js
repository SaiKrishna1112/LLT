import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './Store/store';

import Navigation from './Navigation/Navigation';

export default function App() {
	
return(
	<Provider store={store}>
		<NavigationContainer>
			<Navigation/>
		</NavigationContainer>
	</Provider>
)


}
