class CustomSocialLinks extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .social-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .social-icon:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
                }
            </style>
            <div class="flex space-x-6">
                <a href="https://youtube.com" target="_blank" class="social-icon bg-red-600 hover:bg-red-700">
                    <i data-feather="youtube" class="text-white"></i>
                </a>
                <a href="https://tiktok.com" target="_blank" class="social-icon bg-gray-800 hover:bg-gray-900">
                    <i data-feather="activity" class="text-white"></i>
                </a>
                <a href="https://twitch.tv" target="_blank" class="social-icon bg-purple-600 hover:bg-purple-700">
                    <i data-feather="twitch" class="text-white"></i>
                </a>
            </div>
        `;
    }
}
customElements.define('custom-social-links', CustomSocialLinks);