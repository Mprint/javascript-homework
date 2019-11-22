console.log('task-03 -------->');

function findBestEmployee(employees) {
  const keys = Object.keys(employees);
  const max = 0;
  let name = '';
  let value = '';
  for (const key of keys) {
    name = employees[key] > max ? key : name;
    value = employees[key];
  }
  return `${name}:${value}`;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
