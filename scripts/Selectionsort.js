function Selection_sort()
{
    c_delay=0;
    for(var i=0;i<array_size-1;i++)
    {
        //color update to red
        div_update(divs[i],div_sizes[i],"red");
        idx_min=i;
        for(var j=i+1;j<array_size;j++)
        {
            // color update to yellow 
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]<div_sizes[idx_min])
            {
                if(idx_min!=i)
                {
                    div_update(divs[idx_min],div_sizes[idx_min],"blue");
                }
                idx_min=j;
                // color update 
                div_update(divs[idx_min],div_sizes[idx_min],"red");
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");
            }
        }
        
        if(idx_min!=i)
        {
            // swapping the element 
            var temp=div_sizes[idx_min];
            div_sizes[idx_min]=div_sizes[i];
            div_sizes[i]=temp;
            // height update after swap 
            div_update(divs[idx_min],div_sizes[idx_min],"red");
            div_update(divs[i],div_sizes[i],"red");
            div_update(divs[idx_min],div_sizes[idx_min],"blue");
        }
        div_update(divs[i],div_sizes[i],"green");
    }
    //color update to green
    div_update(divs[i],div_sizes[i],"green");
    //enable buttons after algo is over
    enable_buttons();
}