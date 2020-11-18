console.log('This would be the main JS file.');
(function(window,document,undefined){
    window.onload = setSidebarHeight;
    function setSidebarHeight(){
        var contentHeight = document.getElementById('main_content_wrap').style.height;
        document.getElementsByClassName("sidebar").style.height = contentHeight;
    }
})(window,document,undefined);


