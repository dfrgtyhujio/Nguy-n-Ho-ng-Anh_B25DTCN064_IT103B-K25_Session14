/* 

    DOM: document object model (mô hình tài liệu dạng đối tươgnj)
    Khi trang web được tải lên trình duyệt sẽ tạo ra mô hình cây DOM
    Giúp:
        + thêm, sửa, xóa các phần tử HTML
        + thêm, sửa, xóa các thuộc tính của các phần tử HTML
        + tạo sự kiện tương tác với giao diện (click, hover, submit,..)

    Các thành phần trong DOM
        1. element
            Các cách lấy element
                + lấy theo id: document.getElementById("heading")
                    => trả về duy nhất đối tượng elemnt vì id là duy nhất
                + lấy theo class: document.getElementsByClassName("title")
                    => trả về HTML collection (gần giồng mảng)
                + lấy theo tên thẻ (tagname): document.getElementsByTagName("p")
                    => trả về HTML collection (gần giồng mảng)

        2. atribute: thuộc tính

        3. text: nội dung
            + innerText
            + innerHTML

    EVENT: sự kiện tương tác

    Đối tượng thực tế:
        Thuộc tính
        Phương thức

*/

let student = {
    name: "thu",
    email: "thu@gmail.com",
    say: () => {
        console.log("Xin chào");

    }
}
student.say()
let getElementsByClassName = document.getElementsByClassName("title");
console.log(getElementsByClassName[0]);

let getElementsByTagName = document.getElementsByTagName("p")
console.log(getElementsByTagName);

function login() {
    console.log("Đăng nhập");

}

function checkInput() {
    console.log("1");

}

let flag = true
function changeColor() {
    let element = document.getElementsByClassName("title")[0];
    if (flag) {
        element.style.color = "red"
        element.id = "heading"
        flag = false
    } else {
        element.id = "heading1"
        flag = true
    }
}

function changeText() {
    let elementP = document.getElementByID("content");
    elementP.innerText = "Lập trình";
    
    let elementUl = document.getElementsByClassName("list")[0];
    elementUl.innerHTML = "<li>C++</li>";
}