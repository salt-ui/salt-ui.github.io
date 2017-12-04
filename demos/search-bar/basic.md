---
order: 0
title: 搜索栏
---



```jsx

import { SearchBar } from 'saltui';

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
      <div className="head">搜索栏</div>
      <SearchBar {...props} />
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