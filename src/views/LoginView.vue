<script setup>
import Logo from '../components/icons/Logo.vue';
import LoginForm from '../components/LoginForm.vue';
</script>

<template>
  <main>
    <Logo class="logo"></Logo>
    <LoginForm></LoginForm>
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
