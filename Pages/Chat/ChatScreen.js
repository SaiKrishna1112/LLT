import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'bot' },
    { id: 3, text: 'Hi there!', sender: 'user' },
    { id: 4, text: 'Hi there! Hi there! Hi there! Hi there! Hi there! Hi there!', sender: 'bot' },
    // Add more messages as needed
  ]);
  const [messageText, setMessageText] = useState('');

  const renderMessage = ({ item }) => {
    return (
      <View style={styles.messageContainer}>
        <View style={[styles.messageBubble, { alignSelf: item.sender === 'user' ? 'flex-end' : 'flex-start' }]}>
          {item.sender !== 'user' && <Image source={require('../../assets/04.png')} style={styles.avatar} />}
          <View style={styles.viewMessageText}><Text style={styles.messageText}>{item.text}</Text></View>
          {item.sender === 'user' && <Image source={require('../../assets/04.png')} style={styles.avatar} />}
        </View>
      </View>
    );
  };

  const sendMessage = () => {
    if (messageText.trim() === '') return;
    const newMessage = { id: messages.length + 1, text: messageText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setMessageText('');
    // Logic for sending message to the bot or server
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        // inverted // To start chat at the bottom
      />
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Icon name={"camera"} size={26} style={styles.icon} color={"#353535"}/>
          {/* <Image source={require('../../assets/04.png')} style={styles.icon} /> */}
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name={"attach-sharp"} size={30} style={styles.icon} color={"#353535"}/>
          {/* <Image source={require('../../assets/04.png')} style={styles.icon} /> */}
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={messageText}
          onChangeText={(text) => setMessageText(text)}
          placeholder="Type a message..."
          multiline
        />
        <TouchableOpacity onPress={sendMessage}>
        <Icon name={"send"} size={30} style={styles.icon} color={"#353535"}/>
          {/* <Image source={require('../../assets/06.png')} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messageContainer: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 5,
    maxWidth: '80%',
    marginLeft: 10, // Added marginLeft to create space for the icon
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
    maxWidth: '100%',
  },
  viewMessageText: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: '80%',
    marginLeft: 10, // Added marginLeft to create space for the icon
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
    justifyContent: 'space-between', // Added to separate input field and icons
    marginTop: 10, // Added marginTop to create space between message list and input field
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
    // marginRight: 5,
  },
});


export default ChatScreen;
