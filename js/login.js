const input_area = document.querySelector(".login_input");

//로그인 창 뜨는 순간 아이디 입력상자에 포커싱한다.
document.login_form.id.focus();
//하단의 "로그인" 버튼 클릭시 각 입력상자의 유효성 검사를 진행한다.


function check_input(){
    if(!document.login_form.id.value){
        alert("아이디를 입력하세요.");
        document.login_form.id.focus();
        return;
    }
    if(!document.login_form.pass.value){
        alert("패스워드를 입력하세요.");
        document.login_form.pass.focus();
        return;
    }
    document.login_form.submit();
}

input_area.addEventListener("keydown", function(evt){
    console.log(evt);
    if(evt.keyCode == "13"){
        check_input();
    }
});


