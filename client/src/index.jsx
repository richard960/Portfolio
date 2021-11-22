import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/navBar.jsx';
import Side from './components/sideColumn.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <Side/>
      <Nav/>
    </div>)
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));

export default App
