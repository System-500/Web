$(function () {

var text1="Рушаймо у 3D-світ";
var text2="Підкасти";
var text3="Українська архітектура стане невидимою?";
var text4= "Шизоїдний тип особистості– чому нам усім хочеться побути на самоті?";
var text5="Підкаст у пуховиках - 'вітер, сонце, біомаса – рішення кліматичної кризи?'"
var text6="Борщ Мікеланджело - Книжковий ринок смог з Остапом Українцем"


$(".header").slideDown(1500);
$("#content").fadeIn(1600).animate({"font-size":"32px"},500)
$("#imgheader").fadeIn(1600).animate({"margin-left":"0px"},150);
$("#text").fadeIn(1700).animate({"opacity":"1"},1500);

$("#strelka").click(function(){

$("#sortable").sortable({placeholder:"ui-state-hightlight"});



})




$("#span").click(function(){




$("#imgheader").attr({"src":'imkurs/3d.png'});
if($('#content').text()!=text1){
	$('#content').text(text1);
$("#text").text('Епізод створено у співпраці з ГО Піксельовані Реальності в рамках проекту Дуже Цифрові резиденції за підтримки Українського Культурного фонду. Для іллюстрації використані роботи проекту ProSlovo.com / Будинок Слово, куратора Власа Бєлова та резидентки Ганни Білецької (Харків).Ведуча – Влада Міронова.Саунддизайн – Микита Квітка')
}
else
{$('#content').text(text2)
$("#text").text("Подкаст,підкаст, або аудіопрограма — цифровий медіа-файл або низка таких файлів, які розповсюджуються інтернетом для відтворення на портативних медіа-програвачах чи персональних комп'ютерах. За змістом вони можуть нагадувати радіошоу, звукову виставу, включати інтерв'ю, лекції тощо, що належить до усного жанру")}


$(".amenu1").toggle("slow");	
$(".amenu2").toggle("slow");
$(".cina").toggle("slow");

if ($('#content').text()!= text3){

	

$(".amenu3").slideUp("slow");	
$(".amenu4").slideUp("slow");
$(".cina1").slideUp("slow");
}
	if ($('#content').text()!= text1){

	

$(".amenu1").slideUp("slow");	
$(".amenu2").slideUp("slow");
$(".cina").slideUp("slow");
}


	if ($('#content').text()!= text4){

	

$(".amenu5").slideUp("slow");	
$(".amenu6").slideUp("slow");
$(".cina2").slideUp("slow");
}
	if ($('#content').text()!= text5){

	

$(".amenu7").slideUp("slow");	
$(".amenu8").slideUp("slow");
$(".cina3").slideUp("slow");

	}
	if ($('#content').text()!= text6){

	

$(".amenu9").slideUp("slow");	
$(".amenu10").slideUp("slow");
$(".cina4").slideUp("slow");
}


if($("#content").text()!='Рушаймо у 3D-світ')
$("#imgheader").attr({"src":'imkurs/header.jpg'});

});





$("#span1").click(function(){


$("#imgheader").attr({"src":'imkurs/arc.png'});
if($('#content').text()!=text3){
	$('#content').text(text3)
$("#text").text('Чи архітектура може існувати лише в цифровому світі? Так, це ж про трансмонументалізм!? Слухайте те, що це таке і з якими викликами стикається сучасне мистецтво від харківського художника Романа Мініна.А також керамістка Наталія розповість про індійський храм, створений у віртуальному світі')
}
else
{$('#content').text(text2)
$("#text").text("Подкаст,підкаст, або аудіопрограма — цифровий медіа-файл або низка таких файлів, які розповсюджуються інтернетом для відтворення на портативних медіа-програвачах чи персональних комп'ютерах. За змістом вони можуть нагадувати радіошоу, звукову виставу, включати інтерв'ю, лекції тощо, що належить до усного жанру")}



if($("#content").text()!='Українська архітектура стане невидимою?')
$("#imgheader").attr({"src":'imkurs/header.jpg'});



$(".amenu3").toggle("slow");	
$(".amenu4").toggle("slow");
$(".cina1").toggle("slow");

	if ($('#content').text()!= text3){

	

$(".amenu3").slideUp("slow");	
$(".amenu4").slideUp("slow");
$(".cina1").slideUp("slow");
}
	if ($('#content').text()!= text1){

	

$(".amenu1").slideUp("slow");	
$(".amenu2").slideUp("slow");
$(".cina").slideUp("slow");
}


	if ($('#content').text()!= text4){

	

$(".amenu5").slideUp("slow");	
$(".amenu6").slideUp("slow");
$(".cina2").slideUp("slow");
}



	if ($('#content').text()!= text5){

	

$(".amenu7").slideUp("slow");	
$(".amenu8").slideUp("slow");
$(".cina3").slideUp("slow");

	}
	if ($('#content').text()!= text6){

	

$(".amenu9").slideUp("slow");	
$(".amenu10").slideUp("slow");
$(".cina4").slideUp("slow");
}

});









$("#span2").click(function(){


$("#imgheader").attr({"src":'imkurs/prost.jpg'});
if($('#content').text()!=text4){
	$('#content').text(text4)
$("#text").text('Говоримо про шизоїдний тип особистості. Великий інсайт: у нас у всіх є шизоїдні риси характеру. Марк та Ілля розповідають, звідки в шизоїдного типу така велика потреба бути наодинці, як вони зазвичай поводяться та які травми ховаються за такою поведінкою. ')

}
else
{$('#content').text(text2)
$("#text").text("Подкаст,підкаст, або аудіопрограма — цифровий медіа-файл або низка таких файлів, які розповсюджуються інтернетом для відтворення на портативних медіа-програвачах чи персональних комп'ютерах. За змістом вони можуть нагадувати радіошоу, звукову виставу, включати інтерв'ю, лекції тощо, що належить до усного жанру")}



if($("#content").text()!=text4)
$("#imgheader").attr({"src":'imkurs/header.jpg'});



$(".amenu5").toggle("slow");	
$(".amenu6").toggle("slow");
$(".cina2").toggle("slow");

	if ($('#content').text()!= text3){

	

$(".amenu3").slideUp("slow");	
$(".amenu4").slideUp("slow");
$(".cina1").slideUp("slow");
}
	if ($('#content').text()!= text1){

	

$(".amenu1").slideUp("slow");	
$(".amenu2").slideUp("slow");
$(".cina").slideUp("slow");
}


	if ($('#content').text()!= text4){

	

$(".amenu5").slideUp("slow");	
$(".amenu6").slideUp("slow");
$(".cina2").slideUp("slow");

	}
	
	if ($('#content').text()!= text5){

	

$(".amenu7").slideUp("slow");	
$(".amenu8").slideUp("slow");
$(".cina3").slideUp("slow");

	}
	if ($('#content').text()!= text6){

	

$(".amenu9").slideUp("slow");	
$(".amenu10").slideUp("slow");
$(".cina4").slideUp("slow");
}


});


















$("#span3").click(function(){


$("#imgheader").attr({"src":'imkurs/pyhovik.jpg'});
if($('#content').text()!=text5){
	$('#content').text(text5)
$("#text").text("У цьому епізоді до ведучої Лоріни приєднується Анна Богушенко – кліматологиня, екоактивістка та експертка енергетичного відділу ГО “Екодія”. Аня знає все про зв’язок клімату та енергетики і сьогодні розкаже про найзеленішу сферу енергетики – відновлювані джерела енергії (ВДЕ).")
}
else
{$('#content').text(text2)
$("#text").text("Подкаст,підкаст, або аудіопрограма — цифровий медіа-файл або низка таких файлів, які розповсюджуються інтернетом для відтворення на портативних медіа-програвачах чи персональних комп'ютерах. За змістом вони можуть нагадувати радіошоу, звукову виставу, включати інтерв'ю, лекції тощо, що належить до усного жанру")}



if($("#content").text()!=text5)
$("#imgheader").attr({"src":'imkurs/header.jpg'});



$(".amenu7").toggle("slow");	
$(".amenu8").toggle("slow");
$(".cina3").toggle("slow");

	if ($('#content').text()!= text3){

	

$(".amenu3").slideUp("slow");	
$(".amenu4").slideUp("slow");
$(".cina1").slideUp("slow");
}
	if ($('#content').text()!= text1){

	

$(".amenu1").slideUp("slow");	
$(".amenu2").slideUp("slow");
$(".cina").slideUp("slow");
}


	if ($('#content').text()!= text4){

	

$(".amenu5").slideUp("slow");	
$(".amenu6").slideUp("slow");
$(".cina2").slideUp("slow");
	}
	if ($('#content').text()!= text5){

	

$(".amenu7").slideUp("slow");	
$(".amenu8").slideUp("slow");
$(".cina3").slideUp("slow");

	}
	if ($('#content').text()!= text6){

	

$(".amenu9").slideUp("slow");	
$(".amenu10").slideUp("slow");
$(".cina4").slideUp("slow");
}


});












$("#span4").click(function(){


$("#imgheader").attr({"src":'imkurs/borch.jpg'});
if($('#content').text()!=text6){
	$('#content').text(text6)
	$("#text").text("Що спільного у польських та українських сучасних письменників? Спойлер: ниття. Як заробляють видавництва та чому ти не можеш купити улюблену книгу задешево? Кого і як читають українці? Як книжки впливають на мовну ідентичність Центральної та Східної України? Чому мало фантастики українською? Навіть про попаданцєв. Чому російські переклади - лайно? (Чому більшість російськомовних перекладів в Україні - гівно?). Чи існує взагалі школа перекладу в Україні? Як почати писати та продаватися: Х простих кроків для кожного. Як зварити борщ, якщо ти Мікеланджело? Про ці та інші не настільки хороші питання розмовляємо з Остапом Українцем - письменником, перекладачем, автором “Канцелярії хрестових походів” та “Малхуту”")
}

else
{$('#content').text(text2)
$("#text").text("Подкаст,підкаст, або аудіопрограма — цифровий медіа-файл або низка таких файлів, які розповсюджуються інтернетом для відтворення на портативних медіа-програвачах чи персональних комп'ютерах. За змістом вони можуть нагадувати радіошоу, звукову виставу, включати інтерв'ю, лекції тощо, що належить до усного жанру")}



if($("#content").text()!=text6)
$("#imgheader").attr({"src":'imkurs/header.jpg'});



$(".amenu9").toggle("slow");	
$(".amenu10").toggle("slow");
$(".cina4").toggle("slow");

	if ($('#content').text()!= text3){

	

$(".amenu3").slideUp("slow");	
$(".amenu4").slideUp("slow");
$(".cina1").slideUp("slow");
}
	if ($('#content').text()!= text1){

	

$(".amenu1").slideUp("slow");	
$(".amenu2").slideUp("slow");
$(".cina").slideUp("slow");
}


	if ($('#content').text()!= text4){

	

$(".amenu5").slideUp("slow");	
$(".amenu6").slideUp("slow");
$(".cina2").slideUp("slow");
	}
	if ($('#content').text()!= text5){

	

$(".amenu7").slideUp("slow");	
$(".amenu8").slideUp("slow");
$(".cina3").slideUp("slow");

	}
	if ($('#content').text()!= text6){

	

$(".amenu9").slideUp("slow");	
$(".amenu10").slideUp("slow");
$(".cina4").slideUp("slow");
}


});

























$("#dialod3d").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});


$("#dialodarc").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});
$("#dialodshiza").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});

$("#dialodpyh").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});

$("#dialodborch").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});
$("#zm").dialog({
	autoOpen:false,
show:{effect:"explode",
duration: 1000},
hide:{effect:"explode",
duration: 1000}

});

$("#zamovlena").click(function(){
	$("#zm").dialog("open");





})


$(".amenu1").click(function(){
	$("#dialod3d").dialog("open");





})



$(".amenu3").click(function(){
	$("#dialodarc").dialog("open");

})
$(".amenu5").click(function(){
	$("#dialodshiza").dialog("open");

})

$(".amenu7").click(function(){
	$("#dialodpyh").dialog("open");

})

$(".amenu9").click(function(){
	$("#dialodborch").dialog("open");

})





$('.foto').click(function(){
	
	$(".koshik-wrapper").append($(this).clone().click(function(){
		$(this).remove();
		
		Vsiogo();
	}));
	Vsiogo();
})
function Vsiogo(){
	
	var count = 0;
	var suma = 0;
	$(".koshik-wrapper>.foto").each(
	function(){
		count++;
		suma+=parseInt($(this).attr('price'));
		$(this).attr({"title":" Клацніть аби видалити з кошика "})
	}
	)

    $('#suma').html(" Всього <strong> "+count+" </strong>подкастів на суму <strong> "+suma+"</strong> ГРН")
	if(count>0){$(".koshik-wrapper").addClass("full-koshik");}
	else{$(".koshik-wrapper").removeClass("full-koshik");}
}
$("#oform").click(function(){
	$("#emal").val('')
	$("#pob").val('')
	alert("Ваше замовлення прийняте. Очікуйте повідомлення...  ")
})




$(".slider").each(function(){
	
	var obj=$(this);
	$(obj).append("<div class='nav'></div>");
	$(obj).find("li").each(function(){
		$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
		$(this).addClass("slider"+$(this).index());
		
	});
	$(obj).find("span").first().addClass("on");
	function sliderJAJA(obj, sl){
		var ul=$(sl).find("ul");
		var bl=$(sl).find("li.slider"+obj);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-"+step*obj},500);
	}
	$(document).on("click",".slider .nav span", function(){
		var sl=$(this).closest(".slider");
		$(sl).find("span").removeClass("on");
		$(this).addClass("on");
		var obj = $(this).attr('rel');
		sliderJAJA(obj, sl);
	});
	
	
	
	
	
	
	
})




$('#asec').click(function(){
	var textPO= "Показати більше";
    var textSH = "Показати менше";
		
	$("#secret").slideToggle();
	$("#secret1").slideToggle();
	
	
	if($('#asec').text()!=textSH)
	$('#asec').text(textSH)
   else 
	   $('#asec').text(textPO)

})
$("#vidpr").button();
$('#vidpr').click(function(){

var vvv = $('#name').val() 
var v = $('#c').val() 
$("#comm").prepend("<div id='komb'><img src='imkurs/ava.png' id='ava'><div id='nn'><p id='kom' '><span class='mn'>"+ vvv +":</span><br>"+ v+ "</p></div></div>");
$('#c').val(" ") 

$('#name').val("")




})



















})