const grafico = document.getElementById("mygrafico").getContext("2dc");
const meuGrafico = new Chart(grafico,{
    type:"pie",
    date: {
        labels: [
 "Instagram",
 "WhatsApp",
 "Facebook",
 "WeChat",
 "TikTok",
 "DouYin",
 "Twitter",
 "Telegram",
 "FB Messenger",
 "LINE"
]

}

}

)