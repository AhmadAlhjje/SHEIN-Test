
$("#BestSellers1").hide();
$("#ard").click(function(){$("#BestSellers1").fadeIn(1000)});

$("#Offers12").hide();
$("#ard1").click(function(){$("#Offers12").fadeIn(1000)});

$("#Offers13").hide();
$("#ard2").click(function(){$("#Offers13").fadeIn(1000)});

$("#Offers14").hide();
$("#ard3").click(function(){$("#Offers14").fadeIn(1000)});

$(document).ready(function(){$(".fa-user").mouseenter(function(){
    $(".none").fadeIn()
})
});
$(document).ready(function(){$(".fa-user").mouseleave(function(){
    $(".none").fadeOut()
})
});
$(document).ready(function(){$(".none").mouseenter(function(){
    $(".none").fadeIn()
})
});

$(document).ready(function(){$(".none").mouseleave(function(){
    $(".none").fadeOut()
})
});


$(document).ready(function(){$(".fa-coins").mouseenter(function(){
    $(".currency").fadeIn()
})
});
$(document).ready(function(){$(".fa-coins").mouseleave(function(){
    $(".currency").fadeOut()
})
});
$(document).ready(function(){$(".currency").mouseenter(function(){
    $(".currency").fadeIn()
})
});

$(document).ready(function(){$(".currency").mouseleave(function(){
    $(".currency").fadeOut()
})
});
