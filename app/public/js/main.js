$(document).ready(()=>{
    const list1 = $("#collapseOne");
    const list2 = $("#collapseTwo");
    const list3 = $("#collapseThree");
    const list4 = $("#collapseFour");
    const listArray = [list1, list2, list3, list4];

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#collapseOne, #collapseTwo, #collapseThree, #collapseFour").hide();
    function wrapperOpen(target) {

    }
    function wrapperClosed(target) {

    }



    /* $("#menu-toggle").click(function(e) {
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
    }); */
})

// On click, set other buttons data state to closed
// check if button has data state open/close
// Click button, set data state (open/close) to button->