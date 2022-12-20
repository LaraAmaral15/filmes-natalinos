function listaFilmes() {
  var filmes = {
    filme01: {
      nome: "Diário de Noel",
      imagem: "./img/diario-de-noel.png",
      sinopse: "Em O Diário de Noel, o autor best-seller Jacob Turner (Justin Hartley) volta para casa no Natal, após quase duas décadas distante, desde que sua mãe com problemas mentais o expulsou de casa quando ele tinha apenas dezesseis anos. A viagem acontece quando um advogado liga, dias antes do Natal para informá-lo que sua mãe morreu e deixou uma casa para ele. No processo de arrumação do espaço, ele encontra um diário deixado por alguém chamado Noel, que pode conter segredos de seu próprio passado e de Rachel (Barrett Doss), uma visita inesperada. Unidos por sua busca para entender o passado e reescrever seu futuro, Jacob e Rachel saem em busca de Noel. Ao longo do caminho, eles encontram mais do que jamais poderiam ter imaginado, incluindo uma oportunidade para o amor. Baseado no Livro The Noel Diary, de Richard Paul Evans."
    },

    filme02: {
      nome: "Uma Segunda Chance para Amar",
      imagem: "./img/Uma-Segunda-Chance-Para-Amar.png",
      sinopse: "Em Uma Segunda chance para Amar, Kate (Emilia Clarke) é uma jovem inglesa com uma vida que é uma bagunça. Além de ter dificuldades em lidar com a mãe Petra (Emma Thompson) e a irmã Marta, ela trabalha como elfo em uma loja temática de natal durante todo o ano. E é às vésperas do Natal que ela conhece Tom (Henry Golding), e o que parecia impossível se torna realidade, conforme o rapaz enxerga através de todas as barreiras que ela construiu para sua vida."
    },

    filme03: {
      nome: "Um Passado de Presente",
      imagem: "./img/um-passado-de-presente.png",
      sinopse: "Depois que uma feiticeira transporta o cavaleiro medieval Sir Cole (Josh Whitehouse) para a época atual em Ohio, durante as festas de fim de ano, ele faz amizade com Brooke (Vanessa Hudgens), uma professora de ciências inteligente e gentil que está desiludida pelo amor. Brooke ajuda Sir Cole a navegar no mundo moderno e tenta ajudá-lo a descobrir como cumprir sua misteriosa e verdadeira missão - o único ato que o levará de volta para casa. Mas, à medida que ele e Brooke se aproximam, Sir Cole começa a se perguntar se realmente quer voltar à sua antiga vida."
    },

    filme04: {
      nome: "Uma Quedinha de Natal",
      imagem: "./img/uma-quedinha-de-natal.png",
      sinopse: "Em Uma Quedinha de Natal, Sierra Belmont (Lindsay Lohan) é uma garota mimada e herdeira de uma rede de hotéis espalhados pelo mundo, mas nada interessada em fazer parte do negócio do pai, apenas compras e viagens. Em uma saída com seu namorado, ela é surpreendida quando Tad a pede em casamento. O choque é grande, e faz com que ela acabe sofrendo um acidente e perde a memória no processo - além de se separar do namorado enquanto caía. Ela é então resgatada por uma viatura e levada a um hospital. Mas, como ninguém vêm a sua procura e não conseguem a identificar, Sierra acaba sendo admitida no Northstar Lodge por Jake Russell, um dono de hotel que mais cedo havia tentado fechar um negócio com seu pai. Sierra, assumindo o nome de Sarah, ajuda Jake a fazer uma festa de final de ano para conseguir fundos para o hotel."
    },

    filme05: {
      nome: "Um Menino Chamado Natal",
      imagem: "./img/um-menino-chamado-natal.png",
      sinopse: "Um Menino Chamado Natal é uma história de Natal. O conto de um menino chamado Nikolas (Henry Lawfull), vivendo suas aventuras junto a elfos e outros seres mágicos. O longa é baseado no livro de mesmo título, de Matt Haig, e inclui muita neve, aventura e uma ambientação para aquecer o coração daqueles que amam o Natal."
    },

    filme06: {
      nome: "A Origem dos Guardiões",
      imagem: "./img/a-origem-dos-guardioes.png",
      sinopse: "As crianças do mundo inteiro são protegidas por um seleto grupo de guardiões: Papai Noel, Fada do Dente, Coelho da Páscoa e Sandman. São eles que garantem a inocência e as lendas infantis. Mas um espírito maligno, o Breu, pretende transformar todos os sonhos em pesadelo, despertando medo em todas as crianças. Para combater este adversário poderoso, a Lua designa um novo guardião para ajudar o grupo: Jack Frost, um garotinho invisível que controla o inverno. Sem conhecer sua própria vocação de guardião, ele embarca em uma aventura na qual vai descobrir tanto sobre as crianças quanto sobre seu próprio passado."
    },

  }
  var content = document.getElementById("content");
  for (var filme in filmes) {
    content.innerHTML +=
    '<div class="card">' +
      '<h2>' + filmes[filme].nome + '</h2>' +
      '<img src=" '+ filmes[filme].imagem + ' "/>' +
        '<details>' +
          '<summary>' + "Sinopse" + '</summary>' +
          '<p>'+ filmes[filme].sinopse + '</p>' + 
        '</details>' +  
    '</div>'    
  }
}


listaFilmes();