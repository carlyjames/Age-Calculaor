
let overlay = document.getElementById('overlay');
let start = document.getElementById('start');
let app = document.getElementById('app');
let label = document.querySelectorAll('label')
let allInputs = document.querySelectorAll('.input')

const calculateAge = () => {
    let d1 = document.getElementById('date').value;
    let m1 = document.getElementById('month').value;
    let y1 = document.getElementById('year').value;


    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let y2 = date.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 = d2) {
        d2 = d2 + month[m2 - 1]
        m2 = m2 - 1;

    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;

    }

    let d = d2 = d2 - d1; 
    let m = m2 - m1;
    let y = y2 - y1;


    // uncomment to display age as html text and add "age" to swal text
    // let age = document.getElementById('displayAge').innerText = `You are ${y} Years old, ${m} Months and ${d} Days`

    // display age as alert
    let alertAge = document.querySelector('displayAge');
    alertAge = `You are ${y} Years old, ${m} Months and ${d} Days`

    swal({
        title: "😎",
        text: alertAge,
        icon: "success",
        buttons: ["Wrong", "Aww correct!"],
        dangerMode: false,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Buy me coffee then! 😁", {
            icon: "warning",
            buttons: ["Never", "Okay!"],
          });
        } else {
          swal("Try again! 🙃");
        }
      });
    
}



window.addEventListener('load',()=>{
    label.forEach((e)=>{
        e.classList.add('active')
    })
    allInputs.forEach((e)=>{
        e.classList.add('active')
    })
})


