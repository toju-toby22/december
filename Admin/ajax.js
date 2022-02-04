$(document).ready(function () {
    $.ajax({
        url: "http://159.65.21.42:9000/products",
        method: "GET",
        success: function(data){
            $(data).each(function(i, ele){
                console.log(ele.title);
                let myData = `
                <div class="row-1">
                <img class="col-img" src="${ele.image}" alt="">
                <div class="text-1"><span>${ele.name}</span></div>
                <div class="text-1">${ele.price}</span></div>

                <div class="text-1">
                    <span class="money null money-discount clp-collection-item-pricediscounted" data-currency="USD" data-currency-eur="€120.00" data-currency-usd="$130.00" data-currency-gbp="£99.00" data-currency-aud="AUD$180.00" data-sku="MC-C-36-LG-SY">${ele.title}</span>
                    <span class="money clp-collection-item-price" data-currency="USD" data-currency-eur="€90.00" data-currency-usd="$97.50" data-currency-gbp="£74.25" data-currency-aud="AUD$135.00" data-sku="MC-C-36-LG-SY">$97.50</span>
                </div>
        </div>
                `
                 ;
                $(".section-grid").append(myData)
                    
            
            })
        }
    })
})