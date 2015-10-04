<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="RoundRobin Presentation with Slim Framework for os 235014">
<meta name="author" content="Sayamrat Kaewta">
<title><?php echo $title;?></title>
<link rel="shortcut icon" href="public/favicon.ico" />
<link rel="stylesheet" type="text/css" href="public/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="public/css/full-slider.css">
<link rel="stylesheet" type="text/css" href="public/app.css">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <!--<img src="public/favicon.ico" />-->
              <a class="navbar-brand" href="#">Round Robin Process.</a>
          </div>
          <!-- /.navbar-collapse -->
      </div>
      <!-- /.container -->
  </nav>

  <!-- Full Page Image Background Carousel Header -->
  <header id="myCarousel" class="carousel slide">
      <!-- Indicators
      <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>-->

      <!-- Wrapper for Slides -->
      <div class="carousel-inner">
          <div class="item active">
              <!-- Set the first background image using inline CSS below. -->
              <div class="fill background-slide" style="">
                <div class="container">
                  <div class="content">
                    <form id="numform">
                      <input class="form-control input-lg" type="text" placeholder="number of process" onKeyPress="validate(event)"  />
                      <div class="button-layout">
                        <button id="number" type="submit" class="btn btn-primary btn-lg">Next</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="carousel-caption">
                  <h2>#Number Of Process</h2>
              </div>
          </div>
          <div class="item">
              <!-- Set the second background image using inline CSS below. -->
              <div class="fill background-slide" style="">
                <div class="container">
                  <div class="content slide2">
                    <form id="processform">
                      <div class="inq">
                        <label>Quantum Time: </label>
                        <input id="q" class="form-control" type="text" placeholder="Input Quantum Time" onKeyPress="validate(event)"  />
                      </div>
                      <div class="row rowph">
                        <div class="col-lg-4">
                          <h3>Process Name</h3>
                        </div>
                        <div class="col-lg-4">
                          <h3>Arrival Time</h3>
                        </div>
                        <div class="col-lg-4">
                          <h3>Execute Time</h3>
                        </div>
                      </div>
                      <div id="process" class="process">

                      </div>

                      <div class="button-layout">
                        <button id="back" type="button" class="btn btn-danger btn-lg">Back</button>
                        <button id="number" type="submit" class="btn btn-primary btn-lg">Next</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="carousel-caption">
                  <h2>Input <font id="showNum"></font> process</h2>
              </div>
          </div>
          <div class="item">
              <!-- Set the third background image using inline CSS below. -->
              <div class="fill background-slide">
                <div class="container">
                  <div class="content slide2">
                    <div class="row processed">
                      <div class="col-lg-2 column">
                          <h3>Execute Time</h3>
                          <div id="exetime">

                          </div>
                      </div>
                      <div class="col-lg-10 column">
                        <h3>Round Robin Scheduling</h3>
                        <div class="row">
                          <div class="col-lg-7">
                            <div id="schedule">

                            </div>
                          </div>
                          <div class="col-lg-5">
                            <div id="description">

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="button-layout">
                    <button id="back2" type="button" class="btn btn-danger btn-lg">Back</button>
                  </div>
                </div>
              </div>
              <div class="carousel-caption">
                  <h2>Complete. [Crafted by : Sayamrat กับ Arthit]</h2>
              </div>
          </div>
      </div>

      <!-- Controls -->
      <!-- <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="icon-prev"></span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="icon-next"></span>
      </a> -->

  </header>

  <!-- Page Content -->
  <!-- <div class="container">

      <div class="row">
          <div class="col-lg-12">
              <h1>Full Slider by Start Bootstrap</h1>
              <p>The background images for the slider are set directly in the HTML using inline CSS. The rest of the styles for this template are contained within the <code>full-slider.css</code>file.</p>
          </div>
      </div>

      <hr>

      <!-- Footer -->
    <!--  <footer>
          <div class="row">
              <div class="col-lg-12">
                  <p>Copyright &copy; Your Website 2014</p>
              </div>
          </div>
          <!-- /.row -->
    <!--  </footer>

  </div> -->
  <!-- /.container -->

<script src="public/js/jquery.min.js" charset="utf-8"></script>
<script src="public/js/bootstrap.min.js" charset="utf-8"></script>
<script src="public/app.js" charset="utf-8"></script>

<script>
$('.carousel').carousel({
    interval: 800000000 //changes the speed
})
</script>
</body>
</html>
