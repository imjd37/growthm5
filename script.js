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

async function callApi() {
  let result = await fetch("https://api.coinbase.com/v2/currencies");
  result = await result.json();
  console.log(result);

  let random = Math.floor(Math.random() * result.data.length);
  // random = 160;
  console.log(random, result.data[random]);
  console.log(result.data[result.data.length - random]);

  var html = "<ul>";
  for (let i = 0; i < 10; i++) {
    html += "<ul>";
    html += "<li>" + result.data[result.data.length - random].id + "</li>";
    html += "<li>" + result.data[result.data.length - random].name + "</li>";
    html += "<li>" + result.data[result.data.length - random].min_size + "</li>";

    if (random < result.data.length - random) {
      result.data[random++];
    } else {
      result.data[random--];
    }
    html += "</ul>";
  }

  html += "</ul>";

  document.getElementById("Currencies").innerHTML = html;
}

callApi();
