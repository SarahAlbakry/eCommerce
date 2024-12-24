﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// terminal start 
jQuery(document).ready(function ($) {
	"use strict";
	$('#customers-testimonials').owlCarousel({
		loop: true,
		center: true,
		items: 3,
		margin: 30,
		autoplay: true,
		dots: true,
		nav: true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1170: {
				items: 3
			}
		}
	});
});
//trminal end