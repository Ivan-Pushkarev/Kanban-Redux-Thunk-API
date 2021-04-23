import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';
import CreateTask from './CreateTaskForm';
import EditTask from './EditTaskForm';
import List from './List';

function App() {
    
    return (
        <Router>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">List</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
            <Switch>
                <Route path="/create">
                    <CreateTask/>
                </Route>
                <Route path="/edit/:cardId">
                    <EditTask/>
                </Route>
                <Route path="/">
                    <List/>
                </Route>
            </Switch>
        
        </Router>
    );
}

export default App;