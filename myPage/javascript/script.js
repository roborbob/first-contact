// typeWriter function will type out a brief profile of goals, interests
// experience.
var i = 0;
var txt ="I'm a web developer with a strong interest in UI/UX design and PWA.The methodology and architecture of coding and design is, to me, a roadmap for how we deal with problem solving in our own lives and society more generally. When beginning any project we ask ourselves 'What problem am I trying to solve?'. The more specific our questions, the more useful our answers become such that functional solutions begin to write themselves...";
var speed = 15;

    function typeWriter() {
 if (i < txt.length) {document.getElementById('bio').innerHTML += txt.charAt(i);
   i++;
   setTimeout(typeWriter, speed);
  }
}

window.addEventListener('load', typeWriter);
