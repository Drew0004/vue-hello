const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Buon Natale con VueJs!',
            url: 'img/Meme-Alessio.jpg',
            textClass: 'text-center my-4'
        }
    },
    methods: {
        createImgClass(){
            return 'w-100 d-block';
        }
    }
}).mount('#app');