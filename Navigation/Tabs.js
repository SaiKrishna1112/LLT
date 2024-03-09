import * as React from 'react';
import { Image, Text, View, TouchableOpacity ,StyleSheet,Modal,Button,Dimensions,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar,Badge,IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'

import Dashboard from '../Pages/HomeScreen/Dashboard';
import UniversitiesList from '../Pages/Universities/UniversitiesList';
import UniversitiesListAndChat from '../Pages/Chat/UniversitiesListAndChat';
import ApplicationScreen from '../Pages/Application/ApplicationScreen';

const {width,height} = Dimensions.get("window" || "screen")

function Loan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loan!</Text>
    </View>
  );
}

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
            <MaterialCommunityIcons name="account" color={color} size={size} />
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
            <MaterialCommunityIcons name="menu" color={color} size={size} />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
}


function SearchbarBox() {
  // const [searchQuery, setSearchQuery] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [showFilters, setShowFilters] = React.useState(false);
  const navigation = useNavigation()

  const onChangeSearch = query => setSearchQuery(query);

  function toggleFilters() {
    setShowFilters(!showFilters)
  };

  return (
    <View style={styles.container}>
    <View style={[styles.searchContainer,{width:showFilters?width*0.9:width*0.6}]}>
    <Icon
        name="search"
        size={24}
        color="black"
        // onPress={toggleFilters}
      />
      <TextInput
        style={[styles.activesearchInput,{width:showFilters?width*0.9:width*0.6,paddingLeft:showFilters?10:10}]}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        enterKeyHint="search" 
      />
      <Icon
        name="filter"
        size={24}
        color="black"
        onPress={()=>toggleFilters()}
        style={{paddingHorizontal:10}}
      />
    </View>
    {showFilters? 
    null  :
    <View style={{flexDirection:"row",top:8,right:-23}}>
      <TouchableOpacity style={{marginRight:5}} onPress={()=>{navigation.navigate("Chat")}}>
        <MaterialCommunityIcons name={"bell"} size={26} color={"white"}/>
        <Badge style={{position:"absolute",top:-10}} size={15}>3</Badge>
      </TouchableOpacity>
      <TouchableOpacity style={{left:5}} onPress={()=>{navigation.navigate("Wishlist")}}>
        <MaterialCommunityIcons name={"heart"} size={26} color={"white"}/>
      </TouchableOpacity>
      <TouchableOpacity style={{left:12}} onPress={()=>{navigation.navigate("Profile")}}>
        <MaterialCommunityIcons name={"account-circle-outline"} size={26} color={"white"}/>
      </TouchableOpacity>
    </View>
    }
    <Modal visible={showFilters} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <Text>Filter Options</Text>
        {/* Add your filter options here */}
        <Button title="Close" onPress={()=>toggleFilters()} />
      </View>
    </Modal>
  </View>
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
      headerTitle: (props) => <SearchbarBox {...props} />,
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
    <LoanScreen.Screen name = "Loans" component={Loan} options={{
      headerTitle: (props) => <SearchbarBox {...props} />,
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
      headerTitle: (props) => <SearchbarBox {...props} />,
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
      headerTitle: (props) => <SearchbarBox {...props} />,
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
    <MenuScreen.Screen name = "MenuSide" component={Menu} options={{
      headerTitle: (props) => <SearchbarBox {...props} />,
      // headerRight:(props)=><IconView />
  }}/>
  </MenuScreen.Navigator>
)


  const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    justifyContent: 'space-evenly',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#ccc',
      padding: 5,
      // width:width*0.7,
      backgroundColor:"white"
    },
    activesearchInput: {
      flex: 1,
      padding: 0,
      // width:width*0.7
    },
    modalContainer: {
      marginTop: 50, // Adjust the marginTop to position the modal at the top
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height:height-500,
      width:width,
      alignSelf:"center",
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      elevation:10
    },
  });