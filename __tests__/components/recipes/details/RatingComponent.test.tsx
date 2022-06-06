import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import RatingComponent from '../../../../src/components/recipes/details/RatingComponent';
import {Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Feather';

import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';

describe('RatingComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Snapshot Test light theme', () => {
    const averageRating = 4;
    const ratingCount = 12;
    const ownRating = 2.5;
    const handleRating = () => {};

    const component = renderer.create(
      <RatingComponent
        averageRating={averageRating}
        ratingCount={ratingCount}
        ownRating={ownRating}
        handleRating={handleRating}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
