// ( function( $ ) {
// $( '.check' ).on( 'keydown', function () {
//     var fields;
//         fields = "";
//      if( $(this).val().length == 0 ||$(this).val().value =='' )
//             {
//                 fields ='1';
//                 $(this).parent().find('.error').addClass( 'inputerror' );
//             } 
//             else{
//                 $( this ).parent().find('.error').removeClass( 'inputerror' );  
//             }
//         let passwordValue =$('#password').val();
//         if ((passwordValue.length < 3)||(passwordValue.length > 10)) {
//              $('#p').show();
//              $('#p').html("**length of your password must be between 3 and 10");
//              $('#p').css("color", "red");
//         } 
//         else 
//         {
//             $('#p').hide();
//         }
// });
// $( '.check' ).on( 'keyup', function() {
//     $( this ).parent().find('.error').removeClass( 'inputerror' );
// });
// $('#submit').click(function () {
//    $('.error').addClass('inputerror');
//    return false;
// });
// })( jQuery );

(function($) {
    $('#submit').on('click', function() {


        var fields;
        fields = "";
        var _grandParent = $(this).parents();

        if (_grandParent.find('#name').length == 1) {

            if ($("#name").val().length == 0 || $("#name").val().value == '') {
                fields = '1';
                $('#f').addClass('inputerror');
            }
        }
        if (_grandParent.find('#email').length == 1) {
            if ($("#email").val().length == 0 || $("#email").val().value == '') {
                fields = '1';
                $('#e').addClass('inputerror');
            }
        }
        if (_grandParent.find('#password').length == 1) {
            if ($("#password").val().length == 0 || $("#password").val().value == '') {
                fields = '1';
                $('#p').addClass('inputerror');
            }
        }
        if (_grandParent.find('#conpass').length == 1) {
            if ($("#conpass").val().length == 0 || $("#conpass").val().value == '') {
                fields = '1';
                $('#cp').addClass('inputerror');
            }
        }
        if (_grandParent.find('#gender').length == 1) {
            if ($("#gender").val().length == 0 || $("#gender").val().value == '') {
                fields = '1';
                $('#g').addClass('inputerror');
            }
        }
        if (_grandParent.find('#phone').length == 1) {
            if ($("#phone").val().length == 0 || $("#phone").val().value == '') {
                fields = '1';
                $('#ph').addClass('inputerror');
            }
        }
        if (_grandParent.find('#address').length == 1) {
            if ($("#address").val().length == 0 || $("#address").val().value == '') {
                fields = '1';
                $('#a').addClass('inputerror');
            }
        }
        if (_grandParent.find('#city').length == 1) {


            if ($("#city").value == 'select') {

                fields = '1';
                $('#ci').addClass('inputerror');
            }
        }

        if (fields != "") {
            return false;
        } else {
            return true;
        }
    });
    $('#name').on('keydown', function() {
        var _grandParent = $(this).parents();

        if (_grandParent.find('#name').length == 1) {
            if ($("#name").val().length == 0 || $("#name").val().value == '') {
                fields = '1';
                $('#f').addClass('inputerror');
            } else {
                $('#f').removeClass('inputerror');
            }
        }
    });
    $('#email').on('keydown', function() {
        var re = new RegExp();
        re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var sinput;
        sinput = "";
        sinput = $('#email').val();
        if (!re.test(sinput)) {
            fields = '1';
            $('#e').addClass('inputerror');
        } else {

            $('#e').removeClass('inputerror');
        }
    });
    $('#password').keyup(function() {
        validatePassword();
    });

    function validatePassword() {
        let passwordValue =
            $('#password').val();
        if ((passwordValue.length < 3) ||
            (passwordValue.length > 10)) {
            $('#p').addClass('inputerror');
            $('#p').html("**length of your password must be between 3 and 10");
            $('#p').css("color", "red");
            passwordError = false;
            return false;
        } else {
            $('#p').removeClass('inputerror');
        }
    }

    $('#conpass').keyup(function() {
        validateConfirmPassword();
    });

    function validateConfirmPassword() {
        let confirmPasswordValue =
            $('#conpass').val();
        if (confirmPasswordValue.length == '') {
            $('#cp').addClass('inputerror');
            confirmPasswordError = false;
            return false;
        }
        let passwordValue =
            $('#password').val();
        if (passwordValue != confirmPasswordValue) {
            $('#cp').addClass('inputerror');
            $('#cp').html(
                "**Password didn't Match");
            $('#cp').css(
                "color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $('#cp').removeClass('inputerror');
        }
    }

})(jQuery);
// $( '.check' ).on( 'keyup', function() {
//         $( this ).parent().find('.error').removeClass( 'inputerror' );

//     });