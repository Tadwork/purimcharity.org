const dialogPolyfill = require('dialog-polyfill');
const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);
const openModalLinks =  document.querySelectorAll('a.donate-card');
for(let link of openModalLinks){
    link.addEventListener('click', openModal.bind(link));
}
function openModal(e) {
    e.preventDefault();
    const AMOUNT_PARAM = 'xAmount=',
          href = this.href,
          INDEX_OF_AMOUNT_IN_HREF = href.indexOf(AMOUNT_PARAM) + AMOUNT_PARAM.length,
          amount = href.slice(INDEX_OF_AMOUNT_IN_HREF);
    if(href.indexOf(AMOUNT_PARAM) >= 0){
        const pledge_amount = document.querySelector('#pledge-amount');
        pledge_amount.textContent = ' of $' + amount 
    }
    dialog.showModal();
    setTimeout(()=>{
        window.location.href = href
    },4000)
}