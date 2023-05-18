
const cta_btn = document.querySelector('.btn')
const current_url = document.URL;

const url_obj = new URL(current_url)
const url_param = url_obj.searchParams.get('utm_source')

if(url_param == 'facebook'){
    cta_btn.href = 'https://no-code-js.webflow.io/from-facebook'

} else if(url_param == 'youtube'){
    cta_btn.href = 'https://no-code-js.webflow.io/from-youtube'
}

