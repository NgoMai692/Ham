let x = 0;
let array = Array();
let index;

function addProduct(){
    array[x] = document.getElementById("input").value;
    alert("Thêm một sản phẩm có tên là: "+array[x]);
    x++;
    document.getElementById("input").value = "";
    display(array);
}

function display(arr){
    let str= "<table>";
    str += "<tr><td colspan='3'><b>Product Name</b></td><td>"+ array.length+" Product</td></tr>"
    for (let i = 0; i < arr.length; i++) {
        str += "<tr>"
        str += "<td id='name'>"+ arr[i]+"</td>"
        str += "<td><button onclick='edit("+i+")'>Sửa</button></td>"
        str += "<td><button onclick='xoa("+i+")'>Xóa</button></td>"
        str += "</tr>";
    }
    str += "</table>"
    document.getElementById("result").innerHTML = str;
}

function edit(arrNum){
    document.getElementById("input2").value = array[arrNum];
    array[arrNum]=document.getElementById("input2").value;
    display(array);
    index = arrNum;
}

function xoa(arrNum){
    array.splice(arrNum,1);
    display(array);
}

function edit2(){
    array[index]=document.getElementById("input2").value;
    display(array);
}


