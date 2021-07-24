import './App.css';
import SearchPage from './pages/SearchPage/SearchPage';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ListSearchPage from './pages/ListSearchPage/ListSearchPage';
import FavoritePage from './pages/FavoritePage/FavoritePage';

function App() {
  return (
   <Router>
     <Switch>
     <Route path="/favorite">
          <FavoritePage/>
        </Route>
        <Route path="/artist/:keyword">
          <ListSearchPage/>
        </Route>
        <Route path="/album/:id">
          <DetailPage/>
        </Route>
        <Route path="/search">
          <SearchPage/>
        </Route>
        <Route path="/">
          <ListPage/>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
