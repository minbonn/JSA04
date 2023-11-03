// ÔN LẠI KIẾN THỨC VỀ querySelector và HTML COLLECTION

// querySelector: Phương thức này cho phép bạn chọn phần tử HTML dựa trên một bộ chọn CSS. 
// Bạn có thể sử dụng các cú pháp CSS như các lớp (.class), các phần tử (element), các ID (#id), 
// các thuộc tính ([attribute]), và các phần tử con (parent > child). Phương thức querySelector 
// trả về phần tử đầu tiên khớp với bộ chọn hoặc null nếu không có phần tử nào khớp. 
// Đây là một phương pháp linh hoạt và mạnh mẽ.


// HTML COLLECTION: được thể hiện qua các method như getElementsByClassName,getElementsById,...
// Nó được biểu diễn dưới dạng object
// Nó được trả về bởi các phương thức và thuộc tính DOM trong trình duyệt
// khi ta truy xuất các phần tử HTML trong tài liệu. 

// Tạo danh sách chứa email và password mẫu
var email_list = ['admin1@gmail.com', 'admin2@gmail.com', 'admin3@gmail.com'];
var password_list = ['123', '456', '789'];


function checkAccount() {
  // Lấy giá trị từ các ô input
  // trim(): Xóa các khoảng trắng (dấu cách, tab, xuống dòng) ở đầu và cuối chuỗi.
  const email_value = document.querySelector(".email-input").value.trim();
  const password_value = document.querySelector(".password-input").value.trim();

  // Lấy form login
  let login_form = document.querySelector('.login-form');

  // JSON (JavaScript Object Notation) là một định dạng dữ liệu được sử dụng để truyền dữ liệu giữa các ứng dụng, biểu diễn dưới dạng chuỗi.

  // JSON.stringify() chuyển đổi một đối tượng JavaScript thành một chuỗi JSON.
  // JSON.parse() chuyển đổi một chuỗi JSON thành một đối tượng JavaScript.

  // Thiết lập danh sách email và password vào localStorage và chuyển đổi thành chuỗi JSON
  localStorage.setItem("email", JSON.stringify(email_list));
  localStorage.setItem("password", JSON.stringify(password_list));

  if (login_form !== "") {
    // Lấy dữ liệu từ localStorage
    let get_email = localStorage.getItem("email");
    get_email = JSON.parse(get_email);

    let get_pass = localStorage.getItem("password");
    get_pass = JSON.parse(get_pass);

    let isMatch = false;

    for (var i = 0; i < get_email.length; i++) {
      if (get_email[i].toLowerCase() === email_value.toLowerCase() && get_pass[i].toLowerCase() === password_value.toLowerCase()) {
        isMatch = true;
        break;
      }
    }

    if (isMatch) {
      alert('Đăng nhập thành công');
    } else {
      alert("Đăng nhập không thành công");
    }
  }
}

const submit_btn = document.querySelector('.submit-btn');
submit_btn.addEventListener("click", function(event) {
  event.preventDefault()
  checkAccount();
});
let register_form = document.querySelector('#register-form');

function register() {
  // Lấy input
  let email_value = document.querySelector('.email-input').value.trim();
  let password_value = document.querySelector('.password-input').value.trim();
  let repassword_value = document.querySelector('.repassword-input').value.trim();

  // Lấy data từ local storage
  let user_email_list = localStorage.getItem("email")
  user_email_list = JSON.parse(user_email_list);
  
  let user_password_list = localStorage.getItem("password");
  user_password_list = JSON.parse(user_password_list);
  
  // Biến isMatch để kiểm tra dữ liệu có trùng khớp hay không
  let isMatch = false;
  if (password_value !== repassword_value) {
    alert("Mật khẩu không khớp")
  } else {
    for (const account of user_email_list) {
      if (email_value === account) {
        alert("Email đã tồn tại")
        isMatch = true;
        break;
      }
    }
    if (isMatch === false) {
      user_email_list.push(email_value)
      user_password_list.push(password_value)
      localStorage.setItem("email", JSON.stringify(user_email_list))
      localStorage.setItem("password", JSON.stringify(user_password_list))
      alert("Đăng ký thành công")
    }
  }
}

register_form.addEventListener("submit", function(event) {
  event.preventDefault();
  register();
});