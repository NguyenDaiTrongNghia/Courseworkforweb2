//Create a new button and method to decrement the value of `cart`.

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    image: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    inStock: false,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0,
    FlashSale: false
  },
  methods: {
    addToCart() {
      this.cart += 1
    },   
    DecreaseCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  },
    computed: {
      title() {
          return this.brand + ' ' + this.product  
      },
      image(){
          return this.variants[this.selectedVariant].variantImage
      },
      inStock(){
          return this.variants[this.selectedVariant].variantQuantity
      },
      sale() {
       if (this.FlashSale == true) {
          return this.brand + ' ' +this.product + ' are sale 70%!'
       } else
          return this.brand + ' ' +this.product + ' are not sale'
      }
  }
})

