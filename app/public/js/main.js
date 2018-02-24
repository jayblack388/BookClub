$(document).ready(()=>{
    $("#collapseOne, #collapseTwo, #collapseThree, #collapseFour").hide();
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $("#toggleOne").click(function(e) {
        e.preventDefault();
        console.log($("#bigWrapper").attr("data-exp"));
        $("#bigWrapper").attr("data-exp", "toggleOne");
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseOne").slideToggle();
    });
    $("#toggleTwo").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").attr("data-exp", "toggleTwo");
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseTwo").slideToggle();
    });
    $("#toggleThree").click(function(e) {
        e.preventDefault();
        $("#bigWrapper").attr("data-exp", "toggleThree");
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseThree").slideToggle();
    });
    $("#toggleFour").click(function(e) {
        e.preventDefault();
        console.log(this.id);
        $("#bigWrapper").attr("data-exp", "toggleFour");
        $("#bigWrapper").toggleClass("toggled");
        $("#collapseFour").slideToggle();
    });
})



if ( $("#bigWrapper").attr("data-exp", this.id) ) {
    $("#bigWrapper").addClass("toggled");
} else {
    
}

// On click, set other buttons data state to closed
// check if button has data state open/close
// Click button, set data state (open/close) to button->