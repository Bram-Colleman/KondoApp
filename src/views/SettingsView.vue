<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '../components/Navigation.vue';

const active = ref("settings");

</script>

<template>
  <main>
      <div class="pagecontainer">
            <div class="card">
                <h1>Nieuw aanbod</h1>
                <div class="inputcontainer">
                    <h3>Algemeen</h3>
                    <p><i class="fa-solid fa-globe"></i> Taal</p>
                    <p><i class="fa-solid fa-bell"></i> Meldingen</p>
                    <p><i class="fa-regular fa-face-smile"></i> Voorkeuren</p>
                    <p><i class="fa-solid fa-person"></i> Toegankelijkheid</p>
                    <p><i class="fa-solid fa-lock"></i> Privacy</p>
                    <p><i class="fa-solid fa-power-off"></i> Afmelden</p>
                    <h3>Help & feedback</h3>
                    <p><i class="fa-solid fa-circle-info"></i> Over Kondo</p>
                    <p><i class="fa-solid fa-headset"></i> Kondo helpcentrum</p>
                    <p><i class="fa-regular fa-face-frown"></i> Rapporteer een fout</p>
                    <p><i class="fa-regular fa-comment-dots"></i> Feedback versturen</p>
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
    font-size: 1.75rem;
    margin-top: 0;
}
.inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;
    max-height: 50vh;
    overflow: scroll;

}
.inputcontainer p {
    margin: 0;
    padding: .1rem 0;
}
.inputcontainer p i {
    color: #5AB522;
    width: 1.5rem;
    text-align: center;
}
.inputcontainer h3{
    margin-bottom: .5rem;
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
    background-repeat: no-repeat;
    background-position: right center;
}
.btn {
    flex-grow: 1;
}


</style>
