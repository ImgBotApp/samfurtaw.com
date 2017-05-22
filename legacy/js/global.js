$(document).ready(function() {
    $(".contentbox").mouseenter(function() {
        $(this).animate({ borderBottomWidth: '5px' }, "fast");
    });
    $(".contentbox").mouseleave(function() {
        $(this).animate({ borderBottomWidth: '2px' }, "fast");
    });
    $(".subcontentbox").mouseenter(function() {
        $(this).animate({ borderBottomWidth: '5px' }, "fast");
    });
    $(".subcontentbox").mouseleave(function() {
        $(this).animate({ borderBottomWidth: '2px' }, "fast");
    });
});