/*====================================
			EMAIL ANIMATION
      ====================================*/

      let emailIcon = document.getElementsByClassName('emailI')[0];
      let emailContainer = document.getElementById('email_signup_bubble');
      let emailClose = document.getElementById('close-email');
      let emailSubmit = document.getElementById('mc-embedded-subscribe');

      emailIcon.addEventListener('click', showEmail);
      emailClose.addEventListener('click', hideEmail);

      function showEmail(){

        //Check if about Container is open. Close it if it is.
        if(aboutContainer.classList.contains('hide') !== true){
          hideAbout();
        }

        emailContainer.classList.toggle('hide');
        emailContainer.classList.toggle('bounceIn');
        setTimeout(function(){
          emailSubmit.classList.toggle('opacity');
          emailSubmit.classList.toggle('bounceIn');
        },200);
        setTimeout(function(){
          emailClose.classList.toggle('opacity');
          emailClose.classList.toggle('bounceIn');
        },300);
      }

      function hideEmail(){
        setTimeout(function(){
          emailContainer.classList.toggle('hide');
          emailContainer.classList.toggle('bounceIn');
        },200);
        setTimeout(function(){
          emailSubmit.classList.toggle('opacity');
          emailSubmit.classList.toggle('bounceIn');
        },100);
        emailClose.classList.toggle('opacity');
        emailClose.classList.toggle('bounceIn');
      }

/*====================================
      ABOUT ANIMATION
      ====================================*/

      let aboutIcon = document.getElementsByClassName('about')[0];
      var aboutContainer = document.getElementById('aboutContainer');
      let aboutClose = document.getElementById('close-about');
      let whatCircle = document.getElementsByClassName('whatCircle')[0];
      let standCircle = document.getElementsByClassName('standCircle')[0];
      let whyCircle = document.getElementsByClassName('whyCircle')[0];
      let teamCircle = document.getElementsByClassName('teamCircle')[0];
      let extraCircle1 = document.getElementsByClassName('xtraCircle1')[0];
      let extraCircle2 = document.getElementsByClassName('xtraCircle2')[0];
      let extraCircle3 = document.getElementsByClassName('xtraCircle3')[0];


      aboutIcon.addEventListener('click', showAbout);
      aboutClose.addEventListener('click', hideAbout);

      function showAbout(){

      //Check if email modal is open. Close it if it is.
        if(emailContainer.classList.contains('hide') !== true){
          hideEmail();
        }

        aboutContainer.classList.toggle('hide');
        whyCircle.classList.toggle('hide');
        whyCircle.classList.toggle('bounceIn');
        aboutClose.classList.toggle('hide');
        aboutClose.classList.toggle('bounceIn');
        setTimeout(function(){
          whatCircle.classList.toggle('hide');
          whatCircle.classList.toggle('bounceIn');
        },50);
        setTimeout(function(){
          standCircle.classList.toggle('hide');
          standCircle.classList.toggle('bounceIn');
        },100);
        setTimeout(function(){
          teamCircle.classList.toggle('hide');
          teamCircle.classList.toggle('bounceIn');
        },150);
        setTimeout(function(){
          extraCircle1.classList.toggle('hide');
          extraCircle1.classList.toggle('bounceIn');
        },200);
        setTimeout(function(){
          extraCircle2.classList.toggle('hide');
          extraCircle2.classList.toggle('bounceIn');
        },250);
        setTimeout(function(){
          extraCircle3.classList.toggle('hide');
          extraCircle3.classList.toggle('bounceIn');
        },300);

      }

      function hideAbout(){
        aboutClose.classList.toggle('hide');
        aboutClose.classList.toggle('bounceIn');
        extraCircle3.classList.toggle('hide');
        extraCircle3.classList.toggle('bounceIn');
        setTimeout(function(){
          extraCircle2.classList.toggle('hide');
          extraCircle2.classList.toggle('bounceIn');
        },50);
        setTimeout(function(){
          extraCircle1.classList.toggle('hide');
          extraCircle1.classList.toggle('bounceIn');
        },100);
        setTimeout(function(){
          teamCircle.classList.toggle('hide');
          teamCircle.classList.toggle('bounceIn');
        },150);
        setTimeout(function(){
          standCircle.classList.toggle('hide');
          standCircle.classList.toggle('bounceIn');
        },200);
        setTimeout(function(){
          whatCircle.classList.toggle('hide');
          whatCircle.classList.toggle('bounceIn');
        },250);
        setTimeout(function(){
          whyCircle.classList.toggle('hide');
          whyCircle.classList.toggle('bounceIn');
          aboutContainer.classList.toggle('hide');
        },300);
      }

/*====================================
			ON LOAD ANIMATION
      ====================================*/
      let animatedLogo = document.getElementById("logo");
      let staticLogo = document.getElementById("logoStatic");
      let flipout = document.getElementsByClassName("flipout");
      let title = document.getElementsByClassName("title");

      window.onload = setTimeout(function(){
       zoomAndFade();
     },50);

      function zoomAndFade(){

       setTimeout(function(){
        animatedLogo.classList.add('opacity');
        staticLogo.classList.remove('opacity');
        title[0].classList.remove('opacity');
      }, 1600);

       setTimeout(function(){
        $('.emailI').removeClass('opacity email-transform');
        $('.about').removeClass('opacity about-transform');
        $('.social-wrapper').removeClass('opacity social-transform');
      }, 1700);

       animatedLogo.classList.remove('small');
       staticLogo.classList.remove('small');

     }

/*====================================
			EXPLOSION ANIMATION
      ====================================*/

      var c = document.getElementById("c");
      var ctx = c.getContext("2d");
      var cH;
      var cW;
      var bgColor = "#FFFFFF";
      var animations = [];
      var circles = [];

      var colorPicker = (function() {

        /*================= SET EXPLOSION COLOURS HERE ===================*/
        var colors = ["#5cc8f9", "#EBECDE", "#fe9ba7", "#fddc7f","#C9E7DD"];


        var index = 0;
        function next() {
          index = index++ < colors.length-1 ? index : 0;
          return colors[index];
        }
        function current() {
          return colors[index]
        }
        return {
          next: next,
          current: current
        }
      })();

      function removeAnimation(animation) {
        var index = animations.indexOf(animation);
        if (index > -1) animations.splice(index, 1);
      }

      function calcPageFillRadius(x, y) {
        var l = Math.max(x - 0, cW - x);
        var h = Math.max(y - 0, cH - y);
        return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
      }

      function addClickListeners() {
        document.addEventListener("touchstart", handleEvent);
        document.addEventListener("mousedown", handleEvent);
      };

      function handleEvent(e) {
        if (e.touches) { 
          e.preventDefault();
          e = e.touches[0];
        }
        var currentColor = colorPicker.current();
        var nextColor = colorPicker.next();
        var targetR = calcPageFillRadius(e.pageX, e.pageY);
        var rippleSize = Math.min(200, (cW * .4));
        var minCoverDuration = 750;

        var pageFill = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: nextColor
        });

        var fillAnimation = anime({
          targets: pageFill,
          r: targetR,
          duration:  Math.max(targetR / 2 , minCoverDuration ),
          easing: "easeOutQuart",
          complete: function(){
            bgColor = pageFill.fill;
            removeAnimation(fillAnimation);
          }
        });

        var ripple = new Circle({
          x: e.pageX,
          y: e.pageY,
          r: 0,
          fill: currentColor,
          stroke: {
            width: 3,
            color: currentColor
          },
          opacity: 1
        });
        var rippleAnimation = anime({
          targets: ripple,
          r: rippleSize,
          opacity: 0,
          easing: "easeOutExpo",
          duration: 900,
          complete: removeAnimation
        });

        var particles = [];
        for (var i=0; i<32; i++) {
          var particle = new Circle({
            x: e.pageX,
            y: e.pageY,
            fill: currentColor,
            r: anime.random(24, 48)
          })
          particles.push(particle);
        }
        var particlesAnimation = anime({
          targets: particles,
          x: function(particle){
            return particle.x + anime.random(rippleSize, -rippleSize);
          },
          y: function(particle){
            return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
          },
          r: 0,
          easing: "easeOutExpo",
          duration: anime.random(1000,1300),
          complete: removeAnimation
        });
        animations.push(fillAnimation, rippleAnimation, particlesAnimation);
      }

      function extend(a, b){
        for(var key in b) {
          if(b.hasOwnProperty(key)) {
            a[key] = b[key];
          }
        }
        return a;
      }

      var Circle = function(opts) {
        extend(this, opts);
      }

      Circle.prototype.draw = function() {
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
          ctx.strokeStyle = this.stroke.color;
          ctx.lineWidth = this.stroke.width;
          ctx.stroke();
        }
        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
      }

      var animate = anime({
        duration: Infinity,
        update: function() {
          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, cW, cH);
          animations.forEach(function(anim) {
            anim.animatables.forEach(function(animatable) {
              animatable.target.draw();
            });
          });
        }
      });

      var resizeCanvas = function() {
        cW = window.innerWidth;
        cH = window.innerHeight;
        c.width = cW * devicePixelRatio;
        c.height = cH * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
      };

      (function init() {
        resizeCanvas();
        if (window.CP) {
    // CodePen's loop detection was causin' problems
    // and I have no idea why, so...
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
  }
  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  handleInactiveUser();
})();

function handleInactiveUser() {
  var inactive = setTimeout(function(){
    fauxClick(cW/2, cH/2);
  }, 2000);
  
  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }
  
  document.addEventListener("mousedown", clearInactiveTimeout);
  document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}