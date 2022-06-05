<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '../components/Navigation.vue';

const active = ref("new");

</script>

<template>
  <main>
      <div class="pagecontainer">
            <div class="card">
                <h1>Nieuw aanbod</h1>
                <div class="inputcontainer">
                    <input type="text" disabled class="input pic" />
                    <input type="text" class="input target" placeholder="Adres" />
                    <input type="number" class="input" placeholder="Bewoonbare oppervlakte (m&sup2;)" />
                    <input type="number" class="input" placeholder="Aantal slaapkamers" />
                    <input type="number" class="input" placeholder="Aantal badkamers" />
                    <input type="number" class="input" placeholder="Aantal wc's" />
                    <input type="text" class="input" placeholder="Extra info" />
                    <RouterLink to="/details" class="btn">Bevestig</RouterLink>
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
    margin-bottom: 2rem;
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
    font-size: 1.75rem;
    margin-top: 0;
}
.inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;
    overflow: scroll;

}
.input {
    flex-shrink: 1;
    flex-grow: 1;
}
.pic {
    height: 3rem;
    width: 3rem;
    flex-shrink: 0;
    border-radius: .75rem;
    align-self: center;
    background-image: url(../assets/addPicture.svg);
    background-size: contain;
}
.target {
    background-image: url(../assets/target.svg);
    background-size: contain;
}
.btn {
    flex-grow: 1;
}


</style>
