const inp = document.querySelector(".input");
const bel = document.querySelector("body");

inp.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody()
{
    if (inp.checked)
    {
        bel.style.background = "black";
    }
    else
    {
        bel.style.background = "white";
    }
}

inp.addEventListener("input", ()=>
{
    updateBody();
    updatelocalStorage();
});

function updatelocalStorage()
{
    localStorage.setItem("mode",JSON.stringify(inp.checked));
}
