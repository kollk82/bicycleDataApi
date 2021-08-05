new Vue({
    el: '#app',
    data() {
        return {
            info: null,
            loading: true,
            errored: false,
            selected: ' ',
        };
    },
    mounted() {
        axios
            .get(
                'https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=36d9b02b3c2716866d6fa0e801dd15d9b837938f'
            )
            .then(response => (this.info = response.data))
            .catch(error => {
                console.log(error);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    },
});
