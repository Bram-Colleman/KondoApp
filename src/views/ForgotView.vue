<script setup>
import Logo from '../components/icons/Logo.vue';
import ForgotForm from '../components/ForgotForm.vue';
</script>

<template>
  <main>
    <RouterLink to="/" class="back"><i class="fa-solid fa-arrow-left"></i></RouterLink> 
    <Logo class="logo" />
    <ForgotForm />
  </main>
</template>

<style scoped>
main {
  height: 100%;
  height: -moz-available;          
  height: -webkit-fill-available;  
  height: fill-available;  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url('../assets/bg.svg');
  background-size: cover;
}
.logo {
  width: 10rem;
  align-self: center;
  margin-bottom: 3rem;
}
</style>
