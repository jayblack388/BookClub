$(document).ready(()=>{

    $("#collapseOne").hide();
    $("#collapseTwo").hide();
    $("#collapseThree").hide();
    $("#collapseFour").hide();

    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $("#toggleOne").click(function(e) {
        e.preventDefault();
        let oc = $("#collapseOne").attr("data-oc");
        if (oc === "0") {
            if ($("#bigWrapper").hasClass("toggled")) {
                $("#collapseTwo").hide();
                $("#collapseTwo").attr("data-oc", "0");
                $("#collapseThree").hide();
                $("#collapseThree").attr("data-oc", "0");
                $("#collapseFour").hide();
                $("#collapseFour").attr("data-oc", "0");
                
                $("#collapseOne").show();
                $("#collapseOne").attr("data-oc", "1");
            } else {
                $("#bigWrapper").addClass("toggled");
                $("#collapseOne").show();
                $("#collapseOne").attr("data-oc", "1");
            }
        } else if (oc === "1") {
            $("#collapseOne").slideDown();
            $("#bigWrapper").removeClass("toggled");
            $("#collapseOne").attr("data-oc", "0");
        }
    });
    $("#toggleTwo").click(function(e) {
        e.preventDefault();
        let oc = $("#collapseTwo").attr("data-oc");
        if (oc === "0") {
            if ($("#bigWrapper").hasClass("toggled")) {
                $("#collapseOne").hide();
                $("#collapseOne").attr("data-oc", "0");
                $("#collapseThree").hide();
                $("#collapseThree").attr("data-oc", "0");
                $("#collapseFour").hide();
                $("#collapseFour").attr("data-oc", "0");
                
                $("#collapseTwo").show();
                $("#collapseTwo").attr("data-oc", "1");
    
            } else {
                $("#bigWrapper").addClass("toggled");
                $("#collapseTwo").show();
                $("#collapseTwo").attr("data-oc", "1");
            }
        } else if (oc === "1") {
            $("#collapseTwo").slideDown();
            $("#bigWrapper").removeClass("toggled");
            $("#collapseTwo").attr("data-oc", "0");
        }
        
    });
    $("#toggleThree").click(function(e) {
        e.preventDefault();
        let oc = $("#collapseThree").attr("data-oc");
        if (oc === "0") {
            if ($("#bigWrapper").hasClass("toggled")) {
                $("#collapseTwo").hide();
                $("#collapseTwo").attr("data-oc", "0");
                $("#collapseOne").hide();
                $("#collapseOne").attr("data-oc", "0");
                $("#collapseFour").hide();
                $("#collapseFour").attr("data-oc", "0");
                
                $("#collapseThree").show();
                $("#collapseThree").attr("data-oc", "1");
    
            } else {
                
                $("#bigWrapper").addClass("toggled");
                $("#collapseThree").show();
                $("#collapseThree").attr("data-oc", "1");
            }
        } else if (oc === "1") {
            $("#collapseThree").slideDown();
            $("#bigWrapper").removeClass("toggled");
            $("#collapseThree").attr("data-oc", "0");
        }
        
    });
    $("#toggleFour").click(function(e) {
        e.preventDefault();
        let oc = $("#collapseFour").attr("data-oc");
        if (oc === "0") {
            if ($("#bigWrapper").hasClass("toggled")) {
                $("#collapseTwo").hide();
                $("#collapseTwo").attr("data-oc", "0");
                $("#collapseThree").hide();
                $("#collapseThree").attr("data-oc", "0");
                $("#collapseOne").hide();
                $("#collapseOne").attr("data-oc", "0");
                
                $("#collapseFour").show();
                $("#collapseFour").attr("data-oc", "1");    
            } else {
                $("#bigWrapper").addClass("toggled");
                $("#collapseFour").show();
                $("#collapseFour").attr("data-oc", "1");
            }
        } else if (oc === "1") {
            $("#collapseFour").slideDown();
            $("#bigWrapper").removeClass("toggled");
            $("#collapseFour").attr("data-oc", "0");
        }        
    });
})
