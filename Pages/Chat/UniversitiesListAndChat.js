import { StyleSheet, Text, View,Dimensions,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
const{height,width}=Dimensions.get('window')
import UniversityCalls from './UniversityCalls';
import UniversityChats from './UniversityChats';
import UniversityNewChat from './UniversityNewChat';


const UniversitiesListAndChat = () => {
	const [select1, setSelect1] = useState(1);
	const[value,setValue]=useState()
	

		return (
				<View>
						<View style={styles.btns}>
							<TouchableOpacity onPress={()=>setSelect1(1)} style={select1==1? styles.buttonActive: styles.buttonDeactive}> 
								<Text style={select1==1? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>New Chat</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={()=>setSelect1(2)} style={select1==2? styles.buttonActive: styles.buttonDeactive}>
								<Text style={select1==2? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>Chats</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={()=>setSelect1(3)} style={select1==3? styles.buttonActive: styles.buttonDeactive}>
								<Text style={select1==3? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>Calls</Text>
							</TouchableOpacity>

						</View>

					{select1==1?
					<UniversityNewChat/>
					:null}

					{select1==2?
					<UniversityChats/>
					:null}

					{select1==3?
					<UniversityCalls/>
					:null}

						{/* <SegmentedButtons
										value={value}
										onValueChange={setValue}
										buttons={[
											{
												value: 'walk',
												label: 'Walking',
											},
											{
												value: 'train',
												label: 'Transit',
											},
											{ value: 'drive', label: 'Driving' },
										]}
									/> */}

					
				</View>
		)
}

export default UniversitiesListAndChat

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
		// justifyContent:"space-evenly",
		backgroundColor:"white",
		borderRadius:5,
		width:width*0.84,
		alignSelf:"center",
		margin:20,
		height:35,
		elevation:5,
		alignItems:"center"
		// paddingTop:5
	},
	buttonActive:{
		backgroundColor:"#0384d5",
		width:width*0.28,
		height:35,
		borderRadius:5,
		alignItems:"center",
		justifyContent:"center"
	},
	buttonActiveTxt:{
		color:"white",
		alignSelf:"center",
		fontWeight:"bold"

	},
	buttonDeactive:{
		backgroundColor:"white",
		width:width*0.28,
		height:35,
		borderRadius:5,
		alignItems:"center",
		justifyContent:"center"
	},
	buttonDeactiveTxt:{
		color:"black"

	}
})