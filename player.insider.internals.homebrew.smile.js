            
            /*
             * 
             * @returns {undefined}
             * Code:
             * var basic_ref=document.getElementById("content_area").getElementsByTagName("div")[1].getElementsByTagName("div");
             * for(i=0;i<basic_ref.length;i+=4){var fce=basic_ref.item(i).getElementsByTagName("a")[0];if(fce.getAttribute("class")=='cc-m-download-link'){/*fce.href*/
            
            //document.getElementById("content_area").getElementsByTagName("div")[1].getElementsByTagName("div").item(0).getElementsByTagName("a")[0].href
            //+4
            //for(i=0;i<reference.length;i+=4){
//reference.item(i).style.display="none";
//}
var canvas=function (width,height/*,onclick_add*/){
    this.canvas=document.createElement('canvas');
  var self=this;
 //this.canvas.onclick=function (){onclick_add.apply(self);}
    //var height,width;
    //height=width=20;//  ////Link :@nettuts http://code.tutsplus.com/tutorials/canvas-from-scratch-introducing-canvas--net-18290
var platz_rand_width=5;
    this.height=this.canvas.height=height;
    this.width=this.canvas.width=width;this.width-=platz_rand_width;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle=this.fillStyle;

this.drawPlayButton();
   
};
canvas.prototype.state=0;/*0=drawplaybutton,1(oder else)=drawpausebutton*/
canvas.prototype.fillStyle="orange";
canvas.prototype.callDrawFunctionForState=function (){
(Number(this.state)===0 ? this.drawPauseButton():this.drawPlayButton());    

};
canvas.prototype.drawPlayButton=function(){
   this.state=0; this.clear();
this.ctx.beginPath();
this.ctx.moveTo(0, 0);
this.ctx.lineTo(0, this.height);
this.ctx.lineTo(this.width, this.height/2);
this.ctx.closePath();
this.ctx.fill();
    
};
canvas.prototype.clear=function (){
    this.ctx.clearRect(0,0,this.width,this.height);
    
}
canvas.prototype.drawPauseButton=function (){
   this.state=1; this.clear();
    var spacing=3;//1ne Richtung
this.ctx.fillRect(0, 0, (this.width/2)-spacing,this.height);
this.ctx.fillRect((this.width/2)+spacing, 0, this.width-((this.width/2)+spacing),this.height);

    
}


    var canvasrefs_counter=0;
    var canvasrefs=[];
    var canvasrefs_id_assignments=[];
var id_counter=0;
var url_ids=[];
var urls=[];
var lastplayingtime=0;
var getSoundByID=function(id){

     for(var i=0;i<url_ids.length;i++){
            if(url_ids[i]==id){
               //alert(i);
               //canvasrefs[i].callDrawFunctionForState();
               //
             return urls[i];
                //break;
            }
            
        }
    return false;
}
              
     var events=function (){
                       
        }
//var reference=document.getElementById("content_area").getElementsByTagName("div")[1].getElementsByTagName("div");

        //events.load=function (){
          //  alert(this.duration);
        //};
            var changeSymbolPlayerforID=function (id){
            for(var i=0;i<canvasrefs_id_assignments.length;i++){
            if(canvasrefs_id_assignments[i]==id){
                
               canvasrefs[i].callDrawFunctionForState();
                break;
            }
            
        }
                    
        }
         var lastPlaying;//Id-zu smobject
         var resumecase=false;
        events.is_playing=false;
       // events.play=function (e){console.log(e); if(resumecase){ document.getElementById("global-audio-player").currentTime=lastplayingtime;}
    //document.getElementById('global-audio-player').removeEventListener('playing',events.play);
    //};
      //events.play=function (){}; 
        //document.getElementById("content_area").getElementsByTagName("div")[1].getElementsByTagName("div").item(4).style.display="none"
        
    
            var startplayer=function (evt){
 elem = (evt.target) ? evt.target : evt.srcElement;
 var current_id=elem.id;
   if(String(elem.id)===''){
       //dann Button-Klick
       //lert(elem.parentNode);
       
       //elem.id=elem.parentNode.children[1].id;//vorsicht
       current_id=elem.parentNode.children[1].id;
       //alert(elem.id);
   }

var current_sound_url=getSoundByID(current_id);
var player=document.getElementById("global-audio-player");
//console.log(current_sound_url+player.src);
//if(current_sound_url==player.src){
  //  alert('in');
    //return;
    
//}

//console.log('callx');
//console.log('pausiert?'+player.paused);
if(/*events.is_playing*/!player.paused){
    console.log('!paused');

     if(typeof lastPlaying!=='undefined'){if((String(lastPlaying)===String(current_id))){
             //lastplayingtime=player.currentTime;
             //console.log(player.currentTime);
            changeSymbolPlayerforID(lastPlaying);
             player.pause();
             lastplayingtime=player.currentTime;
             return;
             //events.is_playing=false;
      //       alert('aktuellen pausieren');
             //console.log('is_n_playing'+document.getElementById("global-audio-player").currentTime);
             //lastplayingtime=player.currentTime;
             //console.log('t_bvf'+player.currentTime);
        //     player.pause();
              //console.log('t_after'+player.currentTime);
          //  return;//nicht anfassen;-)
    }else{console.log('snapcase');
   changeSymbolPlayerforID(lastPlaying);     
        
    }
};
    
}//else{alert('not paused');}
resumecase=false;

changeSymbolPlayerforID(current_id);
//if(!(String(lastPlaying)===String(current_id))){
//changeSymbolPlayerforID(lastPlaying);}


/*=Pause*/


if(typeof lastPlaying!=='undefined'){if((String(lastPlaying)===String(current_id))){
resumecase=true;
           
//player.currentTime=lastplayingtime;  
}else{player.src=current_sound_url;/*--===pause=reset--*/error_retry_once=false; }}else{player.src=current_sound_url;error_retry_once=false;     };
//kann sein das das mit error_retry_once so falsch ist,egal
//player.addEventListener('playing',events.play);
lastPlaying=current_id;

//events.is_playing=true;

console.log('neuen starten');
player.play();

    }
/*Zusammenfassung:Programmierung war sehr ätzend ,da ich net so viele Beispiele gefunden hab,sm2 ist net so gut(vllt. schon Mist),und orig. ist net so gut dokumentiert
 * n haufen von events nur man weiß net wirklich wann eins fEUERT (http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#event-media-ended)*/
    var createPlayerelementHTML=function (htmlreference,Beschreibung_Song){
       
        var a=document.createElement("a");
            //a.onclick=startplayer;
            a.id="irgendeine-add-player-eigen2014"+createPlayerelementHTML.counter;
            a.innerHTML=Beschreibung_Song;//TODO:Objects über function getdescription(fiktiv,gibts noch .net )
            //a.style.display="block";
            
            var div=document.createElement("div");
            div.style.display="block";
            canvasrefs_id_assignments[canvasrefs_counter]=a.id;
            canvasrefs[canvasrefs_counter]= new canvas(18/*-=5*/,15);
            
            var self=this;
           canvasrefs[canvasrefs_counter].canvas.onclick=a.onclick=function (evt){
                startplayer.apply(self,[evt]);
            };
            
            div.appendChild(canvasrefs[canvasrefs_counter].canvas);
            div.appendChild(a);
          
            htmlreference.appendChild(div);
            canvasrefs_counter++;
             createPlayerelementHTML.counter++;
            return a.id;
    }//am besten mit Instancen,naja egal
    createPlayerelementHTML.counter=0;//global
    var error_retry_once=false;
	var not_really_global_startup=function (){
	     var player=document.createElement('audio');
     
     player.id="global-audio-player";
     //player.addEventListener('ended',function (){/**/});
     player.addEventListener('ended',function (){ changeSymbolPlayerforID(lastPlaying);lastplayingtime=0/*testweise*/
    //nächstes Element starten
    var containsstr='irgendeine-add-player-eigen2014';
    var searchpos=lastPlaying.search(containsstr)+containsstr.length;
    var number=lastPlaying.slice(searchpos,lastPlaying.length);
    var new_number=Number(number)+1;
    if(document.getElementById(containsstr+String(new_number))){
        console.log('next');startplayer({target:{id:containsstr+String(new_number)}});
    }//else:nichts tun,dann schon am Ende angelangt
    
    });/*playing wird in FF mehrmals aufgerufen,in Chrome nur 1 mal*/
     //player.addEventListener('playing',events.play);
     player.addEventListener('error',function (e){if(!error_retry_once){startplayer({target:{id:lastPlaying}});error_retry_once=true;}console.log('Netzwerk-Fehler');});
     //player.removeEventListener()
    document.body.appendChild(player);
	};
var startup=function (){};
         //startup.addPrefix
        
   
        startup.prototype.addCommonPlayer=function(Beschreibung_Song,song_id){
            
            var playerid=createPlayerelementHTML(document.body,Beschreibung_Song);
            this.addPlayer({song_name:this.song_ids[song_id],id:playerid});
        }
         startup.prototype.addPlayer=function (args){//todo:content id-nacher id in createsound
          
url_ids[id_counter]=args.id;
urls[id_counter]=args.song_name;
id_counter++;

         }