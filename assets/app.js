// bcw - base code

const iceCream = [
  {
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
}, 
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
}, 
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}
]

const toppings = [
  {
  name: 'Sprinkles',
  price: .25,
  quantity: 0
}, 
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}
]
const cones = [
  {
  name: 'waffle cone',
  price: .75,
  quantity: 0
}, 
{
  name: 'waffle bowl',
  price: 1.25,
  quantity: 0
},
{
  name: 'small cone',
  price: .5,
  quantity: 0
}
]


// my java script
const checkoutWindowElem = document.getElementById('checkoutWindow')
const totalCostElem = document.getElementById('totalCost')

function buyNow() {
  console.log('buy now')
}

function addToCart(name) {
  console.log(`added ${name} to cart`)
  
}

