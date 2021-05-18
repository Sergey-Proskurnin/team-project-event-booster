$(window).load(function() {
    var
    txtContainer = $("#txtContainer"),
	tl, 
	txt;
	
  function splitText(phrase) {
	var prevLetter, sentence,
    sentence = phrase.split("");
    $.each(sentence, function(index, val) {
      if(val === " "){
        val = "&nbsp;";
      }
      var letter = $("<div/>", {id : "txt" + index}).addClass('txt').html(val).appendTo(txtContainer);
	  if(prevLetter) {$(letter).css("left", ($(prevLetter).position().left + $(letter).width()) + "px");
	    };
	  prevLetter = letter;
	});
    txt = $(".txt");
  }
	 
	function buildTimeline() {
		
		TweenLite.set(txtContainer);
		
		tl = new TimelineMax({repeat:Infinity, repeatDelay:1, yoyo:true});
		tl.from(txt, 0, {left:'-=10px', ease:Back.easeOut});	
		tl.staggerFrom(txt, 0.4, {alpha:0}, 0.06, "textEffect");
		tl.staggerFrom(txt, 0.8, {rotationY:"-270deg", top:80, transformOrigin: "50% 50% -80", ease:Back.easeOut}, 0.06, "textEffect");
		tl.staggerTo(txt, 0.6, {rotationX:"360deg", color:"#ff0dbf", transformOrigin:"50% 50% 10"}, 0.02);	
	} 
	 	
	function init() {
    splitText("EVENT BOOSTER");
    buildTimeline();
    TweenLite.set($("#header"), {visibility:"visible"});
  } 	 
	init();
});