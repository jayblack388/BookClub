$(document).ready(()=>{

    $("#hideLogin").click(()=>{
        $("#loginForm").hide();
        $("#registerForm").show();
    });

    $("#hideRegister").click(()=>{
        $("#loginForm").show();
        $("#registerForm").hide();
    });

    $("#loginForm").on("submit", ()=>{
        event.preventDefault();
        // Create validation methods for text and email/passwords
        let un;
        let pw;

        let currentURL = window.location.origin;
        let recAccount = {
            username: un,
            password: pw
        }
        $.ajax({
            type: "POST",
            url: currentURL + "/api/accounts",
            data: JSON.stringify(recAccount),
            contentType: "application/json",
            success: (res)=>{
                if (res) {
                    console.log("User/PW sent")
                } else {
                    console.log("Something went wrong")
                }
            },
            error: (err)=>{
                throw err;
            }
        }).done((data)=>{
            
        })
    })

});