import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const {height,width} = Dimensions.get('window')
const UniversitiesList = () => {
		return (
			<View style={renderStyles.renderView}>
			<View style={renderStyles.txtBox}>
				<View style={renderStyles.profileCircle}>
				<Icon name="person" size={18}/>
				</View>
				<Text style={renderStyles.txtBody}>Sai krishna </Text>
			</View>
			<View style={{alignItems:"flex-end"}}>
			<Text style={renderStyles.txtBody3}>Reg.Date:  </Text>
	</View>
			<View style={renderStyles.txtBox1}>
			<Text style={renderStyles.txtBody1}> krishna</Text>
				<Text style={renderStyles.txtBody2}>krishna </Text>
	</View>

</View>
		)
}

export default UniversitiesList

const styles = StyleSheet.create({


})

const renderStyles = StyleSheet.create({
	renderView :{
	   backgroundColor:"white",
				alignSelf:'center',
				width:width*0.9,
				height:height*0.2,
				elevation:5,
				margin:10
	},
	txtBox:{
		marginLeft:20,
		marginTop:20,
		flexDirection:"row"
},
txtBody:{
	fontSize:18,
	color:"black",
	width:width*0.8,
	top:5
	},
	txtBox1:{
		width:width*0.9,
		flexDirection:"row",
		justifyContent:"space-evenly",
		alignSelf:'center',
		marginTop:20
},
txtBody1:{
	fontSize:18,
	color:"black",
	width:width*0.4,
	},
	txtBody2:{
		fontSize:18,
		color:"black",
		width:width*0.4,
		},
		profileCircle:{
			width:  width*0.08,
			height: width*0.08,
			borderRadius: width/10,
			backgroundColor:"#edeef6",
			justifyContent:"center",
			// opacity:0.5,
			alignItems:"center",
			marginRight:15
		},
		txtBody3:{
			fontSize:16,
			color:"#c8c8c8",
			width:width*0.4,
			},
})