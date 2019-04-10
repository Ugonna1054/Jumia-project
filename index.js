
const input = $('input');
const selboxWidth = $('.selboxWidth');

// callback functions to change background color on hover (mouseenter and mouseleave!) 

// on mouse enter
const callback1 = function () {$(this).parent().css("background-color", "moccasin"); $(this).addClass('btnDivBd').css("outline", "0px solid blue");}

// on mouse leave
const callback2 = function () {$(this).parent().css("background-color", ""); $(this).removeClass('btnDivBd')}


// adding hover Event Listener

input.hover(callback1, callback2)
// code to show option html content on click of select button

// variable declaration for  selector of option items
const returnss = $("#returnss");
const payments = $('.payments');
const dropoff = $('.dropoff');
const packaging = $('.packaging');
const seller = $('.seller');
const commercial = $('.commercial');
const other = $('.other');

// variable declaration of the selector for parent html DIVs to show if a given option item is selected
const parent1 = $('.parent1');
const parent2 = $('.parent2');
const parent3 = $('.parent3');
const parent4 = $('.parent4');
const parent5 = $('.parent5');
const parent6 = $('.parent6');
const parent7 = $('.parent7');
const all = $(".parent1, .parent2, .parent3, .parent4, .parent5, .parent6, .parent7");
const main_parent = $("#main_parent");
const other1 = $('.other1');
const other2 = $('.other2');
const parent1b = $('.parent1b');
const parent1c = $('.parent1c');
const other3 = $('.other3')

// callback function to call

const retcallback =  () => {if (other1.is(':checked')) {parent1c.remove()} else if (other2.is(':checked')) {parent1c.prependTo(parent1b)}}

var callbackk = () => { 
if (returnss.is(':selected')) {all.remove(); parent1.show().appendTo(main_parent); other1.click(retcallback); other2.click(retcallback) }
else if (dropoff.is(':selected')) {all.remove(); parent2.show().appendTo(main_parent)}
else if (payments.is(':selected')) {all.remove(); parent3.show().appendTo(main_parent)}
else if (packaging.is(':selected')) {main_parent.empty(); parent4.show().appendTo(main_parent)}
else if (seller.is(':selected')) {main_parent.empty(); parent5.show().appendTo(main_parent)}
else if (commercial.is(':selected')) {all.remove(); parent6.show().appendTo(main_parent)}
else if (other.is(':selected')) {all.remove(); parent7.show().appendTo(main_parent)}

else { all.hide()}
}


selboxWidth.change(callbackk)




