import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FilledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';
import {Loading} from '../components/Loading';

const LoginScreen = ({navigation}) => {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('remzi.gunes1283@gmail.com');
  const [password, setPassword] = React.useState('12345');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  return (
    <AuthContainer>
      <Heading style={styles.title}>Login</Heading>
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
        title={'Login'}
        style={styles.loginButton}
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (e) {
            setError(e.message);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title={'Have u an account? Create one'}
        onPress={() => {
          navigation.navigate('RegisterScreen');
        }}
      />
      <Loading loading={loading} />
    </AuthContainer>
  );
};

export default LoginScreen;

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
});
