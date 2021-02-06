import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SickFileIcon } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SickFileIcon filename="test.rb" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
