<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '../components/Navigation.vue';

const active = ref("new");




</script>

<template>
  <main>
      <div class="navcontainer">
          <Navigation class="navigation" :active="active"/>
      </div>
  </main>
</template>

<style scoped>
main {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;


    background-image: url('../assets/bg.svg');
    background-size: cover;
}

.navigation {
    margin-bottom: 2rem;
}
.flex {
    display: flex;
}
.navcontainer {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;

    display: flex;
    align-items: flex-end;
}

</style>
