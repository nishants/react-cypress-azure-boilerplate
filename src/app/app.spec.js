import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';

Enzyme.configure({ adapter: new Adapter() });

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
