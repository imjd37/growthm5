const nav = document.querySelector(".Navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    nav.classList.add("NavbarChange");
    nav.classList.remove("NavbarDefault");
  } else {
    nav.classList.add("NavbarDefault");
    nav.classList.remove("NavbarChange");
  }
};

document.querySelector(".Menubar").onclick = function () {
  document.getElementById("MenuToggle").checked = false;
};

async function callApi() {
  let result = await fetch("https://api.coinbase.com/v2/currencies");
  result = await result.json();
  console.log(result);

  let random = Math.floor(Math.random() * result.data.length);
  console.log(random, result.data[random]);

  if (random < 161) {
    var html = "<ul>";
    for (let i = 0; i < 10; i++) {
      html += "<ul>";
      html += "<li>" + result.data[random].id + "</li>";
      html += "<li>" + result.data[random].name + "</li>";
      html += "<li>" + result.data[random].min_size + "</li>";
      result.data[random++];
      html += "</ul>";
    }

    html += "</ul>";
  } else {
    var html = "<ul>";
    for (let i = 0; i < 172 - random; i++) {
      html += "<ul>";
      html += "<li>" + result.data[random].id + "</li>";
      html += "<li>" + result.data[random].name + "</li>";
      html += "<li>" + result.data[random].min_size + "</li>";
      result.data[random++];
      html += "</ul>";
    }

    html += "</ul>";
  }

  document.getElementById("Currencies").innerHTML = html;
}

callApi();
