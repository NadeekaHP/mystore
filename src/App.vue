<template>

  <div id="app" class="container my-5">
    
    <div class="row mb-3">
      <div class="col-md-9">
        <img src="/assets/mylogo.png">
        <!--<h1>My online store</h1>-->
      </div>
      
      <div class="col-md-3">
      <br><br>
        <ShoppingCart />
      </div>
    </div>

    <br>
    
    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :discounted="item.discounted" />
    </div>
     
  </div>
</template>

<script>
  import Item from './Item.vue';
  import ShoppingCart from './ShoppingCart.vue';
  
  export default {
    name: 'app',
    computed: {
      forSale() { return this.$store.getters.forSale; },
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      Item,
      ShoppingCart,
    },
  };
</script>
<style>
  /* Nothing for now */
</style>