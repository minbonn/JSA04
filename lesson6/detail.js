const search = window.location.search;
console.log(search);
const params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
console.log(id);

function renderUi(item) {
    const content = document.getElementById("detail-item-container");
    const item_div = document.createElement("div");
    item_div.setAttribute("class", "item");
    item_div.innerHTML = `
    <div class="detail-img">
                    <img src="${item.images}" alt="">
                </div>
                <div class="detail-content">
                    <div class="title">${item.name}</div>
                    <div class="price">${item.price}</div>
                </div>`;
    content.appendChild(item_div);
  }

  function renderIcon(){
    const content = document.getElementById("check");
    content.innerHTML =`<a href="login/login.html">
    <i class="fa-solid fa-user" id="users"></i>
    </a>`
  }

  function renderName(){
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    console.log(user)
    const content = document.getElementById("check");
    content.innerHTML =`<div class="dropdown">
    <span>${user[0].name}</span>
    <div class="dropdown-content">
    <a style="color:black;" href="login/login.html">
    Đang xuất
    </a>
    </div>
  </div>
  `
  }
  async function run() {
    let products = localStorage.getItem("product");
    let islogin  = localStorage.getItem("IsLogin");
    products = JSON.parse(products);
    islogin = JSON.parse(islogin);
    console.log(islogin)
    console.log(products[id])
    product = products[id];
    renderUi(product)
    
    if(islogin== true){
        renderName();
    }else{
        renderIcon()
    }
  }
  
  run();
  
function tinhTong(a,b){
  console.log(a+ b);
}

