let data = require('@begin/data')

function getRows(result) {
  return Object.keys(result).map(function(key) {
    return result[key];
  }).filter((row) => {
    return row.key;
  });
}
exports.handler = async function getCats() {
  let result  = await data.get({table:'cats'})
  let cats = getRows(result);
  while (result.cursor) {
    result  = await data.get({table:'cats', cursor: result.cursor})
    cats = cats.concat(getRows(result))
  }
  return {
    body: JSON.stringify(cats)
  }
}
