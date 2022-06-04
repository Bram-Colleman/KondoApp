<script setup>
import {onMounted, ref} from "vue";

let props = defineProps({
    active: String
});

onMounted(() => {
    switch(props.active) {
      case "new":
          document.querySelector("#new").src="src/assets/newListingActive.svg";
          console.log(document.querySelector("#new"));
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
            <li><RouterLink to="/new"><img src="../assets/newListing.svg" class="icon" id="new"></RouterLink></li>
            <li id="messages"><RouterLink to="/home"><i class="fa-solid  fa-paper-plane"></i></RouterLink></li>
            <li id="home"><RouterLink to="/home"><i class="fa-solid fa-location-dot"></i></RouterLink></li>
            <li id="profile"><RouterLink to="/home"><i class="fa-solid fa-user"></i></RouterLink></li>
            <li id="settings"><RouterLink to="/home"><i class="fa-solid fa-gear"></i></RouterLink></li>
        </ul>
    </nav>
</div>

</template>

<style scoped>
ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: .5rem 0;
    margin: 0;
    
}
li {
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
.icon {
    height: 2rem;
}
.active {
color: #5AB522;
}
a {
    display: flex;
    justify-content: center;
    align-items: center;
}
a, a:visited, a:hover, a:focus, a:active { text-decoration: none; color: unset; }

</style>