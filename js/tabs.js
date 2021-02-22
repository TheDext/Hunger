/*
		=== HTML ===

._tabs
	.some-block__nav
		._tabs-item
		._tabs-item
		._tabs-item
	
	._tabs-block
	._tabs-block
	._tabs-block

			=== CSS ===
			
	._tabs-block {
	display: none;
	&._active {
		display: block;
	}
}
*/


let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_current');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_item.classList.add('_current');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}



























//====================================== ТАБ НА JQUERRY===================================

/* CТРУКТУРА HTML ==================

			<div class="tabs">
				<span class="tab">Вкладка 1</span>
				<span class="tab">Вкладка 2</span>
				<span class="tab">Вкладка 3</span>        
		  </div>
		  <div class="tab_content">
				<div class="tab_item">Содержимое 1</div>
				<div class="tab_item">Содержимое 2</div>
				<div class="tab_item">Содержимое 3</div>
		  </div>	
*/

/* ИСХОДНИК =====================

	$(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

*/
// .wrapper заменить на имя контейнера, который является оболочкой для табов

//====================================== /ТАБ НА JQUERRY===================================




