<script setup>
import { ref } from 'vue';
let sent = ref(false);
</script>

<template>
    <div class="card">
        <h1>Wachtwoord vergeten?</h1>
        <form action="">
            <p>Geef uw e-mail adres van uw account op om een e-mail te onvangen met een link waarmee u uw wachtwoord kan herstellen.</p>
            <input type="email" name="" id="" placeholder="E-mail adres" class="input">
            <p class="btn" @click="sent = true">Verstuur e-mail</p> 
            <span v-if="sent" class="msg">Er is een e-mail verstuurd naar uw e-mailadres. </span>
        </form>
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;

}
h1 {
    text-align: center;
    margin-top: 0;
    font-size: 22px;
}
.btn--link {
    align-self: start;
    justify-self: end;
}
p {
    text-align: start;
}
.btn {
    text-align: center;
}
.msg {
    text-align: center;
    color: #006837;
}
</style>