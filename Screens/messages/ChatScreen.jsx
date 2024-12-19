// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   TextInput,
//   FlatList,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {AttachIcon} from '../../assets/svg/SvgIcons';
// import {SendIcon} from '../../assets/svg/SvgIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {io} from 'socket.io-client';
// import {BASE_URL} from '../../context/BaseUrl';
// import {useSelector} from 'react-redux';

// const {width, height} = Dimensions.get('window');

// const ChatScreen = ({route}) => {
//   const [text, setText] = useState('');
//   console.log('text', text);
//   const {token, user, phonedetails} = useSelector(state => state.auth);
//   console.log('token', token);

//   const userId = user.userId;
//   console.log('userId', userId);

//   const {roomId} = route.params;
//   console.log(roomId);
//   const [socket, setSocket] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   // establish a socket connection
//   useEffect(() => {
//     console.log('establishing socket connection');
//     try {
//       const newSocket = io(`http://192.168.100.15:5050/?token=${token}`);
//       console.log('connecttion established', newSocket);

//       // join room
//       newSocket.emit('join_room_chat', {roomId});

//       setSocket(newSocket);

//       newSocket.on('joinedRoom', () => console.log('joined room'));

//       newSocket.on('error', error => console.log('error', error));

//       // listen messsges
//       newSocket.on('rec', message => {
//         console.log('received message', message);
//         setMessages(prevMessages => [...prevMessages, message]);
//       });
//       return () => {
//         newSocket.close();
//       };
//     } catch (error) {
//       console.log(error);
//     }
//   }, [roomId]);

//   // send messages
//   const sendMessage = ({text}) => {
//     // if (text.trim()) {
//     //   const newMessage = {
//     //     text,
//     //     sender: roomId,
//     //     createdAt: new Date(),
//     //   };
//     socket.emit('consult_message', {message: text, roomId});
//     // setMessages(prevMessages => [...prevMessages, newMessage]);
//     setText('');
//     // }
//   };

//   const renderMessage = ({item}) => (
//     <View style={styles.messageContainer}>
//       <Text>hello</Text>
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <HeaderBar />
//       <FlatList
//         data={[1, 2, 3, 4, 5, 6]}
//         keyExtractor={item => item}
//         renderItem={renderMessage}
//         contentContainerStyle={styles.chatArea}
//         inverted // To display new messages at the bottom
//       />
//       <Footer sendMessage={sendMessage} setText={setText} />
//     </SafeAreaView>
//   );
// };

// export default ChatScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },
//   headerbar: {
//     width: width,
//     height: height * 0.09,
//     marginHorizontal: -10,
//     borderBottomWidth: 0.5,
//     flexDirection: 'row',
//     padding: 20,
//     alignItems: 'center',
//     // justifyContent: 'space-between',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     borderRadius: 50,
//   },
//   endbutton: {
//     width: width * 0.12,
//     height: width * 0.07,
//     backgroundColor: '#E2363D',
//     borderRadius: 5,
//     padding: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 20,
//   },
//   footerContainer: {
//     position: 'absolute',
//     bottom: 0,
//     width: width,
//     alignSelf: 'center',
//     paddingHorizontal: 10,
//     backgroundColor: '#fff',
//   },

//   inputWrapper: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 0.5,
//     borderColor: '#D6D6D6',
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     height: 50,
//     width: '100%',
//     marginBottom: 10,
//   },

//   input: {
//     flex: 1,
//     color: '#4A4A4A',
//     fontSize: 16,
//     fontFamily: 'WorkSans',
//   },

//   iconButton: {
//     paddingHorizontal: 5,
//     paddingVertical: 5,
//     marginLeft: 10,
//   },
//   // just trying
//   chatArea: {
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//     flexGrow: 1,
//     justifyContent: 'flex-end',
//   },
//   messageWrapper: {
//     marginVertical: 5,
//   },
//   myMessageWrapper: {
//     alignItems: 'flex-end',
//   },
//   otherMessageWrapper: {
//     alignItems: 'flex-start',
//   },
//   messageContainer: {
//     maxWidth: '70%',
//     padding: 10,
//     // borderRadius: 10,
//     position: 'relative',
//   },
//   myMessage: {
//     backgroundColor: '#FFE4B3',
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//     borderTopLeftRadius: 10,
//   },
//   otherMessage: {
//     backgroundColor: '#FFF5E0',
//     borderTopRightRadius: 10,
//     borderBottomRightRadius: 10,
//     borderBottomLeftRadius: 10,
//   },
//   messageText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   messageFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     marginTop: 5,
//   },
//   timestamp: {
//     fontSize: 12,
//     color: '#999',
//   },
// });
// function HeaderBar() {
//   return (
//     <View style={styles.headerbar}>
//       <TouchableOpacity>
//         <AntDesign name="arrowleft" size={30} color="black" />
//       </TouchableOpacity>
//       <View
//         style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
//         <View style={{marginRight: 10}}>
//           <Image
//             source={require('../../assets/images/astrologer1.png')}
//             style={styles.image}
//           />
//         </View>
//         <View>
//           <Text
//             style={{fontSize: 16, fontWeight: '400', fontFamily: 'WorkSans'}}>
//             Brijesh Rawat
//           </Text>
//           <Text
//             style={{
//               fontSize: 10,
//               fontWeight: '400',
//               fontFamily: 'WorkSans',
//               color: '#040404',
//             }}>
//             Chat started <Text style={{color: '#E2363D'}}>1m:30s ago</Text>{' '}
//           </Text>
//         </View>
//       </View>
//       <TouchableOpacity style={styles.endbutton}>
//         <Text style={{color: 'white'}}>End</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// function Footer({sendMessage, setText}) {
//   return (
//     <View style={styles.footerContainer}>
//       {/* Input Container */}
//       <View style={styles.inputWrapper}>
//         <TextInput
//           placeholder="Type a message"
//           placeholderTextColor={'#4A4A4A'}
//           style={styles.input}
//           onChangeText={text => setText(text)}
//         />

//         {/* Select Item Button */}
//         <TouchableOpacity style={styles.iconButton}>
//           <AttachIcon />
//         </TouchableOpacity>

//         {/* Send Button */}
//         <TouchableOpacity style={styles.iconButton} onPress={sendMessage}>
//           <View
//             style={{
//               width: 30,
//               height: 30,
//               borderRadius: 30,
//               backgroundColor: '#4A4A4A',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <SendIcon />
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AttachIcon, SendIcon} from '../../assets/svg/SvgIcons';
import {io} from 'socket.io-client';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const ChatScreen = ({route}) => {
  const [text, setText] = useState('');
  const {token, user} = useSelector(state => state.auth);
  const userId = user.userId;
  const {roomId} = route.params;

  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  // Establish a socket connection
  useEffect(() => {
    const newSocket = io(`http://192.168.100.15:5050/?token=${token}`);

    newSocket.emit('join_room_chat', {roomId});
    setSocket(newSocket);

    newSocket.on('joinedRoom', () => console.log('Joined room'));

    newSocket.on('rec', message => {
      console.log('Received message:', message);
      setMessages(prevMessages => [...prevMessages, message]);
    });

    newSocket.on('error', error => console.log('Socket error:', error));

    return () => {
      newSocket.close();
    };
  }, [roomId]);

  // Send message
  const sendMessage = () => {
    if (text.trim()) {
      const newMessage = {
        text,
        senderId: userId,
        createdAt: new Date(),
      };
      socket.emit('consult_message', {message: text, roomId});
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setText('');
    }
  };

  // Render individual messages
  const renderMessage = ({item}) => {
    const isMyMessage = item.senderId === userId;
    return (
      <View
        style={[
          styles.messageWrapper,
          isMyMessage ? styles.myMessageWrapper : styles.otherMessageWrapper,
        ]}>
        <View
          style={[
            styles.messageContainer,
            isMyMessage ? styles.myMessage : styles.otherMessage,
          ]}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
        <Text style={styles.timestamp}>
          {new Date(item.createdAt).toLocaleTimeString()}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatArea}
        inverted
      />
      <Footer sendMessage={sendMessage} text={text} setText={setText} />
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  headerbar: {
    width: width,
    height: height * 0.09,
    marginHorizontal: -10,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  endbutton: {
    width: width * 0.12,
    height: width * 0.07,
    backgroundColor: '#E2363D',
    borderRadius: 5,
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D6D6D6',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: '#4A4A4A',
    fontSize: 16,
    fontFamily: 'WorkSans',
  },
  iconButton: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 10,
  },
  chatArea: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageWrapper: {
    marginVertical: 5,
  },
  myMessageWrapper: {
    alignItems: 'flex-end',
  },
  otherMessageWrapper: {
    alignItems: 'flex-start',
  },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  myMessage: {
    backgroundColor: '#FFE4B3',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  otherMessage: {
    backgroundColor: '#FFF5E0',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },
});

function HeaderBar() {
  return (
    <View style={styles.headerbar}>
      <TouchableOpacity>
        <AntDesign name="arrowleft" size={30} color="black" />
      </TouchableOpacity>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <View style={{marginRight: 10}}>
          <Image
            source={require('../../assets/images/astrologer1.png')}
            style={styles.image}
          />
        </View>
        <View>
          <Text
            style={{fontSize: 16, fontWeight: '400', fontFamily: 'WorkSans'}}>
            Brijesh Rawat
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              fontFamily: 'WorkSans',
              color: '#040404',
            }}>
            Chat started <Text style={{color: '#E2363D'}}>1m:30s ago</Text>{' '}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.endbutton}>
        <Text style={{color: 'white'}}>End</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer({sendMessage, text, setText}) {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Type a message"
          placeholderTextColor={'#4A4A4A'}
          style={styles.input}
          value={text}
          onChangeText={text => setText(text)}
        />
        <TouchableOpacity style={styles.iconButton}>
          <AttachIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={sendMessage}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 30,
              backgroundColor: '#4A4A4A',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SendIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
