<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '../components/Navigation.vue';

const active = ref("home");

</script>

<template>
  <main>
      <div class="pagecontainer">
            <div class="card">
                <div class="grid">
                    <RouterLink to="/home" class="back"><i class="fa-solid fa-arrow-left"></i></RouterLink> 
                    <h1>Stationstraat 18a</h1>
                    <p>Waasmunster</p>
                </div>
                <div class="inputcontainer">
                    <div class="location"><i class="fa-solid fa-location-dot pinpoint"></i></div>
                    <div class="wrapper">
                        <span class="input"><img src="../assets/profilePic.png"/>Anneleen</span>
                        <span class="input"><i class="fa-solid fa-user"></i>1 inwoner</span>
                        <span class="input"><i class="fa-solid fa-maximize"></i>81 m&sup2;</span>
                        <span class="input"><i class="fa-solid fa-bed"></i>1 kamer</span>
                        <span class="input"><i class="fa-solid fa-bath"></i>1 douche</span>
                        <span class="input"><i class="fa-solid fa-toilet"></i>1 toilet</span>
                    </div>
                    <span class="input"><i class="fa-solid fa-toilet"></i>1 toilet</span>
                    <div class="wrapper">
                        <div class="images inside"></div>
                        <div class="images outside"></div>

                    </div>
                    <RouterLink to="/messages" class="btn">Stuur bericht <i class="fa-solid  fa-paper-plane"></i></RouterLink>
                </div>
    
            </div>
            <Navigation class="navigation" :active="active" />
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
    overflow-y: hidden;

}
.pagecontainer {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.navigation {
    margin: 2rem 1rem;
    width: calc(100% - 2rem);
}
.flex {
    display: flex;
}
.card {
    
    margin: auto 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 1rem;
    
    align-items: center;
    flex-shrink: 1;
    flex-grow: 0;
}
h1 {
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
}
p {
    text-align: center;
    margin-top: 0;
    margin-bottom: 1rem;
}
.inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;
    max-height: 50vh;
    overflow: scroll;

}
.wrapper {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-between;
}
.wrapper > span.input {
    width: 40%;
    padding: .25rem ;
    padding-right: 1.5rem;
    display: flex;
    align-items: center;
    height: 2rem;
    
}
.input {
    width: 100%;
    padding: .5rem 0;
    display: flex;
    align-items: center;
    height: 2rem;
}
.input > img {
    font-size: 1.5rem;
    text-align: center;
    margin-right: .5rem;
    width: 2rem;
}

.input > i {
    text-align: center;
    width: 2rem;
    color: #5AB522;
}

.location {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 7.5rem;
    background-image: url('../assets/map.svg');
    background-size: cover;
    background-position: 0 -20rem;
    border-radius: .75rem;
}
.pinpoint {
    color: #5AB522;
    margin-left: 10rem;
    margin-top: 1.5rem;
    font-size: 2rem;

}
.images {
    width: 49.5%;
    height: 10rem;
    border-radius: 1.25rem;
    background-size: cover;
    margin-bottom: 1rem;
}
.inside {
    background-image: url(../assets/Inside.png);
}
.outside {
    background-image: url(../assets/Outside.png);
}
.btn {
    flex-grow: 1;
}
</style>
