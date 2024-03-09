import { StyleSheet, Text, View,Dimensions, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Icon  from 'react-native-vector-icons/FontAwesome5'

const {width,height} = Dimensions.get("window"||"screen")

const Wishlist = () => {
    const data = [1,2,3,4,5]

    const renderItem = ({item,index}) => {
        return(
        <View style={styles.container}>
        <View style={{alignSelf:"flex-start",width:width*0.21}}>
            <View style={styles.UniversityImage}>
                <Icon name={"university"} size={85} />
            </View>
        </View>
        <View style={{width:width*0.54}}>
            <View style={{marginLeft:35}}>
            <Text>WishlistID:1234567890</Text>
            </View>
        <View style={styles.headLineView}>
             <View style={styles.iconCircle}>
               <Icon name={"university"} size={15} />
             </View>
             <View style={styles.headerTxtView}> 
               <Text style={{fontSize:13}}>M.S in Computer Engineering</Text>
             </View>
         </View>
         <View style={styles.headLineView}>
             <View style={styles.iconCircle}>
             <Icon name={"university"} size={15} />
                </View>
             <View style={styles.headerTxtView}> 
               <Text style={{fontSize:13}}>University of Arizona, USA</Text>
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

    console.disableYellowBox=true
  return (
    <View>
        {/* <SafeAreaView></SafeAreaView> */}
        <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index}/>
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
		width:width*0.4
	},
	headerTxtView:{
		width:width*0.4,
		marginRight:5,
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

})