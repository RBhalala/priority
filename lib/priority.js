let _ = require('underscore')

let updatePriority = (data, input) => {
  if (_.isEmpty(input) || (_.isEmpty(data) && !_.isArray(data))) {
    throw new Error('Invalid input provided.')
  }
  let searchObj = {}
  searchObj[input.searchKey] = input.searchValue
  // console.log(searchObj)
  /* Find Index number of search data */
  let indexNumber = _.findLastIndex(data, searchObj)
  searchObj[input.dataKey] = input.dataValue

  // console.log('log', indexNumber)
  let countArray = data.length
  data[indexNumber][input.dataKey] = searchObj[input.dataKey]
  data = _.sortBy(data, input.dataKey)
  let i = 1
  _.map(data, (item) => {
    // console.log('item----->', item, item[input.dataKey], searchObj[input.dataKey])
    if (item[input.dataKey] === searchObj[input.dataKey]) {

    } else {
      item[input.dataKey] = i
    }
    i += 1
  })

  var filteredIndex = _.findIndex(data, function (item) {
    // console.log('MOMOMMOMOM', item, item[input.searchKey], searchObj[input.searchKey])
    return (item[input.dataKey] === searchObj[input.dataKey] && item[input.searchKey] !== searchObj[input.searchKey])
  })
  data = _.sortBy(data, input.dataKey)
  // console.log('----------', filteredIndex)
  if (filteredIndex !== -1) {
    // console.log('111111111')

    if (searchObj[input.dataKey] - 1 === 0) {
      // console.log('111111112222')

      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] + 1
    } else if (searchObj[input.dataKey] >= countArray) {
      // console.log('11111113333')

      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] - 1
    } else if (!_.isEmpty(_.find(data, function (item) {
      // console.log('1111111114444')

      return item[input.dataKey] === searchObj[input.dataKey] + 1
    }))) {
      // console.log('11111111155555')
      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] - 1
    } else {
      // console.log('11111111156666')

      data[filteredIndex][input.dataKey] = searchObj[input.dataKey] + 1
    }
  }
  // console.log('=========', data)
  data = _.sortBy(data, input.dataKey)
  return data
}
module.exports.updatePriority = updatePriority
