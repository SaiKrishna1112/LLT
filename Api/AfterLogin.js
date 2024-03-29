import axios from 'axios';

 export  async function staticCout(value){
		console.log("Dashboard");
		let resp;
   await  axios({
						url: `http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/reports/status/count/${value}/university-applications`,
						method: 'GET'
			})
			.then(function (response) {
				// console.log("getting",response.data);
				 resp = response.data
			})
			.catch(function (error) {
  				console.log(error.response.data);
          resp=error.response.data
		});
		// console.log({resp});
	return (resp);
}


export const wishlistData= async(value,pageNo) =>{
	console.log("WishlistData",value, pageNo);
	let resp;
				await  axios({
					url: `http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/user-shortlist/get-all/${value}?page=${pageNo}&size=20`,
					method: 'GET'
			})
			.then(function (response) {
			console.log("getting",response.data);
				resp = response.data
			})
			.catch(function (error) {
					console.log(error.response.data);
									resp=error.response.data
			});
			// console.log({resp});
			return (resp);
} 

export const ApplicationData= async(value,pageNo) =>{
	console.log("ApplicationData",value, pageNo);
	let resp;
				await  axios({
					url: `http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/university-applications/user/${value}?page=${pageNo}&size=10`,
					method: 'GET'
			})
			.then(function (response) {
			// console.log("getting",response.data);
				resp = response.data
			})
			.catch(function (error) {
					// console.log(error.response.data);
									resp=error.response.data
			});
			// console.log({resp});
			return (resp);
} 

export const userData= async(value)=>{
	console.log(value,"user Details");
	let resp;
					await  axios({
						url: `https://lltapp.net/api/v1/users/${value}`,
						method: 'GET'
				})
				.then(function (response) {
				// console.log("getting",response.data);
					resp = response.data
				})
				.catch(function (error) {
						// console.log(error.response.data);
										resp=error.response.data
				});
				// console.log({resp});
				return (resp);
}

export const personalDetails = async(value)=>{
	console.log(value,"Personal Details");
	let resp;
					await  axios({
						url: `https://lltapp.net/api/v1/users/profile-details/user/${value}`,
						method: 'GET'
				})
				.then(function (response) {
				// console.log("getting",response.data);
					resp = response.data
				})
				.catch(function (error) {
						// console.log(error.response.data);
										resp=error.response.data
				});
				// console.log({resp});
				return (resp);
}

export const educationDetails = async(value)=>{
	console.log(value,"Education Details");
	let resp;
					await  axios({
						url: `https://lltapp.net/api/v1/users/educational-details/user/${value}`,
						method: 'GET'
				})
				.then(function (response) {
				// console.log("getting",response.data);
					resp = response.data
				})
				.catch(function (error) {
						// console.log(error.response.data);
										resp=error.response.data
				});
				// console.log({resp});
				return (resp);
}

export const workDetails = async(value)=>{
	console.log(value,"work Details");
	let resp;
					await  axios({
						url: `https://lltapp.net/api/v1/users/workexperience/user/${value}`,
						method: 'GET'
				})
				.then(function (response) {
				// console.log("getting",response.data);
					resp = response.data
				})
				.catch(function (error) {
						// console.log(error.response.data);
										resp=error.response.data
				});
				// console.log({resp});
				return (resp);
}

export const testDetails = async(value)=>{
	console.log(value,"Test Details");
	let resp;
					await  axios({
						url: `https://lltapp.net/api/v1/users/test-scores/user/${value}`,
						method: 'GET'
				})
				.then(function (response) {
				console.log("getting",response.data);
					resp = response.data
				})
				.catch(function (error) {
						console.log(error.response.data);
										resp=error.response.data
				});
				// console.log({resp});
				return (resp);
}