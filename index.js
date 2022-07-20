// 1번 html 대체
document.getElementById('name').innerHTML="이순신"

// 2번 function 실행시 텍스트 대체
function loadHtml(){
    document.getElementById('chat').innerHTML="hello"
}

// 3번 입력 출력
function valuetest() {
	// 입력값 취득
    var textString = document.getElementById("dat_in").value;
    console.log("입력값 = "+textString)
    // 입력값 출력
    document.getElementById("dat_out").value = textString;
}

// 4번
$(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var param = $(this).serializeArray();
		// console.log(param);
        const name = param[0].value
        const gender = param[1].value
        // console.log(name + gender)
	});
});

// 5번

