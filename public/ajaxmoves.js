var snapBack = true
var savex = -25;
var savey =  20;

// var floating = false
// var float = function() {

//   if (floating == 9) {
//     var x = Math.floor((Math.random() * 300) +1)
//     var y = Math.floor((Math.random() * 300) +1);

//     document.getElementById("scene").style.transition = "all 3s"
//     document.getElementById("scene").style.webkitTransform = "rotateX(" + -y + "deg) rotateY(" + x + "deg)";
//     setTimeout(float, 3000)
//  }
// }



document.onmousedown = function show_coords() {
    var starty = event.clientY - savey;
    var startx = event.clientX - savex;
    document.getElementById("scene").style.transition = "all 0s"


  document.onmousemove = function() {
    if (snapBack === false) {
      document.getElementById("white").innerHTML = "U";
      document.getElementById("red").innerHTML = "B";
      document.getElementById("blue").innerHTML = "L";
      document.getElementById("orange").innerHTML = "F";
      document.getElementById("green").innerHTML = "R";
      document.getElementById("yellow").innerHTML = "D";
    };

    event.preventDefault()

    var y = (event.clientY - starty) % 360;
    var x = (event.clientX - startx) % 360;

    document.getElementById("scene").style.webkitTransform = "rotateX(" + -y + "deg) rotateY(" + x + "deg)";

    document.onmouseup = function() {
      document.onmousemove = null;

      document.getElementById("scene").style.transition = "all 0.2s ease-in-out"

      if (snapBack === true) {
        savex = -25;
        savey =  20;
        document.getElementById("scene").style.webkitTransform = "rotateX(-20deg) rotateY(-25deg)";

      }else if (snapBack === false) {
        savex = x; savey = y;
      }
    }
  }
}

function snapback() {
  snapBack = !snapBack;
  savex = -25;
  savey =  20;
  document.getElementById("scene").style.webkitTransform = "rotateX(-20deg) rotateY(-25deg)";

  document.getElementById("white").innerHTML = "<IMG SRC='logo.gif' ALT='' WIDTH=70 HEIGHT=32 style='opacity: 0.7' >";
  document.getElementById("red").innerHTML = "";
  document.getElementById("blue").innerHTML = "";
  document.getElementById("orange").innerHTML = "";
  document.getElementById("green").innerHTML = "";
  document.getElementById("yellow").innerHTML = "";
}


var history = new Array();
console.log(history);


function postDirection(direction) {
  $.ajax({  url: 'move',
            type: 'POST',
            data: {state: cubestate, direction: direction},
            dataType: "json",
            success: function(response) {
              cubestate = response ;
              // console.log(cubestate);
              document.getElementById('history').innerHTML = ""
              updateBackgrounds3d()
            },
  })
}

function reset() {

  $.ajax({  url: "reset",
            type: "POST",
            data: {state: "doesn't matter!"},
            success: function(response) {
              cubestate = response;
              console.log(cubestate);
              document.getElementById('history').innerHTML = "";
              updateBackgrounds3d(); },
  });
  floating = true;
}

function scramble() {
    $.ajax({
        url: "scramble",
        type: "POST",
        data: {
        state: "doesn't matter cause sinatra returns new cube"
        },
        success: function(response) {
            cubestate = response;
            // console.log(cubestate);
            document.getElementById('history').innerHTML = ""
            updateBackgrounds3d()
        },
    })
  floating = false
  document.getElementById("scene").style.transition = "all 0.3s"
  document.getElementById("scene").style.webkitTransform = "rotateX(-20deg) rotateY(-25deg)";
}

function solve() {
  $.ajax({  url: "solve",
            type: "POST",
            data: {state: cubestate, hist: Array.new},
            dataType: "json",
            success: function(response) {
              cubestate = response[0] ;
              // console.log(response);
              document.getElementById('history').innerHTML = response[1];
              updateBackgrounds3d()
            }
  })
}


function turn() {
  $.ajax({  url: "turn",
            type: "POST",
            data: {state: cubestate},
            dataType: "json",
            success: function(response) {
              cubestate = response ;
              // console.log(cubestate);
              document.getElementById('history').innerHTML = ""
              updateBackgrounds3d()
            },
  })
}

function turnOver() {
  $.ajax({  url: "turnover",
            type: "POST",
            data: {state: cubestate},
            dataType: "json",
            success: function(response) {
              cubestate = response ;
              // console.log(cubestate);
              document.getElementById('history').innerHTML = ""
              updateBackgrounds3d()
            },
  })
}

function turnr() {
  $.ajax({  url: "turnr",
            type: "POST",
            data: {state: cubestate},
            dataType: "json",
            success: function(response) {
              cubestate = response ;
              // console.log(cubestate);
              document.getElementById('history').innerHTML = ""
              updateBackgrounds3d()
            },
  })
}


function turnOverr() {
  $.ajax({  url: "turnoverr",
            type: "POST",
            data: {state: cubestate},
            dataType: "json",
            success: function(response) {
              cubestate = response ;
              // console.log(cubestate);
              document.getElementById('history').innerHTML = ""
              updateBackgrounds3d()
            },
  })
}

function updateBackgrounds3d() {

    localStorage.setItem("cubestate", cubestate);

    $(".cub-1 > .face").css("background-color", cubestate[0][0]);
    $(".cub-2 > .face").css("background-color", cubestate[0][1]);
    $(".cub-3 > .face").css("background-color", cubestate[0][2]);
    $(".cub-4 > .face").css("background-color", cubestate[0][3]);
    $(".cub-5 > .face").css("background-color", cubestate[0][4]);
    $(".cub-6 > .face").css("background-color", cubestate[0][5]);
    $(".cub-7 > .face").css("background-color", cubestate[0][6]);
    $(".cub-8 > .face").css("background-color", cubestate[0][7]);
    $(".cub-9 > .face").css("background-color", cubestate[0][8]);

    $(".cube-10 > .face").css("background-color", cubestate[1][0]);
    $(".cub-11 > .face").css("background-color", cubestate[1][1]);
    $(".cub-12 > .face").css("background-color", cubestate[1][2]);
    $(".cub-13 > .face").css("background-color", cubestate[1][3]);
    $(".cub-14 > .face").css("background-color", cubestate[1][4]);
    $(".cub-15 > .face").css("background-color", cubestate[1][5]);
    $(".cub-16 > .face").css("background-color", cubestate[1][6]);
    $(".cub-17 > .face").css("background-color", cubestate[1][7]);
    $(".cub-18 > .face").css("background-color", cubestate[1][8]);

    $(".cub-19 > .face").css("background-color", cubestate[2][0]);
    $(".cub-20 > .face").css("background-color", cubestate[2][1]);
    $(".cub-21 > .face").css("background-color", cubestate[2][2]);
    $(".cub-22 > .face").css("background-color", cubestate[2][3]);
    $(".cub-23 > .face").css("background-color", cubestate[2][4]);
    $(".cub-24 > .face").css("background-color", cubestate[2][5]);
    $(".cub-25 > .face").css("background-color", cubestate[2][6]);
    $(".cub-26 > .face").css("background-color", cubestate[2][7]);
    $(".cub-27 > .face").css("background-color", cubestate[2][8]);

    $(".cub-28 > .face").css("background-color", cubestate[3][0]);
    $(".cub-29 > .face").css("background-color", cubestate[3][1]);
    $(".cub-30 > .face").css("background-color", cubestate[3][2]);
    $(".cub-31 > .face").css("background-color", cubestate[3][3]);
    $(".cub-32 > .face").css("background-color", cubestate[3][4]);
    $(".cub-33 > .face").css("background-color", cubestate[3][5]);
    $(".cub-34 > .face").css("background-color", cubestate[3][6]);
    $(".cub-35 > .face").css("background-color", cubestate[3][7]);
    $(".cub-36 > .face").css("background-color", cubestate[3][8]);

    $(".cub-37 > .face").css("background-color", cubestate[4][0]);
    $(".cub-38 > .face").css("background-color", cubestate[4][1]);
    $(".cub-39 > .face").css("background-color", cubestate[4][2]);
    $(".cub-40 > .face").css("background-color", cubestate[4][3]);
    $(".cub-41 > .face").css("background-color", cubestate[4][4]);
    $(".cub-42 > .face").css("background-color", cubestate[4][5]);
    $(".cub-43 > .face").css("background-color", cubestate[4][6]);
    $(".cub-44 > .face").css("background-color", cubestate[4][7]);
    $(".cub-45 > .face").css("background-color", cubestate[4][8]);

    $(".cub-46 > .face").css("background-color", cubestate[5][0]);
    $(".cub-47 > .face").css("background-color", cubestate[5][1]);
    $(".cub-48 > .face").css("background-color", cubestate[5][2]);
    $(".cub-49 > .face").css("background-color", cubestate[5][3]);
    $(".cub-50 > .face").css("background-color", cubestate[5][4]);
    $(".cub-51 > .face").css("background-color", cubestate[5][5]);
    $(".cub-52 > .face").css("background-color", cubestate[5][6]);
    $(".cub-53 > .face").css("background-color", cubestate[5][7]);
    $(".cub-54 > .face").css("background-color", cubestate[5][8]);
}

function partition(items, size) {
    var p = [];
    for (var i=Math.floor(items.length/size); i-->0; ) {
        p[i]=items.slice(i*size, (i+1)*size);
    }
    return p;
}


$(function() {
  if (!localStorage.getItem("cubestate")) {
    reset();
  } else {
    cubestate = partition(localStorage.getItem("cubestate").split(","), 9);
  };

  console.log(cubestate);
  updateBackgrounds3d();
});
