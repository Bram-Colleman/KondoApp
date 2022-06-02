<template>
    <div class="card">
        <h1>Registreren</h1>
        <form action="">
            <input type="text" name="" id="" placeholder="Gebruiksersnaam" class="input">
            <input type="email" name="" id="" placeholder="E-mail adres" class="input">
            <input type="password" name="" id="" placeholder="Wachtwoord" class="input">
            <input type="password" name="" id="" placeholder="Bevestig wachtwoord" class="input">
            <div class="flex">
                <div class="radio">
                    <span>
                        <input type="radio" name="gender" id="male">
                        <label for="male"><i class="fa-solid fa-mars"></i></label>
                    </span>
                    <span>
                        <input type="radio" name="gender" id="female">
                        <label for="female"><i class="fa-solid fa-venus"></i></label>
                    </span>
                </div>
                <input type="number" name="" placeholder="Leeftijd" class="input">
            </div>
            <RouterLink to="/home" class="btn mt-1">Registreer</RouterLink>
            <p>Heeft u al een account?</p>
            <RouterLink to="/" class="btn">Aanmelden</RouterLink> 
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

.radio {
    display: flex;
    height: 47px;
    width: 47.5%;
    border-radius: 2rem;
    margin-top: .25rem;
    margin-right: 2.5%;
    overflow: hidden;
}
.radio:first-child {
    background-color: white;
}
input[type='radio'] {
    display: none;
}
.radio span {
    padding: .5rem 0;
    width: 50%;
    text-align: center;
    display: inline-block;
    background-color: white;
}
label {
    padding: 0.5rem 40%;
    
}
:checked + label {
    background-color: #5AB522;
    width: 50%;
    color: #F4F4F4;
}

.flex {
    display: flex;
}
</style>