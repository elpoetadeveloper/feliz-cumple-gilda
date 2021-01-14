let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
document.getElementById('flame').addEventListener(touchEvent, flameToggle);
function flameToggle() {
  this.classList.toggle('lit');
  this.classList.toggle('out');

  let template =
    ` <div id="app">
    <div class="gift" :class="{dukdik: !open}" @click="click">
      <div class="gift-top" 
           :class="{boxOpen: open}"
       ></div>
      <h1 class="gift-text" v-if="open">{{text}}</h1>
      <div class="gift-box"
           :class="{boxDown: open}"
       ></div>
    </div>
  </div>`;
  setTimeout(() => {
    console.log('timne');
    document.querySelector('#panel').innerHTML = template;
  }, 3000);
  console.log(template);
}

function flameButtonToggle() {
  document.querySelector('#flame').classList.toggle('lit');
  document.querySelector('#flame').classList.toggle('out');
  let template =
    ` <div id="app">
    <div class="gift" :class="{dukdik: !open}" @click="click">
      <div class="gift-top" 
           :class="{boxOpen: open}"
       ></div>
      <h1 class="gift-text" v-if="open">{{text}}</h1>
      <div class="gift-box"
           :class="{boxDown: open}"
       ></div>
    </div>
  </div>`;
  setTimeout(() => {
    console.log('timne');
    document.querySelector('#panel').innerHTML = template;
  }, 3000);

}
