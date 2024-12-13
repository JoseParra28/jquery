// function showSideBar(){
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = 'flex';
// }
// function hideSideBar(){
//     const sidebar = document.querySelector(".sidebar");
//     sidebar.style.display = 'none';
// }
$("button").click (function (){
    $("h1").css("color", "pink")
    console.log(this)
})

$("input").keypress(function(event) {
    $("h1").text(event.key)})

$("h1").on("click" , function(){
    $("h1").css("color", "green")
})