import capa_FT_Digital from "../assets/projetos/FT_digital/capa.webp"
import capa_Cartao_Azul from "../assets/projetos/Cartao_Azul/capa.webp"
import capa_Commandas from "../assets/projetos/Commandas/capa.webp"

const projetos = [
    // Trabalhos reais ---
    {
        id: 1,
        titulo: "F.T. Digital",
        descricao: "Sistema desktop para gerir candidatos e colaboradores da empresa, contando com sistema de cadastro de currículo, evoluções sobre o indivíduo e sistema de score para definir melhores candidatos",
        video: "",
        codigo: "",
        site: "",
        tipo: "Trabalhos",
        destaque: true,
        capa: capa_FT_Digital
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
        titulo: "Sistema de Cadastro/Login",
        descricao: "Sistema que emula um login e cadastro de novos usuários, sendo incluido a comunicação entre o a parte visual, servidor e banco de dados relacional",
        video: "",
        codigo: "https://github.com/LucasSAguilar/login_e_cadastro_com_mysql",
        site: "https://lucassaguilar.github.io/login_e_cadastro_com_mysql/",
        tipo: "API",
        destaque: false,
        capa: capa_Commandas

    },
    {
        id: 5,
        titulo: "Via CEP",
        descricao: "Um formulário que utiliza a API do Via CEP, líder de mercado em localização. Isso significa preenchimento automático e preciso do endereço, economizando tempo e garantindo dados corretos.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/consumo_API_VIACEP/tree/master",
        site: "https://lucassaguilar.github.io/consumo_API_VIACEP/",
        tipo: "API",
        destaque: false,
        capa: capa_Commandas

    },
    // Sites expositivos ----
    {
        id: 6,
        titulo: "Aguilar Space",
        descricao: "Um site demonstrativo que simula uma galeria digital com tema espacial, buscando uma estética que garanta ao usuário uma experiência imersiva.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/aguilar-space",
        site: "https://aguilar-space.vercel.app",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Commandas

    },
    {
        id: 7,
        titulo: "Serenatto",
        descricao: "Uma landing page para uma cafeteria, sendo desenvolvido com paixão e criatividade, destaca-se pela sua simplicidade e elegância, proporcionando aos visitantes uma experiência visualmente atraente e aconchegante.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Serenatto",
        site: "https://lucassaguilar.github.io/Serenatto/",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Commandas

    },
    {
        id: 8,
        titulo: "Meteora",
        descricao: "Uma simulação de um e-commerce na temática de moda, sendo esse criado através de bootstrap, fornecendo assim uma estética atual e fascinante",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Meteora",
        site: "https://lucassaguilar.github.io/Meteora/",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Commandas
    },
    {
        id: 9,
        titulo: "Cinetag",
        descricao: "Um site que simula um streaming de vídeo, com possibilidade para adicionar “filmes” aos favoritos. Para simular foram usados vídeo aulas de professores da Alura no próprio Youtube.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/CineTag",
        site: "https://cinetag-peach-three.vercel.app",
        tipo: "Sites expositivos",
        destaque: false,
        capa: capa_Commandas

    },
    // Jogos ----
    {
        id: 10,
        titulo: "Pumpkin Run",
        descricao: "Um jogo totalmente feito com javascript no estilo “endless run”, sendo essa uma categoria que permite o jogador a sobreviver o máximo de tempo possível enquanto surgem obstáculos no caminho",
        video: "",
        codigo: "https://github.com/LucasSAguilar/pumpkin_run",
        site: "https://lucassaguilar.github.io/pumpkin_run/",
        tipo: "Jogos",
        destaque: false,
        capa: capa_Commandas

    },
    {
        id: 11,
        titulo: "Jogo da velha",
        descricao: "O clássico jogo da velha, sendo esse desenvolvido apenas usando javascript",
        video: "",
        codigo: "https://github.com/LucasSAguilar/jogo-da-velha",
        site: "https://lucassaguilar.github.io/jogo-da-velha/",
        tipo: "Jogos",
        destaque: false,
        capa: capa_Commandas

    },
    // Ferramentas ---
    {
        id: 12,
        titulo: "Organa",
        descricao: "Um sistema para gerenciar times por grupos específicos, sendo esses dinâmicos e passíveis de alterações.",
        video: "",
        codigo: "https://github.com/LucasSAguilar/Organa_times",
        site: "https://organa-times.vercel.app",
        tipo: "Ferramentas",
        destaque: false,
        capa: capa_Commandas

    },   
    {
        id: 13,
        titulo: "Aguilar Studies",
        descricao: "Projetada para tornar o processo de organização dos seus estudos mais eficiente e produtivo. Neste projeto, mergulhamos na criação de um aplicativo web que possibilita aos usuários cadastrar temas de estudo, definir o tempo alocado para cada tópico e iniciar a contagem de estudos",
        video: "",
        codigo: "https://github.com/LucasSAguilar/aguilar_studies",
        site: "https://aguilar-studies.vercel.app",
        tipo: "Ferramentas",
        destaque: false,
        capa: capa_Commandas

    },
    
]

export default projetos