function student(){
        $('.student').slideDown(1500);
        $('.parent').hide();
        $('.teacher').hide();
        
    
    
}
function teacher(){
 
        $('.parent').hide();
        $('.student').hide();
        $('.teacher').slideDown(1500);
    
    
 
}
function parents(){
 
    $('.teacher').hide()
    $('.student').hide();
    $('.parent').slideDown(1500);
    
   
    
}

function registerion(){
    $('.login_headers').hide()
    $('.registerion').slideDown(1000);
    window.scrollTo(0, 0)
}
function login(){
    $('.registerion').hide();
    $('.login_headers').slideDown(1000)
    window.scrollTo(0, 0)
}
function gologin(){
    window.location.href="../login/login.html"
  }


