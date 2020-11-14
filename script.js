let button = null;
let paragraph = null;
let missionAbort = null;

function init () {
    missionAbort = document.getElementById("abortMission");
    button = document.getElementById("liftoff");
    paragraph = document.querySelector("p");
    shuttleStatus = document.getElementById("shuttle-status");

    button.addEventListener('click', function() {
      shuttleStatus.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener('mouseenter', function(){
      this.style='background-color:red';
    })
    missionAbort.addEventListener('mouseleave', function(){
      this.style='';
    })
    missionAbort.addEventListener('click', function(){
      if (window.confirm('Are you sure you want to abort the mission?')){
        shuttleStatus.innerHTML='Mission aborted.';
      }
    })
}

window.onload = init;