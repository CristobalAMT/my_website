  // store heroes in array here
 const heroes = [
   {name: "Ana", image: "char_portraits/ana.png"},
   {name: "Anran", image: "char_portraits/anran.png"},
   {name: "Ashe", image: "char_portraits/ashe.png"},
   {name: "Baptiste", image: "char_portraits/baptiste.png"},
   {name: "Bastion", image: "char_portraits/bastion.png"},
   {name: "Brigitte", image: "char_portraits/brigitte.png"},
   {name: "Cassidy", image: "char_portraits/cassidy.png"},
   {name: "D.Va", image: "char_portraits/d.va.png"},
   {name: "Domina", image: "char_portraits/domina.png"},
   {name: "Doomfist", image: "char_portraits/doomfist.png"},
   {name: "Echo", image: "char_portraits/echo.png"},
   {name: "Emre", image: "char_portraits/emre.png"},
   {name: "Freja", image: "char_portraits/freja.png"},
   {name: "Genji", image: "char_portraits/genji.png"},
   {name: "Hanzo", image: "char_portraits/hanzo.png"},
   {name: "Hazard", image: "char_portraits/hazard.png"},
   {name: "Illari", image: "char_portraits/illari.png"},
   {name: "Jetpack Cat", image: "char_portraits/jetpack_cat.png"},
   {name: "Junker Queen", image: "char_portraits/junker_queen.png"},
   {name: "Junkrat", image: "char_portraits/junkrat.png"},
   {name: "Juno", image: "char_portraits/juno.png"},
   {name: "Kiriko", image: "char_portraits/kiriko.png"},
   {name: "lifeweaver", image: "char_portraits/lifeweaver.png"},
   {name: "lucio", image: "char_portraits/lucio.png"},
   {name: "mauga", image: "char_portraits/mauga.png"},
   {name: "Mei", image: "char_portraits/mei.png"},
   {name: "Mercy", image: "char_portraits/mercy.png"},
   {name: "Mizuki", image: "char_portraits/mizuki.png"},
   {name: "Moira", image: "char_portraits/moira.png"},
   {name: "Orisa", image: "char_portraits/orisa.png"},
   {name: "Pharah", image: "char_portraits/pharah.png"},
   {name: "Ramattra", image: "char_portraits/ramattra.png"},
   {name: "Reaper", image: "char_portraits/reaper.png"},
   {name: "Reinhardt", image: "char_portraits/reinhardt.png"},
   {name: "Roadhog", image: "char_portraits/roadhog.png"},
   {name: "Sigma", image: "char_portraits/sigma.png"},
   {name: "Sojourn", image: "char_portraits/sojourn.png"},
   {name: "Soldier 76", image: "char_portraits/soldier_76.png"},
   {name: "Sombra", image: "char_portraits/sombra.png"},
   {name: "Symmetra", image: "char_portraits/symmetra.png"},
   {name: "Torbjorn", image: "char_portraits/torbjorn.png"},
   {name: "Tracer", image: "char_portraits/tracer.png"},
   {name: "Vendetta", image: "char_portraits/vendetta.png"},
   {name: "Venture", image: "char_portraits/venture.png"},
   {name: "Widowmaker", image: "char_portraits/widowmaker.png"},
   {name: "Winston", image: "char_portraits/winston.png"},
   {name: "Wrecking Ball", image: "char_portraits/wrecking_ball.png"},
   {name: "Wuyang", image: "char_portraits/wuyang.png"},
   {name: "Zarya", image: "char_portraits/zarya.png"},
   {name: "Zenyatta", image: "char_portraits/zenyatta.png"}
 ]

 const gallery = document.querySelector(".hero-gallery")
 const length = heroes.length;
  for(let i = 0; i < length; i++) {
   const divvy = document.createElement("div");
   divvy.className = "hero-portrait";
   const image = document.createElement("img");
   const hero_name = heroes[i].name;
   image.alt = hero_name;
   image.src = heroes[i].image;
   initializeStorage(hero_name + "_won", "false");
   if(localStorage.getItem(hero_name + "_won") == "true") {
      image.classList.add("won");
   }
   image.addEventListener("click", toggleCompletion);
   gallery.appendChild(divvy);
   divvy.appendChild(image);

   // this whole button thing could be optimized somehow. that's for later tho

   initializeStorage(hero_name + "_wins", "0");
   initializeStorage(hero_name + "_losses", "0");
   let wins = Number(localStorage.getItem(hero_name + "_wins"));
   const w_span = document.createElement("span");
   w_span.textContent = "W: " + wins + " ";
   const w_span_plus = document.createElement("button");
   w_span_plus.textContent = "+";
   w_span_plus.addEventListener("click", function() {
      wins = addOrSubtract(w_span, "add", "w", hero_name, wins);
   })
   const w_span_minus = document.createElement("button");
   w_span_minus.textContent = "-";
   w_span_minus.addEventListener("click", function() {
      wins = addOrSubtract(w_span, "sub", "w", hero_name, wins);
   })

   let losses = Number(localStorage.getItem(hero_name + "_losses"));
   const l_span = document.createElement("span");
   l_span.textContent = "L: " + losses + " ";
   const l_span_plus = document.createElement("button");
   l_span_plus.textContent = "+";
   l_span_plus.addEventListener("click", function() {
      losses = addOrSubtract(l_span, "add", "l", hero_name, losses);
   })
   const l_span_minus = document.createElement("button");
   l_span_minus.textContent = "-";
   l_span_minus.addEventListener("click", function() {
      losses = addOrSubtract(l_span, "sub", "l", hero_name, losses);
   })

   const inner_divvy_w = document.createElement("div");
   const inner_divvy_l = document.createElement("div");
   inner_divvy_w.appendChild(w_span);
   inner_divvy_w.appendChild(w_span_plus);
   inner_divvy_w.appendChild(w_span_minus);
   inner_divvy_l.appendChild(l_span);
   inner_divvy_l.appendChild(l_span_plus);
   inner_divvy_l.appendChild(l_span_minus);
   divvy.appendChild(inner_divvy_w);
   divvy.appendChild(inner_divvy_l);
 }



 // functions

 function toggleCompletion(event) {
   const image = event.target;
   image.classList.toggle("won")
   localStorage.setItem(image.alt + "_won", image.classList.contains("won") ? "true" : "false");
 }

 function addOrSubtract(span, add_or_sub, w_or_l, hero_name, value) {
   if(w_or_l == "w") {
      if(add_or_sub == "add") {
         value++;
         span.textContent = "W: " + value + " ";
      }
      else if(add_or_sub == "sub") {
         if(value > 0) {
            value--;
            span.textContent = "W: " + value + " ";
         }
      }
      localStorage.setItem(hero_name + "_wins", String(value));
   }
   else if(w_or_l == "l") {
      if(add_or_sub == "add") {
         value++;
         span.textContent = "L: " + value + " ";
      }
      else if(add_or_sub == "sub") {
         if(value > 0) {
            value--;
            span.textContent = "L: " + value + " ";
         }
      }
      localStorage.setItem(hero_name + "_losses", String(value));
   }
   return value;
 }

 function initializeStorage(key, defaultValue) {
   if(!localStorage.getItem(key)) {
      localStorage.setItem(key, defaultValue);
   }
 }
