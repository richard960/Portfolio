import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/navBar.jsx';
import Side from './components/sideColumn.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div id="main">
      <Side/>
      <div id="center">
      <Nav/>
      <Projects/>
      <Skills/>
      </div>
    </div>)
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));

export default App
