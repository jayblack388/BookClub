$(document).ready(()=>{

    let loginForm = $("#loginForm");
    let regForm = $("#registerForm");

    let loginInput = $("#loginUsername");
    let passInput = $("#loginPassword");

    let regInput = $("#email");
    let regPass = $("#password");

    $("#hideLogin").click(()=>{
        loginForm.hide();
        regForm.show();
    });

    $("#hideRegister").click(()=>{
        loginForm.show();
        regForm.hide();
    });

    // Login Function
        loginForm.on("submit", (event)=>{
            event.preventDefault();

            const userData = {
                email: loginInput.val().trim(),
                password: passInput.val().trim()
            };

            if (!userData.email || !userData.password) {
                return
            }

            loginUser(userData.email, userData.password);
            loginInput.val("");
            passInput.val("");
        });
        function loginUser (email, password) {
            $.post("/api/login", {
                email: email,
                password: password
            }).then((data) => {
                console.log(data);
                window.location.replace(data);
            }).catch((err) => {
                console.log(err);
            });
        }
    // Register Function
        regForm.on("submit", (event) => {
            event.preventDefault();

            const userData = {
                email: regInput.val().trim(),
                password: regPass.val().trim()
            };

            if (!userData.email || !userData.password) {
                return;
            }

            signUpUser(userData.email, userData.password);
            regInput.val("");
            regPass.val("");
        });

        const signUpUser = (email, password) => {
            $.post("/api/signup", {
                email: email,
                password: password
              }).then((data) => {
                window.location.replace(data);
                // If there's an error, handle it by throwing up a boostrap alert
              }).catch(handleLoginErr);
        }

        const handleLoginErr = (err) => {
            $("#alert .msg").text(err.responseJSON);
            $("#alert").fadeIn(500);
        }
});