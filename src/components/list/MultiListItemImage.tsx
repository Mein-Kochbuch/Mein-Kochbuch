import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import styled from 'styled-components/native';

interface MultiListItemImageProps {
  icon: string;
}

export default function MultiListItemImage({icon}: MultiListItemImageProps) {
  return icon === 'heart' ? (
    <Icon name={'heart'} size={100} color={'#FF0000'} />
  ) : (
    <StyledImage source={require('../../../resources/platzhalter.png')} />
  );
}

const StyledImage = styled.Image`
  height: 100px;
  width: 100px;

  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #68a0cf;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;
