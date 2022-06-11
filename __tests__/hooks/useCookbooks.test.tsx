import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import useCookbooks from '../../src/hooks/useCookbooks';
import {act, renderHook} from '@testing-library/react-hooks';

import * as axiosMock from 'axios';

jest.mock('axios');
axiosMock.create.mockImplementation(() => axiosMock);

describe('useCookbooks', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('useCookbooks Test', async () => {
    axiosMock.get.mockImplementation(() =>
      Promise.resolve({data: [{recipe: '1'}, {recipe: '2'}]}),
    );

    let cookbooksHook;
    await act(async () => {
      cookbooksHook = renderHook(() => {
        return useCookbooks();
      });
    });

    expect(axiosMock.get).toBeCalled();
    expect(cookbooksHook.result.current.cookbooks).toStrictEqual([
      {recipe: '1'},
      {recipe: '2'},
    ]);
  });
});
