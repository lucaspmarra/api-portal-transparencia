new Vue({
    el: '#app',
    data() {
        return {
            gov_benefits: [],
            errored: false,
        }
    },
    mounted: function () {
        this.getAllBenefits();
    },
    mounted() {
        let headers = {
            "Accept": "*/*",
            "chave-api-dados": "cec73fb24c54ff134d2053da6b471467"
        }
        axios
            .get('http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202007&codigoIbge=5300108&pagina=1',
                {headers})
    .then((response) => {
        const {
            benefits
        } = response.data;
        this.gov_benefitsF = benefits;
        console.log(benefits);
    })
    .catch(error => {
        console.log(error)
        this.errored = true
    })
},

})