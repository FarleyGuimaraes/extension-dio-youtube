## Sobre
Injeta um script na página da DIO, criando um botão que permite obter o **"link do youtube"** e abrir o video diretamente no Youtube

<img src="https://user-images.githubusercontent.com/28885835/168685923-7a65fb67-fe5b-4bce-bd8b-53dec6c635fc.png" style="width: 400px; height: 300px;" />                                <img src="https://user-images.githubusercontent.com/28885835/168686050-95d342a4-104b-47a5-97d1-66662d3b8905.png" style="width: 400px; height: 300px;" />



## Instalar
1. acesse chrome://extensions/
2. Ative modo desenvolvedor
3. Clique em **Carregar expandida**
4. Selecione o diretório da extensão

## Como utilizar
1. Após adicionar a extensão, atualize a página da DIO
2. Acesse um video de **Curso** ou **Desafio de projeto** e aguarde aparecer o botão **"Assistir no Youtube"** no canto superior direito do video
4. Clique para reproduzir o video na plataforma da DIO, aguarde até iniciar a reprodução e depois clique em "Assitir no Youtube"

**Obs: Para que a extensão consiga obter o link do video, é obrigátorio iniciar o video na plataforma da DIO**

## Limitações
1. Funciona apenas nos videos de **Cursos** e **Desafios de Projetos**
```js
setInterval(() => {
  let curse = document.location.href.includes("https://web.dio.me/course/");
  let project = document.location.href.includes("https://web.dio.me/project/");
  if (curse || project) {
    if (document.querySelector("#btnYoutube") == null) {
      createButtonYoutube();
    }
  }
}, 3000);
```
2. Alguns videos da DIO não estão hospedados no youtube, não sendo possível obter o link
