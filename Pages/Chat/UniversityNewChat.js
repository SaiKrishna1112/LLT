import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
const{height,width}=Dimensions.get('window')


const UniversityNewChat = () => {
  return (
    <View>

		{/* <Text>New Chat</Text> */}


<View style={{backgroundColor:"#c0c0c0",height:"auto",marginTop:10}}>
								{/* <Text>Sreeja</Text> */}
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
													<Text style={{marginLeft:10,fontSize:15,marginTop:3}}>12:34 pm</Text>
												</View>
										</View>

										<View style={{flexDirection:"row"}}>
												<View>
													<Text style={{marginLeft:15,fontSize:15,marginTop:3,width:width*0.58}}>You : I am trying to reach....</Text>
												</View>
												<View style={{backgroundColor:"#0384d5",height:20,width:20,borderRadius:100}}>
															<Text style={{alignSelf:"center",justifyContent:"center",color:"white"}}>2</Text>
												</View>
										</View>


									</View>



								</View>
						</View>
                </View>
  )
}

export default UniversityNewChat

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
	}

})