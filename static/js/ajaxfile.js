

// ajax function using jquery to render products dynamically

$('.trending-pr').ready( function() {
$.ajax({
     url : "http://localhost:8000/api/v1/ecomapp/products/",
     dataType: "json",
     success : function (data) {
         for (var i=0; i<data.length; i++)
         {
             if (data[i] !== null) {
                 var pk = data[i].pk;

                 $htmlproducttrending = ' <div class="col-md-2 col-sm-4">\n' +
                     '                        <!-- BEGIN item -->\n' +
                     '                        <div class="item item-thumbnail product-class">\n' +
                     '                            <a href='+'"http://localhost:8000/product_details/'+pk +'" class="item-image pr-detail-link">\n' +
                     '                                <img '+'src="'+ data[i].image  +'"  class="pr-image" />\n' +
                     '                                <div class="discount pr-discount">0% OFF</div>\n' +
                     '                            </a>\n' +
                     '                            <div class="item-info">\n' +
                     '                                <h4 class="item-title pr-name">\n' +
                     '                                    <a href='+'"http://localhost:8000/product_details/'+pk+'">'+ data[i].name +'</a>\n' +
                     '                                </h4>\n' +
                     '                                <p class="item-desc pr-desc">'+data[i].description+'</p>\n' +
                     '                                <div class="item-price pr-price">'+data[i].price +'</div>\n' +
                     '                                <div class="item-discount-price ">$Not available.</div>\n' +
                     '                            </div>\n' +
                     '                        </div>'+
                     '                      </div>';

                 $('.trending-pr').append($htmlproducttrending);
             }
             else{
                 continue;
            }
         }
            }
         });
             });


$('.product-detail').ready( function() {
    $.ajax({
        url: endpoint_pk,
        dataType: "json",
        type:'get',
        crossDomain : true,
        success: function (data) {
            if (data !== null) {


                $('.product-title').html(data.name);

                $('.warranty').html(data.warranty);

                $('.product-description').html(data.description);

                $('.price-pr').append(data.price);

                $('.discount').html(data.discount);

                $('.product-name').html(data.name);

                $('.brand').html(data.brand);

                $('.type-pro').html(data.type_product);

                $('.product-description_detail').html(data.product_descriptions);

                $('.pr-image').attr('src',data.image);

                $('.pic1').attr('data-url',data.image);

                for(var i=0; i < data.product_images.length; i++) {

                    $images = '<li class="image-slide"><a href="#"  data-click="show-main-image" data-url="' + data.product_images[i] + '">' +
                        '<img src="' + data.product_images[i] + '"' + ' alt="" /></a></li>';
                    $('.product-thumbnail-list').append($images);
            }

        }
    }
});

});

$(document).on('click','.image-slide', function () {

    $('.pr-image').attr('src',this.firstElementChild.dataset.url);

});



$(document).ready(function () {

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

    $('#review_form').submit(function (e) {
        e.preventDefault();

        console.log('its here');
        $.ajax({
            crossDomain: true,
            dataType: "json",
            type: "POST",
            url: review_url,
            data: {
                'product':pk_for_review,
                'name'  :$('#name').val(),
                'title':$('#title').val(),
                'review':$('#review').val(),
                'rating':3,
                'CSRFToken': getCookie('csrftoken'),
            },


            success: function (data) {
                console.log(data);

            }

        });
    });

// $(document).on('submit','.posting',function (e) {
//
//     e.preventDefault();
//     $product = pk_for_review;
//     $name = $('#name').val();
//     $title = $('#title').val();
//     $review = $('#review').val();
//     $rating = 3;
//     $.ajax({
//         type: "POST",
//         url: "http://127.0.0.1:8000/api/v1/ecomapp/products/Reviews",
//         data: {
//             product: $product,
//             name: $name,
//             title: $title,
//             review: $review,
//             rating: $rating,
//             csrfmiddlewaretoken : getCSRFTokenValue()
//         },
//
//         success: function () {
//             window.alert($product +' '  + $name + ' '  + $title +' '+ $review);
//
//         }
//
//     });
// });

    $('.col-md-7').ready(function () {
        $.ajax({
            url: 'http://127.0.0.1:8000/api/v1/ecomapp/products/Reviews',
            dataType: "json",
            crossDomain: true,
            success: function (data) {
                if (data !== null) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].product === pk_for_review) {


                            $createreveiw =
                                '<div class="review-info">\n' +
                                '<div class="review-rate">\n' +
                                '<ul class="review-star">\n' +
                                '<li class="active"><i class="fa fa-star"></i></li>\n' +
                                '<li class="active"><i class="fa fa-star"></i></li>\n' +
                                '<li class="active"><i class="fa fa-star"></i></li>\n' +
                                '<li class="active"><i class="fa fa-star"></i></li>\n' +
                                '<li class=""><i class="fa fa-star-o"></i></li>\n' +
                                '</ul>\n' +
                                '\n' +
                                '</div>\n' +
                                '<div class="review-name">' + data[i].name + '</div>\n' +
                                '<div class="review-date">24/05/2016 7:40am</div>\n' +
                                '</div>\n' +
                                '<div class="review-title">\n' + data[i].title + '</div>' +
                                '\n' + '<div class="review-message">\n' + data[i].review +
                                '</div>\n<hr>';

                            $('.review').append($createreveiw);
                        }
                        else {
                            console.log('in else');
                        }
                    }
                }
                else {
                    $noreview = '<div><h4>No Reviews Given</h4></div>';
                    $('.review').append($noreview);

                }
            }

        });
    })
});




