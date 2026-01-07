document.addEventListener('DOMContentLoaded', () => {
    
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إضافة كلاس active لتشغيل الأنيميشن المعرف في CSS
                entry.target.classList.add('active');
                
                // إذا أردت أن يظهر العنصر مرة واحدة فقط ولا يختفي مجدداً:
                // revealObserver.unobserve(entry.target);
            } else {
                // إذا أردت أن يتكرر الأنيميشن كلما صعدت ونزلت (اختياري):
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.15 // سيبدأ الأنيميشن عندما يظهر 15% من العنصر في الشاشة
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });


    // --- 2. التحكم في القائمة الجانبية (Mobile Menu) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('#main-nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
            
            // تغيير أيقونة القائمة من (شرطات) إلى (X) عند الفتح
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // إغلاق القائمة تلقائياً عند الضغط على أي رابط (لتحسين تجربة المستخدم)
    const navLinks = document.querySelectorAll('#main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('mobile-active');
            const icon = menuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });


    // --- 3. تغيير شكل الهيدر عند النزول (Sticky Header Effect) ---
    const header = document.querySelector('#main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "5px 0";
            header.style.backgroundColor = "rgba(61, 0, 61, 0.95)"; // تعتيم الخلفية أكثر عند السكرول
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
        } else {
            header.style.padding = "15px 0";
            header.style.backgroundColor = "var(--primary-bg)";
            header.style.boxShadow = "none";
        }
    });

});