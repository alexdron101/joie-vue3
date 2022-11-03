export const startBrain = () => {




  var rrrr = new Array(35);
  var lines = new Array(93);
  var timer = null;

  /* Canvas Start Brain*/
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = document.getElementById('canvas-block').clientHeight;
  canvas.height = document.getElementById('canvas-block').clientWidth;



  // Р С™Р С•Р Т‘ Р Т‘Р В»РЎРЏ MOUSE!!!! Р Р…Р В°РЎвЂЎР В°Р В»Р С•-------------------------------------------------

  const mouse = {
    x: 0,
    y: 0,
    left: false,
    right: false,
    over: false
  };



  canvas.addEventListener('mousemove', mousemoveHandler);
  canvas.addEventListener('mouseleave', mouseleaveHandler);
  canvas.addEventListener('mouseenter', mouseenterHandler);

  function mousemoveHandler(event) {
    const rect = canvas.getBoundingClientRect()
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;

    //ctx.fillStyle = '#000';
    //ctx.beginPath();
    //ctx.arc(mouse.x, mouse.y, 150, 0, Math.PI * 2, true);
    //ctx.fill();
    //ctx.closePath();

  }

  function mouseleaveHandler(event) {

  }
  function mouseenterHandler(event) {

  }

  // Р С™Р С•Р Т‘ Р Т‘Р В»РЎРЏ MOUSE!!!! Р С”Р С•Р Р…Р ВµРЎвЂ -------------------------------------------------


  // Р С™Р С•Р Т‘ Р Т‘Р В»РЎРЏ РЎв‚¬Р В°РЎР‚Р С•Р Р†!!!! Р Р…Р В°РЎвЂЎР В°Р В»Р С•-------------------------------------------------

  class ball {


    constructor(goX, goY, razlet, stepCount, size, color, posX, posY, pulse_size, pulse_range, rad_cursor, razlet_ot) {
      this.goX = goX;
      this.goY = goY;
      this.razlet = 10;
      this.stepCount = 0;
      this.dviz = 0.25;
      this.posX = posX;
      this.posY = posY;
      this.size = size;
      this.color = 0;
      this.pulse_size = 15;
      this.pulse_range = 0.2;
      this.color_a = 'rgb(255 35 35 / 29%)';
      this.color_b = 'rgb(56 56 56 / 15%)';
      this.rad_cursor = 50;
      this.razlet_ot = 2.5;
    }



    randomGo() {
      if (this.stepCount == 0) {
        this.stepCount = Math.floor(200);
        this.direction = Math.floor(8 * Math.random());
      }
      else {
        this.stepCount--;
      }



      switch (this.direction) {
        case 0: /*vlevo*/
          this.goX = this.goX - this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range + 0.4;
          break;
        case 1: /*vpravo*/
          this.goX = this.goX + this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range;
          break;
        case 2:  /*verh*/
          this.goY = this.goY + this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range + 0.4;
          break;
        case 3:  /*vnis*/
          this.goY = this.goY - this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range;
          break;
        case 4: /*vlevo vverh*/
          this.goX = this.goX - this.dviz;
          this.goY = this.goY + this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range + 0.4;
          break;
        case 5: /*vpravo vverh*/
          this.goX = this.goX + this.dviz;
          this.goY = this.goY + this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range;
          break;
        case 6:  /*vlevo vniz*/
          this.goY = this.goY - this.dviz;
          this.goX = this.goX - this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range + 0.4;
          break;
        case 7:  /*vpravo vnis*/
          this.goY = this.goY - this.dviz;
          this.goX = this.goX + this.dviz;
          this.pulse_size = this.pulse_size + this.pulse_range;
          break;

      }

      if (this.goX < (this.posX - this.razlet)) this.direction = 1;
      if (this.goX > (this.posX + this.razlet)) this.direction = 0;
      if (this.goY < (this.posY - this.razlet)) this.direction = 2;
      if (this.goY > (this.posY + this.razlet)) this.direction = 3;

      if (this.goX < (this.posX - this.razlet) || this.goY < (this.posY - this.razlet)) this.direction = 5;
      if (this.goX < (this.posX - this.razlet) || this.goY > (this.posY + this.razlet)) this.direction = 7;
      if (this.goX > (this.posX + this.razlet) || this.goY > (this.posY + this.razlet)) this.direction = 6;
      if (this.goX > (this.posX + this.razlet) || this.goY < (this.posY - this.razlet)) this.direction = 4;


      if (this.pulse_size > 40) this.pulse_size = 0;
      if (this.pulse_size <= 0) this.pulse_size = 0;
    }


    drawBall() {

      this.randomGo();


      //Р вЂ™Р Р…Р ВµРЎв‚¬Р Р…Р С‘Р в„– РЎвЂћР С•Р Р… Р СРЎРЏРЎвЂЎР В°
      ctx.fillStyle = this.color_b;
      ctx.beginPath();
      ctx.arc(this.goX, this.goY, (this.pulse_size), 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();

      //Р вЂ™Р Р…РЎС“РЎвЂљРЎР‚Р ВµР Р…Р Р…Р С‘Р в„– Р СРЎРЏРЎвЂЎ
      ctx.fillStyle = this.color_a;
      ctx.beginPath();
      ctx.arc(this.goX, this.goY, this.size, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();


      //Р СљРЎРЏРЎвЂЎ Р С—РЎР‚Р С‘ Р СРЎвЂ№РЎв‚¬Р С”Р Вµ

      //Color
      if (
        mouse.x > 780 || mouse.x < 20 ||
        mouse.y > 780 || mouse.y < 20 ||
        mouse.x - this.goX >= 120 ||
        mouse.x - this.goX <= -120 ||
        mouse.y - this.goY >= 120 ||
        mouse.y - this.goY <= -120
      ) this.color_a = '#111';
      else {
        this.color_a = '#ff2323';
      }

      // if pravo
      if (
        mouse.x > 780 || mouse.x < 20 ||
        mouse.y > 780 || mouse.y < 20 ||
        mouse.x - this.goX >= this.rad_cursor ||
        mouse.x - this.goX <= -this.rad_cursor ||
        mouse.y - this.goY >= this.rad_cursor ||
        mouse.y - this.goY <= -this.rad_cursor ||
        this.goX > mouse.x);
      else {
        this.goX = this.goX - this.razlet_ot;
      }
      // if levo
      if (
        mouse.x > 780 || mouse.x < 20 ||
        mouse.y > 780 || mouse.y < 20 ||
        mouse.x - this.goX >= this.rad_cursor ||
        mouse.x - this.goX <= -this.rad_cursor ||
        mouse.y - this.goY >= this.rad_cursor ||
        mouse.y - this.goY <= -this.rad_cursor ||
        this.goX < mouse.x);
      else {
        this.goX = this.goX + this.razlet_ot;
      }


      // if verh
      if (
        mouse.x > 780 || mouse.x < 20 ||
        mouse.y > 780 || mouse.y < 20 ||
        mouse.x - this.goX >= this.rad_cursor ||
        mouse.x - this.goX <= -this.rad_cursor ||
        mouse.y - this.goY >= this.rad_cursor ||
        mouse.y - this.goY <= -this.rad_cursor ||
        this.goY < mouse.y);
      else {
        this.goY = this.goY + this.razlet_ot;
      }
      // if niz
      if (
        mouse.x > 780 || mouse.x < 20 ||
        mouse.y > 780 || mouse.y < 20 ||
        mouse.x - this.goX >= this.rad_cursor ||
        mouse.x - this.goX <= -this.rad_cursor ||
        mouse.y - this.goY >= this.rad_cursor ||
        mouse.y - this.goY <= -this.rad_cursor ||
        this.goY > mouse.y);
      else {
        this.goY = this.goY - this.razlet_ot;
      }
      // if out coord

      if (
        this.goX + 75 < (this.posX - this.razlet) ||
        this.goX - 75 > (this.posX + this.razlet) ||
        this.goY + 75 < (this.posY - this.razlet) ||
        this.goY - 75 > (this.posY + this.razlet))
        this.goX = this.posX,
          this.goY = this.posY

    }


  }

  create_all_balls();


  function create_all_balls() {
    // constructor(goX, goY, razlet, stepCount, size, posX, posY)
    const rrrrParams = [
      [75, 340, 0, 0, 20, '#ff2323', 75, 340],
      [110, 250, 0, 0, 25, '#ff2323', 110, 250],
      [180, 180, 0, 0, 20, '#ff2323', 180, 180],
      [300, 150, 0, 0, 20, '#ff2323', 300, 150],
      [410, 140, 0, 0, 30, '#ff2323', 410, 140],
      [520, 155, 0, 0, 20, '#ff2323', 520, 155],
      [610, 200, 0, 0, 20, '#ff2323', 610, 200],
      [700, 260, 0, 0, 15, '#ff2323', 700, 260],
      [730, 360, 0, 0, 20, '#ff2323', 730, 360],
      [730, 475, 0, 0, 10, '#ff2323', 730, 475],
      [645, 550, 0, 0, 20, '#ff2323', 645, 550],
      [580, 640, 0, 0, 20, '#ff2323', 580, 640],
      [520, 740, 0, 0, 15, '#ff2323', 520, 740],
      [485, 620, 0, 0, 20, '#ff2323', 485, 620],
      [430, 530, 0, 0, 25, '#ff2323', 430, 530],
      [340, 480, 0, 0, 16, '#ff2323', 340, 480],
      [240, 490, 0, 0, 15, '#ff2323', 240, 490],
      [130, 450, 0, 0, 20, '#ff2323', 130, 450],
      [190, 270, 0, 0, 10, '#ff2323', 190, 270],
      [250, 230, 0, 0, 20, '#ff2323', 250, 230],
      [330, 220, 0, 0, 10, '#ff2323', 330, 220],
      [560, 220, 0, 0, 10, '#ff2323', 560, 220],
      [430, 260, 0, 0, 20, '#ff2323', 430, 260],
      [500, 220, 0, 0, 10, '#ff2323', 500, 220],
      [550, 290, 0, 0, 15, '#ff2323', 550, 290],
      [620, 340, 0, 0, 25, '#ff2323', 620, 340],
      [630, 420, 0, 0, 10, '#ff2323', 630, 420],
      [580, 490, 0, 0, 15, '#ff2323', 580, 490],
      [500, 470, 0, 0, 10, '#ff2323', 500, 470],
      [480, 400, 0, 0, 20, '#ff2323', 480, 400],
      [400, 370, 0, 0, 10, '#ff2323', 400, 370],
      [320, 370, 0, 0, 20, '#ff2323', 320, 370],
      [140, 370, 0, 0, 10, '#ff2323', 140, 370],
      [230, 370, 0, 0, 20, '#ff2323', 230, 370],
      [330, 280, 0, 0, 15, '#ff2323', 330, 280]
    ];

    rrrrParams.forEach((it, i) => {
      rrrr[i] = new ball(...it);
    });

    /*
    for(let i = 0; i < rrrr.length; i++ ) {
      rrrr[i] = new ball(...rrrrParams[i]);
    }*/
  }


  function draw_all() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Р вЂєР С‘Р Р…Р С‘Р С‘ Р Р…Р В°РЎвЂЎР В°Р В»Р С• ------------------------------------------
    class line {

      constructor(color, width, a, b, c, d) {
        this.color = 'rgb(189 189 189 / 58%)';
        this.width = 1;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }

      drawline() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.width;
        ctx.moveTo(this.a, this.b);    // Р СџР ВµРЎР‚Р ВµР Т‘Р Р†Р С‘Р С–Р В°Р ВµРЎвЂљ Р С—Р ВµРЎР‚Р С• Р Р† РЎвЂљР С•РЎвЂЎР С”РЎС“ (30, 50)
        ctx.lineTo(this.c, this.d);  // Р  Р С‘РЎРѓРЎС“Р ВµРЎвЂљ Р В»Р С‘Р Р…Р С‘РЎР‹ Р Т‘Р С• РЎвЂљР С•РЎвЂЎР С”Р С‘ (150, 100)
        ctx.stroke();
        ctx.closePath();
      }

    }

    function create_all_lines() {
      const linesToRounds = [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 8],
        [8, 9],
        [9, 10],
        [10, 11],
        [11, 12],
        [12, 13],
        [13, 14],
        [14, 15],
        [15, 16],
        [16, 17],
        [17, 18],
        [18, 1],
        [1, 19],
        [1, 33],
        [19, 33],
        [19, 2],
        [19, 3],
        [18, 33],
        [33, 2],
        [12, 14],
        [24, 5],
        [4, 20],
        [4, 21],
        [20, 21],
        [35, 21],
        [35, 20],
        [20, 3],
        [20, 19],
        [34, 19],
        [34, 33],
        [34, 18],
        [34, 17],
        [33, 17],
        [32, 19],
        [32, 20],
        [32, 34],
        [32, 35],
        [34, 20],
        [32, 16],
        [32, 17],
        [34, 32],
        [16, 34],
        [31, 35],
        [31, 32],
        [31, 16],
        [23, 5],
        [23, 21],
        [23, 35],
        [23, 31],
        [21, 5],
        [24, 6],
        [24, 22],
        [24, 25],
        [24, 30],
        [24, 23],
        [22, 7],
        [22, 8],
        [22, 26],
        [22, 25],
        [23, 30],
        [30, 31],
        [30, 15],
        [30, 29],
        [30, 28],
        [30, 27],
        [30, 26],
        [30, 25],
        [30, 16],
        [31, 15],
        [23, 25],
        [26, 7],
        [26, 8],
        [26, 9],
        [26, 10],
        [26, 27],
        [26, 25],
        [27, 9],
        [27, 10],
        [32, 23],
        [28, 10],
        [28, 11],
        [28, 12],
        [28, 14],
        [28, 15],
        [29, 15],
        [29, 28],
        [27, 28],
        [22, 6]
      ];

      linesToRounds.forEach((it, i) => {
        const { goX: a, goY: b } = rrrr[it[0] - 1];
        const { goX: c, goY: d } = rrrr[it[1] - 1];
        lines[i] = new line("0", 0, a, b, c, d);
        lines[i].drawline();
      })

      /*
      for(let i = 0; i < linesToRounds.length; i++) {
          const { goX: a, goY: b } = rrrr[linesToRounds[i][0]-1];
          const { goX: c, goY: d } = rrrr[linesToRounds[i][1]-1];
          lines[i] = new line("0", 0, a, b, c, d);
          lines[i].drawline();
      }*/

    }

    create_all_lines();



    // Р вЂєР С‘Р Р…Р С‘Р С‘ Р С”Р С•Р Р…Р ВµРЎвЂ  ------------------------------------------

    rrrr.forEach((it) => it.drawBall());
    /*
    for(let i = 0; i < rrrr.length; i++) {
      rrrr[i].drawBall();
    }*/

    timer = setTimeout(draw_all, 50);

  }
  draw_all();
  /* Canvas End Brain*/
}