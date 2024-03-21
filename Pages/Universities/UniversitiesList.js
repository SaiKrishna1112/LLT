import React from "react";
import {View,Text,StyleSheet,Dimensions, TouchableOpacity, ScrollView,FlatList} from "react-native";
import {useNavigation,useRoute} from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { height, width } = Dimensions.get("window" || "screen");	

const UniversitiesList =()=>{
	const data=[1,2,3,4,5]

	const navigation = useNavigation();
	const params = useRoute();
	const renderItem=()=>{
		return(
			<View style={styles.boxContainer}> 
			<View style={styles.TxtStylesHeader}> 
			  <View style={styles.headLineView}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.headerTxtView}> 
				   <Text>Pre-Master's for Business, Law or Finanace</Text>
				 </View>
			 </View>
			 <View >
				 <TouchableOpacity style={styles.viewmoreBtn} onPress={()=>navigation.navigate("University Detail")}>
					 <Text>View more</Text>
				 </TouchableOpacity>
			   
			 </View>
			</View>
			{/* 1st line */}
			<View style={styles.nameList}>
			<View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Acadia University</Text>
				 </View>
			 </View>
			 <View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Application fee : $19,600 CAD</Text>
				 </View>
			 </View>
			</View>
			{/* 2nd line */}
			<View style={styles.nameList}>
			<View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Canada</Text>
				 </View>
			 </View>
			 <View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Duration : 24 Months</Text>
				 </View>
			 </View>
			</View>
			{/* 3rd line */}
			<View style={styles.nameList}>
			<View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Yearly Tuition fee : $14,000</Text>
				 </View>
			 </View>
			 <View style={styles.txtLine}>
				 <View style={styles.iconCircle}/>
				 <View style={styles.subTxtStyle}>
				   <Text>Intakes : Sep 2023 , Jan 2023 </Text>
				 </View>
			 </View>
			</View>
			{/* Entry  */}
			<View> 
				 <View style={styles.txtLine}>
					 <View style={styles.iconCircle}/>
					 <View style={styles.subTxtStyle}>
					   <Text style={styles.txt1}>Entry requirements :</Text>
					 </View>
				 </View>
			 </View>
			 <View style={{flexDirection:"row",width:width*0.8,justifyContent:"space-between"}}>
				 <View style={styles.scoreView}>
					 <View style={styles.ScoreShow}>
						 <Text style={styles.txt}>GPA 8.0</Text>
						 {/* <Text style={styles.txt}></Text> */}
					 </View>
					 <View style={styles.ScoreShow}>
						 <Text style={styles.txt}>IELTS 6.5</Text>
						 {/* <Text></Text> */}
					 </View>
					 <View style={styles.ScoreShow}>
						 <Text style={styles.txt}>PTE 74</Text>
					 </View>
				 </View>
					 <View style={{width:width*0.45,justifyContent:"flex-end"}}>
						 <TouchableOpacity style={styles.applyBtn} onPress={()=>navigation.navigate("Universities List And Chat")}>
							 <Text style={styles.txt2}>Applied</Text>
						 </TouchableOpacity>		
					 </View>
			 </View>
				 
				 <View style={{flexDirection:"row"}}>
					 <View style={styles.scoreView}>
						 <View style={styles.ScoreShow}>
							 <Text style={styles.txt}>GRE 310</Text>
						 </View>
						 <View style={styles.ScoreShow}>
							 <Text style={styles.txt}>TOEFL 88</Text>
						 </View>
						 <View style={styles.ScoreShow}>
							 <Text style={styles.txt}>DET 110</Text>
						 </View>
					 </View>
					 <View style={styles.bottom}>
						 <TouchableOpacity style={styles.hStyle}>
						   <MaterialCommunityIcons name={"heart"} size={22} color={"white"}/>
						 </TouchableOpacity>
						 <TouchableOpacity style={styles.hStyle}>
						   <MaterialCommunityIcons name={"chat"} size={22} color={"white"}/>
						 </TouchableOpacity>
					 </View>
				 </View>
			</View>
		)
	}

	return(
		<View style={styles.container}>
			{/* <ScrollView> */}
			   <FlatList
			   data={data}
			   renderItem={renderItem}
			   keyExtractor={(item,index)=>index}/>
			   <View style={styles.bottom}>
				
				
			   </View>
			   {/* </ScrollView> */}
			</View>
	)
}

export default UniversitiesList

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	boxContainer:{
		width:width*0.95,
		height:308,
		backgroundColor:"white",
		elevation:5,
		alignSelf:"center",
		top:10,
		borderRadius:20,
		marginTop:12,
		marginBottom:20
	},
	TxtStylesHeader:{
		flexDirection:"row",
		marginVertical:18,
		width:width*0.7
	},
	headLineView:{
		flexDirection:"row",
		width:width*0.55
	},
	headerTxtView:{
		width:width*0.5,
		marginRight:5
	},
	viewmoreBtn:{
		width:80,
		height:22,
		borderRadius:20,
		backgroundColor:"white",
		marginLeft:60,
		marginRight:10,
		alignItems:"center",
		justifyContent:"center",
		elevation:4
	},
	nameList:{
		flexDirection:"row",
		 width:width*0.85,
		 marginVertical:8,
	},
	txtLine:{
		flexDirection:"row",
		width:width*0.45,
		
	},
	iconCircle:{
		width:20,
		height:20,
		borderRadius:100,
		backgroundColor:"#0384d5",
		marginLeft:10,
		marginRight:10
	},
	subTxtStyle:{
		flexDirection:"row",
		width:width*0.36
	},
	ScoreShow:{
		width:60,
		height:25,
		borderRadius:20,
		backgroundColor:"white",
		alignItems:"center",
		justifyContent:"center",
		elevation:4,
		marginTop:10,
		marginLeft:5,
		marginRight:5
	},
	scoreView:{
		flexDirection:"row",
		// width:width*0.4,
		marginHorizontal:18
	},
	txt:{
		fontSize:12,
		textAlign:"center"
	},
	txt1:{
		color:"#0384d5",
		fontWeight:"bold"
	},
	txt2:{
		color:"white",
		fontWeight:"bold"
	},
	bottom: {
		alignSelf: "flex-end",
		// left: 0,
		right: 0,
		bottom:0,
		justifyContent:"space-between",
		flexDirection:"row",
	},
	applyBtn:{
		width:90,
		height:25,
		alignItems:"center",
		justifyContent:"center",
		elevation:4,
		backgroundColor:"green",
		marginLeft:7
	},
	hStyle:{
		width:40,
		height:25,
		backgroundColor:"#0384d5",
		alignItems:"center",
		justifyContent:"center",
		elevation:4,
		marginLeft:5,
		marginRight:10,
		marginTop:15,
	},
	
})