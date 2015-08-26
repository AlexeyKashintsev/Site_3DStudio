var pref = '';
var p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
for (var i=0;i<5;i++)
    pref+=p.charAt(Math.floor(Math.random()*p.length));
var url = location.href;
if (url.indexOf('#')!=-1)
    url = location.href.substr(0, location.href.indexOf('#'));
var src = 'http://shop.andreykozlov.ru/webforms/?subs=claim_Kurs_v_Mos&fields=phone&fields_required=phone&button_text=%D0%97%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C&button_class=g-button,blue&droplist=&fslink=http://shop.andreykozlov.ru/webform/done/&form_id=6751&width=240&__pref='+pref+'&__parent='+encodeURIComponent(url);
var delay = Math.round(Math.random()*20)+30;
if (typeof UpdateFormHeight != 'function') {
    function UpdateFormHeight(pref, frame) {
        var h=null;
        if (!h) {
            var re = new RegExp("^#"+pref+"(\\d+)");
            if (location.hash.match(re)) {
                h=RegExp.$1;
                location.hash = '';
            }
        }
        if (!h)
        for (var i=0; i<2000; i+=10)
            if (top.frames[pref+i]) {
                h=i;
                break;
            }
        if (h)
            frame.style.height=h+'px';
        setTimeout(function(){ UpdateFormHeight(pref, frame); }, delay*4);
    }
}
var html = '<iframe src="'+src+ '" frameborder="0" scrolling="no" style="width:460px;overflow:hidden;" onload="var th=this; setTimeout(function(){ UpdateFormHeight(pref, th); }, '+delay+')"></iframe>';
document.write(html);