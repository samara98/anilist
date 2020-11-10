// import logo from './logo.svg';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

import Header from './components/common/Header';
import NotFoundPage from './views/Page404';
import About from './views/About';
import Home from './views/Home';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/404" exact component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
