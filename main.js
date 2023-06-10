const filterBtn = document.getElementById(".doc");
let stackBtn = 1;
console.log(stackBtn);
let  arr = [];
function stackChoice(stack) {
    for (let i = 0; i < stack.length; i++) {
        stack[i].addEventListener("click", function () {
            // stackBtn[i].classList.toggle("stack-btn2");
            alert(stack[i].classList);
        })
        if(stack[i].classList.contains("Fullestack")) {
            Array.push(stackBtn[i], "Fullstack");
        }
    }
}

function listFilter() {
    filterBtn.addEventListener("click", function () {
        filter.classList.toggle("filter2");
        filterBtnIcon.classList.toggle("filter-btn-icon2");
        filterBtnText.classList.toggle("filter-btn-text2");
    })
}


function listCAT() {
    for (let i = 0; i < stackBtn.length; i++) {
        cat[i].addEventListener("click", function () {
            cat[i].classList.toggle("cat2");
        })
    }
}

addEventListener("click", function (search) {
    listFilter();
    stackChoice(stack);
}) 