$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".my-nav ").css("background" , "#fff");
        }
  
        else{
            $(".my-nav ").css("background" , "");  	
        }
    })
  })
///////////////////////////////////////////////////////
$(function () {
 
  $(".rateYo").rateYo({
    maxValue: 1,
    numStars: 5,
    starWidth: "18px",
   
    
  });
 
});
///////////////////////////////

function womenchangeimg(url1 ,url2) {
  document.getElementById("womanImg1").src = url1;
  document.getElementById("woman1").src = url2;

  }
  function womenchangeimg2(url1 ,url2) {
    document.getElementById("womanimg2").src = url1;
    document.getElementById("woman2").src = url2;
  
    }
    function womenchangeimg3(url1 ,url2) {
      document.getElementById("womanimg3").src = url1;
      document.getElementById("woman3").src = url2;
    
      }
  
 function womenchangeimg5(url1 ,url2) {
          document.getElementById("womanimg5").src = url1;
          document.getElementById("woman5").src = url2;
        
  }
  function womenchangeimg6(url1 ,url2) {
    document.getElementById("womanimg6").src = url1;
    document.getElementById("woman6").src = url2;
  
}
function womenchangeimg7(url1 ,url2) {
  document.getElementById("womanimg7").src = url1;
  document.getElementById("woman7").src = url2;

}
function womenchangeimg8(url1 ,url2) {
  document.getElementById("womanimg8").src = url1;
  document.getElementById("woman8").src = url2;

}
function womenchangeimg9(url1 ,url2) {
  document.getElementById("womanimg9").src = url1;
  document.getElementById("woman9").src = url2;

}


function closeSidebar() {
  document.getElementById("sidebar-link").style.left="-100%"
  
}
function respChangeimg(url,e) {
  document.getElementById("layoutImg").src = url;
 
 
  let parentt = document.getElementById("layoutImg");
  let imgg_child = parentt.children;
  for (i = 0; i < imgg_child.length; i++) {
  imgg_child[i].classList.remove('active')
  }
  e.classList.add('active');
  
  }

function changeIMG(url,color,e) {
  document.getElementById("sliders").src = url;
  document.getElementById("sliders").style.zIndex="222222";
  document.getElementById("color").innerHTML =color;
  let parentt = document.getElementById("changeIMG");
  let imgg_child = parentt.children;
  for (i = 0; i < imgg_child.length; i++) {
  imgg_child[i].classList.remove('active')
  }
  e.classList.add('active');
  
  }
  
    function changeSize(size) {
    document.getElementById("size").innerHTML=size;
    let parentt = document.getElementById("parentBtn");
    let btn_child = parentt.children;
    for (i = 0; i < btn_child.length; i++) {
    btn_child[i].classList.remove('active')
    }
    e.classList.add('active');
    
    }
    function decreament(idName) {
      document.getElementsByClassName("x").id=idName.id;
      let value= parseInt(document.getElementById(idName.id).innerHTML);
     
      if (value<=1) {
        document.getElementById(idName.id).innerHTML="1";
      }else{
        value-=1; 
      
        document.getElementById(idName.id).innerHTML=value;
      }
      

      
    }
    function increament(idName) {
      document.getElementsByClassName("x").id=idName.id;
      let value= parseInt(document.getElementById(idName.id).innerHTML);
          value+=1; 
         document.getElementById(idName.id).innerHTML=value;
       }

///////////////////////////////////////////////////////////

function mySidebar() {
    document.getElementById("sidebar-link").style.left = "0%";
    document.getElementById("sidebar-link").style.zIndex = "11111111";
    document.getElementById("sidebar-link").style.backgroundColor = "white";


}

//////////////////////
(function () {
    "use strict";

    // Vertical Slider object
    const vertical_slider = {

        // Slide class name
        slider_class: ".slider",

        // Show slide
        show_slide: function (slide_id, context_item) {
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
            if (slide_container) {
                const slides = slide_container.querySelectorAll(".slide");
                if (slides && slides[slide_id]) {

                    // Scroll to active slide
                    slide_container.scrollTo({
                        top: slides[slide_id].offsetTop,
                        behavior: "smooth"
                    });


                    // Set active context item
                    const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                    if (active_context_item) {
                        active_context_item.classList.remove("active");
                    }

                    context_item.classList.add("active");
                }
            }
        },

        // Initialize slide
        init_slider: function (slider) {

            const navigation_items = slider.querySelectorAll(".slide_navigation a");

            if (navigation_items) {
                Object.keys(navigation_items).forEach(function (key) {
                    navigation_items[key].onclick = function (e) {
                        e.preventDefault();

                        vertical_slider.show_slide(key, navigation_items[key]);
                    };
                });
            }

        },

        // Initialize sliders
        init: function () {

            // Iterate over each slider
            document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

        }
    };

    // Initialize sliders
    vertical_slider.init();
}());


  

    function alertMsg(){
      alert("Are you sure you want to report this review as inappropriate?");
    }
    

    function writeReview(){
      document.getElementById("writeReview").style.display="block";
    }
    function hiddenReview(){
      document.getElementById("writeReview").style.display="none";
    }

    function remove() {

      document.getElementById("alert-msg").style.display="none";
      
    }
    function cartSide() {
      document.getElementById("cart-sidebar").style.display="block";
      document.getElementById("cart-sidebar").style.zIndex="88888888";
    }
    function closeCart() {
      document.getElementById("cart-sidebar").style.display="none";
    }
   



    // Countdown Time 

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      var daysSpan = clock.querySelector(".days");
      var hoursSpan = clock.querySelector(".hours");
      var minutesSpan = clock.querySelector(".minutes");
      var secondsSpan = clock.querySelector(".seconds");
  
      function updateClock() {
        var t = getTimeRemaining(endtime);
  
        if (t.total <= 0) {
          clearInterval(timeinterval);
  
          var newTime = Date.parse(endtime);
          var nowTime = Date.parse(new Date());
  
          while (newTime <= nowTime) {
            newTime = newTime + 1 * 24 * 60 * 60 * 1000; // add 24hours
          }
  
          var deadline = new Date(newTime);
          initializeClock('countdown', deadline);
        } else {
          daysSpan.innerHTML=2672;
          hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
          minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
          secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
        }
      }
  
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
  
    var deadline = "December 7 2019 00:00:00 GMT+0200";
    initializeClock("countdown", deadline);

function searchSide() {
  document.getElementById('search-bar').style.opacity="1";
}

function closeSearch() {
  document.getElementById('search-bar').style.opacity="0";
}


// date Input
function init() {
  
  var _inputs = document.getElementsByTagName('input');

  for (var i = 0; i < _inputs.length; i++) {

      if(!Modernizr.inputtypes[_inputs[i].type]) {
          _inputs[i].className = 'not-supported';
      }

      _inputs[i].parentNode.getElementsByClassName('result')[0].innerHTML = _inputs[i].value;

      _inputs[i].onchange = function () {
          //console.log(this.value);
          var result_node = this.parentNode.getElementsByClassName('result');
          result_node[0].innerHTML = this.value;
      }
  }
}

window.onload = init;



//ZOOM IMAGE

function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}


  
    