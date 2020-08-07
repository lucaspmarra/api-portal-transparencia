new Vue({
    el: '#app',
    data() {
        return {
            benefits: [],
            loading: true,
            errored: false,
            selected: 'DistritoFederal/5300108',
            state: '',
            number: '',
            options: [
                { text: 'AC', value: 'Acre/1200401' },
                { text: 'AL', value: 'Alagoas/2704302' },
                { text: 'AP', value: 'Amapá/1600105' },
                { text: 'AM', value: 'Amazonas/1302603' },
                { text: 'BA', value: 'Bahia/2927408' },
                { text: 'CE', value: 'Ceará/2304400' },
                { text: 'DF', value: 'DistritoFederal/5300108' },
                { text: 'ES', value: 'Espírito Santo/3205309' },
                { text: 'GO', value: 'Goiás/5208707' },
                { text: 'MA', value: 'Maranhão/2111300' },
                { text: 'MT', value: 'Mato Grosso/5103403' },
                { text: 'MS', value: 'Mato Grosso do Sul/5002704' },
                { text: 'MG', value: 'Minas Gerais/3106200' },
                { text: 'PA', value: 'Pará/1501402' },
                { text: 'PB', value: 'Paraíba/2507507' },
                { text: 'PR', value: 'Paraná/4106902' },
                { text: 'PE', value: 'Pernambuco/2611606' },
                { text: 'PI', value: 'Piauí/2211001' },
                { text: 'RJ', value: 'Rio de Janeiro/3304557' },
                { text: 'RN', value: 'Rio Grande do Norte/2408102' },
                { text: 'RS', value: 'Rio Grande do Sul/4314902' },
                { text: 'RO', value: 'Rondônia/1100205' },
                { text: 'RR', value: 'Roraima/1400100' },
                { text: 'SC', value: 'Santa Catarina/4205407' },
                { text: 'SP', value: 'São Paulo/3550308' },
                { text: 'SE', value: 'Sergipe/2800308' },
                { text: 'TO', value: 'Tocantins/1721000' }
            ],
            dateSelected: '04',
            dateOptions: [
                { text: 'Mês de Abril', value: '04' },
                { text: 'Mês de Maio', value: '05' },
                { text: 'Mês de Julho', value: '06' },
            ],
        }
    },
    mounted() {
        this.getBenefits();
    },
    watch: {
        selected: function () {
            this.getBenefits()
        },
        dateSelected: function () {
            this.getBenefits()
        }
    },
    methods: {
        splitSelected() {
            const result = this.selected.split("/")
            this.state = result[0];
            this.number = result[1];
        },
        getBenefits() {
            let headers = {
                'Accept': '*/*',
                'chave-api-dados': 'cec73fb24c54ff134d2053da6b471467'
            }
            axios
                .get('https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/bolsa-familia-por-municipio?mesAno=' + this.dateSelected + '&codigoIbge=' + this.number + '&pagina=1', { headers })
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