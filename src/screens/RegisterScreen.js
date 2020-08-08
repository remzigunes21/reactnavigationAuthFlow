import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';

import Error from '../components/Error';
import {IconButton} from '../components/IconButton';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';

const RegisterScreen = ({navigation}) => {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('remzi.gunes1283@gmail.com');
  const [password, setPassword] = React.useState('12345');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <AuthContainer>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading style={styles.title}>REGISTRATION</Heading>
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Register'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await register(email, password);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    padding: 18,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
  },
  loginButton: {
    marginVertical: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
});
