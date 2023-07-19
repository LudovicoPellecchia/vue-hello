const app = Vue.createApp({
    data() {
        return {
            messaggio: "Oggi è il"
        }
    },

    methods: {
        currentDay() {
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear(); 

            today = dd + "/" + mm + "/" + yyyy
            return today
        }

    }
})

app.mount("#app")