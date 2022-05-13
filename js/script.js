

Vue.config.devtools = true;
const app = new Vue (
    {
        el : '#root',
        data: {
            randomMail: ''           
        },

        methods: {
            generateMail() {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.randomMail = resp.data.response;
                    });
            }
            
        }
    }
)