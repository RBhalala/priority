# NPM Package To maintain the priority of any thing
It is used to update the priority from given data array

_To Use This Package For Earlier Versions (<6.0) Of Your Node.js Then Download <1.0.0 Version_

## Installation

Install with the node package manager [npm](http://npmjs.org):

- Using npm
  ```shell
  $ npm install priority-update --save
  ```
- Using yarn
  ```shell
  $ yarn add priority-update
  ```

## How To Use?

```javascript
let data = [{'id': 1, 'name': 'ravi', 'prio': 1}, {'id': 2, 'name': 'ravi2', 'prio': 2}, {'id': 3, 'name': 'ravi3', 'prio': 3}, {'id': 4, 'name': 'ravi4', 'prio': 4}, {'id': 5, 'name': 'ravi5', 'prio': 5}]
    let input = {
      dataKey: 'prio',
      dataValue: 4,
      searchKey: 'name',
      searchValue: 'ravi'
    }
  /* OUTPUT */
[{"id":2,"name":"ravi2","prio":1},{"id":3,"name":"ravi3","prio":2},{"id":4,"name":"ravi4","prio":3},{"id":1,"name":"ravi","prio":4},{"id":5,"name":"ravi5","prio":5}]
```