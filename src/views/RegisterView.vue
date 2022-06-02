<script setup>
import Logo from '../components/icons/Logo.vue';
import RegisterForm from '../components/RegisterForm.vue';
</script>

<template>
  <main>
    <Logo class="logo"></Logo>
    <RegisterForm></RegisterForm>
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
