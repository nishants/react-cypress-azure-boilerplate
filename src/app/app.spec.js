import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './app';

const mockStore = configureStore([]);

it('renders without crashing', () => {
  const initialState = {};
  const store = mockStore(initialState);

  const enzymeWrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(enzymeWrapper).toMatchSnapshot();
});
