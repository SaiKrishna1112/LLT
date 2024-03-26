import React from  'react';
import axios from 'axios';
import link from '../Config';

 export default async function loginfunction(value){
		console.log("login");
		let resp;
   await  axios({
						url: 'http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/auth/login',
						method: 'POST',
						data:{
							"phoneNumberOrEmail": value.username,
							"password":value.password
						}
			})
			.then(function (response) {
				// console.log("getting",response.data);
				 resp = response.data
			})
			.catch(function (error) {
  				console.log(error.response.data);
          resp=error.response.data
		});
		console.log({resp});
	return (resp);
}

// In registration Send email otp
export async function sendemailfunction(value){
	console.log("Send Email OTP");
	let resp;
 await  axios({
					url: link+'reset-password/request-email-verification',
					method: 'POST',
					data:{
						"toMails":[
							value.email
						]}
		})
		.then(function (response) {
			// console.log("getting",response.data);
			 resp = response.data
		})
		.catch(function (error) {
				console.log(error.response.data);
				resp=error.response.data
	});
	console.log({resp});
return (resp);
}

// In registration Verify emial otp
export async function submitotp(value){
	console.log("Email Otp Submit");
	console.log(value)
	let resp;
 await  axios({
					url: link+'reset-password/email-validation',
					method: 'POST',
					data:{
						"resetToken":value.emailotp,
						"email":value.email
					}
		})
		.then(function (response) {
			// console.log("getting",response.data);
			 resp = response.data
		})
		.catch(function (error) {
				console.log(error.response.data);
				resp=error.response.data
	});
	console.log({resp});
return (resp);
}

//In REgistration Send mobile OTP
export async function sendmobileotpfunc(value){
	console.log("Send Mobile OTP");
	console.log("value",value)
	let resp;
 await  axios({
					url: link+'reset-password/request-mobile-verification',
					method: 'POST',
					data:{
						"phoneNumber":value.mobileNumber
					}
		})
		.then(function (response) {
			// console.log("getting",response.data);
			 resp = response.data
		})
		.catch(function (error) {
				console.log(error.response.data);
				resp=error.response.data
	});
	console.log({resp});
return (resp);
}

//User Registration last step
export async function registerfunction(value){
	console.log("Registration");
	console.log("value",value)
	let resp;
 await  axios({
					url: link+'auth/register',
					method: 'POST',
					data:{
					"city":value.city,
					"confirmPassword":value.confirmPassword,
					"dateOfBirth":value.dob,
					"email":value.email,
					"emailOtp":value.emailotp,
					"firstName":value.firstName,
					"lastName":value.lastName,
					"mobileOtp":value.mobileOtp,
					"password":value.createPassword,
					"phoneNumber":value.mobileNumber,
					"role":"user",
					"whatsappNumber":value.whatsappNumber,
					"yourCollageName":value.collegeName
					}
		})
		.then(function (response) {
			// console.log("getting",response.data);
			 resp = response.data
		})
		.catch(function (error) {
				console.log(error.response.data);
				resp=error.response.data
	});
	console.log({resp});
return (resp);
}