import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'

import {educationDetails} from "../../Api/AfterLogin"

const EducationDetailsView = () => {
	const user = useSelector(state=>state.user)
	const[educationData,setEducationData]=useState([]);

	const handleAddClick = () => {
		const values = [...educationData];
		values.push({ 
		educationLevel: "",
		instituteName: "",
		instituteAddress: "",
		startDate: "",
		endDate: "",
		marksGained: "",
		scale: "",
		boardOfStudy: "",
		numberOfBacklogs: "",
	});
		setEducationData(values);  
};

const [showStateDatePicker,setShowStateDatePicker] = useState(false);
const [showEndDatePicker,setShowEndDatePicker] = useState(false);
const [Date,setDate] = useState(new  Date());
const [mode,setMode] = useState('date');

useEffect(()=>{
	educationDetails(85001)
	.then(function(response){
		console.log(response);
		setEducationData(response)
	})
	.catch(function (error) {
	  console.log("Error!");
	});
},[])
		return (
				<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
						<Text>EducationDetailsView</Text>
						{educationData.map((val,index)=>{
    return(
        <Text>{val.educationLevel}</Text>
								<View>
                    <View style={styles.emailinput}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ alignSelf: "center", top: 1 }}>
                          <Text style={{ fontSize: 18 }}>Study Level</Text>
                        </View>
                        <View style={{ alignSelf: "center", top: 1 }}>
                          <Dropdown
                            style={{
                              width: width * 0.4,
                              paddingHorizontal: 15,
                            }}
                            inputSearchStyle={{ fontSize: 18 }}
                            iconStyle={{ width: 30, height: 30 }}
                            selectedTextStyle={{ fontSize: 18 }}
                            placeholder="PG or UG"
                            data={inputFields.degreeSelectOption}
                            labelField="label"
                            valueField="value"
                            // value={inputFields.degreeSelect}
                            // // onValueChange={(itemValue) => setFeeToParticipate(itemValue)}
                            // onChange={(item) => {
                            //   setInputFields({
                            //     ...inputFields,
                            //     degreeSelect: item.value,
                            //   });
                            //   // setWhatsappNotification(item.value);
                            //   console.log("selected", item);
                            // }}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.rowContainer3}>
                      <View style={[styles.input, { width: width * 0.41 }]}>
                        {showStateDatePicker && (
                          <DatePicker
                            testID="DatePicker"
                            value={Date}
                            mode={mode}
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date()} // Disable future years
                            onChange={onChangeCollegeStartDate}
                          />
                        )}
                        <TouchableOpacity
                          onPress={() => showCollegeStartDateMode("date")}
                          style={styles.dateInput}
                        >
                          <View
                            style={{
                              alignSelf: "flex-start",
                              left: 8,
                              justifyItem: "center",
                            }}
                          >
                            <Text style={styles.dateField}>
                              {val.stateDate}
                            </Text>
                          </View>
                          <View style={{ alignSelf: "flex-end", left: -14 }}>
                            <FontAwesome5 name={"calendar-alt"} size={18} />
                          </View>
                        </TouchableOpacity>
                      </View>

                      <View style={[styles.input, { width: width * 0.41 }]}>
                        {showEndDatePicker && (
                          <DatePicker
                            testID="DatePicker"
                            value={Date}
                            mode={mode}
                            display="default"
                            is24Hour={true}
                            maximumDate={new Date()} // Disable future years
                            onChange={onChangeCollegeEndDate}
                          />
                        )}
                        <TouchableOpacity
                          onPress={() => showCollegeEndDateMode("date")}
                          style={styles.dateInput}
                        >
                          <View
                            style={{
                              alignSelf: "flex-start",
                              left: 6,
                              justifyItem: "center",
                            }}
                          >
                            <Text style={styles.dateField}>
                              {val.endDate}
                            </Text>
                          </View>
                          <View style={{ alignSelf: "flex-end", left: -12 }}>
                            <FontAwesome5 name={"calendar-alt"} size={18} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TextInput
                      style={styles.emailinput}
                      placeholder="Name of the college"
                      value={valinstituteName}
                      // onChange={(text) =>
                      //   setInputFields({ ...inputFields, collegeName: text })
                      // }
                    />
                    <TextInput
                      style={styles.emailinput}
                      placeholder="College Address"
                      value={inputFields.collegeAddress}
                      onChange={(text) =>
                        setInputFields({ ...inputFields, collegeAddress: text })
                      }
                    />
                    <View style={styles.rowContainer3}>
                      <TextInput
                        style={[styles.input, { width: width * 0.41 }]}
                        placeholder="Marks gained"
                        value={inputFields.collegeMarks}
                        onChange={(text) =>
                          setInputFields({ ...inputFields, collegeMarks: text })
                        }
                      />
                      <TextInput
                        style={[styles.input, { width: width * 0.41 }]}
                        placeholder="Scale"
                        value={inputFields.collegeScale}
                        onChange={(text) =>
                          setInputFields({ ...inputFields, collegeScale: text })
                        }
                      />
                    </View>
                  </View>
				)
			}
		)
		}
				</View>
		)
}

export default EducationDetailsView

const styles = StyleSheet.create({


})