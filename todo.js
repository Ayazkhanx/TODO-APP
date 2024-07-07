let btn = document.querySelector("button");
let ul = document.querySelector("li");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value; 

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add("delete");

    item.appendChild(dltbtn)
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listitem = event.target.ParentElement;
        listitem.remove();
        console.log('deleted');
    }
});

// let dltbtns = document.querySelectorAll(".delete");
// for (dltbtn of dltbtns) {
//     dltbtn.addEventListener("click", function() {
//         let para = this.parentElement;
//         para.remove();
//     });
// };