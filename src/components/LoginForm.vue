<template>
    <div class="card">
        <h1>Aanmelden</h1>
        <form action="">
            <input type="email" name="" id="" placeholder="E-mail adres" class="input">
            <input type="password" name="" id="" placeholder="Wachtwoord" class="input">
            <RouterLink to="/forgot" class="btn--link">Wachtwoord vergeten?</RouterLink>
            <RouterLink to="/home" class="btn mt-1">Aanmelden</RouterLink>
            <p>Nog geen account?</p>
            <RouterLink to="/register" class="btn">Registreren</RouterLink> 
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
    text-align: right;
    width: 100%;
}
p {
    text-align: center;
}
.mt-1 {
 margin-top: 1rem;
}
</style>