new Vue({
    el: '#app',
    data() {
        return {
            benefits: [],
            loading: true,
            errored: false,
            selected: '5300108',
            state: '',
            number: '',
            options: [
                { text: 'AC', value: '1200401' },
                { text: 'AL', value: '2704302' },
                { text: 'AP', value: '1600105' },
                { text: 'AM', value: '1302603' },
                { text: 'BA', value: '2927408' },
                { text: 'CE', value: '2304400' },
                { text: 'DF', value: '5300108' },
                { text: 'ES', value: '3205309' },
                { text: 'GO', value: '5208707' },
                { text: 'MA', value: '2111300' },
                { text: 'MT', value: '5103403' },
                { text: 'MS', value: '5002704' },
                { text: 'MG', value: '3106200' },
                { text: 'PA', value: '1501402' },
                { text: 'PB', value: '2507507' },
                { text: 'PR', value: '4106902' },
                { text: 'PE', value: '2611606' },
                { text: 'PI', value: '2211001' },
                { text: 'RJ', value: '3304557' },
                { text: 'RN', value: '2408102' },
                { text: 'RS', value: '4314902' },
                { text: 'RO', value: '1100205' },
                { text: 'RR', value: '1400100' },
                { text: 'SC', value: '4205407' },
                { text: 'SP', value: '3550308' },
                { text: 'SE', value: '2800308' },
                { text: 'TO', value: '1721000' }
            ],
            dateSelected: '202004',
            dateOptions: [
                { text: 'Abril de 2020', value: '202004' },
                { text: 'Maio de 2020', value: '202005' },
                { text: 'Julho 2020', value: '202006' },
            ],
        }
    },
    mounted() {
        this.getBenefits();
    },
    watch: {
        selected: function () {
            this.getBenefits()
            this.loading = true
        },
        dateSelected: function () {
            this.getBenefits()
        }
    },
    methods: {
        getBenefits() {
            let headers = {
                'Accept': '*/*',
                'chave-api-dados': 'cec73fb24c54ff134d2053da6b471467'
            }
            axios
                .get('https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=' + this.dateSelected + '&codigoIbge=' + this.selected + '&pagina=1', { headers })
                .then((response) => {
                    this.benefits = response.data;
                    const { benefits } = response.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
    }

})