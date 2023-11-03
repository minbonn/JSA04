//Lưu dữ liệu
localStorage.setItem("name","John");
localStorage.setItem("age","25");
//Truy xuất dữ liệu
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

console.log(name);
console.log(age);



const person = {
    name: "John",
    age: 25,
    city: "New York" 
}
const jsonPerson = JSON.stringify(person);
console.log(jsonPerson);
//Truy xuất và chuyển đổi từ chuỗi JSON thành đối tượng java
const storedPerson = localStorage.setItem("person",jsonPerson);
const getstoredPerson = localStorage.getItem("person",jsonPerson);
console.log(getstoredPerson);
console.log(storedPerson);
const pasedPerson = JSON.parse(getstoredPerson)
console.log(pasedPerson);

console.log(pasedPerson.name)//John
console.log(pasedPerson.age)//25
console.log(pasedPerson.city)//New York

const to_do_list = ["quét nhà","lau nhà","nấu cơm"]
localStorage.setItem("to_do_list", JSON.stringify(to_do_list));

function renderlist() {
    let result =localStorage.getItem("to_do_list")
    result = JSON.parse(result)

    let list_container = document.getElementById("to-do-list")
    list_container.innerHTML = ""
    for (item of result) {
        let item_ele = document.createElement("li")
        item_ele.classList.add("to-do-item")
        item_ele.innerHTML = item
        list_container.appendChild(item_ele)
    }
}
renderlist()

let submit_btn = document.querySelector(".submit-btn");
let to_do_input = document.querySelector(".to-do-input");

submit_btn.addEventListener("click", function () {
  let value = to_do_input.value;
  if (value != "") {
    let new_list = localStorage.getItem("to_do_list");
    new_list = JSON.parse(new_list);
    new_list.push(value);
    localStorage.setItem("to_do_list", JSON.stringify(new_list));
    to_do_input.value = "";
    to_do_input.focus();
    render_list();
  }
});