let chai = require('chai')
let expect = chai.expect
const priority = require('../index.js').priority

describe('Update Priority from array of data', () => {
  it('1. Should throw error when input does not have dataKey', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}]
    let input = {
      dataKey_new: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require dataKey as string');
    done()
  })
  it('2. Should throw error when input does not have dataValue', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}]
    let input = {
      dataKey: 'priority',
      dataValue_new: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require dataValue as number');
    done()
  })
  it('3. Should throw error when input does not have searchKey', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey_new: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require searchKey as string');
    done()
  })
  it('4. Should throw error when input does not have searchValue', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue_new: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require searchValue');
    done()
  })
  it('5. Should return same length array', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'ravi5', 'Volkswagen': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    let output = priority(data, input)
    // console.log('daadadad', JSON.stringify(output))
    expect(output.length).to.equal(data.length)
    done()
  })
})
