let audio = document.getElementById("audio");
let progress = document.getElementById("progress");
   
        
let playImage = document.getElementsByClassName("playImage")[0];
let volumeImage = document.getElementsByClassName("volumeImage")[0];
audio.ontimeupdate = progressUpdate;

progress.onclick = audioRewind;

     
let nameOfSong = document.getElementsByClassName("nameOfSong")[0];
let author = document.getElementsByClassName("author")[0];
let timeN = document.getElementsByClassName("timeN")[0];
let timeA = document.getElementsByClassName("timeA")[0];
var load2 = document.getElementsByClassName("load2")[0];
var load3 = document.getElementsByClassName("load3")[0];
var bg = document.getElementsByClassName("bg")[0];
var backk = document.getElementsByClassName("back")[0];
var num = 0;

              
let ans = false;

var musicSrc = ["https://www.mboxdrive.com/y2mate.com - lorn_acid_rain_official_music_video_nxg4C365LbQ_320kbps.mp3",

      "https://www.mboxdrive.com/Boris Brejcha - Never Look Back (Official Video) [Ultra Music] (1).mp3", 

       " https://www.mboxdrive.com/LORN - ANVIL [Official Music Video].mp3", 

       "https://www.mboxdrive.com/skeler x Ytho - Final Call [Yusoul Vol 2].mp3", 

       "https://www.mboxdrive.com/LORN - Burdens.mp3",

        "https://www.mboxdrive.com/Armin Van Buuren - Orbion.mp3",

        "https://www.mboxdrive.com/Unzam - Me Too.mp3",

        "https://www.mboxdrive.com/BOYS NOIZE - Alarm (WHO AM I O.S.T.) (Official Audio).mp3",

        " https://www.mboxdrive.com/Lorn - Perfekt Dark.mp3",

        " https://www.mboxdrive.com/Intro.mp3",

        " https://www.mboxdrive.com/N'to - Trauma (Worakls Remix).mp3",
        
        "https://www.mboxdrive.com/Ben Bцhmer, Nils Hoffmann, Malou - Breathing.mp3",
        
        "https://www.mboxdrive.com/Till Death - The Dark Woods.mp3",
        //
        "https://www.mboxdrive.com/METAHESH - Colors.mp3",
        
        "https://www.mboxdrive.com/GENES - These Words That I Can't Get Out.mp3",
        
        "https://www.mboxdrive.com/skeler. - ＴＥＬ ＡＶＩＶ (Music Video).mp3"
        

        ]; 


       
       let nameSong = [
             "Acid rain",
             "Never Look Back",
             "ANVIL",
             "Final Call",
             "Burdens",
             "Orbion",
             "Me Too",
             "Alarm",
             "Perfect Dark",
             "The XX Intro",
             "Trauma (Worakls Remix)",
             "Breathing",
             "The Dark Woods",
             "Colors",
             "These Words That I Can't Get Out",
             "Telaviv"
           
           ];
           
           let authors = [
                 "Lorn",
                 "Boris Brejcha",
                 "Lorn",
                 "Skeler x Ytho",
                 "Lorn",
                 "Armin Van Buuren",
                 "Unzam",
                 "BOYS NOIZE",
                 "Lorn",
                 "",
                 "N'to",
                 "Ben Böhmer, Nils Hoffmann, Malou",
                 "Till Death",
                 "METAHESH",
                 "GENES",
                 "skeler"
                
               ];

var number = 0;
  
     

        function play(){
            
            
            let playPromise = audio.play();
           if (playPromise !== undefined) {
                playPromise.then(_ => {
                    if(playImage.src == "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png"){
                 audio.play();
                playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
                    }
                    else{
                        audio.pause();
                playImage.src = "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png";
                    }
                })
             .catch(error => {
               audio.pause();
               
              });
              }
        }
        
    
        
        
        
        
        function speedUp(){
             
             author.innerHTML ="Loading...";
            
             audio.onloadeddata = function(){
              author.innerHTML =  authors[number];
              }
             
           
            number++;
            if(number >= musicSrc.length){
                number = 0;
                
            }
          
            audio.src = musicSrc[number];
            nameOfSong.innerHTML = nameSong[number];
             
        
            
            
            

           
            
            
            var playPromise = audio.play();
            /*Error  The play() request was interrupted by a call to pause()*/
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                  
                 

 
                   audio.play();
                   
                  playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
                  
            
                })
            .catch(error => {
              
             author.innerHTML = "Loading...";
               
              });
              }
            
            
            
        
            
            

        }
        
        function speedDown(){
    
           author.innerHTML ="Loading...";
            

                number--;
            if(number < 0){
                number = musicSrc.length-1;
            }
            audio.src = musicSrc[number];
        
            nameOfSong.innerHTML = nameSong[number];
           
            
               audio.onloadeddata = function(){
                author.innerHTML =  authors[number];
             }

            let playPromise = audio.play();
         if (playPromise !== undefined) {
            playPromise.then(_ => {
               

                audio.play();
                playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
            
              })
             .catch(error => {
              
              author.innerHTML = "Loading...";
              });
              }
            
            
            
            
        }
        
       
        
      
        
       
        
        function musicVolume(){
              let v = this.value;
              let f = audio.volume = v/100;
              
              if(audio.volume == 0){
                  volumeImage.src = "https://i.pinimg.com/originals/81/26/03/8126039d6bdf4260d09231ead538a929.png";
              }
              
              else{
                  volumeImage.src = "https://i.pinimg.com/originals/ce/3c/47/ce3c4723ea60cc4a7d25fbddbb71b485.png";
              }
              
        }
        
        
        
       
        function progressUpdate(){

            let d = audio.duration;
            let c = audio.currentTime;
            if(c > 0){
            progress.value = (100 * c) / d;
            var mins = Math.floor(audio.currentTime / 60);
            var secs = Math.floor(audio.currentTime % 60);
            if (secs < 10) {
               secs = '0' + String(secs);
             }
                timeN.innerHTML = 
                mins + ':' + secs;

             }
            

        }



        function audioRewind(){
            let c = audio.currentTime;
           if(c > 0){
           
           
            let w = this.offsetWidth;
            let o = event.offsetX;
            this.value = 100 * o/w;
            
            
            
            audio.pause();
            
            
            audio.currentTime = audio.duration * (o/w);
            
            
            if(playImage.src == "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png"){
                
            let playPromise = audio.play();
         if (playPromise !== undefined) {
            playPromise.then(_ => {
               

                audio.pause();
                playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
            


                

                })
             .catch(error => {
              //pause()
        
              });
              }
            
            } 
            
            else{
                let playPromise = audio.play();
         if (playPromise !== undefined) {
            playPromise.then(_ => {
               

                audio.play();
                playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
            


                

                })
             .catch(error => {
              //pause()
        
              });
              }
            
}
    
    }
        }
        
        audio.onended = function() {
             author.innerHTML = "Loading...";
            
            number++;
            if(number >= musicSrc.length){
                number = 0;
            }

            audio.src = musicSrc[number];
            nameOfSong.innerHTML = nameSong[number];
            
            
            audio.onloadeddata = function(){
                author.innerHTML =  authors[number];
              }
            
           let playPromise = audio.play();
         if (playPromise !== undefined) {
            playPromise.then(_ => {
               

                audio.play();
           
           playImage.src = "https://i.pinimg.com/originals/30/3b/16/303b16856e46aa743386dc6dd41dd36b.png";
            


                

                })
             .catch(error => {
            
                audio.pause();

              });
              }
            
           
           


       }
       
     
            
          
              audio.onloadedmetadata = function() {
               
                 var mins = Math.floor(audio.duration / 60);
                 var secs = Math.floor(audio.duration % 60);
                    if (secs < 10) {
                      secs = '0' + String(secs);
                    }
                     timeA.innerHTML = mins + ':' + secs;
                    
              
              }

               
       
     function loading(){
          document.getElementsByClassName("load")[0].style.display = "none";
     }




          function coding(){
                 load2.style.display = "none";
                 if(musicSrc.length > 16){

                    musicSrc.splice(1, 25);
               }
                
                 
                 musicSrc.splice(0, 16, 
                     
                     "https://www.mboxdrive.com/y2mate.com - lorn_acid_rain_official_music_video_nxg4C365LbQ_320kbps.mp3",
      
       "https://www.mboxdrive.com/Boris Brejcha - Never Look Back (Official Video) [Ultra Music] (1).mp3", 

       " https://www.mboxdrive.com/LORN - ANVIL [Official Music Video].mp3", 

       "https://www.mboxdrive.com/skeler x Ytho - Final Call [Yusoul Vol 2].mp3", 

       "https://www.mboxdrive.com/LORN - Burdens.mp3",

        "https://www.mboxdrive.com/Armin Van Buuren - Orbion.mp3",

        "https://www.mboxdrive.com/Unzam - Me Too.mp3",

        "https://www.mboxdrive.com/BOYS NOIZE - Alarm (WHO AM I O.S.T.) (Official Audio).mp3",

        " https://www.mboxdrive.com/Lorn - Perfekt Dark.mp3",

        " https://www.mboxdrive.com/Intro.mp3",

        " https://www.mboxdrive.com/N'to - Trauma (Worakls Remix).mp3",
        
        "https://www.mboxdrive.com/Ben Bцhmer, Nils Hoffmann, Malou - Breathing.mp3",
        
        "https://www.mboxdrive.com/Till Death - The Dark Woods.mp3",
        //
        "https://www.mboxdrive.com/METAHESH - Colors.mp3",
        
        "https://www.mboxdrive.com/GENES - These Words That I Can't Get Out.mp3",
        
        "https://www.mboxdrive.com/skeler. - ＴＥＬ ＡＶＩＶ (Music Video).mp3" 



                     );


                 nameSong.splice(0, 16,

                     
                     "Acid rain",
             "Never Look Back",
             "ANVIL",
             "Final Call",
             "Burdens",
             "Orbion",
             "Me Too",
             "Alarm",
             "Perfect Dark",
             "The XX Intro",
             "Trauma (Worakls Remix)",
             "Breathing",
             "The Dark Woods",
             "Colors",
             "These Words That I Can't Get Out",
             "Telaviv"

         );

                 authors.splice(0, 16,

                     
                     "Lorn",
                 "Boris Brejcha",
                 "Lorn",
                 "Skeler x Ytho",
                 "Lorn",
                 "Armin Van Buuren",
                 "Unzam",
                 "BOYS NOIZE",
                 "Lorn",
                 "",
                 "N'to",
                 "Ben Böhmer, Nils Hoffmann, Malou",
                 "Till Death",
                 "METAHESH",
                 "GENES",
                 "skeler"

         );




            audio.pause();
              number = 0;
              audio.src = musicSrc[number];
              nameOfSong.innerHTML = nameSong[number];
                author.innerHTML =  authors[number];
              playImage.src = "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png";
            


              }
              




              function edm(){
                  load2.style.display = "none";
                
                  
                 if(musicSrc.length > 16){

                    musicSrc.splice(1, 25);
               }



                 musicSrc.splice(0, 16,

                     
                     "https://www.mboxdrive.com/y2mate.com - koven_never_have_i_felt_this_ncs_release_-7fuHEEmEjs_320kbps (1).mp3",

       
 

       " https://www.mboxdrive.com/y2mate.com - calvin_harris_blame_audio_ft_john_newman_HJb0VYVtaNc_320kbps.mp3", 

       " https://www.mboxdrive.com/y2mate.com - brns_american_money_away_remixaudio_dovRfPNl80w_320kbps.mp3", 

       "https://www.mboxdrive.com/y2mate.com - stefan_nixdorf_commodus_pt1_the_arrival_LcmpLp5_Azo_320kbps.mp3", 

       "https://www.mboxdrive.com/y2mate.com - anna_naklab_feat_alle_farben_younotus_supergirl_official_video_31tiWX-8bdc_320kbps.mp3",

        "https://www.mboxdrive.com/y2mate.com - vsn7_overcome_xs3SLq-fJkY_320kbps.mp3",

        "https://www.mboxdrive.com/y2mate.com - arrested_youth_riot_audio_TMSiVgg7SMI_320kbps.mp3",

        "https://www.mboxdrive.com/y2mate.com - san_holo_they_just_havent_seen_it_feat_the_nicholas_official_music_video_YQbjisWixoU_320kbps.mp3",

        " https://www.mboxdrive.com/y2mate.com - vanic_x_kflay_make_me_fade_8Er6l7UOnbI_320kbps.mp3",

        " https://www.mboxdrive.com/y2mate.com - alvaro_jetfire_guest_list_official_music_video_jcKoyA872uE_320kbps.mp3",

        " https://www.mboxdrive.com/y2mate.com - oliver_heldens_melody_official_music_video_VMnPX3GeyEM_320kbps.mp3",
        
        "https://www.mboxdrive.com/y2mate.com - droeloe_x_sem_facing_the_sea_official_audio_SX7EZM3363U_320kbps.mp3",
        
        " https://www.mboxdrive.com/y2mate.com - emmit_fenn_meteorite_iphone_xr_song_kuHr34QhzvE_320kbps.mp3",
        //
        " https://www.mboxdrive.com/y2mate.com - amv_the_witchtrip_bestamvsofalltime_anime_mv_zE07nT146Q0_320kbps.mp3",
        
        " https://www.mboxdrive.com/y2mate.com - kush_kush_fight_back_with_love_tonight_official_video_0u01ZNFDEGE_320kbps.mp3",
        
        " https://www.mboxdrive.com/y2mate.com - k_391_flux_ERu6jh_1gR0_320kbps.mp3" 

         );

                 nameSong.splice(0, 16,

                     
                     "Never Have i Felt This",
             "Blame",
             "American Money (AWAY Remix)",
             "Commodus Pt.1 (The Arrival)",
             "Supergirl",
             "Overcome",
             "Riot",
             "They Just Havent Seen It",
             "Make Me Fade",
             "Guest List",
             "Melody",
             "Facing The Sea",
             "Meteorite",
             "The Witchtrip",
             "Fight Back With Love Tonight",
             "Flux"

         );

                 authors.splice(0, 16,

                     
                     "Koven",
             "Calvin Harris ft. John Newman",
             "BORNS",
             "Stefan Nixdorf",
             "Anna Naklab feat. Alle Farben & YOUNOTUS",
             "VSN7",
             "Arrested Youth",
             "San Holo ft. The Nicholas",
             "Vanic x Kflay",
             "Alvaro Jetfire",
             "Oliver Heldens",
             "Droeloe x Sem",
             "Emmit Fenn",
             "Amv",
             "Kush Kush",
             "k391"

         );
                 
             
             audio.pause();
              number = 0;
              audio.src = musicSrc[number];
              playImage.src = "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png";
              nameOfSong.innerHTML = nameSong[number];
                author.innerHTML =  authors[number];
             


              }

              




              function back(){

                  load2.style.display = "block";
                  audio.pause();
                   audio.currentTime = 0.000001;
                 
             }

             
            

             function edm02(){

                  load2.style.display = "none";
                  
                  
               musicSrc.splice(0, 16,

                     
                     "https://www.mboxdrive.com/avicii-feat.-etta-james-id-levels-original-mix-(best-muzon.cc).mp3",

       
 

       "https://www.mboxdrive.com/Clarx - Bones [NCS Release].mp3", 

       " https://www.mboxdrive.com/Coeur de la Nuit - Worakls.mp3", 

       "https://www.mboxdrive.com/Dani Row ft Alberto Feria - Drumsta Monsta.mp3", 

       " https://www.mboxdrive.com/DESPACITO (Десь по світу) українська версія Дрогобицький район.mp3",

        "https://www.mboxdrive.com/Dimitri Vegas, Like Mike & Steve Aoki vs Ummet Ozcan - Melody (Extended Mix) www.livingelectro.com (mpp3.me).mp3",

        " https://www.mboxdrive.com/Dimitri Vegas, MOGUAI & Like Mike - Mammoth (Original Mix).mp3",

        "https://www.mboxdrive.com/Diplo – Revolution (Gioni Remix).mp3",

        " https://www.mboxdrive.com/Dirty_Palm_Jay_Eskar_feat_LexBlaze_Splash_320__(44outdoors.com).mp3",

        "https://www.mboxdrive.com/Mike Emilio - Clown Bass Boosted inmuse.info.mp3",

        "  https://www.mboxdrive.com/dj-tiesto-adagio-for-strings-radio-edit_(mp3-CC.com).mp3",
        
        " https://www.mboxdrive.com/Faydee - Can't Let Go (Official Video).mp3",
        
        " https://www.mboxdrive.com/DROELOE - Limbo (Official Audio).mp3",
        
        "  https://www.mboxdrive.com/dvbbs-jay-hardway-voodoo-original-mix-(mp3crazy.me).mp3",
        
        "  https://www.mboxdrive.com/Dzeko_and_Torres_-_Alarm_(Original_Mix)_[mp3pulse.ru].mp3",
       
        "  https://www.mboxdrive.com/Eminem_Without_Me_Olly_James_Festival_Bootleg_320Kb_(bobpittart.com).mp3",
        //
        " https://www.mboxdrive.com/enrique-iglesias-feat.-cnco-subeme-la-radio-(best-muzon.cc).mp3",

        "https://www.mboxdrive.com/Firebeatz & KSHMR feat. Luciana - No Heroes ( DJ.Jani Mash -Up ) (shami.biz).mp3",

        " https://www.mboxdrive.com/Fischerspooner - Never Win (Benny Benassi remix).mp3",

        "https://www.mboxdrive.com/galantis-no-money-(mp3crazy.me).mp3",

        " https://www.mboxdrive.com/galwaro-reborn_(mp3-CC.com).mp3",

        "https://www.mboxdrive.com/Gaullin - Moonlight (Bass Boosted).mp3",

        " https://www.mboxdrive.com/Gesaffelstein - Destinations (Armani Code).mp3",

        " https://www.mboxdrive.com/hopex-everything_(mp3-CC.com).mp3",

        " https://www.mboxdrive.com/illenium-it-s-all-on-u-ft.-liam-o-donnell-t-mass-lzrd-remix_(mp3-CC.com).mp3",
       
     " https://www.mboxdrive.com/imagine-dragons-feat.-kendrick-lamar-radioactive-(best-muzon.cc).mp3",
        
        " https://www.mboxdrive.com/imagine-dragons-thunder-(best-muzon.cc).mp3",
        
        " https://www.mboxdrive.com/jaeger-don-t-play_(mp3-CC.com).mp3",
       
       " https://www.mboxdrive.com/jetta-i-d-love-to-change-the-world-matstubs-remix-bass-boosted_(mp3-CC.com).mp3",
       
        " https://www.mboxdrive.com/john-newman-love-me-again-(mp3crazy.me).mp3",
    
       "https://www.mboxdrive.com/Julian_Jordan_-_Angels_x_Demons_(PrimeMusic.ru).mp3",
      
        " https://www.mboxdrive.com/K-391-Summertime.mp3",
       
        " https://www.mboxdrive.com/KAAN_PARS_EMR3YGUL_Killa__(xtremex3.com).mp3",
       
        " https://www.mboxdrive.com/katy-perry-dark-horse-(mp3crazy.me).mp3",
       
        " https://www.mboxdrive.com/kshmr-feat.-basskillers-b3nte-the-spook-original-(best-muzon.me).mp3",
       
        " https://www.mboxdrive.com/kshmr-feat.-sidnie-tipton-wildcard-(best-muzon.me).mp3",
       
        " https://www.mboxdrive.com/kshmr-marnik-bazaar-magnace-remix_(mp3-CC.com).mp3",
       
        "https://www.mboxdrive.com/Loreen - Euphoria (Official Audio).mp3",
       
        " https://www.mboxdrive.com/PETIT BISCUIT - Sunset Lover.mp3",

        " https://www.mboxdrive.com/martin-garrix-jay-hardway-spotless-(best-muzon.cc).mp3",

        "https://www.mboxdrive.com/meiko-leave-the-lights-on-izzamuzzic-remix_(mp3CC.biz).mp3"
        

         );

                 nameSong.splice(0, 16,

                     
                     "Levels",
             "Bones",
             "Worakls",
             "Drumsta Monsta",
             "DESPACITO (Десь по світу)",
             "Melody (Extended Mix)",
             "Mammoth",
             "Revolution (Gioni Remix)",
             "Splash",
             "Clown",
             "Adagio For Strings",
             "Can't Let Go",
             "Limbo",
             "Voodoo",
             "Alarm",
             "Without Me",
             "Subeme La Radio",
             "No Heroes",
             "Never Win",
             "No Money",
             "Reborn",
             "Moonlight",
             "Destinations",
             "Everything",
             "It's All On U",
             "Radioactive",
           "Thunder",
             "Don't Play",
             "I'd Love To Change The World",
             "Love Me Again",
             "Angels x Demons",
"Summertime",
             "Killa",
             "Dark Horse",
"The Spook",
             "Wildcard",
             "Bazaar",
             "Euphoria",
             "Sunset Lover",
             "Spotless",
             "Leave The Lights On"


         );

                 authors.splice(0, 16,

                     
                     "Avicii feat. Etta James Id",
             "Clarx",
             "Coeur de la Nuit",
             "Dani Row ft Alberto Feria",
             "Дрогобицький район",
             "Dimitri Vegas, Like Mike & Steve Aoki vs Ummet Ozcan",
             "Dimitri Vegas, MOGUAI & Like Mike",
             "Diplo",
             "Dirty Palm, Jay Eskar feat. LexBlaze",
             "Mike Emilio - Clown Bass",
             "Dj Tiesto",
             "Faydee",
             "DROELOE",
             "Dvbbs Jay Hardway",
             "Dzeko and Torres",
             "Eminem, Olly James",
             "Enrique Iglesias feat. Cnco",
             "Firebeatz & KSHMR feat. Luciana (DJ.Jani Mash Up)",
             "Fischerspooner, (Benny Benassi remix)",
             "Galantis",
             "Galwaro",
             "Gaullin",
             "Gesaffelstein, (Armani Code)",
             "Hopex",
             "Illenium ft. Liam-O Donnell, T-mass (lzrd-remix)",
             "Imagine Dragons feat. Kendrick Lamar",
             "Imagine Dragons",
             "Jaeger",
             "Jetta",
             "John Newman",
             "Julian Jordan",
             "K-391",
             "KAAN PARS, EMR3YGUL",
             "Katy Perry",
             "Kshmr feat. Basskillers, B3nte",
             "Kshmr feat. Sidnie Tipton",
             "Kshmr Marnik (Magnace-remix)",
             "Loreen",
             "PETIT BISCUIT",
             "Martin Garrix, Jay Hardway",
             "Meiko"

         );

             
             audio.pause();
              number = 0;
              audio.src = musicSrc[number];
              playImage.src = "https://i.pinimg.com/originals/9b/b0/4d/9bb04dd57ddab84c36d9fc943213fb1a.png";
              nameOfSong.innerHTML = nameSong[number];
                author.innerHTML =  authors[number];
            
            }

              




              function back(){
                  load2.style.display = "block";
                  audio.pause();
                   audio.currentTime = 0.000001;
                 
                
              }

              
     
    
     
