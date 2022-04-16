import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
// @ts-ignore
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import styled from 'styled-components/native';
import {Rating} from 'react-native-ratings';
import {useColorScheme} from 'react-native-appearance';

interface RatingComponentProps {
  avgRating: number;
  ratingCount: number;
  ownRating?: number;
  handleRating: (id: number, rating: number) => void;
}

export default function RatingCompontent({
  avgRating,
  ratingCount,
  ownRating,
  handleRating,
}: RatingComponentProps) {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ViewStyled>
      <RatingStyled
        type={'custom'}
        fractions={1}
        imageSize={30}
        startingValue={ownRating ? ownRating : 2.5}
        tintColor={isDarkMode ? Colors.darker : Colors.lighter}
        onFinishRating={handleRating}
      />
      <AvgTextStyled>{avgRating}</AvgTextStyled>
      <StarIconStyled name={'star'} size={20} color={'#F1C40F'} />
      <RatingCountTextStyled>{`(${ratingCount})`}</RatingCountTextStyled>
    </ViewStyled>
  );
}

const StarIconStyled = styled(Icon)`
  padding-top: 12px;
`;

const AvgTextStyled = styled.Text`
  font-size: 20px;
  padding-top: 12px;
`;

const RatingCountTextStyled = styled.Text`
  padding-top: 12px;
  font-size: 10px;
`;

const ViewStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const RatingStyled = styled(Rating)`
  padding-top: 12px;
  width: 200px;
`;

