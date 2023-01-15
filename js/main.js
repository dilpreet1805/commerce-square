$(document).on('click','#notifToggleBtn',function(){

    if($('.notification-sidediv').hasClass('close'))
    {
        $('.notification-sidediv').addClass('open');
        $('.notification-sidediv').removeClass('close');
        $(this).html('X');
    }else
    {
        $('.notification-sidediv').addClass('close');
        $('.notification-sidediv').removeClass('open');
        $(this).html('Notification');
    }
});

$(document).on('click','#loginBtn',function(){
    if($('#loginForm').attr('hidden'))
    {
        $('#loginForm').attr('hidden',false);
        $('#registerHeaderForm').attr('hidden',true);
    }else
    {
        $('#loginForm').attr('hidden',true);
    }
});

$(document).on('click','#registerHeaderButton',function(){
    if($('#registerHeaderForm').attr('hidden'))
    {
        $('#registerHeaderForm').attr('hidden',false);
        $('#loginForm').attr('hidden',true);
    }else
    {
        $('#registerHeaderForm').attr('hidden',true);
    }
});