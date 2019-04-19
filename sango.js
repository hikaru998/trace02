$(function(){
    $('.tab-btn').click(function(){
        $('.article-wrapper').removeClass('is-active-item');
        $($(this).attr('href')).addClass('is-active-item');
    });
    var $newArticle = $('.new-article');
    var $recommendedArticle = $('.recommended-article');
    $newArticle.click(function(){
        $newArticle.addClass('is-active-btn');
        $recommendedArticle.removeClass('is-active-btn');
    });
    $recommendedArticle.click(function(){
        $recommendedArticle.addClass('is-active-btn');
        $newArticle.removeClass('is-active-btn');
    })
});