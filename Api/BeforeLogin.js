import React from  'react';
import axios from 'axios';

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