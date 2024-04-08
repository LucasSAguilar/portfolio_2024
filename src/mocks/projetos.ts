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
    markdown: "# Frente de Trabalho Digital\n\nEsse é um sistema de gerenciamento de cadastros para um programa da prefeitura de Santa Rita do Passa Quatro chamado 'Frente de Trabalho', programa esse do qual pessoas em situação de vulnerabilidade social podem se inscrever para serem chamados para trabalhos variados dentro da prefeitura.\n\n## O sistema\n\nEsse sistema busca gerenciar dois principais públicos: **candidatos** para a vaga e os que **já foram contratados**.\n\n## O que ele faz?\n\nEntre suas funcionalidades, destacam-se:  \n- Sistema de login;  \n- Cadastro de candidatos (com opções de edição e exclusão);  \n- Registro de evoluções sobre os candidatos;  \n- Sistema de pontuação, conforme as regras definidas pela empresa, para facilitar o filtro dos candidatos ideais para a vaga.\n\n## Tecnologias usadas\n\n- HTML5  \n- CSS3  \n- SCSS  \n- Javascript  \n- Electron  \n- ReactJS  \n- NodeJS  \n- SQLite  \n- Express"
    
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
    markdown: "# Cartão Azul\n\nSistema solicitado pela 'Promoção Social', sendo esse responsável por cadastrar pessoas com Transtorno do Espectro Autista *(TEA)*. Após a realização do cadastro ele emite um documento para que possam usar e garantir seus direitos definidos pela legislação brasileira.\n\n## O que ele faz?\n\n- Recebe o cadastro de indivíduos;\n- Emite o documento automaticamente no momento do cadastro;\n- Sistema de filtro para encontrar cadastro;\n\n## Tecnologias usadas\n\n-   **HTML, CSS e JS:**  A base da interface do usuário é construída com HTML para a estrutura, CSS para a estilização visual e JS para a interatividade. Essas tecnologias essenciais proporcionam uma experiência amigável aos usuários do sistema.\n    \n-   **Electron:**  O uso do Electron é fundamental para transformar o aplicativo em uma aplicação desktop multiplataforma. Ele permite empacotar o aplicativo web como um executável, tornando-o acessível e utilizável sem a necessidade de um navegador.\n    \n-   **SQLite:**  O SQLite é um sistema de gerenciamento de banco de dados leve e incorporado. No  **'Cartão Azul'**, o SQLite é utilizado para armazenar os dados dos usuários, documentos e outras informações relevantes de maneira eficiente e acessível.\n    \n-   **NodeJS:**  A integração do NodeJS permite a criação de um servidor local que gerencia as solicitações e respostas do aplicativo. Ele trabalha em conjunto com o Electron para fornecer uma experiência fluida e responsiva.\n\n## Produção de Imagens e Design\n\nAlém da parte técnica, o projeto do  **'Cartão Azul'**  também envolveu a produção de imagens e design. Ferramentas como Photoshop e Canva foram utilizadas para criar recursos visuais, incluindo logotipos, ícones e elementos de design que refletissem a natureza séria e amigável do aplicativo."
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
    markdown: "# Commandas\n\nO **Commandas** é uma solução para aprimorar e agilizar o atendimento em locais do ramo alimentício. Atualmente em desenvolvimento para aprimorar a gestão de pedidos em estabelecimentos que oferecem comidas e bebidas. Este sistema completo é composto por duas partes cruciais: o **Desktop**, uma ferramenta robusta para administração centralizada, e o **Mobile**, um aplicativo ágil e intuitivo para facilitar o atendimento e os pedidos dos clientes. \n\n## Desktop:\n\nEm um ambiente desktop o sistema pode ser usado para gerenciar o aplicativo, tais como abastecer o cardápio virtual, gerenciar mesas, organizar funcionários e seus acessos e administrar as comandas criadas.\n\n## Mobile:\n\nO ambiente mobile é focado para o **funcionário**, sendo nesse local possível acessar todas as informações definidas pelo usuário **root** e criar comandas de acordo com as solicitações dos clientes.\n\n## Comandas:\n\nCada comanda tem um titular e cada comanda pode receber vários pedidos, por exemplo:\n*João levou seus dois filhos para o restaurante, então a comanda fica marcada no nome de João*\n*Seus dois filhos fazem diversos pedidos, complementando a comanda e mudando seu valor final*\n\nO antigo modelo de softwares para restaurantes permitia apenas uma comanda por mesa, todavia nosso sistema permite diversas comandas para a mesma mesa. Esse modelo permite que várias pessoas se sentem na mesma mesa e ainda assim não crie dificuldades para definir o valor que cada um deve pagar. \n\n## Tecnologias usadas:\n\n- React\n- NodeJS\n- ExpressJS\n- MySQL\n- React Native\n\n## Suas funções\n\n- Cardápio dinâmico;\n- Mesas dinâmicas e dividida por setores;\n- Comandas com referência a um responsável;\n\n## Vendas\n\nO projeto ainda está em desenvolvimento, então não é possível adquirir, todavia você pode acompanhar nossas redes sociais para se manter informado!\n"

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
    markdown: ""

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
    markdown: ""
  
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
    markdown: ""

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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
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
    markdown: ""
  
},
];

export default projetos;
