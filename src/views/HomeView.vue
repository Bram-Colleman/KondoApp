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
      <div class="pagecontainer">
        <section class="top-navigation">
            <Logo class="logo"></Logo>
            <SearchBar class="searchbar"></SearchBar>
        </section>
        <section class="bottom-navigation">
            <div class="card target">
                <i class="fa-solid fa-crosshairs"></i>
            </div>
            <Navigation :active="active" class="navigation"></Navigation>
        </section>
    </div>
    <img src="../assets/currentLoc.svg" alt="" class="currentloc">
    <i class="fa-solid fa-location-dot pinpoint" @click="detail = !detail"></i>
    <detail-menu-home class="detail" v-if="detail"></detail-menu-home>

    <div class="loadcontainer">
        <LoadAnimation v-if="loading" class="load"></LoadAnimation>
      </div>
  </main>
</template>

<style scoped>
main {
    height: 100vh;
    height: -webkit-fill-available; 
    /* height: calc(100vh - calc(100vh - 100%)); */


    background-image: url('../assets/map.svg');
}
.pagecontainer {
    display: flex;
    height: 100vh;
    height: -webkit-fill-available; 
    /* height: calc(100vh - calc(100vh - 100%)); */
    flex-direction: column;
    justify-content: space-between;
    margin:0;
    flex-grow: 1;
}
.navigation {
    margin-bottom: 2rem;
}
.logo {
  width: 10rem;
  margin: 1rem 0;
  /* transform: translateX(-50%); */
  /* margin-bottom: 3rem; */
}
.loadcontainer {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 95vh;
    height: -webkit-fill-available; 
    margin-top: 2.5vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    
}
.load {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    flex-grow: 1;
    height: 95vh;
    height: -webkit-fill-available; 

}
.currentloc {
    position: absolute;
    top: 450px;
    left: 297px;
}

.top-navigation {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.bottom-navigation {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    /* height: 100% ; */
}

.searchbar {
    width: 100%;
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
    align-self: flex-end;
    font-size: 2rem;
    padding:.75rem 1rem;
    margin: 0 1rem 1rem 0;
}


</style>
