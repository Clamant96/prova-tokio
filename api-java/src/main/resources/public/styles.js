(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600;700;900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Amaranth:wght@400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Sofia+Sans:ital,wght@0,1..1000;1,1..1000&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap\");\n/* You can add global styles to this file, and also import other style files */\n/* IMPORTANDO FONTS PARA SEU PROJETO, APARTIR DO GOOGLE FONTS */\n/* FONT PADRAO -> Sofia Sans */\n/* DEIXANDO A MARGIN E PADDING DE SEU WINDOW ZERADO */\n* {\n  padding: 0;\n  margin: 0; }\n/* CRIANDO MACROS/VARIAVEIS PARA REUTILIZACAO DE CORES */\n:root {\n  --text-default: #262626;\n  --text-title: #303030;\n  --text-input: #6e6e6e;\n  --text-author: #00000080;\n  --text-white: #f1f1f1;\n  --text-white-light: #ffffff;\n  --text-link: #191919;\n  --text-red: rgb(175, 59, 59);\n  --border-style-search: #e8e8e8;\n  --background-color-button: #3bc;\n  --background-color-button-hover: rgb(43, 161, 177);\n  --background-color-copyright: #191919;\n  --background-color-danger: #d60f0f;\n  --background-color-danger-hover: #a01f1f;\n  --background-color-side-bar: rgba(250, 250, 250, 0.9);\n  --background-color-default: #f1f1f1;\n  --background-color-white: #ffffff;\n  --background-color-black: #191919;\n  --background-color-lilas: #474e72;\n  --icon-color-white: #ffffff;\n  --icon-color-black: #191919;\n  --icon-color-blue: #5AA4DB;\n  --button-ok: #b4b4b4;\n  --box-shadow: #26262650;\n  --alert-green-background: rgb(157, 235, 157);\n  --alert-red-background: rgb(235, 157, 157);\n  --alert-blue-background: rgb(157, 191, 235);\n  --alert-green-border: rgb(59, 175, 59);\n  --alert-red-border: rgb(175, 59, 59);\n  --alert-blue-border: rgb(59, 105, 175);\n  /* NOVO LAYOUT */\n  --background-login: #FBFCFF;\n  --background-filtro: #FBFCFF;\n  --background-selecao-img-perfil: #FBFCFF;\n  --background-color-input-login: #E8ECF3;\n  --background-color-input-paginas: #FFFFFF;\n  --background-color-botao-login: #1D4FD7;\n  --background-color-icone-message-duvida: #2A3465;\n  --background-color-icone-header: #DEE6FB;\n  --background-color-separacao-icones-header: #DFDFDF;\n  --background-color-alertas-header: #1D4FD7;\n  --background-color-sidebar: #091740;\n  --background-color-sidebar-menu: #00000080;\n  --background-color-menu-selecionado: #DEE6FB;\n  --background-color-menu-hover: #F0F4FD;\n  --background-color-separacao-fomulario-cadastro: #DFDFDF;\n  --background-color-selecao-icone-perfil: #1D4FD7;\n  --background-color-selecao-icone-perfil-sem-img: #67C1F920;\n  --background-color-selecao-icone-perfil-sem-img-hover: #67C1F9;\n  --background-color-loader: #ffffff;\n  --background-color-table-th: #F1F3F6;\n  --background-color-table-th-2: #f0f4fd;\n  --background-color-table-td: #DEE6FB;\n  --background-color-dropdown: #E8ECF3;\n  --background-color-dropdown-hover: #bebfc2;\n  --background-color-bloco-item-filtro: #E4E8F1;\n  --background-color-hr: #E0E4EA;\n  --background-color-editar-itens: #4F5C6E;\n  --background-color-icon-radio: #242B35;\n  --background-color-proximo-contratante: #1D4FD7;\n  --background-color-input-disabled: #F1F3F6;\n  --background-color-linha: #8292AA;\n  --overflow-filter-background-login: #2A3467;\n  --font-login: \"Sofia Sans\", sans-serif;\n  --font-sidebar-footer: \"Sofia Sans\", sans-serif;\n  --font-menu-opcao: \"Sofia Sans\", sans-serif;\n  --font-qtd-alertas-header: \"Sofia Sans\", sans-serif;\n  --font-titulo-atualizar-senha: \"Roboto Slab\", serif;\n  --font-sofia-sans: \"Sofia Sans\", sans-serif;\n  --font-roboto-slab: \"Roboto Slab\", serif;\n  --font-color-h1-titulo: #06102D;\n  --font-color-h6-titulo: #21272A;\n  --font-color-texto-parcelas: #21272A;\n  --font-color-texto-termos: #21272A;\n  --font-color-label: #000000;\n  --font-color-input: #000000;\n  --font-color-botao-ativo: #FBFCFF;\n  --font-color-alerta: #d60f0f;\n  --font-color-bloco-item-filtro: #4F5C6E;\n  --font-color-label-login: #21272A;\n  --font-color-input-login: #697077;\n  --font-color-input-link: #102C79;\n  --font-color-botao-login: #FBFCFF;\n  --font-color-erro-vermelho: rgb(175, 59, 59);\n  --font-color-titulo-atualizar-senha: #06102D;\n  --font-color-alertasheader: #ffffff;\n  --font-color-sidebar-footer: #FBFCFF;\n  --font-color-menu-opcao: #FBFCFF;\n  --font-color-menu-opcao-hover: #21272A;\n  --font-color-paginas: #000000;\n  --font-color-botao-azul: #1D4FD7;\n  --font-color-botao-verde: #2EC03D;\n  --font-color-botao-azul-hover: #FBFCFF;\n  --font-color-filtro: #262626;\n  --font-color-load-token: #091740;\n  --font-color-alerta-erro: #F00404;\n  --font-color-entre-em-contato: #242B35;\n  --font-color-informacao: #242B35;\n  --font-color-selection-option: #000000;\n  --font-color-alerta-previdencia: #F2536D;\n  --font-color-tabela-editar-item: #EEF2FE;\n  --font-color-inativo: #A8B3C4;\n  --font-color-menu-dropdow: #A8B3C4;\n  --icone-color-input-login: #697077;\n  --icone-color-perfil-header: #102C79;\n  --icone-color-mensagem-header: #102C79;\n  --icone-color-menu-opcao-hover: #102C79;\n  --border-color-message-duvida: #2A3465;\n  --border-color-botao-azul: #1D4FD7;\n  --border-color-message-duvida-hover: #67C1F9;\n  --border-color-header: #DFDFDF;\n  --border-color-menu-opcao: #FBFCFF;\n  --border-color-selecao-icone-perfil: #000000;\n  --border-color-input-login: #babcc0;\n  --border-color-input-paginas: #A8B3C4;\n  --border-color-dropdown: #A8B3C4;\n  --border-color-resumo-detalhe-analise: #C8CED9;\n  --border-color-alerta-erro: #F00404;\n  --border-color-alerta-previdencia: #F2536D;\n  --border-color-selecao-tipo: #242B35;\n  --box-shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  --color-menu-hierarquia: #DFDFDF;\n  /* PROCESSOS RELATORIO */\n  --background-color-sem-inconsistencia: #EFFDF1;\n  --background-color-com-inconsistencia: #FEFBE9;\n  --background-color-erro-de-analise: #FEF1F0;\n  --font-color-sem-inconsistencia: #34C25C;\n  --font-color-com-inconsistencia: #F5A738;\n  --font-color-erro-de-analise: #F2536D; }\n/* APLICANDO CONFIGURACOES GLOBAIS PARA SEU PROJETO */\nhtml {\n  scroll-behavior: smooth; }\nhtml, body {\n  margin-left: 2.5%;\n  margin-right: 2.5%;\n  height: 100%;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n  position: relative;\n  /*background: var(--background-color-default);*/\n  background-color: var(--background-login); }\n/* REMOVE A BARRA DE BOLAGEM DO BODY */\n::-webkit-scrollbar {\n  display: none; }\n/* APLICANDO CONFIGURACOES GLOBAIS PARA O H1 */\nh1 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 44px !important;\n  font-weight: 800 !important;\n  color: var(--text-title); }\na {\n  color: #3F648D; }\na:focus {\n  outline: 0; }\nimg {\n  max-width: 100%;\n  border: none; }\np {\n  line-height: 1.7; }\n.clear {\n  clear: both; }\nhr {\n  height: 1px;\n  clear: both;\n  border: none;\n  line-height: 0;\n  background: rgba(0, 0, 0, 0.1);\n  margin: 20px 0; }\n/***  HELPERS ***/\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table; }\n.clearfix:after {\n  clear: both; }\n.clearfix {\n  zoom: 1; }\n.clear {\n  clear: both; }\n.opacity-low {\n  opacity: 0.7;\n  filter: alpha(opacity=70); }\n.font-small {\n  font-size: 90% !important; }\n.font-large {\n  font-size: 200% !important; }\n.h1, h1 {\n  font-size: 36px; }\n.h1, .h2, .h3, h1, h2, h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\nh1 {\n  margin: .67em 0;\n  font-size: 2em; }\n.divisor-blocos {\n  margin: 1% 0%;\n  width: 100%;\n  height: 0px;\n  border-top: 0px solid transparent;\n  border-left: 0px solid transparent;\n  border-right: 0px solid transparent;\n  border-bottom: 1px solid #eae9e9; }\ninput {\n  color: var(--font-color-input); }\ntable tbody tr:hover {\n  background-color: var(--background-color-table-hover); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGtldmluXFxEZXNrdG9wXFxwcm92YS10b2tpb1xccHJvdmEtdG9raW8tbWFzdGVyLTk5Nzc0NGUwMTY0ZWRlZTZlNzQ0MjEyNzVlNWMxNjdiMzI2YzczNTBcXHVpLWFuZ3VsYXIvc3JjXFxzdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esd0dBQVk7QUFDWiwrR0FBWTtBQUNaLDBGQUFZO0FBQ1oscUZBQVk7QUFDWiw0RkFBWTtBQUdaLDZHQUFZO0FBQ1osOEZBQVk7QUFYWiw4RUFBQTtBQUVBLCtEQUFBO0FBT0EsOEJBQUE7QUFJQSxxREFBQTtBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVMsRUFBQTtBQUlYLHdEQUFBO0FBQ0E7RUFDRSx1QkFBZTtFQUNmLHFCQUFhO0VBQ2IscUJBQWE7RUFDYix3QkFBYztFQUNkLHFCQUFhO0VBQ2IsMkJBQW1CO0VBQ25CLG9CQUFZO0VBQ1osNEJBQVc7RUFFWCw4QkFBc0I7RUFFdEIsK0JBQTBCO0VBQzFCLGtEQUFnQztFQUNoQyxxQ0FBNkI7RUFDN0Isa0NBQTBCO0VBQzFCLHdDQUFnQztFQUNoQyxxREFBNEI7RUFDNUIsbUNBQTJCO0VBQzNCLGlDQUF5QjtFQUN6QixpQ0FBeUI7RUFDekIsaUNBQXlCO0VBRXpCLDJCQUFtQjtFQUNuQiwyQkFBbUI7RUFDbkIsMEJBQWtCO0VBRWxCLG9CQUFZO0VBRVosdUJBQWE7RUFFYiw0Q0FBeUI7RUFDekIsMENBQXVCO0VBQ3ZCLDJDQUF3QjtFQUV4QixzQ0FBcUI7RUFDckIsb0NBQW1CO0VBQ25CLHNDQUFvQjtFQUVwQixnQkFBQTtFQUNBLDJCQUFtQjtFQUNuQiw0QkFBb0I7RUFDcEIsd0NBQWdDO0VBQ2hDLHVDQUErQjtFQUMvQix5Q0FBaUM7RUFDakMsdUNBQStCO0VBQy9CLGdEQUF3QztFQUN4Qyx3Q0FBZ0M7RUFDaEMsbURBQTJDO0VBQzNDLDBDQUFrQztFQUNsQyxtQ0FBMkI7RUFDM0IsMENBQWdDO0VBQ2hDLDRDQUFv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cEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHaEI7RUFDRSxlQUFlO0VBQ2YsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsYUFBYTtFQUViLFdBQVc7RUFDWCxXQUFXO0VBRVgsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsZ0NBQWdDLEVBQUE7QUFJbEM7RUFDRSw4QkFBOEIsRUFBQTtBQUloQztFQUNFLHFEQUFxRCxFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuLyogSU1QT1JUQU5ETyBGT05UUyBQQVJBIFNFVSBQUk9KRVRPLCBBUEFSVElSIERPIEdPT0dMRSBGT05UUyAqL1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMjAwOzMwMDs0MDA7NjAwOzcwMDs5MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbWFyYW50aDp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRAMzAwLi43MDAmZGlzcGxheT1zd2FwJyk7XG5cbi8qIEZPTlQgUEFEUkFPIC0+IFNvZmlhIFNhbnMgKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVNvZmlhK1NhbnM6aXRhbCx3Z2h0QDAsMS4uMTAwMDsxLDEuLjEwMDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDEwMC4uOTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4vKiBERUlYQU5ETyBBIE1BUkdJTiBFIFBBRERJTkcgREUgU0VVIFdJTkRPVyBaRVJBRE8gKi9cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5cbn1cblxuLyogQ1JJQU5ETyBNQUNST1MvVkFSSUFWRUlTIFBBUkEgUkVVVElMSVpBQ0FPIERFIENPUkVTICovXG46cm9vdCB7XG4gIC0tdGV4dC1kZWZhdWx0OiAjMjYyNjI2O1xuICAtLXRleHQtdGl0bGU6ICMzMDMwMzA7XG4gIC0tdGV4dC1pbnB1dDogIzZlNmU2ZTtcbiAgLS10ZXh0LWF1dGhvcjogIzAwMDAwMDgwO1xuICAtLXRleHQtd2hpdGU6ICNmMWYxZjE7XG4gIC0tdGV4dC13aGl0ZS1saWdodDogI2ZmZmZmZjtcbiAgLS10ZXh0LWxpbms6ICMxOTE5MTk7XG4gIC0tdGV4dC1yZWQ6IHJnYigxNzUsIDU5LCA1OSk7XG5cbiAgLS1ib3JkZXItc3R5bGUtc2VhcmNoOiAjZThlOGU4O1xuXG4gIC0tYmFja2dyb3VuZC1jb2xvci1idXR0b246ICMzYmM7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1idXR0b24taG92ZXI6IHJnYig0MywgMTYxLCAxNzcpO1xuICAtLWJhY2tncm91bmQtY29sb3ItY29weXJpZ2h0OiAjMTkxOTE5O1xuICAtLWJhY2tncm91bmQtY29sb3ItZGFuZ2VyOiAjZDYwZjBmO1xuICAtLWJhY2tncm91bmQtY29sb3ItZGFuZ2VyLWhvdmVyOiAjYTAxZjFmO1xuICAtLWJhY2tncm91bmQtY29sb3Itc2lkZS1iYXI6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC45KTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWRlZmF1bHQ6ICNmMWYxZjE7XG4gIC0tYmFja2dyb3VuZC1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWJsYWNrOiAjMTkxOTE5O1xuICAtLWJhY2tncm91bmQtY29sb3ItbGlsYXM6ICM0NzRlNzI7XG5cbiAgLS1pY29uLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWljb24tY29sb3ItYmxhY2s6ICMxOTE5MTk7XG4gIC0taWNvbi1jb2xvci1ibHVlOiAjNUFBNERCO1xuXG4gIC0tYnV0dG9uLW9rOiAjYjRiNGI0O1xuXG4gIC0tYm94LXNoYWRvdzogIzI2MjYyNjUwO1xuXG4gIC0tYWxlcnQtZ3JlZW4tYmFja2dyb3VuZDogcmdiKDE1NywgMjM1LCAxNTcpO1xuICAtLWFsZXJ0LXJlZC1iYWNrZ3JvdW5kOiByZ2IoMjM1LCAxNTcsIDE1Nyk7XG4gIC0tYWxlcnQtYmx1ZS1iYWNrZ3JvdW5kOiByZ2IoMTU3LCAxOTEsIDIzNSk7XG5cbiAgLS1hbGVydC1ncmVlbi1ib3JkZXI6IHJnYig1OSwgMTc1LCA1OSk7XG4gIC0tYWxlcnQtcmVkLWJvcmRlcjogcmdiKDE3NSwgNTksIDU5KTtcbiAgLS1hbGVydC1ibHVlLWJvcmRlcjogcmdiKDU5LCAxMDUsIDE3NSk7XG5cbiAgLyogTk9WTyBMQVlPVVQgKi9cbiAgLS1iYWNrZ3JvdW5kLWxvZ2luOiAjRkJGQ0ZGO1xuICAtLWJhY2tncm91bmQtZmlsdHJvOiAjRkJGQ0ZGO1xuICAtLWJhY2tncm91bmQtc2VsZWNhby1pbWctcGVyZmlsOiAjRkJGQ0ZGO1xuICAtLWJhY2tncm91bmQtY29sb3ItaW5wdXQtbG9naW46ICNFOEVDRjM7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1pbnB1dC1wYWdpbmFzOiAjRkZGRkZGO1xuICAtLWJhY2tncm91bmQtY29sb3ItYm90YW8tbG9naW46ICMxRDRGRDc7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1pY29uZS1tZXNzYWdlLWR1dmlkYTogIzJBMzQ2NTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWljb25lLWhlYWRlcjogI0RFRTZGQjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNlcGFyYWNhby1pY29uZXMtaGVhZGVyOiAjREZERkRGO1xuICAtLWJhY2tncm91bmQtY29sb3ItYWxlcnRhcy1oZWFkZXI6ICMxRDRGRDc7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1zaWRlYmFyOiAjMDkxNzQwO1xuICAtLWJhY2tncm91bmQtY29sb3Itc2lkZWJhci1tZW51OiAjMDAwMDAwODA7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1tZW51LXNlbGVjaW9uYWRvOiAjREVFNkZCO1xuICAtLWJhY2tncm91bmQtY29sb3ItbWVudS1ob3ZlcjogI0YwRjRGRDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNlcGFyYWNhby1mb211bGFyaW8tY2FkYXN0cm86ICNERkRGREY7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1zZWxlY2FvLWljb25lLXBlcmZpbDogIzFENEZENztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjYW8taWNvbmUtcGVyZmlsLXNlbS1pbWc6ICM2N0MxRjkyMDtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXNlbGVjYW8taWNvbmUtcGVyZmlsLXNlbS1pbWctaG92ZXI6ICM2N0MxRjk7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1sb2FkZXI6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10YWJsZS10aDogI0YxRjNGNjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXRhYmxlLXRoLTI6ICNmMGY0ZmQ7XG4gIC0tYmFja2dyb3VuZC1jb2xvci10YWJsZS10ZDogI0RFRTZGQjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWRyb3Bkb3duOiAjRThFQ0YzO1xuICAtLWJhY2tncm91bmQtY29sb3ItZHJvcGRvd24taG92ZXI6ICNiZWJmYzI7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1ibG9jby1pdGVtLWZpbHRybzogI0U0RThGMTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWhyOiAjRTBFNEVBO1xuICAtLWJhY2tncm91bmQtY29sb3ItZWRpdGFyLWl0ZW5zOiAjNEY1QzZFO1xuICAtLWJhY2tncm91bmQtY29sb3ItaWNvbi1yYWRpbzogIzI0MkIzNTtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLXByb3hpbW8tY29udHJhdGFudGU6ICMxRDRGRDc7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1pbnB1dC1kaXNhYmxlZDogI0YxRjNGNjtcblxuICAtLWJhY2tncm91bmQtY29sb3ItbGluaGE6ICM4MjkyQUE7XG5cbiAgLS1vdmVyZmxvdy1maWx0ZXItYmFja2dyb3VuZC1sb2dpbjogIzJBMzQ2NztcblxuICAtLWZvbnQtbG9naW46IFwiU29maWEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc2lkZWJhci1mb290ZXI6IFwiU29maWEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtbWVudS1vcGNhbzogXCJTb2ZpYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1xdGQtYWxlcnRhcy1oZWFkZXI6IFwiU29maWEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtdGl0dWxvLWF0dWFsaXphci1zZW5oYTogXCJSb2JvdG8gU2xhYlwiLCBzZXJpZjtcbiAgLS1mb250LXNvZmlhLXNhbnM6IFwiU29maWEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtcm9ib3RvLXNsYWI6IFwiUm9ib3RvIFNsYWJcIiwgc2VyaWY7XG5cbiAgLS1mb250LWNvbG9yLWgxLXRpdHVsbzogIzA2MTAyRDtcbiAgLS1mb250LWNvbG9yLWg2LXRpdHVsbzogIzIxMjcyQTtcbiAgLS1mb250LWNvbG9yLXRleHRvLXBhcmNlbGFzOiAjMjEyNzJBO1xuICAtLWZvbnQtY29sb3ItdGV4dG8tdGVybW9zOiAjMjEyNzJBO1xuICAtLWZvbnQtY29sb3ItbGFiZWw6ICMwMDAwMDA7XG4gIC0tZm9udC1jb2xvci1pbnB1dDogIzAwMDAwMDtcbiAgLS1mb250LWNvbG9yLWJvdGFvLWF0aXZvOiAjRkJGQ0ZGO1xuICAtLWZvbnQtY29sb3ItYWxlcnRhOiAjZDYwZjBmO1xuICAtLWZvbnQtY29sb3ItYmxvY28taXRlbS1maWx0cm86ICM0RjVDNkU7XG5cbiAgLS1mb250LWNvbG9yLWxhYmVsLWxvZ2luOiAjMjEyNzJBO1xuICAtLWZvbnQtY29sb3ItaW5wdXQtbG9naW46ICM2OTcwNzc7XG4gIC0tZm9udC1jb2xvci1pbnB1dC1saW5rOiAjMTAyQzc5O1xuICAtLWZvbnQtY29sb3ItYm90YW8tbG9naW46ICNGQkZDRkY7XG4gIC0tZm9udC1jb2xvci1lcnJvLXZlcm1lbGhvOiByZ2IoMTc1LCA1OSwgNTkpO1xuICAtLWZvbnQtY29sb3ItdGl0dWxvLWF0dWFsaXphci1zZW5oYTogIzA2MTAyRDtcbiAgLS1mb250LWNvbG9yLWFsZXJ0YXNoZWFkZXI6ICNmZmZmZmY7XG4gIC0tZm9udC1jb2xvci1zaWRlYmFyLWZvb3RlcjogI0ZCRkNGRjtcbiAgLS1mb250LWNvbG9yLW1lbnUtb3BjYW86ICNGQkZDRkY7XG4gIC0tZm9udC1jb2xvci1tZW51LW9wY2FvLWhvdmVyOiAjMjEyNzJBO1xuICAtLWZvbnQtY29sb3ItcGFnaW5hczogIzAwMDAwMDtcbiAgLS1mb250LWNvbG9yLWJvdGFvLWF6dWw6ICMxRDRGRDc7XG4gIC0tZm9udC1jb2xvci1ib3Rhby12ZXJkZTogIzJFQzAzRDtcbiAgLS1mb250LWNvbG9yLWJvdGFvLWF6dWwtaG92ZXI6ICNGQkZDRkY7XG4gIC0tZm9udC1jb2xvci1maWx0cm86ICMyNjI2MjY7XG4gIC0tZm9udC1jb2xvci1sb2FkLXRva2VuOiAjMDkxNzQwO1xuICAtLWZvbnQtY29sb3ItYWxlcnRhLWVycm86ICNGMDA0MDQ7XG4gIC0tZm9udC1jb2xvci1lbnRyZS1lbS1jb250YXRvOiAjMjQyQjM1O1xuICAtLWZvbnQtY29sb3ItaW5mb3JtYWNhbzogIzI0MkIzNTtcbiAgLS1mb250LWNvbG9yLXNlbGVjdGlvbi1vcHRpb246ICMwMDAwMDA7XG4gIC0tZm9udC1jb2xvci1hbGVydGEtcHJldmlkZW5jaWE6ICNGMjUzNkQ7XG4gIC0tZm9udC1jb2xvci10YWJlbGEtZWRpdGFyLWl0ZW06ICNFRUYyRkU7XG4gIC0tZm9udC1jb2xvci1pbmF0aXZvOiAjQThCM0M0O1xuICAtLWZvbnQtY29sb3ItbWVudS1kcm9wZG93OiAjQThCM0M0O1xuXG4gIC0taWNvbmUtY29sb3ItaW5wdXQtbG9naW46ICM2OTcwNzc7XG4gIC0taWNvbmUtY29sb3ItcGVyZmlsLWhlYWRlcjogIzEwMkM3OTtcbiAgLS1pY29uZS1jb2xvci1tZW5zYWdlbS1oZWFkZXI6ICMxMDJDNzk7XG4gIC0taWNvbmUtY29sb3ItbWVudS1vcGNhby1ob3ZlcjogIzEwMkM3OTtcblxuICAtLWJvcmRlci1jb2xvci1tZXNzYWdlLWR1dmlkYTogIzJBMzQ2NTtcbiAgLS1ib3JkZXItY29sb3ItYm90YW8tYXp1bDogIzFENEZENztcbiAgLS1ib3JkZXItY29sb3ItbWVzc2FnZS1kdXZpZGEtaG92ZXI6ICM2N0MxRjk7XG4gIC0tYm9yZGVyLWNvbG9yLWhlYWRlcjogI0RGREZERjtcbiAgLS1ib3JkZXItY29sb3ItbWVudS1vcGNhbzogI0ZCRkNGRjtcbiAgLS1ib3JkZXItY29sb3Itc2VsZWNhby1pY29uZS1wZXJmaWw6ICMwMDAwMDA7XG4gIC0tYm9yZGVyLWNvbG9yLWlucHV0LWxvZ2luOiAjYmFiY2MwO1xuICAtLWJvcmRlci1jb2xvci1pbnB1dC1wYWdpbmFzOiAjQThCM0M0O1xuICAtLWJvcmRlci1jb2xvci1kcm9wZG93bjogI0E4QjNDNDtcbiAgLS1ib3JkZXItY29sb3ItcmVzdW1vLWRldGFsaGUtYW5hbGlzZTogI0M4Q0VEOTtcbiAgLS1ib3JkZXItY29sb3ItYWxlcnRhLWVycm86ICNGMDA0MDQ7XG4gIC0tYm9yZGVyLWNvbG9yLWFsZXJ0YS1wcmV2aWRlbmNpYTogI0YyNTM2RDtcbiAgLS1ib3JkZXItY29sb3Itc2VsZWNhby10aXBvOiAjMjQyQjM1O1xuXG4gIC0tYm94LXNoYWRvdy0xOiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cbiAgLS1jb2xvci1tZW51LWhpZXJhcnF1aWE6ICNERkRGREY7XG5cbiAgLyogUFJPQ0VTU09TIFJFTEFUT1JJTyAqL1xuICAtLWJhY2tncm91bmQtY29sb3Itc2VtLWluY29uc2lzdGVuY2lhOiAjRUZGREYxO1xuICAtLWJhY2tncm91bmQtY29sb3ItY29tLWluY29uc2lzdGVuY2lhOiAjRkVGQkU5O1xuICAtLWJhY2tncm91bmQtY29sb3ItZXJyby1kZS1hbmFsaXNlOiAjRkVGMUYwO1xuXG4gIC0tZm9udC1jb2xvci1zZW0taW5jb25zaXN0ZW5jaWE6ICMzNEMyNUM7XG4gIC0tZm9udC1jb2xvci1jb20taW5jb25zaXN0ZW5jaWE6ICNGNUE3Mzg7XG4gIC0tZm9udC1jb2xvci1lcnJvLWRlLWFuYWxpc2U6ICNGMjUzNkQ7XG59XG5cbi8qIEFQTElDQU5ETyBDT05GSUdVUkFDT0VTIEdMT0JBSVMgUEFSQSBTRVUgUFJPSkVUTyAqL1xuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuXG59XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW4tbGVmdDogMi41JTtcbiAgbWFyZ2luLXJpZ2h0OiAyLjUlO1xuXG4gIGhlaWdodDogMTAwJTtcblxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC8qYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1kZWZhdWx0KTsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxvZ2luKTtcblxufVxuXG4vKiBSRU1PVkUgQSBCQVJSQSBERSBCT0xBR0VNIERPIEJPRFkgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuXG59XG5cbi8qIEFQTElDQU5ETyBDT05GSUdVUkFDT0VTIEdMT0JBSVMgUEFSQSBPIEgxICovXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDQ0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xuXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXRpdGxlKTtcblxufVxuXG5hIHtcbiAgY29sb3I6ICMzRjY0OEQ7XG59XG5cbmE6Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxucCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5jbGVhciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBjbGVhcjogYm90aDtcbiAgYm9yZGVyOiBub25lO1xuICBsaW5lLWhlaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxuXG4vKioqICBIRUxQRVJTICoqKi9cblxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlXG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoXG59XG5cbi5jbGVhcmZpeCB7XG4gIHpvb206IDFcbn1cblxuLmNsZWFyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5vcGFjaXR5LWxvdyB7XG4gIG9wYWNpdHk6IDAuNztcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbn1cblxuLmZvbnQtc21hbGwge1xuICBmb250LXNpemU6IDkwJSAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMjAwJSAhaW1wb3J0YW50O1xufVxuXG4uaDEsIGgxIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuLmgxLCAuaDIsIC5oMywgaDEsIGgyLCBoMyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2LCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogLjY3ZW0gMDtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5kaXZpc29yLWJsb2NvcyB7XG4gIG1hcmdpbjogMSUgMCU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMHB4O1xuXG4gIGJvcmRlci10b3A6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlOWU5O1xuXG59XG5cbmlucHV0IHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW5wdXQpO1xuXG59XG5cbnRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci10YWJsZS1ob3Zlcik7XG5cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kevin\Desktop\prova-tokio\prova-tokio-master-997744e0164edee6e74421275e5c167b326c7350\ui-angular\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map