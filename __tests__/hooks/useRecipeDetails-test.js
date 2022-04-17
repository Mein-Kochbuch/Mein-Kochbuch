import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import {act, renderHook} from '@testing-library/react-hooks';

import * as axios from 'axios';
import useRecipeDetails from '../../src/hooks/useRecipeDetails';

jest.mock('axios');
axios.create.mockImplementation(() => axios);

describe('useRecipeDetails Test', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('useRecipeDetails new getRecipeDetailsById', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          pk: '1',
          title: 'test-title',
        },
      }),
    );

    let recipeDetailsHook;
    await act(async () => {
      recipeDetailsHook = renderHook(() => {
        return useRecipeDetails();
      });
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    expect(axios.get).toBeCalled();
    expect(recipeDetailsHook.result.current.recipeDetails).toStrictEqual({
      1: {pk: '1', title: 'test-title'},
    });
  });

  it('useRecipeDetails second getRecipeDetailsById', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          pk: '1',
          title: 'test-title',
        },
      }),
    );
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          pk: '2',
          title: 'test-title',
        },
      }),
    );

    let recipeDetailsHook;
    await act(async () => {
      recipeDetailsHook = renderHook(() => {
        return useRecipeDetails();
      });
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('2');
    });

    expect(axios.get).toBeCalledTimes(2);
    expect(recipeDetailsHook.result.current.recipeDetails).toStrictEqual({
      1: {pk: '1', title: 'test-title'},
      2: {pk: '2', title: 'test-title'},
    });
  });

  it('useRecipeDetails old getRecipeDetailsById', async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          pk: '1',
          title: 'test-title',
        },
      }),
    );

    let recipeDetailsHook;
    await act(async () => {
      recipeDetailsHook = renderHook(() => {
        return useRecipeDetails();
      });
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    expect(axios.get).toBeCalledTimes(1);
    expect(recipeDetailsHook.result.current.recipeDetails).toStrictEqual({
      1: {pk: '1', title: 'test-title'},
    });
  });

  it('useRecipeDetails favorizeRecipeById Test', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          pk: '1',
          title: 'test-title',
          favorite: false,
        },
      }),
    );
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          result: true,
        },
      }),
    );

    let recipeDetailsHook;
    await act(async () => {
      recipeDetailsHook = renderHook(() => {
        return useRecipeDetails();
      });
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    await act(async () => {
      recipeDetailsHook.result.current.favorizeRecipeById('1');
    });

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.post).toBeCalledTimes(1);
    expect(recipeDetailsHook.result.current.recipeDetails).toStrictEqual({
      1: {pk: '1', title: 'test-title', favorite: true},
    });
  });

  it('useRecipeDetails rateRecipeById Test', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          pk: '1',
          title: 'test-title',
          rating: 1,
        },
      }),
    );
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          result: {
            rating: 2.5,
          },
        },
      }),
    );

    let recipeDetailsHook;
    await act(async () => {
      recipeDetailsHook = renderHook(() => {
        return useRecipeDetails();
      });
    });

    await act(async () => {
      recipeDetailsHook.result.current.getRecipeDetailsById('1');
    });

    await act(async () => {
      recipeDetailsHook.result.current.rateRecipeById('1');
    });

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.post).toBeCalledTimes(1);
    expect(recipeDetailsHook.result.current.recipeDetails).toStrictEqual({
      1: {pk: '1', title: 'test-title', rating: 2.5},
    });
  });
});
