
function permissaoFuncionario(usuario, nivel, perfil) {
    switch (true) {
      case usuario:
        console.log("é um usuario ativo", usuario);
        break;
      case nivel > 10:
        console.log("se o nivel for acima de 10", nivel);
        break;
      case perfil === "admin":
        console.log("é um admin");
        break;
      default:
        console.log("acesso não permitido");
    }
  
    
  }
  
  const dadosFuncionario = {
    nome: "joao",
    idade: 30,
    email: "email@email.com",
    telefone: "9999-9999",
  };
  
  function fichaCadastral({ nome, idade, email, telefone }) {
    console.log("nome", nome);
    console.log("idade", idade);
    console.log("email", email);
    console.log("telefone", telefone);
  }
  
  const isUsuario = true;
  const nivel = 12;
  const perfil = "admin";
  
  permissaoFuncionario(isUsuario, nivel, perfil);
  fichaCadastral(dadosFuncionario);