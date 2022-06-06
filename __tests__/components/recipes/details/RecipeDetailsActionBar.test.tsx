import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import RecipeDetailsActionBar from '../../../../src/components/recipes/details/RecipeDetailsActionBar';
import {render} from '@testing-library/react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import RatingComponent from '../../../../src/components/recipes/details/RatingComponent';

jest.mock('../../../../src/components/recipes/details/RatingComponent', () => {
  return props => {
    return <div {...props} testID="RatingComponent" />;
  };
});

jest.mock('react-native-vector-icons/Feather', () => {
  return props => {
    return <div {...props} testID="Icon" />;
  };
});

describe('RatingComponent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Favorite True', () => {
    const handleRating = props => {};
    const handleFavorize = () => {};

    const component = render(
      <RecipeDetailsActionBar
        averageRating={3}
        ratingCount={17}
        ownRating={5}
        favorite={true}
        handleRating={handleRating}
        handleFavorize={handleFavorize}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Favorite false light theme', () => {
    const handleRating = props => {};
    const handleFavorize = () => {};

    const component = render(
      <RecipeDetailsActionBar
        averageRating={3}
        ratingCount={17}
        ownRating={5}
        favorite={false}
        handleRating={handleRating}
        handleFavorize={handleFavorize}
      />,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
