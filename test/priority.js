let chai = require('chai')
let expect = chai.expect
const priority = require('../index.js').priority

describe('Update Priority from array of data', () => {
  it('Should return same length array', (done) => {
    let data = [{'id': 1, 'name': 'ravi', 'prio': 1}, {'id': 2, 'name': 'ravi2', 'prio': 2}, {'id': 3, 'name': 'ravi3', 'prio': 3}, {'id': 4, 'name': 'ravi4', 'prio': 4}, {'id': 5, 'name': 'ravi5', 'prio': 5}]
    let input = {
      dataKey: 'prio',
      dataValue: 4,
      searchKey: 'name',
      searchValue: 'ravi'
    }
    let output = priority(data, input)
    console.log('daadadad', output)
    expect(output.length).to.equal(data.length)
    done()
  })
})
