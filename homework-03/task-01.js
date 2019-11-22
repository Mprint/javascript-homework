console.log('task-01 -------->');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log('Value: ', user[key]);
}
