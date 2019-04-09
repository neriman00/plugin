(function($){
$.fn.divP=function(option){
    var myOption={
        speed:'300',
        distance:'200',
        trigger:'click'
    }
    var settings=$.extend(myOption,option)
    $(this).on(settings.trigger,function(){
        $(this).css({
            'color':'yellow',
            'position':'relative'
        }).animate({
            'left':'+='+settings.distance+'px'
        },settings.speed)
    })
}
}(jQuery));
$('div ').divP({
    speed:1000,
    distance:500,
    trigger:'mouseover'
})