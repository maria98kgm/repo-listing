import React, { useEffect, useState } from 'react';
import './assets/Repos.css';
import ReactPaginate from 'react-paginate';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.id} className='repo'>
            <p className='repoName'>{item.name}</p>
            <p className='repoDescrip'>{item.description}</p>
          </div>
      ))}
    </>
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
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className='pagination'
      />
    </>
  );
}

const Repos = ({ repos }) => {
  return (
    <>
      {repos ? <PaginatedItems repos={repos} itemsPerPage={4} /> : null}
    </>
  )
}

export default Repos