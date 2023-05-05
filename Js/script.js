$(document).ready(function () {

    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    $('.category_item').click(function () {

        var catProduct = $(this).attr('category');
        console.log(catProduct);


        // accion de click en el menu al seleccionar una opcion

        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');


        //filtro

        //ocultar
        $('.productItem').css('transform', 'scale(0)');
        function hideProduct() {
            $('.productItem').hide();
        } setTimeout(hideProduct, 400);


        //mostrar

        function showProduct() {
            $('.productItem[category="' + catProduct + '"]').show();
            $('.productItem[category="' + catProduct + '"]').css('transform', 'scale(1)');
        } setTimeout(showProduct, 400);

    });

    //mostrar todo

    $('.category_item[category="all"]').click(function () {
        function showAll() {
            $('.productItem').show();
            $('.productItem').css('transform', 'scale(1)');
        } setTimeout(showAll, 400);


    })





});
