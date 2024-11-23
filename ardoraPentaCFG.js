//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cGVudG9taW5vX2VkdWNhdGl2bw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var valueZ=0; var topinitial=0;var leftinitial=0;var fil=20; var col=20; var celsize=20;
var m1_1=[[0,0,0,0,0],[0,0,0,0,0],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0]];
var m2_1=[[1,1,1,1,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m3_1=[[1,1,1,1,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m4_1=[[1,0,0,0,0],[1,1,0,0,0],[1,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m5_1=[[0,1,0,0,0],[1,1,0,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0]];
var m6_1=[[1,0,0,0,0],[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m7_1=[[1,1,1,0,0],[1,0,1,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m8_1=[[0,1,0,0,0],[1,1,1,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m9_1=[[1,1,1,0,0],[1,0,0,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m10_1=[[0,0,1,0,0],[1,1,1,0,0],[1,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m11_1=[[0,1,1,0,0],[1,1,0,0,0],[0,1,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var m12_1=[[1,0,0,0,0],[1,1,0,0,0],[0,1,1,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var board=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
var sol=[["Nw==","Nw==","Nw==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Nw==","Tg==","Tg==","Tg==","Tg==","MTE=","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OA==","Tg==","Tg=="],["Tg==","Tg==","Nw==","Tg==","Tg==","MTE=","MTE=","MTE=","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OA==","OA==","OA==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","MTE=","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OA==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Mw==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Mw==","Mw==","Tg==","Tg==","Mg==","Mg==","Mg==","Mg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Mw==","Mw==","Tg==","Tg==","Tg==","Mg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","MQ==","MQ==","MQ==","MQ==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","MA==","MA==","MA==","MA==","MA==","Tg==","Tg==","MQ==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Ng==","Ng==","Ng==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","NA==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Ng==","Tg==","Ng==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","NA==","NA==","Tg==","Tg==","NQ==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","NA==","Tg==","Tg==","Tg==","NQ==","NQ==","NQ==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","NA==","Tg==","Tg==","Tg==","NQ==","Tg==","Tg==","Tg==","Tg==","Tg==","MTA=","Tg==","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OQ==","OQ==","Tg==","Tg==","Tg==","Tg==","Tg==","MTA=","MTA=","Tg=="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OQ==","OQ==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","MTA=","MTA="],["Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","OQ==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg==","Tg=="]];
var solw=18;var solh=19;
