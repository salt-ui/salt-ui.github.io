---
order: 0
title: 带容器的搜索栏
---



```jsx
import { SearchBar } from 'saltui';

const { WithContainer } = SearchBar;

// build之后, 测试一下下面一行, 把上面一行注释掉
// const SearchBar = require('../../dist');

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
  }

  fetchData(params = {}) {
    const keyword = params.keyword;
    if (!keyword) {
      return;
    }
    this.setState({
      keyword,
    });
  }

  render() {
    if (this.state.keyword) {
      return <div className="list">{`这里是 ${this.state.keyword} 的搜索结果`}</div>;
    }
    return null;
  }
}

class Demo extends React.Component {
  render() {
    const t = this;
    const props = {
      locale: 'zh_CN',
      instantSearch: true,
      hasHistory: true,
      searchDelay: 450,
      onEnter: () => { console.log('enter'); },
      onExit: () => { console.log('exit'); },
      onChange: (value) => {
        console.log(`Typing>>${value}`);
      },
      onSearch: (value) => {
        console.info(`Do search>>${value}`);
        if (t.refs.list) {
          t.refs.list.fetchData({
            keyword: value,
          });
        }
      },
    };
    return (<div>
      <div className="head">带容器的搜索栏</div>
      <WithContainer {...props}>
        <List ref="list" />
      </WithContainer>
    </div>);
  }
}


ReactDOM.render(<Demo />, mountNode);
```
```css
body {
    background-color: #fff;
    height: 2000px;
}

.head {
    padding: 20px;
}

.list {
    background: #eee;
}
```