'use strict';

import { QueryClient, QueryClientProvider } from 'react-query';
import { axiosInstance } from '../../config/axiosInstance';
import { render } from '@testing-library/react';
import { uiConfigUrl } from '../../config/endpoints';
import { useInfoMappings } from '../../hooks/useInfoMappings';

jest.unmock('../../hooks/useInfoMappings');
jest.mock('../../config/axiosInstance');

describe('useInfoMappings', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch ui-config data successfully', async () => {
    const mockData = { key: 'value', settings: { theme: 'test' } };
    axiosInstance.get.mockResolvedValue({ data: mockData });

    let hookResult;
    function TestComponent() {
      hookResult = useInfoMappings();
      return (
        <div data-testid="result">
          {hookResult.isSuccess ? 'success' : hookResult.isLoading ? 'loading' : 'none'}
        </div>
      );
    }

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

    const { findByText } = render(
      <QueryClientProvider client={queryClient}>
        <TestComponent />
      </QueryClientProvider>
    );

    await findByText('success');

    expect(axiosInstance.get).toHaveBeenCalledWith(uiConfigUrl);
    expect(hookResult.data).toEqual(mockData);
  });
});
