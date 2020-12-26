
function Merge_sort()
{
    c_delay=0;

    MSpartition(0,array_size-1);

    enable_buttons();
}

function mergesort(start,mid,end)
{
    var p=start,q=mid+1;
    var arr=[];
    var k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            arr[k++]=div_sizes[q++];
            //Color update to red
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
        else if(q>end)
        {
            arr[k++]=div_sizes[p++];
            //Color update to red
            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            arr[k++]=div_sizes[p++];
            //Color update to red
            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else
        {
            arr[k++]=div_sizes[q++];
            //Color update to red
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=arr[t];
        //Color update to green
        div_update(divs[start-1],div_sizes[start-1],"green");
    }
}

function MSpartition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        //color update for mid element
        div_update(divs[mid],div_sizes[mid],"yellow");
        MSpartition(start,mid);
        MSpartition(mid+1,end);
        mergesort(start,mid,end);
    }
}