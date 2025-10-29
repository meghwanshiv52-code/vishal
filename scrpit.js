document.addEventListener('DOMContentLoaded',() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    menuToggle.addEventListener('click', ()  => {
        // 'hidden'    
        mobileNav.classList.toggle('hidden');
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
    });
});

//कोटेशन फ़ॉर्म हैंडलिंग
const quteFrom = document.getElementById('quoteForm');
const messageElement = document.getElementById('message');

quoteFrom.addEventListener('submit',function(event) {
    // फ़ॉर्म के डिफ़ॉल्ट रीलोड व्यवहार को रोकें
    event.preventDefault();

    // 3. डेटा को इकट्ठा करें (यह डेटा वास्तविक वेबसाइट में सर्वर पर भेजा जाएगा)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pickup = document.getElementById('pickup').value;
    const delivery = document.getElementById('delivery').value;
    const cargo = document.getElementById('cargo');

    //बुनियादी क्लाइंट-साइड वैलिडेशन
    if (name === "" || email  === "" || pickup === "" || delivery === "" || cargo === "") {
        messageElement.textContent = "कृपया सभी फ़ील्ड भरें।";
        messageElement.style.backgroundColor = '#f8d7da'; //लाल रंग का बैकग्राउंड
        messageElement.style.color = '#721c24';
        messageElement.classList.remove('hidden');
        return;
    )

    // 4. सक्सेस मैसेज दिखाएं (असली वेबसाइट में यहाँ AJAX कॉल से सर्वर पर डेटा भेजा जाता है)
    console.log("कोटेशन डेटा:",{ name, email, pickup, delivery, cargo });

    messageElement.textContent = "आपका कोटेशन अनुरोध सफलतापूर्वक सबमिट कर दिया गया है। हम जल्द ही आपसे संपर्क करेंगें!";
    messageElement.style.backgroundColor = '#d4edda'; //हरा रंग का बैकग्राउंड
    messageElement.style.color = '#155724';
    messageElement.classList.remove('hidden');

    // 5. फ़ॉर्म को 5 सेकंड बाद रीसेट और मैसेज को छिपाएं
    setTimeout( () => {
        quteFrom.reset();
        messageElement.classList.add('hidden');
    }, 5000);
  });
});
  











