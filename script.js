const productList = document.getElementById('product-list');
const navLinks = document.querySelectorAll('nav a');

// Fetch all products
function getAllProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => displayProducts(products));
}

// Fetch products by category
function getProductsByCategory(category) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(products => displayProducts(products));
}

// Display products
function displayProducts(products) {
  productList.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
    
<div class="bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-full h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
<a href="#">
    <img class="p-8 rounded-xl h-80 w-80" src="${product.image}" alt="${product.title}" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">${product.rating.rate}</span>
    </div>
    <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
        <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
    </div>
</div>
</div>      
    `;
    productCard.addEventListener('click', () => {
      window.location.href = `details.html?id=${product.id}`;
    });

    // <p>${product.description}</p>
    // <img src="${product.image}" alt="${product.title}">
    //   <h3>${product.title}</h3>
    // <button>Add to Cart</button>
    //   <h4>$${product.price}</h4>
    productList.appendChild(productCard);
  });
}

// Handle navigation menu clicks
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const category = link.getAttribute('id').replace('-', ' ');

    if (category === 'all products') {
      getAllProducts();
    } else {
      getProductsByCategory(category);
    }
  });
});

// Fetch all products on page load
getAllProducts();


// JavaScript

// const productsContainer = document.querySelector('#products-container');

// // Function to display all products
// function displayAllProducts() {
//   fetch('https://fakestoreapi.com/products')
//     .then(response => response.json())
//     .then(data => {
//       productsContainer.innerHTML = '';
//       data.forEach(product => {
//         productsContainer.innerHTML += `
//           <div class="w-1/4 p-2">
//             <div class="border rounded-md overflow-hidden">
//               <div class="h-48 bg-gray-300 bg-center bg-cover" style="background-image: url(${product.image})"></div>
//               <div class="p-4">
//                 <h2 class="font-bold text-lg">${product.title}</h2>
//                 <p class="mt-2 text-gray-600">${product.description}</p>
//                 <p class="mt-2 text-gray-900 font-bold">$${product.price}</p>
//               </div>
//             </div>
//           </div>
//         `;
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       productsContainer.innerHTML = '<p>Error fetching products</p>';
//     });
// }

// // Function to display products by category
// function displayProductsByCategory(category) {
//   fetch(`https://fakestoreapi.com/products/category/${category}`)
//     .then(response => response.json())
//     .then(data => {
//       productsContainer.innerHTML = '';
//       data.forEach(product => {
//         productsContainer.innerHTML += `
//           <div class="w-1/4 p-2">
//             <div class="border rounded-md overflow-hidden">
//               <div class="h-48 bg-gray-300 bg-center bg-cover" style="background-image: url(${product.image})"></div>
//               <div class="p-4">
//                 <h2 class="font-bold text-lg">${product.title}</h2>
//                 <p class="mt-2 text-gray-600">${product.description}</p>
//                 <p class="mt-2 text-gray-900 font-bold">$${product.price}</p>
//               </div>
//             </div>
//           </div>
//         `;
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       productsContainer.innerHTML = '<p>Error fetching products</p>';
//     });
// }

// // Display all products when the page is loaded
// displayAllProducts();
