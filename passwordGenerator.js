
$('#button').on('click', ()=>{

function generatePassword() {
    let length = $('#length').val(), 
    regex = /[0-9]/,
    //use extra special characters to ensure it is selected more often
        characters = "0123456789*-/:;(),'\[]~^_{}!@&?.$abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        generated = "";
        if (regex.test(length)!=false) {
        for (var i = 0, x = characters.length; i < length; ++i) {
        generated += characters.charAt(Math.floor(Math.random() * x));
        }
       
    return generated;
        	
        }else {
        	alert('input a number');
        	$('#length').focus();
        	$('#length').val("");
        }
    
   
    }


$('#password').html( generatePassword());

});


