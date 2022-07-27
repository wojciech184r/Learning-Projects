// getting into html tag and change his text
$("input").keypress(function(e){
  $("h1").text(e.key);
});

// adding element
$("h1").before("<p>New element</p>")

$("h1").after("<p>New element</p>")

$("h1").prepend("<p>New element prepend</p>")

$("h1").append("<p>New element append</p>")


// removing element

$("button").remove()
