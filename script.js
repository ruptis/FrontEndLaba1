document.querySelector('.header_burger').onclick = function() {
  document.querySelector('.header_burger').classList.toggle('active');
  document.querySelector('.header_content').classList.toggle('active');
  document.querySelector('.header').classList.toggle('active');
}

document.getElementById("close").onclick = function()
{
    const modal = document.getElementById("openModal");
    modal.classList.toggle('active');
}

function sbmt(f)
    {
        const modal = document.getElementById("openModal");
        modal.classList.add("active");
    }
                                                    