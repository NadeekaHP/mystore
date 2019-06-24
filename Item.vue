<template>
  <div class="col-md-3">
    <div class="card" >
      <img :src="image" :alt="name" class="card-img-top" @click="clickForProductDetails">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-text">{{ price | dollars }}</div>
        <div class="card-text"><strike>{{ discounted | dollars }}</strike></div>
        <div class="row justify-content-end">
          <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { dollars } from './filters';
export default {
  name: 'item',
  props: ['invId','name','image','price','discounted'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
    clickForProductDetails() {  
      //this.$router.push({name:'details'})    
        window.open("https://www.google.com/")
  }
  },
  
};
</script>