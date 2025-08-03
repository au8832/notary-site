(function() {
  "use strict";

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  gtag('js', new Date());
  gtag('config', 'AW-11468304377');
  gtag('config', 'G-3F7XLX3Q95');
    
  document.addEventListener('click', function (event) {
    // Find the closest anchor tag (in case of nested elements like <span> inside <a>)
    const anchor = event.target.closest('a');

    if (anchor && anchor.href) {
      // Prevent the default link navigation
      // event.preventDefault();

      const url = anchor.href;
      const cleanUrl = url.split(/[?]/)[0];
      const segments = cleanUrl.split('/');
      const lastPart = segments.pop() || segments.pop();
      btnClick(lastPart);
    }
  });

  function btnClick(name) {
    const now  = new Date();
    console.log(now.toString());
    gtag('event', name, {
      when: now.toString()
    });

    if(/.*contact.*/.test(name)){
      console.log("log conversion call btn")
      gtag('event', 'conversion', {'send_to': 'AW-11468304377/H_AeCJTE7JUZEPnfwdwq'});
    }

    if(/.*schedule.*/.test(name)){
      console.log("log conversion schedule");
      gtag('event', 'conversion', {'send_to': 'AW-11468304377/akC4CIT7-5UZEPnfwdwq'});
    }
  }
})();
