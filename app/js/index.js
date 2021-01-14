function first() {

  document.querySelector('#flame').classList.toggle('lit');
  document.querySelector('#flame').classList.toggle('out');
  document.querySelector('body').style.opacity = 0;
  document.querySelector('body').style.backgroundColor = "#c9b2ef";
  let template =
    ` <div id="app">
    <div class="gift dukdik" id="gift" onclick="openGiftBox()">
      <div class="gift-top""></div>
     <div class="gift-text">
     <h2>Donde habita la inspiración</h2>
     <hr>
     <p>En alza está hoy la celebración,</p>
     <p>allí donde te encuentras,</p>
     <p>ese espacio suspendido en el éter</p>   
     <p>la causa y el efecto de una charla,</p>  
     <p>tu osadía, las palabras, un poema.</p>

     <br/>
     
     <p>Allí donde te encuentras,</p>
     <p>todos tus ahora, cerca y lejos,</p>
     <p>sumando los antes y los después</p>
     <p>que la sinrazón nos lleva</p>
     <p>hacia donde habitan las utopías.</p>
     
     <br/>
     
     <p>Imaginar que habla el corazón,</p>
     <p>imaginar que la distancia se acaba,</p>
     <p>imaginar que veo tu mirada clara,</p>
     <p>imaginar que este poema sos vos.</p>

     <br/>
     
     <p>Hoy, que afloran los deseos</p>
     <p>es por vos que mi alma habla en verso,</p>
     <p>y desde aquí enviarte un beso</p>
     <p>hasta el recóndito de la imaginación</p>
     <p>hasta allí, donde te encuentras,</p>
     <p>allí; donde habita la inspiración.</p>
     
     <br/>
     <hr>
     <p class="italica">Muy felíz cumple te desea...</p>
     <p class="italica">Leo\\><span class="blinky">_</span> El Poeta Developer.</p>
     
     </div> 
      <div class="gift-box"></div>
    </div>
  </div>
  <p class="leyenda-box">Abrí el regalo con un touch</p>`;


  setTimeout(() => {
    document.querySelector('#panel').innerHTML = template;
    document.querySelector('body').style.opacity = 1;

  }, 1000);

}

function openGiftBox() {

  document.body.className = 'open';
  document.querySelector('.leyenda-box').style.display = 'none';
  document.querySelector('body').style.backgroundColor = '#4f418a';
  document.querySelector('.gift').className = 'gift';
  document.querySelector('.gift-top').className = 'gift-top boxOpen';
  document.querySelector('.gift-box').className = 'gift-box boxDown';
  document.querySelector('.gift').style.animation = 'none';
  document.querySelector('.gift-text').style.display = 'block';
};