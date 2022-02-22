let stage = 0;
let frame = 0;
let a, b, c;
let im;

function setup() {
  createCanvas(800, 1422);
}

function preload() {
  im1 = loadImage("image/i 1.jpg");
  im2 = loadImage("image/i 2.jpg");
  im3 = loadImage("image/i 3.jpg");
  im4 = loadImage("image/i 4.jpg");
  im5 = loadImage("image/i 5.jpg");
  im6 = loadImage("image/i 6.jpg");
  im7 = loadImage("image/i 7.jpg");
  im8 = loadImage("image/i 8.jpg");
  im9 = loadImage("image/i 9.jpg");
  im10 = loadImage("image/i 10.jpg");
  im11 = loadImage("image/i 11.jpg");
  im12 = loadImage("image/i 12.jpg");
  im13 = loadImage("image/i 13.jpg");
  im14 = loadImage("image/i 14.jpg");
  im15 = loadImage("image/i 15.jpg");
  im16 = loadImage("image/i 16.jpg");
  im17 = loadImage("image/i 17.jpg");
  im18 = loadImage("image/i 18.jpg");
  im19 = loadImage("image/i 19.jpg");
  im20 = loadImage("image/i 20.jpg");
  im21 = loadImage("image/i 21.jpg");
  im22 = loadImage("image/i 22.jpg");
  im23 = loadImage("image/i 23.jpg");
  im24 = loadImage("image/i 24.jpg");
  im25 = loadImage("image/i 25.jpg");
  im26 = loadImage("image/i 26.jpg");
  im27 = loadImage("image/i 27.jpg");
  im28 = loadImage("image/i 28.jpg");
  im29 = loadImage("image/i 29.jpg");
  im30 = loadImage("image/i 30.jpg");
  im31 = loadImage("image/i 31.jpg");
  im32 = loadImage("image/i 32.jpg");
  im33 = loadImage("image/i 33.jpg");
  im34 = loadImage("image/i 34.jpg");
  im35 = loadImage("image/i 35.jpg");
  im36 = loadImage("image/i 36.jpg");
  im37 = loadImage("image/i 37.jpg");
  im38 = loadImage("image/i 38.jpg");
  im39 = loadImage("image/i 39.jpg");
  im40 = loadImage("image/i 40.jpg");
  im41 = loadImage("image/i 41.jpg");
  im42 = loadImage("image/i 42.jpg");
  im43 = loadImage("image/i 43.jpg");
  im44 = loadImage("image/i 44.jpg");
  im45 = loadImage("image/i 45.jpg");
  im46 = loadImage("image/i 46.jpg");
  im47 = loadImage("image/i 47.jpg");
  im48 = loadImage("image/i 48.jpg");
  im49 = loadImage("image/i 49.jpg");
  im50 = loadImage("image/i 50.jpg");
  im51 = loadImage("image/i 51.jpg");
  im52 = loadImage("image/i 52.jpg");
  im53 = loadImage("image/i 53.jpg");
  im54 = loadImage("image/i 54.jpg");
  im55 = loadImage("image/i 55.jpg");
  im56 = loadImage("image/i 56.jpg");
  im57 = loadImage("image/i 57.jpg");
}

function draw() {
  background(220);
  switch (stage) {
    case 0:
      frame = frame + 1;
      image(im57, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 200 &&
          mouseX <= 640 &&
          mouseY >= 1020 &&
          mouseY <= 1120
        ) {
          frame = 0;
          stage = 1;
        }
      }
      break;
    case 1:
      frame = frame + 1;
      image(im1, 0, 0, width, height);
      if (frame > 10) {
        up(2);
        down(12);
        back(0);
      }
      break;
    case 2:
      frame = frame + 1;
      image(im2, 0, 0, width, height);
      if (frame > 10) {
        up(3);
        down(8);
        back(1);
      }
      break;
    case 3:
      frame = frame + 1;
      image(im3, 0, 0, width, height);
      if (frame > 10) {
        up(5);
        down(4);
        back(2);
      }
      break;
    case 4:
      frame = frame + 1;
      image(im4, 0, 0, width, height);
      if (frame > 10) {
        up(58);
        down(6);
        back(3);
      }
      break;
    case 5:
      frame = frame + 1;
      image(im5, 0, 0, width, height);
      if (frame > 10) {
        up(7);
        down(7);
        back(3);
      }
      break;
    case 6:
      frame = frame + 1;
      image(im6, 0, 0, width, height);
      if (frame > 10) {
        up(29);
        down(31);
        back(4);
      }
      break;
    case 7:
      frame = frame + 1;
      image(im7, 0, 0, width, height);
      if (frame > 10) {
        up(23);
        down(25);
        back(5);
      }
      break;
    case 8:
      frame = frame + 1;
      image(im8, 0, 0, width, height);
      if (frame > 10) {
        up(10);
        down(59);
        back(2);
      }
      break;
    case 9:
      frame = frame + 1;
      image(im9, 0, 0, width, height);
      if (frame > 10) {
        up(35);
        down(33);
        back(59);
      }
      break;
    case 10:
      frame = frame + 1;
      image(im10, 0, 0, width, height);
      if (frame > 10) {
        up(11);
        down(11);
        back(8);
      }
      break;
    case 11:
      frame = frame + 1;
      image(im11, 0, 0, width, height);
      if (frame > 10) {
        up(37);
        down(39);
        back(10);
      }
      break;
    case 12:
      frame = frame + 1;
      image(im12, 0, 0, width, height);
      if (frame > 10) {
        up(13);
        down(18);
        back(1);
      }
      break;
    case 13:
      frame = frame + 1;
      image(im13, 0, 0, width, height);
      if (frame > 10) {
        up(14);
        down(14);
        back(12);
      }
      break;
    case 14:
      frame = frame + 1;
      image(im14, 0, 0, width, height);
      if (frame > 10) {
        up(17);
        down(17);
        back(13);
      }
      break;
    case 15:
      frame = frame + 1;
      image(im15, 0, 0, width, height);
      if (frame > 10) {
        up(49);
        down(51);
        back(60);
      }
      break;
    case 17:
      frame = frame + 1;
      image(im17, 0, 0, width, height);
      if (frame > 10) {
        up(53);
        down(55);
        back(14);
      }
      break;
    case 18:
      frame = frame + 1;
      image(im18, 0, 0, width, height);
      if (frame > 10) {
        up(21);
        down(19);
        back(12);
      }
      break;
    case 19:
      frame = frame + 1;
      image(im19, 0, 0, width, height);
      if (frame > 10) {
        up(20);
        down(20);
        back(18);
      }
      break;
    case 20:
      frame = frame + 1;
      image(im20, 0, 0, width, height);
      if (frame > 10) {
        up(41);
        down(43);
        back(19);
      }
      break;
    case 21:
      frame = frame + 1;
      image(im21, 0, 0, width, height);
      if (frame > 10) {
        up(22);
        down(22);
        back(18);
      }
      break;
    case 22:
      frame = frame + 1;
      image(im22, 0, 0, width, height);
      if (frame > 10) {
        up(45);
        down(47);
        back(21);
      }
      break;
    case 23:
      frame = frame + 1;
      image(im23, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 24;
        }
      }
      break;
    case 24:
      frame = frame + 1;
      image(im24, 0, 0, width, height);
      if (frame > 10) {
        back(23);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 25:
      frame = frame + 1;
      image(im25, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 26;
        }
      }
      break;
    case 26:
      frame = frame + 1;
      image(im26, 0, 0, width, height);
      if (frame > 10) {
        back(25);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 27:
      frame = frame + 1;
      image(im27, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 28;
        }
      }
      break;
    case 28:
      frame = frame + 1;
      image(im28, 0, 0, width, height);
      if (frame > 10) {
        back(27);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 29:
      frame = frame + 1;
      image(im29, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 30;
        }
      }
      break;
    case 30:
      frame = frame + 1;
      image(im30, 0, 0, width, height);
      if (frame > 10) {
        back(29);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 31:
      frame = frame + 1;
      image(im31, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 32;
        }
      }
      break;
    case 32:
      frame = frame + 1;
      image(im32, 0, 0, width, height);
      if (frame > 10) {
        back(31);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 33:
      frame = frame + 1;
      image(im33, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 34;
        }
      }
      break;
    case 34:
      frame = frame + 1;
      image(im34, 0, 0, width, height);
      if (frame > 10) {
        back(33);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 35:
      frame = frame + 1;
      image(im35, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 36;
        }
      }
      break;
    case 36:
      frame = frame + 1;
      image(im36, 0, 0, width, height);
      if (frame > 10) {
        back(35);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 37:
      frame = frame + 1;
      image(im37, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 38;
        }
      }
      break;
    case 38:
      frame = frame + 1;
      image(im38, 0, 0, width, height);
      if (frame > 10) {
        back(37);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 39:
      frame = frame + 1;
      image(im39, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 40;
        }
      }
      break;
    case 40:
      frame = frame + 1;
      image(im40, 0, 0, width, height);
      if (frame > 10) {
        back(39);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 41:
      frame = frame + 1;
      image(im41, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 42;
        }
      }
      break;
    case 42:
      frame = frame + 1;
      image(im42, 0, 0, width, height);
      if (frame > 10) {
        back(41);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 43:
      frame = frame + 1;
      image(im43, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 44;
        }
      }
      break;
    case 44:
      frame = frame + 1;
      image(im44, 0, 0, width, height);
      if (frame > 10) {
        back(43);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 45:
      frame = frame + 1;
      image(im45, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 46;
        }
      }
      break;
    case 46:
      frame = frame + 1;
      image(im46, 0, 0, width, height);
      if (frame > 10) {
        back(45);
        if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 47:
      frame = frame + 1;
      image(im47, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 48;
        }
      }
      break;
    case 48:
      frame = frame + 1;
      image(im48, 0, 0, width, height);
      if (frame > 10) {
        back(47);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 49:
      frame = frame + 1;
      image(im49, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 50;
        }
      }
      break;
    case 50:
      frame = frame + 1;
      image(im50, 0, 0, width, height);
      if (frame > 10) {
        back(49);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 51:
      frame = frame + 1;
      image(im51, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 52;
        }
      }
      break;
    case 52:
      frame = frame + 1;
      image(im52, 0, 0, width, height);
      if (frame > 10) {
        back(51);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 53:
      frame = frame + 1;
      image(im53, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 54;
        }
      }
      break;
    case 54:
      frame = frame + 1;
      image(im54, 0, 0, width, height);
      if (frame > 10) {
        back(53);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 55:
      frame = frame + 1;
      image(im55, 0, 0, width, height);
      if (frame > 10) {
        if (
          mouseIsPressed &&
          mouseX >= 550 &&
          mouseX <= 750 &&
          mouseY >= 1250 &&
          mouseY <= 1350
        ) {
          frame = 0;
          stage = 56;
        }
      }
      break;
    case 56:
      frame = frame + 1;
      image(im56, 0, 0, width, height);
      if (frame > 10) {
        back(55);
         if (
          mouseIsPressed &&
          mouseX >= 500 &&
          mouseX <= 750 &&
          mouseY >= 1300 &&
          mouseY <= 1400
        ) {
          frame = 0;
          stage = 0;
        }
      }
      break;
    case 58:
      frame = frame + 1;
      image(im5, 0, 0, width, height);
      if (frame > 10) {
        up(27);
        down(27);
        back(4);
      }
      break;
    case 59:
      frame = frame + 1;
      image(im5, 0, 0, width, height);
      if (frame > 10) {
        up(9);
        down(9);
        back(8);
      }
      break;
    case 60:
      frame = frame + 1;
      image(im14, 0, 0, width, height);
      if (frame > 10) {
        up(13);
        down(13);
        back(15);
      }
      break;
    default:
      break;
  }
}

function up(a) {
  if (
    mouseIsPressed &&
    mouseX >= 70 &&
    mouseX <= 730 &&
    mouseY >= 637 &&
    mouseY <= 759
  ) {
    frame = 0;
    stage = a;
  }
}

function down(b) {
  if (
    mouseIsPressed &&
    mouseX >= 70 &&
    mouseX <= 730 &&
    mouseY >= 880 &&
    mouseY <= 1002
  ) {
    frame = 0;
    stage = b;
  }
}

function back(c) {
  if (
    mouseIsPressed &&
    mouseX >= 260 &&
    mouseX <= 530 &&
    mouseY >= 1120 &&
    mouseY <= 1220
  ) {
    frame = 0;
    stage = c;
  }
}
