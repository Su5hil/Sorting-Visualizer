function Bubble_sort()
{
   c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            //color update for the selected div
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]>div_sizes[j+1])
            {
                //color update for selected div
                div_update(divs[j],div_sizes[j], "red");
                // color update for next selected div 
                div_update(divs[j+1],div_sizes[j+1], "red");
                //swaping values
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;
                //height update after swapping
                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
            }
            // if condition fails then div color changes back to blue 
            div_update(divs[j],div_sizes[j], "blue");
        }
        //color update after sorting it to right place
        div_update(divs[j],div_sizes[j], "green");
    }
    // color update for first element 
    div_update(divs[0],div_sizes[0], "green");

    enable_buttons(); 
}