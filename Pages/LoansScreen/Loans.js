import { StyleSheet, Text, View,Dimensions,Animated,TextInput,TouchableOpacity } from 'react-native'
import React,{useRef,useState} from 'react'
import Carousel, { Pagination } from "react-native-snap-carousel";
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";

const { width, height } = Dimensions.get("window");
const SPACING = 40;
const ITEM_SIZE = width * 0.9;


const Loans = () => {

  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const [inputFields, setInputFields] = useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    countryCode:"",
    planningTo:"",
    planningToOption:[
      { label: "US", value: "US" },
      { label: "UK", value: "UK" },
    ],
  })



  const scrollX = React.useRef(new Animated.Value(0)).current;
  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    // Add more items as needed
  ];

  const rendercoursel = ({ item }) => {
    const inputRange = [
      (index - 0.7) * ITEM_SIZE,
      index * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
    ];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange: [0, -40, 0],
      // extrapolate: 'clamp',
    });
    return(
      <View style={styles.item}>
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
    )
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
  );

  const handlePhoneNumberChange = (value) => {
    try {
      // setmobileNumber(value);
      // setInputFields({...inputFields,phoneNumber: value})
      // console.log(value)
      const callingCode = phoneInput.getCallingCode(value);
      // console.log(callingCode);
      setInputFields({
        ...inputFields,
        phoneNumber: value,
        countryCode: callingCode,
      });

      // setcountryCode(callingCode);
    } catch (error) {
      // Handle any parsing errors
    }
  };

  return (
    <View>
      {/* coursel start */}
      <View>
            <Carousel
                  data={data}
                  renderItem={renderItem}
                  sliderWidth={350}
                  itemWidth={430}
                  onSnapToItem={(index) => setIndex(index)}
                  // autoplay={true}
                  loop={true}
                  layout={"default"}
                  layoutCardOffset={20}
                  ref={isCarousel}
              />
              {/* <Carousel
          ref={(c) => this.carousel = c}
          data={data}
          renderItem={rendercoursel}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        /> */}

            <View style={{ marginTop: -25 }}>
              <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                  width: 20,
                  height: 10,
                  borderRadius: 10,
                  marginHorizontal: -5,
                  backgroundColor: "#0384d5",
                  alignSelf: "center",
                }}
                tappableDots={true}
                inactiveDotStyle={{
                backgroundColor: "black",
                  // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.4}
              />
            </View>
      </View>
          {/* coursel end */}



        <View style={styles.container}>
              <View style={styles.whiteContainer}>
                  <Text style={styles.text}>Educational</Text>
                  <Text style={styles.text}>Loans</Text>
              </View>
              <View style={{top:20}}>
                  <TextInput
                          style={styles.input}
                          placeholder="Full Name"
                          value={inputFields.fullName}
                          onChange={(text) =>
                            setInputFields({ ...inputFields, fullName: text })
                          }
                        />      
                  

                  <PhoneInput
                    containerStyle={styles.input1}
                    textContainerStyle={styles.textStyle}
                    textInputStyle={styles.phonestyle}
                    codeTextStyle={styles.phonestyle1}
                    ref={(ref) => (phoneInput = ref)}
                    defaultValue={inputFields.phoneNumber}
                    defaultCode="IN"
                    layout="first"
                    // autoFocus
                    onChangeText={handlePhoneNumberChange}
                  />

                  <TextInput
                          style={styles.input}
                          placeholder="Email"
                          value={inputFields.email}
                          onChange={(text) =>
                            setInputFields({ ...inputFields, email: text })
                          }
                        />    

                  {/* <Dropdown
                          style={styles.Dropdownstyle}
                          inputSearchStyle={{fontSize:16}}
                          iconStyle={{width:30,height:30}}
                          selectedTextStyle={{fontSize:16,width:width*0.4}}
                          placeholder="Planning To"
                          data={inputFields.planningToOption}
                          labelField="label"
                          valueField="value"
                          value={inputFields.planningTo}
                          // onValueChange={(itemValue) => setFeeToParticipate(itemValue)}
                          onChange={(item) => {
                            setInputFields({
                              ...inputFields,
                              planningTo: item.value,
                            });
                            // setWhatsappNotification(item.value);
                            console.log("selected", item);
                          }}
                        /> */}

                  <Dropdown  style={styles.Dropdownstyle}
                                // placeholder="Select an option"
                                data={inputFields.planningToOption}
                                labelField="label"
                                valueField="value"
                                value={inputFields.planningTo}
                                onChange={(item) => {
                                  setInputFields({
                                    ...inputFields,
                                    planningTo: item.value,
                                  });
                                }}             
                              />

            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btntxt}>Next</Text>
            </TouchableOpacity>
              </View>
        </View>
    </View>
  )
}

export default Loans

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    margin: 10,
    elevation:5,
    width:width*0.7,
    height:100

  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  container:{
    backgroundColor:"#E5E1E1",
    width:width*0.9,
    height:"auto",
    alignSelf:"center",
    borderRadius:10,
    elevation:5,
  },
  whiteContainer:{
    backgroundColor:"white",
    height:100,
    paddingLeft:30,
    width:width*0.9,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    elevation:5

  },
  text:{
    fontSize:30,
    color:"#0384d5",
    fontWeight:"bold",
    top:15
  },
  input: {
    width: width * 0.8,
    height: 45,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
    alignSelf:"center",
    // top:20
    marginTop: 10,

  },
  input1: {
    marginTop: 10,
    width: width * 0.8,
    alignSelf: "center",
    height: 45,
    backgroundColor: "#E5E1E1",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 10,
    // padding:10
  },
  phonestyle: {
    height: 45,
    padding:10,
  },
  phonestyle1: {
    height:20,
  },
  textStyle:{
    backgroundColor:"#E5E1E1",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  Dropdownstyle:{
     height: 50, 
     width: width*0.8,
     borderColor: "#c0c0c0",
     borderWidth:0.8,
     borderRadius:10,
     alignSelf:"center",
     margin:15,
     padding:10
  },
  btn:{
    backgroundColor:"#0384d5",
    height:30,
    width:width*0.25,
    alignSelf:"flex-end",
    marginRight:10,
    justifyContent:"center",
    borderRadius:10,
    marginBottom:50
  },
  btntxt:{
    color:"white",
    fontWeight:"bold",
    fontSize:18,
    alignSelf:"center",
    justifyContent:"center",
  }
})