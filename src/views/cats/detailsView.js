import page from "page";
import { html } from "lit-html";
import catsApi from "../../api/catsApi";
import rentApi from "../../api/rentApi";

const template = (cat, isRent, onRent) => html`

<div class="bg-white">
  <div class="pt-6">

    <!-- Image gallery -->
    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <img src="${cat.imageUrl}" alt="cat image" class="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]">
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">${cat.name}</h1>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <!-- Description and details -->
        <div>
          <h3 class="sr-only">Description</h3>

          <div class="space-y-6">
            <p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
          </div>
        </div>

        <div class="mt-10">
          <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

          <div class="mt-4">
            <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
              <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
              <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
            </ul>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>

        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Price</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">${cat.price || 40}$ per day</p>
          </div>
        </div>

        <div class="mt-10">

        ${isRent
            ? html`
            <p class="text-sm text-gray-600">This cat is not available!</p>
            `
            :
            html`
            <div class="mt-4 space-y-6">
                <button
                @click=${onRent}
                type='button'
                class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg">

                    <span>Rent</span>
                </button>
          </div>
            `
        }
          
        </div>

      </div>
    </div>
  </div>
</div>

`;

export default async function (ctx) {
    const cat = await catsApi.getOne(ctx.params.catId);
    const rent = await rentApi.getOne(ctx.params.catId);
    const isRent = !!rent.userId;
    
    ctx.render(template(cat, isRent, rentClickHandler.bind(ctx)));
}

async function rentClickHandler() {
    // id for users in firebase
    const userId = this.user.uid;

    const catId = this.params.catId;
    const result = await rentApi.rent(catId, userId);
    console.log(result);

}