const dialogPolyfill = require('dialog-polyfill');
const dialog = document.querySelector('dialog');
dialogPolyfill.registerDialog(dialog);
const openModalLinks =  document.querySelectorAll('a.donate-card');
for(let link of openModalLinks){
    link.addEventListener('click', openModal.bind(link));
}
function openModal(e) {
    const AMOUNT_PARAM = 'xAmount=',
          href = this.href,
          INDEX_OF_AMOUNT_IN_HREF = href.indexOf(AMOUNT_PARAM) + AMOUNT_PARAM.length,
          amount = href.slice(INDEX_OF_AMOUNT_IN_HREF);
    if(href.indexOf(AMOUNT_PARAM) >= 0){
        const pledge_amount = document.querySelector('#pledge-amount');
        pledge_amount.textContent = ' of $' + amount
    }
    dialog.showModal();
    if(gtag){
        gtag('event', 'click', {
            'event_category': 'Donate',
            'event_label': amount ? amount : "Custom Amount",
            'value': amount ? amount : 0,
            'transport_type': 'beacon',
            'event_callback': function(){  
                setTimeout(()=>{
                    window.location.href = href
                },3500)
            }
          }); 
    }
    setTimeout(()=>{
        window.location.href = href
    },4000)
    e.preventDefault();
}
Sentry.init({ dsn: 'https://78ed0171cb224d44a96d4436a499bbb3@sentry.io/1414963' });
