import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Entypo'
import OctIcon from 'react-native-vector-icons/Octicons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'

const{height,width}=Dimensions.get('window')


const data = [1,2,3,4,5,6]

const Notification = () => {
	const navigation = useNavigation()
	const renderItem = ({item,index})=>{
		return(
			<TouchableOpacity>
			<View style={[styles.item, index % 2 === 0 ? styles.even : styles.odd]}>
									<View style={{flexDirection:"row"}}>
	
										<View>
												<Image source={require('../../assets/university.jpg')} style={styles.img}/>
										</View>
	
										<View>
											<View style={{flexDirection:"row"}}>
													<View>
														<Text style={{marginLeft:15,fontSize:18,marginTop:3,width:width*0.52}}>University of Arizon, USA</Text>
													</View>
													<View>
														<Text style={{marginLeft:5,fontSize:12,marginTop:3}}>12:34 pm</Text>
													</View>
											</View>
	
											<View style={{flexDirection:"row"}}>
													<View>
														<Text style={{marginLeft:13,fontSize:15,marginTop:3,width:width*0.58}}>You : I am trying to reach....</Text>
													</View>
													<View style={{flexDirection:"row",marginLeft:-width*0.037,marginTop:2}}>
                                                        <TouchableOpacity>
																<IonIcon name='volume-mute' size={16} />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity>
                                                                <AntIcon name="delete" size={16} style={{marginLeft:8}} />
                                                                </TouchableOpacity>
													</View>
											</View>
										</View>
                                        {index % 2 === 0?
										<TouchableOpacity style={{justifyContent:"center",paddingLeft:width*0.09}}>
												   <OctIcon name={"dot-fill"} size={20} color={"blue"}/>
											</TouchableOpacity>:null}
									</View>
							</View>
							</TouchableOpacity>
		)
	}
	
  return (
    <View>

						<FlatList 
						data={data}
						renderItem={renderItem}
						keyExtractor={(item,index)=>index}/>
                </View>
  )
}

export default Notification

const styles = StyleSheet.create({

  img:{
		height:50,
		width:50,
		borderRadius:100,
		marginLeft:10,
		marginTop:5,
		marginBottom:5
	},
	btns:{
		flexDirection:"row",
		justifyContent:"space-around",
		backgroundColor:"white",
		borderRadius:5,
		width:width*0.9,
		alignSelf:"center",
		margin:20,
		height:30,
		elevation:5,
		paddingTop:5
	},
	even:{
		backgroundColor:"#E6E6FA",height:"auto",marginTop:10
	},
	old:{
		height:"auto",marginTop:10
	}

})