// Object spread operator

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}
const { tiger, ...rest } = animals;

objectSpread(tiger, lion, rest);

///////////////////////////////////
// Finally
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4',
];

Promise.all(urls.map((url) => fetch(url).then((people) => people.json())))
  .then((array) => {
    throw Error;
    console.log('1', array[0]);
    console.log('2', array[1]);
    console.log('3', array[2]);
    console.log('4', array[3]);
  })
  .catch((err) => console.log('ughhhh fix it!', err))
  .finally((data) => console.log('extra', data));

///////////////////////////////////
// for await of

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
];

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

const loopThroughUrls = (url) => {
  for (url of urls) {
    console.log(url);
  }
};
loopThroughUrls(urls);

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();
