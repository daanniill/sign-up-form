function btn_anim() {
    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        const label = input.previousElementSibling
        input.addEventListener('focus', () => {
            label.style.transform = 'translateX(0) translateY(0)'
            label.style.fontSize = '16px';
            input.style.color = '#040404'
            label.style.transition = '0.2s'
        })
        input.addEventListener('blur', () => {
            // Only move back if input is empty
            if (input.value.trim() === '') {
                label.style.transform = 'translateX(10px) translateY(28px)';
                label.style.fontSize = '16px';
                label.style.transition = '0.2s'
            }
            input.style.color = 'white'
        })
    })
}

function form_page() {
    document.querySelector(".sign_up_form").addEventListener("submit", function(e) {
        e.preventDefault(); // Stop default submit
        window.location.href = "form_page.html"; 
    });
}
form_page()
btn_anim()