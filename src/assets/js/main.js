$(document).ready(function () {
    $(".form").validate({
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 15,
                digits: true
            },
            password: {
                required: true,
                minlength: 6
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Please enter your username.",
                minlength: "Your username must be at least 3 characters long."
            },
            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            phone: {
                required: "Please enter your phone number.",
                minlength: "Your phone number must be at least 10 digits long.",
                maxlength: "Your phone number cannot exceed 15 digits.",
                digits: "Please enter a valid phone number."
            },
            password: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },
            confirmPassword: {
                required: "Please re-enter your password.",
                equalTo: "Passwords do not match."
            }
        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("error-message");
            error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("error").removeClass("valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("error").addClass("valid");
        },

        submitHandler: function (form) {
            form.submit();
        }

    });


    // reset password page form validation
    $(".fform").validate({
        rules: {


            email: {
                required: true,
                email: true
            },
            password1: {
                required: true,
                minlength: 6
            },


            password2: {
                required: true,
                minlength: 6
            },

        },
        messages: {


            email: {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },

            password1: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },

            password2: {
                required: "Please provide a password.",
                minlength: "Your password must be at least 6 characters long."
            },


        },
        errorElement: "span",
        errorPlacement: function (error, element) {
            error.addClass("error-message");
            error.insertAfter(element);
        },
        highlight: function (element, errorClass, validClass) {
            $(element).addClass("error").removeClass("valid");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass("error").addClass("valid");
        },

        submitHandler: function (form) {
            form.submit();
        }


    });








    // Password Hide and show
    $('.eye').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type', 'text');
            $('#Cpassword').attr('type', 'text');


        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password').attr('type', 'password')
            $('#Cpassword').attr('type', 'password');

        }
    });


    // Password Hide and show
    $('.eye1').click(function () {
        if ($(this).hasClass('fa-eye-slash')) {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $('#password').attr('type', 'text');


        } else {
            $(this).removeClass('fa-eye');
            $(this).addClass('fa-eye-slash');
            $('#password').attr('type', 'password')

        }
    });




});


// index jquery
$(document).ready(function () {
    const $profileBtn = $('#profileBtn');
    const $profileDropdown = $('#profileDropdown');
    const $searchBtn = $('#searchBtn');
    const $searchBar = $('#searchBar');
    const $navbar = $('.navbar');

    $profileBtn.on('click', function (event) {
        event.stopPropagation();
        $profileDropdown.toggle();
    });

    $searchBtn.on('click', function (event) {
        event.stopPropagation();
        $(this).toggleClass('active');
        $searchBar.toggleClass('active');
        $navbar.toggleClass('active');
        if ($searchBar.hasClass('active')) {
            $searchBar.focus();
        }
    });

    $(document).on('click', function (event) {
        if (!$profileBtn.is(event.target) && !$profileDropdown.is(event.target) && !$profileDropdown.has(event.target).length) {
            $profileDropdown.hide();
        }
    });
});


//  mobile dashboard
$(document).ready(function () {
    $("#toggleBtn").click(function () {
        $("#sidebar").css("right", "0");
    });

    $("#closeBtn").click(function () {
        $("#sidebar").css("right", "-250px");
    });
});




// investor profile
function showUploadOption() {
    document.getElementById("photoUpload").style.display = "block";
    document.getElementById("photoInput").click();
}

function triggerPhotoUpload() {
    document.getElementById("photoInput").click();
}

function displayPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.querySelector(".icon").style.backgroundImage =
                url("${e.target.result}");
            document.querySelector(".icon").style.backgroundSize = "cover";
            document.querySelector(".icon").style.backgroundPosition = "center";
            document.querySelector(".icon").style.backgroundColor =
                "transparent";
            document.querySelector(".icon").textContent = "";
        };
        reader.readAsDataURL(file);
    }
}
// save form
function saveForm() {
    document.getElementById("firstName").disabled = true;
    document.getElementById("lastName").disabled = true;
    document.getElementById("country").disabled = true;
    document.getElementById("dob").disabled = true;
    document.getElementById("nationId").disabled = true;
    document.getElementById("photoInput").disabled = true;
    document.getElementById("photoUpload").disabled = true;
    document.getElementsByClassName('photoUpload2').disabled = true;


    document.getElementById("editBtn").style.display = "inline-block";

    document.querySelector("#btnText").innerHTML = "saved";
    document.querySelector("#saveBtn").classList.add("active");
}

function editForm() {
    document.getElementById("firstName").disabled = false;
    document.getElementById("lastName").disabled = false;
    document.getElementById("country").disabled = false;
    document.getElementById("photoInput").disabled = false;
    document.getElementsByClassName('photoUpload2').disabled = false;
    // document.getElementById('photoUpload').disabled = false;

    document.getElementById("saveBtn").style.display = "inline-block";

    document.querySelector("#btnText").innerHTML = "submit";
    document.querySelector("#saveBtn").classList.remove("active");
}


// form validadtion for investor profile

$(document).ready(function () {
    $('#saveBtn').click(function () {

        $('.error').remove();


        var firstName = $('#firstName').val().trim();
        var lastName = $('#lastName').val().trim();
        var dob = $('#dob').val().trim();
        var country = $('#country').val();
        var nationId = $('#nationId').val();
        var photoUpload = $('#photoUpload').val();
        var photoUpload2 = $('#photoUpload2').val();


        if (firstName === '') {
            $('#firstName').after('<span class="error">First Name is required.</span>');
        }


        if (lastName === '') {
            $('#lastName').after('<span class="error">Last Name is required.</span>');
        }


        if (dob === '') {
            $('#dob').after('<span class="error">Date of Birth is required.</span>');
        } else {

        }


        if (nationId === '' || nationId === 'Country of Citizenship') {
            $('#nationId').after('<span class="error">Country of Citizenship is required.</span>');
        }


        if (photoUpload === '') {
            $('#photoUpload').after('<span class="error">Photo Upload is required.</span>');
        }


        if (photoUpload2 === '') {
            $('#photoUpload2').after('<span class="error">Photo Upload is required.</span>');
        }


        if ($('.error').length > 0) {
            return false;
        }


        alert('Form is valid. Proceed with form submission.');
    });


    $('#editBtn').click(function () {

        $('#firstName, #lastName, #dob, #country, #nationId, #photoUpload,#photoUpload2').prop('disabled', false);
        $('#saveBtn').show();
        $(this).hide();
    });
});




