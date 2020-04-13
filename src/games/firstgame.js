  export default {
    id: '01',
    title: 'Quiz Inicial',
    alternatives: [
      {
        question: 'Quais dessas opções é a mais eficaz para impedir a disseminação do Coronavírus no Brasil?',
        alternatives: [
          { text: 'Tomando chás e vitamina C'},
          { text: 'Isolamento vertical'},
          { text: 'Isolamento social', isAnwser: true },
          { text: 'Usando luvas e máscaras'},
        ],
        explanation: 'De acordo com a OMS, o isolamento social é a melhor forma de diminuir possíveis fatalidades e retornar o mais rápido possível a nossa vida normal.',
      },

      {
        question: 'Qual medicamento se mostrou eficaz e oferece a cura para o COVID-19?',
        alternatives: [
          { text: 'Hidroxicloroquina'},
          { text: 'Dipirona'},
          { text: 'Ibuprofeno'},
          { text: 'Não há medicamentos contra o Coronavírus', isAnwser: true },
        ],
        explanation: 'De acordo com a OMS, ainda não há estudos que comprovem a eficácia de qualquer remédio contra o Coronavírus.',
      },

      {
        question: 'Fake ou News: Qualquer máscara me protege de contrair o novo Coronavírus.',
        type: 'boolean',
        alternatives: { isFake: true },
        explanation: 'Máscaras ajudam você a não espalhar o vírus, mas não impedem que você o contraia. Além disso, não existe material suficiente para profissionais de saúde e usar essas máscaras sem indicação pode acabar prejudicando o atendimento de pessoas doentes.',
      },

      {
        question: 'Qual opção mais eficaz para higienizar as mãos e evitar contágio?',
        alternatives: [
          { text: 'Álcool gel 70%'},
          { text: 'Água e sabão', isAnwser: true },
          { text: 'Álcool líquido'},
          { text: 'Desinfetante'},
        ],
        explanation: 'Álcool em gel 70% e água e sabão são igualmente eficientes na ação antimicrobiana, contra bactérias, fungos e vírus. Entretanto, o álcool não pode simplesmente substituir a água e o sabão, uma vez que a retirada de partículas de sujeiras não pode ser feita com o álcool.',
      },

      {
        question: 'Fake ou News: O novo Coronavírus não consegue sobreviver a "temperaturas entre 26º e 27º.',
        type: 'boolean',
        alternatives: { isFake: true },
        explanation: 'O Novo Coronavírus consegue facilmente suportar temperaturas superiores à 27º. A diretora do IMT-USP Ester Sabino, afirma: "A temperatura do corpo humano é 36ºC". Portanto, esta afirmativa é falsa.',
      },

      {
        question: 'Qual o nome científico do novo Coronavírus',
        alternatives: [
          { text: 'Vírus Chines'},
          { text: 'Covid-19'},
          { text: 'H1N1'},
          { text: 'Sars-Cov-2', isAnwser: true },
        ],
        explanation: 'O nome científico, definido pela OMS, é SARS-CoV-2. Chamar essa doença de “vírus chinês”, além de cientificamente incorreto, é bastante ofensivo. Então, na hora de escolher como chamá-lo, fique no lado da ciência. Ah, COVID-19 é o nome da doença causada pelo Sars-cov-2 ;)',
      },

      {
        question: 'Qual desses grupos corre mais risco na luta contra o Coronavírus?',
        alternatives: [
          { text: 'Idosos (+60 anos)', isAnwser: true },
          { text: 'Adultos'},
          { text: 'Crianças '},
          { text: 'Animais'},
        ],
        explanation: 'O vírus é mais letal para idosos e pessoas com doenças crônicas. Boa parte das crianças, jovens e adultos podem contrair o vírus assintomaticamente, ou seja, não apresentarão nenhum sintoma. E sobre o seu pet, fique tranquilo. Estudos mostram que ele vai ficar bem seguro durante a pandemia.',
      },

      {
        question: 'Fake ou News: A maioria das pessoas fora do grupo de risco não sentem sintomas fortes. Por isso, podem e devem transitar livremente, enquanto os mais vulneráveis ficam em quarentena.',
        type: 'boolean',
        alternatives: { isFake: true },
        explanation: 'Todos devem ficar em casa para garantir que o Coronavírus cause o menor número de vítimas possível. Uma criança, por exemplo, mesmo sem apresentar nenhum sintoma, pode carregar o vírus no seu organismo e infectar dezenas de pessoas, ajudando a sobrecarregar o sistema de saúde, impedindo que outros tenham acesso ao tratamento adequado.',
      }
    ]
  }
