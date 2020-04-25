export default {
  id: '02',
  title: 'Quiz Ciência',
  questions: [
    {
      question: 'Fake ou News: O Sars-Cov-2 é classificado como coronavírus pois a sua forma lembra uma coroa',
      type: 'boolean',
      alternatives: { isFake: false },
      explanation: 'Para tentar diferenciar esse vírus em particular, os cientistas o chamaram de "novo coronavírus". Os coronavírus recebem esse nome por seus espinhos em forma de coroa quando vistos em um microscópio.',
      link: 'https://www.bbc.com/portuguese/internacional-51469829',
    },

    {
      question: 'Fake ou News: O Sars-Cov-2, vírus causador da Covid-19, é mais contagioso em pessoas com sintomas visíveis.',
      type: 'boolean',
      alternatives: { isFake: true },
      explanation: 'O novo coronavírus é mais contagioso na fase assintomática da doença (antes de surgirem os sintomas). Curiosamente, a partir do momento em que os sintomas são identificados, a carga viral diminui e os doentes passam a ter um poder menor de contaminação da covid-19.',
      link: 'https://www.nature.com/articles/s41591-020-0869-5',
    },

    {
      question: 'Fake ou News: Os coronavírus são a segunda principal causa do resfriado comum. (perdendo para o rinovírus).',
      type: 'boolean',
      alternatives: { isFake: false },
      explanation: 'A maioria das pessoas se infecta com os coronavírus comuns ao longo da vida, sendo as crianças pequenas mais propensas a se infectar com o tipo mais comum do vírus. Os coronavírus mais comuns que infectam humanos são o alpha coronavírus 229E e NL63, além do beta coronavírus OC43, HKU1',
      link: 'https://coronavirus.saude.gov.br/sobre-a-doenca#o-que-e-covid',
    },

    {
      question: 'Fake ou News: MedO uso de ozônio, ozonioterapia, é eficaz no Tratamento da Covid-19.',
      type: 'boolean',
      alternatives: { isFake: true },
      explanation: 'Apesar de, mais ou menos, 250 patologias terem tratamento (a maioria inflamações e ferimentos) pelo uso de ozônio, não existe ainda nenhuma evidência científica que aponte a eficiência do procedimento no tratamento da Covid-19',
      link: 'https://noticias.r7.com/saude/ozonioterapia-ajuda-no-tratamento-de-pelo-menos-250-doencas-16102017',
    },

    {
      question: 'Quais são as medidas mínimas que uma máscara caseira deve possuir?',
      type: 'select',
      alternatives: [
        { text: '34cm de largura / 21cm de altura', isAnwser: true },
        { text: '27cm de largura / 18cm de altura'},
        { text: '20 cm de largura 15cm de altura'},
        { text: 'Não existe tamanho mínimo'},
      ],
      explanation: 'Segundo o Ministério da saúde, o importante é que a máscara seja feita com camadas duplas, nas medidas corretas, cobrindo totalmente a boca e nariz (cerca de 21 cm de altura e 34 cm largura) e que esteja bem ajustada ao rosto, sem deixar espaços nas laterais.',
      link: 'https://agenciabrasil.ebc.com.br/saude/noticia/2020-04/saiba-como-se-proteger-contra-o-coronavirus-com-mascaras-caseiras',
    },

    {
      question: 'Fake ou News: Após estar curado(a) depois de contrair o Covid-19, através do novo coronavírus, não é possível ficar doente novamente.',
      type: 'boolean',
      alternatives: { isFake: true },
      explanation: 'Não se sabe ainda se é o caso de uma reinfecção ou de uma reativação do vírus. Porém, na Coreia do Sul mais de 100 pacientes que tiveram a Covid-19, confirmadas por exames, depois curados, testaram positivo novamente e desenvolveram os sintomas.',
      link: 'https://www.reuters.com/article/us-health-coronavirus-southkorea-idUSKCN21V0JQ',
    },

    {
      question: 'Fake ou News: Uma boa higiene bucal pode ajudar a prevenir complicações do Sars-Cov-2.',
      type: 'boolean',
      alternatives: { isFake: false },
      explanation: ' É inclusive recomendado que após ficar curado, pacientes troquem a sua escova de dente. “O estado de saúde do paciente que tenha contraído a Covid-19 pode ser agravado, caso sua higiene bucal não seja realizada da maneira correta”, afirma o professor Vinícius Pedrazzi, da Faculdade de Odontologia de Ribeirão Preto (Forp), da Universidade de São Paulo (USP). E ainda completa: “Então, para prevenir quem está com coronavírus, e mesmo quem não tenha a doença, do agravamento de infecções pulmonares, é imprescindível a higienização bucal correta”.',
      link: 'https://agenciabrasil.ebc.com.br/saude/noticia/2020-04/higiene-bucal-pode-ajudar-prevenir-complicacoes-da-covid-19',
    },

    {
      question: 'Fake ou News: Pacientes em estado grave podem ser colocados de bruços para melhoria do quadro respiratório.',
      type: 'boolean',
      alternatives: { isFake: false },
      explanation: 'Desde 1970, esta técnica é aplicada em pacientes com algum tipo de complicação respiratória. Basicamente colocar o paciente de bruços permite que entre mais oxigênio dos pulmões. Apesar de parecer simples, por um paciente em estado grave de bruços necessita de uma equipe extremamente EXPERIENTE e qualificada.',
      link: 'https://www.bbc.com/portuguese/geral-52361723',
    },

    {
      question: 'Fake ou News: A covid-19 pode ser transmitida por flatulências (peidos/pum/bufa)',
      type: 'boolean',
      alternatives: { isFake: true },
      explanation: 'Apesar de sintomas gastrointestinais possuirem uma ocorrência significativa em pacientes contaminados com Covid-19, não existem estudos que apontem flatulências como via de transmissão do vírus.',
      link: 'https://nypost.com/2020/04/20/can-the-coronavirus-be-spread-through-farts/',
    },
  ]
}
