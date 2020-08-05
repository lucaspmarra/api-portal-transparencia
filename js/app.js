const url = 'http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202007&codigoIbge=5300108&pagina=1';
new Vue({
    el: '#app',
    data() {
        return {
            gov_benefits: [],
            loading: true,
            errored: false,
            selected: 'DistritoFederal/53',
            state: '',
            number: '',
            options: [
                { text: 'AC', value: 'Acre/12' },
                { text: 'AL', value: 'Alagoas/27' },
                { text: 'AP', value: 'Amapá/16' },
                { text: 'AM', value: 'Amazonas/13' },
                { text: 'BA', value: 'Bahia/29' },
                { text: 'CE', value: 'Ceará/23' },
                { text: 'DF', value: 'DistritoFederal/53' },
                { text: 'ES', value: 'Espírito Santo/32' },
                { text: 'GO', value: 'Goiás/52' },
                { text: 'MA', value: 'Maranhão/21' },
                { text: 'MT', value: 'Mato Grosso/51' },
                { text: 'MS', value: 'Mato Grosso do Sul/50' },
                { text: 'MG', value: 'Minas Gerais/31' },
                { text: 'PA', value: 'Pará/15' },
                { text: 'PB', value: 'Paraíba/25' },
                { text: 'PR', value: 'Paraná/41' },
                { text: 'PE', value: 'Pernambuco/26' },
                { text: 'PI', value: 'Piauí/22' },
                { text: 'RJ', value: 'Rio de Janeiro/33' },
                { text: 'RN', value: 'Rio Grande do Norte/24' },
                { text: 'RS', value: 'Rio Grande do Sul/43' },
                { text: 'RO', value: 'Rondônia/11' },
                { text: 'RR', value: 'Roraima/14' },
                { text: 'SC', value: 'Santa Catarina/42' },
                { text: 'SP', value: 'São Paulo/42' },
                { text: 'SE', value: 'Sergipe/28' },
                { text: 'TO', value: 'Tocantins/17' }
            ],
            dateSelected: '04',
            dateOptions: [
                { text: 'Mês de Abril', value: '04' },
                { text: 'Mês de Maio', value: '05' },
                { text: 'Mês de Julho', value: '06' },
            ],
        }
    },
    // mounted: function () {
    //     this.getAllBenefits();
    // },
    mounted() {
        this.splitSelected();
        let headers = {
            'Accept': '*/*',
            'chave-api-dados': 'cec73fb24c54ff134d2053da6b471467'
        }
        axios
            .get(url,
                { headers })
            .then((response) => {
                const { benefits } = response.data;
                this.gov_benefitsF = benefits;
                console.log(benefits);
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        splitSelected() {
            const result = this.selected.split("/")
            this.state = result[0];
            this.number = result[1];
        }
    }

})