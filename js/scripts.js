const root = document.documentElement;


const descripions= { 
    "Меркурий" : "Меркурий Ближайший к Солнцу и самый быстрый мир, названный в честь крылатого посланника богов. Год здесь длится всего 88 земных дней. Это царство контрастов: днём — палящий ад (+430°C), ночью — ледяной ад (-180°C). У него крупное железное ядро и кратеристая, безвоздушная поверхность, похожая на лунную. " ,
    "Венера" :  "Венера раскалённый близнец Земли, окутанный ядовитыми облаками из серной кислоты, создающими мощнейший парниковый эффект.",
    "Земля" : "Земля хрупкий голубой оазис, единственная известная планета, где бурлит жизнь, защищённая атмосферой и магнитным полем.",
    "Марс" : "Марс — холодная красная пустыня с гигантскими каньонами и ржавой пылью, где когда-то, возможно, текла вода.",
    "Юпитер" : "Юпитер — царь планет, гигантский стремительный шар из газа и бушующих штормов, например, знаменитого Большого красного пятна.",
    "Сатурн" : "Сатурн — властелин колец, газовый гигант с ослепительной системой ледяных и каменных колец, легче воды.",
    "Уран"  :  "Уран — ледяной гигант, который вращается «лёжа на боку», из-за чего его полюса по очереди смотрят на Солнце десятилетиями.",
    "Нептун" : "Нептун — самый далёкий и ветреный ледяной гигант свинцово-синего цвета, где ветра носятся быстрее скорости звука.",
                   }



function createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.style.position='fixed';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width  = '100%';
    starsContainer.style.height =  '100%';
    starsContainer.style.pointerEvents = 'none';

    for (let i=0; i<200; i++) {
        const star = document.createElement("div");
        star.style.position = 'absolute';
        star.style.width = Math.random() * 2 + 'px';
        star.style.height = star.style.width
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        starsContainer.appendChild(star);

        const style = document.createElement('style');
        style.textContent = `
              @keyFrames twinkle {
                  0%, 100% {opacity: 0.3; }    
                  50%      {opacity: 1;   }        
                                  }
                            `
        document.head.appendChild(style);                   

                              }
    document.body.insertBefore(starsContainer, document.body.firstChild);                          
                        }
   
   
   function setListener() { // let xxx = 
     const planets = document.body.querySelectorAll('.planet');
     // console.log(planets);
     planets.forEach( planet => {
        planet.addEventListener('click',   
            () => {
                  const panel = document.body.querySelector('#info-panel');
                  const title = panel.querySelector('#planet-name');
                  const desc = panel.querySelector('#planet-info');
                  title.innerHTML = planet.dataset.name;
                  desc.innerHTML = descripions[planet.dataset.name];
                  panel.style.display = "block";
                //console.log(descripions[planet.dataset.name]); //
                  }
                               )
                                }

                    );
                          
    document.body.querySelector('#speed-up').addEventListener('click', increaseSpeed);
    document.body.querySelector('#speed-down').addEventListener('click', decreaseSpeed);
                       }

    let orbitVisible = true //false                      
   function hideShow()  {
        orbitVisible = ! orbitVisible;
        const orbits = document.body.querySelectorAll(".orbit");
        orbits.forEach(orbit => {
            orbit.style.outlineColor = orbitVisible ? 'rgb(255,255,255)' : 'transparent';
                                 }
                      );
                        }                        
/*
if (orbitVisible) {   orbit.style.outlineColor = xxx   }
else              {   orbit.style.outlineColor = yyy   }
*/


let currentSpeed = 1;

function updateSpeedMinus() {
    const orbits = document.body.querySelectorAll(".orbit");
    orbits.forEach(orbit => {
        const duratiton = parseFloat(getComputedStyle(orbit).animationDuration);
        orbit.style.animationDuration = `${duratiton / currentSpeed}s`;
        if (orbit.classList.contains ("saturn-orbit")){
            root.style.setProperty('--saturn-animation',
                getComputedStyle(orbit).animationDuration);
                                                      }
                            });
                            }

function updateSpeedPlus() {
    const orbits = document.body.querySelectorAll(".orbit");
    orbits.forEach(orbit => {
        const duratiton = parseFloat(getComputedStyle(orbit).animationDuration);
        orbit.style.animationDuration = `${duratiton * currentSpeed}s`;
        if (orbit.classList.contains ("saturn-orbit")){
            root.style.setProperty('--saturn-animation',
                getComputedStyle(orbit).animationDuration);
                                                      }
                            });
                            }


function increaseSpeed() {
      if (currentSpeed < 1.5) {
          currentSpeed = currentSpeed * 1.1;
          console.log("currentSpeed", currentSpeed);
      if (currentSpeed < 1.0)    {  updateSpeedPlus();   }
      else                       {  updateSpeedMinus();  }
                              }
                         }


function decreaseSpeed() {
      if (currentSpeed < 1.5) {
          currentSpeed = currentSpeed / 1.2;
          console.log("currentSpeed", currentSpeed);
      if (currentSpeed < 1.0)    {  updateSpeedMinus();  }
      else                       {  updateSpeedPlus() ;  }
                              }
                         }








 createStars();      
 setListener();             


