<template>
    <div data-recaptcha></div>
</template>

<script>
let gRecaptchaApiLoaded;


export default {

    name: "recaptcha",

    data()
    {
        return {
            version: 3,
            apiKey: '6LczjZcpAAAAAPu2LrxCO-OQaaYzj4VTFwdLHoBG',
            recaptchaInitiated: false
        };
    },
    beforeUnmount() {
        this.removeRecaptchaScript();
    },
    mounted()
    {
        this.$nextTick(() =>
        {
            this.createScript().then(() => this.initializeV3());
        });
    },

    methods:
    {
        createScript()
        {
            if (!this.apiKey || window.grecaptcha)
            {
                return Promise.resolve();
            }

            if (!gRecaptchaApiLoaded && !this.recaptchaInitiated)
            {
                gRecaptchaApiLoaded = new Promise((resolve, reject) =>
                {
                    const script = document.createElement("script");
                    let scriptSource;

                    if (this.version === 3)
                    {
                        scriptSource = `https://www.google.com/recaptcha/api.js?render=${this.apiKey}`;
                    }
                    else
                    {
                        scriptSource = "https://www.google.com/recaptcha/api.js";
                    }

                    script.type = "text/javascript";
                    script.id = "google-recaptcha-api";
                    script.src = scriptSource;

                    script.addEventListener("load", () => resolve(script), false);
                    script.addEventListener("error", () => reject(script), false);

                    document.body.appendChild(script);
                });
            }

            return gRecaptchaApiLoaded;
        },

        initializeV3()
        {
            if (window.grecaptcha && !this.recaptchaInitiated)
            {
                this.recaptchaInitiated = true;
                window.grecaptcha.ready(() =>
                {
                    if (this.version !== 3)
                    {
                        this.$el.dataset.recaptcha = window.grecaptcha.render(
                            this.$el,
                            {
                                sitekey: this.apiKey,
                                size: "invisible",
                                badge: "bottomright",
                                callback: this.recaptchaCallback.bind(this)
                            }
                        );
                    }
                });
            }
        },
        recaptchaCallback(response)
        {
            this.$el.querySelector("[name=\"g-recaptcha-response\"]")
                .dispatchEvent(
                    new CustomEvent("recaptcha-response", { response: response })
                );
        },
        removeRecaptchaScript() {
            const script = document.getElementById("google-recaptcha-api");
            const badge = document.querySelector('.grecaptcha-badge');

            if (badge) {
                badge.remove();
            }

            if (script) {
                script.remove();
                window.grecaptcha = undefined;
                this.recaptchaInitiated = false;
                gRecaptchaApiLoaded = undefined;
            }
           
        },
        executeReCaptcha(form) {
            const recaptchaElement = form?.querySelector('[data-recaptcha]');

            if (window.grecaptcha && recaptchaElement) {
                return new Promise((resolve, reject) => {
                window.grecaptcha.execute(this.apiKey, { action: 'homepage' })
                    .then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject(new Error('No reCAPTCHA response received'));
                    }
                    })
                    .catch((err) => reject(err));
                });
            }

            return Promise.reject(new Error('reCAPTCHA not available'));
        }

    }
}
</script>
