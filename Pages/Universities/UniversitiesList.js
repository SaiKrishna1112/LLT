import React from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";

const { height, width } = Dimensions.get("window" || "screen");	

const UniversitiesList =()=>{
  
	return(
		<View style={styles.container}>
			<View style={styles.boxContainer}> 

			</View>
			<Text>

			</Text>
		</View>
	)
}

export default UniversitiesList

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	boxContainer:{
		width:width*0.9,
		height:height*0.45,
		backgroundColor:"white",
		elevation:5,
		alignSelf:"center",
		top:10,
		borderRadius:20,
	},
	TxtStylesHeader:{
		flexDirection:"row",
	}
})