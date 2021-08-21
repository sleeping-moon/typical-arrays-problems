function min(аrr){
	let len=arr.length;
	let maxarr=0;
	if(len == 0){return 0;}
	else{
	for(let counter=0; counter<len; counter++){
		if(arr[counter]<maxarr){maxarr=arr[counter];}
	  }
		return maxarr;
  }
}

function max(arr){
	let len=arr.length;
	let maxarr=0;
	if(len == 0){return 0;}
	else{
	for(let counter=0; counter<len; counter++){
		if(arr[counter]>maxarr){maxarr=arr[counter];}
	  }
		return maxarr;
	}
}

function avg(arr){
	let len=arr.length;
	let avgarr=0;
	if(len == 0){return 0;}
	else{
	for(let counter=0; counter<len; counter++){
		avgarr+=arr[counter];
	  }
		avgarr=avgarr/len;
		return avgarr;
	}
}
