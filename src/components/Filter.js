import { InputGroup, DropdownButton, Dropdown, FormControl, ListGroupItem } from "react-bootstrap";

function Filter ({ onClickCategory, onInput, filterValue }) {
  const filterCategory = ['komoditas', 'harga', 'ukuran', 'daerah'];
  return (
    <div className="filter_wrapper">
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Filter By"
          id="input-group-dropdown-1"
        >
          {filterCategory.map(item => (
            <Dropdown.Item 
              key={item} 
              onClick={() => onClickCategory(item)}
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