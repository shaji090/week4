(function(window){

    var speakWord = "Hello";
    
    var helloSpeaker = new Object();
    
 helloSpeaker.speak = function(name){
  console.log(speakWord + " " + name );
 };
    window.helloSpeaker = helloSpeaker;
    
})(window);
© 2020 GitHub, Inc.
