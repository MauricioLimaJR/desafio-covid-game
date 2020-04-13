export const getShareUrl = score => {
  const url = 'https://api.whatsapp.com/send?text=Hora%20do%20desafio%21%20Vamos%20combater%20o%20novo%20%23coronavirus%20da%20maneira%20mais%20segura%20e%20legal%20que%20existe%21%21%0A%0AAcesse%20agora%20DesafioCovid.com%20para%20jogar%20um%20quiz%20com%20muitas%20informa%C3%A7%C3%B5es%20sobre%20o%20novo%20coronav%C3%ADrus%20e%20tente%20fazer%20uma%20pontua%C3%A7%C3%A3o%20maior%20que%20a%20minha%20%F0%9F%98%8C%0AAcabei%20de%20jogar%20e%20fiz%20score%20pontos%21'
  return url.replace('score', score)
}

export const randomErrorMessages = () => {
  const errors = [
    'Opa!, pense melhor 💭',
    'Tente outra resposta 🙉',
    'Resposta errada 😫',
    'Não foi dessa vez 😥',
    'Ihh, errou... 👀',
  ]

  return errors[Math.floor(Math.random() * 5)]
}
