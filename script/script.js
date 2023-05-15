
function firstRowAnim(){
      $(".flag").animate({"margin-top":"0",
      opacity:1
      },500,firstTextCon);
}  
function firstTextCon(){
  $(".movingDiv").animate({"margin-left": "-.5vw",
  opacity:1
  },500,"swing",secondRowAnim);
}
function secondRowAnim(){
  $(".flag2").animate({"margin-top":"0",
  opacity:1
  },500,secondTextCon);
}
function secondTextCon(){
  $(".movingDiv2").animate({"margin-left": "-.5vw",
  opacity:1
  },500,"swing",secondRowAnim);
}  




var x=[["imgForFiba/phFlag.png","PHI","PHILIPPINES","Asia","Pot1"],
["imgForFiba/spainFlag.png","ESP","SPAIN","Europe","Pot1"],
["imgForFiba/usaFlag.png","USA","UNITED STATES OF AMERICA","America","Pot1"],
["imgForFiba/australiaFlag.png","AUS","AUSTRALIA","Oceana","Pot1"],
["imgForFiba/franceFlag.png","FRA","FRANCE","Europe","Pot2"],
["imgForFiba/serbiaFlag.png","SRB","SERBIA","Europe","Pot2"],
["imgForFiba/sloveniaFlag.png","SLO","SLOVENIA","Europe","Pot2"],
["imgForFiba/lithuiniaFlag.png","LTU","LITHUANIA","Europe","Pot2"],
["imgForFiba/greeceFlag.png","GRE","GREECE","Europe","Pot3"],
["imgForFiba/italyFlag.png","ITA","ITALY","Europe","Pot3"],
["imgForFiba/germanyFlag.png","GER","GERMANY","Europe","Pot3"],
["imgForFiba/brazilFlag.png","BRA","BRAZIL","America","Pot3"],
["imgForFiba/canadaFlag.png","CAN","CANADA","America","Pot4"],
["imgForFiba/venezuelaFlag.png","VEN","VENEZUELA","America","Pot4"],
["imgForFiba/montenegroFlag.png","MNE","MONTENEGRO","Europe","Pot4"],
["imgForFiba/puertoRicoFlag.png","PUR","PUERTO RICO","America","Pot4"],
["imgForFiba/iranFlag.png","IRI","IRAN","Asia","Pot5"],
["imgForFiba/dominicanRepublicFlag.png","DOM","DOMINICAN REPUBLIC","America","Pot5"],
["imgForFiba/finlandFlag.png","FIN","FINLAND","Europe","Pot5"],
["imgForFiba/newZealandFlag.png","NZL","NEW ZEALAND","Oceana","Pot5"],
["imgForFiba/chinaFlag.png","CHN","CHINA","Asia","Pot6"],
["imgForFiba/latviaFlag.png","LAT","LATVIA","Europe","Pot6"],
["imgForFiba/mexicoFlag.png","MEX","MEXICO","America","Pot6"],
["imgForFiba/georgiaFlag.png","GEO","GEORGIA","Europe","Pot6"],
["imgForFiba/jordanFlag.png","JOR","JORDAN","Asia","Pot7"],
["imgForFiba/japanFlag.png","JPN","JAPAN","Asia","Pot7"],
["imgForFiba/angolaFlag.png","ANG","ANGOLA","Africa","Pot7"],
["imgForFiba/ivoryCoastFlag.png","CIV","IVORY COAST","Africa","Pot7"],
["imgForFiba/lebanonFlag.png","LBN","LEBANON","Asia","Pot8"],
["imgForFiba/egyptFlag.png","EGY","EGYPT","Africa","Pot8"],
["imgForFiba/southSudanFlag.png","SSD","SOUTH SUDAN","Africa","Pot8"],
["imgForFiba/capeVerdeFlag.png","CPV","CAPE VERDE","Africa","Pot8"]
]


var y=[];
 y[0]="flag";
 y[1]="flag2";
var movingDivs=[];
movingDivs[0]="movingDiv";
movingDivs[1]="movingDiv2";

$(document).ready(function(){
  createRows();

  firstRowAnim();
 
 
})

var part=[];
part[0]="#part1";
part[1]="#part2";
part[2]="#part3";
part[3]="#part4";
part[4]="#part5";
part[5]="#part6"; 
part[6]="#part7";
part[7]="#part8";
var country=[];
country[0]="Philippines";
country[1]="Spain";
country[2]="United States of America";
country[3]="Australia";
country[4]="France";
country[5]="Serbia";
country[6]="Slovenia";
country[7]="Lithuania";
country[8]="Greece";
country[9]="Italy";
country[10]="Germany";
country[11]="Brazil";
country[12]="Canada";
country[13]="Venezuela";
country[14]="Montenegro";
country[15]="Puerto Rico";
country[16]="Iran";
country[17]="Dominican Republic";
country[18]="Finland";
country[19]="New Zealand";
country[20]="China";
country[21]="Latvia";
country[22]="Mexico";
country[23]="Georgia";
country[24]="Jordan";
country[25]="Japan";
country[26]="Angola";
country[27]="Ivory Coast";
country[28]="Lebanon";
country[29]="Egypt";
country[30]="South Sudan";
country[31]="Cape Verde"; 
var rank=[];
rank[0]="World Rk.:40th Asia Rk:8th";
rank[1]="World Rk.:1st Europe Rk:1st";
rank[2]="World Rk.:2nd America Rk:1st";
rank[3]="World Rk.:3rd Asia Rk:1st";
rank[4]="World Rk.:5th Europe Rk:2nd";
rank[5]="World Rk.:6th Europe Rk:3rd";
rank[6]="World Rk.:7th Europe Rk:4th";
rank[7]="World Rk.:8th Europe Rk:5th";
rank[8]="World Rk.:9th Europe Rk:6th";
rank[9]="World Rk.:10th Europe Rk:7th";
rank[10]="World Rk.:11th Europe Rk:8th";
rank[11]="World Rk.:13th America Rk:3rd";
rank[12]="World Rk.:15th America Rk:4th";
rank[13]="World Rk.:17th America Rk:5th";
rank[14]="World Rk.:18th Europe Rk:12th";
rank[15]="World Rk.:21st America Rk:6th";
rank[16]="World Rk.:20th Asia Rk:2nd";
rank[17]="World Rk.:25th America Rk:7th";
rank[18]="World Rk.:24th Europe Rk:13th";
rank[19]="World Rk.:26th Asia Rk:3rd";
rank[20]="World Rk.:27th Asia Rk:4th";
rank[21]="World Rk.:29th Europe Rk:16th";
rank[22]="World Rk.:31st America Rk:8th";
rank[23]="World Rk.:32nd Europe Rk:18th";
rank[24]="World Rk.:34th Asia Rk:5th";
rank[25]="World Rk.:36th Asia Rk:6th";
rank[26]="World Rk.:41st Africa Rk:4th";
rank[27]="World Rk.:43rd Africa Rk:5th";
rank[28]="World Rk.:42nd Asia Rk:9th";
rank[29]="World Rk.:55th Africa Rk:6th";
rank[30]="World Rk.:63rd Africa Rk:7th";
rank[31]="World Rk.:66th Africa Rk:8th";
var lastWorlcup=[]
lastWorlcup[0]="32nd(W0-L5)"
lastWorlcup[1]="1st(W8-L0)"
lastWorlcup[2]="7th(W6-L2)"
lastWorlcup[3]="4th(W6-L2)"
lastWorlcup[4]="3rd(W6-L2)"
lastWorlcup[5]="5th(W6-L2)"
lastWorlcup[6]="Fails to Qualify"
lastWorlcup[7]="9th(W3-L2)"
lastWorlcup[8]="11th(W3-L2)"
lastWorlcup[9]="10th(W3-L2)"
lastWorlcup[10]="18th(W3-L2)"
lastWorlcup[11]="13th(W3-L2)"
lastWorlcup[12]="21st(W2-L3)"
lastWorlcup[13]="14th(W2-L3)"
lastWorlcup[14]="25th(W1-L4)"
lastWorlcup[15]="15th(W2-L3)"
lastWorlcup[16]="23rd(W2-L3)"
lastWorlcup[17]="16th(W2-L3)"
lastWorlcup[18]="Fails to Qualify"
lastWorlcup[19]="19th(W3-L2)"
lastWorlcup[20]="24th(W2-L3)"
lastWorlcup[21]="Fails to Qualify"
lastWorlcup[22]="Fails to Qualify"
lastWorlcup[23]="Fails to Qualify"
lastWorlcup[24]="28th(W1-L4)"
lastWorlcup[25]="31st(W0-L5)"
lastWorlcup[26]="27th(W1-L4)"
lastWorlcup[27]="29th(W0-L5)"
lastWorlcup[28]="Fails to Qualify"
lastWorlcup[29]="Fails to Qualify"
lastWorlcup[30]="Fails to Qualify"
lastWorlcup[31]="Fails to Qualify"
var bestFinsh=[]
bestFinsh[0]="3rd(1954)"
bestFinsh[1]="1st('06,'19)"
bestFinsh[2]="1st('54,'86,'94,'10,'14)"
bestFinsh[3]="4th(2019)"
bestFinsh[4]="3rd('14,'19)"
bestFinsh[5]="1st('98,'02)"
bestFinsh[6]="7th(2014)"
bestFinsh[7]="3rd(2010)"
bestFinsh[8]="2nd(2006)"
bestFinsh[9]="4th('70,'78)"
bestFinsh[10]="3rd(2002)"
bestFinsh[11]="1st('59,'63)"
bestFinsh[12]="6th('78,'82)"
bestFinsh[13]="11th(1990)"
bestFinsh[14]="25th(2019)"
bestFinsh[15]="4th(1990)"
bestFinsh[16]="19th(2010)"
bestFinsh[17]="12th(1978)"
bestFinsh[18]="22nd(2014)"
bestFinsh[19]="4th(2002)"
bestFinsh[20]="8th(1994)"
bestFinsh[21]="Debut"
bestFinsh[22]="8th(1967)"
bestFinsh[23]="Debut"
bestFinsh[23]="23rd(2010)"
bestFinsh[24]="11th(1967)"
bestFinsh[25]="11th(1967)"
bestFinsh[26]="9th(2006)"
bestFinsh[27]="13th(1982)"
bestFinsh[28]="16th(2002)"
bestFinsh[29]="5th(1950)"
bestFinsh[30]="Debut"
bestFinsh[31]="Debut"
var k;
var l=4;
var o=0;
var w=0;
function createRows(){
  for(var i=0;i<8;i++){
    if(i>=4){
      w=1;
    }
    for(k=o;k<l;k++){
    $(part[i]).append($('<img>',{class: y[w] ,src:x[k][0]}));
    $(part[i]).append(
"<div class='fixDiv'>"+
      "<div class="+movingDivs[w]+">"+
      "<div class='data'>"+
      "<b>"+country[k]+"</b><br>"+rank[k]+"<br>2019 World Cup: "+lastWorlcup[k]+"<br>Best Finish: "+bestFinsh[k]+"</div>"+
      "<img class='backCon' src='imgForFiba/blankTextCon.png'>"+
      "</div>"+
 "</div> ");
    }
    o+=4;
    l+=4;
   
  }
}

$(document).ready(function(){
$("#play").click(function(){
  $(this).attr("src", $(this).attr('src')==='imgForFiba/play.png'?'imgForFiba/pause.png':'imgForFiba/play.png' );
  $(this).css("opacity", "1")
});
});

$(document).ready(function(){
  for(var x =0; x<=5;x++){
    zero();
  }
two();
});

function zero(){
  $(".perCountry").animate({"margin-top":"-2.5vw",
  "opacity":"0",
  },100,one);
}

function one(){
  $(".perCountry").css({"opacity":"0",
  "margin-top":"2.5vw",
  "opacity":"1",
  });
 
}

function two(){
  $(".perCountry").animate({"margin-top":"0vw",
  "opacity":"1",
  },500);
}
  


$(document).ready(function(){

  $(".click").click(function(){
    $(".click").prop("disabled", true);
    $(".click").html('Draw in Progress...');
   
    preSelected();
    systemMessage(0)
    setTimeout(() => {
      start()
    }, 2500);

    setTimeout(() => {
      systemMessage(1)
    }, 3000);

    setTimeout(() => {
      systemMessage(2)
    }, 5000);

  })
});

$(document).ready(function(){
  $(".officialResultButton").click(function(){
    window.open("https://www.fiba.basketball/images.fiba.com/Graphic/5/B/9/A/NZh7e9YBa0mBRHg65pYPVQ.jpg?v=20230508144219332", "_blank");
  })
})

function blink(){
  for(let x=0;x<=10;x++){
    $(".click").animate({"opacity":".5"},300)
    $(".click").animate({"opacity":"1"},300)
  }
}
function start(){
  blink();
  var speed=100;
  let potIndex=1;
  let randomRange;

  if(pots[1].length!=0){
    potIndex=1;
    randomRange = pots[1].length -1;
  }

  else if(pots[2].length!=0){
    randomRange = pots[2].length -1;
    potIndex=2;
    }
  else if(pots[3].length!=0){
    randomRange = pots[3].length -1;
    potIndex=3;
    }
  else if(pots[4].length!=0){
    randomRange = pots[4].length -1;
    potIndex=4;
    } 
  else if(pots[5].length!=0){
    randomRange = pots[5].length -1;
    potIndex=5;
    }
  else if(pots[6].length!=0){
    randomRange = pots[6].length -1;
    potIndex=6;
    }
  else if(pots[7].length!=0){
    randomRange = pots[7].length -1;
    potIndex=7;
    }
  else if(pots[8].length!=0){
    randomRange = pots[8].length -1;
    potIndex=8;
    if(pots[8].length==1){
      $(".click").html("Draw Done!")
    }
    }       
  else{
   
  }
  availableGroup(potIndex);
  console.log("potNumber "+potIndex)
 unknownBegin(speed,potIndex, randomRange);
 draw++;

 $(".log").append("Draw: "+draw+"<br>");  
 $('#logId').animate({scrollTop: $('#logId').prop('scrollHeight')});
}
var draw=0


var pots=[[

      ],
      [ //pot1
        [x[1][0],x[1][1],x[1][2],x[1][3],x[1][4],"#pot1_2"], //0=imgSrc, 1=ioc, 2=countryName, 3=region, 4=potIndex 
        [x[3][0],x[3][1],x[3][2],x[3][3],x[3][4],"#pot1_4"]
      ],
      [ //pot2
        [x[4][0],x[4][1],x[4][2],x[4][3],x[4][4],"#pot2_1"], 
        [x[5][0],x[5][1],x[5][2],x[5][3],x[5][4],"#pot2_2"],  
        [x[7][0],x[7][1],x[7][2],x[7][3],x[7][4],"#pot2_4"]
      ],
      [ //pot3
        [x[8][0],x[8][1],x[8][2],x[8][3],x[8][4],"#pot3_1"], 
        [x[9][0],x[9][1],x[9][2],x[9][3],x[9][4],"#pot3_2"],  
        [x[10][0],x[10][1],x[10][2],x[10][3],x[10][4],"#pot3_3"],
        [x[11][0],x[11][1],x[11][2],x[11][3],x[11][4],"#pot3_4"]
      ],
      [ //pot4
        [x[13][0],x[13][1],x[13][2],x[13][3],x[13][4],"#pot4_2"], 
        [x[14][0],x[14][1],x[14][2],x[14][3],x[14][4],"#pot4_3"],  
        [x[15][0],x[15][1],x[15][2],x[15][3],x[15][4],"#pot4_4"]
      ],
      [ //pot5
        [x[16][0],x[16][1],x[16][2],x[16][3],x[16][4],"#pot5_1"], 
        [x[17][0],x[17][1],x[17][2],x[17][3],x[17][4],"#pot5_2"],  
        [x[18][0],x[18][1],x[18][2],x[18][3],x[18][4],"#pot5_3"],
        [x[19][0],x[19][1],x[19][2],x[19][3],x[19][4],"#pot5_4"]
      ],
      [ //pot6
        [x[20][0],x[20][1],x[20][2],x[20][3],x[20][4],"#pot6_1"], 
        [x[21][0],x[21][1],x[21][2],x[21][3],x[21][4],"#pot6_2"],  
        [x[22][0],x[22][1],x[22][2],x[22][3],x[22][4],"#pot6_3"],
        [x[23][0],x[23][1],x[23][2],x[23][3],x[23][4],"#pot6_4"]
      ],
      [ //pot7
        [x[24][0],x[24][1],x[24][2],x[24][3],x[24][4],"#pot7_1"],  
        [x[26][0],x[26][1],x[26][2],x[26][3],x[26][4],"#pot7_3"],
        [x[27][0],x[27][1],x[27][2],x[27][3],x[27][4],"#pot7_4"]
      ],
      [ //pot8
        [x[28][0],x[28][1],x[28][2],x[28][3],x[28][4],"#pot8_1"], 
        [x[29][0],x[29][1],x[29][2],x[29][3],x[29][4],"#pot8_2"],  
        [x[30][0],x[30][1],x[30][2],x[30][3],x[30][4],"#pot8_3"],
        [x[31][0],x[31][1],x[31][2],x[31][3],x[31][4],"#pot8_4"]
      ]
];

function removeFromPot(pot, index){
      pots.shi
}

function unknownBegin(speed, potIndex, randomRange){
  $(".unknownMovingDiv").animate({"left":"-40vw"},500,function(){
    $(".unknownNumber").attr({"src":"imgForFiba/unknown.png"});
    unknownStart(speed, potIndex, randomRange);
  });
}

function unknownStart(speed, potIndex, randomRange){
  let index;
  for(var x =0; x<=20;x++){

    let random = Math.random() * randomRange;
    let randomRound = Math.round(random);


index = randomRound;
  $(".unknown").animate({"top":"-8vw",
  },speed,function(){
    unknownReset(randomRound, potIndex);
  });

  if(x==17){
    speed=500;
  }
}
unknownDone(index, potIndex);
}

function unknownReset(index, potIndex){
  $(".unknown").css({"opacity":"0",
  "top":"10vw",
  "opacity":"1",
  });
  $(".unknown").attr("src",pots[potIndex][index][0]);
}
function unknownDone(index, potIndex){
  $(".unknown").animate({"top":"0vw",
  "opacity":"1",
  },500,function(){unknownTextCon(index, potIndex)});
 
}
function unknownTextCon(index, potIndex){
  $(".movingtext").empty().prepend(pots[potIndex][index][1]);
  $(".movingFullText").empty().prepend(pots[potIndex][index][2]);
  $(".unknownMovingDiv").animate({"left":"0"},500,function(){groupSelection(index, potIndex)});
  $(".log").append("Country: "+pots[potIndex][index][2]+"<br>");
  $('#logId').animate({scrollTop: $('#logId').prop('scrollHeight')});
}
function groupSelection(index, potIndex){
var region=pots[potIndex][index][3];
var pot=pots[potIndex][index][4];;
var ioc = pots[potIndex][index][1];
var flag = pots[potIndex][index][0];
var loc = pots[potIndex][index][5];;
console.log("IOC"+ioc+" / region " + region+ " /  pot "+pot);
availSlot=[];

var whatGroup=0;
var potClear;
var regionClear;

var whatPot;


  if(potIndex%2!=0){
    console.log("ODD Pot")
    whatPot=1
  }
  else{
    console.log("EVEN");
    whatPot=2;
  }
  var skipGroup;
  var chn=100;
    if(ioc==="BRA"){
      var groupForBra;
      braLoop:
      for(let x=whatPot;x<=8;x+=2){
        groupForBra=checkIOC(x,"ESP")
        if(groupForBra!=100){
          console.log("BREAKKKKKKKKKKKKKKKKKKKKKK")
          break braLoop;
        }
      }
      console.log("group for brazil "+groupForBra);
        for(let i=0;i<4;i++){
          console.log(groupForBra +" and "+i)
          if(groups[groupForBra][i][0]===("")){
            availSlot.push(i);
            console.log(groups[groupForBra][i][0])
            console.log("availSlot "+availSlot)
          }
          else{
            console.log("may laman")
          }
        }  

    
        if(availSlot.length!=0){
          console.log("group dapat ay " + whatGroup)
          whatGroup=groupForBra;

          $("#group"+groupNumToLetters(groupForBra)).animate({"margin-top":"0"},100);
          disalbeGroup(groupNumToLetters(groupForBra));
      
          var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
            
        }
 
    }
    else if(ioc==="SSD" || ioc==="CPV" || ioc==="EGY"){
      ssdcpvegyLoop:
      for(let x=whatPot;x<=8;x+=2){
         chnLoc=checkIOC(x,"CHN2")
        if(chnLoc!=100){
          console.log("chn found in "+chnLoc)
          break ssdcpvegyLoop;
        }
      }
     
        if(pots[potIndex].length===2 && chnLoc>4){
          console.log("LEBANON")
          console.log([pots[potIndex][0][1]])
          if(pots[potIndex][0][1] === "LBN" || pots[potIndex][1][1] === "LBN") {
            console.log("LEBANONTWOOOOOOOOOOO")
            var chnLoc;
     
          for(let i=0;i<4;i++){
            console.log(chnLoc +" and "+i)
            if(groups[chnLoc][i][0]===("")){
              availSlot.push(i);
              console.log(groups[chnLoc][i][0])
              console.log("availSlot "+availSlot)
            }
            else{
              console.log("may laman")
            }
          }

          if(availSlot.length!=0){
            console.log("group dapat ay " + whatGroup)
            whatGroup=chnLoc;
  
            $("#group"+groupNumToLetters(chnLoc)).animate({"margin-top":"0"},100);
            disalbeGroup(groupNumToLetters(chnLoc));
        
            var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
              
          }
        }
        else{
          outerloop3:
          for(let x=whatPot;x<=8;x+=2){
            console.log("X counter "+x);
            console.log("Skip Group "+skipGroup);
            console.log("chn "+chn);
              if(x==skipGroup){
                continue outerloop3;
              }
      
              else{
              potClear=checkPot(x, pot);
              regionClear=checkRegion(x, region);     
              console.log(potClear +" "+ regionClear)
      
              
                    var other;
                    //check available slot number
               
                      console.log("ito naman!")
                      console.log("potClear "+potClear +" regionClear "+regionClear)
                      if(potClear==1 && regionClear==1){
                        console.log("ito nman 2")
                        console.log(groups)
                        for(let i=0;i<4;i++){
                          console.log(x +" and "+i)
                          if(groups[x][i][0]===("")){
                            availSlot.push(i);
                            console.log(groups[x][i][0])
                            console.log("availSlot "+availSlot)
                          }
                          else{
                            console.log("may laman")
                          }
                        }  
            
                    
                        if(availSlot.length!=0){
                          console.log("group dapat")
                          whatGroup=x;
                          $("#group"+groupNumToLetters(x)).animate({"margin-top":"0"},100);
                          disalbeGroup(groupNumToLetters(x));
                      
                          var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
                
                          console.log("two")              
                        }
                        break outerloop3;
                      } 
                } 
            }
        }
      }
      else{
        outerloop3:
        for(let x=whatPot;x<=8;x+=2){
          console.log("X counter "+x);
          console.log("Skip Group "+skipGroup);
          console.log("chn "+chn);
            if(x==skipGroup){
              continue outerloop3;
            }
    
            else{
            potClear=checkPot(x, pot);
            regionClear=checkRegion(x, region);     
            console.log(potClear +" "+ regionClear)
    
            
                  var other;
                  //check available slot number
             
                    console.log("ito naman!")
                    console.log("potClear "+potClear +" regionClear "+regionClear)
                    if(potClear==1 && regionClear==1){
                      console.log("ito nman 2")
                      console.log(groups)
                      for(let i=0;i<4;i++){
                        console.log(x +" and "+i)
                        if(groups[x][i][0]===("")){
                          availSlot.push(i);
                          console.log(groups[x][i][0])
                          console.log("availSlot "+availSlot)
                        }
                        else{
                          console.log("may laman")
                        }
                      }  
          
                  
                      if(availSlot.length!=0){
                        console.log("group dapat")
                        whatGroup=x;
                        $("#group"+groupNumToLetters(x)).animate({"margin-top":"0"},100);
                        disalbeGroup(groupNumToLetters(x));
                    
                        var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
              
                        console.log("two")              
                      }
                      break outerloop3;
                    } 
              } 
          }
      }
    }
    
    else if(ioc==="FIN" || ioc==="NZL"){
        var domLoc;
        for(let x=whatPot;x<8;x+=2){
          domLoc=checkIOC(x, "DOM");
          if(domLoc!=100){
            break;
          }
        }
        var finNzlFound = checkIOC(x, ioc);
        console.log("domLOcccccccccccccccccc "+domLoc);
        console.log("FINNZLLLLLLLLLLLLLLLLLLLL "+finNzlFound)    
          var espLoc;
      if(finNzlFound!=100){
        finzlLoop:
        for(let x=whatPot;x<=8;x+=2){
          espLoc=checkIOC(x,"ESP")
          if(espLoc!=100){
            console.log("chn found in "+espLoc)
            break finzlLoop;
          }
        }
        for(let i=0;i<4;i++){
          console.log(espLoc +" and "+i)
          if(groups[espLoc][i][0]===("")){
            availSlot.push(i);
            console.log(groups[espLoc][i][0])
            console.log("availSlot "+availSlot)
          }
          else{
            console.log("may laman")
          }
        }

        if(availSlot.length!=0){
          console.log("group dapat ay " + whatGroup)
          whatGroup=espLoc;

          $("#group"+groupNumToLetters(espLoc)).animate({"margin-top":"0"},100);
          disalbeGroup(groupNumToLetters(espLoc));
      
          var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
            
        }
      }
      else if(domLoc==1){
        var finLoc;
        var nzlLoc;
        nzlloop:
        for(let x=whatPot;x<=8;x+=2){
          nzlLoc=checkIOC(x,"ESP");
          if(nzlLoc!=100){
            console.log("nzl found in "+nzlLoc)
            break nzlloop;
          }
        }
        if(ioc==="FIN"){
          finzlLoop:
        for(let x=whatPot;x<=8;x+=2){
          finLoc=checkIOC(x,"AUS");
          if(finLoc!=100){
            console.log("chn found in "+finLoc)
            break finzlLoop;
          }
        }
        for(let i=0;i<4;i++){
          console.log(finLoc +" and "+i)
          if(groups[finLoc][i][0]===("")){
            availSlot.push(i);
            console.log(groups[finLoc][i][0])
            console.log("availSlot "+availSlot)
          }
          else{
            console.log("may laman")
          }
        }

        if(availSlot.length!=0){
          console.log("group dapat ay " + whatGroup)
          whatGroup=finLoc;

          $("#group"+groupNumToLetters(finLoc)).animate({"margin-top":"0"},100);
          disalbeGroup(groupNumToLetters(finLoc));
      
          var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
            
        }
      }
      else if(ioc==="NZL" && nzlLoc==5){
        finzlLoop:
        for(let i=0;i<4;i++){
          console.log(nzlLoc +" and "+i)
          if(groups[nzlLoc][i][0]===("")){
            availSlot.push(i);
            console.log(groups[nzlLoc][i][0])
            console.log("availSlot "+availSlot)
          }
          else{
            console.log("may laman")
          }
        }

        if(availSlot.length!=0){
          console.log("group dapat ay " + whatGroup)
          whatGroup=nzlLoc;

          $("#group"+groupNumToLetters(nzlLoc)).animate({"margin-top":"0"},100);
          disalbeGroup(groupNumToLetters(nzlLoc));
      
          var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
            
        }
      }
      else{
        outerloop3:
        for(let x=whatPot;x<=8;x+=2){
          console.log("X counter "+x);
          console.log("Skip Group "+skipGroup);
          console.log("chn "+chn);
            if(x==skipGroup){
              continue outerloop3;
            }
    
            else{
            potClear=checkPot(x, pot);
            regionClear=checkRegion(x, region);     
            console.log(potClear +" "+ regionClear)
    
            
                  var other;
                  //check available slot number
             
                    console.log("ito naman!")
                    console.log("potClear "+potClear +" regionClear "+regionClear)
                    if(potClear==1 && regionClear==1){
                      console.log("ito nman 2")
                      console.log(groups)
                      for(let i=0;i<4;i++){
                        console.log(x +" and "+i)
                        if(groups[x][i][0]===("")){
                          availSlot.push(i);
                          console.log(groups[x][i][0])
                          console.log("availSlot "+availSlot)
                        }
                        else{
                          console.log("may laman")
                        }
                      }  
          
                  
                      if(availSlot.length!=0){
                        console.log("group dapat")
                        whatGroup=x;
                        $("#group"+groupNumToLetters(x)).animate({"margin-top":"0"},100);
                        disalbeGroup(groupNumToLetters(x));
                    
                        var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
              
                        console.log("two")              
                      }
                      break outerloop3;
                    } 
              } 
          }
      }
      }
      
      else{
        outerloop2:
        for(let x=whatPot;x<=8;x+=2){
          console.log("X counter "+x);
          console.log("Skip Group "+skipGroup);
          console.log("chn "+chn);
            if(x==skipGroup){
              continue outerloop2;
            }
    
            else{
            potClear=checkPot(x, pot);
            regionClear=checkRegion(x, region);     
            console.log(potClear +" "+ regionClear)
    
            
                  var other;
                  //check available slot number
             
                    console.log("ito naman!")
                    console.log("potClear "+potClear +" regionClear "+regionClear)
                    if(potClear==1 && regionClear==1){
                      console.log("ito nman 2")
                      console.log(groups)
                      for(let i=0;i<4;i++){
                        console.log(x +" and "+i)
                        if(groups[x][i][0]===("")){
                          availSlot.push(i);
                          console.log(groups[x][i][0])
                          console.log("availSlot "+availSlot)
                        }
                        else{
                          console.log("may laman")
                        }
                      }  
          
                  
                      if(availSlot.length!=0){
                        console.log("group dapat")
                        whatGroup=x;
                        $("#group"+groupNumToLetters(x)).animate({"margin-top":"0"},100);
                        disalbeGroup(groupNumToLetters(x));
                    
                        var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
              
                        console.log("two")              
                      }
                      break outerloop2;
                    } 
              } 
          }
      }
  }

  
   
    else{

      if(ioc==="GRE" || ioc==="GER" || ioc==="ITA"){
        
        ggiLoop:
        for(let x=whatPot;x<=8;x+=2){
          skipGroup=checkIOC(x,"ESP")
          if(skipGroup!=100){
            break ggiLoop;
          }
        }
      }
      else if(ioc==="GEO" || ioc==="CHN" || ioc==="LAT"){
        geoLoop:
        for(let x=whatPot;x<=8;x+=2){
          skipGroup=checkRegion(x,"America")
          console.log("No America found in" +x)
          if(skipGroup==1){
            skipGroup=x;
            break geoLoop;
          }
        }
      }
      else if(ioc==="ANG" || ioc==="CIV"){
        geoLoop:
        for(let x=whatPot;x<=8;x+=2){
          skipGroup=checkRegion(x,"Asia")
          console.log("No Aisia found in" +x)
          if(skipGroup==1){
            skipGroup=x;
            break geoLoop;
          }
        }
      }
    outerloop:
    for(let x=whatPot;x<=8;x+=2){
      console.log("X counter "+x);
      console.log("Skip Group "+skipGroup);
      console.log("chn "+chn);
        if(x==skipGroup){
          continue outerloop;
        }

        else{
        potClear=checkPot(x, pot);
        regionClear=checkRegion(x, region);     
        console.log(potClear +" "+ regionClear)

        
              var other;
              //check available slot number
         
                console.log("ito naman!")
                console.log("potClear "+potClear +" regionClear "+regionClear)
                if(potClear==1 && regionClear==1){
                  console.log("ito nman 2")
                  console.log(groups)
                  for(let i=0;i<4;i++){
                    console.log(x +" and "+i)
                    if(groups[x][i][0]===("")){
                      availSlot.push(i);
                      console.log(groups[x][i][0])
                      console.log("availSlot "+availSlot)
                    }
                    else{
                      console.log("may laman")
                    }
                  }  
      
              
                  if(availSlot.length!=0){
                    console.log("group dapat")
                    whatGroup=x;
                    $("#group"+groupNumToLetters(x)).animate({"margin-top":"0"},100);
                    disalbeGroup(groupNumToLetters(x));
                
                    var slot = groupNumber(100,availSlot.length,whatGroup,region,pot,ioc,flag,loc);
          
                    console.log("two")              
                  }
                  break outerloop;
                } 
          } 
      }
    }
      pots[potIndex].splice(index,1);
      
    }    
     

  // if(!region.match(euro)){

  //   if(groupA.includes(pot)){

  //   }

  // }

var toDisable = [];
function disalbeGroup(letter){
toDisable = ["A","B","C","D","E","F","G","H"];
console.log("lettterrr====== "+letter)
console.log(toDisable);
for(let x=0;x<8;x++){
  if(toDisable[x]==letter){
    var index=x;
    toDisable.splice(index,1);
    toDisable.forEach(element => {$("#group"+element).animate({"margin-top":"2.5vw"},500);
    });
    break;
}
}
$(".log").append("Group: "+letter+"<br>");  
$('#logId').animate({scrollTop: $('#logId').prop('scrollHeight')});
}


function checkRegion(x, region){
  var regionClear;
  if(region==="Europe"){
    if(countEuro(x)>1){
      regionClear=0;
    }
    else{
      regionClear=1
      console.log("correct 1");
   
    }
}
else{
  for(let y=0;y<4;y++){
    if(groups[x][y].includes(region)){
      regionClear=0;
      break;
    }
    else{

    regionClear=1;

    }
  }

}

return regionClear;
}

function checkPot(x, pot){
  var potClear;
  for(let y=0;y<4;y++){
    if(groups[x][y].includes(pot)){
      console.log("samePot");
      potClear=0;
      break;       
    }
    else{
      potClear=1;
    }
  }

  return potClear;
}

function checkIOC(x,ioc){
  var gropforbra=100;
  if(ioc==="FIN" || ioc==="NZL"){
    for(let y=0;y<4;y++){
      if(groups[1][y].includes("FIN") || groups[1][y].includes("NZL")){
        console.log("finNzl Found");
        gropforbra=1;    
      }
    }
  }
  else if(ioc==="CHN" || ioc==="GEO"){
    console.log("CHN-GEO");
    for(let y=0;y<4;y++){
      if(groups[2][y].includes(ioc)){
        console.log("esp Found in " +x);
        gropforbra=4;
       break;       
      }
      else{
      }
    }
  }
  else if(ioc==="CHN2"){
    for(let y=0;y<4;y++){
      if(groups[x][y].includes("CHN")){
        console.log("chn Found in " +x);
        gropforbra=x;
       break;       
      }
      else{
      }
    }

  }
  else{
    for(let y=0;y<4;y++){
      if(groups[x][y].includes(ioc)){
        console.log(ioc+" Found in " +x);
        gropforbra=x;
      break;       
      }
      else{
      }
    }
  }
  return gropforbra;
}


function countEuro(x){
var count=0;
console.log("count x "+x)
for(let i=0;i<4;i++){
    if( groups[x][i].includes("Europe")){
      count++;
    }
  }
  return count;
}
var availSlot=[];

//[1][1][0]=cli
//[1][1][1]=pot
//[1][1][2]=region
var groups =[
 [[,,]],   //0
 [["","",""], //1 GroupA
  ["","",""],   
  ["","",""],   
  ["","",""]], 
 [["","",""], //2 GroupB
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //3 GroupC
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //4 GroupD
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //5 GroupE
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //6 GroupF
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //7 GroupG
  ["","",""],
  ["","",""],
  ["","",""]],  
 [["","",""], //8 GroupH
  ["","",""],
  ["","",""],
  ["","",""]]                  
];





//call after groupSelection
function groupNumber(speed, slotLength,groupNUm,region,pot,ioc,flag,loc){
var index;
  console.log(slotLength + "length")
  for(var x =0; x<10;x++){

    let random = Math.random() * (slotLength-1);
    let randomRound = Math.round(random);

  $(".unknownNumber").animate({"top":"-8vw",
  },speed,function(){
    resetGroupNumber(randomRound);
    console.log(randomRound + " random")
  });

  if(x==7){
    speed=500;
  }
  index = randomRound;
}


groupNumberDone(index, groupNUm, region, pot,ioc,flag,loc);
}
var groupNumberSrc = [];
groupNumberSrc[0]="imgForFiba/ONE.png"
groupNumberSrc[1]="imgForFiba/TWO.png"
groupNumberSrc[2]="imgForFiba/THREE.png"
groupNumberSrc[3]="imgForFiba/FOUR.png"

function resetGroupNumber(index){
  $(".unknownNumber").css({"opacity":"0",
  "top":"10vw",
  "opacity":"1",
  });
  $(".unknownNumber").attr("src",groupNumberSrc[availSlot[index]]);
}

function groupNumToLetters(groupNum){
  var letter;
  switch(groupNum){
    case 1: letter="A";
    break;
    case 2: letter="B";
    break;
    case 3: letter="C";
    break;
    case 4: letter="D";
    break;
    case 5: letter="E";
    break;
    case 6: letter="F";
    break;
    case 7: letter="G";
    break;
    case 8: letter="H";
    break;
  }
  return letter;
}
function groupNumberDone(index, groupNUm, region, pot, ioc,flag,loc){
  var group = groupNumToLetters(groupNUm);
  var number=availSlot[index]+1;
  setTimeout(() => {
    $(".log").append("Group No.: "+number+"<br>");  
    $(".log").append("=========================<br>");  
    $('#logId').animate({scrollTop: $('#logId').prop('scrollHeight')});
  }, 1800);

 
  $(".unknownNumber").animate({"top":"0vw",
  "opacity":"1",
  },500,function(){
    $("#flagGroup"+group+number).attr("src",flag);
    $("#textGroup"+group+number).prepend(ioc);
    $("#flagGroup"+group+number).animate({"top":"0vw","opacity":"1"});
    $("#textGroup"+group+number).animate({"top":"0vw","opacity":"1"});
    $(loc).css({"background-color":"red"});
    $(loc).animate({"margin-top":"-1vw","opacity":"0"},500);
    allDone();
 
  });

  groups[groupNUm][availSlot[index]][0]=ioc;
  groups[groupNUm][availSlot[index]][1]=pot;
  groups[groupNUm][availSlot[index]][2]=region;
  console.log("what group "+ groupNUm);
  console.log(availSlot[index]);
  console.log(groups[1][availSlot[index]][0]);

}
function allDone(){
  console.log("ALL DONE")
  if(pots[8].length<1){
    console.log("reset")
    $(".group").animate({"margin-top":"2.5vw"},500);
    $(".groupCover").css({"opacity":"0"});

    for(let x=1;x<=8;x++){
      switch(x){
      case 1: z = "A";
      break;
      case 2: z = "B";
      break;
      case 3: z = "C";
      break;
      case 4: z = "D";
      break;
      case 5: z = "E";
      break;
      case 6: z = "F";
      break;
      case 7: z = "G";
      break;
      case 8: z = "H";
      break;
    }
      $(".log").append("<br>")
      $(".log").append("Group "+z+"<br>")
      for(let y=0;y<=3;y++){
          $(".log").append(groups[x][y][0]+"&ensp;"+groups[x][y][1]+"&ensp;"+groups[x][y][2]+"<br>")   
      }
      $('#logId').animate({scrollTop: $('#logId').prop('scrollHeight')}); 
    }


  }
  else{
    setTimeout(() => {
      start()
    }, 1500);
  }
}




function availableGroup(potIndex){
if(potIndex%2!=0){
  $("#coverA, #coverC, #coverE, #coverG").css({"opacity":"0"});
  $("#groupA, #groupC, #groupE, #groupG").animate({"margin-top":"0"},500);
  $("#groupB, #groupD, #groupF, #groupH").animate({"margin-top":"2.5vw"},500);
  $("#coverB, #coverD, #coverF, #coverH").css({"opacity":".8"});
 // $("#groupB, #groupD, #groupF, #groupH").css({"background-color":"gray"});
}
else if(potIndex%2==0){
  $("#coverB, #coverD, #coverF, #coverH").css({"opacity":"0"});
  $("#groupB, #groupD, #groupF, #groupH").animate({"margin-top":"0"},500);
  $("#groupA, #groupC, #groupE, #groupG").animate({"margin-top":"2.5vw"},500);
  $("#coverA, #coverC, #coverE, #coverG").css({"opacity":".8"});
 // $("#groupA, #groupC, #groupE, #groupG").css({"background-color":"gray"});
}
else{
  
}



  
}



  $(document).ready(function(){
  
    $(".begin").click(function(){

   
      preSelected();
      
    })
  
  });


 
  function preSelected(){

    var pot=["Pot1","Pot2","Pot3","Pot4"]
    var ph = Math.round((Math.random() *3));
    var usa = Math.round((Math.random() *3));
    var jpn = Math.round((Math.random() *3));
    var slo = Math.round((Math.random() *3));
    var can = Math.round((Math.random() *3));

    $("#flagGroupA"+(ph+1)).attr("src","imgForFiba/phFlag.png");
    $("#textGroupA"+(ph+1)).prepend("PHI");
    $("#flagGroupC"+(usa+1)).attr("src","imgForFiba/usaFlag.png");
    $("#textGroupC"+(usa+1)).prepend("USA");
    $("#flagGroupE"+(jpn+1)).attr("src","imgForFiba/japanFlag.png");
    $("#textGroupE"+(jpn+1)).prepend("JPN");
    $("#flagGroupF"+(slo+1)).attr("src","imgForFiba/sloveniaFlag.png");
    $("#textGroupF"+(slo+1)).prepend("SLO");
    $("#flagGroupH"+(can+1)).attr("src","imgForFiba/canadaFlag.png");
    $("#textGroupH"+(can+1)).prepend("CAN");

    $("#pot1_1, #pot1_3, #pot2_3, #pot7_2, #pot4_1").css({"background-color":"red"});
    $("#pot1_1, #pot1_3, #pot2_3, #pot7_2, #pot4_1").animate({"margin-top":"-1vw","opacity":"0"},500);
    $("#flagGroupA"+(ph+1)+", #flagGroupC"+(usa+1)+", #flagGroupF"+(slo+1)+", #flagGroupE"+(jpn+1)+", #flagGroupH"+(can+1)+"").animate({"top":"0vw","opacity":"1"});
    $("#textGroupA"+(ph+1)+", #textGroupC"+(usa+1)+", #textGroupF"+(slo+1)+", #textGroupE"+(jpn+1)+", #textGroupH"+(can+1)+"").animate({"top":"0vw","opacity":"1"});
    

    groups[1][ph][0]="PHI";   groups[1][ph][1]="Pot1";  groups[1][ph][2]="Asia";
    groups[3][usa][0]="USA";  groups[3][usa][1]="Pot1"; groups[3][usa][2]="America";
    groups[5][jpn][0]="JPN";  groups[5][jpn][1]="Pot7"; groups[5][jpn][2]="Asia";
    groups[6][slo][0]="SLO";  groups[6][slo][1]="Pot2"; groups[6][slo][2]="Europe";
    groups[8][can][0]="CAN";  groups[8][can][1]="Pot4"; groups[8][can][2]="America";
    console.log(jpn+" Jpan");
    console.log(slo+" slo");
    console.log(groups);

  }

  function systemMessage(selector){
    var message =[
      "Setting pre-selected<br>Teams!",
      "Starting Draw",
      "Draw Started",
      "Draw Ends<br>Thank You"
    ]
    console.log("ito gumana")
    $(".message").css({
      "top": "50%",
      "left": "40%",
      "width": "20%",
      "height":"fit-content",
      "opacity": "0",
      "font-size":"2.5vw"
    });


    $(".message").animate({"opacity" : "1",
    },2000,function(){
      $(".message").animate({"opacity" : "0",
      "left" : "35%",
      "width": "30%",
      "height" : "25%",
      "top" : "40%",
      "font-size":"2.5vw"   
    },500);}
    );
    $(".message").empty();
    $(".message").prepend(message[selector])
  }


//////////////////
// $(document).ready(function(){
// $(".groupFormat").animate({
//   "margin-left":"10vw",
//   "margin-top":"10vw"
// })

// })
// $(document).ready(function(){
// $(".coverFormat").animate({
//   "margin-top":"0vw"
// },500,function(){
//   $(".coverFormat").animate({"margin-top":"-2vw"},100,none)
// });

// });

$(document).ready(function(){
  $(".startButtonFormat").click(function(){
    $("#topA2, #topA1, #topB2, #topB1").css({"border-color":"white"})
    $(".coverFormat").animate({"margin-top":"0"},200,function(){
      setTimeout(() => {
        firstAnim()
      }, 1000);
      setTimeout(() => {
        secondAnim()
      }, 1500);
    })
  })
});

function firstAnim(){
  $("#groupA1, #groupA2").animate({"left":"10vw"})
  $(".secondRound").css({"color": "black"})
  $("#fillerGroupI1").text("Gr.A Top 1")
  $("#fillerGroupI2").text("Gr.A Top 2")
}
function secondAnim(){
  $("#groupIcover1, #groupIcover2").animate({"margin-top":"-2vw"})
}

function menuSelector(num){
  if(num==1){
    window.location.href = 'index.html';
  }
  else{
    window.location.href = 'draw.html';
  }
  
}

