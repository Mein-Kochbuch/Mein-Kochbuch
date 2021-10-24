import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {renderHook} from '@testing-library/react-hooks'
import globalStyles from "../../src/styles/globalStyles";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {useColorScheme} from "react-native-appearance";

jest.mock("react-native-appearance", () => ({
    useColorScheme: jest.fn(),
}));


describe("globalStyles Test", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });


    it('dark', () => {

        useColorScheme.mockReturnValueOnce('dark');

        const styles = renderHook(() => {
            return globalStyles()
        })

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(styles.result.all[0]).toStrictEqual({
            border: {
                borderStyle: "solid",
                borderColor: Colors.lighter,
                borderRadius: 10,
                borderWidth: 2,
            },
        })
    })

    it('light', () => {

        useColorScheme.mockReturnValueOnce('light');

        const styles = renderHook(() => {
            return globalStyles()
        })

        expect(useColorScheme).toHaveBeenCalledTimes(1);
        expect(styles.result.all[0]).toStrictEqual({
            border: {
                borderStyle: "solid",
                borderColor: Colors.darker,
                borderRadius: 10,
                borderWidth: 2,
            },
        })
    })
})
