import React from 'react';
import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Appearance} from 'react-native';
import MultiListItemImage from './MultiListItemImage';

interface MultiListItemProps {
  title: string;
  icon: string;
}

export default function MultiListItem({title, icon}: MultiListItemProps) {
  const isDarkMode = Appearance.getColorScheme() === 'dark';

  return (
    <StyledTouchableOpacity isDarkMode={isDarkMode}>
      <MultiListItemImage icon={icon} />
      <StyledTest>{title}</StyledTest>
    </StyledTouchableOpacity>
  );
}

const StyledTest = styled.Text`
  text-align: center;
  font-size: 30px;
  margin-left: 12px;
`;

interface StyledTouchableopacityProps {
  isDarkMode: boolean;
}

const StyledTouchableOpacity = styled.TouchableOpacity<StyledTouchableopacityProps>`
  padding: 10px;
  margin: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-color: ${props => (props.isDarkMode ? Colors.lighter : Colors.darker)};
  border-radius: 10px;
  border-width: 2px;
`;
