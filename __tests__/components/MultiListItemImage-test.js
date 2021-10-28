import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MultiListItemImage from "../../src/components/MultiListItemImage";

it('MultiListItemImage Heart Test', () => {
    const component = renderer.create(
        <MultiListItemImage icon={"heart"}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
})

it('MultiListItemImage All Test', () => {
    const component = renderer.create(
        <MultiListItemImage icon={"all"}/>
    ).toJSON();

    expect(component).toMatchSnapshot()
})

