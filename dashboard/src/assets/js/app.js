$(function(){$('[data-toggle="tooltip"]').tooltip()}),jQuery(document).ready(function(){jQuery(".scrollbar-inner").scrollbar()}),$(document).ready(function(){var t=!1,o=!1,e=0,a=0
    t||($toggle=$(".sidenav-toggler"),$toggle.click(function(){1==e?($("html").removeClass("nav_open"),$toggle.removeClass("toggled"),e=0):($("html").addClass("nav_open"),$toggle.addClass("toggled"),e=1)}),t=!0),o||($topbar=$(".topbar-toggler"),$topbar.click(function(){1==a?($("html").removeClass("topbar_open"),$topbar.removeClass("toggled"),a=0):($("html").addClass("topbar_open"),$topbar.addClass("toggled"),a=1)}),o=!0),$('[data-select="checkbox"]').change(function(){$target=$(this).attr("data-target"),$($target).prop("checked",$(this).prop("checked"))})})
    

$.notify({
	icon: 'la la-bell',
	title: 'Komiser',
	message: 'Welcome to Cloud Inspector Tool',
},{
	type: 'success',
	placement: {
		from: "bottom",
		align: "right"
	},
	time: 5000,
});

