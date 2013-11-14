    function reset() {
      $.ajax({  url: "reset",
                type: "POST",
                data: {state: "this one doesn't matter cause it returns a new cube"},
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
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
                updateBackgrounds()
            },
        })
    }


    function u() {
      $.ajax({  url: "u",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function d() {
      $.ajax({  url: "d",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function l() {
      $.ajax({  url: "l",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function r() {
      $.ajax({  url: "r",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function b() {
      $.ajax({  url: "b",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function f() {
      $.ajax({  url: "f",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
      })
    }

    function solve() {
      $.ajax({  url: "solve",
                type: "POST",
                data: {state: cubestate},
                dataType: "json",
                success: function(response) { cubestate = response ; console.log(cubestate); updateBackgrounds() },
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

    reset()
