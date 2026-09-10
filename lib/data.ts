// Todo o conteúdo abaixo foi extraído do site institucional existente
// (marquesebarroso.adv.br) sem alteração de sentido, apenas reorganizado
// para a nova estrutura one-page.

export const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Advogados", href: "#advogados" },
  { label: "Reconhecimento", href: "#reconhecimento" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  eyebrow: "Marques e Barroso Advogados",
  headline:
    "Os profissionais do escritório Marques e Barroso Advogados detém vasta experiência e são especializados em causas cíveis e criminais.",
  sub: "Atendimento personalizado por advogados altamente comprometidos, capacitados, que zelam pela excelência e eficiência na resolução de problemas jurídicos e administrativos.",
  stats: [
    { value: "+15", label: "Anos de experiência" },
    { value: "Nacional", label: "Atendimento em todo território nacional" },
    { value: "5,0 ★", label: "Avaliação dos clientes (102 avaliações)" },
  ],
};

export const history = {
  eyebrow: "Nossa história",
  title: "O Escritório",
  body: [
    "O Escritório Marques e Barroso Advogados é fruto da união de advogados com mais de uma década de experiência jurídica nas áreas Criminal, Empresarial e Direito Civil em geral.",
    "Os profissionais que compõem a banca, após ter adquirido relevante bagagem em grandes escritórios do Estado de São Paulo, departamento jurídico de empresas e atuação de forma autônoma, decidiram em conjunto defender os interesses de seus clientes, proporcionando uma visão multidisciplinar às questões jurídicas.",
  ],
  purpose:
    "O escritório Marques e Barroso Advogados tem como objetivo entender e atender as necessidades de seus clientes de forma personalizada e artesanal, auxiliando-os na solução de seus problemas sempre de uma maneira humanizada, preventiva, cooperativa, transparente, diligente e eficaz, para que estejam protegidos em suas questões legais.",
};

export const mvv = {
  eyebrow: "Nossa missão, visão e valores",
  mission: {
    title: "Missão",
    body: "Entender e atender de forma personalizada as necessidades de nossos clientes, auxiliando-os na solução de seus problemas jurídicos de maneira humanizada, preventiva e eficaz. Nosso compromisso é garantir que cada cliente esteja protegido e bem-assistido em todas as suas questões legais.",
  },
  vision: {
    title: "Visão",
    body: "Ser um escritório de advocacia líder em oferecer soluções jurídicas, reconhecido pela excelência no atendimento e pela capacidade de antecipar e responder eficazmente às necessidades dos clientes, contribuindo para um ambiente jurídico mais justo e acessível.",
  },
  values: {
    title: "Valores",
    items: [
      "Agimos com honestidade e responsabilidade em todas as nossas ações.",
      "Valorizamos cada cliente e cada caso, tratando todos com a dignidade e a atenção que merecem.",
      "Comunicamos de maneira clara e aberta, mantendo os clientes sempre informados sobre o andamento de seus processos.",
    ],
  },
};

// Etapas de metodologia conforme estrutura solicitada para a seção,
// aplicadas ao fluxo real de atuação cível e criminal do escritório.
export const methodology = {
  eyebrow: "Como trabalhamos",
  title: "Nossa metodologia",
  steps: [
    {
      number: "01",
      title: "Análise técnica",
      body: "Estudo minucioso do caso, dos documentos e do histórico do cliente para entender o problema em profundidade.",
    },
    {
      number: "02",
      title: "Estratégia jurídica",
      body: "Definição do caminho mais seguro e eficiente, alinhado aos objetivos e à realidade de cada cliente.",
    },
    {
      number: "03",
      title: "Atuação preventiva",
      body: "Orientação constante para evitar litígios, reduzir riscos e antecipar problemas antes que se tornem passivos.",
    },
    {
      number: "04",
      title: "Negociação",
      body: "Busca por soluções conciliadas sempre que possível, com transparência e defesa firme dos interesses do cliente.",
    },
    {
      number: "05",
      title: "Contencioso",
      body: "Atuação robusta e estratégica em juízo, nas esferas cível e criminal, em todo o território nacional.",
    },
    {
      number: "06",
      title: "Acompanhamento constante",
      body: "Comunicação clara e contínua sobre cada etapa do processo, do início até a conclusão do caso.",
    },
  ],
};

export const areas = {
  eyebrow: "Nossas áreas de atuação",
  title: "Áreas de Atuação",
  items: [
    {
      key: "criminal",
      title: "Criminal",
      body: "Com um profundo conhecimento das leis e procedimentos criminais, nossa equipe está preparada para defender e proteger os direitos dos acusados em todos os níveis do sistema judicial. Lidamos com uma variedade de casos, desde delitos menores até crimes mais complexos, garantindo uma defesa robusta e estratégica.",
      tags: [
        "Inquéritos policiais",
        "Flagrantes",
        "Audiência de custódia",
        "Processos criminais",
        "Tribunal do júri",
        "Recursos",
        "Execução penal",
      ],
    },
    {
      key: "civel",
      title: "Cível",
      body: "Possuímos vasta expertise na área cível, com a prestação de serviços e assessoria jurídica tanto para empresas, quanto para pessoas físicas em todo o território nacional. Nossos serviços são prestados de acordo com as necessidades de cada cliente, com foco em oferecer soluções jurídicas certeiras e eficientes.",
      tags: [
        "Direito Imobiliário",
        "Direito Bancário",
        "Direito da Saúde",
        "Direito do Consumidor",
        "Direito Contratual",
        "Direito Societário",
        "Recuperação de Crédito",
        "Direito de Família",
      ],
    },
  ],
};

export const lawyers = [
  {
    slug: "carlos-marques",
    name: "Dr. Carlos Marques",
    role: "Direito Criminal",
    years: "+15",
    yearsLabel: "Anos de experiência",
    rating: "5,0 ★",
    ratingLabel: "Avaliação dos clientes",
    bio: "Com 15 anos de experiência e atuação exclusiva na área criminal, o Dr. Carlos Manuel Duarte Marques possui profundo conhecimento técnico e prático na esfera penal. Os resultados positivos na carreira são frutos de sua expertise, perspicácia e habilidade, requisitos imprescindíveis para a atuação no direito criminal.",
  },
  {
    slug: "amanda-barroso",
    name: "Dra. Amanda Barroso",
    role: "Direito Cível Estratégico",
    years: "+10",
    yearsLabel: "Anos de experiência",
    bio: "Advogada por vocação e paixão, com mais de 10 anos de carreira jurídica e atuação em grandes escritórios de advocacia reconhecidos nacionalmente, além de ter atendido grandes empresas do mercado. Possui vasta experiência na resolução de problemas relacionados à área cível estratégica, com foco em consultoria e assessoria jurídica em todas as matérias relacionadas ao Direito Imobiliário, Contratual, Divórcio e Empresarial.",
  },
  {
    slug: "cesar-marques",
    name: "Dr. César Marques",
    role: "Direito Civil e Processo Civil",
    years: "+10",
    yearsLabel: "Anos de experiência",
    bio: "Especialista em Direito Civil e Processo Civil, assessorou empresas de grande porte reconhecidas nacionalmente e internacionalmente, além de ter participado da resolução de diversas questões das mais variadas complexidades. Profissional com mais de uma década de atuação na área Jurídica, com atuação em renomados escritórios de advocacia, além de experiência em departamentos jurídicos de empresas. Sua ênfase de atuação está relacionada a questões cíveis envolvendo conflitos em geral, Direito do Consumidor, Bancário, Saúde, dentre outras.",
  },
];

export const differentials = [
  {
    title: "Profissionalismo e Expertise",
    body: "Em nosso escritório, você encontrará uma equipe de advogados com vasta experiência. Utilizamos nossa expertise jurídica para desenvolver estratégias eficazes, visando resultados positivos para nossos clientes.",
  },
  {
    title: "Comunicação e Transparência",
    body: "Priorizamos uma comunicação clara e aberta com todos os nossos clientes. Mantemos você informado sobre cada etapa do seu processo, garantindo que todas as suas dúvidas sejam esclarecidas.",
  },
  {
    title: "Confiabilidade e Disponibilidade",
    body: "Entendemos a importância de estar sempre disponível para nossos clientes. Nosso compromisso é responder prontamente às suas necessidades e garantir que você receba a atenção e o suporte necessários.",
  },
  {
    title: "Empatia e Dedicação",
    body: "Cada cliente é único, e cada caso recebe nossa total dedicação e empenho. Nosso objetivo é compreender profundamente suas preocupações e necessidades, oferecendo um suporte jurídico que não apenas atenda, mas supere suas expectativas.",
  },
];

export const stats = [
  { value: 15, suffix: "+", label: "Anos de experiência" },
  { value: 102, suffix: "", label: "Avaliações de clientes" },
  { value: 5, suffix: ",0★", label: "Nota média de atendimento" },
  { value: 100, suffix: "%", label: "Atendimento personalizado" },
];

export const testimonials = [
  {
    name: "Victor Pereira Peixoto",
    date: "23 de abril de 2025",
    body: "Tive uma experiência extremamente positiva com o Dr. Carlos. Desde o início do processo, eu estava bastante receoso quanto ao desfecho do meu caso, mas graças à competência, dedicação e atenção que ele me deu em cada etapa, conseguimos um resultado muito satisfatório. Recomendo de olhos fechados!",
  },
  {
    name: "Juliana Dias",
    date: "14 de novembro de 2024",
    body: "Dr. Carlos um excelente advogado só tenho a agradecer ao trabalho dele, super atencioso, não tenho palavras pra descrever a gratidão por tudo.",
  },
  {
    name: "Grayce Anne",
    date: "23 de abril de 2025",
    body: "Obrigada Dr. Carlos Manuel, precisei de uma informação imediata e prontamente me explicou como deveria ser feito, sanando a dúvida de imediato.",
  },
  {
    name: "Fabiano Gomes",
    date: "13 de maio de 2025",
    body: "Excelente advogado, deu total atenção, está de parabéns.",
  },
  {
    name: "Eva Cordeiro",
    date: "18 de maio de 2025",
    body: "O Doutor Carlos é excelente profissional, eu o recomendo, ele sem dúvida é um dos melhores.",
  },
  {
    name: "Irani Pinto",
    date: "13 de maio de 2025",
    body: "Ótimo, me ajudou bastante, super indico, educado também.",
  },
];

export const contact = {
  phones: [
    { label: "Assessoria Cível", value: "(11) 91014-1998" },
    { label: "Assessoria Criminal", value: "(13) 99639-0660" },
  ],
  address: "R. Benjamin Constant, 61 - sala 504 - Centro, São Vicente - SP",
  whatsapp: "5511910141998",
};

export const siteMeta = {
  name: "Marques e Barroso Advogados",
  shortName: "MB Advocacia",
  description:
    "Escritório de advocacia especializado em Direito Criminal e Cível, com mais de 15 anos de experiência e atendimento em todo o território nacional.",
  url: "https://marquesebarroso.adv.br",
};
