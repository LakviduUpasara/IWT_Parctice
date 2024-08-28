function loadData(name){
    if(name=="btn1")
    {
        document.getElementById("image1").src ="image/"
        document.getElementById("text1").innerHTML = "About iphone 15"
    }
    else if(name=="btn2")
    {
        document.getElementById("image1").src ="images/samsung.jfif"
        document.getElementById("text1").innerHTML = "About samsung S23"
    }
    else if(name=="btn3")
    {
        document.getElementById("image1").src ="images/pixel.jfif"
        document.getElementById("text1").innerHTML = "About Pixel 8"
    }
    else
    {
        alert("Invalid product");
    }
}

function PriceforInllop(){


    var phone = [] ;
    phone["i Phone xs "] = "Rs = 1000/=" ;
    phone[" Apple i Phone xr "] = "Rs = 500/=" ;

    phone["k9"] = "Rs 1800/=" ;

    var list  = " List of avarage Price ( Using for in loop ) <br>"

    for (var item in phone ){

        list += item + " : " + phone [item] + "<br/>"
    }

    document.getElementById("Image1").src ="image/list.jpg" ;
    document.getElementById("para").innerHTML =list ;
}

function HighPrice(){


    var phone = [] ;
    phone["i Phone xs "] = "Rs = 1000/=" ;
    phone[" Apple i Phone xr "] = "Rs = 500/=" ;

    phone["k9"] = "Rs 1800/=" ;

    var lisHighPricet  = " List of avarage Price ( Using for in loop ) <br>"

   
    for (var item in phone ){

        if (phone[item] > 1000) {

         list += item + " : " + phone [item] + "<br/>"

        }
    }

    document.getElementById("Image1").src ="image/list.jpg" ;
    document.getElementById("para").innerHTML =HighPrice ;

}