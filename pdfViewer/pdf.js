// const url = 'janakdesai.pdf';

// let pdfDoc = null,
//     pageNum = 1,
//     pageIsRendering = false,
//     pageNumIsPending = null;

// const scale = 1.5,
//     canvas = document.querySelector('canvas'),
//     ctx = canvas.getContext('2d');

// // Render the page
// const renderPage = num => {
//     pageIsRendering = true;  //  rendering - true

//     // Get page
//     pdfDoc.getPage(num).then(page => {
//         // Set scale
//         const viewport = page.getViewport({
//             scale
//         });
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderCtx = {
//             canvasContext: ctx,
//             viewport
//         };

//         page.render(renderCtx).promise.then(() => {
//             pageIsRendering = false;                    // rendering false

//             if (pageNumIsPending !== null) { // not working
//                 renderPage(pageNumIsPending);
//                 pageNumIsPending = null;
//             }
//         });

//         // Output current page
//         document.getElementById('currentnum').textContent = num;
//     });
// };

// // Check for pages rendering
// const queueRenderPage = num => {
//     if (pageIsRendering) {
//         pageNumIsPending = num;  // 
//     } else {
//         renderPage(num);
//     }
// };

// // Show Prev Page
// const showPrevPage = () => {
//     if (pageNum <= 1) {
//         return;
//     }
//     pageNum--;
//     queueRenderPage(pageNum);
// };

// // Show Next Page
// const showNextPage = () => {
//     if (pageNum >= pdfDoc.numPages) {
//         return;
//     }
//     pageNum++;
//     queueRenderPage(pageNum);
// };

// // Get Document
// pdfjsLib
//     .getDocument(url)
//     .promise.then(pdfDoc_ => {
//         pdfDoc = pdfDoc_;

//         let a = document.getElementById('pagecount').innerText = pdfDoc.numPages

//         renderPage(pageNum);
//     })
//     .catch(err => {
//         // Display error
//         const div = document.createElement('div');
//         div.className = 'error';
//         div.appendChild(document.createTextNode(err.message));
//         document.querySelector('body').insertBefore(div, canvas);
//         // Remove top bar
//         document.getElementById('nav').style.display = 'none';
//     });

// // Button Events
// document.getElementById('back').addEventListener('click', showPrevPage);
// document.getElementById('next').addEventListener('click', showNextPage);


// const url = '‪janakdesai.pdf'
// let pdfDoc = null,
//     pageNum = 1

// const scale = 1.5,
//     canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d');

// const renderPage = (num) => {

//     pdfDoc.getPage(num).then(page => {
//         const viewport = page.getViewport({
//             scale
//         });

//         canvas.height = viewport.height;
//         canvas.width = viewport.width;

//         const renderCtx = {
//             canvasContext: ctx,
//             viewport
//         };

//         page.render(renderCtx)
//         document.getElementById('currentnum').textContent = num;



//     });
// }

// pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
//         pdfDoc = pdfDoc_
//         let a = document.getElementById('pagecount').innerText = pdfDoc.numPages

//         renderPage(pageNum)


//     })
//     .catch((err) => {
//         console.log(err)
//     })

// const showPrevPage = () => {
//     if (pageNum <= 1) {
//         return;
//     }
//     pageNum--;
//     renderPage(pageNum);
// };

// const showNextPage = () => {
//     if (pageNum >= pdfDoc.numPages) {
//         return;
//     } else {
//         pageNum++;
//         renderPage(pageNum);
//     }

// };

// let back = document.getElementById('back')
// back.addEventListener('click', showPrevPage)

// let next = document.getElementById('next')
// next.addEventListener('click', showNextPage)

// R='a'
// fetch(R).then(()=>{
//     console.log('d')
// })
// .catch(()=>{
//     console.log('error')
// })