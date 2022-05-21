import './assets/App.css';
import { useState } from 'react';
import StartScreen from './StartScreen';
import NotFound from './NotFound'
import Profile from './Profile';
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
        const octokit = new Octokit({
          auth: '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',
          acceptstring: 'application/vnd.github.v3+json'
        })
        const response = await octokit.request(`GET /users/${name}`, {
          username: 'USERNAME'
        });

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
        const octokit = new Octokit({
          auth: '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',
          acceptstring: 'application/vnd.github.v3+json'
        })
        const response = await octokit.request(`GET /users/${name}/repos`, {
          username: 'USERNAME'
        });
        setRepos(response.data);
      } 
      catch(e) {
        setRepos([]);
        console.error('no repos');
      }
    }

    searchUsers()
  }

  return (
    <div className='page-container'>
      <header>
        <img src={require('./assets/gh-logo.png')} alt="vector" />
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={inp => setName(inp.target.value)} />
        </form>
      </header>
      <div className='info-container'>
        {users === '' ? <StartScreen /> : loading ?  <div className='for-loader'><div className="loader"></div></div>  : users === 'notFound' ? <NotFound /> : <Profile profData={users} repos={repos} />}
      </div>
    </div>
  );
}

export default App;
