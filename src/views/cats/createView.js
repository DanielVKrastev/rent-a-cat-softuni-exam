import page from "page";
import { html } from "lit-html";
import catsApi from "../../api/catsApi";

const template = (onSubmit) => html`
<form @submit=${onSubmit}>
  <div class="space-y-12">

    <div class="border-b border-gray-900/10 pb-12 mt-20" style="width: 900px; margin: 0 auto">
      <h2 class="text-base/7 font-semibold text-gray-900">Cat Rent Information</h2>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="name" class="block text-sm/6 font-medium text-gray-900">Cat name</label>
          <div class="mt-2">
            <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="age" class="block text-sm/6 font-medium text-gray-900">Age</label>
          <div class="mt-2">
            <input id="age" name="age" type="number" autocomplete="age" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="price" class="block text-sm/6 font-medium text-gray-900">Price per Day</label>
          <div class="mt-2">
            <input id="price" name="price" type="number" autocomplete="price" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-4">
          <label for="image" class="block text-sm/6 font-medium text-gray-900">Cat image</label>
          <div class="mt-2">
            <input id="image" name="imageUrl" type="text" autocomplete="price" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="breed" class="block text-sm/6 font-medium text-gray-900">Breed</label>
          <div class="mt-2 grid grid-cols-1">
            <select id="breed" name="breed" autocomplete="country-name" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option value='Persian'>Persian</option>
              <option value='Britian'>Britian</option>
              <option value='Siamese'>Siamese</option>
            </select>
            <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>

`;

export default async function (ctx) {
    ctx.render(template(formSubmitHandler));
}

async function formSubmitHandler(e){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const catData = Object.fromEntries(formData);
    
    try{
       await catsApi.create(catData);

       page.redirect('/cats');
    }catch(err){
        console.log(err.message);
        
    }
}