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

describe('RatingComponent Test', () => {
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
    expect(component.toJSON().children.length).toBe(2);

    expect(component.getByTestId('RatingComponent').props.ownRating).toEqual(5);
    expect(
      component.getByTestId('RatingComponent').props.averageRating,
    ).toEqual(3);
    expect(component.getByTestId('RatingComponent').props.ratingCount).toEqual(
      17,
    );
    expect(component.getByTestId('RatingComponent').props.handleRating).toEqual(
      handleRating,
    );

    expect(component.getByTestId('Icon').props.name).toEqual('heart');
    expect(component.getByTestId('Icon').props.size).toEqual(35);
    expect(component.getByTestId('Icon').props.color).toEqual('#F10F0F');
    expect(component.getByTestId('Icon').props.onPress).toEqual(handleFavorize);
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
    expect(component.toJSON().children.length).toBe(2);

    expect(component.getByTestId('RatingComponent').props.ownRating).toEqual(5);
    expect(
      component.getByTestId('RatingComponent').props.averageRating,
    ).toEqual(3);
    expect(component.getByTestId('RatingComponent').props.ratingCount).toEqual(
      17,
    );
    expect(component.getByTestId('RatingComponent').props.handleRating).toEqual(
      handleRating,
    );

    expect(component.getByTestId('Icon').props.name).toEqual('heart');
    expect(component.getByTestId('Icon').props.size).toEqual(35);
    expect(component.getByTestId('Icon').props.color).toEqual(Colors.darker);
    expect(component.getByTestId('Icon').props.onPress).toEqual(handleFavorize);
  });
});
