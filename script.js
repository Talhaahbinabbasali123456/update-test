// Write all your Javascript here!
let month = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]



function callback(index) {
    $.ajax({
        url: `https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${index}`,
        success: function(data) {
            console.log(data);
            document.querySelector(`#img`).src = data.imageURL;
            document.querySelector(`#heading`).innerHTML = data.info.heading;
            document.querySelector(`#description`).innerHTML = data.info.description;
            document.querySelector(`#heading2`).innerHTML = data.sale.heading;
            document.querySelector(`#description2`).innerHTML = data.sale.description;
            document.querySelector(`#i1`).innerHTML = data.menuOptions[0];
            document.querySelector(`#i2`).innerHTML = data.menuOptions[1];
            document.querySelector(`#i3`).innerHTML = data.menuOptions[2];
            document.querySelector(`#i4`).innerHTML = data.menuOptions[3];
            var Ndate = new Date(data.date);
            var d = Ndate.getDay(Ndate * 1000);
            var dat = Ndate.getMonth(Ndate * 1000);
            var year = Ndate.getFullYear(Ndate * 1000);
            var h = Ndate.getHours();
            var m = Ndate.getMinutes();
            document.querySelector(`#date`).innerHTML = `${month[dat]}-${d}-${year}  ${h}H : ${m}M`;
        }
    });
}
callback('en');