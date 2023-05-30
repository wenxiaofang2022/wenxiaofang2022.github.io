var targets  = $(".projects-box .project-slide .content");
var step = -316;
var sum = 0;
var times = 0;
// var lines = 8;
var lines = Math.ceil(LinkData.data.length/8);
// console.log("lines",lines);
// console.log($(".projects-box .project-slide .content .slider").find("a"));
var timer = setInterval(() => {
  sum = step + sum;
  // times++;
  // console.log("times",times);
  times = times+1;
  for(var m = 0;m<lines;m++){
    if(m==times-1){
      $(".projects-box .project-slide").eq(0).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(1).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(2).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(3).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(4).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(5).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(6).find(".content .slider a").eq(m).css("opacity","0");
      $(".projects-box .project-slide").eq(7).find(".content .slider a").eq(m).css("opacity","0");
    }
    else{
      $(".projects-box .project-slide").eq(0).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(1).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(2).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(3).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(4).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(5).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(6).find(".content .slider a").eq(m).css("opacity","1");
      $(".projects-box .project-slide").eq(7).find(".content .slider a").eq(m).css("opacity","1");
    }
  }
  if(times==lines-1||times>lines-1){
  // if(times==7||times>7){
    sum = 0;
    times = 0;
    $(".projects-box .project-slide .content").css("transform","translateY("+sum+"px)").css("transition","all 0s ease-out");;
  }
  else{
    $(".projects-box .project-slide .content").css("transform","translateY("+sum+"px)").css("transition","all .5s ease-out");
  }
},2000)