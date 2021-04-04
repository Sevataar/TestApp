const phoneInputField1 = document.querySelector("#phone-1");
   const phoneInput2 = window.intlTelInput(phoneInputField1, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });

   const phoneInputField2 = document.querySelector("#phone-2");
   const phoneInput1 = window.intlTelInput(phoneInputField2, {
     utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });