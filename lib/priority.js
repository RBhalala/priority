let _ = require('underscore')

let updatePriority = (data, input) => {
  if (_.isEmpty(input) || (_.isEmpty(data) && !_.isArray(data))) {
    throw new Error('Invalid input provided.')
  }
  if(!(input.dataKey && typeof input.dataKey === 'string')) {
    throw new Error('Input data is invalid. Require dataKey as string')
  }
  if(!(input.dataValue && typeof input.dataValue === 'number')) {
    throw new Error('Input data is invalid. Require dataValue as number')
  }
  if(!(input.searchKey && typeof input.searchKey === 'string')) {
    throw new Error('Input data is invalid. Require searchKey as string')
  }
  if(!(input.searchValue)) {
    throw new Error('Input data is invalid. Require searchValue as number')
  }
  let searchObj = {}
  searchObj[input.searchKey] = input.searchValue
  /* Find Index number of search data */
  let indexNumber = _.findLastIndex(data, searchObj)
  searchObj[input.dataKey] = input.dataValue

  let countArray = data.length
  data[indexNumber][input.dataKey] = searchObj[input.dataKey]
  data = _.sortBy(data, input.dataKey)
  let i = 1
  _.map(data, (item) => {
    if (item[input.dataKey] === searchObj[input.dataKey]) {

    } else {
      item[input.dataKey] = i
    }
    i += 1
  })

  var filteredIndex = _.findIndex(data, function (item) {
    return (item[input.dataKey] === searchObj[input.dataKey] && item[input.searchKey] !== searchObj[input.searchKey])
  })
  data = _.sortBy(data, input.dataKey)
  if (filteredIndex !== -1) {

    if (searchObj[input.dataKey] - 1 === 0) {
      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] + 1
    } else if (searchObj[input.dataKey] >= countArray) {
      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] - 1
    } else if (!_.isEmpty(_.find(data, function (item) {
      return item[input.dataKey] === searchObj[input.dataKey] + 1
    }))) {
      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] - 1
    } else {
      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] + 1
    }
  }
  data = _.sortBy(data, input.dataKey)
  return data
}
let updatePriorityInBulk = (data, input) => {
  if (_.isEmpty(input) || !_.isArray(input) || _.isEmpty(data) || !_.isArray(data)) {
    throw new Error('Invalid input provided.')
  } 
  input.sort(function(a,b){return a.dataValue - b.dataValue})
  for(let i = 0; i < input.length; i++){
    data = updatePriority(data,input[i])
  }
  return data;
}
module.exports.updatePriority = updatePriority
module.exports.updatePriorityInBulk = updatePriorityInBulk
