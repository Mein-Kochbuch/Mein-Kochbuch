import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import useCookbooks from '../../src/hooks/useCookbooks';
import {act, renderHook} from '@testing-library/react-hooks';

import * as axios from 'axios';

jest.mock('axios');
axios.create.mockImplementation(() => axios);

it('useCookbooks Test', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({data: {results: [{recipe: '1'}, {recipe: '2'}]}}),
  );

  let cookbooksHook;
  await act(async () => {
    cookbooksHook = renderHook(() => {
      return useCookbooks();
    });
  });

  expect(axios.get).toBeCalled();
  expect(cookbooksHook.result.current.cookbooks).toStrictEqual([
    {recipe: '1'},
    {recipe: '2'},
  ]);
});
