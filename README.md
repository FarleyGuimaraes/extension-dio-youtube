## Sobre
Injeta um script na página da DIO, criando um botão que permite obter o **"link do youtube"** e abrir o vídeo diretamente no Youtube


<img src="https://user-images.githubusercontent.com/28885835/168691168-dc7f94ad-6683-4eba-a7a1-dea3afac495c.png" style="width: 730px;" />
<img src="https://user-images.githubusercontent.com/28885835/168691283-040d5776-850a-4873-97b8-898029835777.png" style="width: 730px;" />


## Compatibilidade
Testado com:
* Chrome;
* Opera;
* Opera GX;
* Brave;
* Edge; 


## Instalar
1. Faça o clone do repositório
2. acesse chrome://extensions/
3. Ative modo desenvolvedor
4. Clique em **Carregar expandida**
5. Selecione o diretório da extensão

**Obs.:** Para ativar o modo desenvolvedor no Edge, acesse edge://extensions/, depois clique no menu na lateral esquerda

Após ativar o modo desenvolvedor irá aparecer os icones

![image](https://user-images.githubusercontent.com/28885835/168694726-d13a8c74-8566-41a0-9d1b-6d21c7bc8e63.png)


## Como utilizar
1. Após adicionar a extensão, atualize a página da DIO
2. Acesse um vídeo de **Curso** ou **Desafio de projeto** e aguarde aparecer o botão **"Assistir no Youtube"** no canto superior direito do vídeo
4. Clique para reproduzir o vídeo na plataforma da DIO, aguarde até iniciar a reprodução e depois clique em "Assitir no Youtube"

**Obs: Para que a extensão consiga obter o link do video, é obrigátorio iniciar o vídeo na plataforma da DIO**


## Limitações
1. Funciona apenas nos vídeos de **Cursos** e **Desafios de Projetos**
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
2. Alguns vídeos da DIO não estão hospedados no youtube, não sendo possível obter o link
