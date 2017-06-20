var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {}
 var price = Math.floor(Math.random() * 100)

 newItem[item] = price
 cart.push(newItem)

 console.log(`${item} has been added to your cart.`)

 return cart
}

function viewCart() {
  var items = []

  if (cart.length < 1) {
    console.log("Your shopping cart is empty.")
  } else {
    for (let i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i])[0]
      var price = Object.values(cart[i])[0]

      items.push(`${item} at \$${price}`)
    }

    console.log(`In your cart, you have ${items.join(", ")}.`)
  }
}

function total() {
  var total = 0

  for (let i = 0; i < cart.length; i++) {
    var price = Object.values(cart[i])[0]

    total += price
  }

  return total
}

function removeFromCart(item) {
  var result = false

  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      result = true
      cart.splice(i, 1)
    } else {
      result = false
    }
  }

  if (!result) {
    console.log("That item is not in your cart.")
  }

}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('We don\'t have a credit card on file for you to place your order.')
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
    
    cart.length = 0
  }
}
