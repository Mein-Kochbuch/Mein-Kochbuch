import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ErrorText from "../../src/utils/ErrorText";


describe("ErrorText Test", () => {
    it('ErrorText Test', () => {

        const component = renderer.create(
            <ErrorText text={"Text-Text"}/>
        );

        expect(component.toJSON()).toMatchSnapshot()
    })
})
