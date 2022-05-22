import './css/App.css';
import { useState } from 'react';
import StartScreen from './components/StartScreen';
import NotFound from './components/NotFound'
import Profile from './components/Profile';
import { Octokit } from "@octokit/core";

function App() {
  const [name, setName] = useState('');
  const [users, setUsers] = useState('');
  const [repos, setRepos] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    async function searchUsers() {
      try {
        const octokit = new Octokit();
        const response = await octokit.request(`GET /users/${name}`);

        setUsers(response.data);
        setLoading(false);
        searchRepos();
      }
      catch(e) {
        setLoading(false);
        setUsers('notFound');
        console.error('no such a user');
      }
    }

    async function searchRepos() {
      try {
        const octokit = new Octokit();
        const response = await octokit.request(`GET /users/${name}/repos`);
        setRepos(response.data);
      } 
      catch(e) {
        setRepos([]);
        console.error('no such a user');
      }
    }

    searchUsers()
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
