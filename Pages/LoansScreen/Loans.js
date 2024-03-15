import { StyleSheet, Text, View,Dimensions,Animated,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React,{useRef,useState} from 'react'
import Carousel, { Pagination } from "react-native-snap-carousel";
import PhoneInput from "react-native-phone-number-input";
import { Dropdown } from "react-native-element-dropdown";
import NamePage from './NamePage';
import DocUpload from './DocUpload';
import Co_Application from './Co_Application';
import Work_Experience from './Work_Experience';
import References from './References';
import Choose_Bank from './Choose_Bank';

const { width, height } = Dimensions.get("window");
const SPACING = 40;
const ITEM_SIZE = width * 0.7;


const Loans = () => {

  const isCarousel = useRef(null);
  const [index, setIndex] = useState(0);
  const [Selection,setSelection] = useState(2)


  var endHeight = 3000;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    // Add more items as needed
  ];

  const rendercoursel = ({ item }) => {
    const inputRange = [
      (index - 0.9) * ITEM_SIZE,
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

  const changeView = (data)=>{
    setSelection(data)
  }

  return (
    <View>
      {/* coursel start */}
      <View style={{margin:10}}>
            <Carousel
                  data={data}
                  renderItem={rendercoursel}
                  sliderWidth={ITEM_SIZE+110}
                  itemWidth={300}
                  onSnapToItem={(index) => setIndex(index)}
                  // autoplay={true}
                  loop={true}
                  layout={"default"}
                  layoutCardOffset={20}
                  ref={isCarousel}
              />

            <View style={{ marginTop: -15 }}>
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

          <ScrollView>
              {Selection==1?<NamePage changeView={changeView}/>:null}
              {Selection==2?<DocUpload changeView={changeView}/>:null}
              {Selection==3?<Co_Application changeView={changeView}/>:null}
              {Selection==4?<Work_Experience changeView={changeView}/>:null}
              {Selection==5?<References changeView={changeView}/>:null}
              {Selection==5?<Choose_Bank changeView={changeView}/>:null}
          </ScrollView>

    </View>
  )
}

export default Loans

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    elevation:5,
    width:width*0.7,
    height:100,
    left:-20

  }
})