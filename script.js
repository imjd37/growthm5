const nav = document.querySelector(".Navbar");
const up = document.querySelector(".start");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    nav.classList.add("NavbarChange");
    nav.classList.remove("NavbarDefault");
    up.style.visibility = "visible";
  } else {
    nav.classList.add("NavbarDefault");
    nav.classList.remove("NavbarChange");
    up.style.visibility = "hidden";
  }
};

document.querySelector(".Menubar").onclick = function () {
  document.getElementById("MenuToggle").checked = false;
};

// ------------------------------------------ Currencies Script ------------------------------------



async function callAPI(url){
 try {
  let result = await fetch(url)
  result = await result.json();
  return result;
  
 } catch (error) {
  console.log("E:",error);
  
 }
}

function listOfData(upto,response){
  let random = Math.floor(Math.random() *response.data.length);

    var html = "<ul>";

    if (random < upto) {
      for (let i = 0; i < upto; i++) {
        html += "<ul>";
        html += "<li>" + response.data[random].id + "</li>";
        html += "<li>" + response.data[random].name + "</li>";
        html += "<li>" + response.data[random].min_size + "</li>";
        html += "</ul>";
        response.data[random++];   
      }     
    } else {
      for (let i = 0; i < upto; i++) {
        html += "<ul>";
        html += "<li>" + response.data[random].id + "</li>";
        html += "<li>" + response.data[random].name + "</li>";
        html += "<li>" + response.data[random].min_size + "</li>";
        html += "</ul>";
        response.data[random--];  
      }
    }
  html += "</ul>";
document.getElementById("Currencies").innerHTML = html;
}

async function consumeAPI(){
  const response = await callAPI("https://api.coinbase.com/v2/currencies");
  listOfData(10,response);
}
consumeAPI();