function Heap_sort()
{
  c_delay=0;
  heapsort();
  enable_buttons();
}
//swap function
function swap(i,j)
{
    //update color
    div_update(divs[i],div_sizes[i],"red");
    div_update(divs[j],div_sizes[j],"red");
    //swapping elements
    var temp=div_sizes[i];
    div_sizes[i]=div_sizes[j];
    div_sizes[j]=temp;
    // height update after swap 
    div_update(divs[i],div_sizes[i],"red");
    div_update(divs[j],div_sizes[j],"red");
    // update color 
    div_update(divs[i],div_sizes[i],"blue");
    div_update(divs[j],div_sizes[j],"blue");
}
//max heapify function
function max_heapify(n,i)
{
    var Lar=i;
    var l=2*i+1;
    var r=2*i+2;
    if(l<n && div_sizes[l]>div_sizes[Lar])
    {
        if(Lar!=i)
        {
            //Color update
            div_update(divs[Lar],div_sizes[Lar],"blue");
        }
        Lar=l;
        //Color update
        div_update(divs[Lar],div_sizes[Lar],"red");
    }
    if(r<n && div_sizes[r]>div_sizes[Lar])
    {
        if(Lar!=i)
        {
            div_update(divs[Lar],div_sizes[Lar],"blue");
        }
        Lar=r;
        div_update(divs[Lar],div_sizes[Lar],"red");
    }
    if(Lar!=i)
    {
        swap(i,Lar);
        max_heapify(n,Lar);
    }
}
//heapsort function
function heapsort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }
    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(divs[i],div_sizes[i],"green");
        div_update(divs[i],div_sizes[i],"yellow");
        max_heapify(i,0);
        div_update(divs[i],div_sizes[i],"blue");
        div_update(divs[i],div_sizes[i],"green");
    }
    div_update(divs[i],div_sizes[i],"green");
}