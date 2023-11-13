const {createApp} = Vue;

createApp({
    data() {
        return {
            text   : "Benvenuto in VueJS!",
            imgSrc : "img/20220814_203010.jpg"
        }
    }
}).mount("#app");