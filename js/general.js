printDate();
function printDate()
{
    //print copyright date in footer
    $('footer .footerContainer #footer-date').html(new Date().getFullYear());
}
