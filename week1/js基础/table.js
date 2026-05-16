// 新增数据函数
function addData() {
    var table = document.getElementById("tb");
    var length = table.rows.length;
    // insertRow(length) 在末尾插入一行
    var row = table.insertRow(length);

    var name = row.insertCell(0);
    var age = row.insertCell(1);
    var action = row.insertCell(2);

    name.innerHTML = "待编辑";
    age.innerHTML = "待编辑";
    action.innerHTML = "<button onclick='deleteData(this)'>删除</button><button onclick='editData(this)'>修改</button>";
}

// 删除数据函数
function deleteData(button) {
    var row = button.parentNode.parentNode;
    // console.log(row);
    row.parentNode.removeChild(row);
}
// 修改数据函数
function editData(button) {
    var row = button.parentNode.parentNode;
    var name = row.cells[0];
    var age = row.cells[1];

    var inputName = prompt("请输入姓名",);
    var inputAge = prompt("请输入年龄",);

    name.innerHTML = inputName;
    age.innerHTML = inputAge;
}