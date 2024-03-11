import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import ForgotPassword from "../Pages/Authentication/ForgotPassword"
import Auth from "../Pages/Authentication/Auth"
import Profile from '../Pages/Profile/Profile';
import EditProfile from '../Pages/Profile/EditProfile';
import UniversityDetails from '../Pages/Universities Details/UniversityDetails';
import Chats from '../Pages/Chat/ChatScreen';
import Tabs from './Tabs'
import Wishlist from '../Pages/Application/Wishlist';
import ApplicationScreen from '../Pages/Application/ApplicationScreen';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return (
      
                <Stack.Navigator
                //    initialRouteName="Tabs"
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
                        <Stack.Screen name="Profile" component={Profile} options={{headerShown:true}}/>
                        <Stack.Screen name="University Detail" component={UniversityDetails} options={{headerShown:true}}/>
                        <Stack.Screen name="Edit" component={EditProfile} options={{headerShown:true}}/>
                        <Stack.Screen name="Chats" component={Chats} options={{headerShown:true}}/>
                        <Stack.Screen name="Wishlist" component={Wishlist} options={{headerShown:true}} />
                        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
                </Stack.Navigator>
       
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
