function tabs(evt, tabName) {
    // Declare all variables
    var i, profiletab, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    profiletab = document.getElementsByClassName("profiletab");
    for (i = 0; i < profiletab.length; i++) {
      profiletab[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }