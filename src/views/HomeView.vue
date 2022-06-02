<script setup>
import { ref, onMounted } from 'vue';
import Logo from '../components/icons/Logo.vue';
import LoadAnimation from '../components/LoadAnimation.vue';

let loading = ref(true);



onMounted(() => {
setTimeout(function(){ 
    loading.value = false;
}, 2000);
})
</script>

<template>
  <main>
    <Logo class="logo"></Logo>
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



</style>
