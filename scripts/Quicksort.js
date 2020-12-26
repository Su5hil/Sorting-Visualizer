function Quick_sort()
{
   c_delay=0;
   Quick(0,array_size-1);
   enable_buttons();
}
function QSpartition (low,high)
{
    var i=low+1;
    // selecting first element as pivot 
    var pivot = div_sizes[low] ;
    // color update for low element 
    div_update(divs[low],div_sizes[low],"yellow");

        for(var j =low + 1; j <= high ; j++ )
        {
            // element which are less than pivot is on one side and element which are greater than pivot are on the other side 
            if (div_sizes[ j ] < pivot)
            {
                //element is less than pivot, color update to yellow 
                div_update(divs[j],div_sizes[j],"yellow");
                //color update to red
                div_update(divs[i],div_sizes[i],"red");
                div_update(divs[j],div_sizes[j],"red");
                //swapping the element
                var temp=div_sizes[i];
                div_sizes[i]=div_sizes[j];
                div_sizes[j]=temp;
                //height update after swapping
                div_update(divs[i],div_sizes[i],"red");
                div_update(divs[j],div_sizes[j],"red");
                // color update after swapping 
                div_update(divs[i],div_sizes[i],"blue");
                div_update(divs[j],div_sizes[j],"blue");

                i += 1;
            }
        }
    // color update to red 
    div_update(divs[low],div_sizes[low],"red");
    div_update(divs[i-1],div_sizes[i-1],"red");
    
    // update pivot at the right place 
    var temp=div_sizes[low];
    div_sizes[low]=div_sizes[i-1];
    div_sizes[i-1]=temp;
    // height update of pivot 
    div_update(divs[low],div_sizes[low],"red");
    div_update(divs[i-1],div_sizes[i-1],"red");
    
    for(var t=low;t<=i;t++)
    {
        // color update 
        div_update(divs[t],div_sizes[t],"green");
    }
    // return position of pivot 
    return i-1;
}

function Quick(low, high )
{
    if( low < high )
    {
        var pos = QSpartition (low, high ) ;     
        Quick(low, pos -1);
        Quick(pos +1, high) ;
    }
 }