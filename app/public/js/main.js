$(document).ready(()=>{
    $("#collapseOne, #collapseTwo, #collapseThree, #collapseFour").hide();
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#toggleOne").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseOne").toggle();
    });
    $("#toggleTwo").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseTwo").toggle();
    });
    $("#toggleThree").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseThree").toggle();
    });
    $("#toggleFour").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseFour").toggle();
    });
})