var lastohmosa = document.lastModified;

timetomod = document.querySelector('#datelast').textContent;

timetomod = timetomod + lastohmosa;

document.querySelector('#datelast').textContent = timetomod;