let $       = document.querySelector ("canvas").getContext ("2d"),
    $$      = document.querySelector ("canvas");

let preloader = true;

function start () {
  $$.width    = 800;
  $$.height   = 600;
};

function update () {
  $.clearRect (0, 0, $$.width, $$.height);

  if (preloader) {
    let i = new Image ();
      i.src = "assets/loader.png";
    $.drawImage (i, 0, 0);
  };
};
