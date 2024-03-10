import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const { height, width } = Dimensions.get("window");
import { RadioButton, Button } from "react-native-paper";
import DatePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";

const ProfileDetails = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contactNumber: "",
    genderSelect: "",
    email: "",
    whatsappNumber: "",
    maritalStatus: "",
    selectedOption: "",

    passportNumber: "",
    date: new Date(),
    show: false,
    text: "dd/mm/yyyy",
    mode: "date",
    countryBirth: "",
    date1: new Date(),
    show1: false,
    text1: "dd/mm/yyyy",
    mode1: "date",

    streetName: "",
    city: "",
    district: "",
    state: "",
    country: "",
    pincode: "",

    emergencyName: "",
    emergencyEmail: "",
    emergencyNumber: "",
    emergencyRelation: "",
    emergencyStreet: "",
    emergencyState: "",
    emergencyCity: "",
    emergencyDistrict: "",

    degreeSelect: "",
    degreeSelectOption: [
      { label: "UG", value: "UG" },
      { label: "PG", value: "PG" },
    ],
    date2: new Date(),
    show2: false,
    text2: "Starts From",
    mode2: "date",
    date3: new Date(),
    show3: false,
    text3: "End to",
    mode3: "date",
    collegeName: "",
    collegeAddress: "",
    collegeMarks: "",
    collegeScale: "",

    interSelect: "",
    interSelectOption: [
      { label: "INTERMEDIATE", value: "INTERMEDIATE" },
      { label: "DIPLOMA", value: "DIPLOMA" },
    ],
    date4: new Date(),
    show4: false,
    text4: "Starts From",
    mode4: "date",
    interCollegeName: "",
    interCollegeAddress: "",
    date5: new Date(),
    show5: false,
    text5: "End To ",
    mode5: "date",
    intermarks: "",
    interScale: "",

    schoolSelect: "",
    schoolSelectOption: [
      { label: "SSC", value: "SSC" },
      { label: "CBSE", value: "CBSE" },
    ],
    date6: new Date(),
    show6: false,
    text6: "Starts From",
    mode6: "date",
    schoolName: "",
    schoolAddress: "",
    date7: new Date(),
    show7: false,
    text7: "End To ",
    mode7: "date",
    schoolmarks: "",
    schoolScale: "",
  });

  //----------------Issue Date Start-----------------//

  const onChange = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show: Platform.OS === "ios",
      date: currentDate,
      text: fDate,
    });
  };
  const showMode = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show: !inputFields.show,
      mode: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------Issue Date End-----------------//

  //----------------Expiry Date Start-----------------//

  const onChange1 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date1;

    let tempDate = new Date(currentDate);
    let fDate1 =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    // setText(fDate);
    setInputFields({
      ...inputFields,
      show1: Platform.OS === "ios",
      date1: currentDate,
      text1: fDate1,
    });

    // setInputFields({...inputFields,});
    //console.log(fDate);
    // seterrorDOBInput(false)
  };
  const showMode1 = (currentMode1) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show1: !inputFields.show1,
      mode1: currentMode1,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------Expiry Date End-----------------//

  //----------------College Start-----------------//

  const onChange2 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date2;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show2: Platform.OS === "ios",
      date: currentDate,
      text2: fDate,
    });
  };
  const showMode2 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show2: !inputFields.show2,
      mode2: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------College Start-----------------//

  //----------------college end-----------------//

  const onChange3 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date3;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show3: Platform.OS === "ios",
      date3: currentDate,
      text3: fDate,
    });
  };
  const showMode3 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show3: !inputFields.show3,
      mode3: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------College End-----------------//

  //----------------inter start-----------------//

  const onChange4 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date4;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show4: Platform.OS === "ios",
      date4: currentDate,
      text4: fDate,
    });
  };
  const showMode4 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show4: !inputFields.show4,
      mode4: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------inter start-----------------//

  //----------------inter end-----------------//

  const onChange5 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date5;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show5: Platform.OS === "ios",
      date5: currentDate,
      text5: fDate,
    });
  };
  const showMode5 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show5: !inputFields.show5,
      mode5: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------inter End-----------------//

  //----------------school start-----------------//

  const onChange6 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date6;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show6: Platform.OS === "ios",
      date6: currentDate,
      text6: fDate,
    });
  };
  const showMode6 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show6: !inputFields.show6,
      mode6: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------school start-----------------//

  //----------------school end-----------------//

  const onChange7 = (event, selectDate) => {
    const currentDate = selectDate || inputFields.date7;

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setInputFields({
      ...inputFields,
      show7: Platform.OS === "ios",
      date7: currentDate,
      text7: fDate,
    });
  };
  const showMode7 = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      show7: !inputFields.show7,
      mode7: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
  //----------------school End-----------------//

  return (
    <View>
      <ScrollView>
        <View style={styles.personalDetailsContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.detailsView}>
              <View style={styles.details}>
                <Text style={styles.detailstext}>Personal Details</Text>
              </View>
              <TouchableOpacity>
                <FontAwesome5
                  name="edit"
                  size={15}
                  style={{ alignSelf: "center", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.saveView}>
              <TouchableOpacity style={styles.savebtn}>
                <Text style={styles.savetext}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelView}>
              <TouchableOpacity style={styles.cancelbtn}>
                <Text style={styles.canceltext}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Name */}
          <View>
            <View style={{ width: width * 0.95, left: 5 }}>
              <View style={styles.rowContainer}>
                <Text style={{ top: 5, left: 3 }}>Name: </Text>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  value={inputFields.firstName}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, firstName: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Middle Name"
                  value={inputFields.middleName}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, middleName: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Last Name"
                  value={inputFields.lastName}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, lastName: text })
                  }
                />
              </View>
            </View>

            <View style={{ width: width * 0.95 }}>
              <View style={styles.rowContainer}>
                <Text>Contact Number: </Text>
                <TextInput
                  style={styles.Contactinput}
                  placeholder="+0 0000 00000"
                  value={inputFields.contactNumber}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, contactNumber: number })
                  }
                />
                <Text style={{ marginTop: 3 }}>Gender: </Text>
                <View style={{ marginTop: -5, marginLeft: -10 }}>
                  <RadioButton.Group
                    onValueChange={(value) =>
                      setInputFields({ ...inputFields, genderSelect: value })
                    }
                    value={inputFields.genderSelect}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <RadioButton
                        value="MALE"
                        default="true"
                        color="#007AFF"
                      />
                      <Text style={{ marginTop: 8, marginLeft: -4 }}>M</Text>
                      <RadioButton value="FEMALE" color="#007AFF" />
                      <Text style={{ marginTop: 8, marginLeft: -4 }}>F</Text>
                    </View>
                  </RadioButton.Group>
                </View>
              </View>
            </View>

            <View style={{ width: width * 0.95 }}>
              <View style={styles.rowContainer}>
                <Text>Email: </Text>
                <TextInput
                  style={styles.emailinput}
                  placeholder="abc@gmail.com"
                  value={inputFields.email}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, email: text })
                  }
                />
                <Text style={{ marginTop: 3 }}>Marital Status </Text>
              </View>
            </View>

            <View style={{ width: width * 0.95 }}>
              <View style={styles.rowContainer}>
                <Text>Whatsapp Number: </Text>
                <TextInput
                  style={styles.whatsappinput}
                  placeholder="+0 0000 00000"
                  value={inputFields.whatsappNumber}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, whatsappNumber: number })
                  }
                />

                <View style={styles.container}>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      inputFields.selectedOption === "yes" &&
                        styles.selectedButton,
                    ]}
                    // onPress={() => setSelectedOption('yes')}
                    onPress={() =>
                      setInputFields({ ...inputFields, selectedOption: "yes" })
                    }
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        inputFields.selectedOption === "yes" &&
                          styles.selectedButtonText,
                      ]}
                    >
                      Yes
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.button,
                      inputFields.selectedOption === "no" &&
                        styles.selectedButton,
                    ]}
                    // onPress={() => setSelectedOption('no')}
                    onPress={() =>
                      setInputFields({ ...inputFields, selectedOption: "no" })
                    }
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        inputFields.selectedOption === "no" &&
                          styles.selectedButtonText,
                      ]}
                    >
                      No
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#c0c0c0",
              borderBottomWidth: 1.5,
              margin: 15,
            }}
          />

          {/* Passport Number and Country of Birth */}
          <View>
            <View style={{ width: width * 0.95 }}>
              <View style={styles.rowContainer}>
                <Text style={{ width: width * 0.15 }}>Passport Number</Text>
                <TextInput
                  style={styles.Contactinput}
                  // placeholder='+0 0000 00000'
                  value={inputFields.passportNumber}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, passportNumber: number })
                  }
                />
                <Text>Issue Date</Text>
                {inputFields.show && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date}
                    mode={inputFields.mode}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange}
                  />
                )}
                {!inputFields.show && (
                  <TouchableOpacity
                    onPress={() => showMode("date")}
                    style={styles.inputbox1}
                  >
                    <Text style={styles.dateField}>{inputFields.text}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{ width: width * 0.95 }}>
              <View style={styles.rowContainer}>
                <Text style={{ width: width * 0.15 }}>Country of Birth</Text>
                <TextInput
                  style={styles.Contactinput}
                  // placeholder='+0 0000 00000'
                  value={inputFields.countryBirth}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, countryBirth: text })
                  }
                />
                <Text>Expiry Date</Text>
                {inputFields.show1 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date1}
                    mode={inputFields.mode1}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange1}
                  />
                )}
                {!inputFields.show1 && (
                  <TouchableOpacity
                    onPress={() => showMode1("date")}
                    style={styles.inputbox1}
                  >
                    <Text style={styles.dateField}>{inputFields.text1}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#c0c0c0",
              borderBottomWidth: 1.5,
              margin: 15,
            }}
          />

          {/* Address */}
          <View style={{ width: width * 0.95 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: width * 0.15 }}>
                <Text style={{ marginLeft: 10 }}>Address</Text>
              </View>
              <View
                style={{
                  width: width * 0.8,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Street"
                  value={inputFields.streetName}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, streetName: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={inputFields.city}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, city: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="District"
                  value={inputFields.district}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, district: text })
                  }
                />
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ width: width * 0.15 }}>
                {/* <Text style={{marginLeft:10}}>Address</Text> */}
              </View>
              <View
                style={{
                  width: width * 0.8,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TextInput
                  style={styles.input}
                  placeholder="State"
                  value={inputFields.state}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, state: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  value={inputFields.country}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, country: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Pincode"
                  value={inputFields.pincode}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, pincode: number })
                  }
                />
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#c0c0c0",
              borderBottomWidth: 1.5,
              margin: 15,
            }}
          />

          {/* Emergency Address */}
          <View style={{ width: width * 0.95 }}>
            <View style={styles.columnContainer}>
              <View style={{ width: width * 0.65 }}>
                <View style={styles.rowContainer}>
                  <Text> Emergency Contact</Text>
                  <TextInput
                    style={styles.input1}
                    placeholder="Name"
                    value={inputFields.emergencyName}
                    onChangeText={(text) =>
                      setInputFields({ ...inputFields, emergencyName: text })
                    }
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text> Email Id</Text>
                  <TextInput
                    style={styles.emailinput}
                    placeholder="Email Id"
                    value={inputFields.emergencyEmail}
                    onChangeText={(text) =>
                      setInputFields({ ...inputFields, emergencyEmail: text })
                    }
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text> Contact Number</Text>
                  <TextInput
                    style={styles.Contactinput1}
                    placeholder="Contact Number"
                    value={inputFields.emergencyNumber}
                    onChangeText={(text) =>
                      setInputFields({ ...inputFields, emergencyNumber: text })
                    }
                  />
                </View>
                <View style={styles.rowContainer}>
                  <Text> Relation</Text>
                  <TextInput
                    style={styles.emailinput}
                    placeholder="Email Id"
                    value={inputFields.emergencyEmail}
                    onChangeText={(text) =>
                      setInputFields({ ...inputFields, emergencyEmail: text })
                    }
                  />
                </View>
              </View>
              <View style={{ width: width * 0.65 }}>
                <Text>Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Street"
                  value={inputFields.emergencyStreet}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, emergencyStreet: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="State"
                  value={inputFields.emergencyState}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, emergencyState: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  value={inputFields.emergencyCity}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, emergencyCity: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="District"
                  value={inputFields.emergencyDistrict}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, emergencyDistrict: text })
                  }
                />
              </View>
            </View>
          </View>
        </View>

        {/* Educational Details */}
        <View style={styles.personalDetailsContainer}>
          <View style={styles.rowContainer}>
            <View style={styles.detailsView}>
              <View style={styles.details}>
                <Text style={styles.detailstext}>Educational Details</Text>
              </View>
              <TouchableOpacity>
                <FontAwesome5
                  name="edit"
                  size={15}
                  style={{ alignSelf: "center", margin: 3 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.saveView}>
              <TouchableOpacity style={styles.savebtn}>
                <Text style={styles.savetext}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cancelView}>
              <TouchableOpacity style={styles.cancelbtn}>
                <Text style={styles.canceltext}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* PG/UG */}
          <View>
            <View style={{ width: width * 0.95, left: 5 }}>
              <View style={styles.rowContainer}>
                <Text style={{ top: 5, left: 3 }}>PG/UG : </Text>
                <View style={styles.dropdownStatus}>
                  <Dropdown
                    style={styles.input}
                    placeholder="Choose"
                    data={inputFields.degreeSelectOption}
                    labelField="label"
                    valueField="value"
                    value={inputFields.degreeSelect}
                    // onValueChange={(itemValue) => setFeeToParticipate(itemValue)}
                    onChange={(item) => {
                      setInputFields({
                        ...inputFields,
                        degreeSelect: item.value,
                      });
                      // setWhatsappNotification(item.value);
                      console.log("selected", item);
                    }}
                  />
                </View>

                {inputFields.show2 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date2}
                    mode={inputFields.mode2}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange2}
                  />
                )}
                {!inputFields.show2 && (
                  <TouchableOpacity
                    onPress={() => showMode2("date")}
                    style={styles.inputbox2}
                  >
                    <Text style={styles.dateField}>{inputFields.text2}</Text>
                  </TouchableOpacity>
                )}

                {inputFields.show3 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date3}
                    mode={inputFields.mode3}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange3}
                  />
                )}
                {!inputFields.show3 && (
                  <TouchableOpacity
                    onPress={() => showMode3("date")}
                    style={styles.inputbox3}
                  >
                    <Text style={styles.dateField}>{inputFields.text3}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{ width: width * 0.95, paddingHorizontal: 10 }}>
              <View style={styles.rowContainer}>
                <Text> Name of the College: </Text>
                <TextInput
                  style={styles.collegeNameinput}
                  placeholder="College Name"
                  value={inputFields.collegeName}
                  keyboardType="number-pad"
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, collegeName: text })
                  }
                />
              </View>

              <View style={styles.rowContainer}>
                <Text> College Address: </Text>
                <TextInput
                  style={styles.collegeAddressinput}
                  placeholder="College Address"
                  value={inputFields.collegeAddress}
                  keyboardType="number-pad"
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, collegeName: text })
                  }
                />
              </View>

              <View style={styles.rowContainer}>
                <Text> Marks Gained: </Text>
                <TextInput
                  style={styles.marksgainedinput}
                  placeholder="Marks"
                  value={inputFields.collegeMarks}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, collegeMarks: number })
                  }
                />
                <Text> Scale: </Text>
                <TextInput
                  style={styles.marksgainedinput}
                  placeholder="Scale"
                  value={inputFields.collegeScale}
                  keyboardType="number-pad"
                  onChangeText={(number) =>
                    setInputFields({ ...inputFields, collegeScale: number })
                  }
                />
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#c0c0c0",
              borderBottomWidth: 1.5,
              margin: 15,
            }}
          />

          {/* Intermediate/Diploma */}
          <View>
            <View style={{ width: width * 0.95, left: 5 }}>
              <View style={styles.rowContainer}>
                <Text style={{ top: 5, left: 3 }}>
                  Intermediate / Diploma :{" "}
                </Text>
                <View style={styles.dropdownStatus}>
                  <Dropdown
                    style={styles.input}
                    placeholder="Choose"
                    data={inputFields.interSelectOption}
                    labelField="label"
                    valueField="value"
                    value={inputFields.interSelect}
                    // onValueChange={(itemValue) => setFeeToParticipate(itemValue)}
                    onChange={(item) => {
                      setInputFields({
                        ...inputFields,
                        interSelect: item.value,
                      });
                      // setWhatsappNotification(item.value);
                      console.log("selected", item);
                    }}
                  />
                </View>

                {inputFields.show4 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date4}
                    mode={inputFields.mode4}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange4}
                  />
                )}
                {!inputFields.show4 && (
                  <TouchableOpacity
                    onPress={() => showMode4("date")}
                    style={styles.inputbox2}
                  >
                    <Text style={styles.dateField}>{inputFields.text4}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{ width: width * 0.95, paddingHorizontal: 10 }}>
              <View style={styles.rowContainer}>
                <Text> Name of the College: </Text>
                <TextInput
                  style={styles.collegeinput2}
                  placeholder="College Name"
                  value={inputFields.collegeName}
                  keyboardType="number-pad"
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, collegeName: text })
                  }
                />
                {inputFields.show5 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date5}
                    mode={inputFields.mode5}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange5}
                  />
                )}
                {!inputFields.show5 && (
                  <TouchableOpacity
                    onPress={() => showMode5("date")}
                    style={styles.inputbox3}
                  >
                    <Text style={styles.dateField}>{inputFields.text5}</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={{ top: -8 }}>
                <View style={styles.rowContainer}>
                  <Text> College Address: </Text>
                  <TextInput
                    style={styles.collegeAddressinput}
                    placeholder="College Address"
                    value={inputFields.interCollegeAddress}
                    keyboardType="number-pad"
                    onChangeText={(text) =>
                      setInputFields({
                        ...inputFields,
                        interCollegeAddress: text,
                      })
                    }
                  />
                </View>

                <View style={styles.rowContainer}>
                  <Text> Marks Gained: </Text>
                  <TextInput
                    style={styles.marksgainedinput}
                    placeholder="Marks"
                    value={inputFields.intermarks}
                    keyboardType="number-pad"
                    onChangeText={(number) =>
                      setInputFields({ ...inputFields, intermarks: number })
                    }
                  />
                  <Text> Scale: </Text>
                  <TextInput
                    style={styles.marksgainedinput}
                    placeholder="Scale"
                    value={inputFields.interScale}
                    keyboardType="number-pad"
                    onChangeText={(number) =>
                      setInputFields({ ...inputFields, interScale: number })
                    }
                  />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "#c0c0c0",
              borderBottomWidth: 1.5,
              margin: 15,
            }}
          />

          {/* SSC / CBSE */}

          <View>
            <View style={{ width: width * 0.95, left: 5 }}>
              <View style={styles.rowContainer}>
                <Text style={{ top: 5, left: 3 }}>SSC/CBSE : </Text>
                <View style={styles.dropdownStatus}>
                  <Dropdown
                    style={styles.schoolinputdropdown}
                    placeholder="Choose"
                    data={inputFields.schoolSelectOption}
                    labelField="label"
                    valueField="value"
                    value={inputFields.schoolSelect}
                    // onValueChange={(itemValue) => setFeeToParticipate(itemValue)}
                    onChange={(item) => {
                      setInputFields({
                        ...inputFields,
                        schoolSelect: item.value,
                      });
                      // setWhatsappNotification(item.value);
                      console.log("selected", item);
                    }}
                  />
                </View>

                {inputFields.show6 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date6}
                    mode={inputFields.mode6}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange6}
                  />
                )}
                {!inputFields.show6 && (
                  <TouchableOpacity
                    onPress={() => showMode6("date")}
                    style={styles.inputbox2}
                  >
                    <Text style={styles.dateField}>{inputFields.text6}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            <View style={{ width: width * 0.95, paddingHorizontal: 10 }}>
              <View style={styles.rowContainer}>
                <Text> Name of the School: </Text>
                <TextInput
                  style={styles.collegeinput2}
                  placeholder="School Name"
                  value={inputFields.schoolName}
                  onChangeText={(text) =>
                    setInputFields({ ...inputFields, schoolName: text })
                  }
                />
                {inputFields.show7 && (
                  <DatePicker
                    testID="DatePicker"
                    value={inputFields.date7}
                    mode={inputFields.mode7}
                    display="default"
                    is24Hour={true}
                    maximumDate={new Date()} // Disable future years
                    onChange={onChange7}
                  />
                )}
                {!inputFields.show7 && (
                  <TouchableOpacity
                    onPress={() => showMode7("date")}
                    style={styles.inputbox3}
                  >
                    <Text style={styles.dateField}>{inputFields.text7}</Text>
                  </TouchableOpacity>
                )}
              </View>

              <View style={{ top: -8 }}>
                <View style={styles.rowContainer}>
                  <Text> School Address: </Text>
                  <TextInput
                    style={styles.collegeAddressinput}
                    placeholder="School Address"
                    value={inputFields.schoolAddress}
                    onChangeText={(text) =>
                      setInputFields({ ...inputFields, schoolAddress: text })
                    }
                  />
                </View>

                <View style={styles.rowContainer}>
                  <Text> Marks Gained: </Text>
                  <TextInput
                    style={styles.marksgainedinput}
                    placeholder="Marks"
                    value={inputFields.schoolmarks}
                    keyboardType="number-pad"
                    onChangeText={(number) =>
                      setInputFields({ ...inputFields, schoolmarks: number })
                    }
                  />
                  <Text> Scale: </Text>
                  <TextInput
                    style={styles.marksgainedinput}
                    placeholder="Scale"
                    value={inputFields.schoolScale}
                    keyboardType="number-pad"
                    onChangeText={(number) =>
                      setInputFields({ ...inputFields, schoolScale: number })
                    }
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  personalDetailsContainer: {
    width: width * 0.95,
    height: "auto",
    borderRadius: 10,
    alignSelf: "center",
    backgroundColor: "white",
    elevation: 5,
    paddingBottom: 10,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  detailsView: {
    backgroundColor: "#c0c0c0",
    width: width * 0.43,
    borderRadius: 20,
    elevation: 5,
    padding: 3,
    flexDirection: "row",
  },
  details: {
    backgroundColor: "#0384d5",
    width: width * 0.35,
    borderRadius: 15,
  },
  saveView: {
    backgroundColor: "white",
    width: width * 0.23,
    borderRadius: 20,
    elevation: 5,
    padding: 5,
  },
  savebtn: {
    backgroundColor: "green",
    width: width * 0.21,
    borderRadius: 15,
    alignSelf: "center",
    padding: 2,
  },
  cancelView: {
    backgroundColor: "white",
    width: width * 0.23,
    borderRadius: 15,
    elevation: 5,
    padding: 5,
  },
  cancelbtn: {
    backgroundColor: "red",
    width: width * 0.21,
    borderRadius: 15,
    alignSelf: "center",
    padding: 2,
  },
  detailstext: {
    alignSelf: "center",
    color: "white",
    top: 2,
  },
  savetext: {
    alignSelf: "center",
    color: "white",
  },
  canceltext: {
    alignSelf: "center",
    color: "white",
  },
  input: {
    height: 25,
    width: width * 0.24,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    margin: 5,
  },
  schoolinputdropdown: {
    height: 25,
    width: width * 0.4,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    margin: 5,
  },
  input1: {
    height: 25,
    width: width * 0.35,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    margin: 5,
  },
  collegeNameinput: {
    height: 25,
    width: width * 0.6,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    // margin:5
  },
  collegeinput2: {
    height: 25,
    width: width * 0.28,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    // margin:5,
    // marginBottom:-5,
    // marginLeft:5,
    right: 7,
  },
  collegeAddressinput: {
    height: 25,
    width: width * 0.65,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
  },
  marksgainedinput: {
    height: 25,
    width: width * 0.26,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
  },
  Contactinput: {
    height: 25,
    width: width * 0.25,
    paddingHorizontal: 2,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    marginLeft: -10,
  },
  Contactinput1: {
    height: 25,
    width: width * 0.4,
    paddingHorizontal: 2,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    // marginLeft:-10
  },
  whatsappinput: {
    height: 25,
    width: width * 0.35,
    paddingHorizontal: 2,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    marginLeft: -10,
  },
  radioGroup: {
    flexDirection: "row",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20, // Adjust margin as needed
  },
  emailinput: {
    height: 25,
    width: width * 0.5,
    paddingHorizontal: 5,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
  },

  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
  },
  button: {
    paddingHorizontal: 10,
    // paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#808080",
  },
  buttonText: {
    color: "#808080",
  },
  selectedButton: {
    backgroundColor: "#808080",
  },
  selectedButtonText: {
    color: "white",
  },
  inputbox1: {
    width: width * 0.2,
    marginTop: 15,
    flexDirection: "row",
    // marginLeft: 10,
    alignSelf: "center",
    // justifyContent:"space-evenly"
  },
  inputbox2: {
    width: width * 0.26,
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 10,
    alignSelf: "center",
    // justifyContent:"space-evenly"
  },
  inputbox3: {
    width: width * 0.26,
    marginTop: 15,
    flexDirection: "row",
    // marginLeft: 5,
    alignSelf: "center",
    // justifyContent:"space-evenly"
  },
  dateField: {
    height: 25,
    width: width * 0.25,
    paddingVertical: 2,
    borderColor: "black",
    borderWidth: 0.3,
    borderRadius: 5,
    marginLeft: -10,
    top: -15,
    textAlign: "center",
  },
  columnContainer: {
    flexDirection: "row",
  },
});
