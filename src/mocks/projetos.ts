import capa_FT_Digital from "../assets/projetos/FT_digital/capa.webp"
import capa_Cartao_Azul from "../assets/projetos/Cartao_Azul/capa.webp"
import capa_Commandas from "../assets/projetos/Commandas/capa.webp"
import capa_LoginMySQL from "../assets/projetos/LoginMySQL/capa.webp"
import capa_ViaCEP from "../assets/projetos/ViaCEP/capa.webp"
import capa_Aguilar_Space from "../assets/projetos/Aguilar_Space/capa.webp"
import capa_Serenatto from "../assets/projetos/Serenatto/capa.webp"
import capa_Meteora from "../assets/projetos/Meteora/capa.webp"
import capa_Cinetag from "../assets/projetos/Cinetag/capa.webp"
import capa_PK_Run from "../assets/projetos/PK_Run/capa.webp"
import capa_Jogo_da_velha from "../assets/projetos/Jogo_da_velha/capa.webp"
import capa_Organa from "../assets/projetos/Organa/capa.webp"
import capa_Aguilar_Studies from "../assets/projetos/Aguilar_Studies/capa.webp"
import capa_SysAssist from "../assets/projetos/SysAssist/capa.webp"

const projetos = [
    // Trabalhos reais ---
        {
            id: "1",
            titulo: "F.T. Digital",
            descricao: "Sistema desktop para gerir candidatos e colaboradores da empresa, contando com sistema de cadastro de currículo, evoluções sobre o indivíduo e sistema de score para definir melhores candidatos",
            video: "https://www.youtube.com/watch?v=WfX0YBzV434",
            codigo: "",
            site: "",
            tipo: "Trabalhos",
            destaque: true,
            capa: capa_FT_Digital,
            markdown: "# Frente de Trabalho Digital\n\nSistema encomendado pela Assistência Social de SRPQ para administração RH do programa 'Frente de Trabalho'.\n\n\n # Tecnologias:\n- Javascript\n- SCSS\n- HTML\n- Electron\n- SQLite\n- NodeJS\n- React JS\n- Electron Forge\n- Bootstrap\n- Axios\n- React Toastify\n- Node\n- Express\n\n\n# Como entregar:\n## Instale todas as dependências usadas:\n\n npm install\n\n ## Primeiro faça a build do react usando o comando:\n\n npm run build\n\n- Acesse o index.html e edite o acesso aos arquivos:\nlink: `'/exemplo.js' >>>> './exemplo.js'`\nIsso deve ser feito em **TODOS**\n\n- Após gerar a build e organizar o *index.html* você pode iniciar o electron forge, para isso use:\n\n    npm run make\n\nO projeto deve sair em uma pasta no mesmo diretório chamada *'out'*\n\n## Requisitos\n\nO sistema roda no backend roda através do NodeJS, então é extremamente importante que ele esteja instalado para o pleno funcionamento do sistema.\n\n## Servidor\n\nO servidor Node funciona através de children process, veja:\n\n    app.on('ready', () => {\n    createWindow();\n   \n    childProcess.spawn('node', [`${__dirname}/server/server.js`], {\n    env: { ELECTRON_START:  'node-server' },\n    stdio:  'inherit',\n    });\n    \n    });\n    \nCom isso, fica claro que o servidor é iniciado assim que a aplicação é aberta, sendo exibido para o usuário o terminal do próprio Node. \n\n**ATENÇÃO**\n\nEsse terminal não pode ser encerrado ou acarretará na finalização do servidor\n\n## Banco de dados\n\nO banco de dados usado é em SQLite e é gerado automáticamente quando o usuário abrir o sistema pela primeira vez com o nome 'database', veja o caminho:\n\n> \\FT_Digital\\out\\ftdigital-win32-x64\\database.db\n\nPara manutenções o programa recomendado é o ***DB Browser for SQLite***\n\n## Login\n\nO login padrão para acesso é:\n\n*usuário: admin\nsenha: admin*\n\nPode e deve ser trocado posteriormente para o usuário\n```"
            
        },
    {
        id: "2",
        titulo: "Cartão Azul",
        descricao: "O 'Cartão Azul' vai além de ser um simples aplicativo de desktop; é uma ferramenta de impacto social desenvolvida com dedicação para a Assistência Social da cidade de Santa Rita do Passa Quatro. Neste projeto, criei um sistema que visa agilizar e controlar a emissão de documentos essenciais para pessoas com Transtorno do Espectro Autista (TEA), proporcionando um acesso simplificado a serviços cruciais.",
        video: "",
        codigo: "",
        site: "",
        tipo: "Trabalhos",
        destaque: true,
        capa: capa_Cartao_Azul

    },
    {
        id: "3",
        titulo: "Commandas",
        descricao: "O 'Commandas' é uma solução inovadora atualmente em desenvolvimento para aprimorar a gestão de pedidos em estabelecimentos que oferecem comidas e bebidas. Este sistema completo é composto por duas partes cruciais: o Desktop, uma ferramenta robusta para administração centralizada, e o Mobile, um aplicativo ágil e intuitivo para facilitar o atendimento e os pedidos dos clientes. O Commandas promete oferecer uma experiência integrada e eficiente para a indústria gastronômica.",
        video: "https://www.youtube.com/watch?v=fDdEslJN6rk",
        codigo: "",
        site: "",
        tipo: "Trabalhos",
        destaque: true,
        capa: capa_Commandas

    },
    // API ----
    {
        id: "4",
        titulo: "Sistema de Cadastro/Login",
        descricao: "Sistema que emula um login e cadastro de novos usuários, sendo incluido a comunicação entre o a parte visual, servidor e banco de dados relacional",
        video: "",
        codigo: "https://github.com/LucasSAguilar/login_e_cadastro_com_mysql",
        site: "https://lucassaguilar.github.io/login_e_cadastro_com_mysql/",
        tipo: "API",
        destaque: false,
        capa: capa_LoginMySQL

    },
    {
        id: "5",
        titulo: "Via CEP",
        descricao: "Um formulário que utiliza a API do Via CEP, líder de mercado em localização. Isso significa preenchimento automático e preciso do endereço, economizando tempo e garantindo dados corretos.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/consumo_API_VIACEP/tree/master",
        site: "https://lucassaguilar.github.io/consumo_API_VIACEP/",
        tipo: "API",
        destaque: false,
        capa: capa_ViaCEP

    },
    // Sites expositivos ----
    {
        id: "6",
        titulo: "Aguilar Space",
        descricao: "Um site demonstrativo que simula uma galeria digital com tema espacial, buscando uma estética que garanta ao usuário uma experiência imersiva.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/aguilar-space",
        site: "https://aguilar-space.vercel.app",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Aguilar_Space

    },
    {
        id: "7",
        titulo: "Serenatto",
        descricao: "Uma landing page para uma cafeteria, sendo desenvolvido com paixão e criatividade, destaca-se pela sua simplicidade e elegância, proporcionando aos visitantes uma experiência visualmente atraente e aconchegante.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Serenatto",
        site: "https://lucassaguilar.github.io/Serenatto/",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Serenatto

    },
    {
        id: "8",
        titulo: "Meteora",
        descricao: "Uma simulação de um e-commerce na temática de moda, sendo esse criado através de bootstrap, fornecendo assim uma estética atual e fascinante",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Meteora",
        site: "https://lucassaguilar.github.io/Meteora/",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Meteora
    },
    {
        id: "9",
        titulo: "Cinetag",
        descricao: "Um site que simula um streaming de vídeo, com possibilidade para adicionar “filmes” aos favoritos. Para simular foram usados vídeo aulas de professores da Alura no próprio Youtube.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/CineTag",
        site: "https://cinetag-peach-three.vercel.app",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Cinetag

    },
    // Jogos ----
    {
        id: "10",
        titulo: "Pumpkin Run",
        descricao: "Um jogo totalmente feito com javascript no estilo “endless run”, sendo essa uma categoria que permite o jogador a sobreviver o máximo de tempo possível enquanto surgem obstáculos no caminho",
        video: "",
        codigo: "https://github.com/LucasSAguilar/pumpkin_run",
        site: "https://lucassaguilar.github.io/pumpkin_run/",
        tipo: "Jogos",
        destaque: false,
        capa: capa_PK_Run

    },
    {
        id: "11",
        titulo: "Jogo da velha",
        descricao: "O clássico jogo da velha, sendo esse desenvolvido apenas usando javascript",
        video: "",
        codigo: "https://github.com/LucasSAguilar/jogo-da-velha",
        site: "https://lucassaguilar.github.io/jogo-da-velha/",
        tipo: "Jogos",
        destaque: false,
        capa: capa_Jogo_da_velha

    },
    // Ferramentas ---
    {
        id: "12",
        titulo: "Organa",
        descricao: "Um sistema para gerenciar times por grupos específicos, sendo esses dinâmicos e passíveis de alterações.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Organa_times",
        site: "https://organa-times.vercel.app",
        tipo: "Ferramentas",
        destaque: false,
        capa: capa_Organa

    },   
    {
        id: "13",
        titulo: "Aguilar Studies",
        descricao: "Projetada para tornar o processo de organização dos seus estudos mais eficiente e produtivo. Neste projeto, mergulhamos na criação de um aplicativo web que possibilita aos usuários cadastrar temas de estudo, definir o tempo alocado para cada tópico e iniciar a contagem de estudos",
        video: "",
        codigo: "https://github.com/LucasSAguilar/aguilar_studies",
        site: "https://aguilar-studies.vercel.app",
        tipo: "Ferramentas",
        destaque: false,
        capa: capa_Aguilar_Studies

    },
    {
        id: "14",
        titulo: "SysAssist",
        descricao: "Aplicativo desktop para gerenciamento de atendimentos socioassistenciais e controle de atendimento a pacientes e/ou munícipes.",
        video: "https://www.youtube.com/watch?v=AXC9lPCJI6g&t=52s",
        codigo: "",
        site: "",
        tipo: "Trabalhos",
        destaque: false,
        capa: capa_SysAssist

    },
    
]

export default projetos