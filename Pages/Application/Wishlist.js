import { StyleSheet, Text, View,Dimensions, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import IonIcons from "react-native-vector-icons/Ionicons"
import {useSelector} from 'react-redux'

import {wishlistData} from '../../Api/AfterLogin'

const {width,height} = Dimensions.get("window"||"screen")

const Wishlist = () => {

	const user = useSelector(state=>state.user)
    const data = [1,2,3,4,5]
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

    const renderItem = ({item,index}) => {
        return(
        <View style={styles.container}>
        <View style={{alignSelf:"flex-start",width:width*0.21}}>
            <View style={styles.UniversityImage}>
                <Icon name={"university"} size={85} />
            </View>
        </View>
        <View style={{width:width*0.54,marginTop:height*0.0125}}>
            <View style={{marginLeft:35}}>
            <Text >WishlistID : {item.wishListId}</Text>
            </View>
        <View style={styles.headLineView}>
             <View style={styles.iconCircle}>
               <Icon name={"university"} size={15} />
             </View>
             <View style={styles.headerTxtView}> 
               <Text style={{fontSize:13}}>{item.name}</Text>
             </View>
         </View>
         <View style={styles.headLineView}>
             <View style={styles.iconCircle}>
             <Icon name={"university"} size={15} />
                </View>
             <View style={styles.headerTxtView}> 
               <Text style={{fontSize:13}}>{item.university}</Text>
             </View>
         </View>
        </View>
        <View style={{alignSelf:"flex-end",width:width*0.22,top:-15}}>
            <TouchableOpacity style={styles.applybtn}>
                <Text style={styles.applybntText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removebtn}>
                <Text style={styles.removebntText}>Remove</Text>
            </TouchableOpacity>
        </View>
    </View>
        )
    }

				useEffect(()=>{
					console.log("Wishlist1");

					 wishlistData(user.userList[0].id,pageNo)
						.then(function(response){
							 setDataSource(response.data)
								console.log(response);
						})
						.catch(function(error){
							console.log(error);
						})
				},[pageNo])

    console.disableYellowBox=true
  return (
    <View>
        {/* <SafeAreaView></SafeAreaView> */}
								{dataSource.length !== 0 ?
        <FlatList 
        data={dataSource}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index}/>
								:
								<View style={{justifyContent:"center",alignItems:"center",marginTop:50}}>
           <Text style={{fontWeight:"bold",fontSize:25}}>No Data Found</Text>
								</View>}
								<View style={styles.pageBackground}>
             <TouchableOpacity style={styles.circleView} onPress={()=>{prevPage()}}>
												  	<IonIcons name="chevron-back" color="black" size={28} />
													</TouchableOpacity>
													<TouchableOpacity style={styles.circleView}>
														   <Text>1</Text>
													</TouchableOpacity>
													<TouchableOpacity style={styles.circleView}>
														   <Text>2</Text>
													</TouchableOpacity>
													<TouchableOpacity style={styles.circleView}>
														   <Text>3</Text>
													</TouchableOpacity>
													<TouchableOpacity style={styles.circleView} onPress={()=>nextPage()}>
													<IonIcons name="chevron-forward" color="black" size={28} />
													</TouchableOpacity>
								</View>
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:width*0.95,
        height:100,
        backgroundColor:"white",
        alignSelf:"center",
        marginTop:20
        // justifyContent:"space-between"
    },
    UniversityImage:{
        width:80,
        height:100,
        backgroundColor:"#d3d3d3",
        justifyContent:"center",
        alignItems:"center",
        elevation:10
    },
    headLineView:{
		flexDirection:"row",
		width:width*0.4,
        marginTop:height*0.01
	},
	headerTxtView:{
		width:width*0.4,
		marginRight:5,
		top:3
	},
    iconCircle:{
		width:20,
		height:20,
		borderRadius:100,
		backgroundColor:"white",
		marginLeft:10,
		marginRight:10,
        elevation:5,
        justifyContent:"center",
        alignItems:"center"
	},
    applybtn:{
        width:70,
        height:30,
        backgroundColor:"#0384d5",
        justifyContent:"center",
        marginTop:15,
        borderRadius:12,
        elevation:10
    },
    applybntText:{
        textAlign:"center",
        color:"white",
        fontWeight:"500"
    },
    removebtn:{
        width:70,
        height:30,
        backgroundColor:"#D3D3D3",
        justifyContent:"center",
        marginTop:15,
        borderRadius:12,
        elevation:10
    },
    removebntText:{
        textAlign:"center",
        color:"black",
        fontWeight:"500"
    },
				pageBackground:{
					backgroundColor:"white",
					borderRadius:25,
					marginTop:25,
					// borderWidth:0.1,
					width:width*0.9,
					alignSelf:"center",
					height:65,
					flexDirection:"row", 
     justifyContent:"space-evenly",
					alignItems:"center"
				},
				circleView:{
					backgroundColor:"white",
					elevation:10,
					borderRadius:100,
					width:55,
					height:55,
					alignItems:"center",
					justifyContent:"center",
					shadowColor: '#000', // Shadow color (for iOS)
					shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
					shadowOpacity: 0.25, // Shadow opacity (for iOS)
					shadowRadius: 3.84, // Shadow radius (for iOS)
				}

})