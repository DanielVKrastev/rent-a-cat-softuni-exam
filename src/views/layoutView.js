import { html, render } from "../lib/lit-html.js";

const rootEl = document.getElementById('root');

const layoutTemplate = (body, closeMobileNav, openMenu, ctx) => html`
    <div class="h-full bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Rent a Cat</span>
                        <img class="h-8 w-auto"
                            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                </div>
                <div class="lg:hidden" role="dialog" aria-modal="true">
                    <button @click=${openMenu} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="/" class="text-sm/6 font-semibold text-gray-900">Home</a>
                    <a href="/cats" class="text-sm/6 font-semibold text-gray-900">Cats</a>
                    ${ctx.isAuthenticated
                        ? html`
                            <a href="/cats/create" class="text-sm/6 font-semibold text-gray-900">Create</a>
                            <a href="/logout" class="text-sm/6 font-semibold text-gray-900">Logout</a>
                        `
                        :
                        html`
                            <a href="/login" class="text-sm/6 font-semibold text-gray-900">Login</a>
                            <a href="/register" class="text-sm/6 font-semibold text-gray-900">Register</a>
                        `
                    }
                   
                </div>

                ${
                    ctx.isAuthenticated
                    ? html`
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/logout" class="text-sm/6 font-semibold text-gray-900">Log out <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    `
                    : html`
                    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
                    </div>
                    `
                }
                
                
            </nav>
            <!-- Mobile menu, show/hide based on menu open state. -->
            <div class="lg:hidden invisible" role="dialog" aria-modal="true" id="mobile-nav">
                <!-- Background backdrop, show/hide based on slide-over state. -->
                <div class="fixed inset-0 z-50"></div>
                <div
                    class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div class="flex items-center justify-between">
                        <a href="/" class="-m-1.5 p-1.5">
                            <span class="sr-only">Your Company</span>
                            <img class="h-8 w-auto"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
                        </a>
                        <button @click=${closeMobileNav} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                            <span class="sr-only">Close menu</span>
                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="mt-6 flow-root">
                        <div class="-my-6 divide-y divide-gray-500/10">
                            <div class="space-y-2 py-6">
                                <a href="/"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Home</a>
                                <a href="/cats"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Cats</a>
                            ${ctx.isAuthenticated
                                ? html`
                                <a href="/cats/create"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Create</a>
                                <a href="/logout"
                                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Logout</a>
                                    </div>
                                    `
                                : html`
                                 <div class="py-6">
                                <a href="/login"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Log
                                    in</a>
                                <a href="/register"
                                    class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" @click=${closeMobileNav}>Register</a>
                            </div>
                    `
                }

                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="relative isolate px-6 pt-14 lg:px-8">
            ${body}
        </div>

        
    </div>
    <!-- FOOTER -->
    <footer class="bg-white rounded-lg shadow m-4 light:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 SoftUni Rent a Cat <a href="https://flowbite.com/" class="">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/" class=" me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="/cats" class=" me-4 md:me-6">Cats</a>
        </li>

        ${ctx.isAuthenticated
                                ? html`
            <li>
                <a href="/cats/create" class=" me-4 md:me-6">Add Cat</a>
            </li>
                                `
                                : html`
             <li>
                <a href="/login" class=" me-4 md:me-6">Login</a>
            </li>
            <li>
                <a href="/register" class=" me-4 md:me-6">Register</a>
            </li>                   
                                `
        }
        
    </ul>
    </div>
</footer>

`;

export default function(ctx, next){

    console.log(ctx.user);
    console.log(ctx.isAuthenticated);
    

    ctx.render = (templateResult) => {
        render(layoutTemplate(templateResult, clickHandlerCloseMobileNav, clickHandlerOpenMobileNav, ctx), rootEl);
    };

    next();
}

function clickHandlerCloseMobileNav(){
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.className = 'invisible';
}

function clickHandlerOpenMobileNav(){
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.className = 'visible';
}