// get all movies from 2021 with rating > 4
// descending sort by rating
// display only title
// result b and a

const movies = [
  {title: 'a', year: 2021, rating: 4.5},
  {title: 'b', year: 2021, rating: 4.7},
  {title: 'c', year: 2021, rating: 3},
  {title: 'd', year: 2020, rating: 4.5},
];

const titles = movies
  .filter(m => m.year === 2021 && m.rating > 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map(m => m.title);

console.log(titles);
