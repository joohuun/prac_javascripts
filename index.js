// 1번 html 대체
document.getElementById('name').innerHTML = "이순신"


// 2번 function 실행시 텍스트 대체
function loadHtml() {
    document.getElementById('chat').innerHTML = "hello"
}


// 3번 입력 출력
function valuetest() {
    // 입력값 취득
    var textString = document.getElementById("dat_in").value;
    console.log("입력값 = " + textString)
    // 입력값 출력
    document.getElementById("dat_out").value = textString;
}


// 4번
$(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        var param = $(this).serializeArray();
        // console.log(param);
        const name = param[0].value
        const gender = param[1].value
        // console.log(name + gender)
    });
});


// 5번 foreach
const arr = ['가', '나', '다']
arr.forEach(function (item, index, arr2) {
    console.log(item, index, arr2[index + 1]);
})

const Arr = ['a', 'b', 'c', 'd', 'e'];
const newArr = Arr.forEach((currentElement, index, array) => {
    // console.log(`요소: ${currentElement}`);
    // console.log('요소: '+ currentElement);
    // console.log(index)
    // console.log(array)
    // console.log(item)
})

const Pet = ['강아지', '고양이', '독두꺼비']
const newPet = Pet.forEach((item, index, array) => {
    // console.log(item)
    // console.log(array)
    const arr = array
    document.getElementById('pet').innerHTML = array
    console.log(arr)
})


// 6번






