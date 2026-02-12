// when #button2 is clicked (event):
//   remove .hidden from #modA-div
//   remove .hidden from #mod2
//   remove .hidden from #mod2desc

// when #button1 is clicked (event):
//   remove .hidden from #modA-div
//   remove .hidden from #mod1
//   remove .hidden from #mod1desc

$("#button2").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modA-div").removeClass("hidden");
  $("#mod2").removeClass("hidden");
  $("#mod2desc").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event

$("#button1").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modA-div").removeClass("hidden");
  $("#mod1").removeClass("hidden");
  $("#mod1desc").removeClass("hidden");

  // ↑ action snippets ↑

}); // ← click event



// when #xA is clicked (event):
//   add .hidden to #modA-div
//   if #mod1 has class .hidden:
//     add .hidden to #mod2
//     add .hidden to #mod2desc
//   else if #mod1 doesn't have class .hidden:
//     add .hidden to #mod1
//     add .hidden to #mod1desc

$("#xA").on("click", function() { // ← click event

  // ↓ action snippets ↓
  $("#modA-div").addClass("hidden");
  if ($("#mod1").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#mod2").addClass("hidden");
    $("#mod2desc").addClass("hidden");

    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#mod1").addClass("hidden");
    $("#mod1desc").addClass("hidden");

    // ↑ action snippets (class not on element) ↑

  } // ← element has css class


  // ↑ action snippets ↑

}); // ← click event



// when #ham is clicked (event):
//   if #nav-interact has class .hidden:
//     remove .hidden from #nav-interact
//     add .outline to #ham
//   else if #nav-interact doesn't have class .hidden:
//     add .hidden to #nav-interact
//     remove .outline from #ham

$("#ham").on("click", function() { // ← click event

  // ↓ action snippets ↓
  if ($("#nav-interact").hasClass("hidden")) { // ← element has css class

    // ↓ action snippets (class on element) ↓
    $("#nav-interact").removeClass("hidden");
    $("#ham").addClass("outline");

    // ↑ action snippets (class on element) ↑

  } else { // ← element has css class

    // ↓ action snippets (class not on element) ↓
    $("#nav-interact").addClass("hidden");
    $("#ham").removeClass("outline");

    // ↑ action snippets (class not on element) ↑

  } // ← element has css class


  // ↑ action snippets ↑

}); // ← click event



// on page load (ready):
//   if window is narrow:
//     add .hidden to #nav-interact
//   else if window is wide:
//     add .hidden to #ham
//     remove .hidden from #nav-interact

$(document).ready(function() { // ← page ready event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 824px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav-interact").addClass("hidden");

    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#ham").addClass("hidden");
    $("#nav-interact").removeClass("hidden");

    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← page ready event



// on window resize:
//   if window is narrow:
//     add .hidden to #nav-interact
//     remove .hidden from #ham
//     remove .outline from #ham
//   else if window is wide:
//     remove .hidden from #nav-interact
//     add .hidden to #ham

$(window).on("resize", function() { // ← resize browser window event

  // ↓ action snippets ↓
  if (window.matchMedia("(max-width: 824px)").matches) { // ← get browser width

    // ↓ action snippets (< width) ↓
    $("#nav-interact").addClass("hidden");
    $("#ham").removeClass("hidden");
    $("#ham").removeClass("outline");

    // ↑ action snippets (< width) ↑

  } else { // ← get browser width

    // ↓ action snippets (> width) ↓
    $("#nav-interact").removeClass("hidden");
    $("#ham").addClass("hidden");

    // ↑ action snippets (> width) ↑

  } // ← get browser width

  // ↑ action snippets ↑

}); // ← resize browser window event
