<script setup>
import { ref } from "vue";
import Navigation from '../components/Navigation.vue';

let active = ref("profile");
</script>

<template>
    <main>
        <div class="pagecontainer">
            <div class="card">
                <h1>Profiel</h1>
                <div class="profilepic">
                    <img src="../assets/ProfilePic2.png">
                    <span class="btn--overlay"><i class="fa-solid fa-pen"></i></span>
                </div>
                <div class="bio">
                    <h3>Biografie</h3>
                    <span class="bioedit">Bewerk <i class="fa-solid fa-pen-to-square"></i></span>
                    <span class="biotext">Mijn naam is Bram Colleman en ik ben 23 jaar.</span>
                </div>
                <div class="favorites">
                    <h3>Mijn favorieten</h3>
                    <RouterLink to="/details"><img src="../assets/Fav1.png"></RouterLink>
                    <RouterLink to="/details"><img src="../assets/Fav2.png"></RouterLink>
                </div>
            </div>

        </div>
        <div class="flexnav">
            <Navigation :active="active" class="navigation" />
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
    background-size: 125vw;
    background-repeat: no-repeat;
    overflow-y: hidden;
}
.pagecontainer {
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
.card {
    margin: 2rem 0;
}
h1 {
    text-align: center;
    font-size: 1.75rem;
    margin-top: 0;
}
.profilepic {
    display: flex;
    justify-content: center;
}
.profilepic img {
    width: 5rem;
    transform: translateX(.75rem);
}
.btn--overlay {
    background-color: #5AB522;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    color: white;
    border-radius: 4px;
    position: relative;
    left: -.5rem;
}
.bio {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
}
.biotext {
    grid-column: 1/3;
    grid-row: 2/2;
}
.bio h3, .favorites h3 {
    margin: 0;
    margin-bottom: 1rem;
}
.bioedit {
    text-align: right;
    color: #5AB522;
}
.bio span {
    margin-bottom: 1rem;
}
.favorites {
    display: grid;
    grid-template-columns: 1fr 1fr;    
}
.favorites img {
    margin: .25rem;
    width: calc(100% - .5rem);
}
.favorites h3 {
    grid-column: 1/3;
}

.navigation {
    margin: 2rem 0;
}
.flexnav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    display: flex;
    align-items: flex-end;
    height: 100%;
    padding: 1rem 1rem;
    box-sizing: border-box;
}
</style>