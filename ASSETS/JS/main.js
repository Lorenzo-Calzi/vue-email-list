const app = new Vue({
    el: '#app',

    data: {
        randomEmail: null

    }, 
    methods: {


    }, 
    mounted() {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then (response => {
            console.log(response);
            this.randomEmail = response.data.response
            console.log(this.randomEmail);
        })

    }
}) 