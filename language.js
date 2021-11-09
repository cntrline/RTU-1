function changeLanguage(lang) {
      location.hash = lang;
      location.reload();

    // Define the language reload anchors
    var language = {
        eng: {
            welcome:"Welcome to this site!"
          },
      lv: {
        welcome:"Sveicināti šajā saitē!"
      }
    };
  
    // Check if a hash value exists in the URL
    if (window.location.hash) {
  
      // Set the content of the webpage 
      // depending on the hash value
      if (window.location.hash == "#eng") {
          alert(language.eng.welcome)
      }
      else if (window.location.hash == "#lv") {
          alert(language.lv.welcome)
      }
    }
}