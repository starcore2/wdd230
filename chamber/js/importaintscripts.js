document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

const date = Date();
let test = 1;
if (date.getDay() == 1 || date.getDay() == 2 || test == 1)
{
    let banner = document.querySelector('#banner')
    banner.setAttribute(display, "grid")
}
