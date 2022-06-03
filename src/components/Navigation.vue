<script setup>
import {onMounted, ref} from "vue";

let props = defineProps({
    active: String
});

onMounted(() => {
    switch(props.active) {
      case "new":
          document.querySelector("#new").classList.add("active");
        break;
      case "messages":
          document.querySelector("#messages").classList.add("active");
        break;
      case "home":
          document.querySelector("#home").classList.add("active");
        break;
      case "profile":
          document.querySelector("#profile").classList.add("active");
        break;
      case "settings":
          document.querySelector("#settings").classList.add("active");
        break;
    
    }
})
</script>  

<template>
<div class="container">
    <nav class="card">
        <ul>
            <li id="new"><RouterLink to="/new"><i class="fa-solid fa-location-dot"></i></RouterLink></li>
            <li id="messages"><RouterLink to="/messages"><i class="fa-solid  fa-paper-plane"></i></RouterLink></li>
            <li id="home"><RouterLink to="/home"><i class="fa-solid fa-location-dot"></i></RouterLink></li>
            <li id="profile"><RouterLink to="/profile"><i class="fa-solid fa-user"></i></RouterLink></li>
            <li id="settings"><RouterLink to="/settings"><i class="fa-solid fa-gear"></i></RouterLink></li>
        </ul>
    </nav>
</div>

</template>

<style scoped>
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    
}
li {
    padding: rem;
    flex-grow: 1;
    text-align: center;
    font-size: 2rem;
    color: #333333;
}
.card {
    padding: .5rem 0;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
}
.container {
    width: 100%;
}
.active {
color: #5AB522;
}

a, a:visited, a:hover, a:focus, a:active { text-decoration: none; color: unset; }

</style>