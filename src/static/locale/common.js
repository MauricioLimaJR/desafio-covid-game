
  export const CommonErrors = {
    error: "Algo de errado aconteceu =(",
    tryAgain: "Tente novamente!",
    tryAgainLater: "Tente novamente mais tarde!",
    typeCorrectly: "Você digitou corretamente?"
  }

  export default {
  validations: {
    'required': 'Campo obrigatório',
    'invalid': 'Campo inválido',
    'invalid-referral-code': 'Não há um usuário com esse código',
    'invalid-cnpj': 'CNPJ inválido',
    'invalid-cpf': 'CPF inválido',
    'invalid-email': 'Email inválido',
    'invalid-ddd': 'DDD iniciado com 0 é inválido',
    'invalid-phone': 'Número telefônico inválido',
    'invalid-veracity': 'Esta opção é obrigatória',
    'number-min': 'Não pode ser menor que {{min}}',
    'number-max': 'Não pode ser maior que {{max}}',
    'pass-match': 'As senhas devem ser iguais',
    'positive': 'O valor deve ser positivo',
    'string-min': min => 'Deve conter, no mínimo, ${min} caracteres',
    'string-max': 'Deve conter, no máximo, {{max}} caracteres',
    'valueNotAvailable': 'Valor superior a quantia disponível',
    'valueNotEnough': 'Valor mínimo: R$ 5,00',
  }
}
