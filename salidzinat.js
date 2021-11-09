function salidzinat() {
    var original = document.getElementById("original");
    var compareable = document.getElementById("compareable");
    if (original.value == compareable.value) {  
      compareable.style.borderColor = "#2EFE2E";
    }
    else {
      compareable.style.borderColor = "red";
  
    }
  } 