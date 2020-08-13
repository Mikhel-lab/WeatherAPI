// Select all elements of interest
const txtDOB = document.querySelector("#txtDOB");
const txtPassword1 = document.querySelector("#txtPassword1");
const txtEmail = document.querySelector("#txtEmail");
const emailDisplay = document.querySelector("#emailDisplay");
const txtTelephone = document.querySelector("#txtTelephone")
// alert("hello")

// Bind these elements to their respective event listeners...
txtEmail.addEventListener('blur', validateEmail);
txtPassword1.addEventListener('blur', validatePassword1);
txtPassword2.addEventListener('blur', validatePassword2);
txtDOB.addEventListener('blur', validateDOB);
txtTelephone.addEventListener('blur', validateTelephone);


// console.log(txtInput)

function validateTelephone() {
    let userTelephone = txtTelephone.value;
   
    let pattern = /^[234]\d{10}$/;
    
    var txtInput =  userTelephone.slice(1, 11)
    console.log(txtInput)
    var txtInput = userTelephone.replace(1, 3)

    if (pattern.test(userTelephone)) {
        txtTelephone.style.border = "seagreen 2px solid";
       
    }  else {
        txtTelephone.style.border = "red 2px solid";
        }

    }  


    function validatePassword1() {
        let userPassword1 = txtPassword1.value;
        
        let pattern = /^[a-zA-Z0-9#@-_+]{8,12}$/;
    
        if (pattern.test(userPassword1)) {
            txtPassword1.style.border = "seagreen 2px solid";
           
        }  else {
           txtPassword1.style.border = "red 2px solid";
            }
    
        }
        
        function validatePassword2() {
            let userPassword2 = txtPassword2.value;

            let pattern = /^[a-zA-Z0-9#@-_+]{8,12}$/;

            if (pattern.test(userPassword2)) {
                txtPassword2.style.border = "seagreen 2px solid";


            } else {
                txtPassword2.style.border = "red 2px solid";
            }
        }


        function validatePassword3 (e) {
            let userPassword1 = txtPassword1.value;
            let userPassword2 = txtPassword.value;

            let pattern = /^[a-zA-Z0-9#@-_+]{8,12}$/;

            if (pattern.test(userPassword1, userPassword2)) {
                
                e.target.value.style.border = "seagreen 2px solid"

            } else {
                e.target.value.style.border = "red 2px solid"
            }
        }
                    


        if(Form.txtPassword1.value != "" && form.txtPassword1.value == form.txtPassword2.value) {
            if(!checkPassword(form.txtPassword1.value)) {
                alert("Error: Please check that you've entered and confirmed your password!");
            form.pwd1.focus();
            
            return false;
            }
        } else {
                alert("Error: Please check that you've entered and confirmed your password!");
                form.pwd1.focus();
                return false;
              }
              return true;
            










        function validateDOB () {
            let userDOB = txtDOB.value;

            let pattern = /^[0-9]{1,3}\/[0-9]{0,9}\/[0-9]{0,9}$/;


            

            if (pattern.test(userDOB)) {
                txtDOB.style.border = "seagreen 2px solid";

            

            } else {
                txtDOB.style.border = "red 2px solid";
            }
        }
    


        
    function validateEmail() {
        let userEmail = txtEmail.value;
        
        let pattern = /^\w+@\w+\.[a-z]{2,6}$/i;
    
        if (pattern.test(userEmail)) {
            txtEmail.style.border = "seagreen 2px solid";
           
        }  else {
                txtEmail.style.border = "red 2px solid";
            }
    
        }  




