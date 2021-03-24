import React from 'react';
import {Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from './styles';

import Api from '../../Api';

export default () => {
  const navigate = useNavigation();

  const handleLogoutClick = async () => {
    await Api.logout();
    navigate.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <Text>Profile</Text>
      <Button title="Sair" onPress={handleLogoutClick} />
    </Container>
  );
};
