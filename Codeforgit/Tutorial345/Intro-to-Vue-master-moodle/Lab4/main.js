var app = new Vue({
  el: '#app',
  data: {
   product: 'Socks',
    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'    
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
  } 
})