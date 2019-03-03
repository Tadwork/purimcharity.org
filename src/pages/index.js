import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Purim Charity"
      keywords={[`purim`, "matanos levyonim", "charity"]}
    />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <div className="logo">
      <Logo />
      {/* <img class=" w-full  " src="../images/just_logo2.jpg" /> */}
      <h3 className="float-right">Under the auspices of R' Dovid Baum</h3>
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage

// const dialogPolyfill = require('dialog-polyfill');
// const dialog = document.querySelector('dialog');
// dialogPolyfill.registerDialog(dialog);
// const openModalLinks =  document.querySelectorAll('a.donate-card');
// for(let link of openModalLinks){
//     link.addEventListener('click', openModal.bind(link));
// }
// function openModal(e) {
//     e.preventDefault();
//     const AMOUNT_PARAM = 'xAmount=',
//           href = this.href,
//           INDEX_OF_AMOUNT_IN_HREF = href.indexOf(AMOUNT_PARAM) + AMOUNT_PARAM.length,
//           amount = href.slice(INDEX_OF_AMOUNT_IN_HREF);
//     if(href.indexOf(AMOUNT_PARAM) >= 0){
//         const pledge_amount = document.querySelector('#pledge-amount');
//         pledge_amount.textContent = ' of $' + amount
//     }
//     dialog.showModal();
//     setTimeout(()=>{
//         window.location.href = href
//     },4000)
// }
// <!DOCTYPE html>
// <html lang="en-us">
//   <head>
//     <meta charset="utf-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
//     <meta
//       name="viewport"
//       content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1"
//     />
//     <title dir="ltr">Purim Charity.org</title>
//     <link href="./styles/index.css" rel="stylesheet" />
//   </head>

//   <body class="">
//     <nav
//       class="font-sans text-center flex flex-row-reverse justify-between my-4 mx-auto container overflow-hidden"
//     >
//       <a
//         href="https://secure.cardknox.com/kolleltiferesavrohom"
//         class="hidden md:block"
//       >
//         <img
//           src="./images/matanos_levyonim.jpg"
//           class="h-10 sm:h-10 rounded-full border border-brand-darkest"
//           alt="logo"
//         />
//       </a>
//     </nav>
//     <div class="  logo">
//       <img class=" w-full  " src="./images/just_logo2.jpg" />
//       <h3 class="float-right">Under the auspices of R' Dovid Baum</h3>
//     </div>
//     <section class="mt-8 font-sans container m-auto max-w-xl bg-brand-lighter">
//       <div class="flex flex-col sm:flex-row flex-wrap my-4">
//         <partial name="donate" amount size icon>
//           <a href="https://secure.cardknox.com/kolleltiferesavrohom?xAmount={{amount}}"	class="donate-card w-full sm:w-1/2 md:w-1/3 md:h-64 h-48 border-r group"
//             >
//               <div class="flip-container flip-container-{{size}}" ontouchstart="this.classList.toggle('hover');">
//                   <div class="flipper">
//                     <div class="front">
//                         <div class="donate-card__coin donate-card__coin-{{size}}" alt="">
//                           <div class="font-really-large text-brand-darker">${{amount}}</div>
//                         </div>
//                     </div>
//                     <div class="back">
//                         <div class="donate-card__coin donate-card__coin-{{size}}" alt="">
//                           <include src="./images/{{icon}}.svg"></include>
//                         </div>
//                     </div>
//                   </div>
//                 </div>
//                 <h3 class="mt-4 mb-1 text-brand-darker">Donation</h3>
//                 <p
//                   class="mt-4 text-center text-brand-dark leading-normal px-6 hidden group-hover:visible group-hover:block"
//                   block-text="description"
//                 >Donate ${{amount}} to צדקה‎</p>
//             </a>
//           </partial>
//           <partial name="donate" amount="2500" size="large" icon="king"></partial>
//           <partial name="donate" amount="1800" size="large" icon="masks"></partial>
//           <partial name="donate" amount="1000" size="large" icon="crown"></partial>

//           <partial name="donate" amount="750" size="large" icon="clown"></partial>
//           <partial name="donate" amount="500" size="large" icon="give"></partial>
//           <partial name="donate" amount="360" size="large" icon="basket"></partial>

//           <partial name="donate" amount="250" size="medium" icon="king"></partial>
//           <partial name="donate" amount="180" size="medium" icon="give"></partial>
//           <partial name="donate" amount="100" size="medium" icon="masks"></partial>

//           <partial name="donate" amount="50" size="small" icon="scroll"></partial>
//           <partial name="donate" amount="36" size="small" icon="wine"></partial>
//           <partial name="donate" amount="18" size="small" icon="basket"></partial>

//       </div>

//       <a
//         href="https://secure.cardknox.com/kolleltiferesavrohom"
//         class="donate-card w-full md:h-64 h-48 border-r group"
//       >
//         <div class="text-center flex justify-center items-center" alt="">
//           <div
//             class="font-really-large text-brand-darker group-hover:underline"
//           >
//             Or pick a custom amount
//           </div>
//         </div>
//         <p
//           class="mt-4 text-center text-brand-dark leading-normal px-6 hidden group-hover:visible group-hover:block"
//         >
//           Choose a custom amount to donate to צדקה‎
//         </p>
//       </a>
// 		</section>
// 		<dialog class="bg-brand-darker">
// 				<div class="pyro">
// 						<div class="before"></div>
// 						<div class="text-container">
// 							<div class="tracking-in-expand-fwd thank-you-text">Thank you</div>
// 							<div class="tracking-in-expand-fwd pledge-text">for your pledge<span id="pledge-amount"></span>!!</div>
// 							<div class="tracking-in-expand-fwd forwarding-text">We are now forwarding you to our payment page</div>
// 							<div class="tracking-in-expand-fwd tizku-text">תיזכו למיצות</div>

// 						</div>
// 						<div class="after"></div>
// 				</div>
// 				<!-- <form method="dialog">
// 					<input type="submit" value="Close" />
// 				</form> -->
// 			</dialog>
//   </body>
//   <script src="./index.js"></script>
//   <!-- Global site tag (gtag.js) - Google Analytics -->
//   <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112911946-1"></script>
//   <script>
//     window.dataLayer = window.dataLayer || [];
//     function gtag(){dataLayer.push(arguments);}
//     gtag('js', new Date());

//     gtag('config', 'UA-112911946-1');
//   </script>

// </html>
