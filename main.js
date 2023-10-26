// https://pokeapi.co/api/v2/pokemon/blaziken

console.log('JavaScript is working');

function initialize() {
  fetch('https://pokeapi.co/api/v2/pokemon/blaziken')
  .then((res) => {
    return res.json()
  }).then((data) => {
    console.log('Data =>', data);
  })
}

const pkForm = document.getElementById('pk-form');
const pkName = document.getElementById('pk-name');

pkForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(`https://pokeapi.co/api/v2/pokemon/${pkName.value}`)
  .then((res) => {
    return res.json()
  }).then((data) => {
    console.log('Data =>', data);
  })
})