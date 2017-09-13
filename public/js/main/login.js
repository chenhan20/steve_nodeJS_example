$(document).ready (function(){
    $('.alert_error').hide();
})

/**
 * chk()
 * 此function為點下submit後先onsubmit進入的function
 * 若輸入格式不符則直接回傳false，就不會進入後端
 * @param username 使用者輸入的帳號
 * @param password 使用者輸入的密碼
 */
function chk(){
    var username=$('.username').val();
    var password=$('.password').val();
   // console.log(username+password);
    if(username==''){
        $('.alert_error').show();
        $('.alert_error_message').text("帳號不可為空");
        $('.username').focus();
        $(".alert_error").fadeTo(1000, 500).slideUp(500);//顯示後滑出
        return false;        
    }else if(password==''){
        $('.alert_error').show();        
        $('.alert_error_message').text("密碼不可為空");        
        $('.password').focus();    
        $(".alert_error").fadeTo(1000, 500).slideUp(500);//顯示後滑出        
        return false;
    }
    return true;
}

//facebook javascript SDK
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1646925882015567',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.10'
  });
  FB.AppEvents.logPageView();   
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

 FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});
