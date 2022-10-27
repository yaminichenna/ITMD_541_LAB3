



const billAmount = document.getElementById('billtotal');
const tip = document.getElementById('tip');

billAmount.addEventListener('change', updateValue);
tip.addEventListener('change', updateValue);

function updateValue(e) {
	
   
   var bill = document.getElementById('billtotal').value;
   var tipValue = document.getElementById('tip').value;
   
     if(Number(bill) > 0) { 
		 document.getElementById('tipPercentage').value = tipValue;
         let tipAmount = tipValue/100*bill;
		 console.log(tipAmount)
		 document.getElementById('tipAmount').value = tipAmount;
         let tip = Math.round(tipAmount*100)/100;
         document.getElementById('tipAmount').value = tip;
         let totalBillWithTip = Number(bill) + Number(tip) ;
         document.getElementById('totalBillWithTip').value = Math.round(totalBillWithTip*100)/100;
	 }
	 else if(Number(bill) <= 0){
		 alert("Bill amount cannot be 0 or less than 0");  
	 }
	 else if(bill === '.'){
		 alert("Bill amount should be a number");  
	 }

 
  
}