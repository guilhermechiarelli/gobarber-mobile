import React from 'react';
import { View, Button } from 'react-native';

const CreateAppointment: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Teste" onPress={() => console.log('oi')} />
    </View>
  );
};

export default CreateAppointment;
