let chai = require('chai')
let expect = chai.expect
const priority = require('../index').priority
const priorityInBulk = require('../index').priorityInBulk

describe('Update Priority from array of data', () => {
  it('1. Should throw error when data is not an array', (done) => {
    // let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let data = {}
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('2. Should throw error when input does not have dataKey', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {
      dataKey_new: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require dataKey as string');
    done()
  })
  it('3. Should throw error when input does not have dataValue', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {
      dataKey: 'priority',
      dataValue_new: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require dataValue as number');
    done()
  })
  it('4. Should throw error when input does not have searchKey', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey_new: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require searchKey as string');
    done()
  })
  it('5. Should throw error when input does not have searchValue', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue_new: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Input data is invalid. Require searchValue');
    done()
  })
  it('6. Should return same length array', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
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
  it('7. Should throw error when priorityInBulk function called without input as an array', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {
      dataKey: 'priority',
      dataValue: 2,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priorityInBulk(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('8. Should return same length array with unique priority', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
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
    let output = priorityInBulk(data, input)
    expect(output.length).to.equal(data.length)
    done()
  })
  it('9. Should throw error when data is an empty array', (done) => {
    // let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let data = []
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('10. Should throw error when data does not contains the search data', (done) => {
    // let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    expect(()=> priority(data, input)).to.throw('Can not find the search data');
    done()
  })
  it('11. Should throw error when input is an empty object', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = {}
    
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('12. Should throw error when input is null', (done) => {
    let data = [{'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}, {'id': 2, 'brand': 'BMW', 'priority': 2}, {'id': 3, 'brand': 'Audi', 'priority': 3}, {'id': 4, 'brand': 'Porsche', 'priority': 4}, {'id': 5, 'brand': 'Volkswagen', 'priority': 5}]
    let input = null
    
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('13. Should throw error when data is null', (done) => {
    let data = null
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
  it('14. Should throw error when data is an array with empty objects', (done) => {
    let data = [{}]
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    
    expect(()=> priority(data, input)).to.throw('Can not find the search data');
    done()
  })
  it('15. Should throw error when data is an object', (done) => {
    let data = {'id': 1, 'brand': 'Mercedes-Benz', 'priority': 1}
    let input = {
      dataKey: 'priority',
      dataValue: 1,
      searchKey: 'brand',
      searchValue: 'Porsche'
    }
    
    expect(()=> priority(data, input)).to.throw('Invalid input provided.');
    done()
  })
})
