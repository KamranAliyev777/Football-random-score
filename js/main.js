//Cancel button
function goBack() {
    window.history.back();
}

/*$('.goal_home').text(Math.round((Math.random()*5)));
      $('.goal_away').text(Math.round((Math.random()*5)));*/

$(document).ready(function () {
    let min = 0;
    let sec = 0;
    let interval;
    let all_goals=Math.round(Math.random()*7);

    function zero(num) {
        num = (num < 10) ? '0' + num : num;
        return num;
    }
    $(".add").click(function(){
        var speed=$(".speed_box").find(".green").length;
            speed++;
            speed=(speed>4) ? 1 : speed;
            $(".speed_box span").removeClass("green")
           for(let i=0;i<speed;i++){
            $(".speed_box span").eq(i).addClass("green")
        }
        })
    function score(){
        var home=Math.round(Math.random()*7);
        var away=Math.round(Math.random()*7);
        var total_scores=home + away;
        var scores=[];
        var data=[];
        if(total_scores >= 7){
           return score();
        }
        else{
            scores.push(home,away);
            data.push(scores,total_scores)
            return data;
        }
    }
    var func_data=score();
    var total=func_data[1],
    results=func_data[0];
    var home_scores=results[0];
    var away_results=results[1];
    var minutes_home=[];
    var minutes_away=[];
    for(let k=0;k<total;k++){
        if(k<home_scores){
        minutes_home.push(Math.round(Math.random()*90));
        minutes_home.sort(function(a,b){return a-b})
        }
        else{
            minutes_away.push(Math.round(Math.random()*90));
            minutes_away.sort(function(a,b){return a-b})  
        }
    }
    $('.start_btn').click(function(){
        $(this).addClass('disabled');
        $('.stop_btn').removeClass('disabled');
        var speed=$(".speed_box span").length-$(".speed_box").find(".green").length
        var speed=Math.pow(speed,2) * 10;
        $(".speed").addClass("dis_none")
        interval = setInterval(function(){
            sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 45 && sec==0) {
            $('.start_btn').text('Start 2nd');
            $('.stop_btn').trigger('click');
            $(".speed").removeClass("dis_none")
        }
        if (min == 90 && sec==0) {
            $('.stop_btn').trigger('click');
            if(minutes_away.length==minutes_home.length){
                $('.start_btn').text('Extra time');
            }
            else{
            $('.match_btn').addClass('disabled');
            }
        }
        if (min == 105 && sec==0) {
            $('.start_btn').addClass('Extra time 2nd');
            $('.stop_btn').trigger('click');
        }
        if(min==120){
            $('.stop_btn').trigger('click');
            $('.match_btn').addClass('disabled');
        }
        for(key1 in minutes_home){
            if(min==minutes_home[key1] && sec==0){
                $('.goal_home').text(Number(key1) + 1);
                $('.goals_info').append('<div class="info_home"><span class="info_min">'+minutes_home[key1]+'</span> - Goal</div>')
            }
        }
        for(key2 in minutes_home){
            if(min==minutes_away[key2] && sec==0){
                $('.goal_away').text(Number(key2) + 1);
                $('.goals_info').append('<div class="info_away"><span class="info_min">'+minutes_away[key2]+'</span> - Goal</div>')
            }
        }

        $('.min').text(zero(min));
        $('.sec').text(zero(sec))
        },speed);
        $('.stop_btn').click(function(){
            $(this).addClass('disabled');
            $('.start_btn').removeClass('disabled');
            $(".speed").removeClass("dis_none")
            clearInterval(interval);
        })
    })
})
