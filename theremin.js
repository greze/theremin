var MAX_FREQ = 3000;
var MAX_VOLUME = 1;

var ac = new AudioContext();
var osc = null;
var gainNode = ac.createGain();

gainNode.connect(ac.destination);

document.addEventListener('mousemove', function(event) {
  if (osc) {
    var percentWidth = event.clientX / window.innerWidth;
    var percentHeight = event.clientY / window.innerHeight;

    osc.frequency.value = percentWidth * MAX_FREQ;
    gainNode.gain.value = percentHeight * MAX_VOLUME;
  }
});

function playSound() {
  osc = ac.createOscillator();
  osc.type = 'sine';

  osc.connect(gainNode);

  osc.start();
}

function stopSound() {
  osc.stop();
  osc.disconnect();
}

document.getElementById('play').addEventListener('click', playSound);
document.getElementById('stop').addEventListener('click', stopSound);
