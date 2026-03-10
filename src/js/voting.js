/* voting */

// Elements
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const voteBtn = document.getElementById('voteBtn')
const resultsBtn = document.getElementById('resultsBtn')
const votingArea = document.getElementById('votingArea')

// Load images ( Vite )
let imageModules = import.meta.glob('../img/*.jpg', {
  eager: true,
  import: 'default'
})

let images = Object.values(imageModules)

// Track scores
let scores = {}
images.forEach(img => scores[img] = 0)

// State
let selectedImage = null
let currentPair = []

// Pick two random images
function getRandomPair() {
  let firstIndex = Math.floor(Math.random() * images.length);
  let secondIndex = Math.floor(Math.random() * images.length);

  if (secondIndex === firstIndex){
    secondIndex = Math.floor(Math.random() * images.length);
  }

  return [images[firstIndex], images[secondIndex]]
}

// Show pair and reset selection
function showPair() {
  selectedImage = null
  voteBtn.disabled = true

  currentPair = getRandomPair()

  img1.src = currentPair[0]
  img2.src = currentPair[1]

  img1.classList.remove('selected')
  img2.classList.remove('selected')
}

// Select image
function selectImage(element, imagePath) {
  selectedImage = imagePath
  voteBtn.disabled = false

  img1.classList.remove('selected')
  img2.classList.remove('selected')

  element.classList.add('selected')
}

img1.addEventListener('click', () =>
  selectImage(img1, currentPair[0])
)

img2.addEventListener('click', () =>
  selectImage(img2, currentPair[1])
)

// Vote
voteBtn.addEventListener('click', () => {
  if (!selectedImage) return

  scores[selectedImage]++
  showPair()
})

// Show results
resultsBtn.addEventListener('click', showResults);

function showResults() {
  votingArea.innerHTML = '<h2>Resultat</h2>'

  let table = document.createElement('table')
  table.innerHTML =
  `
    <tr>
      <th>Bild</th>
      <th>Röster</th>
    </tr>
  `

  let sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  sorted.forEach(([img, count]) => {
    let row = document.createElement('tr')
    row.innerHTML = `
      <td><img src="${img}"></td>
      <td>${count}</td>
    `
    table.appendChild(row)
  })

  votingArea.appendChild(table)
}

// Show first pair
showPair();