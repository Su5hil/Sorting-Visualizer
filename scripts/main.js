// variable declaration 
// naming convention --> object_action 

var inp_as=document.getElementById("arr_size");
var array_size=inp_as.value;
var inp_aspeed=document.getElementById("arr_speed");
var inp_gen=document.getElementById("arr_generate");

//button selection for algorithm 
var btn_algos=document.querySelectorAll(".algos_btn button");

var divs=[];
var div_sizes=[];
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
var margin_size;

//generating array and updating
inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("click",update_array_size);

function generate_array()
{
    cont.innerHTML="";
    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random()*0.5*(inp_as.max -inp_as.min))+10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    
    }
}
function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}
window.onload=update_array_size();

for(var i=0;i<btn_algos.length;i++)
{
    btn_algos[i].addEventListener('click',run_algorithm);
}

function disable_buttons()
{
    for(var i=0;i<btn_algos.length;i++)
    {
        btn_algos[i].classList=[];
        btn_algos[i].classList.add("butt_locked");

        btn_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
}

function run_algorithm()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "BubbleSort":Bubble_sort();
                        break;
        case "MergeSort":Merge_sort();
                        break;
        case "QuickSort":Quick_sort();
                        break;
        case "SelectionSort":Selection_sort();
                        break;
        case "InsertionSort":Insertion_sort();
                        break;
        case "HeapSort":Heap_sort();
                        break;
    }
}