<script setup>
import { ref, onMounted } from 'vue';
import Logo from '../components/icons/Logo.vue';
import LoadAnimation from '../components/LoadAnimation.vue';
import Navigation from '../components/Navigation.vue';

let loading = ref(true);
let active = "home";


onMounted(() => {
setTimeout(function(){ 
    loading.value = false;
}, 2000);
})
</script>

<template>
  <main>
      <Navigation :active="active"></Navigation>
    <Logo class="logo"></Logo>
    <img src="../assets/currentLoc.svg" alt="" class="currentloc">
    <div class="loadcontainer">
        <LoadAnimation v-if="loading" class="load"></LoadAnimation>
    </div>
  </main>
</template>

<style scoped>
main {
    height: 100vh;
    background-image: url('../assets/map.svg');
}
.logo {
  width: 10rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3.25rem;
  margin-bottom: 3rem;
}
.loadcontainer {
    padding-top: 10%;
}
.home {
    color: #5AB522;
}
.currentloc {
    position: absolute;
    top: 450px;
    left: 297px;
}


</style>
