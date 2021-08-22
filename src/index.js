exports.min = function min(аrray){
	let len=array.length;
	let maxarr=0;
	if(len == 0){return 0;}
	else{
	for(let counter=0; counter<len; counter++){
		if(arr[counter]<maxarr){maxarr=arr[counter];}
	  }
		return maxarr;
  }
}

exports.max = function max(array){
	let len=array.length;
	let maxarr=0;
	if(len == 0){return 0;}
	else{
	for(let counter=0; counter<len; counter++){
		if(arr[counter]>maxarr){maxarr=arr[counter];}
	  }
		return maxarr;
	}
}

exports.avg = function avg(array){
	let len=array.length;
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
