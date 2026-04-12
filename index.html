<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Currency Exchange</title>

<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap" rel="stylesheet">
<script src="https://js.stripe.com/v3/"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>
:root{
  --bg:#d4d4d4;
  --text:#000;
}
*{box-sizing:border-box;}
body{
  margin:0;
  padding:40px;
  background:var(--bg);
  color:var(--text);
  font-family:"JetBrains Mono",monospace;
}
.container{max-width:1000px;margin:auto;}

h1{
  font-size:28px;
  letter-spacing:2px;
  border-bottom:1px solid black;
  padding-bottom:10px;
  margin-bottom:30px;
  text-align:center;
}

.nav-links{
  display:flex;
  justify-content:center;
  gap:20px;
  margin-bottom:30px;
  flex-wrap:wrap;
  font-size:14px;
}

.nav-link{
  text-decoration:none;
  color:black;
  padding-bottom:4px;
  border-bottom:1px solid transparent;
  opacity:0.6;
}
.nav-link:hover{border-bottom:1px solid black;opacity:1;}
.nav-link.active{border-bottom:1px solid black;font-weight:bold;opacity:1;}

.panel{
  margin-top:30px;
  border:1px solid black;
  padding:25px;
  text-align:center;
  overflow:visible;
}

.panel strong{display:block;margin-bottom:12px;}

#valueChart{
  width:100%!important;
  height:260px !important;
  padding-right:40px;
}

.blurb{
  font-size:14px;
  line-height:1.6;
  max-width:700px;
  margin:auto;
}

input, select{
  width:100%;
  padding:12px;
  margin-top:10px;
  border:1px solid black;
  text-align:center;
  font-family:"JetBrains Mono", monospace;
  font-size:14px;
  background:black;
  color:white;
}

button{
  width:100%;
  margin-top:12px;
  padding:12px;
  background:black;
  color:white;
  border:1px solid black;
  cursor:pointer;
}
button:hover{background:white;color:black;}

.secondary{background:white;color:black;}
.secondary:hover{background:black;color:white;}

.apple-pay-btn{margin-top:10px;padding:14px;}

table{
  width:100%;
  margin-top:30px;
  border-collapse:collapse;
}
th,td{
  padding:14px;
  border-bottom:1px solid black;
  text-align:center;
  font-size:14px;
}

.view{display:none;}
.view.active{display:block;}

.footer{
  margin-top:50px;
  padding-top:20px;
  border-top:1px solid black;
  text-align:center;
  font-size:12px;
}

.modal{
  position:fixed;
  top:0;left:0;width:100%;height:100%;
  background:rgba(0,0,0,0.6);
  display:none;
  justify-content:center;
  align-items:center;
}

.modal-content{
  background:#d4d4d4;
  padding:30px;
  border:1px solid black;
  max-width:400px;
  width:100%;
  text-align:center;
}
</style>
</head>

<body>
<div class="container">

<div class="nav-links">
  <a href="#" class="nav-link active" onclick="switchView('market', this)">MARKET</a>
  <a href="#" class="nav-link" onclick="switchView('transactions', this)">TRANSACTIONS</a>
</div>

<!-- MARKET -->
<div id="marketView" class="view active">
<h1>CURRENCY EXCHANGE</h1>

<div class="panel">
<strong>GLOBAL DOLLAR</strong>
<p id="liveGlobal">$100.00</p>
</div>

<div class="panel">
<strong>VALUE TREND</strong>
<canvas id="valueChart"></canvas>
</div>

<div class="panel">
<strong>AI MARKET SYSTEM</strong>
<p class="blurb">
Real-time adaptive trading system analyzing global markets and dynamically allocating capital.
</p>
</div>

<table>
<thead>
<tr><th>ASSET</th><th>VALUE</th><th>CHANGE</th><th>NET %</th></tr>
</thead>
<tbody id="tradeTable"></tbody>
</table>

<div class="panel"><strong>BALANCE</strong><p id="allocatedAmount">$0</p></div>
<div class="panel"><strong>TOTAL EARNED</strong><p id="totalEarned">$0</p></div>
</div>

<!-- TRANSACTIONS -->
<div id="transactionsView" class="view">
<h1>TRANSACTIONS</h1>
<table>
<thead>
<tr><th>TYPE</th><th>AMOUNT</th><th>STATUS</th><th>TIME</th></tr>
</thead>
<tbody id="txTable"></tbody>
</table>
</div>

<div class="panel">
<strong>BANK</strong>
<button onclick="openDepositModal()">Deposit</button>
<button onclick="openWithdrawModal()">Send</button>
<button id="applePayBtn" class="apple-pay-btn">Pay with  Apple Pay</button>
</div>

<div class="footer">
© <span id="year"></span> Clean, Inc.
</div>

</div>

<script>
const stripe = Stripe("pk_test_YOUR_PUBLIC_KEY");
const assets = ["EURUSD","USDJPY","GBPUSD"];

document.getElementById("year").innerText = new Date().getFullYear();

/* TABLE */
assets.forEach(a=>{
  const row=document.createElement("tr");
  row.innerHTML=`<td>${a}</td><td id="${a}">--</td><td>-</td><td>-</td>`;
  tradeTable.appendChild(row);
});

/* CHART DATA */
let assetValues = [0,0,0];

/* CROSSHAIR */
const crosshairPlugin={
  id:'crosshair',
  afterDraw(chart){
    if(!chart.tooltip._active?.length)return;
    const ctx=chart.ctx;
    const x=chart.tooltip._active[0].element.x;
    const y=chart.tooltip._active[0].element.y;

    ctx.save();
    ctx.strokeStyle="#000";
    ctx.lineWidth=0.5;

    ctx.beginPath();
    ctx.moveTo(x,chart.chartArea.top);
    ctx.lineTo(x,chart.chartArea.bottom);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(chart.chartArea.left,y);
    ctx.lineTo(chart.chartArea.right,y);
    ctx.stroke();

    ctx.restore();
  }
};

/* PRICE LABEL */
const priceLabelPlugin={
  id:'priceLabel',
  afterDraw(chart){
    const ctx=chart.ctx;
    const data=chart.data.datasets[0].data;
    if(!data.length)return;

    const val=data[data.length-1];
    const y=chart.scales.y.getPixelForValue(val);

    ctx.save();
    ctx.fillStyle="#000";
    ctx.font="10px JetBrains Mono";
    ctx.fillText("$"+val,chart.chartArea.right+6,y+3);
    ctx.restore();
  }
};

const ctx=document.getElementById("valueChart").getContext("2d");

const valueChart=new Chart(ctx,{
  type:"line",
  data:{
    labels:assets,
    datasets:[{
      label:"Asset Value",
      data:assetValues,
      borderColor:"#000",
      tension:0,
      borderWidth:1.5,
      pointRadius:3,
      pointBackgroundColor:"#000"
    }]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    animation:false,
    interaction:{mode:"index",intersect:false},
    plugins:{
      legend:{display:false},
      title:{
        display:true,
        text:"GLOBAL DOLLAR VALUE BY ASSET",
        color:"#000",
        font:{family:"JetBrains Mono",size:14}
      },
      tooltip:{
        backgroundColor:"#000",
        titleColor:"#fff",
        bodyColor:"#fff",
        displayColors:false,
        callbacks:{label:(ctx)=>"$"+ctx.raw}
      }
    },
    scales:{
      x:{
        title:{display:true,text:"ASSET",color:"#000"},
        ticks:{color:"#000",font:{family:"JetBrains Mono",size:10}},
        grid:{display:false},
        border:{color:"#000"}
      },
      y:{
        ticks:{color:"#000",font:{family:"JetBrains Mono",size:10},callback:v=>"$"+v},
        grid:{color:"rgba(0,0,0,0.08)",lineWidth:0.5},
        border:{color:"#000"}
      }
    }
  },
  plugins:[crosshairPlugin,priceLabelPlugin]
});

/* LIVE DATA */
let globalValue = 100;

setInterval(()=>{

  assets.forEach(a=>{
    const val = (Math.random()*2).toFixed(4);
    document.getElementById(a).innerText = val;
  });

  globalValue += (Math.random()-0.5)*2;
  if(globalValue < 0) globalValue = 0;

  liveGlobal.innerText = "$" + globalValue.toFixed(2);

  assetValues = assets.map(() =>
    (Math.random()*2 + globalValue).toFixed(4)
  );

  valueChart.data.datasets[0].data = assetValues;
  valueChart.update();

},1000);

/* VIEW SWITCH */
function switchView(view,el){
  event.preventDefault();
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach(l=>l.classList.remove("active"));
  if(view==="market")marketView.classList.add("active");
  if(view==="transactions")transactionsView.classList.add("active");
  el.classList.add("active");
}
</script>

</body>
</html>