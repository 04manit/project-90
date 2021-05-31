
function names(){
    console.log("came");
    console.log(localStorage.getItem("Player1"));
    document.getElementById("question_turn").innerHTML = localStorage.getItem("Player1");
    document.getElementById("answer_turn").innerHTML = localStorage.getItem("Player2");
    document.getElementById("player_1_name_game").innerHTML = localStorage.getItem("Player1")+" : ";
    document.getElementById("player_2_name_game").innerHTML = localStorage.getItem("Player2")+" : ";
}