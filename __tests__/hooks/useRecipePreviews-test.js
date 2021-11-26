import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, renderHook} from '@testing-library/react-hooks'

import useRecipePreviews from "../../src/hooks/useRecipePreviews";

jest.mock("../../src/utils/AxiosInstance", () => jest.fn(
    () => ({
        get: jest.fn().mockImplementationOnce(() => Promise.resolve({
            data: {
                results: [{
                    pk: "1",
                    title: "test-title"
                }]
            }
        }))
            .mockImplementationOnce(() => Promise.resolve({
                data: {
                    results: [{
                        pk: "2",
                        title: "test-title-2"
                    }]
                }
            }))
    }))
);

describe('useRecipePreviews Test', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    //AxiosInstance().get.mockImplementationOnce(() => Promise.resolve({data: {results: [{pk: "1", title: "test-title"}]}}))

    it('useRecipePreviews', async () => {

        let recipePreviewHook
        await act(async () => {
            recipePreviewHook = renderHook(() => {
                return useRecipePreviews()

            })
        });

        expect(recipePreviewHook.result.current.recipePreviews).toStrictEqual([{pk: "1", title: "test-title"}])
    })

    it('useRecipePreviews loadNext', async () => {

        // AxiosInstance().get.mockImplementationOnce(() => Promise.resolve({
        //     next: "next-url",
        //     data: {results: [{pk: "1", title: "test-title"}]}
        // }));
        // AxiosInstance().get.mockImplementationOnce(() => Promise.resolve({
        //     data: {
        //         results: [{
        //             pk: "2",
        //             title: "test-title-2"
        //         }]
        //     }
        // }));

        let recipePreviewsHook
        await act(async () => {
            recipePreviewsHook = renderHook(() => {
                return useRecipePreviews()
            })
        });

        await act(async () => {
            recipePreviewsHook.result.current.loadNext()
        })

        //expect(AxiosInstance().get).toBeCalledTimes(2)
        expect(recipePreviewsHook.result.current.recipePreviews).toStrictEqual([
            {pk: "1", title: "test-title"},
            {pk: "2", title: "test-title-2"}
        ])
    })
})
