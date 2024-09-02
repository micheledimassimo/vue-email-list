const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Vue Email List',
                email: ['']
            }
        },
        created() {
            
            //ciclo la richiesta API 10 volte per ottenere 10 mail diverse 
            for (let i = 0; i < 10; i++) {
                axios 
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    console.log(resp.data);
                    //pusho gli elementi generati nell'array vuoto
                    this.email.push(resp.data.response);
                    
                });
               
                
            }
        }
        
    }).mount('#app');


    