var form=document.getElementById("form"); 

function handleevent(event){
  event.prevent();
}

function submit(){
  var odd1=document.getElementById("bet_1").value;
  var odd2=document.getElementById("bet_2").value;
  var stake=document.getElementById("stake").value;
  var x=document.getElementById("bet1");
  var y=document.getElementById("bet2");
  var pay1=document.getElementById("payy1");
  var pay2=document.getElementById("payy2");
  var stake_1=document.getElementById("bett1");
  var stake_2=document.getElementById("bett2");
  var total_payout=document.getElementById("span_t_pay");
  var total_profit=document.getElementById("span_t_profit");
  var rio=document.getElementById("rio1");
  var qu= parseFloat(odd1) + parseFloat(odd2); 
  var tp,rt;

  z=odd1 * odd2;// process of finding total payout
  z*=stake;// process of finding total payout
  z/=qu;//total payout
  
  y=z/odd1;// amount to be but on odd 1
  x=z/odd2;// amount to be but on odd1
  
  tp=z-stake;//total profit
  rt=tp * 100;
  rt/=stake;//proit in perc

  total_payout.innerHTML=z.toFixed(3);
  total_profit.innerHTML=tp.toFixed(3);
  rio.innerHTML=rt.toFixed(3);
  stake_1.innerHTML=y.toFixed(3);
  stake_2.innerHTML=x.toFixed(3);
  pay1.innerHTML=z.toFixed(3);
  pay2.innerHTML=z.toFixed(3);
  
}

function rest(){
 let odd1=document.getElementById("bet_1").value="";
 let odd2=document.getElementById("bet_2").value="";
 let stake=document.getElementById("stake").value="";
 let x=document.getElementById("bet1");
 let y=document.getElementById("bet2");
 let pay1=document.getElementById("payy1");
 let pay2=document.getElementById("payy2");
 let stake_1=document.getElementById("bett1");
 let stake_2=document.getElementById("bett2");
 let total_payout=document.getElementById("span_t_pay");
 let total_profit=document.getElementById("span_t_profit");
 let rio=document.getElementById("rio1");
 var z,tp,rt=0;
 y=0;z=0;tp=0;x=0;
 total_payout.innerHTML=z + "00";
  total_profit.innerHTML=tp+ "00";
  rio.innerHTML=rt+ "00";
  stake_1.innerHTML=y+ "00";
  stake_2.innerHTML=x+ "00";
  pay1.innerHTML=z+ "00";
  pay2.innerHTML=z+ "00";
}
