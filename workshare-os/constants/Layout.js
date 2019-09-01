import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  inputTextField: {
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  inputTextFieldLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 5,
  }
};
