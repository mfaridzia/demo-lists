import { useState } from "react";
import { InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

function Filter ({ onClickCategory, onInput, filterValue }) {
  const [filterByText, setFilterByText] = useState('');
  const filterCategory = ['komoditas', 'harga', 'ukuran', 'daerah'];

  const handleOnClickCategory = (item) => {
    onClickCategory(item);
    setFilterByText(item);
  }

  return (
    <div className="filter_wrapper">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title={!filterByText ? 'Filter By' : filterByText}
          id="input-group-dropdown-1"
        >
          {filterCategory.map(item => (
            <Dropdown.Item 
              key={item} 
              onClick={() => handleOnClickCategory(item)}
            >
              {item}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <FormControl 
          aria-label="filter-by"
          type="text" 
          placeholder="Masukan kata kunci..."
          value={filterValue}
          onChange={onInput}
        />
      </InputGroup>
    </div>
  )
}

export default Filter;