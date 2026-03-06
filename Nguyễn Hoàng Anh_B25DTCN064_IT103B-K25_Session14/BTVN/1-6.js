let products = [
    { id: 1, name: "Bánh Chưng", price: 150000 },
    { id: 2, name: "Giò Lụa", price: 180000 },
    { id: 3, name: "Cành Đào", price: 500000 },
    { id: 4, name: "Mứt Tết", price: 120000 },
    { id: 5, name: "Bao Lì Xì", price: 25000 },
    { id: 6, name: "Dưa Hấu Tết", price: 80000 },
];

function renderProducts() {
    let str = "";
    for (let index = 0; index < products.length; index++) {
        str += `<li class="product-item">
                    <span class="product-name">${products[index].name}</span>
                    <span> - ${products[index].price} VND</span>
                    <button onclick="deleteProduct(${products[index].id})">Xóa</button>
                    <button onclick="editProduct(${products[index].id})">Sửa</button>
                </li>`;
    }
    document.getElementById("product-list").innerHTML = str;
}
renderProducts();

function addProduct() {
    let nameInput = document.getElementById("product-name");
    let priceInput = document.getElementById("product-price");

    let newProduct = {
        id: Math.floor(Math.random() * 1000) + Date.now(),
        name: nameInput.value,
        price: priceInput.value
    };

    products.push(newProduct);
    renderProducts();
    nameInput.value = "";
    priceInput.value = "";
}

function deleteProduct(id) {
    let confirm_delete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này không")
    if (confirm_delete) {
        let deleteId = products.findIndex(product => product.id == id);
        products.splice(deleteId, 1);
        renderProducts();
    }
}

function editProduct(id) {
    let editId = products.findIndex(product => product.id == id);
    let edit = prompt("Nhập giá mới (VND):")
    if (edit.trim() === "" || isNaN(edit)) {
        alert("Giá nhập vào không hợp lệ!");
        return;
    }

    products[editId].price = edit;
    renderProducts();
    
}

function searchProduct() {
    let searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function () {
        let keyword = searchInput.value.toLowerCase();
        let items = document.getElementsByClassName("product-item");
        for (let i = 0; i < items.length; i++) {
            let name = items[i]
                .getElementsByClassName("product-name")[0]
                .innerText
                .toLowerCase();

            if (name.includes(keyword)) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
}
searchProduct();

function sortPriceAsc() {
    products.sort(function(a, b) {
        return a.price - b.price;
    });

    renderProducts();
}

function sortPriceDesc() {
    products.sort(function(a, b) {
        return b.price - a.price;
    });

    renderProducts();
}