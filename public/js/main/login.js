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