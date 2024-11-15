window.addEventListener("load", function(){
	// nav
	let header = document.querySelector("#header");
	let nav = document.querySelector("nav");
	let navList = document.querySelectorAll("nav > ul > li");
	
	nav.addEventListener("mouseenter", function(){
		gsap.fromTo(header, {height: 100}, {height: 450, duration:0.5});
	});

	header.addEventListener("mouseleave", function(){
		gsap.to(header, {height: 100, duration:0.5});
	});

	navList.forEach(function(item1, i){
		item1.addEventListener("mouseenter", function(){
			navList.forEach(function(item2, j){
				if(j == i){
					item2.classList.add("active");
				}
			});
		});
		item1.addEventListener("mouseleave", function(){
			navList.forEach(function(item2, j){
				item2.classList.remove("active");
			});
		});
	});

	// main_slide
	const mainSwiper = new Swiper(".mainSwiper", {
		loop: true,
		autoplay:{
			delay: 3000
		},
		speed: 1000,
		pagination:{
			el: ".mainSwiper .swiper-pagination"
		}
	})

	// section1 slide
	let section1Swiper=null;

	window.addEventListener("resize", function(){
		if(this.window.innerWidth >= 760){
			if(section1Swiper != null){
				section1Swiper.destroy();
				section1Swiper=null;
			}
		}
		else{
			if(section1Swiper == null){
				section1Swiper=new Swiper(".section1Swiper", {
					slidesPerView: 1.2,
					spaceBetween: 15,
				})
			}
		}
	});

	//section1 mouseenter
	let section1up=document.querySelectorAll("#section1 .swiper-slide");

	section1up.forEach(function(item1){
		item1.addEventListener("mouseenter", function(){
			gsap.to(item1, {y: -20, duration: 0.3});
		});
		item1.addEventListener("mouseleave", function(){
			gsap.to(item1, {y: 0, duration: 0.3});
		});
	});

	// section2 slide
	let section2Swiper=null;

	window.addEventListener("resize", function(){
		if(this.window.innerWidth >= 760){
			if(section2Swiper != null){
				section2Swiper.destroy();
				section2Swiper=null;
			}
		}
		else{
			if(section2Swiper == null){
				section2Swiper=new Swiper(".section2Swiper", {
					slidesPerView: 1.5,
					spaceBetween: 15,
				})
			}
		}
	});

	//section2 mouseenter
	let section2up=document.querySelectorAll("#section2 .swiper-slide");

	section2up.forEach(function(item1){
		item1.addEventListener("mouseenter", function(){
			gsap.to(item1, {y: -20, duration: 0.3});
		});
		item1.addEventListener("mouseleave", function(){
			gsap.to(item1, {y: 0, duration: 0.3});
		});
	});

	//section3 mouseenter
	let section3up=document.querySelectorAll("#section3 .content a");

	section3up.forEach(function(item1){
		item1.addEventListener("mouseenter", function(){
			gsap.to(item1, {y: -20, duration: 0.3});
		});
		item1.addEventListener("mouseleave", function(){
			gsap.to(item1, {y: 0, duration: 0.3});
		});
	});
});