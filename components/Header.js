import { Dropdown } from 'react-native-element-dropdown';
import { Searchbar,Badge,IconButton, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, View, TouchableOpacity ,StyleSheet,Modal,Button,Dimensions,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const {width,height} = Dimensions.get("window" || "screen")

function SearchbarBox() {
    // const [searchQuery, setSearchQuery] = React.useState('');
    const [searchQuery, setSearchQuery] = React.useState(null);
    const [showFilters, setShowFilters] = React.useState(false);
    const navigation = useNavigation()
    const degreeSelectOption =[
      { label: "UG", value: "UG" },
      { label: "PG", value: "PG" },
    ]
    const [StudyLevel,setStudyLevel] = React.useState();
    const [Country,setCountry] = React.useState();
  
    const onChangeSearch = query => setSearchQuery(query);
  
    const [options,setOptions] = React.useState([])
  
    const handleCheckboxChange = (value) => {
      if (options.includes(value)) {
        setOptions(options.filter(item => item !== value));
      } else {
        setOptions([...options, value]);
      }
    };
  
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
          <View style={{flexDirection:"row",width:width*0.9,justifyContent:"space-between",marginTop:10}}>
             <View style={[styles.dropdownView,{width:width*0.35}]}>
                   <Dropdown
                      style={styles.inputdropdown}
                      placeholder="Country"
                      data={degreeSelectOption}
                      labelField="label"
                      valueField="value"
                      value={Country}
                      onChange={(item) => {
                        setCountry(item.value)
                        console.log("selected", item);
                      }}
                    />
               </View>
           <View style={[styles.dropdownView,{flexDirection:"row",width:width*0.53}]}> 
            <Text style={{width:90,alignSelf:"center",marginLeft:10}}>Study Level</Text>
                 <Dropdown
                      style={styles.inputdropdown1}
                      placeholder="Bachelors"
                      data={degreeSelectOption}
                      labelField="label"
                      valueField="value"
                      value={StudyLevel}
                      onChange={(item) => {
                        setStudyLevel(item.value)
                        console.log("selected", item);
                      }}
                    />
           </View>
           </View>
            <View style={{width:width*0.8,marginTop:10}}>
                <View style={{flexDirection:"row",width:width*0.8,justifyContent:"space-evenly",left:-18}}>
                   <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option1')} 
                      style={{top:-4}}
                      status={options.includes('option1') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>Without GMat</Text>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option2')} 
                      style={{top:-4}}
                      status={options.includes('option2') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>Without GRE</Text>
                     </View>
                 </View>
  
                 <View style={{flexDirection:"row",width:width*0.8,justifyContent:"space-evenly",marginTop:-16}}>
                   <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option3')} 
                      style={{top:-4}}
                      status={options.includes('option3') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>IELTS</Text>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option4')} 
                      style={{top:-4}}
                      status={options.includes('option4') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>TOEFL</Text>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option5')} 
                      style={{top:-4}}
                      status={options.includes('option5') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>PTE</Text>
                     </View>
                     <View style={{flexDirection:"row"}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option6')} 
                      style={{top:-4}}
                      status={options.includes('option6') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>DET</Text>
                     </View>
                 </View>
                 <View style={{flexDirection:"row",left:-20,marginTop:-10}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option7')} 
                      style={{top:-4}}
                      status={options.includes('option7') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>Without Application Fee</Text>
                     </View>
                     <View style={{flexDirection:"row",left:-20,marginTop:-10}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option8')} 
                      style={{top:-4}}
                      status={options.includes('option8') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>Scholarship Available</Text>
                     </View>
                     <View style={{flexDirection:"row",left:-20,marginTop:-10}}>
                      <Checkbox.Item  
                      onPress={() => handleCheckboxChange('option9')} 
                      style={{top:-4}}
                      status={options.includes('option9') ? 'checked' : 'unchecked'}/>  
                      <Text style={{top:10,fontSize:16,left:-14}}>15 Years Education</Text>
                     </View>
  
                     <View style={{flexDirection:"row"}}>
                         <View style={{width:width*0.4}}>
                             <Text>Annual Tuition Fees</Text>
                         </View>
                         <View style={{flexDirection:"row",width:width*0.5,justifyContent:"space-evenly"}}>
                             <View>
                                <TextInput style={styles.inputBox} placeholder='Min' keyboardType='number-pad'/>
                             </View>
                             <View>
                                <TextInput style={styles.inputBox} placeholder='Max' keyboardType='number-pad'/>
                             </View>
                         </View>
                     </View>
                     <View style={{flexDirection:"row",marginTop:10,marginBottom:10}}>
                         <View style={{width:width*0.4}}>
                             <Text>Select Intake</Text>
                         </View>
                         <View style={{flexDirection:"row",width:width*0.5,justifyContent:"space-evenly"}}>
                             <View>
                                <TextInput style={styles.inputBox1} placeholder='Jan - Sep'/>
                             </View>
                         </View>
                     </View>
            </View>
  
          <Button title="Apply" onPress={()=>{toggleFilters(),navigation.navigate("Menu")}} />
        </View>
      </Modal>
    </View>
    );
  }

  export default SearchbarBox;

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
      // justifyContent: 'center',
      // alignItems: 'center',
      backgroundColor: 'white',
      height:height-400,
      width:width*0.95,
      alignSelf:"center",
      borderBottomRightRadius:20,
      borderBottomLeftRadius:20,
      elevation:10,
      padding:10
    },
    inputdropdown:{
      width:100,
      height:20,
      alignSelf:"center"
    },
    inputdropdown1:{
      width:106,
      height:25,
      alignSelf:"center",
      backgroundColor:"#c0c0c0",
      paddingLeft:10
    },
    dropdownView:{
      borderWidth:1,
      height:25,
      borderColor: "#c0c0c0",
      borderRadius:5
    },
    inputBox:{
      width:width*0.2,
      height:25,
      borderColor:"#c0c0c0",
      borderWidth:1,
      borderRadius:5,
      paddingLeft:10
    },
    inputBox1:{
      width:width*0.43,
      height:25,
      borderColor:"#c0c0c0",
      borderWidth:1,
      borderRadius:5,
      paddingLeft:10
    }
  });