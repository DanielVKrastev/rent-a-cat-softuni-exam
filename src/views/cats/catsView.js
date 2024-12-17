import catsApi from "../../api/catsApi.js";
import { html, render } from "../../lib/lit-html.js";


const template = (cats) => html`
    <div class="bg-white">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

    ${cats.map(cat => html`
        <a href="/cats/${cat.id}/details" class="group">
          <img src="${cat.imageUrl}" alt="${cat.name}" class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]">
          <h3 class="mt-4 text-sm text-gray-700">${cat.name}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">${cat.age} year/s old.</p>
          <p class="mt-1 text-lg font-medium text-gray-900">${cat.price || 40}$</p>
        </a>
    `)}
      

    </div>
  </div>
</div>

`;

export default async function(ctx){

    try{
        const cats = await catsApi.getAll();

        console.log(cats);
        
        ctx.render(template(cats));
    }catch(err){
        console.log(err.message);
        
    }
    
    
}