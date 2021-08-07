new Vue({
    el: '#app',
    data() {
        return {
            info: {},
            loading: true,
            errored: false,
            selected: '',
        };
    },
    methods: {
        async fetchApi() {
            await axios
                .get(
                    'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=?'
                )
                .then(response => {
                    this.info = response.data;
                    console.log(this.info);
                })
                .catch(error => {
                    console.log(error);
                    this.errored = true;
                })
                .finally(() => (this.loading = false));
        },
    },
    mounted() {
        this.fetchApi();
    },
});
