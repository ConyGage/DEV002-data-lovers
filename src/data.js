// estas funciones son de ejemplo
// export const sortDataTypeAsc = (dp) => {
export const sortData = (dp, option) => {
  if (option == "optNumAsc") {
    let sortDp = dp.sort((a, b) => {
      return ((a.type[0]).localeCompare(b.type[0]));
      // return console.log(a.type, b.type);
    });
    //return
  }
  if (option == "numDesc") {
    let sortDp = dp.sort((a, b) => {
      return -((a.type[0]).localeCompare(b.type[0]));
      // return console.log(a.type, b.type);
    });
    //return
  }
  // let valueOption = option.value;
  // let sortType = dp.sort((a, b) => {
    // return ((a.type[0]).localeCompare(b.type[0]));//¿Por qué los parentesis externos?
    // return console.log(a.type, b.type);
  // });
  // console.log(dp)
  return sortDp

}
// console.log(sortDataTypeAsc(dp));

// const items = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
// items.sort((a, b) => a.localeCompare(b));

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']




// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


// const sortData = (data, sortBy, sortOrder) => {
//   console.log(data, sortBy, sortOrder);
//   return console.log('example');
// };

// const filterData = (data, condition) => {
//   return 'OMG';
// };

// const computeStats = (data) => {
//   return 'OMG';
// };

// export { sortData };