const app = new Vue({
    el: '#app',

    data: {
        randomEmail: null,
        newArray: []

    }, 
    methods: {


    },

    mounted() {
        for (let index = 0; index < 10; index++) {
           axios
           .get('https://flynn.boolean.careers/exercises/api/random/mail')
           .then(response => {
                this.randomEmail = response.data.response
                this.newArray.push(this.randomEmail)
            })
        }
    }
})


