import './css/App.css';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import NotFound from './components/NotFound'
import Profile from './components/Profile';

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    fetch(`https://api.github.com/users/${name}`)
    .then(users_responce => {
      if (users_responce.ok) return users_responce.json();
    })
    .then(json_users => {
      setUsers(json_users);
      setLoading(false);

      fetch(`https://api.github.com/users/${name}/repos?per_page=100`)
      .then(repos_response => {
        if (repos_response.ok) return repos_response.json();
      })
      .then(json_repos => {
        setRepos(json_repos);
      })
      .catch(() => {
        console.error('No Repos Found');
      });
    })
    .catch(() => {
      setLoading(false);
      setUsers('notFound');
      console.error('No Such User')
    });
  }

  return (
    <div className='page-container'>
      <header>
        <img src={require('./images/gh-logo.png')} alt="vector" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={inp => setName(inp.target.value)} />
        </form>
      </header>
      <div className='info-container'>
        { loading ?  <div className='for-loader'><div className="loader"></div></div>  
          : users === '' ? <StartScreen /> 
          : users === 'notFound' ? <NotFound /> 
          : <Profile profData={users} repos={repos} /> 
        }
      </div>
    </div>
  );
}

export default App;
