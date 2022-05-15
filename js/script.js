

Vue.config.devtools = true;
const app = new Vue (
    {
        el : '#root',
        data: {
            randomMail: '',
            listMail: []         
        },

        methods: {
            generateMail() {
                for (let i = 0; i< 10; i++){
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.randomMail = resp.data.response;
                        this.listMail.push(this.randomMail);
                    });
                }
            },
        }
    }
)

