# Football-random-score
Futbol oyununun random hesab vermək üçün kicik bir kod


- [x] FrontEnd Codes
- Html
- Css
- Javascript
- JQuerry

- [ ] BackEnd Codes


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Bilik savasi</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="css/star.css">
    <link rel="stylesheet" href="css/awesome.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>
    <main for='main'>
        <section class='score'>
            <div class="container">
                <div class="score_inner">
                    <div class="scores">
                        <div class="club_home"></div>
                        <div class="goals">
                            <div class="goal_home">0</div>
                            <span></span>
                            <div class="goal_away">0</div>
                        </div>
                        <div class="club_away"></div>
                    </div>
                    <div class="clock">
                        <span class="min">00</span>
                        :
                        <span class="sec">00</span>
                    </div>
                    <div class="btns">
                    <button class="match_btn start_btn">Start match</button>
                    <button class="match_btn stop_btn disabled">Pause</button>
                    </div>
					<div class="speed">
                        <p><b>Speed</b></p>       
					<div class="speed_box">
                    <span class="green"></span>
					<span></span>
					<span></span>
					<span></span>
					</div>
					<span class="add"><i class="fa fa-plus-circle"></i></span>
                  </div>
                    <div class='goals_info'></div>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer end-->

    <!-- JQUERRY-->
    <script src="./js/jquery-latest.js"></script>
    <!-- MAIN JS-->
    <script src="./js/main.js"></script>
</body>

</html>
