"use strict";

const divContainerButtonYoutube = (function(){
  let divContainer = document.createElement("div");
  divContainer.setAttribute("id", "container-btnYoutube");

  let button = document.createElement("button");
  button.setAttribute("id", "btnYoutube");
  button.classList.add("btn-block", "font-weight-bold", "btn", "btn-danger");
  button.textContent = "Assistir no Youtube";
  //button.addEventListener("click", getLinkYoutube);
  
  divContainer.appendChild(button);

  return divContainer;

})()



setInterval(() => {
  let curse = document.location.href.includes("https://web.dio.me/course/");
  let project = document.location.href.includes("https://web.dio.me/project/");
  let live= document.location.href.includes("https://web.dio.me/live/");
  if (curse || project || live) {
    if (document.querySelector("#btnYoutube") == null) {
      document.querySelector(".card-header").insertAdjacentHTML("afterend", divContainerButtonYoutube.outerHTML);
      document.querySelector("#btnYoutube").addEventListener('click',getLinkYoutube);
    }
  }
}, 3000);
 


function getLinkYoutube() {
  let iframeElement = document.querySelectorAll('iframe[id^="ytc"]')[0];
  if (iframeElement !== undefined) {
    let link = getLink(iframeElement);
    showAlert(link)
  } else {
    let link = "";
    showAlert(link)
  }
}



function getLink(iframeElement){
  let srcIframe = iframeElement.src;
  let linkEmbed = srcIframe.split("?")[0];
  return linkEmbed.replace(
    "https://www.youtube.com/embed/",
    "https://youtu.be/"
  );
}



function showAlert(link){
  if(link !== ""){
    let result = confirm("Link:    " + link + "\n\nAbrir no youtube? ");
    if (result){
      window.open(link, "_black");
    }
  }else{
    alert("\nNÃO FOI POSSÍVEL OBTER LINK!\n\nPOSSÍVEIS CAUSAS\n  - Não reproduziu o video\n  - Não é um video do Youtube");
  } 
}