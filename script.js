document.addEventListener('DOMContentLoaded', function () {

    let inputs = document.querySelectorAll('.input-wrapper input, .input-wrapper textarea');

    inputs.forEach(function(input) {
        let label = input.nextElementSibling;

        input.addEventListener('focus', function() {
            label.classList.add('hidden-label');
        });

        input.addEventListener('blur', function() {
            if (input.value === '') {
                label.classList.remove('hidden-label');
            }
        });
    });

});