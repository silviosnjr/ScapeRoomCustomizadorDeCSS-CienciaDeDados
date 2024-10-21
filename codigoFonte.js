codigoHTML = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redes Sociais</title>
</head>
<body>
    <header>
        <h1>Relatório das Redes Sociais</h1>
        <nav>
            <a href="index.html">Mundo</a>
            <a href="#">Minha escola</a>
        </nav>
    </header>
    <main class="graficos-section">
        <section id="graficos-container" class="graficos-container">
            <!-- <p class="graficos-container__texto">
                Você sabia que o mundo tem 7.888 bilhões de pessoas que aproximadamente 5.04 bilhões estão conectadas em alguma rede social e passam em média 2 horas e 38 minutos conectadas.
                Isso significa que aproximadamente 63.89% de pessoas conectadas em alguma rede social.
            </p> -->
        </section>
    </main>
    <footer>
        <p>Desenvolvido por Formação by Start</p>
    </footer>
    <script type="module" src="graficos/informacoesGlobais.js"></script>
</body>
</html>`

variavaeis = 
"--text-color = #DBE4EF; \n"+
"--card-front-color = #144480; \n"+
"--card-back-color = #00F4BF; ";

const codigoFonte = {
    ":root": {
      "--bg-color": "#222831",
      "--primary-color": "#DDDDDD",
      "--secundary-color": "#F05454",
      "--font": '"Nunito Sans", sans-serif',
    },
    body: {
      "background-color": "var(--bg-color)",
      "color": "var(--primary-color)",
      "font-family": "var(--font)",
      "height": "100vh",
      "margin": "0",
    },
    "header": {
      "background-color": "var(--primary-color)",
      "text-align": "center",
      "padding": "1px",
    },
    "h1": {
      "font-size": "2rem",
      "color": "var(--bg-color)",
      "font-weight": "700",
    },
    "nav": {
      "display": "flex",
      "justify-content": "center",
      "font-weight": "400",
    },
    "nav a": {
      "text-decoration": "none",
      "color": "var(--bg-color)",
      "margin": "0 2rem 1rem 0rem",
      "font-size": "1.2rem",
    },
    "nav a:hover": {
      "text-decoration": "underline",
      "transform": "scale(0.90)",
      "transition": "transform 0.1s",
    },
    "#graficos-container": {
      "margin": "5rem",
    },
    ".graficos-container__texto": {
      "font-size": "1.3rem",
      "text-align": "center",
      "padding": "2rem",
      "border": "var(--secundary-color) solid 2px",
    },
    "span": {
      "font-weight": "bold",
      "color": "var(--secundary-color)",
    },
    "footer": {
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "background-color": "var(--primary-color)",
      "color": "var(--bg-color)",
      "width": "100%",
      "height": "3rem",
      "margin-top": "2rem",
    },
  };

const importFonts = {
    "Bai Jamjuree" : "@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap');",
    "Josefin Sans" : "@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');",
    "Tomorrow" : "@import url('https://fonts.googleapis.com/css2?family=Tomorrow&display=swap');",
    "Grandstander" : "@import url('https://fonts.googleapis.com/css2?family=Grandstander:ital,wght@0,100..900;1,100..900&display=swap');",
    "Handjet" : "@import url('https://fonts.googleapis.com/css2?family=Handjet:wght@100..900&display=swap');",
    "Niramit" : "@import url('https://fonts.googleapis.com/css2?family=Niramit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');",
    "Gluten" : "@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap');",
    "Nunito Sans" : "@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap');"
}

codigoJavaScript = `
const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    //console.log(dados)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = \`Você sabia que o mundo tem \${dados.total_pessoas_mundo} de pessoas e que aproximadamente \${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média \${dados.tempo_medio} horas conectadas.\`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
`