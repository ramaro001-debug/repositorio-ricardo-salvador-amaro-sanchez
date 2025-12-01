onEvent("button1", "click", function() {
  timedLoop(1, function() {
    setProperty("screen1", "background-color", rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255), 0.5));
  });
});
onEvent("music", "click", function( ) {
  playSound("assets/Campana-Sobre-Campana--Villancico-Animado---Mundo-Canticuentos.mp3", false);
});
onEvent("text_input1", "click", function( ) {
  setProperty("screen1", "image", "https://pm1.aminoapps.com/7417/756019459f8067f75316cd83ac83e17f50824627r1-1406-1080v2_hq.jpg");
});
