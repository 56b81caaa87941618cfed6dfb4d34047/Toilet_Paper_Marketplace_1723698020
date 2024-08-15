/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/

Vue.component("purple_background_cta_component_1723698023", {
    template: `
    <section id="cta-section-container" class="bg-blue-900 bg-opacity-80 backdrop-filter backdrop-blur-lg bg-[url('https://example.com/video-game-background.jpg')] bg-cover bg-center">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-700 bg-opacity-70 shadow-lg">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-blue-600" :class="radialGradientPrimaryStyle"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-indigo-500" :class="radialGradientSecondaryStyle">
                    </div>
                </div>
                <!-- Blurred shape -->
                <div id="blurred-shape" class="absolute bottom-0 translate-y-1/2 left-0 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                        <defs><linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%"><stop offset="0%" :stop-color="stopColorPrimaryStyle" /><stop offset="100%" :stop-color="stopColorSecondaryStyle" stop-opacity="0" /></linearGradient></defs>
                        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
                    </svg>
                </div>
                <!-- Content -->
                <div id="content" class="max-w-3xl mx-auto text-center">
                    <div id="content-subtitle" class="flex"><div id="content-subtitle-text" class="flex-1 font-medium bg-clip-text pb-3 text-blue-300" :class="[transparentTextStyle, contentSubtitleStyle]">Level Up Your Bathroom Experience</div></div>
                    <div class="flex" id="content-title-container"><h2 id="content-title" class="flex-1 h2 bg-clip-text pb-4 text-white" :class="[transparentTextStyle, contentCtaTitleStyle]">Power Up with Pixel-Perfect TP: Your Gaming Throne Awaits!</h2></div>
                    <div class="flex" id="content-body-container"><p id="content-body" class="flex-1 text-lg mb-8 text-blue-200" :class="[contentBodyStyle]">Embark on an epic quest through our vast inventory of gaming-inspired toilet paper. From 8-bit softness to 4K ultra-plush, find the perfect roll to complete your gaming setup and conquer every bathroom boss battle.</p></div>
                    <a id="content-cta-button" href="#0" class="btn transition duration-150 ease-in-out group bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-indigo-700" :class="[contentCtaButtonPrimaryStyle, contentCtaButtonGradientStyle, contentCtaButtonGradientStyle, contentCtaButtonHoverStyle]">Start Your Quest <span id="content-cta-arrow" class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" :class="contentCtaArrowStyle">-&gt;</span></a>
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-blue-600",
                radialGradientSecondaryStyle: "bg-indigo-500",
                stopColorPrimaryStyle: "#3B82F6",
                stopColorSecondaryStyle: "#6366F1",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-blue-300 to-indigo-300",
                contentCtaTitleStyle: "bg-gradient-to-r from-white via-blue-100 to-white",
                contentBodyStyle: "text-blue-200",
                contentCtaButtonPrimaryStyle:"text-white",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-blue-500 to-indigo-600",
                contentCtaButtonHoverStyle: "hover:from-blue-600 hover:to-indigo-700",
                contentCtaArrowStyle: "text-white"
            };
        },
    });
                    