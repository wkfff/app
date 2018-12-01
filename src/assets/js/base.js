(function(){
    function resize(){
        var root = document.documentElement;
        var w = root.getBoundingClientRect().width;
        if(w>750){w=750}
        var fontSize = w/7.5+"px";        /*设计稿是750*/
        root.style.fontSize=fontSize;
    }
    resize();//一打开就执行一遍
    var t;
    window.addEventListener("resize",function(){
        clearTimeout(t);//来回不停旋转就需要先清除 在执行
        t =setTimeout(resize,300);
    })//旋转屏幕时
})();