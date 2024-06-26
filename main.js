function insertion(arr){
    var temp=0;
    for(let i=0; i< arr.length-1 ;i++){
        while (j>0){
            j=i+1 
        if (arr[j]<arr[j-1]){

        temp= arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=temp
}
 }
    }
}