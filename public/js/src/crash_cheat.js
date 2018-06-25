<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/avatar1.ico");
         document.title = '||o(*°▽°*)o|Ю [有人吗?]';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/avatar1.ico");
         document.title = '(o゜▽゜)o☆[BINGO!]' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

