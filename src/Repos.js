import React, { useEffect, useState } from 'react';
import './assets/Repos.css';
import ReactPaginate from 'react-paginate';
import NoRepos from './NoRepos';

function Items({ currentItems }) {
  console.log(currentItems)
  return (
    <div className='listOfRepos'>
      <h1>Repositories ({currentItems.length})</h1>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className='repo'>
            <a href={item.html_url}><p className='repoName'>{item.name}</p></a>
            <p className='repoDescrip'>{item.description}</p>
          </div>
      ))}
    </div>
  );
}

function PaginatedItems({ repos, itemsPerPage }) {
  const [currentRepos, setCurrentRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    console.log(repos)
    const endOffset = itemOffset + itemsPerPage;
    setCurrentRepos(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [repos, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentRepos} />
      <div className='pagination'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="❯"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="❮"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}

const Repos = ({ repos }) => {
  return (
    <>
      {repos.length !== 0 ? <PaginatedItems repos={repos} itemsPerPage={4} /> : <NoRepos />}
    </>
  )
}

export default Repos