//dodawanie do listy

  $("input").on("keypress", function(event){
    if(event.which === 13) {
    var newTodo = $(this).val();
    $(this).val("");
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + newTodo + "</li>");
  };
  });

//przekreślanie toDo, mozna tez uzyc toggleClass
 //$("li").click(function(){
 //$(this).toggleClass("lineThrough");
//});

  $("ul").on("click", "li", function(){
      if($(this).hasClass("lineThrough")) {
        $(this).removeClass("lineThrough");
      } else {
        $(this).addClass("lineThrough");
      }
  });

//usuwanie
  $("ul").on("click", "i", function(event){
    console.log("Kasia jest super");
    $(this).closest("li").remove();
  });

  $(".fa-plus").on("click", function() {
    $("input").fadeToggle();
  });
