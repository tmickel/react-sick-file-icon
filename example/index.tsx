import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SickFileIcon } from '../.';
import '../icons.css';

const App = () => {
  const [filename, setFilename] = React.useState('index.js');
  return (
    <div>
      <SickFileIcon filename="hello" isFolder={true} />
      <br />
      <input value={filename} onChange={e => setFilename(e.target.value)} />
      <br />
      <br />
      <div style={{ fontSize: '2em' }}>
        <SickFileIcon filename={filename} isFolder={false} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
