$(document).ready(function () {
	d = new Date();
	if (d.getDay() == 2 || d.getDay() == 4) {
		if (d.getHours() > 15 && d.getHours() < 18) {
			$('object').text('This secret is disabled during CyberPatriot practice.');
		}
	};

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