var speed=1000;

inp_aspeed.addEventListener("input",visual_speed);
//visualizer speed
function visual_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=10;
                break;
        case 2: speed=20;
                break;
        case 3: speed=50;
                break;
        case 4: speed=100;
                break;
        case 5: speed=1000;
                break;
        case 6: speed=10000
                break;
    }
    //Decrease numerator to increase speed.
    delay_time=10000/(Math.floor(array_size/10)*speed);        
}
//Decrease numerator to increase speed.
var delay_time=10000/(Math.floor(array_size/10)*speed);
// this will updated every time so that visualization is visible 
var c_delay=0;

//array update
function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
// enable buttons after sorting 
function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<btn_algos.length;i++)
        {
            btn_algos[i].classList=[];
            btn_algos[i].classList.add("butt_unselected");

            btn_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}