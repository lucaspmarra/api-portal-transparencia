var settings = {
    "url": "http://www.portaltransparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202007&codigoIbge=5300108&pagina=1",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "chave-api-dados": "cec73fb24c54ff134d2053da6b471467"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });