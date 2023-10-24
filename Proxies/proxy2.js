javascript:(function(){
  
  var launchNum = parseInt(prompt("What would you like to do? \n 1): Launch Nebula \n 2): Launch Incognito \n 3): Launch Holy Unblocker \n 4): Launch Cloaked Tab \n (If you enter any other value, it will Launch a Cloaked Tab) \n -oc9x97")); 
  var win = null;
  var url = null;
  var iframe = null;
  
  switch (launchNum){
 
    case 1:
      win = window.open();
      
      url = 'https://galaxybender-nebula.cyclic.app/';
      
      iframe = win.document.createElement('iframe');
      
iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      
      iframe.src = url;
      
      win.document.body.appendChild(iframe);
      
      break;
  
  case 2:
      win = window.open();
      
      url = 'https://incogprxy.onrender.com/';
      
      iframe = win.document.createElement('iframe');
      
iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      
      iframe.src = url;
      
      win.document.body.appendChild(iframe);
      
      break;
  
  case 3:
      win = window.open();
      
      url = 'https://holyunb.cyclic.app/';
      
      iframe = win.document.createElement('iframe');
      
iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      
      iframe.src = url;
      
      win.document.body.appendChild(iframe);
      
      break;
  
  default:
      url = prompt("Enter website url for cloaked tab \nMade by Universal Unblocking: https://sites.google.com/view/universalunblocking");
      
      win = window.open();
      
      iframe = win.document.createElement('iframe');
      
iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      
      if(url.includes("https://") || url.includes("http://")){
        iframe.src = url;
      }else
      {
        iframe.src = "https://" + url;
      }
      win.document.body.appendChild('iframe');
      break;
  }
})();
