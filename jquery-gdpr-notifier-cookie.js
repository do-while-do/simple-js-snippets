$(document).ready(function(){
    var el_dom_ = 'body';   
    setTimeout(function () {
        var cv = '; ' + document.cookie;
        if (cv.indexOf('visitor-gdpr-notification=i agree') == -1) {
            $(el_dom_).after('<div id="cookieConsent" style=" background-color: rgba(20,20,20,0.8);min-height: 26px;font-size: 14px;color: #ccc;line-height: 26px;padding: 8px 0 8px 30px;position: fixed;bottom: 0;left: 0;right: 0;z-index: 9999;"><a id="closeCookieConsent" style="color: #fafafa;text-decoration: none;">x&nbsp;&nbsp;&nbsp;</a>Please accept our terms and conditions by clicking here <a href="#" class="cookieConsentOK" style="background-color: #fafafa;color: #000;display: inline-block;border-radius: 5px;padding: 0 20px;cursor: pointer;margin: 0 60px 0 10px;">OK</a></div>');
        }
     }, 2000);
    $(document).on('click', '#closeCookieConsent', function(){
        $("#cookieConsent").fadeOut(200);
    });
    $(document).on('click', '.cookieConsentOK', function(){
        var cv = '; ' + document.cookie;
        if (cv.indexOf('visitor-gdpr-notification=i agree') == -1) {
            var date = new Date();
            date.setTime(date.getTime() + (3*24*60*60*1000));
            var expires = "; expires=" + date.toGMTString();
            document.cookie = "visitor-gdpr-notification" + "=i agree"  + expires + ";path=/";
            $("#cookieConsent").fadeOut(200);
        }       
    });
});
