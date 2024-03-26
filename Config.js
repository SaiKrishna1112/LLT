import { View, Text } from 'react-native'
import React from 'react'

const Config = () => {
  var userStage = "test"
  var link;
  if(userStage=="test"){
    link="https://lltapp.net/api/v1/"
  }else{
    link='http://llt-app-env-1.eba-nkkpwhvd.ap-south-1.elasticbeanstalk.com/api/v1/'
  }
  return(link);
}

export default Config()