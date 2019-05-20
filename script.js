var products= [];
var prices= [];
var items= [];
$(".New-product").click(function(){
    var name=$(".name").val();
    var price=$(".price").val();
    var total;
    products.push(name);
    prices.push(price);
    total= prices.forEach(function(x){
        total +=+x;
    });
        
    $(".products").append("<div class='container'><div>" + name +"</div> <div>"+ price +"</div></div>");
});
