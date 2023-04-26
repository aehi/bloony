$(function(){
    $('.con:not(:first)').hide();
    $('.tab li a').click(function(){
        var link_li = $(this).attr('href');
        
        $('.con').hide();
        $(link_li).show();
        
        $('.tab li').removeClass('active');
        $(this).parent().addClass('active');
        
        return false;
    })
});