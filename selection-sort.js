

function selectionSort(arr) {



  let ret=[]; let A=[]; let ph;

  for(let i=0;i<arr.length;i++) A.push(arr[i]);

  while(A.length !=0 )
  {
    console.log(ret.join(","));
    ph=0;

    for(let i=0;i<A.length;i++)
    {
      if(A[i]<A[ph]) ph = i;
    }

    ret.push(A[ph]);

    A.splice(ph,1);

  }
  // Copy the original array

  // Create an array to store the sorted values

  // While the array is not empty...

    // Do not move this console.log
   // console.log(ret.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save and remove the value at the min index

    // Add the min value to the end of the sorted array

    return ret;

}



function selectionSortInPlace(A) {


  let ph=0; let cry;

  for(let i=0;i<A.length;i++)
  {

    console.log(A.join(","));

    ph = i;

    for(let j=i;j<A.length;j++)
    {

       if(A[ph]>A[j]) ph = j;
    }

    for(let i=ph;i>0;i--)
    {
       if(A[i]<A[i-1])
       {
        cry = A[i];
        A[i] = A[i-1];
        A[i-1] =cry;
       }
       else
       {
        break;
       }

    }

    /*
    cry = A[i];
    A[i] = A[ph];
    A[ph] =cry; */

  }

  console.log(A.join(","));

  return A;
  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
   // console.log(A.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
