const textoErro = "<img src='assets/img/browser_sad.png' style='width:200px; margin-bottom:20px'> <br/>Você escolheu a opção errada, mas tudo bem, <span class='destaque'>volte e tente novamente!</span>"

const perguntas = [
    {
        enunciado: `
        Neste Escape Room vamos dar vida a página web abaixo da unidade de Ciência de Dados, criando o <span class='destaque'>estilo CSS</span> e customizando nosso projeto.<br/><br/>
        `,
        imagem: "assets/img/pagina_HTML.png",
        posicaoImg: "", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: "Sim, vamos! Eu já tenho o código HTML em meu projeto.",
                afirmacao: "X",
                correta: true,
                img: "",
                imgThumb: "",
                correta: true,
                recompensa: false,
                linguagem: "",
                textoRecompensa: ""
            },
            {
                blocoCSS: "",
                propriedadeCSS : "html",
                valorPropriedadeCSS: "",
                texto: "Sim, vamos! Porém eu NÃO tenho o código HTML em meu projeto.",
                afirmacao: `
                Tudo bem, <span class='destaque'>copie</span> o código abaixo e <span class='destaque'>insira dentro</span> do seu arquivo <span class='code'>index.html</span>.<br/> Lembre-se que o conteúdo de alguns elementos devem ser personalizados como <span class='code'>title</span>, <span class='code'>h1</span> e o <span class='code'>footer</span>.<br/>                
                `
                ,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: true,
                linguagem: "language-html",
                textoRecompensa: codigoHTML
            }
        ],
        mostraBlocoCSS: false,
        blocoCSS: "",
        textoErrado: ""
    },
    {
        enunciado: "<span class='destaque'>Vamos começar a estilizar</span><br/>A fonte ou estilo das letras de nossa página é algo marcante. Por isso busquei do GoogleFonts algumas opções, <span class='destaque'>escolha qual você gostou mais?</span>",
        imagem: "",
        posicaoImg: "", 
        alternativas: [
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Bai Jamjuree",
                texto: `<span class='bai-jamjuree'>Bai Jamjuree<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Josefin Sans",
                texto: `<span class='josefin-sans'>Josefin Sans<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Tomorrow",
                texto: `<span class='tomorrow'>Tomorrow<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Grandstander",
                texto: `<span class='grandstander'>Grandstander<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Handjet",
                texto: `<span class='handjet'>Handjet<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Niramit",
                texto: `<span class='niramit'>Niramit<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Gluten",
                texto: `<span class='gluten'>Gluten<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "--font",
                valorPropriedadeCSS: "Nunito Sans",
                texto: `<span class='nunito'>Nunito Sans<span>`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
        ],
        mostraBlocoCSS: false,
        blocoCSS: ":root",
        textoErrado: ""
    },
    {
        enunciado: "Sua página precisa de cores que combinem em harmonia.<br/> Eu selecionei algumas paletas de cores no site <a href='https://colorhunt.co/'>Color Hunt</a> para você escolher. Confira abaixo como elas são aplicadas à estrutura de layout do nosso site. <span class='destaque'>Clique na combinação de cores que mais gostar!</span>",
        imagem: "",
        posicaoImg: "", 
        alternativas: [
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#222831",
                    "--primary-color" : "#DDDDDD",
                    "--secundary-color" : "#F05454"
                },
                texto: "<span>Urban Sunset</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores1.png'>`,
                correta: true,
                img: "assets/img/cores1.png",
                imgThumb: "assets/img/cores1.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#536493",
                    "--primary-color" : "#FFF1DB",
                    "--secundary-color" : "#88C273"
                },
                texto: "<span>Natural Breeze</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores2.png'>`,
                correta: true,
                img: "assets/img/cores2.png",
                imgThumb: "assets/img/cores2.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#BF2EF0",
                    "--primary-color" : "#FFF6EA",
                    "--secundary-color" : "#FEECB3"
                },
                texto: "<span>Electric Sunrise</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br />  
                <img src='assets/img/cores3.png'>`,
                correta: true,
                img: "assets/img/cores3.png",
                imgThumb: "assets/img/cores3.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#FF8A8A",
                    "--primary-color" : "#F4DEB3",
                    "--secundary-color" : "#CCE0AC"
                },
                texto: "<span>Pastel Garden</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores4.png'>`,
                correta: true,
                img: "assets/img/cores4.png",
                imgThumb: "assets/img/cores4.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#FFA62F",
                    "--primary-color" : "#FFE8C8",
                    "--secundary-color" : "#42af02"
                },
                texto: "<span>Sunny Fields</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores5.png'>`,
                correta: true,
                img: "assets/img/cores5.png",
                imgThumb: "assets/img/cores5.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#6F4E37",
                    "--primary-color" : "#ECB176",
                    "--secundary-color" : "#FED8B1"
                },
                texto: "<span>Café</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores6.png'>`,
                correta: true,
                img: "assets/img/cores6.png",
                imgThumb: "assets/img/cores6.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
            {
                blocoCSS: ":root",
                propriedadeCSS : "variaveisRoot",
                valorPropriedadeCSS: {
                    "--bg-color" : "#9CDBA6",
                    "--primary-color" : "#468585",
                    "--secundary-color" : "#DEF9C4"
                },
                texto: "<span>Natureza</span>",
                afirmacao: `
                Ótimo! Importamos a fonte e criamos variáveis CSS com base na sua escolha. Sua página web ficará parecido com o layout abaixo.<br /> 
                <img src='assets/img/cores7.png'>`,
                correta: true,
                img: "assets/img/cores7.png",
                imgThumb: "assets/img/cores7.png",
                recompensa: false,
                linguagem: false,
                textoRecompensa: ``
            },
        ],
        mostraBlocoCSS: true,
        blocoCSS: ":root",
        textoErrado: ""
    },
    {
        enunciado: `
        Você já observou a sua recompensa?<br />
        São variáveis criadas na raiz (root) do CSS, prontas para serem utilizadas nos valores das propriedades.Por exemplo, para colocar a variável <span class='code'>--bg-color</span> na propriedade <span class='code'>background-color</span> fazemos o seguinte:<br />
        <span class='code'>background-color: var(--bg-color);</span><br />
        <span class='destaque'>Agora como você faria para inserir a variável --primary-color como sendo a cor do texto de sua página web ?</span>
        `,
        imagem: "",
        posicaoImg: "", 
        alternativas: [
            {
                blocoCSS: "body",
                propriedadeCSS : "",
                valorPropriedadeCSS: "text-color",
                texto: "text-color: var(--primary-color);",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "",
                valorPropriedadeCSS: "color",
                texto: "color: let(--primary-color);",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "",
                valorPropriedadeCSS: "color",
                texto: "color: primary-color;",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "",
                valorPropriedadeCSS: "color",
                texto: "color: var(--primary-color);",
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
        ],
        mostraBlocoCSS: false,
        blocoCSS: "body",
        textoErrado: textoErro
    },
    {
        enunciado: `
        Por que é importante definir a propriedade CSS <span class='code'>margin: 0;</span> no body ao estilizar uma página web?
        `,
        imagem: "",
        posicaoImg: "", 
        alternativas: [
            {
                blocoCSS: "body",
                propriedadeCSS : "margin",
                valorPropriedadeCSS: "0",
                texto: "Para aumentar a margem entre o conteúdo e as bordas do navegador, melhorando a responsividade.",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "margin",
                valorPropriedadeCSS: "0",
                texto: "Para adicionar um espaçamento automático entre os elementos da página.",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "margin",
                valorPropriedadeCSS: "0",
                texto: "Para centralizar todo o conteúdo da página dentro do body.",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "body",
                propriedadeCSS : "margin",
                valorPropriedadeCSS: "0",
                texto: "Para remover as margens padrão dos navegadores, garantindo controle total sobre o layout da página.",
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
        ],
        mostraBlocoCSS: true,
        blocoCSS: "body",
        textoErrado: textoErro
    },
    {
        enunciado: `Qual propriedade CSS e valor abaixo você considera que deixará os <span class='destaque'>elementos do header centralizado</span> ?`,
        imagem: "assets/img/texto_centralizado.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: "align-text: centro;",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "header",
                propriedadeCSS : "text-align",
                valorPropriedadeCSS: "center",
                texto: "text-align: center;",
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: "text-align: justify;",
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
        ],
        mostraBlocoCSS: true,
        blocoCSS: "header",
        textoErrado: textoErro
    },
    {
        enunciado: `
        Depois que aplicamos o estilo no <span class="code">header</span>, o texto contido no <span class="code">h1</span> desapareceu. Analise os blocos de estilo do <span class="code">body</span> e do <span class="code">header</span> abaixo e assinale o argumento que explica o problema.
        `,
        imagem: "assets/img/cade_h1.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `
                O HTML não possui um elemento <span class="destaque">h1</span>
                `,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `
                A propriedade <span class="destaque">background-color</span> do <span class="destaque">body</span> e a <span class="destaque">color</span> do <span class="destaque">header</span> possuem os mesmos valores, o que oculta o texto, pois ele tem a mesma cor que o fundo.
                `,
                afirmacao: `
                Veja que sua recompensa são estilos CSS que resolvem esse problema do texto do elemento <span class="code">h1</span> possuir a mesma cor do <span class="code">background-color</span>
                `,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `
                Não inserimos um estilo com a propriedade <span class="destaque">font-family</span> o navegador não consegue interpretar corretamente a página. 
                `,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `
                Não inserimos um estilo com a propriedade <span class="destaque">font-size</span> isso deixa o texto invisível pois está sem tamanho.
                `,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "h1",
        textoErrado: textoErro
    }, 
    {
        enunciado: `
        Nossa página web possui um seção de navegação que agrupa nossos links (elememento <span class="code">a</span>), é um elemento HTML semântico, e ele será utilizado no CSS para estilizações. Vá até o seu <span class="code">index.html</span> encontre esse elemento e volte aqui para escolher a opção certa.`,
        imagem: "assets/img/elemento_de_links.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `href`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `section`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `nav`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `article`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "nav",
        textoErrado: textoErro
    }, 
    {
        enunciado: `
        Por padrão, os navegadores estilizam os elementos <span class="code">&lt;a&gt;</span> com uma cor azul e sublinhado. No entanto, em nossa página, não haverá essa decoração de texto nos links. Existe uma propriedade bastante intuitiva que permite personalizar e remover essa decoração dos links. <span class="destaque">Analise as opções abaixo e, de maneira intuitiva, escolha a propriedade que estamos falando</span>.
        `
        ,
        imagem: "assets/img/text_decoration.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `font-style: normal;`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `text-decoration: none;`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `display: none;`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `text-shadow: none;`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "nav a",
        textoErrado: textoErro
    }, 
    {
        enunciado: `
        Com a pseudo-classe <span class="code">hover</span>, podemos aplicar estilos a um elemento que serão ativados somente quando o cursor do mouse passar sobre ele. Vamos aplicar esse comportamento aos nossos links de navegação para que fique semelhante à ilustração acima. <span class="destaque">Clique na opção que corretamente seleciona o elemento em que queremos o <span class="code">hover</span></span>.
        `
        ,
        imagem: "assets/img/nav_a_hover.gif",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `nav a:hover`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `nav a.hover`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `nav a#hover`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `nav a hover`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "nav a:hover",
        textoErrado: textoErro
    }, 
    {
        enunciado: `
        O texto do nosso <i>Storytelling</i> deve conter um espaçamento interno, para que o paragrafo fique afastado das bordas, deixando o texto mais apresentável.<span class='destaque'> Qual propriedade utilizamos para aplicar esse espaçamento interno?</span>
        `
        ,
        imagem: "assets/img/espacamento_interno.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `margin`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `border`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `padding`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: ".graficos-container__texto",
        textoErrado: textoErro
    }, 
    {
        enunciado: `
        Agora, precisamos de um espaçamento externo, pois o container está muito colado com a borda da página. <span class='destaque'>Qual propriedade utilizamos para aplicar esse espaçamento externo?</span>
        `
        ,
        imagem: "assets/img/espacamento_externo.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `margin`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `border`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `padding`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "#graficos-container",
        textoErrado: textoErro
    },
    {
        enunciado: `
        Nosso rodapé é um display flexível, e precisamos centralizar seu conteúdo. <span class='destaque'>Qual propriedade utilizamos para aplicar a centralização do texto em um <span class="code">display:flex;</span>?</span>
        `
        ,
        imagem: "assets/img/justify-content_center.png",
        posicaoImg: "top", 
        alternativas: [
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `text-align: center;`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `text-content: center;`,
                afirmacao: ``,
                correta: false,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            },
            {
                blocoCSS: "",
                propriedadeCSS : "",
                valorPropriedadeCSS: "",
                texto: `justify-content: center;`,
                afirmacao: ``,
                correta: true,
                img: "",
                imgThumb: "",
                recompensa: false,
                linguagem: "",
                textoRecompensa: ``
            }
        ],
        mostraBlocoCSS: true,
        blocoCSS: "footer",
        textoErrado: textoErro
    }
];