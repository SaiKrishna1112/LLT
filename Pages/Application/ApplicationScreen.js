import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import {useSelector} from 'react-redux'
import IonIcons from "react-native-vector-icons/Ionicons"

import {ApplicationData} from '../../Api/AfterLogin'

const {width,height} = Dimensions.get("window" || "screen")
const ApplicationScreen = () => {

	const user = useSelector(state=>state.user)
	const [dataSource,setDataSource]=useState([])
				const [pageNo,setPageNo] = useState(0)

				const nextPage = () => {
					setPageNo(pageNo + 1);
					console.log(pageNo + 1);
			};
	
			const prevPage = () => {
					if (pageNo != -1) {
						setPageNo(pageNo - 1);
						console.log(pageNo - 1);
					}
			};

	 const renderItem = ({item,index})=>{
			return (
    <View>
					<View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.headerInnerStyle}>
                    <View style={styles.dotIcon}/>
                    <Text style={styles.headerText}>App.ID : {item.applicationId}</Text>
                    <View style={styles.statusBox}>
                        <Text style={{fontSize:14,fontWeight:"600",textAlign:"center"}}>{item.status}</Text>
                    </View>
                    <View style={styles.iconView1}>
                        <Icon name="mail" size={20} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.iconView2}>
                        <AntDesign name="delete" size={20} style={{alignSelf:"center"}}/>
                    </View>
                </View>
            </View>
            <View style={{marginTop:height*0.02}}>
            <View style={styles.nameList}>
                <View style={styles.txtLine}>
                    <View style={styles.iconCircle}>
                         <FontAwesome name="university" size={16} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>{item.name}</Text>
                    </View>
                </View>
                <View style={styles.txtLine}>
                    <View style={styles.iconCircle}>
                        <Icon name={"calendar"} size={16} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>Year : {item.year}</Text>
                    </View>
                </View>
			</View>
            <View style={styles.nameList}>
                <View style={styles.txtLine}>
                    <View style={styles.iconCircle}>
                        <FontAwesome name="university" size={16} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>{item.university}</Text>
                    </View>
                </View>
                <View style={styles.txtLine1}>
                    <View style={styles.iconCircle}>
                        <MaterialIcon name="download-circle" size={18} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>Intake : {item.intakes}</Text>
                    </View>
                </View>
			          </View>
            </View>
												</View>
    </View>
  )
		}

		useEffect(()=>{
			console.log("ApplicationData");

				ApplicationData(user.userList[0].id,pageNo)
				.then(function(response){
						setDataSource(response.data)
						console.log(response.data[0]);
				})
				.catch(function(error){
					console.log(error);
				})
		},[pageNo])

  return (
    <View style={{flex:1}}>
         <View style={styles.pageBackground}>
             <TouchableOpacity style={styles.circleView} onPress={()=>{prevPage()}}>
												  	<IonIcons name="chevron-back" color="black" size={28} />
													</TouchableOpacity>
													
													<TouchableOpacity style={styles.circleView} onPress={()=>nextPage()}>
													<IonIcons name="chevron-forward" color="black" size={28} />
													</TouchableOpacity>
								</View>
								{dataSource.length != 0 ?
            <FlatList 
												data={dataSource}
												renderItem={renderItem}
												keyExtractor={(item,index)=>index}
												/>


												:
												<View style={{justifyContent:"center",alignItems:"center",marginTop:50}}>
															<Text style={{fontWeight:"bold",fontSize:25}}>No Data Found</Text>
												</View>}
        
    </View>
  )
}

export default ApplicationScreen

const styles = StyleSheet.create({
    container:{
        width:width*0.95,
        height:"auto",
        backgroundColor:"white",
        elevation:5,
        alignSelf:"center",
        marginTop:15,
        borderRadius:10,
								marginBottom:10
    },
    headerView:{
        flexDirection:"row",
        marginTop:height*0.02,
        marginLeft:10,
								// justifyContent:"space-around"
    },
    dotIcon:{
        width:25,
        height:25,
        borderRadius:10,
        backgroundColor:"white",
        elevation:6,
        top:3
    },
    headerInnerStyle:{
        flexDirection:"row",
        
    },
    headerText:{
      color:"#0384d5",
      fontWeight:"800",
      marginLeft:width*0.025,
      top:5,
      fontSize:14
    },
    statusBox:{
        width:width*0.3,
        height:20,
        backgroundColor:"#B5C0D0",
        borderRadius:5,
        justifyContent:"center",
        marginLeft:width*0.04,
        top:2
    },
    iconView1:{
        width:30,
        height:30,
        backgroundColor:"#B5C0D0",
        borderRadius:100,
        marginLeft:width*0.04,
        justifyContent:"center",
        // elevation:10
    },
    iconView2:{
        width:30,
        height:30,
        backgroundColor:"#B5C0D0",
        borderRadius:100,
        marginLeft:width*0.022,
        justifyContent:"center"
    },

	nameList:{
		flexDirection:"row",
		 width:width*0.85,
		 marginVertical:8,
	},
	txtLine:{
		flexDirection:"row",
		width:width*0.55,
        marginLeft:13
	},
	txtLine1:{
		flexDirection:"row",
		width:width*0.4,
        marginLeft:13
	},
	iconCircle:{
		width:20,
        height:20,
        borderRadius:10,
        backgroundColor:"white",
        elevation:6,
        // marginLeft:10,
        marginRight:10,
        justifyContent:"center"
	},
	subTxtStyle:{
		flexDirection:"row",
		width:width*0.5
	},
	
	pageBackground:{
		marginTop:15,
		// borderWidth:0.1,
		width:width*0.9,
		alignSelf:"center",
		flexDirection:"row", 
		justifyContent:"space-between",
		alignItems:"center"
	},
	circleView:{
		backgroundColor:"white",
		elevation:10,
		borderRadius:10,
		width:40,
		height:30,
		alignItems:"center",
		justifyContent:"center",
		shadowColor: '#000', // Shadow color (for iOS)
		shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
		shadowOpacity: 0.25, // Shadow opacity (for iOS)
		shadowRadius: 3.84, // Shadow radius (for iOS)
	}

})