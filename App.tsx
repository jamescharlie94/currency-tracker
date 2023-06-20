import React from 'react';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import RootNavigator from './src/navigation/RootNavigator';
import {queryClientAxios} from './src/config/axios';

const queryClient = new QueryClient({});

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  );
}

export default App;
