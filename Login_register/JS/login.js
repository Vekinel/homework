'use strict';
    var userName = prompt('Restricted Area', '');
    
    if (userName == 'Admin') {
    
      var pass = prompt('PasswdPLS', '');
    
      if (pass == 'wizard') {
        alert( 'Wellcome Back!' );
      } else if (pass == null) { // (*)
        alert( 'Access Denied!' );
      } else {
        alert( 'Wrong password' );
      }
    
    } else if (userName == null) { // (**)
      alert( 'Access Denied!' );
    
    } else {
    
      alert( 'you are not one of us!' );
    
    }