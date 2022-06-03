<script setup>
import { ref, onMounted } from 'vue';
import Logo from '../components/icons/Logo.vue';
import LoadAnimation from '../components/LoadAnimation.vue';
import Navigation from '../components/Navigation.vue';
import SearchBar from '../components/Searchbar.vue';
import DetailMenuHome from '../components/DetailmenuHome.vue';

let loading = ref(true);
let active = "home";
let detail = ref(false);


onMounted(() => {
setTimeout(function(){ 
    loading.value = false;
}, 2000);
})
</script>

<template>
  <main>
    <Navigation :active="active" class="navigation"></Navigation>
    <Logo class="logo"></Logo>
    <SearchBar class="searchbar"></SearchBar>
    <img src="../assets/currentLoc.svg" alt="" class="currentloc">
    <i class="fa-solid fa-location-dot pinpoint" @click="detail = !detail"></i>
    <detail-menu-home class="detail" v-if="detail"></detail-menu-home>
    <div class="card target">
        <i class="fa-solid fa-crosshairs"></i>
    </div>
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
.navigation {
    position: absolute;
    bottom: 2rem;
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
.currentloc {
    position: absolute;
    top: 450px;
    left: 297px;
}

.searchbar {
    position: absolute;
    width: 100%;
    top: 8rem;
}
.pinpoint {
    font-size: 2.5rem;
    color: #5AB522;
    position: absolute;
    top: 35rem;
    left: 3.5rem;
}
.detail {
    position: absolute; 
    width: 75%;
    top: 22rem;
    left: 2rem;
}

.target {
    position: absolute;
    font-size: 2rem;
    padding:.75rem 1rem;
    top: 41rem;
    right: 1rem;
    margin: 0;
}


</style>
