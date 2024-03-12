import * as React from 'react';
import { Text, View,} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import Dashboard from '../Pages/HomeScreen/Dashboard';
import UniversitiesList from '../Pages/Universities/UniversitiesList';
import UniversitiesListAndChat from '../Pages/Chat/UniversitiesListAndChat';
import ApplicationScreen from '../Pages/Application/ApplicationScreen';
import SearchbarBox from '../components/Header'
import Loans from '../Pages/LoansScreen/Loans';


function Menu() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menu!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeScreen = createNativeStackNavigator();
const LoanScreen = createNativeStackNavigator();
const ApplicationScreens = createNativeStackNavigator();
const ChatScreen = createNativeStackNavigator();
const MenuScreen = createNativeStackNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0384d5',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Loan"
        component={LoanStack}
        options={{
          tabBarLabel: 'Loan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="My Application"
        component={ApplicationStack}
        options={{
          tabBarLabel: 'My applications',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="message" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="university" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
}





const HomeStack=()=>(
  <HomeScreen.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#0384d5",

    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <HomeScreen.Screen name = "Dashboard" component={Dashboard} options={{
      headerTitle: (props) => <SearchbarBox />,
      // headerRight:(props)=><IconView />
  }}/>
  </HomeScreen.Navigator>
)

const LoanStack=()=>(
  <LoanScreen.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#0384d5",

    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <LoanScreen.Screen name = "Loans" component={Loans} options={{
      headerTitle: (props) => <SearchbarBox/>,
      // headerRight:(props)=><IconView />
  }}/>
  </LoanScreen.Navigator>
)

const ApplicationStack=()=>(
  <ApplicationScreens.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#0384d5",

    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <ApplicationScreens.Screen name = "Applied" component={ApplicationScreen} options={{
      headerTitle: (props) => <SearchbarBox  />,
      // headerRight:(props)=><IconView />
  }}/>
  </ApplicationScreens.Navigator>
)

const ChatStack=()=>(
  <ChatScreen.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#0384d5",

    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <ChatScreen.Screen name = "ChatHistory" component={UniversitiesListAndChat} options={{
      headerTitle: (props) => <SearchbarBox />,
      // headerRight:(props)=><IconView />
  }}/>
  </ChatScreen.Navigator>
)

const MenuStack=()=>(
  <MenuScreen.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:"#0384d5",

    },
    headerTintColor:"#fff",
    headerTitleStyle:{
      fontWeight:"bold"
    }
  }}>
    <MenuScreen.Screen name = "Universities List" component={UniversitiesList} options={{
      headerTitle: (props) => <SearchbarBox/>,
      // headerRight:(props)=><IconView />
  }}/>
  </MenuScreen.Navigator>
)
