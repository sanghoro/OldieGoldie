import React from 'react';
import "../Styles/SearchItems.css";
import "../Styles/CategoryStyle.css"
import ItemCard from './ItemCard';
import PropTypes from 'prop-types'

const SearchItems = ({searchTerm, setSearchTerm, allItems, addToBag}) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const foundItems = allItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="Search-container">
      <h2>Search for products</h2>
      <input
        className='Searchbar'
        type='text'
        placeholder='Search'
        name='Searchbar'
        value={searchTerm}
        onChange={handleInputChange}
      />
    {searchTerm && (
            <div className="search-results">
              <h2>Search Results</h2>
              <div className="items-container">
                {foundItems.length > 0 ? (
                  foundItems.map(item => (
                    <ItemCard key={item.id} item={item} addToBag={addToBag} />
                  ))
                ) : (
                  <p>No items with that name</p>
                )}
              </div>
            </div>
          )}
        </div>
      );
};

SearchItems.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  allItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToBag: PropTypes.func.isRequired,
}

export default SearchItems;