chrome.storage.sync.get(['carbon'], (result) => {
  var countElement = document.getElementsByClassName("Count")[0];
  countElement.textContent = result.carbon;

  // Animation
  $({ Counter: 0 }).animate({
    Counter: $('.Count').text()
  }, {
    duration: 1000,
    easing: 'swing',
    step: function() {
      $('.Count').text(Math.ceil(this.Counter));
    }
  });

  var canvas = document.getElementById("cameo");
  var updatedHeight = (result.carbon % 250) / 250 * 180;
  canvas.style.height = updatedHeight + 'px';
});

for (let i = 0; i < 2; i++) {
  let el = document.getElementsByClassName("icon").item(i);
  if (i == 0) {
    let val = false;
    if (el.classList.contains("selected")) {
      val = true;
    }
    chrome.storage.sync.set({"youtube": val});
  }
  el.addEventListener("click", () => {
    el.classList.toggle("selected");
  });
}