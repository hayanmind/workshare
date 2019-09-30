import { Dimensions } from 'react-native';
import colorConst from './Colors';

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
  inputTextFieldWhiteBackground: {
    height: 40,
    marginBottom: 30,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: colorConst.mainColor
  },
  inputTextFieldLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 5,
  },
  inputTextFieldLabelWhiteBackground: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  }
};
