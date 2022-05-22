import React, { useEffect, useState } from 'react';
import '../css/Repos.css';
import ReactPaginate from 'react-paginate';
import NoRepos from './NoRepos';

const Repos = ({ repos }) => {
  return (
    <>
      {repos.length !== 0 ? <PaginatedItems repos={repos} itemsPerPage={4} /> : <NoRepos />}
    </>
  )
}

function PaginatedItems({ repos, itemsPerPage }) {
  const [currentRepos, setCurrentRepos] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentRepos(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [repos, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <div className='repos-and-pag'>
      {currentRepos !== null ? <Items currentItems={currentRepos} reposLength={repos.length} /> : null}
      <div className='pagination'>
        <ReactPaginate
          breakLabel="..."
          nextLabel="❯"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="❮"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

function Items({ currentItems, reposLength }) {
  return (
    <div className='listOfRepos'>
      <h1>Repositories ({reposLength})</h1>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className='repo'>
            <a href={item.html_url} target='_blank' rel="noreferrer"><p className='repoName'>{item.name}</p></a>
            <p className='repoDescrip'>{item.description ? item.description : <i>No description provided</i>}</p>
          </div>
      ))}
    </div>
  );
}

export default Repos;