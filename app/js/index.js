function first() {

  document.querySelector('#flame').classList.toggle('lit');
  document.querySelector('#flame').classList.toggle('out');
  document.querySelector('body').style.opacity = 0;
  document.querySelector('body').style.backgroundColor = "#c9b2ef";
  let template =
    `<div id="app">
      <div class="gift dukdik" id="gift" onclick="openGiftBox()">
        <div class="gift-top""></div>
        <div class="gift-text">
          <div id="poema1" class="poemas">
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
         </div>
         <div id="poema2" class="poemas hide">
           <h2>Hora cero</h2>
           <h3>(La hora de los deseos)</h3>
           <hr>

           <p>Cuando el reloj marque las cero</p>
           <p>y me vea obligado a partir</p>
           <p>dejaré mis huellas en el sendero</p>
           <p>para que las puedas seguir.</p>
         
           <br/>

           <p>Cuando el reloj marque las cero</p>
           <p>y entremos juntos al sueño</p>
           <p>mi corazon aventurero</p>
           <p>tendrá un nuevo dueño.</p>
         
           <br/>

           <p>Cuando el reloj marque las cero</p>
           <p>y me convierta en calabaza</p>
           <p>levantá la vista al cielo</p>
           <p>y verás mi estrella pasar por tu casa.</p>
         
           <br/>

           <p>Cuando el reloj marque las cero</p>
           <p>y se enciendan las velas de los deseos</p>
           <p>Gilda, hoy lunes dieciocho de enero
           <p>felíz cumple, te desea Leo.</p>
         
           <br/>

           <p>Hora cero, la hora donde</p>
           <p>Todos los deseos se hacen realidad</p>
           <p>Que se te cumplan; todos;</p>
           <p>Es el mio.</p>
         
           <br/>
           <hr>
         </div>
         <div style="display: flex;">
           <div onclick="changePoem();">
             <svg class="icon-gift" version="1.1" xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
               <path d="M11 13v8h-6v-8zM13 21v-8h6v8zM7.5 6c-0.414 0-0.788-0.167-1.061-0.439s-0.439-0.647-0.439-1.061 0.167-0.788 0.439-1.061 0.647-0.439 1.061-0.439c0.629 0 1.142 0.223 1.584 0.586 0.376 0.308 0.701 0.719 0.976 1.177 0.241 0.401 0.433 0.821 0.58 1.203zM13.346 6c0.161-0.416 0.353-0.836 0.593-1.237 0.275-0.459 0.601-0.869 0.976-1.177 0.443-0.363 0.956-0.586 1.585-0.586 0.414 0 0.788 0.167 1.061 0.439s0.439 0.647 0.439 1.061-0.167 0.788-0.439 1.061-0.647 0.439-1.061 0.439zM11 8v3h-8v-3h4.5zM19.663 6c0.216-0.455 0.337-0.963 0.337-1.5 0-0.966-0.393-1.843-1.025-2.475s-1.509-1.025-2.475-1.025c-1.16 0-2.109 0.43-2.852 1.039-0.603 0.494-1.068 1.103-1.423 1.694-0.080 0.133-0.155 0.266-0.225 0.398-0.070-0.132-0.145-0.265-0.225-0.398-0.355-0.591-0.82-1.2-1.423-1.694-0.743-0.609-1.692-1.039-2.852-1.039-0.966 0-1.843 0.393-2.475 1.025s-1.025 1.509-1.025 2.475c0 0.537 0.121 1.045 0.337 1.5h-2.337c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1h1v9c0 0.552 0.448 1 1 1h16c0.552 0 1-0.448 1-1v-9h1c0.552 0 1-0.448 1-1v-5c0-0.552-0.448-1-1-1zM13 8h8v3h-8z"></path>
             </svg>
           </div>
          <div>
            <p class="italica">Muy felíz cumple te desea...</p>
            <p class="italica">Leo\\><span class="blinky">_</span> El Poeta Developer.</p>
          </div>
        </div> 
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

function changePoem() {
  document.querySelector('body').style.opacity = 0;
  document.querySelectorAll('.poemas')
    .forEach(el => {
      setTimeout(() => {
        el.classList.toggle('hide');
        document.querySelector('body').style.opacity = 1;
      }, 1000);

    });



}