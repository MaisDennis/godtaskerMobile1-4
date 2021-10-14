import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  KeyboardAvoidingView,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(SafeAreaView)`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
  background-color: #F5F5;
`;
export const ConversationView = styled(KeyboardAvoidingView)`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow: scroll;
/* margin-bottom: 40%; */
/* background-color: #4433ee; */
`;

export const HrDivider = styled.View`
width: 100%;
border-width: 0.5px;
border-color: #ddd;
margin: 0 auto;
`;

// export const ParsedKeyboardAvoidingView = styled.KeyboardAvoidingView`
// display: flex;
// flex-direction: column;
// align-items: center;
// height: auto;
// width: 100%;
// background-color: #4433ee;
// `;

export const ReplyContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: auto; */
  width: 100%;
  margin: 0;
  background-color: #f00;
`;

export const ReplyView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* height: 48px; */
  height: auto;
  width: 100%;
  padding: 0 8px;
  margin: 0;
  background-color: #fff;
`;

export const SendInput = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  min-height: 40px;
  width: 80%;
  border-radius: 16px;
  border-width: 1px;
  border-color: #000;
  margin: 16px 0;
  padding: 0px 20px;
  background-color: #ddd;
`;

export const SendButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 40px;
  margin: 0;
  background-color: #000;
`;


export const SendButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border: 1px solid #000;
  margin: 0;
  /* background-color: #4ee; */
`;

export const SpaceView = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 32px;
`;

export const TemporaryMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 8px;
  background-color: #f5f5f5;
`;
export const TemporaryMessageView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 90%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #999;
  padding: 6px 20px;
  background-color: #fff;
  /* background-color: #f00; */
`;
export const TemporaryMessageText = styled.Text`
  color: #000;
  text-align: left;
  margin: 0 auto;
`;

export const TemporaryMessageIcon = styled(Icon)`
  font-size: 21px;
  color: #AE1919;
  /* background-color: #fff; */
`;
export const TemporaryMessageIconView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  /* background-color: #999; */
`;
