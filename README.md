# NPM Package To maintain the priority of any thing
It is used to update the priority from given data array.  

The package is useful in the case where array of objects one key with unique values as priority and 
out of that if you change in one of the priority, it should automatically update the rest according to the logic.


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

### Update priority using `object` as input

```javascript
Lets take an example where top 5 brands car into the competition,
on every hits on the car by viewer it increase the views of the car and at the end of every day we finalized the top priority car and we rate it as a top most priority car brand.

So here, we have set of brands data with their old priority
/* INPUT */
let data = [
  {'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, 
  {'id': 2, 'brand': 'BMW', 'priority': 2}, 
  {'id': 3, 'brand': 'Audi', 'priority': 3}, 
  {'id': 4, 'brand': 'Porsche', 'priority': 4}, 
  {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}
]
Below is the input data where the dataKey is key which needs to set the new priority which is in dataValue
and rest data objects need to update accordingly.
searchKey is key which helps to identify which objects value is going to update.

let input = {
  dataKey: 'priority',
  dataValue: 1,
  searchKey: 'brand',
  searchValue: 'Porsche'
}
// Method call 
let updatePriority = require('./lib/priority').updatePriority
let output = updatePriority(data, input)
console.log('OUTPUT -- ', JSON.stringify(output))

/* OUTPUT */
[{"id":4,"brand":"Porsche","priority":1},
{"id":1,"brand":"Mercedes-Benz","priority":2},
{"id":2,"brand":"BMW","priority":3},
{"id":3,"brand":"Audi","priority":4},
{"id":5,"brand":"ravi5","Volkswagen":5,"priority":5}]
```

### Update priority using `array of object` as input

```javascript
Continue with the same example
/* INPUT */
let input = [{
      dataKey: 'priority',
      dataValue: 2,
      searchKey: 'brand',
      searchValue: 'Porsche'
    },{
      dataKey: 'priority',
      dataValue: 3,
      searchKey: 'brand',
      searchValue: 'Volkswagen'
    },{
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'BMW'
    }]
// Method Call
let updatePriorityInBulk = require('./lib/priority').updatePriorityInBulk
let output = updatePriorityInBulk(data, input)
console.log('OUTPUT -- ', JSON.stringify(output))

/* OUTPUT */
[{"id":2,"brand":"BMW","priority":1},
{"id":4,"brand":"Porsche","priority":2},
{"id":5,"brand":"Volkswagen","priority":3},
{"id":1,"brand":"Mercedes-Benz","priority":4},
{"id":3,"brand":"Audi","priority":5}]

```

## Changelog

- _1.0.1 Input validations added_
- _1.0.0 Initial version_