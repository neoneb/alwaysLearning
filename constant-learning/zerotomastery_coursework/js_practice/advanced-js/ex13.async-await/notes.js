// ASYNC AWAIT

movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then(() => movePlayer(330, 'Left'));

async function playerStart() {
  const first = await movePlayer(100, 'Left'); //pause
  const second = await movePlayer(400, 'Left'); //pause
  await movePlayer(10, 'Right'); //pause
  await movePlayer(330, 'Left'); //pause
}

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

fetchUsers();

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((response) => response.json());
  })
)
  .then((array) => {
    console.log('users:', array[0]);
    console.log('posts:', array[1]);
    console.log('albums:', array[2]);
  })
  .catch(() => console.log('error'));

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((response) => response.json());
      })
    );
    console.log('users:', users);
    console.log('posts:', posts);
    console.log('albums:', albums);
  } catch (err) {
    console.log('ERROR', err);
  }
};

getData();
