import React, { useState } from 'react';

import CodeBlock from '../components/CodeBlock'

export const Playlist = [
    { id:'1', uid: "51d64597", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: '/beats/floating.mp3', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'2', uid: "67ddeced", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: '/beats/love_keys.mp3', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'3', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: '/beats/spi.mp3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'4', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: '/beats/spi.mp3', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'5', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: '/beats/spi.mp3', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'6', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: '/beats/spi.mp3', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'7', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: '/beats/spi.mp3', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'8', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: '/beats/spi.mp3', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'1', uid: "51d64597", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: '/beats/floating.mp3', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'2', uid: "67ddeced", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: '/beats/love_keys.mp3', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'3', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: '/beats/spi.mp3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'4', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: '/beats/spi.mp3', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'5', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: '/beats/spi.mp3', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'6', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: '/beats/spi.mp3', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'7', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: '/beats/spi.mp3', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'8', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: '/beats/spi.mp3', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    
    // Add more items if needed
];


const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    const handlePrevPage = () => {
      if (currentPage > 1) onPageChange(currentPage - 1);
    };
  
    const handleNextPage = () => {
      if (currentPage < totalPages) onPageChange(currentPage + 1);
    };
  
    return (
      <div className="flex justify-center mt-4 space-x-4">
        <button 
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button 
          className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };



function DesignPagination() {

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  // Calculate the current items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = Playlist.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div>
        
<div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.tags}</p>
            <p>{item.duration} | {item.bpm}</p>
          </div>
        ))}
      </div>

      <Pagination
        totalItems={Playlist.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>

<CodeBlock>{`import React, { useState } from 'react';

export const Playlist = [
    { id:'1', uid: "51d64597", thumbnail: 'https://picsum.photos/id/10/300/300.webp', file: '/beats/floating.mp3', title: 'Floating', tags: 'Drake Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'2', uid: "67ddeced", thumbnail: 'https://picsum.photos/id/20/300/300.webp', file: '/beats/love_keys.mp3', title: 'Love Keys', tags: 'Quavo Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'3', uid: "5fbb6d51", thumbnail: 'https://picsum.photos/id/30/300/300.webp', file: '/beats/spi.mp3', title: 'spi', tags: 'Lil Baby Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'4', uid: "6926208d", thumbnail: 'https://picsum.photos/id/40/300/300.webp', file: '/beats/spi.mp3', title: 'Boo\'d Up', tags: 'Ella Mai Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'5', uid: "06cc2920", thumbnail: 'https://picsum.photos/id/50/300/300.webp', file: '/beats/spi.mp3', title: 'Nice For What', tags: 'Travis Scott Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'6', uid: "00c3356e", thumbnail: 'https://picsum.photos/id/60/300/300.webp', file: '/beats/spi.mp3', title: 'Yes Indeed', tags: 'Isaiah Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'7', uid: "4b5f7fea", thumbnail: 'https://picsum.photos/id/70/300/300.webp', file: '/beats/spi.mp3', title: 'Love Lies', tags: 'Lil Wayne Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    { id:'8', uid: "1acb5332", thumbnail: 'https://picsum.photos/id/80/300/300.webp', file: '/beats/spi.mp3', title: 'Mine', tags: '50 Cent Type Beat', duration: '4:05', bpm: '120 bpm', amount:'1' },
    // Add more items if needed
];

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-4 space-x-4">
      <button 
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" 
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button 
        className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400" 
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

const PlaylistComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  // Calculate the current items to display
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = Playlist.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {currentItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow-md">
            <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p>{item.tags}</p>
            <p>{item.duration} | {item.bpm}</p>
          </div>
        ))}
      </div>

      <Pagination
        totalItems={Playlist.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PlaylistComponent;
`}</CodeBlock>

    </div>
  )
}

export default DesignPagination