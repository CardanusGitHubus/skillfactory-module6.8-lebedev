let progressBar = $('#progress-bar-1');
let width = 0;
progressBar.width(`${width}%`);

$(document).ready(function() {
    $('.j-btn1').click(function() {
        progressBar.width(`${width + 1}%`);
        width += 1;
    });
    $('.j-btn3').click(function() {
        progressBar.width(`${width + 3}%`);
        width += 3;
    });
    $('.j-btn7').click(function() {
        progressBar.width(`${width + 7}%`);
        width += 7;
    });
    $('.j-btn-reset').click(function() {
        progressBar.width('0%');
        width = 0;
    })
});