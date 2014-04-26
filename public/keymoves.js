document.onkeypress = function(e) {

  console.log(e.which);

  switch (e.which) {
    case 106:
      postDirection('u');
      break;
    case 102:
      postDirection('ur');
      break;
    case 108:
      postDirection('dr');
      break;
    case 115:
      postDirection('d');
      break;
    case 109:
      postDirection('rr');
      break;
    case 117:
      postDirection('r');
      break;
    case 118:
      postDirection('l');
      break;
    case 114:
      postDirection('lr');
      break;
    case 46:
      postDirection('f');
      break;
    case 111:
      postDirection('b');
      break;
    case 120:
      postDirection('fr');
      break;
    case 119:
      postDirection('br');
      break;

    case 103:
      turn();
      break;
    case 104:
      turnr();
      break;
    case 121:
      turnOver();
      break;
    case 116:
      turnOverr();
      break;

    // case 113:
    //   reset();
    //   break;
    // case 122:
    //   scramble();
    //   break;
  }
  return false
}


document.onkeydown = function(e) {

  console.log(e.which);

  switch (e.which) {
    case 32:
      document.getElementById("scene").style.webkitTransform = "rotateX(20deg) rotateY(-205deg)";
      return false
      break;
  }
}

document.onkeyup = function(e) {

  console.log(e.which);

  switch (e.which) {
    case 32:
      document.getElementById("scene").style.webkitTransform = "rotateX(-20deg) rotateY(-25deg)";
      return false
      break;
  }
}
