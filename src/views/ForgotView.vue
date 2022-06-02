<script setup>
import Logo from '../components/icons/Logo.vue';
import ForgotForm from '../components/ForgotForm.vue';
</script>

<template>
  <main>
    <RouterLink to="/" class="back"><i class="fa-solid fa-arrow-left"></i></RouterLink> 
    <Logo class="logo"></Logo>
    <ForgotForm></ForgotForm>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  width: 10rem;
  align-self: center;
  margin-bottom: 3rem;
}
main {
  background-image: url('../assets/bg.svg');
  }
</style>
