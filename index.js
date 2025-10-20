document.addEventListener('DOMContentLoaded', function () {
    const textToType = `"This isn't just a portfolio; it's a documentation of principled engineering.

As a Software Engineer, I believe that success isn't defined by the lines of code written, but by the predictability, scalability, and maintainability of the systems built.

This site showcases projects where these core engineering values were put into practice. Every solution you see here is a testament to mindful design and commitment to long-term architectural health.

My goal is simple: to transform complex requirements into elegant, robust software that delivers real user value."`;

    const typedTextSpan = document.getElementById('typed-text');
    const cursorSpan = document.querySelector('.blinking-cursor');

    let charIndex = 0;
    const typingSpeed = 100; // Milliseconds per character

    function typeText() {
        if (charIndex < textToType.length) {
            const char = textToType.charAt(charIndex);
            typedTextSpan.innerHTML += (char === '\n') ? '<br>' : char;
            charIndex++;
        setTimeout(typeText, typingSpeed);
        } else {
            if (cursorSpan) {
                cursorSpan.style.display = 'none';
            }
        }
    }

    if (typedTextSpan) {
        typeText();
    }
});
window.addEventListener('load', function () {
  if (window.innerWidth < 600) {
    setTimeout(() => {
      const footerP = document.querySelector('footer p');
      if (footerP) {
        footerP.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300); // Delay scroll by 300ms
  }
});