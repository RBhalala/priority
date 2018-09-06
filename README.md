# NPM Package To maintain the priority of any thing
It is used to update the priority from given data array
_The package is useful in the case where array of objects one key with unique values as priority and 
out of that if you change in one of the priority, it should automatically update the rest according to the logic_

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
Lets take an example where top 5 brands car into the competition
on every hits on the car by viewer it sets to new priority
/* INPUT */
let data = [
  {'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, 
  {'id': 2, 'brand': 'BMW', 'priority': 2}, 
  {'id': 3, 'brand': 'Audi', 'priority': 3}, 
  {'id': 4, 'brand': 'Porsche', 'priority': 4}, 
  {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}
]
let input = {
  dataKey: 'priority',
  dataValue: 1,
  searchKey: 'brand',
  searchValue: 'Porsche'
}
/* OUTPUT */
[{"id":4,"brand":"Porsche","priority":1},
{"id":1,"brand":"Mercedes-Benz","priority":2},
{"id":2,"brand":"BMW","priority":3},
{"id":3,"brand":"Audi","priority":4},
{"id":5,"brand":"ravi5","Volkswagen":5,"priority":5}]
```