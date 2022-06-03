<script setup>

</script>  

<template>
<div class="container">
    <div class="card">
      <input type="text" class="input" placeholder="Zoek op adres...">
      <span><i class="fa-solid fa-filter"></i></span>
    </div>
</div>

</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
}
span {
    font-size: 1.5rem;
    width: 20%;
    text-align: center;
}
input {
    width: 80%;
}
</style>