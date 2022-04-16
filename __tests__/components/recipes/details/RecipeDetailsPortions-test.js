import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import RecipeDetailsPortions from '../../../../src/components/recipes/details/RecipeDetailsPortions';

describe('RecipeDetailsPortions', () => {
  it('no styles', () => {
    const component = render(
      <RecipeDetailsPortions content={'3'} style={{}} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.toJSON().children.length).toBe(1);

    expect(component.toJSON().children[0].children[0]).toEqual('3');
  });

  it('custom styles', () => {
    const style = {customStyle: 'style'};

    const component = render(
      <RecipeDetailsPortions content={'7'} style={style} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.toJSON().children.length).toBe(1);

    expect(component.toJSON().children[0].children[0]).toEqual('7');
    expect(component.toJSON().props.style).toStrictEqual([
      {width: 150},
      {customStyle: 'style'},
    ]);
  });
});
