const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  // COLLECT INFO FROM HTML DOM
  const img = document.getElementById('img')
  const names = document.getElementById('name')
  const job = document.getElementById('job')
  const text = document.getElementById('text')
  const next = document.querySelector('#next')
  const prev = document.querySelector('#prev')
  const random = document.querySelector('.random')

let currentItem = 0


// EVENT LISTENER AFTER HTML DOM LOADS
window.addEventListener('DOMContentLoaded', function(){
  showPerson()
})

// SHOW PERSON FUNCTION
function showPerson(){
  const item = reviews[currentItem]
  img.src = item.img
  names.textContent = item.name
  job.textContent = item.job
  text.textContent = item.text
}

// NEXT BUTTON
next.addEventListener('click', function(){
currentItem++
if(currentItem > reviews.length -1){
  currentItem = 0
}
showPerson(currentItem)
})

// PREVIOUS BUTON
prev.addEventListener('click', function(){
  currentItem--
  if(currentItem < 0 ){
    currentItem = reviews.length -1
  }
  showPerson(currentItem)
  })

  // SURPRISE BUTTON
  random.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson(currentItem)
  })