import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Octicon from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import * as Progress from "react-native-progress";
import PhoneInput from "react-native-phone-number-input";
import { RadioButton, Button, Checkbox } from "react-native-paper";
import DatePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";

const { height, width } = Dimensions.get("window" || "screen");

const Profile = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    whatsappNumber: "",
    countryCode: "",
    maritalStatus: "",
    passportNumber: "",
    genderSelect: "",
    IssueDate: "Issue Date",
    mode: "date",
    showIssueDate: false,
    date: new Date(),
    ExpiryDate: "Expiry Date",
    showExpiryDate: false,
    address: "",
    state: "",
    pincode: "",

    emergencyContactName: "",
    emergencyNumber: "",
    emergencyEmail: "",
    emergencyRelation: "",
    emergencyAddress: "",
    emergencyState: "",
    emergencyPincode: "",

				degreeSelect: "",
    degreeSelectOption: [
      { label: "UG", value: "UG" },
      { label: "PG", value: "PG" },
    ],
				collegeName: "",
    collegeAddress: "",
    collegeMarks: "",
    collegeScale: "",
				collegeStartDate:"Start from",
				showCollegeStartDate:false,
				collegeEndDate:"End to",
				showCollegeEndDate:false,

				interSelect: "",
    interSelectOption: [
      { label: "INTERMEDIATE", value: "INTERMEDIATE" },
      { label: "DIPLOMA", value: "DIPLOMA" },
    ],
				interCollegeName: "",
    interCollegeAddress: "",
				intermarks: "",
    interScale: "",
				interStartDate:"Start from",
				showInterStartDate:false,
				interEndDate:"End to",
				showInterEndDate:false,

				schoolSelect: "",
    schoolSelectOption: [
      { label: "SSC", value: "SSC" },
      { label: "CBSE", value: "CBSE" },
    ],
				schoolName: "",
    schoolAddress: "",
				schoolmarks: "",
    schoolScale: "",
				schoolStartDate:"Start from",
				showSchoolStartDate:false,
				schoolEndDate:"End to",
				showSchoolEndDate:false,

        clientName:"",
        jobRole:"",
        jobStart:"Start from",
        showJobStart:false,
        jobEnd:"End to",
        showJobEnd:false,

        additionClientName:"",
        additionJobRole:"",
        additionJobStart:"Start from",
        showAdditionJobStart:false,
        additionJobEnd:"End to",
        showAdditionJobEnd:false,

        select:1,
        Listening:"",
        Speaking:"",
        Writing:"",
        Reading:"",
        DateofExamination:"Examination Date",
        showDateOfExam:false,
        TextValidUntil:"Text valid until",
        showTextValidUntil:false,
        overAllScore:"",

        Verbal:"",
        AWA:"",
        Quant:"",
        DateofExamination1:"Examination Date",
        showDateOfExam1:false,
        TextValidUntil1:"Text valid until",
        showTextValidUntil1:false,
        overAllScore1:"",


  });
  const [options,setOptions] = useState([])

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

  const handleWhatsappNumberChange = (value1) => {
    try {
      // setmobileNumber(value);
      // setInputFields({...inputFields,phoneNumber: value})
      // console.log(value)
      const callingCode = phoneInput.getCallingCode(value1);
      // console.log(callingCode);
      setInputFields({
        ...inputFields,
        whatsappNumber: value1,
        countryCode: callingCode,
      });

      // setcountryCode(callingCode);
    } catch (error) {
      // Handle any parsing errors
    }
  };

  const handleEmergencyNumberChange = (value) => {
    try {
      // setmobileNumber(value);
      // setInputFields({...inputFields,phoneNumber: value})
      // console.log(value)
      const callingCode = phoneInput.getCallingCode(value);
      // console.log(callingCode);
      setInputFields({
        ...inputFields,
        emergencyNumber: value,
        countryCode: callingCode,
      });

      // setcountryCode(callingCode);
    } catch (error) {
      // Handle any parsing errors
    }
  };

  // Issue Date  Picker //
  const onChangeIssueDate = (event, selectDate) => {
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
      showIssueDate: Platform.OS === "ios",
      date: currentDate,
      IssueDate: fDate,
    });
  };
  const showIssueMode = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      showIssueDate: !inputFields.showIssueDate,
      mode: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };
// Expiry Date //
  const onChangeExpiryDate = (event, selectDate) => {
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
      showExpiryDate: Platform.OS === "ios",
      date: currentDate,
      ExpiryDate: fDate,
    });
  };
  const showExpiryDateMode = (currentMode) => {
    // setShow(!show);
    setInputFields({
      ...inputFields,
      showExpiryDate: !inputFields.showExpiryDate,
      mode: currentMode,
    });
    // setMode(currentMode);
    // setInputFields({...inputFields,})
  };

		// college start date
		 
		const onChangeCollegeStartDate = (event, selectDate) => {
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
					showCollegeStartDate: Platform.OS === "ios",
					date: currentDate,
				 collegeStartDate: fDate,
			});
	};
	const showCollegeStartDateMode = (currentMode) => {
			// setShow(!show);
			setInputFields({
					...inputFields,
					showCollegeStartDate: !inputFields.showCollegeStartDate,
					mode: currentMode,
			});
			// setMode(currentMode);
			// setInputFields({...inputFields,})
	};

	// college end date

	const onChangeCollegeEndDate = (event, selectDate) => {
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
				showCollegeEndDate: Platform.OS === "ios",
				date: currentDate,
				collegeEndDate: fDate,
		});
};
const showCollegeEndDateMode = (currentMode) => {
		// setShow(!show);
		setInputFields({
				...inputFields,
				showCollegeEndDate: !inputFields.showCollegeEndDate,
				mode: currentMode,
		});
		// setMode(currentMode);
		// setInputFields({...inputFields,})
};

// inter  start date
const onChangeInterStartDate = (event, selectDate) => {
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
			showInterStartDate: Platform.OS === "ios",
			date: currentDate,
			interStartDate: fDate,
	});
};
const showInterStartDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showInterStartDate: !inputFields.showInterStartDate,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// inter end Date
const onChangeInterEndDate = (event, selectDate) => {
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
			showInterEndDate: Platform.OS === "ios",
			date: currentDate,
			interEndDate: fDate,
	});
};
const showInterEndDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showInterEndDate: !inputFields.showInterEndDate,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// school start date
const onChangeSchoolStartDate = (event, selectDate) => {
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
			showSchoolStartDate: Platform.OS === "ios",
			date: currentDate,
			schoolStartDate: fDate,
	});
};
const showSchoolStartDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showSchoolStartDate: !inputFields.showSchoolStartDate,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// school end date
const onChangeSchoolEndDate = (event, selectDate) => {
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
			showSchoolEndDate: Platform.OS === "ios",
			date: currentDate,
			schoolEndDate: fDate,
	});
};
const showSchoolEndDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showSchoolEndDate: !inputFields.showSchoolEndDate,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// Job Start
const onChangeJobStartDate = (event, selectDate) => {
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
			showJobStart: Platform.OS === "ios",
			date: currentDate,
			jobStart: fDate,
	});
};
const showJobStartDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showJobStart: !inputFields.showJobStart,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// job End
const onChangeJobEndDate = (event, selectDate) => {
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
			showJobEnd: Platform.OS === "ios",
			date: currentDate,
			jobEnd: fDate,
	});
};
const showJobEndDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showJobEnd: !inputFields.showJobEnd,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

//Addition Job Start
const onChangeAdditionJobStartDate = (event, selectDate) => {
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
			showAdditionJobStart: Platform.OS === "ios",
			date: currentDate,
			additionJobStart: fDate,
	});
};
const showAdditionJobStartDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showAdditionJobStart: !inputFields.showAdditionJobStart,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

//Addition job End
const onChangeAdditionJobEndDate = (event, selectDate) => {
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
			showAdditionJobEnd: Platform.OS === "ios",
			date: currentDate,
			additionJobEnd: fDate,
	});
};
const showAdditionJobEndDateMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showAdditionJobEnd: !inputFields.showAdditionJobEnd,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

//Date Of Examination
const onChangeDateofExamDate = (event, selectDate) => {
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
			showDateOfExam: Platform.OS === "ios",
			date: currentDate,
			DateofExamination: fDate,
	});
};
const showDateofExamMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showDateOfExam: !inputFields.showDateOfExam,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};
// Text valid until
const onChangeTestofExamDate = (event, selectDate) => {
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
			showTextValidUntil: Platform.OS === "ios",
			date: currentDate,
			TextValidUntil: fDate,
	});
};
const showTestofExamMode = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showTextValidUntil: !inputFields.showTextValidUntil,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

//Date Of Examination
const onChangeDateofExamDate1 = (event, selectDate) => {
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
			showDateOfExam1: Platform.OS === "ios",
			date: currentDate,
			DateofExamination1: fDate,
	});
};
const showDateofExamMode1 = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showDateOfExam1: !inputFields.showDateOfExam1,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};
// Text valid until
const onChangeTestofExamDate1 = (event, selectDate) => {
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
			showTextValidUntil1: Platform.OS === "ios",
			date: currentDate,
			TextValidUntil1: fDate,
	});
};
const showTestofExamMode1 = (currentMode) => {
	// setShow(!show);
	setInputFields({
			...inputFields,
			showTextValidUntil1: !inputFields.showTextValidUntil1,
			mode: currentMode,
	});
	// setMode(currentMode);
	// setInputFields({...inputFields,})
};

// checked options
const handleCheckboxChange = (value) => {
  if (options.includes(value)) {
    setOptions(options.filter(item => item !== value));
  } else {
    setOptions([...options, value]);
  }
};

  return (
    <View>
      <ScrollView>
        <SafeAreaView>
          <View style={{ backgroundColor: "white" }}>
            <View style={styles.container}></View>

            <View style={styles.rowContainer}>
              <View style={styles.editContainer}>
                <FontAwesome5
                  name="user-edit"
                  size={18}
                  color="#0384d5"
                  style={{ justifyContent: "center", alignSelf: "center" }}
                />
              </View>
              <View style={styles.likeContainer}>
                <Icon
                  name="heart"
                  size={25}
                  color="#0384d5"
                  style={{ justifyContent: "center", alignSelf: "center" }}
                />
              </View>
            </View>

            <View style={styles.imgView}>
              <Image
                source={require("../../assets/user.png")}
                style={styles.img}
              />
            </View>

            <View style={{ marginLeft: 20, width: width * 0.9 }}>
              <View style={styles.rowContainer1}>
                <View style={styles.editContainer1}>
                  <FontAwesome5
                    name="user"
                    size={15}
                    color="white"
                    style={{ justifyContent: "center", alignSelf: "center" }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Sai Krishna Dharmapuri</Text>
              </View>

              <View style={styles.rowContainer1}>
                <View style={styles.editContainer1}>
                  <FontAwesome5
                    name="phone"
                    size={13}
                    color="white"
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      top: 2,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>+91 9876543210</Text>
                <View style={styles.editContainer2}>
                  <Icon
                    name="people-outline"
                    size={15}
                    color="white"
                    style={{ justifyContent: "center", alignSelf: "center" }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>Male</Text>
              </View>

              <View style={styles.rowContainer1}>
                <View style={styles.editContainer1}>
                  <FontAwesome5
                    name="calendar-alt"
                    size={15}
                    color="white"
                    style={{ justifyContent: "center", alignSelf: "center" }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>12-07-1991</Text>
              </View>

              <View style={styles.rowContainer1}>
                <View style={styles.editContainer1}>
                  <Icon
                    name="mail"
                    size={15}
                    color="white"
                    style={{
                      justifyContent: "center",
                      alignSelf: "center",
                      top: 1,
                    }}
                  />
                </View>
                <Text style={{ fontSize: 18 }}>
                  somethingspecial18181@gmail.com
                </Text>
              </View>
            </View>
          </View>

          {/* Personal Details */}

          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.detailsView}>
                  <View style={styles.details}>
                    <Text style={styles.detailstext}>Personal Details</Text>
                  </View>

                  <Progress.Bar
                    progress={0.5}
                    width={width * 0.45}
                    color="#0384d5"
                    borderColor="#c0c0c0"
                    height={15}
                    style={styles.progressBar}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>45% completed</Text>
                  </View>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="eye"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="edit"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ margin: 10, width: width * 0.9 }}>
                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    value={inputFields.firstName}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, firstName: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    value={inputFields.lastName}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, lastName: text })
                    }
                  />
                </View>

                <PhoneInput
                  containerStyle={styles.input1}
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
                  style={styles.emailinput}
                  placeholder="Email"
                  value={inputFields.email}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, email: text })
                  }
                />

                <PhoneInput
                  containerStyle={styles.input1}
                  textInputStyle={styles.phonestyle}
                  codeTextStyle={styles.phonestyle1}
                  ref={(ref) => (phoneInput = ref)}
                  defaultValue={inputFields.whatsappNumber}
                  defaultCode="IN"
                  layout="first"
                  // autoFocus
                  onChangeText={handleWhatsappNumberChange}
                />

                <View style={styles.rowContainer4}>
                  <View style={styles.rowContainer6}>
                    <View style={{ alignSelf: "center"}}>
                      <Text>Marital Status</Text>
                    </View>
                    <View style={{  }}>
                      <RadioButton.Group
                        onValueChange={(value) =>
                          setInputFields({
                            ...inputFields,
                            maritalStatus: value,
                          })
                        }
                        value={inputFields.maritalStatus}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <RadioButton
                            value="YES"
                            default="true"
                            color="#007AFF"
                            style={{left:-30,right:-16}}
                          />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -4,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            Y
                          </Text>
                          <RadioButton value="NO" color="#007AFF" />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -4,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            N{" "}
                          </Text>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                  <View style={styles.rowContainer5}>
                    <View style={{ alignSelf: "center" }}>
                      <Text> Gender</Text>
                    </View>
                    <View style={{ alignSelf: "center" }}>
                      <RadioButton.Group
                        onValueChange={(value) =>
                          setInputFields({
                            ...inputFields,
                            genderSelect: value,
                          })
                        }
                        value={inputFields.genderSelect}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <RadioButton
                            value="MALE"
                            default="true"
                            color="#007AFF"
                          />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -3,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            M
                          </Text>
                          <RadioButton value="FEMALE" color="#007AFF" />
                          <Text
                            style={{
                              alignSelf: "center",
                              left: -3,
                              fontWeight: "800",
                              fontSize: 16,
                            }}
                          >
                            F{" "}
                          </Text>
                        </View>
                      </RadioButton.Group>
                    </View>
                  </View>
                </View>
                <TextInput
                  style={styles.emailinput}
                  placeholder="Country of Birth"
                  value={inputFields.passportNumber}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, passportNumber: text })
                  }
                />

                <TextInput
                  style={styles.emailinput}
                  placeholder="Passport Number"
                  value={inputFields.passportNumber}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, passportNumber: text })
                  }
                />

                <View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showIssueDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeIssueDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showIssueMode("date")}
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
                          {inputFields.IssueDate}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showExpiryDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeExpiryDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showExpiryDateMode("date")}
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
                          {inputFields.ExpiryDate}
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
                  placeholder="Address"
                  value={inputFields.address}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, address: text })
                  }
                />

                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="State"
                    value={inputFields.state}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, state: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Pincode"
                    value={inputFields.pincode}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, pincode: text })
                    }
                  />
                </View>

                <TextInput
                  style={styles.emailinput}
                  placeholder="Emergency Contact Name"
                  value={inputFields.emergencyContactName}
                  onChange={(text) =>
                    setInputFields({
                      ...inputFields,
                      emergencyContactName: text,
                    })
                  }
                />

                <PhoneInput
                  containerStyle={styles.input1}
                  textInputStyle={styles.phonestyle}
                  codeTextStyle={styles.phonestyle1}
                  ref={(ref) => (phoneInput = ref)}
                  defaultValue={inputFields.emergencyNumber}
                  defaultCode="IN"
                  layout="first"
                  // autoFocus
                  onChangeText={handleEmergencyNumberChange}
                />

                <TextInput
                  style={styles.emailinput}
                  placeholder="abcd@gmail.com"
                  value={inputFields.emergencyEmail}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, emergencyEmail: text })
                  }
                />
                <TextInput
                  style={styles.emailinput}
                  placeholder="Relationship"
                  value={inputFields.Relation}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, Relation: text })
                  }
                />
                <TextInput
                  style={styles.emailinput}
                  placeholder="Address"
                  value={inputFields.emergencyAddress}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, emergencyAddress: text })
                  }
                />
                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="State"
                    value={inputFields.emergencyState}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, emergencyState: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Pincode"
                    value={inputFields.emergencyPincode}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, emergencyPincode: text })
                    }
                  />
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.savebtn}>
                    <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelbtn}>
                    <Text style={styles.saveText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

                    {/* Education Details */}
          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.detailsView}>
                  <View style={styles.details}>
                    <Text style={styles.detailstext}>Educational Details</Text>
                  </View>

                  <Progress.Bar
                    progress={0.5}
                    width={width * 0.42}
                    color="#0384d5"
                    borderColor="#c0c0c0"
                    height={15}
                    style={styles.progressBar}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>45% completed</Text>
                  </View>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="eye"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="edit"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
														{/* College life */}
														<View>
														<View style={styles.emailinput}>
															<View style={{flexDirection:"row",justifyContent:"space-between"}}>
															 <View style={{alignSelf:"center",top:1}}>
																	<Text style={{fontSize:18}}>Study Level</Text>
																</View>
																<View style={{alignSelf:"center",top:1}}>
													    	<Dropdown
																				style={{width:width*0.4,paddingHorizontal:15}}
																				inputSearchStyle={{fontSize:18}}
																				iconStyle={{width:30,height:30}}
																				selectedTextStyle={{fontSize:18}}
                    placeholder="PG or UG"
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
																</View>
               </View> 
															<View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showCollegeStartDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
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
                          {inputFields.collegeStartDate}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showCollegeEndDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
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
                          left: 8,
                          justifyItem: "center",
                        }}
                      >
                        <Text style={styles.dateField}>
                          {inputFields.collegeEndDate}
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
                  value={inputFields.collegeName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, collegeName: text })
                  }
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
                    style={styles.input}
                    placeholder="Marks gained"
                    value={inputFields.collegeMarks}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, collegeMarks: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Scale"
                    value={inputFields.collegeScale}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, collegeScale: text })
                    }
                  />
                </View>
														</View>
																{/* Inter details */}
																<View style={styles.emailinput}>
															<View style={{flexDirection:"row",justifyContent:"space-between"}}>
															 <View style={{alignSelf:"center",top:1}}>
																	<Text style={{fontSize:18}}>Study Level</Text>
																</View>
																<View style={{alignSelf:"center",top:1}}>
													    	<Dropdown
																				style={{width:width*0.6,paddingHorizontal:15}}
																				inputSearchStyle={{fontSize:16}}
																				iconStyle={{width:30,height:30}}
																				selectedTextStyle={{fontSize:16,width:width*0.4}}
                    placeholder="Intermediate or Diploma"
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
																</View>
               </View> 
															<View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showInterStartDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeInterStartDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showInterStartDateMode("date")}
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
                          {inputFields.interStartDate}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showInterEndDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeInterEndDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showInterEndDateMode("date")}
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
                          {inputFields.interEndDate}
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
                  value={inputFields.interCollegeName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, interCollegeName: text })
                  }
                />
																<TextInput
                  style={styles.emailinput}
                  placeholder="College Address"
                  value={inputFields.interCollegeAddress}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, interCollegeAddress: text })
                  }
                />
																 <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Marks gained"
                    value={inputFields.intermarks}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, intermarks: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Scale"
                    value={inputFields.interScale}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, interScale: text })
                    }
                  />
                </View>
         
                 {/* School  Life */}

                <View style={styles.emailinput}>
															<View style={{flexDirection:"row",justifyContent:"space-between"}}>
															 <View style={{alignSelf:"center",top:1}}>
																	<Text style={{fontSize:18}}>Study Level</Text>
																</View>
																<View style={{alignSelf:"center",top:1}}>
													    	<Dropdown
																				style={{width:width*0.5,paddingHorizontal:15}}
																				inputSearchStyle={{fontSize:16}}
																				iconStyle={{width:30,height:30}}
																				selectedTextStyle={{fontSize:16,width:width*0.4}}
                    placeholder="SSC or CBSC"
                    data={inputFields.interSelectOption}
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
																</View>
               </View> 
															<View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showSchoolStartDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeSchoolStartDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showSchoolStartDateMode("date")}
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
                          {inputFields.schoolStartDate}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showSchoolEndDate && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeSchoolEndDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showSchoolEndDateMode("date")}
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
                          {inputFields.schoolEndDate}
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
                  placeholder="Name of the school"
                  value={inputFields.schoolName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, schoolName: text })
                  }
                />
																<TextInput
                  style={styles.emailinput}
                  placeholder="School Address"
                  value={inputFields.schoolAddress}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, schoolAddress: text })
                  }
                />
																 <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Marks gained"
                    value={inputFields.schoolmarks}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, schoolmarks: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Scale"
                    value={inputFields.schoolScale}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, schoolScale: text })
                    }
                  />
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.savebtn}>
                    <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelbtn}>
                    <Text style={styles.saveText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>

          {/* Work experience */}

          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.detailsView}>
                  <View style={styles.details}>
                    <Text style={styles.detailstext}>Work Experience</Text>
                  </View>

                  <Progress.Bar
                    progress={0.5}
                    width={width * 0.42}
                    color="#0384d5"
                    borderColor="#c0c0c0"
                    height={15}
                    style={styles.progressBar}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>45% completed</Text>
                  </View>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="eye"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="edit"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput
                  style={styles.emailinput}
                  placeholder="Client Name"
                  value={inputFields.clientName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, clientName: text })
                  }
                />
                <TextInput
                  style={styles.emailinput}
                  placeholder="Job Role"
                  value={inputFields.jobRole}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, jobRole: text })
                  }
                />

<View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showJobStart && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeJobStartDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showJobStartDateMode("date")}
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
                          {inputFields.jobStart}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showJobEnd && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeJobEndDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showJobEndDateMode("date")}
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
                          {inputFields.jobEnd}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.emailinput}>
                  <View style={{flexDirection:"row"}}>
                    <Checkbox.Item  
                    onPress={() => handleCheckboxChange('option1')} 
                    style={{top:-4}}
                    status={options.includes('option1') ? 'checked' : 'unchecked'}/>  
                    <Text style={{top:10,fontSize:16}}>Do you need VISA Counselling</Text>
                   </View>
                </View>
                <View style={styles.emailinput}>
                  <View style={{flexDirection:"row"}}>
                    <Checkbox.Item  
                    onPress={() => handleCheckboxChange('option2')} 
                    style={{top:-4}}
                    status={options.includes('option2') ? 'checked' : 'unchecked'}/>  
                    <Text style={{top:10,fontSize:16}}>Looking for a Loan</Text>
                   </View>
                </View>
                <View style={styles.emailinput}>
                  <View style={{flexDirection:"row"}}>
                    <Checkbox.Item  
                    onPress={() => handleCheckboxChange('option3')} 
                    style={{top:-4}}
                    status={options.includes('option3') ? 'checked' : 'unchecked'}/>  
                    <Text style={{top:10,fontSize:16}}>Already in a Loan</Text>
                   </View>
                </View>
                <View style={styles.emailinput}>
                  <View style={{flexDirection:"row"}}>
                    <Checkbox.Item  
                    onPress={() => handleCheckboxChange('option4')} 
                    style={{top:-4}}
                    status={options.includes('option4') ? 'checked' : 'unchecked'}/>  
                    <Text style={{top:10,fontSize:16}}>Not Interested</Text>
                   </View>
                </View>
                <View style={{borderWidth:1,marginTop:40}}/>
                      <View style={{width:width*0.8,alignSelf:"center",height:35,backgroundColor:"white",elevation:6,justifyContent:"center",borderRadius:20,top:-20}}><Text style={{color:"#0384d5",fontWeight:"bold",textAlign:"center"}}>Do you have any other job experience?</Text></View>
                      <View style={{alignSelf:"flex-end",marginRight:10}}>
                        <Text style={{fontWeight:"500"}}>If you have any addition experience?</Text>
                      </View>
                      <TextInput
                  style={styles.emailinput}
                  placeholder="Client Name"
                  value={inputFields.clientName}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, clientName: text })
                  }
                />
                <TextInput
                  style={styles.emailinput}
                  placeholder="Job Role"
                  value={inputFields.jobRole}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, jobRole: text })
                  }
                />

<View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showAdditionJobStart && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeAdditionJobStartDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showAdditionJobStartDateMode("date")}
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
                          {inputFields.additionJobStart}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showAdditionJobEnd && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeAdditionJobEndDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showAdditionJobEndDateMode("date")}
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
                          {inputFields.additionJobEnd}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.savebtn}>
                    <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelbtn}>
                    <Text style={styles.saveText}>Cancel</Text>
                  </TouchableOpacity>
                </View>

            </View>
          </View>

          {/* Test Scores */}
          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.detailsView}>
                  <View style={styles.details}>
                    <Text style={styles.detailstext}>Test Scores</Text>
                  </View>

                  <Progress.Bar
                    progress={0.5}
                    width={width * 0.42}
                    color="#0384d5"
                    borderColor="#c0c0c0"
                    height={15}
                    style={styles.progressBar}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>45% completed</Text>
                  </View>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="eye"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="edit"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.btnBarStyle}>
                  <TouchableOpacity onPress={()=>setInputFields({...inputFields,select:1})} style={inputFields.select==1? styles.buttonActive: styles.buttonDeactive}> 
                    <Text style={inputFields.select==1? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>IELTS</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>setInputFields({...inputFields,select:2})} style={inputFields.select==2? styles.buttonActive: styles.buttonDeactive}>
                    <Text style={inputFields.select==2? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>TOEFL</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>setInputFields({...inputFields,select:3})} style={inputFields.select==3? styles.buttonActive: styles.buttonDeactive}>
                    <Text style={inputFields.select==3? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>PTE</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>setInputFields({...inputFields,select:4})} style={inputFields.select==4? styles.buttonActive: styles.buttonDeactive}>
                    <Text style={inputFields.select==4? styles.buttonActiveTxt: styles.buttonDeactiveTxt}>Duolingo</Text>
                  </TouchableOpacity>
              </View>
                  
              <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Listening"
                    value={inputFields.Listening}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Listening: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Speaking"
                    value={inputFields.Speaking}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Speaking: text })
                    }
                  />
                </View>

                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Writing"
                    value={inputFields.Writing}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Writing: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Reading"
                    value={inputFields.Reading}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Reading: text })
                    }
                  />
                </View>

                <View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showDateOfExam && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeDateofExamDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showDateofExamMode("date")}
                      style={styles.dateInput}
                    >
                      <View
                        style={{
                          alignSelf: "flex-start",
                          left: 4,
                          justifyItem: "center",
                        }}
                      >
                        <Text style={styles.dateField}>
                          {inputFields.DateofExamination}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showTextValidUntil && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeTestofExamDate}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showTestofExamMode("date")}
                      style={styles.dateInput}
                    >
                      <View
                        style={{
                          alignSelf: "flex-start",
                          left: 4,
                          justifyItem: "center",
                        }}
                      >
                        <Text style={styles.dateField}>
                          {inputFields.TextValidUntil}
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
                  placeholder="Over all score"
                  value={inputFields.overAllScore}
                  onChange={(text) =>
                    setInputFields({ ...inputFields, overAllScore: text })
                  }
                />

                <View style={styles.btnGRE}>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",color:"white"}}>GRE</Text>
                </View>

                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Verbal"
                    value={inputFields.Verbal}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Verbal: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="AWA"
                    value={inputFields.AWA}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, AWA: text })
                    }
                  />
                </View>

                <View style={styles.rowContainer3}>
                  <TextInput
                    style={styles.input}
                    placeholder="Quant"
                    value={inputFields.Quant}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, Quant: text })
                    }
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Over all score"
                    value={inputFields.overAllScore1}
                    onChange={(text) =>
                      setInputFields({ ...inputFields, overAllScore1: text })
                    }
                  />
                </View>

                <View style={styles.rowContainer3}>
                  <View style={styles.input}>
                    {inputFields.showDateOfExam1 && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeDateofExamDate1}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showDateofExamMode1("date")}
                      style={styles.dateInput}
                    >
                      <View
                        style={{
                          alignSelf: "flex-start",
                          left: 4,
                          justifyItem: "center",
                        }}
                      >
                        <Text style={styles.dateField}>
                          {inputFields.DateofExamination1}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -10 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.input}>
                    {inputFields.showTextValidUntil1 && (
                      <DatePicker
                        testID="DatePicker"
                        value={inputFields.date}
                        mode={inputFields.mode}
                        display="default"
                        is24Hour={true}
                        maximumDate={new Date()} // Disable future years
                        onChange={onChangeTestofExamDate1}
                      />
                    )}
                    <TouchableOpacity
                      onPress={() => showTestofExamMode1("date")}
                      style={styles.dateInput}
                    >
                      <View
                        style={{
                          alignSelf: "flex-start",
                          left: 4,
                          justifyItem: "center",
                        }}
                      >
                        <Text style={styles.dateField}>
                          {inputFields.TextValidUntil1}
                        </Text>
                      </View>
                      <View style={{ alignSelf: "flex-end", left: -12 }}>
                        <FontAwesome5 name={"calendar-alt"} size={18} />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.btn}>
                  <TouchableOpacity style={styles.savebtn}>
                    <Text style={styles.saveText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cancelbtn}>
                    <Text style={styles.saveText}>Cancel</Text>
                  </TouchableOpacity>
                </View>

            </View>
          </View>

          {/* Documents  */}

          <View>
            <View style={styles.detailsContainer}>
              <View style={styles.rowContainer2}>
                <View style={styles.detailsView}>
                  <View style={styles.details}>
                    <Text style={styles.detailstext}>Documents</Text>
                  </View>

                  <Progress.Bar
                    progress={0.5}
                    width={width * 0.42}
                    color="#0384d5"
                    borderColor="#c0c0c0"
                    height={15}
                    style={styles.progressBar}
                  />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>45% completed</Text>
                  </View>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="eye"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <FontAwesome5
                      name="edit"
                      size={15}
                      color="#808080"
                      style={{ alignSelf: "center", margin: 3 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.fileUploadStyle}>
                <View style={styles.iconStyleFile}>
                     
                </View>
                <View style={{top:8,paddingLeft:10}}>
                     <Text >Release Group_20230382.xlsx</Text>
                </View>
                <View style={{top:8,paddingLeft:15}}>
                        <Octicon name={"download"} size={20}/>
                </View>
                <View style={{top:6,paddingLeft:5}}>
                        <MaterialCommunityIcons name={"dots-horizontal"} size={24}/>
                </View>
                <View style={styles.fileBoxStyle}>
                   <Text style={{textAlign:"center",fontWeight:"700",color:"white"}}>SOP</Text>
                </View>
              </View>

              <View style={styles.fileUploadStyle}>
                <View style={styles.iconStyleFile}>
                     
                </View>
                <View style={{top:8,paddingLeft:10}}>
                     <Text >Release Group_20230382.xlsx</Text>
                </View>
                <View style={{top:8,paddingLeft:15}}>
                        <Octicon name={"download"} size={20}/>
                </View>
                <View style={{top:6,paddingLeft:5}}>
                        <MaterialCommunityIcons name={"dots-horizontal"} size={24}/>
                </View>
                <View style={styles.fileBoxStyle}>
                   <Text style={{textAlign:"center",fontWeight:"700",color:"white"}}>SOP</Text>
                </View>
              </View>

              <View style={styles.fileUploadStyle}>
                <View style={styles.iconStyleFile}>
                     
                </View>
                <View style={{top:8,paddingLeft:10}}>
                     <Text >Release Group_20230382.xlsx</Text>
                </View>
                <View style={{top:8,paddingLeft:15}}>
                        <Octicon name={"download"} size={20}/>
                </View>
                <View style={{top:6,paddingLeft:5}}>
                        <MaterialCommunityIcons name={"dots-horizontal"} size={24}/>
                </View>
                <View style={styles.fileBoxStyle}>
                   <Text style={{textAlign:"center",fontWeight:"700",color:"white"}}>SOP</Text>
                </View>
              </View>

              <View style={styles.PhotoUploadStyle}>
                  <View style={{flexDirection:"row"}}>
                    <View style={{marginLeft:30}}>
                      <Icon name={"image"} size={22}/>
                    </View>
                    <View style={{marginLeft:10}}>
                       <Text style={{fontSize:16}}>Photos</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:"row",width:140,backgroundColor:"#c0c0c0",height:28,alignItems:"center",borderRadius:10,}}>
                        <View style={{marginLeft:10}}>
                           <Text>Add Document</Text>
                        </View>
                        <View style={{marginLeft:10}}>
                          <FontAwesome5 name={"file-alt"} size={20}/>
                        </View>
                  </View>
              </View>
            </View>
          </View>

        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0384d5",
    width: width * 1,
    height: height / 6,
  },
  rowContainer: {
    flexDirection: "row",
    top: -40,
    justifyContent: "flex-end",
    marginRight: 10,
  },
  editContainer: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    marginRight: 10,
    padding: 3,
    paddingLeft: 5,
    borderRadius: 100,
  },
  rowContainer1: {
    flexDirection: "row",
    top: -40,
    marginRight: 10,
    marginBottom: 10,
    // marginLeft:40
  },
  editContainer1: {
    backgroundColor: "#c0c0c0",
    height: 25,
    width: 25,
    marginRight: 10,
    padding: 3,
    // paddingLeft:5,
    borderRadius: 100,
  },
  editContainer2: {
    backgroundColor: "#c0c0c0",
    height: 25,
    width: 25,
    marginRight: 10,
    padding: 3,
    marginLeft: 20,
    borderRadius: 100,
  },
  likeContainer: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    borderRadius: 100,
    padding: 3,
  },
  imgView: {
    height: 120,
    width: 120,
    backgroundColor: "#0384d5",
    borderRadius: 100,
    alignSelf: "center",
    top: -80,
  },
  img: {
    height: 110,
    width: 110,
    backgroundColor: "#0384d5",
    borderRadius: 100,
    alignSelf: "center",
    top: 5,
  },
  detailsContainer: {
    backgroundColor: "white",
    marginTop: 30,
    borderRadius: 10,
    width: width * 0.95,
    alignSelf: "center",
    height: "auto",
		marginBottom:20
  },
  rowContainer2: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -10,
  },
  rowContainer3: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  detailsView: {
    backgroundColor: "white",
    width: width * 0.9,
    borderRadius: 5,
    elevation: 5,
    padding: 3,
    flexDirection: "row",
    paddingHorizontal: 10,
  },

  detailstext: {
    alignSelf: "center",
    color: "#0384d5",
    // top:2,
    fontWeight: "bold",
    fontSize: 17,
  },
  progressBar: {
    borderRadius: 5,
    backgroundColor: "#c0c0c0",
    alignSelf: "center",
    marginHorizontal: 8,
  },

  textContainer: {
    position: "absolute",
    // justifyContent: 'center',
    alignItems: "center",
    width: width * 0.9,
    // height: 30,
    alignSelf: "center",
  },
  text: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  input: {
    width: width * 0.44,
    height: 45,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 18,
  },
  emailinput: {
    width: width * 0.89,
    height: 45,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
    // bottom:10,
    alignSelf: "center",
    fontSize: 18,
  },
  input1: {
    marginTop: 10,
    width: width * 0.89,
    alignSelf: "center",
    height: 45,
    backgroundColor: "white",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
  },
  phonestyle: {
    // width: width*0.9,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 40,
  },
  phonestyle1: {
    height: 20,
  },
  rowContainer4: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  rowContainer5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.387,
  },
  rowContainer6: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#c0c0c0",
    borderWidth: 1,
    borderRadius: 5,
    width: width * 0.49,
  },
  dateField: {
    fontSize: 16,
    textAlign: "center",
    alignSelf: "center",
    marginTop: 12,
  },
  dateInput: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignContent: "center",
  },
  savebtn: {
    width: 80,
    height: 35,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "white",
    elevation: 5,
    borderRadius: 50,
    // marginHorizontal:45
  },
  saveText: {
    textAlign: "center",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  btn: {
    flexDirection: "row",
    alignSelf: "center",
    // justifyContent:"space-around",
    marginTop: 10,
    width: width * 0.45,
    marginBottom:20
  },
  cancelbtn: {
    width: 80,
    height: 35,
    backgroundColor: "#990000",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "white",
    elevation: 5,
    borderRadius: 50,
    marginLeft: 25,
  },
  btnBarStyle:{
    flexDirection:"row",
		backgroundColor:"white",
		borderRadius:5,
		width:width*0.85,
		alignSelf:"center",
		margin:20,
		height:35,
		elevation:5,
		alignItems:"center"
  },
  buttonActive:{
		backgroundColor:"#0384d5",
		width:width*0.215,
		height:35,
		borderRadius:5,
		alignItems:"center",
		justifyContent:"center"
	},
	buttonActiveTxt:{
		color:"white",
		alignSelf:"center",
		fontWeight:"bold"

	},
	buttonDeactive:{
		backgroundColor:"white",
		width:width*0.215,
		height:35,
		borderRadius:5,
		alignItems:"center",
		justifyContent:"center"
	},
	buttonDeactiveTxt:{
		color:"black"
	},
  btnGRE:{
    width:width*0.25,
    height:40,
    elevation:10,
    backgroundColor:"#0384d5",
    margin:20,
    borderColor:"white",
    borderWidth:5,
    borderRadius:10,
    justifyContent:"center"
  },
  fileUploadStyle:{
    width:width*0.88,
    height:35,
    elevation:10,
    backgroundColor:"white",
    alignSelf:"center",
    margin:10,
    marginTop:20,
    borderRadius:10,
    flexDirection:"row",
    // justifyContent:"center"
  },
  iconStyleFile:{
    width:width*0.1,
    height:38,
    elevation:10,
    backgroundColor:"white",
    borderRadius:10,
    top:-2
  },
  fileBoxStyle:{
    width:40,
    height:20,
    backgroundColor:"#0384d5",
    alignSelf:"center",
    marginLeft:10,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5
  },
  PhotoUploadStyle:{
    marginTop:50,
    width:width*0.95,
    height:50,
    backgroundColor:"white",
    elevation:10,
    marginBottom:50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  }
});
