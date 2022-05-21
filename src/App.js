import './assets/App.css';
import { useState } from 'react';
import StartScreen from './StartScreen';
import NotFound from './NotFound'
import Profile from './Profile';

function App() {
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error();
      })
      .then(response => {
        setSearch(response);
        fetch(`${response.repos_url}`)
          .then((response) => {
            if (response.ok) return response.json();
            else throw new Error();
          })
          .then(response => setRepos(response))
          .catch(err => {
            console.error(err)
          });
      })
      .catch(() => {
        setSearch('notFound');
      });
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
        {search === '' ? <StartScreen /> : search === 'notFound' ? <NotFound /> : <Profile profData={search} repos={repos} />}
      </div>
    </div>
  );
}

export default App;
