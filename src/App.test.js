import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders Home Text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/🔍 Search/i)).toBeInTheDocument();
  expect(getByText(/🔄 Counter/i)).toBeInTheDocument();


  expect(getByText(/Search Form/i)).toBeInTheDocument();
});
