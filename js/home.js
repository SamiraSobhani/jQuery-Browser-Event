$(document).ready(function () {
    loadPage();

});
$('#mainButton').on('click',function () {
    loadPage();
});

$('#akronButton').on('click',function () {
    $('#akronInfoDiv').show();
    $('#mainInfoDiv').hide();
    $('#minneapolisInfoDiv').hide();
    $('#louisvilleInfoDiv').hide();
    $('#akronWeather').hide();
    $('#akronWeatherButton').on('click', function (){
        $('#akronWeather').show();
    })
});

    $('#minneapolisButton').on('click',function () {
        $('#minneapolisInfoDiv').show();
        $('#mainInfoDiv').hide();
        $('#louisvilleInfoDiv').hide();
        $('#akronInfoDiv').hide();
        $('#minneapolisWeather').hide();
        $('#minneapolisWeatherButton').on('click',function (){
            $('#minneapolisWeather').show();
        })
    });

        $('#louisvilleButton').on('click',function (){
            $('#louisvilleInfoDiv').show();
            $('#mainInfoDiv').hide();
            $('#minneapolisInfoDiv').hide();
            $('#akronInfoDiv').hide();
            $('#louisvilleWeather').hide();
            $('#louisvilleWeatherButton').on('click',function (){
                $('#louisvilleWeather').show();
            });

});
        $('td').hover(
            function (){
                $(this).css("background-color", "WhiteSmoke");
        },function (){
                $(this).css('background-color','');
            });


function loadPage() {
    $('#mainInfoDiv').show();
    $('#akronInfoDiv').hide();
    $('#minneapolisInfoDiv').hide();
    $('#louisvilleInfoDiv').hide();

}