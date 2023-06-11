import { isBlankOrEmpty } from '../../domain/util/validationUtil.js';

document.addEventListener('DOMContentLoaded', () => {

    $('.form-control').on('input', function () {
        var $field = $(this).closest('.form-group');
        if (this.value) {
            $field.addClass('field--not-empty');
        } else {
            $field.removeClass('field--not-empty');
        }
    });

    document.querySelector('.signinForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const email = $('#email').val();
        const password = $('#password').val();

        if (!isBlankOrEmpty(email) && !isBlankOrEmpty(password)) {
            $('.signinForm').submit();
            return;
        } else {
            const msg = 'Please provide both the Email and Password!';
            alert(msg);
        }
    });
})



// const test = "Hey My name is bob";
// console.log("Test", isBlankOrEmpty(test));