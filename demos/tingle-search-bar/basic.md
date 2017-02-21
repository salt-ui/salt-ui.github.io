---
order: 0
title: 基础使用
---



```jsx
const { Component } = React;
const { SearchBar } = SaltUI;

class SearchBarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({
      keyword,
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={this.onSearch}>
          <div>{this.state.keyword}</div>
        </SearchBar>
      </div>
    );
  }
}

ReactDOM.render(<SearchBarDemo />, mountNode);
```
