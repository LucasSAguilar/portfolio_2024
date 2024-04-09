import capa_FT_Digital from "../assets/projetos/FT_digital/capa.webp";
import capa_Cartao_Azul from "../assets/projetos/Cartao_Azul/capa.webp";
import capa_Commandas from "../assets/projetos/Commandas/capa.webp";
import capa_LoginMySQL from "../assets/projetos/LoginMySQL/capa.webp";
import capa_ViaCEP from "../assets/projetos/ViaCEP/capa.webp";
import capa_Aguilar_Space from "../assets/projetos/Aguilar_Space/capa.webp";
import capa_Serenatto from "../assets/projetos/Serenatto/capa.webp";
import capa_Meteora from "../assets/projetos/Meteora/capa.webp";
import capa_Cinetag from "../assets/projetos/Cinetag/capa.webp";
import capa_PK_Run from "../assets/projetos/PK_Run/capa.webp";
import capa_Jogo_da_velha from "../assets/projetos/Jogo_da_velha/capa.webp";
import capa_Organa from "../assets/projetos/Organa/capa.webp";
import capa_Aguilar_Studies from "../assets/projetos/Aguilar_Studies/capa.webp";
import capa_SysAssist from "../assets/projetos/SysAssist/capa.webp";

const projetos = [
  // Trabalhos reais ---
  {
    id: "1",
    titulo: "F.T. Digital",
    descricao:
      "Sistema desktop para gerir candidatos e colaboradores da empresa, contando com sistema de cadastro de currículo, evoluções sobre o indivíduo e sistema de score para definir melhores candidatos",
    video: "https://www.youtube.com/watch?v=WfX0YBzV434",
    codigo: "",
    site: "",
    tipo: "Trabalhos",
    destaque: true,
    capa: capa_FT_Digital,
    markdown:
      "# Frente de Trabalho Digital\n\nEsse é um sistema de gerenciamento de cadastros para um programa da prefeitura de Santa Rita do Passa Quatro chamado 'Frente de Trabalho', programa esse do qual pessoas em situação de vulnerabilidade social podem se inscrever para serem chamados para trabalhos variados dentro da prefeitura.\n\n## O sistema\n\nEsse sistema busca gerenciar dois principais públicos: **candidatos** para a vaga e os que **já foram contratados**.\n\n## O que ele faz?\n\nEntre suas funcionalidades, destacam-se:  \n- Sistema de login;  \n- Cadastro de candidatos (com opções de edição e exclusão);  \n- Registro de evoluções sobre os candidatos;  \n- Sistema de pontuação, conforme as regras definidas pela empresa, para facilitar o filtro dos candidatos ideais para a vaga.\n\n## Tecnologias usadas\n\n- HTML5  \n- CSS3  \n- SCSS  \n- Javascript  \n- Electron  \n- ReactJS  \n- NodeJS  \n- SQLite  \n- Express",
  },
  {
    id: "2",
    titulo: "Cartão Azul",
    descricao:
      "O 'Cartão Azul' vai além de ser um simples aplicativo de desktop; é uma ferramenta de impacto social desenvolvida com dedicação para a Assistência Social da cidade de Santa Rita do Passa Quatro. Neste projeto, criei um sistema que visa agilizar e controlar a emissão de documentos essenciais para pessoas com Transtorno do Espectro Autista (TEA), proporcionando um acesso simplificado a serviços cruciais.",
    video: "",
    codigo: "",
    site: "",
    tipo: "Trabalhos",
    destaque: true,
    capa: capa_Cartao_Azul,
    markdown:
      "# Cartão Azul\n\nSistema solicitado pela 'Promoção Social', sendo esse responsável por cadastrar pessoas com Transtorno do Espectro Autista *(TEA)*. Após a realização do cadastro ele emite um documento para que possam usar e garantir seus direitos definidos pela legislação brasileira.\n\n## O que ele faz?\n\n- Recebe o cadastro de indivíduos;\n- Emite o documento automaticamente no momento do cadastro;\n- Sistema de filtro para encontrar cadastro;\n\n## Tecnologias usadas\n\n-   **HTML, CSS e JS:**  A base da interface do usuário é construída com HTML para a estrutura, CSS para a estilização visual e JS para a interatividade. Essas tecnologias essenciais proporcionam uma experiência amigável aos usuários do sistema.\n    \n-   **Electron:**  O uso do Electron é fundamental para transformar o aplicativo em uma aplicação desktop multiplataforma. Ele permite empacotar o aplicativo web como um executável, tornando-o acessível e utilizável sem a necessidade de um navegador.\n    \n-   **SQLite:**  O SQLite é um sistema de gerenciamento de banco de dados leve e incorporado. No  **'Cartão Azul'**, o SQLite é utilizado para armazenar os dados dos usuários, documentos e outras informações relevantes de maneira eficiente e acessível.\n    \n-   **NodeJS:**  A integração do NodeJS permite a criação de um servidor local que gerencia as solicitações e respostas do aplicativo. Ele trabalha em conjunto com o Electron para fornecer uma experiência fluida e responsiva.\n\n## Produção de Imagens e Design\n\nAlém da parte técnica, o projeto do  **'Cartão Azul'**  também envolveu a produção de imagens e design. Ferramentas como Photoshop e Canva foram utilizadas para criar recursos visuais, incluindo logotipos, ícones e elementos de design que refletissem a natureza séria e amigável do aplicativo.",
  },
  {
    id: "3",
    titulo: "Commandas",
    descricao:
      "O 'Commandas' é uma solução inovadora atualmente em desenvolvimento para aprimorar a gestão de pedidos em estabelecimentos que oferecem comidas e bebidas. Este sistema completo é composto por duas partes cruciais: o Desktop, uma ferramenta robusta para administração centralizada, e o Mobile, um aplicativo ágil e intuitivo para facilitar o atendimento e os pedidos dos clientes. O Commandas promete oferecer uma experiência integrada e eficiente para a indústria gastronômica.",
    video: "https://www.youtube.com/watch?v=fDdEslJN6rk",
    codigo: "",
    site: "",
    tipo: "Trabalhos",
    destaque: true,
    capa: capa_Commandas,
    markdown:
      "# Commandas\n\nO **Commandas** é uma solução para aprimorar e agilizar o atendimento em locais do ramo alimentício. Atualmente em desenvolvimento para aprimorar a gestão de pedidos em estabelecimentos que oferecem comidas e bebidas. Este sistema completo é composto por duas partes cruciais: o **Desktop**, uma ferramenta robusta para administração centralizada, e o **Mobile**, um aplicativo ágil e intuitivo para facilitar o atendimento e os pedidos dos clientes. \n\n## Desktop:\n\nEm um ambiente desktop o sistema pode ser usado para gerenciar o aplicativo, tais como abastecer o cardápio virtual, gerenciar mesas, organizar funcionários e seus acessos e administrar as comandas criadas.\n\n## Mobile:\n\nO ambiente mobile é focado para o **funcionário**, sendo nesse local possível acessar todas as informações definidas pelo usuário **root** e criar comandas de acordo com as solicitações dos clientes.\n\n## Comandas:\n\nCada comanda tem um titular e cada comanda pode receber vários pedidos, por exemplo:\n*João levou seus dois filhos para o restaurante, então a comanda fica marcada no nome de João*\n*Seus dois filhos fazem diversos pedidos, complementando a comanda e mudando seu valor final*\n\nO antigo modelo de softwares para restaurantes permitia apenas uma comanda por mesa, todavia nosso sistema permite diversas comandas para a mesma mesa. Esse modelo permite que várias pessoas se sentem na mesma mesa e ainda assim não crie dificuldades para definir o valor que cada um deve pagar. \n\n## Tecnologias usadas:\n\n- React\n- NodeJS\n- ExpressJS\n- MySQL\n- React Native\n\n## Suas funções\n\n- Cardápio dinâmico;\n- Mesas dinâmicas e dividida por setores;\n- Comandas com referência a um responsável;\n\n## Vendas\n\nO projeto ainda está em desenvolvimento, então não é possível adquirir, todavia você pode acompanhar nossas redes sociais para se manter informado!\n",
  },
  // API ----
  {
    id: "4",
    titulo: "Sistema de Cadastro/Login",
    descricao:
      "Sistema que emula um login e cadastro de novos usuários, sendo incluido a comunicação entre o a parte visual, servidor e banco de dados relacional",
    video: "",
    codigo: "https://github.com/LucasSAguilar/login_e_cadastro_com_mysql",
    site: "https://lucassaguilar.github.io/login_e_cadastro_com_mysql/",
    tipo: "API",
    destaque: false,
    capa: capa_LoginMySQL,
    markdown:
      "# Login e cadastro com MySQL\n\nEsse é um sistema para estudo da comunicação entre frontend e backend usando um  formulário de login e um de cadastro. Além disso, o sistema tem um design que busca uma fluidez em uma *single page*, mantendo o dinamismo na troca de informações mas sem usar o carregamento de novas páginas. Também é importante citar o design limpo e natural, usando o chamado *Glass Effect* 'que causa um aspecto de vidro no *background* dos formulários.\n\n## Comunicação back e front\n\nQuando cadastrado, o front valida os dados inseridos no formulário para verificar se as informações estão no padrão solicitado. Caso isso ocorra ele realiza um *fetch* para o código *NodeJS* em formato *POST* com os dados no *Body* em formato *JSON* e aguarda a resposta do backend. Caso o cadastro seja feito efetivamente ele exibe um componente de alerta avisando sobre o cadastro. Veja:\n\n```javascript\ntry {\n      const response = await fetch(`${URL}/cadastrar`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify([valorUser, valorPassword]),\n      });\n      const dados = await response.json();\n      if (dados.validade == true) {\n        alertaLogin(\n          inputCadUser.value,\n          inputCadPassword.value,\n          'Cadastro com sucesso!'\n        );\n```\nEle exibe os dados que foram enviados, visto que isso é um formulário para estudos, mas isso **NÃO** deve acontecer em um caso real. \nCaso você não tenha experiência com códigos você ainda assim pode testar o softwares que está hospedado na web, todavia os dados ficaram salvo em memória, sendo assim, os dados serão apagados assim que fechar ou atualizar a tela.\n```javascript\nconst cadastrarReserva = (novaReserva) => {\n  contasReservas.push(novaReserva);\n  alertaLogin(\n    novaReserva.usuario,\n    novaReserva.senha,\n    'Cadastrado com sucesso!'\n  );\n}; \n```\nCaso queira testar as funcionalidades do backend você deve instalar o MySQL, NodeJS e NPM no seu computador, além de clonar o sistema localmente:\n\n - Acesse o repositório do sistema\n - Crie o banco de dados de acordo com o script disponibilizado no repositório\n -  Clone o repositório no seu computador \n - Usando o terminal acesse a pasta criada\n - Use o comando para instalar todas as dependências:\n `npm install`\n- Inicialize o servidor:\n `node back/node/server.js` ",
  },
  {
    id: "5",
    titulo: "Via CEP",
    descricao:
      "Um formulário que utiliza a API do Via CEP, líder de mercado em localização. Isso significa preenchimento automático e preciso do endereço, economizando tempo e garantindo dados corretos.",
    video: "",
    codigo: "https://github.com/LucasSAguilar/consumo_API_VIACEP/tree/master",
    site: "https://lucassaguilar.github.io/consumo_API_VIACEP/",
    tipo: "API",
    destaque: false,
    capa: capa_ViaCEP,
    markdown:
      "# VIACEP\n\nA integração de APIs em formulários de cadastro é um exemplo clássico de como a tecnologia pode simplificar processos e melhorar a experiência do usuário. A API Via CEP, em particular, é uma ferramenta valiosa no contexto brasileiro, onde o CEP pode determinar uma ampla gama de informações de endereço. Ao automatizar o preenchimento de campos de endereço, não só economiza-se tempo, mas também reduz-se a possibilidade de erros de digitação, garantindo maior precisão nos dados coletados.\n\nO uso de APIs como a Via CEP reflete uma tendência maior na direção de interfaces mais inteligentes e interconectadas. Elas permitem que desenvolvedores criem soluções mais eficientes e que usuários desfrutem de uma navegação mais fluida e intuitiva. No desenvolvimento de um projeto que incorpora a API Via CEP, é essencial entender os princípios de requisições HTTP, manipulação de JSON, e as melhores práticas de UX/UI para garantir que o formulário não só funcione bem, mas também seja visualmente agradável e fácil de usar.\n\nAo projetar um formulário de endereço inteligente, deve-se considerar a jornada do usuário desde o momento em que ele insere o CEP até o preenchimento automático dos campos subsequentes. Isso envolve a criação de uma interface que seja responsiva e que se adapte a diferentes dispositivos e tamanhos de tela. Além disso, é importante implementar validações de campo para assegurar que o CEP fornecido é válido antes de realizar a consulta à API.\n\nEm resumo, a API Via CEP é um excelente exemplo de como as APIs estão remodelando a interação entre usuários e sistemas, proporcionando soluções que não apenas simplificam tarefas rotineiras, mas também enriquecem a experiência do usuário. Ao desenvolver um formulário de endereço inteligente, os desenvolvedores têm a oportunidade de explorar o potencial das APIs para criar interfaces mais eficazes e agradáveis, ao mesmo tempo em que mantêm um compromisso com a segurança e a privacidade dos dados dos usuários.\n\n## Tecnologias usadas:\n\n- Javascript\n- HTML5\n- CSS3",
  },
  // Sites expositivos ----
  {
    id: "6",
    titulo: "Aguilar Space",
    descricao:
      "Um site demonstrativo que simula uma galeria digital com tema espacial, buscando uma estética que garanta ao usuário uma experiência imersiva.",
    video: "",
    codigo: "https://github.com/LucasSAguilar/aguilar-space",
    site: "https://aguilar-space.vercel.app",
    tipo: "Sites expositivos",
    destaque: false,
    capa: capa_Aguilar_Space,
    markdown:
      "#  Aguilar Space\n\nEsse projeto foi desenvolvido em através de um curso da Alura sobre React, do qual tinha como objetivo simular uma galeria com tema 'Espacial'. Ao participar desse curso, fui guiado pelos fundamentos do React, incluindo a organização de pastas e arquivos do projeto, a implementação de componentes de Interface do Usuário e o tratamento de arquivos estáticos. Também aprendi a utilizar o poder do CSS modules e do Sass para criar estilos robustos e flexíveis. Além disso, explorei a utilização de métodos JavaScript para adicionar funcionalidades interativas à página.\n\n## Tecnologias usadas:\n\n- Javascipt\n- HTML5\n- SCSS\n- React",
  },
  {
    id: "7",
    titulo: "Serenatto",
    descricao:
      "Uma landing page para uma cafeteria, sendo desenvolvido com paixão e criatividade, destaca-se pela sua simplicidade e elegância, proporcionando aos visitantes uma experiência visualmente atraente e aconchegante.",
    video: "",
    codigo: "https://github.com/LucasSAguilar/Serenatto",
    site: "https://lucassaguilar.github.io/Serenatto/",
    tipo: "Sites expositivos",
    destaque: false,
    capa: capa_Serenatto,
    markdown:
      "# Serenatto\n\nEsse é um site expositivo de uma empresa fictícia chamada 'Serenatto' com foco em venda de alimentos em gerais, principalmente relacionado a café. Todo o site foi desenvolvido durante um curso da Alura relacionado ao Bootstrap, focando em compreender seus componentes mais atuais. A simplicidade é a chave do design do Serenatto. O layout limpo e minimalista permite que os elementos essenciais se destaquem, transmitindo a atmosfera aconchegante do café. A escolha cuidadosa de cores, fontes e espaçamento contribui para uma estética equilibrada, garantindo que o visitante seja imerso na experiência sem distrações desnecessárias.\n\n## Efeito de troca de fundo\n\nUma das características mais distintivas do Serenatto é a utilização de efeitos visuais envolventes. A imagem de fundo que permanece estática enquanto o visitante rola pela página, mas que muda dinamicamente quando um elemento específico entra em foco, cria uma atmosfera única e moderna. Essa técnica não apenas captura a atenção, mas também conta uma história visual à medida que o usuário explora a página.\n\n## Tecnologias\n\n- HTML5\n- CSS3\n- Bootstrap",
  },
  {
    id: "8",
    titulo: "Meteora",
    descricao:
      "Uma simulação de um e-commerce na temática de moda, sendo esse criado através de bootstrap, fornecendo assim uma estética atual e fascinante",
    video: "",
    codigo: "https://github.com/LucasSAguilar/Meteora",
    site: "https://lucassaguilar.github.io/Meteora/",
    tipo: "Sites expositivos",
    destaque: false,
    capa: capa_Meteora,
    markdown:
      "# Meteora\n\nEsse é um site expositivo sobre uma empresa fictícia chamada 'Meteora', da qual seria responsável pela venda de vestimentas em geral. O principal intuito era criar um site com design minimalista mas que causasse impacto para os visitantes.\n\n## Bootstrap\n\nEsse sistema foi todo construido através de um curso da *Alura* sobre *Bootstrap*, da qual teve o intuito de apresentar a ferramenta e mostrar seus componentes, facilitando a estilização e agilizando o desenvolvimento do site. Outro foco importante do projeto é o sistema de *slide* para apresentação de promoções, do qual costuma custar um tempo significativo do desenvolvedor caso queira construir do zero, mostrando a agilidade que o *bootstrap* propõe.\n\n## Tecnologias usadas\n\n- HTML5\n- CSS3\n- Bootstrap",
  },
  {
    id: "9",
    titulo: "Cinetag",
    descricao:
      "Um site que simula um streaming de vídeo, com possibilidade para adicionar “filmes” aos favoritos. Para simular foram usados vídeo aulas de professores da Alura no próprio Youtube.",
    video: "",
    codigo: "https://github.com/LucasSAguilar/CineTag",
    site: "https://cinetag-peach-three.vercel.app",
    tipo: "Sites expositivos",
    destaque: false,
    capa: capa_Cinetag,
    markdown:
      "# Cinetag\n\nO *Cinetag* simula um sistema de *streaming* de vídeos, do qual foi cadastrado no sistemas alguns vídeos publicados no canal oficial da *Alura* do *Youtube*. Além disso, o site conta com um sistema de *favoritos*, onde o usuário pode apontar alguns vídeos que ficam anotados como prioritários para o usuário.\n\n## Técnicas usadas\n\nPara desenvolver o sistema de favoritos usamos o *useContext*, responsável por criar contextos gerais para a aplicação, mostrando-se muito valioso para desenvolvedores que usam ReactJS\n\n## Tecnologias usadas\n\n- React\n- HTML5\n- CSS3\n- Javascript",
  },
  // Jogos ----
  {
    id: "10",
    titulo: "Pumpkin Run",
    descricao:
      "Um jogo totalmente feito com javascript no estilo “endless run”, sendo essa uma categoria que permite o jogador a sobreviver o máximo de tempo possível enquanto surgem obstáculos no caminho",
    video: "",
    codigo: "https://github.com/LucasSAguilar/pumpkin_run",
    site: "https://lucassaguilar.github.io/pumpkin_run/",
    tipo: "Jogos",
    destaque: false,
    capa: capa_PK_Run,
    markdown: "# Pumpkin run\n\nO Pumpkin Run é um dos meus primeiros projetos em JavaScript que me introduziu ao desenvolvimento web. Neste jogo inspirado no famoso jogo do dinossauro do Google, os jogadores precisam guiar o personagem principal para desviar dos caçadores que aparecem na tela. Prepare-se para uma jornada endless runner cheia de sustos e desafios!\n\n## Conceito e Estilo Endless Runner\n\nO Pumpkin Run segue o estilo clássico de endless runner, onde o objetivo é sobreviver o máximo possível, acumulando pontos à medida que o personagem avança pela tela. A inspiração veio do icônico jogo do dinossauro do Google, mas com uma abordagem temática mais assustadora e envolvente. O desafio é manter o personagem longe dos caçadores, evitando colisões que encerram o jogo.\n\n## Desenvolvimento Inicial - Aprendizado com HTML, CSS e JS\n\nO Pumpkin Run surgiu como um dos meus primeiros projetos ao iniciar meus estudos em desenvolvimento web. Ele foi desenvolvido com HTML, CSS e JavaScript, o que me permitiu aprender os fundamentos dessas linguagens e começar a aplicá-los para criar uma experiência interativa na web.\n\n## A Gameplay e a Magia das Ações do Jogador\n\nO controle do personagem é simples e eficiente, permitindo que os jogadores pulem ou deslizem para evitar os caçadores. Ao clicar, pressionar a tecla de espaço ou deslizar o dedo para baixo (em dispositivos móveis), o personagem realiza um pulo ou slide, adicionando uma camada de estratégia e diversão à gameplay.\n\n## Desafios Crescentes e Aumento de Velocidade\n\nÀ medida que a pontuação do jogador aumenta, a velocidade da tela também aumenta progressivamente. Esse desafio progressivo mantém os jogadores envolvidos e testa suas habilidades de reação. A velocidade crescente cria uma tensão constante, incentivando os jogadores a superarem seus próprios recordes e alcançarem novas distâncias.\n\n## Atravessando a Tela e Gerando Inimigos\n\nPara aprimorar a experiência do Pumpkin Run, os inimigos (caçadores) são gerados aleatoriamente, mantendo a jogabilidade dinâmica e emocionante. Os jogadores precisam estar alertas e reagir rapidamente para desviar dos caçadores que aparecem no caminho. A criação dinâmica de inimigos torna cada partida única e imprevisível.\n\n## Resultado Final e Desafios Futuros\n\nO Pumpkin Run se tornou uma experiência de aprendizado incrível para mim, mostrando a força do HTML, CSS e JavaScript para criar jogos interativos na web. Embora seja um dos meus primeiros projetos, o Pumpkin Run ainda é um marco significativo na minha jornada como desenvolvedor.\n\n## Tecnologias usadas\n\n- Javascript\n- CSS3\n- HTML5\n- JQuery",
  },
  {
    id: "11",
    titulo: "Jogo da velha",
    descricao:
      "O clássico jogo da velha, sendo esse desenvolvido apenas usando javascript",
    video: "",
    codigo: "https://github.com/LucasSAguilar/jogo-da-velha",
    site: "https://lucassaguilar.github.io/jogo-da-velha/",
    tipo: "Jogos",
    destaque: false,
    capa: capa_Jogo_da_velha,
    markdown:
      "# Jogo da velha\n\nO famoso *jogo da velha* criado com códigos bem simples no ínicio dos meus estudos em desenvolvimento de *software* com *javascript*\n\n## Regras\n\n- **Objetivo:** O objetivo do jogo é ser o primeiro jogador a formar uma linha de três símbolos iguais (X ou O) horizontal, vertical ou diagonalmente, dentro do tabuleiro 3x3.\n- **Tabuleiro:** O jogo é jogado em um tabuleiro quadrado 3x3. Cada célula do tabuleiro pode conter um dos dois símbolos: 'X' ou 'O', representando os dois jogadores.\n-  **Jogadas:** Os jogadores alternam entre si, colocando um símbolo de cada vez em uma célula vazia do tabuleiro.\n-  **Vitória:** Um jogador vence quando consegue formar uma linha de três símbolos iguais, seja na horizontal, vertical ou diagonal.\n-  **Empate:** Se todas as células do tabuleiro forem preenchidas e nenhum jogador conseguir formar uma linha de três símbolos iguais, o jogo termina em empate.\n- **Reinício:** Após uma partida ser concluída (com vitória ou empate), os jogadores podem optar por reiniciar o jogo, limpando o tabuleiro para uma nova partida.\n\n## Tecnologias usadas\n\n- Javascript\n- HTML5\n- CSS3",
  },
  // Ferramentas ---
  {
    id: "12",
    titulo: "Organa",
    descricao:
      "Um sistema para gerenciar times por grupos específicos, sendo esses dinâmicos e passíveis de alterações.",
    video: "",
    codigo: "https://github.com/LucasSAguilar/Organa_times",
    site: "https://organa-times.vercel.app",
    tipo: "Ferramentas",
    destaque: false,
    capa: capa_Organa,
    markdown: "# Organa\n\nO **'Organa'** foi concebido com o objetivo de criar uma ferramenta eficiente para a organização de equipes. A utilização do React foi fundamental para alcançar esse objetivo. As vantagens do React, como a criação de componentes reativos e a manipulação eficiente do VirtualDOM, proporcionaram uma interface de usuário responsiva e de alto desempenho. O fluxo unidirecional de dados (one-way data binding) e a capacidade de refatorar e evoluir os componentes de acordo com as necessidades do projeto foram cruciais para a criação de um organizador de equipes versátil e escalável.\n\n## Organização de equipes\n\nO  **'Organa'**  se destaca como um organizador de equipes completo e intuitivo. Os usuários podem criar times e cadastrar membros em cada equipe. A funcionalidade de personalização de cores para cada time proporciona uma experiência visual atraente e permite que os usuários personalizem seus espaços de trabalho.\n\nA implementação de componentes reativos no  **'Organa'**  permite que as alterações sejam refletidas em tempo real, garantindo uma experiência suave e responsiva. Através do VirtualDOM, o React gerencia eficientemente as mudanças na interface, tornando o  **'Organa'**  uma aplicação rápida e eficiente.\n\n## Tecnologias\n\n- HTML5\n- CSS3\n- Javascript\n- ReactJS",
  },
  {
    id: "13",
    titulo: "Aguilar Studies",
    descricao:
      "Projetada para tornar o processo de organização dos seus estudos mais eficiente e produtivo. Neste projeto, mergulhamos na criação de um aplicativo web que possibilita aos usuários cadastrar temas de estudo, definir o tempo alocado para cada tópico e iniciar a contagem de estudos",
    video: "",
    codigo: "https://github.com/LucasSAguilar/aguilar_studies",
    site: "https://aguilar-studies.vercel.app",
    tipo: "Ferramentas",
    destaque: false,
    capa: capa_Aguilar_Studies,
    markdown: "# Aguilar Studies\n\nSistema criado para gerir o tempo de estudo através de um cronômetro, no qual o usuário da um nome ao que pretende estudar, define o tempo e escolhe quando quer inicializar.\n\n## CSS Modules para Estilos Isolados\n\nEvitar conflitos e sobreposições de estilos é fundamental para manter uma experiência de usuário coesa. No  **Aguilar-studies**, empregamos  **CSS Modules**  para garantir que os estilos aplicados em um componente não afetem outros componentes. Com essa abordagem, cada componente possui seu próprio escopo isolado de estilos, prevenindo conflitos indesejados.\n\n## Código Limpo e Documentado com Boas Práticas\n\nDesenvolver código limpo e bem documentado é essencial para a manutenção e colaboração eficazes. No projeto  **Aguilar-studies**, adotamos princípios de boas práticas de programação, como o  **DRY (Don't Repeat Yourself)**  e o  **SRP (Single Responsibility Principle)**. Isso resultou em um código mais legível, modular e fácil de entender. Comentários e documentação clara foram incorporados para facilitar a colaboração e a manutenção futura.\n\n## Tecnologias usadas\n- HTML5\n- CSS3\n- Javascript\n- Typescript\n- ReactJS",
  },
  {
    id: "14",
    titulo: "SysAssist",
    descricao:
      "Aplicativo desktop para gerenciamento de atendimentos socioassistenciais e controle de atendimento a pacientes e/ou munícipes.",
    video: "https://www.youtube.com/watch?v=AXC9lPCJI6g&t=52s",
    codigo: "",
    site: "",
    tipo: "Trabalhos",
    destaque: false,
    capa: capa_SysAssist,
    markdown:
      "# SysAssist\n\nO SysAssist representa um avanço significativo na área de sistemas de gerenciamento socioassistenciais, oferecendo uma plataforma robusta e confiável para profissionais que desempenham um papel crucial no suporte a indivíduos e comunidades. A utilização de Java, uma linguagem de programação amplamente reconhecida por sua portabilidade e comunidade ativa, juntamente com o Maven, uma ferramenta de automação de compilação, sublinha o compromisso do sistema com a qualidade e a manutenção do código. A integração com JPA e MySQL demonstra uma abordagem moderna e eficiente no tratamento de dados, essencial para a precisão e segurança das informações dos usuários.\n\nA funcionalidade de login seguro e controle de acesso é uma medida indispensável, garantindo que a confidencialidade dos dados dos pacientes seja mantida, enquanto o sistema de CRUD oferece uma gestão de dados completa e intuitiva, permitindo que os profissionais se concentrem no que realmente importa: o atendimento ao paciente. O cadastro e edição de pacientes e atendimentos são processos simplificados, mas poderosos, que apoiam a documentação e o acompanhamento contínuo, elementos fundamentais para a prestação de serviços de alta qualidade.\n\nAlém disso, a estrutura do SysAssist é projetada para ser escalável e adaptável, permitindo que futuras expansões e personalizações sejam incorporadas sem grandes obstáculos. Isso é particularmente importante em um campo que está sempre evoluindo, com novas práticas e regulamentos emergindo regularmente. A capacidade de se adaptar e crescer com as necessidades dos profissionais e pacientes é, portanto, uma característica valiosa do SysAssist.\n\nEm resumo, o SisAssist não é apenas uma ferramenta de gerenciamento; é um facilitador de mudanças positivas no campo socioassistencial. Ao aliviar o fardo administrativo dos profissionais, permite que eles dediquem mais tempo e recursos ao que realmente importa: fornecer cuidados e suporte excepcionais aos seus pacientes. Com sua abordagem centrada no usuário e seu compromisso com a segurança e eficiência dos dados, o SysAssist está bem posicionado para se tornar um componente essencial no arsenal de qualquer equipe de assistência social ou psicológica.\n\n## Tecnologias usadas:\n- Java\n- JPA\n- MySQL",
  },
];

export default projetos;
