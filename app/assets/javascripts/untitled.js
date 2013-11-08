	
function palindrome(){
	var largest = 0;

	for(i=0;i<999;i++){
		var num1 = i;
		var num2 = num1;
		var num3 = num1 * num2;
		var result = num3.toString();
		var check = result.split('');
		if(check === check.reverse && num3 > largest){
			largest = check;
			console.log(largest);
			num2++;
			result = (num1 * num2).toString();
			check = result.split('');
			if(check === check.reverse && num3 > largest){
				largest = num3;
				console.log(largest);
			}
		}else{
			num2++;
			result = (num1 * num2).toString();
			check = result.split('');
			if(check === check.reverse && num3 > largest){
				largest = num3;
				console.log(largest);
			}
		}
	}
}
