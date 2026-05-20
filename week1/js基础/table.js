/**
 * 新增一行数据到表格末尾
 * - insertRow() 在表格末尾插入空行
 * - insertCell() 在新行中创建单元格
 * - 初始值设为"待编辑"，并提供删除/修改按钮
 */
function addData() {
    // 获取表格 DOM 元素
    var table = document.getElementById("tb");
    // 当前行数 = 新行的插入位置（末尾）
    var length = table.rows.length;
    // insertRow(length) 在索引 length 处插入一行（即末尾）
    var row = table.insertRow(length);

    // 在新行中插入 3 个单元格（索引 0/1/2 分别对应姓名/年龄/操作列）
    var name = row.insertCell(0);
    var age = row.insertCell(1);
    var action = row.insertCell(2);

    // 填充默认内容和操作按钮
    name.innerHTML = "待编辑";
    age.innerHTML = "待编辑";
    // this 指向被点击的按钮本身，传给 deleteData/editData 定位所在行
    action.innerHTML = "<button onclick='deleteData(this)'>删除</button><button onclick='editData(this)'>修改</button>";
}

/**
 * 删除按钮所在的那一行
 * @param {HTMLElement} button — 被点击的删除按钮（通过 onclick 的 this 传入）
 *
 * DOM 层级：button → td(操作列) → tr(行)
 * parentNode 向上走两次从按钮定位到行元素，再通过父级 tbody 移除该行
 */
function deleteData(button) {
    // button.parentNode = td, td.parentNode = tr（目标行）
    var row = button.parentNode.parentNode;
    // row.parentNode = tbody（或 table），从其子节点中移除 row
    row.parentNode.removeChild(row);
}

/**
 * 修改按钮所在行的姓名和年龄
 * @param {HTMLElement} button — 被点击的修改按钮
 *
 * row.cells 是 HTMLCollection，索引 0 是姓名列，索引 1 是年龄列
 * 通过 prompt 弹窗获取用户输入，直接替换单元格的 innerHTML
 */
function editData(button) {
    // 从按钮向上定位到所在行
    var row = button.parentNode.parentNode;
    // cells[0]  = 第一列（姓名），cells[1] = 第二列（年龄）
    var name = row.cells[0];
    var age = row.cells[1];

    // prompt 弹窗获取新值（取消则返回 null，内容变为 "null"）
    var inputName = prompt("请输入姓名");
    var inputAge = prompt("请输入年龄");

    // 用用户输入替换单元格内容
    name.innerHTML = inputName;
    age.innerHTML = inputAge;
}