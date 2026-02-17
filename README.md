```js
const planets = [
  { name: 'Mercury', position: 1 },
  { name: 'Venus', position: 2 },
  { name: 'Earth', position: 3 },
  { name: 'Mars', position: 4 },
  { name: 'Jupiter', position: 5 },
  { name: 'Saturn', position: 6 },
  { name: 'Uranus', position: 7 },
  { name: 'Neptune', position: 8 }
];

planets.sort((a, b) => a.position - b.position);

planets.forEach(planet => {
  console.log(`Planet: ${planet.name}, Position from Sun: ${planet.position}`);
});
```