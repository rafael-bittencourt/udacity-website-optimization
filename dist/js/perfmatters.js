/*
 Udacity FrontEndDev Website Optimization 2017-08-01 
*/

function logCRP(){var o=window.performance.timing,n=o.domContentLoadedEventStart-o.domLoading,t=o.domComplete-o.domLoading;document.getElementById("crp-stats").textContent="DCL: "+n+"ms, onload: "+t+"ms"}window.addEventListener("load",function(o){logCRP()});