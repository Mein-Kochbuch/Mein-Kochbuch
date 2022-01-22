import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, renderHook} from '@testing-library/react-hooks'

import * as axios from "axios";
import useRecipePreviews from "../../src/hooks/useRecipePreviews";

jest.mock("axios")
axios.create.mockImplementation(() => axios)

describe('useRecipePreviews Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('useRecipePreviews', async () => {

        axios.get.mockImplementation(() => Promise.resolve({data: {results: [{pk: "1", title: "test-title"}]}}));

        let recipePreviewHook
        await act(async () => {
            recipePreviewHook = renderHook(() => {
                return useRecipePreviews()

            })
        });

        expect(axios.get).toBeCalled()
        expect(recipePreviewHook.result.current.recipePreviews).toStrictEqual([{pk: "1", title: "test-title"}])
    })

    it('useRecipePreviews loadNext', async () => {

        axios.get.mockImplementationOnce(() => Promise.resolve({
            next: "next-url",
            data: {results: [{pk: "1", title: "test-title"}]}
        }));
        axios.get.mockImplementationOnce(() => Promise.resolve({data: {results: [{pk: "2", title: "test-title-2"}]}}));

        let recipePreviewsHook
        await act(async () => {
            recipePreviewsHook = renderHook(() => {
                return useRecipePreviews()
            })
        });

        await act(async () => {
            recipePreviewsHook.result.current.loadNext()
        })

        expect(axios.get).toBeCalledTimes(2)
        expect(recipePreviewsHook.result.current.recipePreviews).toStrictEqual([{pk: "1", title: "test-title"}, {
            pk: "2",
            title: "test-title-2"
        }])
    })
})
