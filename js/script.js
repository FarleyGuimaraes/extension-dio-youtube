"use strict";

setInterval(() => {
  let curse = document.location.href.includes("https://web.dio.me/course/");
  let project = document.location.href.includes("https://web.dio.me/project/");
  if (curse || project) {
    if (document.querySelector("#btnYoutube") == null) {
      createButtonYoutube();
    }
  }
}, 3000);



function createButtonYoutube() {
  let cardHeader = document.querySelector(".card-header");
  
  let divContainer = document.createElement("div");
  divContainer.setAttribute("id", "container-btnYoutube");

  let button = document.createElement("button");
  button.setAttribute("id", "btnYoutube");
  button.classList.add("btn-block", "font-weight-bold", "btn", "btn-danger");
  button.textContent = "Assistir no Youtube";
  
  divContainer.appendChild(button);
  cardHeader.insertAdjacentHTML("afterend", divContainer.outerHTML);

  let buttonYoutube = document.querySelector("#btnYoutube");
  buttonYoutube.addEventListener("click", getLinkYoutube);

}



function getLinkYoutube() {
  let iframeElement = document.querySelectorAll('iframe[id^="ytc"]')[0];
  if (iframeElement !== undefined) {
    let srcIframe = iframeElement.src;
    let linkEmbed = srcIframe.split("?")[0];
    let link = linkEmbed.replace(
      "https://www.youtube.com/embed/",
      "https://youtu.be/"
    );

    let abrirNoYoutube = confirm("Link:    " + link + "\n\nAbrir no youtube? ");
    if (abrirNoYoutube){
      window.open(link, "_black");
    }
    
  } else {
    alert("\nNÃO FOI POSSÍVEL OBTER LINK!\n\nPOSSÍVEIS CAUSAS\n  - Não reproduziu o video\n  - Não é um video do Youtube");
  }
}
