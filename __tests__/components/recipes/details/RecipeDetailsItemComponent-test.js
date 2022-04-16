import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import RecipeDetailsItemComponent from '../../../../src/components/recipes/details/RecipeDetailsItemComponent';

describe('RecipeDetailsItemComponent', () => {
  it('no styles', () => {
    const component = render(
      <RecipeDetailsItemComponent content={'test-content'} style={{}} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.toJSON().children.length).toBe(1);

    expect(component.toJSON().children[0].children[0]).toEqual('test-content');
  });

  it('custom styles', () => {
    const style = {customStyle: 'style'};

    const component = render(
      <RecipeDetailsItemComponent content={'test-content'} style={style} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.toJSON().children.length).toBe(1);

    expect(component.toJSON().children[0].children[0]).toEqual('test-content');
    expect(component.toJSON().props.style).toStrictEqual({
      customStyle: 'style',
    });
  });
});
