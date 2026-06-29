
// function change () {
//     let ele = document.getElementsByTagName("h1");
//     ele[0].innerText = "Bella Ciao"

//     let ele1 = document.getElementById("utk");
//     ele1.innerText = "this is new me"
//     ele1.style.backgroundColor = "black"

//     const card = document.getElementById("card");
//     Object.assign(card.style, {
//     width: "300px", height: "200px", border: "2px solid black",
//     borderRadius: "10px", display: "flex", alignItems: "center",
//     justifyContent: "center", cursor: "pointer"
//     });
//     card.onclick = () => Object.assign(card.style, {
//     backgroundImage: "url('https://imgs.search.brave.com/IIXYAGYhkYzZqJkNaMBRV2D7MhL7Q_t4oGeV8vquRG0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzEw/MzQzMi5qcGc')",
//     backgroundSize: "cover", backgroundPosition: "center", color: "white"
//     });
// }

// function makeVertical() {
//     document.getElementById("c1").style.display = "block";
//     document.getElementById("c2").style.display = "block";
//     document.getElementById("c3").style.display = "block";
// }

function clock(){
    let ele=document.getElementById("clock")
    let date=new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    let time = h+":"+m+":"+s

    setTimeout(()=>{
        clock()
    },1000)
    ele.innerText=time
}
clock()













