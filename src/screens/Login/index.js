import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logo}>
        <Icon name={'aperture'} size={48} style={styles.logoIcon} />
        <Text style={styles.logoText}>Awesome</Text>
      </View>
      <Text style={styles.subTitle}>
        It's time to let go of the fantasies.{'\n'} It's time to grow up.
      </Text>
      <View style={styles.loginForm}>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formInput}
            textContentType={'none'}
            keyboardType={'email-address'}
            autoCompleteType={'off'}
            autoCapitalize={'none'}
            autoCorrect={false}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formInput}
            textContentType={'none'}
            autoCompleteType={'password'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
        <View style={styles.formControl}>
          <TouchableOpacity style={styles.formSubmitBtn}>
            <Text style={styles.formBtnText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formFooter}>
          <Text style={styles.formFooterText}>Don't have an account yet?</Text>
          <TouchableOpacity style={styles.formLink}>
            <Text style={styles.formLinkText}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#191414',
  },
  logo: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#f0f0f0',
  },
  logoIcon: {
    color: '#1DB954',
    marginRight: 6,
  },
  subTitle: {
    marginTop: 20,
    paddingHorizontal: 24,
    color: '#f0f0f0',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    fontWeight: '300',
  },
  loginForm: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 24,
  },
  formControl: {
    marginVertical: 12,
  },
  formLabel: {
    color: '#f0f0f0',
    fontWeight: '700',
    fontSize: 13,
  },
  formInput: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#f0f0f0',
  },
  formSubmitBtn: {
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 4,
  },
  formBtnText: {
    color: '#f0f0f0',
    fontSize: 16,
    fontWeight: '700',
  },
  formFooter: {
    marginVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLink: {
    backgroundColor: '#f0f0f0',
    width: Dimensions.get('screen').width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 24,
  },
  formLinkText: {
    color: '#1DB954',
    fontSize: 13,
    fontWeight: '700',
  },
  formFooterText: {
    color: '#f0f0f0',
    fontSize: 13,
    fontWeight: '300',
    marginBottom: 6,
  },
});

export default Login;
