<script setup>
import { ref, onMounted } from 'vue';
import Navigation from '../components/Navigation.vue';

const active = ref("messages");

</script>

<template>
  <main>
      <div class="pagecontainer">
            <div class="card">
                <h1>Berichten</h1>
                <div class="scroll">
                    <div class="chat">
                        <div class="chatimg">
                            <img src="../assets/profilePic.png" alt="">
                            <span class="notification">1</span>
                        </div>
                        <div class="chatdetails">
                            <p class="name">Anneleen</p>
                            <p class="address">Stationstraat, Waasmunster</p>
                            <p class="lastmsg flex"><i class="fa-solid fa-reply"></i>Ja hoor!</p>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="chatimg">
                            <img src="../assets/profilePic.png" alt="">
                            <span class="notification">1</span>
                        </div>
                        <div class="chatdetails">
                            <p class="name">Anneleen</p>
                            <p class="address">Stationstraat, Waasmunster</p>
                            <p class="lastmsg flex"><i class="fa-solid fa-reply"></i>Ja hoor!</p>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="chatimg">
                            <img src="../assets/profilePic.png" alt="">
                            <span class="notification">1</span>
                        </div>
                        <div class="chatdetails">
                            <p class="name">Anneleen</p>
                            <p class="address">Stationstraat, Waasmunster</p>
                            <p class="lastmsg flex"><i class="fa-solid fa-reply"></i>Ja hoor!</p>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="chatimg">
                            <img src="../assets/profilePic.png" alt="">
                            <span class="notification">1</span>
                        </div>
                        <div class="chatdetails">
                            <p class="name">Anneleen</p>
                            <p class="address">Stationstraat, Waasmunster</p>
                            <p class="lastmsg flex"><i class="fa-solid fa-reply"></i>Ja hoor!</p>
                        </div>
                    </div>
                    <div class="chat">
                        <div class="chatimg">
                            <img src="../assets/profilePic.png" alt="">
                            <span class="notification">1</span>
                        </div>
                        <div class="chatdetails">
                            <p class="name">Anneleen</p>
                            <p class="address">Stationstraat, Waasmunster</p>
                            <p class="lastmsg flex"><i class="fa-solid fa-reply"></i>Ja hoor!</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <Navigation class="navigation" :active="active" />
      </div>
  </main>
</template>

<style scoped>
.flex {
    display: flex;
}
main {
    height: 100%;
    height: -moz-available;          
    height: -webkit-fill-available;  
    height: fill-available;
    background-image: url('../assets/bg.svg');
    background-size: cover;
    overflow-y: hidden;

}
.pagecontainer {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card {
    height: 100%;
}
h1 {
    text-align: center;
    font-size: 1.75rem;
    margin-top: 0;
}
.scroll {
    overflow-y: scroll;
    height: 100%;
    max-height: calc(100vh - 17.75rem);
    /* max-height: 100vh; */
    
}
.chat {
    background-color: white;
    border-radius: 1rem;
    padding: .5rem 0rem .5rem 1rem;
    display: flex;
    background-image: url("../assets/chatBg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    margin: .5rem 0;

}
.chatimg {
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat img {
    width: 3rem;
    height: 3rem;
}
.notification {
    background-color: #5AB522;
    position: relative;
    border-radius: 50%;
    color: white;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
    left: -1rem;
    top: -1.25rem;
}
.chatdetails {
    display: flex;
    flex-direction: column;

}
.chatdetails p { 
    margin: 0;
}
.chatdetails i {
    font-size: .75rem;
    align-self: center;
    margin-right: .25rem;
}
.name {
    font-size: 1.25rem;
    flex-grow: 1;

}
.address {
    font-size: 14px;
    flex-grow: 1;
}
.lastmsg {
    opacity: .5;
    flex-grow: 1;
}


.navigation {
    margin-bottom: 2rem;
    margin-top: 2rem;
}
</style>
