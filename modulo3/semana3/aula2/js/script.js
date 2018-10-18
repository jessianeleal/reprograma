let forms = $('.needs-validation');
console.log(forms);

forms.validate({
    errorElement: "span",
    rules: {
        first_name: "required",
        last_name: "required",
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        },
        endereco: "required",
        cidade: "required",
        estado: "required",
        zip: "required",
        msg: "required"
    },
    messages: {
        first_name: "Por favor, digite seu nome",
        last_name: "Por favor, digite seu sobrenome",
        email: {
          required: "Por favor, digite seu email",
          email: "Por favor, digite um email com o formato name@domain.com"
        },
        phone: {
            required: "Por favor, digite seu celular"
        },
        endereco: "Por favor, digite seu celular",
        cidade: "Por favor, digite a sua cidade",
        estado: "Por favor, digite seu estado",
        zip: "Por favor, digite seu CEP",
        msg: "Por favor, digite seu o que você"
      }

})