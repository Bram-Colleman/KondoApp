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
            <Logo class="logo" />
            <SearchBar class="searchbar" />
        </section>
        <section class="bottom-navigation">
            <div class="card target">
                <i class="fa-solid fa-crosshairs"></i>
            </div>
            <Navigation :active="active" />
        </section>
    </div>
    <img src="../assets/currentLoc.svg" alt="" class="currentloc">
    <i class="fa-solid fa-location-dot pinpoint" @click="detail = !detail"></i>
    <detail-menu-home class="detail" v-if="detail" />

    <div class="loadcontainer" v-if="loading">
        <LoadAnimation class="load" />
      </div>
  </main>
</template>

<style scoped>
main {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;


    background-image: url('../assets/map.svg');
    background-size: cover;
}
.pagecontainer {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:2rem 0;
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
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;

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

    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;
}
.currentloc {
    position: absolute;
    top: 250px;
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
}

.searchbar {
    width: 100%;
}
.pinpoint {
    font-size: 2.5rem;
    color: #5AB522;
    position: absolute;
    top: 335px;
    left: 3.5rem;
}
.detail {
    position: absolute; 
    width: 75%;
    top: 176px;
    left: 5rem;
}

.target {
    align-self: flex-end;
    font-size: 2rem;
    padding:.75rem 1rem;
    margin: 0 1rem 1rem 0;
}


</style>
