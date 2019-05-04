import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <React.Fragment>
        <form>
          <input
            type="text"
            placeholder="Search..."
            id="search"
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
          <br />
          <input
            type="checkbox"
            className="checkbox"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="checkbox" className="checkbox">
            Only show products in stock
          </label>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
