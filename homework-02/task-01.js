console.log('task-01 start');

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    let key = array.indexOf(array[i]) + 1;
    console.log(`${key}  -  ${array[i]}`);
  }
}
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
