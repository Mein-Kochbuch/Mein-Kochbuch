import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, renderHook} from '@testing-library/react-hooks'

import * as axios from "axios";
import useRecipes from "../../src/hooks/useRecipes";

jest.mock("axios")

it('useRecipes Test', async () => {

    axios.get.mockImplementation(() => Promise.resolve({data: {results: [{pk: "1", title: "test-title"}]}}));

    let cookbooksHook
    await act(async () => {
        cookbooksHook = renderHook(() => {
            return useRecipes()

        })
    });

    expect(axios.get).toBeCalled()
    expect(cookbooksHook.result.current.recipes).toStrictEqual([{pk: "1", title: "test-title"}])
})
