$(document).ready(function () {
    console.log("Document ready");
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        var username = $('#username').val();
        var password = $('#password').val();

        console.log("Form submitted");
        console.log("Username: ", username);
        console.log("Password: ", password);

        $.ajax({
            url: 'accounts.json',
            dataType: 'json',
            success: function (data) {
                console.log("AJAX call successful");
                var authenticated = false;
                data.forEach(function (account) {
                    if (account.username === username && account.password === password) {
                        authenticated = true;
                    }
                });

                if (authenticated) {
                    console.log("Authentication successful");
                    window.location.href = 'protected.html';
                } else {
                    console.log("Authentication failed");
                    $('.error').show();
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Failed to fetch accounts.json:', textStatus, errorThrown);
            }
        });
    });
});
