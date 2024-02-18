import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProgressBar, MD3Colors } from 'react-native-paper';

const {width,height} = Dimensions.get("screen" || "window")
const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headerView}>
       
        <View style={styles.iconView}>
            <View style={styles.iconCircle}>

            </View>
            <View style={styles.iconCircle}>

            </View>
        </View>
        </View>
        <View style={styles.whiteCard}>
        <View style={styles.profileImage}></View>
        <View style={styles.txtLine}>
          <View style={styles.iconCircles}/>
            <View style={styles.subTxtStyle}>
                <Text style={styles.txt}>Sai krishna</Text>
            </View>
          </View>
          <View style={{flexDirection:"row",width:width*0.6}}> 
          <View style={styles.txtLine1}>
          <View style={styles.iconCircles}/>
            <View style={styles.subTxtStyle}>
                <Text style={styles.txt}>+91 1234567890</Text>
            </View>
          </View>
          <View style={styles.txtLine2}>
          <View style={styles.iconCircles}/>
            <View style={styles.subTxtStyle}>
                <Text style={styles.txt}>Male</Text>
            </View>
          </View>

          </View>
          
          <View style={styles.txtLine}>
          <View style={styles.iconCircles}/>
            <View style={styles.subTxtStyle}>
                <Text style={styles.txt}>01-01-2024</Text>
            </View>
          </View>
          <View style={styles.txtLine}>
          <View style={styles.iconCircles}/>
            <View style={styles.subTxtStyle}>
                <Text style={styles.txt}>Saikrishna@gmail.com</Text>
            </View>
          </View>
        </View>
        <View style={ProfileStyle.container}>
          <View style={ProfileStyle.box}>
               <View style={ProfileStyle.upperBox}>
                 <Text style={{fontSize:17,fontWeight:"700"}}>Profile Details</Text>
                 <View>
                    <ProgressBar progress={0.9} theme={{ colors: { primary: 'green' } }} />
                 </View>
               </View>
          </View> 
        </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    headerView:{
        width:width,
        height:height*0.25,
        backgroundColor:"#0384d5",
        position:"relative"
    },
    profileImage:{
        width:width*0.4,
        height:width*0.4,
        borderRadius:100,
        borderWidth:5,
        position:"relative",
        alignSelf:"center",
        justifyContent:"center",
        top:-height*0.08,
        // borderBlockColor:"#0384d5"
    },
    iconView:{
        justifyContent:"flex-end",
        alignSelf:"flex-end",
        position:"absolute",
        bottom:12,
        flexDirection:"row"
        
    },
    iconCircle:{
        width:40,
        height:40,
        borderRadius:100,
        backgroundColor:"white",
        marginRight:10,
    },
    whiteCard:{
        backgroundColor:"white",
        elevation:6,
        width:width*0.95,
        height:height*0.32,
        alignSelf:"center",
        justifyContent:"center",
        position:"relative",
    },
    iconCircles:{
		width:25,
		height:25,
		borderRadius:100,
		backgroundColor:"#0384d5",
		marginLeft:10,
		marginRight:10
	},
    txt:{
     fontSize:16,
     fontWeight:"700",
     color:"#69665f",
    },
    subTxtStyle:{
		flexDirection:"row",
		width:width*0.55
	},
    txtLine:{
		flexDirection:"row",
		width:width*0.8,
        top:-height*0.03,
        marginLeft:40,
        marginBottom:10
        // justifyContent:"center"
	},
    txtLine1:{
		flexDirection:"row",
		width:width*0.45,
        top:-height*0.03,
        marginLeft:40,
        marginBottom:10
        // justifyContent:"center"
	},
    txtLine2:{
		flexDirection:"row",
		width:width*0.2,
        top:-height*0.03,
        marginLeft:20,
        marginBottom:10
        // justifyContent:"center"
	},

})

const ProfileStyle = StyleSheet.create({
   container:{
    flex:1,
   },
   box:{
    width:width*0.95,
    height:height*0.2,
    backgroundColor:"grey",
    marginTop:30,
    alignSelf:"center",
    borderRadius:20
   },
   upperBox:{
    width:width*0.88,
    height:40,
    backgroundColor:"white",
    borderRadius:10,
    alignSelf:"center",
    top:-20,
    justifyContent:"center",
    paddingLeft:15
   }
})