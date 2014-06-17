$("carousel").hover(

  function(){
    $(this).effect("size", { to: {height: 775} }, 1000);
  },

  function(){
    $(this).effect("size", { to: {height: 600} }, 500);
});