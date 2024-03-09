import { StyleSheet, Text, View,SafeAreaView ,Dimensions,Image,ScrollView,TouchableOpacity} from 'react-native'
import React from 'react'
const{height,width}=Dimensions.get('window')
import  Icon  from 'react-native-vector-icons/Ionicons'
import  FontAwesome from 'react-native-vector-icons/FontAwesome'





const UniversityDetails = () => {
  return (
  
    <View style={{flex:1}}>
      <ScrollView>
          <View style={{backgroundColor:"#0384d5",height:150,position:"relative"}}>
            <Text style={styles.clgname}>M.A.Ed.in Arts Education</Text>
            <Text style={styles.clgname1}>Alternative Master's Program</Text>
          </View>
          <View style={styles.imgcontainer}>
                {/* <Text>Sreeja</Text> */}
                <Image source={require('../../assets/university.jpg')} style={{height:height/6.3,width:width*0.78,borderRadius:10,alignSelf:"center",marginTop:2}}/>
            </View>


            
  <View>
            <View style={styles.infoContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}>Acadia University</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="map" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}>Birmingham , Alabama</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}>Canada</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}><Text style={{color:"#0384d5"}}>Yearly Tution Fees :</Text> $18000</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}><Text style={{color:"#0384d5"}}>Application Fees :</Text> $19407 CAD</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}><Text style={{color:"#0384d5"}}> Study Level :</Text> Postgradute</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4}}><Text style={{color:"#0384d5"}}> Duration :</Text> 24 Months</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4,color:"#0384d5"}}> Scholarship Available</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4,width:width*0.8}}><Text style={{color:"#0384d5"}}> Application Deadline :</Text> Fall(Aug): 01 Mar, Spring (Jan): 22 Nov</Text>
              </View>
            </View>

            <View style={styles.infoContainer1}>
              <View style={styles.iconContainer}>
                <FontAwesome name="university" size={16} style={{alignSelf:"center",marginTop:5}}/>
              </View>
              <View>
                <Text style={{marginLeft:10,fontSize:16,marginTop:4,color:"#0384d5"}}>Intakes</Text>
              </View>

              <View style={styles.intakebtns}>
                <TouchableOpacity>
                    <Text>  Sep 2023(open)</Text>
                </TouchableOpacity>
                <Text>    |    </Text>
                <TouchableOpacity>
                    <Text>Oct 2023(open)</Text>
                </TouchableOpacity>
              </View>
            
            </View>

            <View style={styles.entryReqContainer}>
                <Text style={{color:"white",margin:10,fontSize:18}}>Entry Requirements</Text>
                <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>GPA</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>10</Text>
                  </View>

                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>GRE</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>10</Text>
                  </View>

                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>IELTS</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>08</Text>
                  </View>

                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>TOFEL</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>08</Text>
                  </View>

                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>PTE</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>08</Text>
                  </View>

                  <View style={styles.examType}>
                    <Text style={{alignSelf:"center"}}>DRE</Text>
                    <Text style={{alignSelf:"center",color:"#0384d5",fontWeight:"bold"}}>09</Text>
                  </View>
                </View>






            </View>
            </View>
      </ScrollView>
    </View>
      
  )
}

export default UniversityDetails

const styles = StyleSheet.create({
  clgname:{
    alignSelf:"center",
    marginTop:10,
    fontSize:17,
    color:"white"
  },
  clgname1:{
    alignSelf:"center",
    // marginTop:10,
    fontSize:16,
    color:"white"
  },
  imgcontainer:{
    backgroundColor:"white",
    width:width*0.8,
    alignSelf:"center",
    height:height/6,
    borderRadius:10,
    marginTop:-80,
    elevation:5,
    // position:"absolute",
  },
  infoContainer:{
    flexDirection:"row",
    // flex:1
    marginTop:15,
    marginLeft:30
  },
  infoContainer1:{
    flexDirection:"row",
    // flex:1
    marginTop:10,
    marginLeft:30
  },
  iconContainer:{
    backgroundColor:"white",
    height:30,
    width:30,
    elevation:10,
    borderRadius:100
  },
  intakebtns:{
    flexDirection:"row",
    margin:5,
    backgroundColor:"white",
    padding:4,
    elevation:10,
    borderRadius:10
  },
  entryReqContainer:{
    backgroundColor:"#0384d5",
    height:70,
    marginBottom:50,
    marginTop:10
  },
  examType:{
    backgroundColor:"white",
    height:50,
    width:50,
    borderRadius:10,
    elevation:5
  }
})