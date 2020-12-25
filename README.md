# Inicio do projeto
Primeiro commit com index.html e pastas respectivas.

O projeto pode ser acessado pelo link: [Consulta Portal da Transparência](https://lucaspmarra.github.io/omegasistemas-teste-front-end/)

## v1.0

- Adição do Axios + Vue para GET dos dados;
- Problema com CORS;

## v1.1

- Adição do form para seleção do estado e do mês de consulta;
- Animação de Loading para receber os dados (necessita testagem);
- Navbar desktop e responsivo para mobile com breakpoint de 960px;
- Form responsivo;

## v2

- Liberação do bloqueio de CORS;
- Erro 429 - Too Many Requests;


## v2.1

- Console.log(response.data) agora retorna os dados da api;
- Em desenvolvimento = alterar url do endpoint com v-model do select de data e código ibge;

## v2.2
- Dados agora retornam na tela dinamicamente usando v-for do vue;
- Em desenvolvimento = alterar url do endpoint com v-model do select de data e código ibge;  

## v2.3
- É possível agora selecionar a UF e resgatar os dados na drop list;
- Teste na seleção de data juntamente com a UF;
- Não possível testar localmente, erro 429, Too many requests;

## v2.3
- Retornando array da api;

## v2.4
- Retorno dos dados funcionado corretamente com o Estado;

## v2.5
- Animação de carregamento ao mudar de Estado;

## v2.6
- Teste para a seleção do mês

# Estrutura do projeto:
```
.
├── css
│   └── smainStyle.css
│   └── mainStyle.scss
│   
├── js
│   └── app.js
│   └── main.js
├── index.html
└── README.md
```

# Tecnologias usadas:
![](https://img.shields.io/badge/HTML--brightgreen)  
![](https://img.shields.io/badge/SCSS--brightgreen)   
![](https://img.shields.io/badge/CSS--brightgreen)   
![](https://img.shields.io/badge/Javascript--brightgreen)   
![](https://img.shields.io/badge/Vue.js--brightgreen)  
![](https://img.shields.io/badge/Axios--brightgreen)  

