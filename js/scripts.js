const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Buon Natale con VueJs!',
            url: 'img/Meme-Alessio.jpg',
            textClass: 'text-center my-4 text-white',
        }
    },
    methods: {
        createDivImg(){
            return 'my-w-500 my-h-500 mx-auto';
        },
        
        createImgClass(){
            return 'w-100 d-block obj-cover';
        }
    }
}).mount('#app');