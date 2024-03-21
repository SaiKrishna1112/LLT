import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

const {width,height} = Dimensions.get("window" || "screen")
const ApplicationScreen = () => {
  return (
    <View>
        <View style={styles.container}>
            <View style={styles.headerView}>
                <View style={styles.headerInnerStyle}>
                    <View style={styles.dotIcon}/>
                    <Text style={styles.headerText}>App.ID : 2404564678848</Text>
                    <View style={styles.statusBox}>
                        <Text style={{fontSize:10,fontWeight:"600",textAlign:"center"}}>Missing Doc</Text>
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
                    <Text>M.S in Computer Engineering</Text>
                    </View>
                </View>
                <View style={styles.txtLine}>
                    <View style={styles.iconCircle}>
                        <Icon name={"calendar"} size={16} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>Year : 2024</Text>
                    </View>
                </View>
			</View>
            <View style={styles.nameList}>
                <View style={styles.txtLine}>
                    <View style={styles.iconCircle}>
                        <FontAwesome name="university" size={16} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>University of Arizona, USA</Text>
                    </View>
                </View>
                <View style={styles.txtLine1}>
                    <View style={styles.iconCircle}>
                        <MaterialIcon name="download-circle" size={18} style={{alignSelf:"center"}}/>
                    </View>
                    <View style={styles.subTxtStyle}>
                    <Text>Intake : Fall</Text>
                    </View>
                </View>
			</View>
            </View>
        </View>
    </View>
  )
}

export default ApplicationScreen

const styles = StyleSheet.create({
    container:{
        width:width*0.95,
        height:140,
        backgroundColor:"white",
        elevation:5,
        alignSelf:"center",
        marginTop:20,
        borderRadius:10
    },
    headerView:{
        flexDirection:"row",
        marginTop:height*0.02,
        marginLeft:10
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
        width:70,
        height:25,
        backgroundColor:"#B5C0D0",
        borderRadius:5,
        justifyContent:"center",
        marginLeft:width*0.046,
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
})