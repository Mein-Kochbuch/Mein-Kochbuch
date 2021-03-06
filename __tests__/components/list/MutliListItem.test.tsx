import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MultiListItem from '../../../src/components/list/MultiListItem';
import MultiListItemImage from '../../../src/components/list/MultiListItemImage';

jest.mock('../../../src/components/list/MultiListItemImage', () => {
  return props => {
    return <div {...props} />;
  };
});

describe('MultiListItem Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('light', () => {
    const component = renderer.create(
      <MultiListItem title={'test-title'} icon={'test-icon'} />,
    );

    expect(component.toJSON()).toMatchSnapshot();
    expect(component.toJSON().children.length).toBe(2);
    expect(component.toJSON().children[1].children[0]).toBe('test-title');

    const testInstance = component.root;

    expect(testInstance.findAllByType(MultiListItemImage)[0].props.icon).toBe(
      'test-icon',
    );
  });
});
