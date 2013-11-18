    
var snapBack = true

var savex = -25;
var savey =  20;

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

    
    function reset() {
      $.ajax({  url: "reset",
                type: "POST",
                data: {state: "this one doesn't matter cause it returns a new cube"},
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() },
      })
    } 


    function scramble() {
        $.ajax({
            url: "scramble",
            type: "POST",
            data: {
            state: "doesn't matter cause sinatra returns new cube"
            },
            success: function (response) {
                cubestate = response;
                console.log(cubestate);
                document.getElementById('history').innerHTML = ""  // response[1]; 
                updateBackgrounds3d()
            },
        })
    }


    function u() {
      $.ajax({  url: "u",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function d() {
      $.ajax({  url: "d",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function l() {
      $.ajax({  url: "l",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() },
      })
    }

    function r() {
      $.ajax({  url: "r",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function b() {
      $.ajax({  url: "b",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function f() {
      $.ajax({  url: "f",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function ur() {
      $.ajax({  url: "ur",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function dr() {
      $.ajax({  url: "dr",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function lr() {
      $.ajax({  url: "lr",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() },
      })
    }

    function rr() {
      $.ajax({  url: "rr",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function br() {
      $.ajax({  url: "br",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }

    function fr() {
      $.ajax({  url: "fr",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { 
                  cubestate = response ; 
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }




    function solve() {
      $.ajax({  url: "solve",
                type: "POST",
                data: {state: cubestate, hist: Array.new},
                dataType: "json",
                success: function(response) { 
                  cubestate = response[0] ; 
                  console.log(response); 
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
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
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
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
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
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
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
                  console.log(cubestate); 
                  document.getElementById('history').innerHTML = ""  // response[1]; 
                  updateBackgrounds3d() 
                },
      })
    }   

    function updateBackgrounds() {
        $("#top > .face0").css("background-color", cubestate[0][0]);
        $("#top > .face1").css("background-color", cubestate[0][1]);
        $("#top > .face2").css("background-color", cubestate[0][2]);
        $("#top > .face3").css("background-color", cubestate[0][3]);
        $("#top > .face4").css("background-color", cubestate[0][4]);
        $("#top > .face5").css("background-color", cubestate[0][5]);
        $("#top > .face6").css("background-color", cubestate[0][6]);
        $("#top > .face7").css("background-color", cubestate[0][7]);
        $("#top > .face8").css("background-color", cubestate[0][8]);
        $("#top > .face9").css("background-color", cubestate[0][9]);

        $("#left > .face0").css("background-color", cubestate[1][0]);
        $("#left > .face1").css("background-color", cubestate[1][1]);
        $("#left > .face2").css("background-color", cubestate[1][2]);
        $("#left > .face3").css("background-color", cubestate[1][3]);
        $("#left > .face4").css("background-color", cubestate[1][4]);
        $("#left > .face5").css("background-color", cubestate[1][5]);
        $("#left > .face6").css("background-color", cubestate[1][6]);
        $("#left > .face7").css("background-color", cubestate[1][7]);
        $("#left > .face8").css("background-color", cubestate[1][8]);
        $("#left > .face9").css("background-color", cubestate[1][9]);

        $("#back > .face0").css("background-color", cubestate[2][0]);
        $("#back > .face1").css("background-color", cubestate[2][1]);
        $("#back > .face2").css("background-color", cubestate[2][2]);
        $("#back > .face3").css("background-color", cubestate[2][3]);
        $("#back > .face4").css("background-color", cubestate[2][4]);
        $("#back > .face5").css("background-color", cubestate[2][5]);
        $("#back > .face6").css("background-color", cubestate[2][6]);
        $("#back > .face7").css("background-color", cubestate[2][7]);
        $("#back > .face8").css("background-color", cubestate[2][8]);
        $("#back > .face9").css("background-color", cubestate[2][9]);

        $("#right > .face0").css("background-color", cubestate[3][0]);
        $("#right > .face1").css("background-color", cubestate[3][1]);
        $("#right > .face2").css("background-color", cubestate[3][2]);
        $("#right > .face3").css("background-color", cubestate[3][3]);
        $("#right > .face4").css("background-color", cubestate[3][4]);
        $("#right > .face5").css("background-color", cubestate[3][5]);
        $("#right > .face6").css("background-color", cubestate[3][6]);
        $("#right > .face7").css("background-color", cubestate[3][7]);
        $("#right > .face8").css("background-color", cubestate[3][8]);
        $("#right > .face9").css("background-color", cubestate[3][9]);

        $("#front > .face0").css("background-color", cubestate[4][0]);
        $("#front > .face1").css("background-color", cubestate[4][1]);
        $("#front > .face2").css("background-color", cubestate[4][2]);
        $("#front > .face3").css("background-color", cubestate[4][3]);
        $("#front > .face4").css("background-color", cubestate[4][4]);
        $("#front > .face5").css("background-color", cubestate[4][5]);
        $("#front > .face6").css("background-color", cubestate[4][6]);
        $("#front > .face7").css("background-color", cubestate[4][7]);
        $("#front > .face8").css("background-color", cubestate[4][8]);
        $("#front > .face9").css("background-color", cubestate[4][9]);

        $("#bottom > .face0").css("background-color", cubestate[5][0]);
        $("#bottom > .face1").css("background-color", cubestate[5][1]);
        $("#bottom > .face2").css("background-color", cubestate[5][2]);
        $("#bottom > .face3").css("background-color", cubestate[5][3]);
        $("#bottom > .face4").css("background-color", cubestate[5][4]);
        $("#bottom > .face5").css("background-color", cubestate[5][5]);
        $("#bottom > .face6").css("background-color", cubestate[5][6]);
        $("#bottom > .face7").css("background-color", cubestate[5][7]);
        $("#bottom > .face8").css("background-color", cubestate[5][8]);
        $("#bottom > .face9").css("background-color", cubestate[5][9]);
    }

    function updateBackgrounds3d() {
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


    reset();
    updateBackgrounds3d();
