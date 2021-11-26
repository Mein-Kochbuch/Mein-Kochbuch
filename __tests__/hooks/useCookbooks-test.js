import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import useCookbooks from "../../src/hooks/useCookbooks";
import {act, renderHook} from '@testing-library/react-hooks'

jest.mock("../../src/utils/AxiosInstance", () => jest.fn(
    () => ({
        get: jest.fn().mockImplementationOnce(() => Promise.resolve({data: {results: [{recipe: "1"}, {recipe: "2"}]}})),
    }))
);

it('useCookbooks Test', async () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    let cookbooksHook
    await act(async () => {
        cookbooksHook = renderHook(() => {
            return useCookbooks()

        })
    });

    expect(cookbooksHook.result.current.cookbooks).toStrictEqual([{recipe: "1"}, {recipe: "2"}])
})
