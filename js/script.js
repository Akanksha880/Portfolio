document.addEventListener('DOMContentLoaded', function () {
   // Preloader Fade Out
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Add the 'hide' class to trigger the fade-out transition
    preloader.classList.add('hide');
    // Ensure the preloader is removed from the DOM after the transition
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 800); // Matches the transition duration in CSS
  }
});
  
    /* Mobile Sidebar Toggle with Advanced Animation */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
  
    const overlay = document.createElement('div');
    overlay.classList.add('sidebar-overlay');
    document.body.appendChild(overlay);
  
    if (mobileMenuToggle && sidebar) {
      mobileMenuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
  
        if (sidebar.classList.contains('active')) {
          mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
          mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
  
      document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target) && sidebar.classList.contains('active')) {
          sidebar.classList.remove('active');
          overlay.classList.remove('active');
          mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
      });
  
      document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.addEventListener('click', () => {
          sidebar.classList.remove('active');
          overlay.classList.remove('active');
          mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
      });
    }
  
    /* Certificate Image Sizing */
    document.querySelectorAll('.certificate-front img').forEach(img => {
      img.onload = function () {
        const parentHeight = img.parentElement.clientHeight;
        if (img.naturalHeight < parentHeight * 0.6) {
          img.classList.add('small-image');
        } else if (img.naturalHeight > parentHeight * 0.8) {
          img.classList.add('large-image');
        }
      };
    });
  
    /* Skills Section Animation */
    const skillCards = document.querySelectorAll('.skill-card');
  
    const animateSkills = () => {
      skillCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
        if (rect.top <= windowHeight * 0.8) {
          const level = card.getAttribute('data-level');
          const progressFill = card.querySelector('.progress-fill');
          if (progressFill) progressFill.style.width = `${level}%`;
        }
      });
    };
  
    window.addEventListener('scroll', animateSkills);
    window.addEventListener('load', animateSkills);
  
    /* Dark/Light Mode Toggle */
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark');
        if (document.body.classList.contains('dark')) {
          darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
          darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
      });
    }
  
    function addWebsiteProtection() {
      // Inject CSS styles for advanced popups
      const style = document.createElement('style');
      style.textContent = `
        /* Base Popup Styles */
        .custom-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease;
          z-index: 9999;
          backdrop-filter: blur(5px);
        }
        .custom-popup.show {
          opacity: 1;
          visibility: visible;
        }
        .popup-content {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px 30px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
          text-align: center;
          position: relative;
          transform: scale(0.8);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        .custom-popup.show .popup-content {
          transform: scale(1);
          opacity: 1;
        }
        .popup-icon {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 60px;
          background: #ff4d4d;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 15px rgba(255, 77, 77, 0.5);
        }
        .popup-icon i {
          font-size: 30px;
          color: #fff;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          animation: shake 1.5s infinite;
        }
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .popup-content p {
          font-size: 18px;
          color: #fff;
          margin: 40px 0 20px;
          font-family: 'Montserrat', sans-serif;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        .popup-close {
          background: #333;
          color: #fff;
          border: none;
          padding: 10px 25px;
          border-radius: 5px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .popup-close:hover {
          background: #ff4d4d;
          transform: translateY(-3px);
        }
        /* Unique Popup Variants */
        .popup-content.type-1 .popup-icon { background: #ff4d4d; }
        .popup-content.type-2 .popup-icon { background: #ff9500; }
        .popup-content.type-3 .popup-icon { background: #ffcc00; }
        .popup-content.type-4 .popup-icon { background: #00cc99; }
        .popup-content.type-5 .popup-icon { background: #3399ff; }
        .popup-content.type-6 .popup-icon { background: #cc33ff; }
        .popup-content.type-7 .popup-icon { background: #ff6699; }
        .popup-content.type-8 .popup-icon { background: #66ccff; }
        .popup-content.type-9 .popup-icon { background: #ff3366; }
        .popup-content.type-10 .popup-icon { background: #33cc33; }
        .popup-content.type-11 .popup-icon { background: #ff66cc; }
        .popup-content.type-12 .popup-icon { background: #00cccc; }
        .popup-content.type-13 .popup-icon { background: #ff9933; }
        .popup-content.type-14 .popup-icon { background: #cc66ff; }
        .popup-content.type-15 .popup-icon { background: #66ff99; }
        .popup-content.type-16 .popup-icon { background: #ffcc66; }
        .popup-content.type-17 .popup-icon { background: #33ccff; }
        .popup-content.type-18 .popup-icon { background: #ff3399; }
        .popup-content.type-19 .popup-icon { background: #99cc33; }
        .popup-content.type-20 .popup-icon { background: #ff66ff; }
        .popup-content.type-21 .popup-icon { background: #33ffcc; }
        .popup-content.type-22 .popup-icon { background: #ff3333; }
        /* Watermark */
        .watermark {
          position: fixed;
          bottom: 15px;
          right: 15px;
          font-size: 16px;
          z-index: 1000;
        }
        .watermark a {
          color: #fff;
          text-decoration: none;
          opacity: 0.6;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .watermark a:hover {
          opacity: 1;
          color: #ff4d4d;
          text-decoration: underline;
        }
      `;
      document.head.appendChild(style);
    
      // Function to show popup with unique styles and messages
      function showCustomPopup(message, iconClass, typeClass = '') {
        const popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.innerHTML = `
          <div class="popup-content ${typeClass}">
            <div class="popup-icon"><i class="${iconClass}"></i></div>
            <p>${message}</p>
            <button class="popup-close">Close</button>
          </div>
        `;
        document.body.appendChild(popup);
    
        setTimeout(() => popup.classList.add('show'), 10);
    
        const closeButton = popup.querySelector('.popup-close');
        closeButton.addEventListener('click', () => {
          popup.classList.remove('show');
          setTimeout(() => popup.remove(), 500);
        });
    
        setTimeout(() => {
          if (popup.classList.contains('show')) {
            popup.classList.remove('show');
            setTimeout(() => popup.remove(), 500);
          }
        }, 5000); // Auto-close after 5 seconds
      }
    
      // 22 Advanced Protection Mechanisms with Unique Popups
      // 1. Right-click disabled
      document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showCustomPopup("This Website Content is Protected!", "fas fa-ban", "type-1");
      });
    
      // 2. Text selection disabled
      document.addEventListener('selectstart', (e) => {
        e.preventDefault();
        showCustomPopup("Text selection is blocked!", "fas fa-text-height", "type-2");
      });
    
      // 3. Copy disabled
      document.addEventListener('copy', (e) => {
        e.preventDefault();
        e.clipboardData.setData('text/plain', '');
        showCustomPopup("Copying is not allowed!", "fas fa-copy", "type-3");
      });
    
      // 4. Cut disabled
      document.addEventListener('cut', (e) => {
        e.preventDefault();
        showCustomPopup("Cutting is prohibited!", "fas fa-cut", "type-4");
      });
    
      // 5. Paste disabled
      document.addEventListener('paste', (e) => {
        e.preventDefault();
        showCustomPopup("Pasting is restricted!", "fas fa-paste", "type-5");
      });
    
      // 6. Inspect mode (F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+U) disabled
      document.addEventListener('keydown', (e) => {
        if (
          e.key === 'F12' ||
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
          (e.ctrlKey && e.key === 'U')
        ) {
          e.preventDefault();
          showCustomPopup("Inspect mode is disabled!", "fas fa-tools", "type-6");
        }
      });
    
      // 7. Screenshot (PrintScreen) disabled
      document.addEventListener('keydown', (e) => {
        if (e.key === 'PrintScreen' || (e.altKey && e.key === 'PrintScreen')) {
          e.preventDefault();
          navigator.clipboard.writeText('').catch(() => {});
          showCustomPopup("Screenshots are blocked!", "fas fa-camera", "type-7");
        }
      });
    
      // 8. Dragging content disabled
      document.addEventListener('dragstart', (e) => {
        e.preventDefault();
        showCustomPopup("Dragging is not permitted!", "fas fa-hand-paper", "type-8");
      });
    
      // 9. Ctrl+S (Save Page) disabled
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'S') {
          e.preventDefault();
          showCustomPopup("Saving the page is restricted!", "fas fa-save", "type-9");
        }
      });
    
      // 10. Ctrl+P (Print) disabled
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'P') {
          e.preventDefault();
          showCustomPopup("Printing is not allowed!", "fas fa-print", "type-10");
        }
      });
    
      // 11. Developer tools detection
      setInterval(() => {
        if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
          showCustomPopup("Developer tools detected!", "fas fa-exclamation-triangle", "type-11");
        }
      }, 1000);
    
      // 12. Window resize abuse prevention
      let resizeCount = 0;
      window.addEventListener('resize', () => {
        resizeCount++;
        if (resizeCount > 5) {
          showCustomPopup("Excessive resizing detected!", "fas fa-expand", "type-12");
          resizeCount = 0;
        }
      });
    
      // 13. Mouse double-click disabled
      document.addEventListener('dblclick', (e) => {
        e.preventDefault();
        showCustomPopup("Double-clicking is disabled!", "fas fa-mouse-pointer", "type-13");
      });
    
      // 14. Touch long press (mobile) disabled
      document.addEventListener('touchstart', (e) => {
        const touchTimer = setTimeout(() => {
          e.preventDefault();
          showCustomPopup("Long press is restricted!", "fas fa-hand-holding", "type-14");
        }, 800);
        document.addEventListener('touchend', () => clearTimeout(touchTimer), { once: true });
      });
    
      // 15. Ctrl+A (Select All) disabled
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'A') {
          e.preventDefault();
          showCustomPopup("Selecting all is blocked!", "fas fa-object-group", "type-15");
        }
      });
    
      // 16. F5 (Refresh) restricted
      document.addEventListener('keydown', (e) => {
        if (e.key === 'F5') {
          e.preventDefault();
          showCustomPopup("Refreshing is restricted!", "fas fa-sync-alt", "type-16");
        }
      });
    
      // 17. Backspace outside input disabled
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
          e.preventDefault();
          showCustomPopup("Backspace navigation is disabled!", "fas fa-arrow-left", "type-17");
        }
      });
    
      // 18. Alt+Tab detection (mock)
      document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 'Tab') {
          e.preventDefault();
          showCustomPopup("Switching tabs is monitored!", "fas fa-window-restore", "type-18");
        }
      });
    
      // 19. Ctrl+Shift+J (Console) disabled
      document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
          e.preventDefault();
          showCustomPopup("Console access is blocked!", "fas fa-terminal", "type-19");
        }
      });
    
      // 20. Mouse wheel zoom (Ctrl + Scroll) disabled
      document.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
          showCustomPopup("Zooming with scroll is disabled!", "fas fa-search-plus", "type-20");
        }
      }, { passive: false });
    
      // 21. Window focus loss detection
      window.addEventListener('blur', () => {
        showCustomPopup("Please stay on this page!", "fas fa-eye", "type-21");
      });
    
      // 22. Page unload prevention
      window.addEventListener('beforeunload', (e) => {
        e.preventDefault();
        e.returnValue = '';
        showCustomPopup("Leaving the page is restricted!", "fas fa-sign-out-alt", "type-22");
      });
    
      // Additional Screenshot Protection
      // Overlay to prevent screenshot visibility
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        z-index: 9998;
        pointer-events: none;
      `;
      document.body.appendChild(overlay);
    
      // Watermark
      const watermark = document.createElement('div');
      watermark.className = 'watermark';
      watermark.innerHTML = '<a href="https://yourwebsite.com" target="_blank"></a>';
      document.body.appendChild(watermark);
    }
    
    // Initialize protection
    addWebsiteProtection();
  
    /* Background Animation */
    function createBackgroundElements() {
      const container = document.getElementById('backgroundAnimation');
      if (!container) return;
      const isDarkMode = document.body.classList.contains('dark');
      container.innerHTML = '';
  
      if (isDarkMode) {
        createElements('fas fa-star animation-element star', 75, container);
        createElements('fas fa-satellite animation-element satellite', 10, container, (i) => `${20 + (i * 20)}vh`);
        createElements('fas fa-meteor animation-element comet', 2, container);
        const moon = document.createElement('i');
        moon.className = 'fas fa-moon animation-element moon';
        container.appendChild(moon);
      } else {
        createElements('fas fa-plane animation-element aeroplane', 6, container, (i) => `${10 + (i * 20)}vh`, 'move-right');
        createElements('fas fa-dove animation-element bird', 10, container, (i) => `${30 + (i * 10)}vh`);
        createElements('fas fa-cloud animation-element cloud', 10, container, (i) => `${15 + (i * 15)}vh`, 'move-left');
        const sun = document.createElement('i');
        sun.className = 'fas fa-sun animation-element sun';
        container.appendChild(sun);
      }
    }
  
    function createElements(className, count, container, topPosition = () => `${Math.random() * 100}vh`, additionalClass = '') {
      for (let i = 0; i < count; i++) {
        const element = document.createElement('i');
        element.className = `${className} ${additionalClass}`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = topPosition(i);
        element.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(element);
      }
    }
  
    createBackgroundElements();
    if (darkModeToggle) {
      darkModeToggle.addEventListener('click', () => setTimeout(createBackgroundElements, 100));
    }
    window.addEventListener('resize', createBackgroundElements);
  
    /* Chatbot Logic */
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotBody = document.getElementById('chatbotBody');
  
    const chatbotResponses = {
      contact: 'You can contact me via the <a id="linkedin-link" href="https://www.linkedin.com/in/akanksha-kotwal-b3b008256" target="_blank">LinkedIn</a>.',
      projects: 'I’ve worked on various projects including web applications, mobile apps, and research initiatives. Check out the <a href="#projects">Projects section</a> for details!',
      skills: 'My skills include web development (HTML, CSS, JavaScript), Python, AI basics, and responsive design. See my <a href="#portfolio">Portfolio</a> for examples.',
      availability: 'I’m currently a student but open to freelance opportunities or collaborations. Let’s connect via the <a href="#contact">contact form</a>!'
    };
  
    if (chatbotToggle && chatbotContainer && closeChatbot && chatbotBody) {
      chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
      });
  
      closeChatbot.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
      });
  
      document.querySelectorAll('.chatbot-option').forEach(option => {
        option.addEventListener('click', () => {
          const responseKey = option.getAttribute('data-response');
          const response = chatbotResponses[responseKey];
          chatbotBody.innerHTML = `<div class="chatbot-message">${response}</div>`;
          const linkedinLink = document.getElementById("linkedin-link");
          if (linkedinLink) {
            linkedinLink.style.background = "linear-gradient(to right, rgb(43, 0, 255), rgb(255, 0, 255))";
            linkedinLink.style.webkitBackgroundClip = "text";
            linkedinLink.style.webkitTextFillColor = "transparent";
            linkedinLink.style.fontWeight = "bold";
          }
        });
      });
    }
  
    /* Smooth Scroll */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      });
    });
  
    const globalModal = document.getElementById('globalModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  
  const modalData = {
    blog1: `<h2>Innovations in Web Development</h2>
      <p>Web development is evolving at an unprecedented pace, with new frameworks, tools, and methodologies constantly reshaping the industry. The focus on user experience, performance optimization, and responsive design has never been more critical.</p>
      <p>One major trend is the rise of Jamstack architecture, which decouples the frontend from the backend, leading to faster load times and enhanced security. JavaScript frameworks like React, Vue.js, and Svelte continue to dominate, providing developers with dynamic capabilities.</p>
      <p>Another significant development is the integration of artificial intelligence into web applications. AI-driven chatbots, personalized content recommendations, and automated design generation are making websites smarter and more interactive.</p>
      <p>Additionally, WebAssembly is opening doors for running high-performance applications in the browser, while Progressive Web Apps (PWAs) are bridging the gap between web and mobile experiences.</p>
      <p>With the emergence of new CSS techniques, such as container queries and subgrid, styling has become more efficient and flexible. The adoption of headless CMS platforms is also streamlining content management, enabling seamless omnichannel experiences.</p>
      <p>Security remains a top priority, with stricter HTTPS protocols, Content Security Policies (CSPs), and better authentication mechanisms becoming standard. Developers are also focusing on ethical web practices, ensuring accessibility and inclusivity for all users.</p>
      <p>As web development continues to progress, staying updated with these innovations is essential for building modern, high-performing, and user-friendly applications.</p>`,
  
    blog2: `<h2>The Future of Software Engineering</h2>
      <p>The field of software engineering is constantly evolving, driven by advancements in technology and changes in development methodologies. As industries become more reliant on software solutions, engineers must adapt to emerging trends to remain relevant.</p>
      <p>One major shift is the widespread adoption of DevOps and CI/CD pipelines. These practices ensure continuous integration and deployment, allowing teams to deliver high-quality software faster and more efficiently.</p>
      <p>AI and machine learning are also revolutionizing the way software is developed, enabling predictive analytics, automated testing, and intelligent debugging. Low-code and no-code platforms are making development more accessible, empowering non-technical users to build applications with minimal coding.</p>
      <p>Microservices architecture is replacing monolithic systems, making applications more scalable and maintainable. Containerization with Docker and Kubernetes is further enhancing deployment flexibility.</p>
      <p>Security is becoming a central concern, with DevSecOps integrating security into every stage of the software development lifecycle. Engineers are now prioritizing secure coding practices, vulnerability assessments, and compliance with data protection regulations.</p>
      <p>Ethical considerations in software engineering, including bias in AI models and the environmental impact of large-scale computing, are gaining importance.</p>
      <p>The future of software engineering lies in continuous learning, adaptability, and embracing innovation to create more efficient, secure, and sustainable software solutions.</p>`,
  
    blog3: `<h2>Lessons in Leadership: My Journey as IUCEE President</h2>
      <p>Taking on the role of IUCEE President was a transformative experience that shaped my leadership skills, decision-making abilities, and perspective on teamwork. Leading a student-driven organization required strategic planning, collaboration, and a vision to foster innovation.</p>
      <p>One of the biggest lessons I learned was the importance of effective communication. Whether it was addressing members, organizing events, or coordinating with faculty, clear and concise communication played a crucial role in achieving our goals.</p>
      <p>Another critical aspect was delegation. A good leader doesn't just manage tasks but empowers the team by trusting them with responsibilities. By distributing tasks based on strengths, we achieved greater efficiency and encouraged individual growth.</p>
      <p>Through IUCEE, I organized workshops, hackathons, and networking events that helped students enhance their technical and soft skills. These events provided a platform for knowledge exchange, industry exposure, and professional development.</p>
      <p>Handling challenges was an integral part of my journey. Whether it was resolving conflicts, adapting to unforeseen changes, or managing deadlines, resilience and adaptability were key in overcoming obstacles.</p>
      <p>Perhaps the most fulfilling aspect was mentoring new members. Seeing them evolve into confident, capable individuals reaffirmed the impact of leadership beyond personal growth.</p>
      <p>My experience as IUCEE President taught me invaluable lessons in leadership, teamwork, and perseverance, which I carry forward in my academic and professional endeavors.</p>`,
  
    blog4: `<h2>The Power of Data Structures in Solving Real-World Problems</h2>
      <p>Data structures form the backbone of efficient computing and problem-solving. From search algorithms to storage optimization, the right data structure can significantly impact performance and scalability.</p>
      <p>One real-world example is social media platforms. Graph data structures are used to represent relationships between users, enabling features like friend suggestions and content recommendations.</p>
      <p>Another example is route optimization in navigation systems. Dijkstra’s algorithm, based on priority queues and graphs, helps determine the shortest paths for travel.</p>
      <p>Hash tables are widely used in database indexing, allowing quick data retrieval. Without efficient indexing, modern applications would face severe performance bottlenecks.</p>
      <p>Understanding the right data structure for a given problem is crucial in software development, ensuring efficient execution and resource utilization.</p>
      <p>My projects have utilized trees, linked lists, and hash maps to optimize performance, demonstrating the power of data structures in real-world applications.</p>`,
  
    blog5: `<h2>Balancing Academics and Extracurriculars: A Student’s Guide</h2>
      <p>As a Computer Science student actively engaged in student organizations and projects, balancing academics and extracurriculars has been a challenging yet rewarding journey.</p>
      <p>Time management has been my key strategy. I follow a structured schedule, prioritizing tasks based on deadlines and complexity.</p>
      <p>Participating in extracurriculars has enhanced my soft skills, network, and leadership capabilities, adding significant value to my academic growth.</p>
      <p>Setting realistic goals and avoiding burnout by taking breaks has helped me maintain productivity and enthusiasm.</p>
      <p>In this blog, I share practical strategies that have helped me successfully manage both academics and extracurricular commitments.</p>`,
    blog6: `<h2>Mastering Competitive Programming: A Roadmap for Success</h2>
      <p>Competitive programming is an essential skill for aspiring software engineers, helping them develop problem-solving abilities and algorithmic thinking.</p>
      <p>Key strategies include understanding data structures, practicing time complexity analysis, and solving problems consistently on platforms like Codeforces, LeetCode, and AtCoder.</p>
      <p>Participating in contests enhances coding speed and accuracy, while learning from editorial solutions improves conceptual understanding.</p>
      <p>With dedication and a structured learning path, mastering competitive programming becomes achievable.</p>`,
  
    blog7: `<h2>Cybersecurity Trends in 2025: Staying Ahead of Threats</h2>
      <p>Cybersecurity threats are constantly evolving, making it essential to stay updated on the latest security trends.</p>
      <p>AI-driven threat detection, zero-trust architecture, and cloud security enhancements are shaping the future of cybersecurity.</p>
      <p>As cyberattacks become more sophisticated, ethical hacking, penetration testing, and secure coding practices are becoming vital skills for security professionals.</p>
      <p>Implementing multi-factor authentication, encryption, and continuous monitoring are key strategies to mitigate risks.</p>
      <p>Cybersecurity awareness is no longer optional—it is a necessity in our digital world.</p>`,
      portfolio1: `<h2>Advanced Web Application</h2>
      <p>This project is a state-of-the-art web application designed with a focus on modern UI/UX principles, ensuring a seamless user experience. It integrates responsive design, dynamic animations, and interactive elements to enhance user engagement.</p>
      <p>Built using cutting-edge technologies such as React.js, Tailwind CSS, and Node.js, this application features a modular architecture that promotes scalability and maintainability. The backend is powered by Express.js, ensuring high performance and security.</p>
      <p>Key features include authentication with JWT, real-time data synchronization using WebSockets, and an intuitive dashboard that offers a visually appealing data representation. The application also implements RESTful APIs for efficient data exchange.</p>
      <p>By prioritizing accessibility, this project follows WCAG guidelines, ensuring inclusivity for all users. The advanced web application sets a benchmark in web development, demonstrating excellence in frontend and backend integration.</p>`,
  
    portfolio2: `<h2>Innovative Mobile App</h2>
      <p>This mobile application redefines convenience with a sleek, responsive interface and AI-powered functionalities. It seamlessly adapts to various screen sizes, providing an optimized user experience across devices.</p>
      <p>Developed using Flutter and Firebase, the app offers fast performance and real-time synchronization. It includes a robust authentication system with biometric login options, ensuring secure access.</p>
      <p>Features such as push notifications, location-based services, and AI-driven personalization make this app stand out. The use of cloud storage and data encryption enhances security and reliability.</p>
      <p>With an intuitive UI, this project demonstrates expertise in mobile development, offering an innovative solution for modern users.</p>`,
  
    portfolio3: `<h2>MIET Student Portal</h2>
      <p>The MIET Student Portal is a comprehensive platform designed for students to access academic resources, timetables, grades, and important notices efficiently.</p>
      <p>Developed with Laravel and MySQL, this portal ensures data security and smooth performance. The responsive interface allows students to navigate seamlessly across different devices.</p>
      <p>Features include a notification system, event calendar, and an AI-based chatbot for academic support. The system also integrates with the university database, providing real-time updates.</p>
      <p>This project showcases expertise in web development, database management, and user-centric design, enhancing the digital experience for MIET students.</p>`,
  
    portfolio4: `<h2>MIET Network Security Tool</h2>
      <p>This cybersecurity application is designed to monitor and secure the internal network of MIET. It provides real-time threat detection, firewall management, and encrypted data communication.</p>
      <p>Developed using Python and AI-driven anomaly detection, this tool ensures network safety by identifying potential cyber threats.</p>
      <p>Key functionalities include packet analysis, vulnerability scanning, and automated security reports. The dashboard offers insightful analytics, aiding administrators in maintaining network integrity.</p>
      <p>With its advanced security features, this project demonstrates expertise in cybersecurity and network management.</p>`,
  
    portfolio5: `<h2>Smart Attendance System</h2>
      <p>The Smart Attendance System utilizes AI-driven facial recognition to automate student attendance, reducing manual effort and improving accuracy.</p>
      <p>Built with OpenCV and Python, the system captures real-time facial data and verifies student identities. The backend, powered by Django, ensures efficient data handling.</p>
      <p>Features include automated reports, cloud-based storage, and real-time attendance tracking. The system also integrates with RFID for multi-layered authentication.</p>
      <p>This project exemplifies the application of AI and computer vision in education, streamlining administrative processes.</p>`,
  
    portfolio6: `<h2>MIET Placement Predictor</h2>
      <p>This machine learning-based tool predicts placement outcomes for MIET CSE students by analyzing academic performance, skill sets, and industry trends.</p>
      <p>Developed using Python, Scikit-learn, and TensorFlow, the model utilizes predictive analytics to provide students with career insights.</p>
      <p>Key features include resume analysis, interview preparation tips, and job recommendations based on skill gaps.</p>
      <p>With its AI-driven approach, this project enhances employability prospects, making data-driven career decisions easier for students.</p>`
  };
  
    if (globalModal && modalClose && modalBody) {
      document.querySelectorAll('.portfolio-item, .blog-post').forEach(item => {
        item.addEventListener('click', function () {
          const modalKey = this.getAttribute('data-modal');
          if (modalData[modalKey]) {
            modalBody.innerHTML = modalData[modalKey];
            globalModal.classList.add('active');
          }
        });
      });
  
      modalClose.addEventListener('click', function () {
        globalModal.classList.remove('active');
      });
  
      window.addEventListener('click', function (e) {
        if (e.target === globalModal) {
          globalModal.classList.remove('active');
        }
      });
    }
  
    /* Project Filter */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filterValue = this.getAttribute('data-filter');
        projectItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    /* Accordion */
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      if (header) {
        header.addEventListener('click', function () {
          const content = this.nextElementSibling;
          if (content) {
            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
              content.style.maxHeight = content.scrollHeight + 'px';
            }
          }
        });
      }
    });
  
    /* Contact Form Logic with Google Sheets */
    window.handleSubmit = function(event) {
      event.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const progressBar = document.getElementById('progressBar');
      const form = document.getElementById('contactForm');
  
      const name = sanitizeInput(document.getElementById('contactName').value.trim());
      const email = sanitizeInput(document.getElementById('contactEmail').value.trim());
      const phone = sanitizeInput(document.getElementById('contactPhone').value.trim());
      const message = sanitizeInput(document.getElementById('contactMessage').value.trim());
  
      if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (submitBtn && progressBar && form) {
        submitBtn.disabled = true;
        progressBar.style.display = 'block';
  
        const formData = new FormData(form);
  
        fetch('https://script.google.com/macros/s/AKfycbx0AYGrlyGSL1wmpkb5MwCgstM7kSM6DAapCTPvB2qkfdZYBO2LWMrYi65tf_5wrQ9N/exec', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          progressBar.style.display = 'none';
          document.getElementById('thankYouPopup').style.display = 'flex';
          form.reset();
          submitBtn.disabled = false;
        })
        .catch(error => {
          console.error('Error:', error);
          progressBar.style.display = 'none';
          submitBtn.disabled = false;
          alert('An error occurred. Please try again.');
        });
      }
    };
  
    window.closePopup = function() {
      const thankYouPopup = document.getElementById('thankYouPopup');
      if (thankYouPopup) thankYouPopup.style.display = 'none';
    };
  
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
    }
  
    function sanitizeInput(input) {
      return input.replace(/[<>\/]/g, '');
    }
  
    /* Virtual Assistant Logic with Progress Popup, Gender Detection, and Fixed Mic */
    const assistantTrigger = document.getElementById('assistantTrigger');
    const inputWrapper = document.getElementById('inputWrapper');
    const chatContainer = document.getElementById('chatContainer');
    const userInput = document.getElementById('userInput');
    const sendIcon = document.getElementById('sendIcon');
    const micIcon = document.getElementById('micIcon');
    const genderSelection = document.getElementById('genderSelection');
    const maleAssistant = document.getElementById('maleAssistant');
    const femaleAssistant = document.getElementById('femaleAssistant');
  
    let selectedGender = 'male'; // Default assistant gender
    let isAssistantActive = false;
    let userGender = null; // Detected user gender from voice (null if not detected)
  
    // Create Progress Popup Element
    const progressPopup = document.createElement('div');
    progressPopup.className = 'assistant-progress-popup';
    progressPopup.innerHTML = `
      <div class="assistant-progress-spinner"></div>
      <p>Processing...</p>
    `;
    if (chatContainer) chatContainer.appendChild(progressPopup);
  
    const qaDatabase = {
      "what is your name": { male: "I'm Akanksha, your virtual assistant!", female: "I'm Sheriya, your virtual assistant!" },
      "what do you do": { male: "I assist with information, tasks, and can open websites. Ask me anything!", female: "I help with queries, tasks, and can launch websites. How can I assist you?" },
      "where are you from": { male: "I'm a digital entity created by xAI, no specific location!", female: "I'm a virtual assistant from xAI, existing in the digital realm!" },
      "what time is it": { male: `It's currently ${new Date().toLocaleTimeString()}.`, female: `The time is ${new Date().toLocaleTimeString()}.` },
      "open youtube": { male: "Opening YouTube for you now!", female: "Launching YouTube, enjoy!" },
      "open yt": { male: "Opening YouTube for you now!", female: "Launching YouTube, enjoy!" },
      "open google": { male: "Opening Google now!", female: "Launching Google for you!" },
      "open facebook": { male: "Opening Facebook now!", female: "Launching Facebook for you!" },
      "tell me a joke": { male: "Why don't skeletons fight each other? Because they don't have the guts!", female: "Why was the math book sad? It had too many problems!" },
      "what is the weather like": { male: "I can't check the weather right now, but you can ask me to open a weather site!", female: "I don’t have weather data, but I can open a weather website for you!" },
      "who created you": { male: "I was created by the team at xAI to assist users like you!", female: "The folks at xAI brought me to life to help you out!" },
      "how old are you": { male: "I'm timeless, but I was activated on March 18, 2025!", female: "Age is just a number, but I started assisting on March 18, 2025!" },
      "play music": { male: "I can’t play music directly, but I’ll open YouTube for you to find some tunes!", female: "I can’t play music, but let me open YouTube for your music needs!" },
      "what is ai": { male: "AI, or Artificial Intelligence, is like me—software designed to think and act intelligently!", female: "AI stands for Artificial Intelligence—it's what powers me to assist you!" },
      "goodbye": { male: "See you later! Closing now.", female: "Bye for now! I’ll close the chat." },
      "contact": { male: "You can reach out via LinkedIn: <a href='https://www.linkedin.com/in/akanksha-kotwal-b3b008256' target='_blank'>Akanksha Kotwal</a> or use the contact form below!", female: "Feel free to contact via LinkedIn: <a href='https://www.linkedin.com/in/akanksha-kotwal-b3b008256' target='_blank'>Akanksha Kotwal</a> or the contact form!" },
      "how to contact": { male: "You can contact Akanksha via LinkedIn at <a href='https://www.linkedin.com/in/akanksha-kotwal-b3b008256' target='_blank'>this link</a> or scroll to the contact section!", female: "Contact Akanksha on LinkedIn <a href='https://www.linkedin.com/in/akanksha-kotwal-b3b008256' target='_blank'>here</a> or use the contact form below!" },
      "what are your skills": { male: "I can answer questions, open websites, and assist with tasks. Try me!", female: "I’m here to answer queries, launch sites, and help out. Ask away!" },
      "what is javascript": { male: "JavaScript is a programming language used to make websites interactive!", female: "JavaScript is a language that adds interactivity to web pages!" },
      "what is html": { male: "HTML is the structure of web pages, like the skeleton of a site!", female: "HTML stands for HyperText Markup Language—it builds the foundation of websites!" },
      "what is css": { male: "CSS styles websites, making them look good!", female: "CSS is Cascading Style Sheets—it’s what makes websites pretty!" },
      "who is akanksha": { male: "Akanksha Kotwal is the creator of this site, a talented student and developer!", female: "Akanksha Kotwal is the brilliant mind behind this website!" },
      "what is your purpose": { male: "I’m here to assist and make your experience on this site better!", female: "My purpose is to help you navigate and enjoy this website!" },
      "can you help me": { male: "Yes, I can! What do you need help with?", female: "Of course! How can I assist you today?" },
      "what day is it": { male: `Today is ${new Date().toLocaleDateString()}.`, female: `It’s ${new Date().toLocaleDateString()} today!` },
      "open linkedin": { male: "Opening LinkedIn now!", female: "Launching LinkedIn for you!" },
      "what is python": { male: "Python is a versatile programming language, great for AI and web!", female: "Python is a powerful language used for coding AI, web apps, and more!" },
      "tell me about projects": { male: "Check the projects section for cool web and app work!", female: "The projects section has awesome web and mobile projects—take a look!" },
      "what is the date": { male: `The date is ${new Date().toLocaleDateString()}.`, female: `Today’s date is ${new Date().toLocaleDateString()}.` },
      "say hello": { male: "Hello there!", female: "Hi, nice to see you!" }
    };
  
    if (assistantTrigger && inputWrapper && chatContainer && userInput && sendIcon && micIcon && genderSelection && maleAssistant && femaleAssistant) {
      // Ensure mic icon is visible by default
      micIcon.style.display = 'inline-block'; // Force visibility unless explicitly hidden
  
      assistantTrigger.addEventListener('click', () => {
        if (!isAssistantActive) {
          assistantTrigger.style.display = 'none';
          inputWrapper.style.display = 'block';
          chatContainer.style.display = 'block';
          genderSelection.style.display = 'flex';
          micIcon.style.display = 'inline-block'; // Ensure mic is visible when assistant opens
          isAssistantActive = true;
          const welcomeMsg = `Hello! I'm ${selectedGender === 'male' ? 'Akanksha' : 'Sheriya'} your Virtual Assistant. How can I help you today? (Try "open YouTube", "tell me a joke", or "contact"!)`;
          addMessage('assistant', welcomeMsg);
          speak(welcomeMsg);
          userInput.focus();
        }
      });
  
      maleAssistant.addEventListener('click', () => {
        selectedGender = 'male';
        maleAssistant.classList.add('active');
        femaleAssistant.classList.remove('active');
        const msg = "Hi, I'm Akanksha! How can I assist you?";
        chatContainer.innerHTML = '';
        addMessage('assistant', msg);
        speak(msg);
      });
  
      femaleAssistant.addEventListener('click', () => {
        selectedGender = 'female';
        femaleAssistant.classList.add('active');
        maleAssistant.classList.remove('active');
        const msg = "Hi, I'm Sheriya! How can I assist you?";
        chatContainer.innerHTML = '';
        addMessage('assistant', msg);
        speak(msg);
      });
  
      sendIcon.addEventListener('click', () => {
        if (isAssistantActive) handleMessage();
      });
  
      userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && isAssistantActive) handleMessage();
      });
  
      // Speech Recognition Setup
      if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
  
        micIcon.addEventListener('click', () => {
          if (isAssistantActive) {
            try {
              recognition.start();
              micIcon.style.color = '#ff4444'; // Indicate active listening
              showProgressPopup();
            } catch (error) {
              console.error('Speech recognition failed to start:', error);
              micIcon.style.color = 'var(--primary-color)';
              hideProgressPopup();
              addMessage('assistant', "Sorry, there was an issue with the microphone. Please try again.");
              speak("Sorry, there was an issue with the microphone. Please try again.");
            }
          }
        });
  
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          userInput.value = transcript;
          micIcon.style.color = 'var(--primary-color)';
          hideProgressPopup();
          // Simple gender detection placeholder (since pitch isn't directly available)
          // For now, we'll assume female if transcript includes common female indicators (simplified)
          userGender = transcript.toLowerCase().includes('emma') || Math.random() > 0.5 ? 'female' : 'male'; // Random for demo
          handleMessage();
        };
  
        recognition.onend = () => {
          micIcon.style.color = 'var(--primary-color)';
          hideProgressPopup();
        };
  
        recognition.onerror = (event) => {
          micIcon.style.color = 'var(--primary-color)';
          hideProgressPopup();
          addMessage('assistant', "Sorry, I couldn't understand your speech. Please try again or type your request.");
          speak("Sorry, I couldn't understand your speech. Please try again or type your request.");
          console.error('Speech recognition error:', event.error);
        };
      } else {
        console.warn('Speech recognition not supported in this browser.');
        micIcon.style.display = 'inline-block'; // Still show mic, but it won't work
        micIcon.style.cursor = 'not-allowed'; // Indicate it's disabled
        micIcon.title = 'Speech recognition not supported in this browser';
      }
  
      function addMessage(type, text) {
        const message = document.createElement('div');
        message.classList.add('chat-message', `${type}-message`);
        message.innerHTML = text;
        chatContainer.appendChild(message);
  
        const messages = chatContainer.children;
        while (messages.length > 2) {
          chatContainer.removeChild(messages[0]);
        }
  
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
  
      function speak(text) {
        if ('speechSynthesis' in window) {
          const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]+>/g, ''));
          const voices = window.speechSynthesis.getVoices();
          const responseGender = userGender || selectedGender;
          utterance.voice = voices.find(voice => voice.lang === 'en-US' && (responseGender === 'male' ? voice.name.includes('Male') || voice.name.includes('Daniel') : voice.name.includes('Female') || voice.name.includes('Samantha'))) || voices[0];
          utterance.rate = 1;
          utterance.pitch = responseGender === 'male' ? 0.8 : 1.2;
          window.speechSynthesis.speak(utterance);
        } else {
          console.warn('Text-to-speech not supported in this browser.');
        }
      }
  
      function showProgressPopup() {
        progressPopup.classList.add('active');
      }
  
      function hideProgressPopup() {
        progressPopup.classList.remove('active');
      }
  
      function handleMessage() {
        const message = userInput.value.trim().toLowerCase();
        if (!message) return;
  
        addMessage('user', message);
        userInput.value = '';
        showProgressPopup();
  
        const answer = qaDatabase[message];
        if (answer) {
          setTimeout(() => {
            addMessage('assistant', answer[selectedGender]);
            speak(answer[selectedGender]);
            hideProgressPopup();
  
            switch (message) {
              case "open youtube":
              case "open yt":
                window.open('https://www.youtube.com/', '_blank');
                break;
              case "open google":
                window.open('https://www.google.com/', '_blank');
                break;
              case "open facebook":
                window.open('https://www.facebook.com/', '_blank');
                break;
              case "open linkedin":
                window.open('https://www.linkedin.com/in/akanksha-kotwal-b3b008256', '_blank');
                break;
              case "play music":
                window.open('https://www.youtube.com/', '_blank');
                break;
              case "goodbye":
                addMessage('assistant', selectedGender === 'male' ? "See you later! Closing now." : "Bye for now! I’ll close the chat.");
                speak(selectedGender === 'male' ? "See you later! Closing now." : "Bye for now! I’ll close the chat.");
                setTimeout(() => {
                  assistantTrigger.style.display = 'block';
                  inputWrapper.style.display = 'none';
                  chatContainer.style.display = 'none';
                  genderSelection.style.display = 'none';
                  micIcon.style.display = 'inline-block'; // Ensure mic is visible on reset
                  chatContainer.innerHTML = '';
                  isAssistantActive = false;
                  userGender = null;
                  hideProgressPopup();
                }, 1000);
                break;
            }
          }, 500);
        } else {
          setTimeout(() => {
            const noAnswerMsg = "I don’t have a response for that. Let me redirect you to Perplexity AI!";
            addMessage('assistant', noAnswerMsg);
            speak(noAnswerMsg);
            hideProgressPopup();
            setTimeout(() => {
              window.open('https://www.perplexity.ai/', '_blank');
            }, 2000);
          }, 500);
        }
      }
    } else {
      console.error('One or more assistant elements are missing in the DOM.');
    }
  
    /* Back to Top */
    const backToTopButton = document.getElementById('backToTop');
    const runner = document.querySelector('.runner');
  
    if (backToTopButton) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTopButton.style.opacity = '1';
          backToTopButton.style.transform = 'translateY(0)';
        } else {
          backToTopButton.style.opacity = '0';
          backToTopButton.style.transform = 'translateY(100px)';
        }
      });
  
      backToTopButton.addEventListener('click', () => {
        let scrollPosition = window.scrollY;
        const duration = 800;
        const startTime = performance.now();
  
        function animateScroll(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeProgress = easeOutCubic(progress);
          window.scrollTo(0, scrollPosition * (1 - easeProgress));
  
          if (runner) {
            const windowHeight = window.innerHeight;
            const runnerHeight = 150;
            const newTop = windowHeight - (windowHeight * easeProgress) - runnerHeight;
            runner.style.bottom = `${newTop}px`;
            runner.style.opacity = 1 - progress;
            runner.classList.add('running');
          }
  
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else if (runner) {
            runner.style.opacity = 0;
            runner.style.bottom = '0';
            runner.classList.remove('running');
          }
        }
  
        function easeOutCubic(t) {
          return 1 - Math.pow(1 - t, 3);
        }
  
        requestAnimationFrame(animateScroll);
      });
    }
  
    /* Scroll Animation for Sections */
    const scrollElements = document.querySelectorAll('section');
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };
    const displayScrollElement = (element) => { element.classList.add('scrolled'); };
    const handleScrollAnimation = () => {
      scrollElements.forEach(el => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };
    window.addEventListener('scroll', handleScrollAnimation);
  });

  document.addEventListener('DOMContentLoaded', () => {
            // Theme Toggle
            const themeToggle = document.querySelector('.theme-toggle');
            const body = document.body;
            const header = document.querySelector('header');

            // Check for saved theme preference
            if (localStorage.getItem('theme') === 'light') {
                body.classList.add('light');
                header.classList.add('light');
                themeToggle.textContent = '☀️';
            }

            themeToggle.addEventListener('click', () => {
                body.classList.toggle('light');
                header.classList.toggle('light');
                if (body.classList.contains('light')) {
                    themeToggle.textContent = '☀️';
                    localStorage.setItem('theme', 'light');
                } else {
                    themeToggle.textContent = '🌙';
                    localStorage.setItem('theme', 'dark');
                }
            });

            // Particle Animation System
            const particleContainer = document.querySelector('.js-anim');
            const particleCount = 100;

            function createParticle() {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 2.5}s`;
                particle.style.animationDuration = `${1.5 + Math.random() * 2}s`;
                const moveX = (Math.random() - 0.5) * 300;
                const moveY = (Math.random() - 0.5) * 300;
                particle.style.setProperty('--x', `${moveX}px`);
                particle.style.setProperty('--y', `${moveY}px`);
                particleContainer.appendChild(particle);

                particle.addEventListener('animationend', () => {
                    particle.remove();
                    createParticle();
                });
            }

            for (let i = 0; i < particleCount; i++) {
                createParticle();
            }

            // Skills Icons Interaction
            const skillsIcons = document.querySelector('.skills-icons');
            const skillItems = document.querySelectorAll('.skills-icons li');
            let rotationPaused = false;

            skillsIcons.addEventListener('mouseenter', () => {
                rotationPaused = true;
                skillsIcons.style.animationPlayState = 'paused';
            });

            skillsIcons.addEventListener('mouseleave', () => {
                rotationPaused = false;
                skillsIcons.style.animationPlayState = 'running';
            });

            // // Dynamic Title Animation
            // const title = document.querySelector('.glow-bg h1');
            // let hue = 0;

            // function animateTitle() {
            //     hue = (hue + 1) % 360;
            //     title.style.textShadow = body.classList.contains('light') ?
            //         `0 0 20px hsl(${hue}, 80%, 40%), 0 0 40px hsl(${hue}, 80%, 30%), 0 0 60px hsl(${hue}, 80%, 20%)` :
            //         `0 0 20px hsl(${hue}, 100%, 50%), 0 0 40px hsl(${hue}, 100%, 40%), 0 0 60px hsl(${hue}, 100%, 30%)`;
            //     requestAnimationFrame(animateTitle);
            // }

            // animateTitle();

            // 3D Tilt Effect on Hover
            skillItems.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 15;
                    const rotateY = (centerX - x) / 15;

                    item.style.transform = `
                        rotateY(calc(var(--i) * 45deg))
                        translateZ(clamp(250px, 40vw, 450px))
                        scale(1.3)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                    `;
                });

                item.addEventListener('mouseleave', () => {
                    item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(200px, 35vw, 400px))`;
                });

                // Touch Support
                item.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(250px, 40vw, 450px)) scale(1.3)`;
                });

                item.addEventListener('touchend', () => {
                    item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(200px, 35vw, 400px))`;
                });
            });

            // Scroll Animation for Particles
            let lastScroll = 0;
            const throttleDelay = 100;

            window.addEventListener('scroll', () => {
                const now = Date.now();
                if (now - lastScroll >= throttleDelay) {
                    lastScroll = now;
                    const particles = document.querySelectorAll('.particle');
                    particles.forEach(p => {
                        p.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
                    });
                }
            });

            // Dynamic Resize Handling
            let resizeTimeout;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const particles = document.querySelectorAll('.particle');
                    particles.forEach(particle => {
                        particle.style.left = `${Math.random() * 100}%`;
                        particle.style.top = `${Math.random() * 100}%`;
                    });
                }, 150);
            });

            // Intersection Observer for Lazy Loading
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillsIcons.style.opacity = '1';
                        skillsIcons.style.transform = 'scale(1)';
                    } else {
                        skillsIcons.style.opacity = '0';
                        skillsIcons.style.transform = 'scale(0.95)';
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(document.querySelector('#skills'));

            // Initial Animation Setup
            skillsIcons.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            skillsIcons.style.opacity = '0';
            skillsIcons.style.transform = 'scale(0.95)';
        });// Scoped script for Skills section only
        (function() {
            const skillsSection = document.querySelector('#skills');
            if (!skillsSection) return;

            document.addEventListener('DOMContentLoaded', () => {
               

                // Particle Animation
                const particleContainer = skillsSection.querySelector('.js-anim');
                const particleCount = 50;

                function createParticle() {
                    const particle = document.createElement('div');
                    particle.className = 'particle';
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    particle.style.animationDelay = `${Math.random() * 2.5}s`;
                    particle.style.animationDuration = `${1.5 + Math.random() * 2}s`;
                    const moveX = (Math.random() - 0.5) * 200;
                    const moveY = (Math.random() - 0.5) * 200;
                    particle.style.setProperty('--x', `${moveX}px`);
                    particle.style.setProperty('--y', `${moveY}px`);
                    particleContainer.appendChild(particle);

                    particle.addEventListener('animationend', () => {
                        particle.remove();
                        createParticle();
                    });
                }

                for (let i = 0; i < particleCount; i++) {
                    createParticle();
                }

                // Skills Icons Interaction
                const skillsIcons = skillsSection.querySelector('.skills-icons');
                const skillItems = skillsSection.querySelectorAll('.skills-icons li');

                skillsIcons.addEventListener('mouseenter', () => {
                    skillsIcons.style.animationPlayState = 'paused';
                });

                skillsIcons.addEventListener('mouseleave', () => {
                    skillsIcons.style.animationPlayState = 'running';
                });

                // 3D Tilt Effect
                skillItems.forEach(item => {
                    item.addEventListener('mousemove', (e) => {
                        const rect = item.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = (y - centerY) / 15;
                        const rotateY = (centerX - x) / 15;

                        item.style.transform = `
                            rotateY(calc(var(--i) * 45deg))
                            translateZ(clamp(200px, 35vw, 400px))
                            scale(1.3)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                        `;
                    });

                    item.addEventListener('mouseleave', () => {
                        item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(150px, 30vw, 350px))`;
                    });

                    // Touch Support
                    item.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(200px, 35vw, 400px)) scale(1.3)`;
                    });

                    item.addEventListener('touchend', () => {
                        item.style.transform = `rotateY(calc(var(--i) * 45deg)) translateZ(clamp(150px, 30vw, 350px))`;
                    });
                });

                // // Title Animation
                // const title = skillsSection.querySelector('.glow-bg h1');
                // let hue = 0;

                // function animateTitle() {
                //     hue = (hue + 1) % 360;
                //     title.style.textShadow = skillsSection.classList.contains('light') ?
                //         `0 0 15px hsl(${hue}, 80%, 40%)` :
                //         `0 0 15px hsl(${hue}, 100%, 50%)`;
                //     requestAnimationFrame(animateTitle);
                // }

                // animateTitle();

                // Resize Handling
                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        const particles = skillsSection.querySelectorAll('.particle');
                        particles.forEach(particle => {
                            particle.style.left = `${Math.random() * 100}%`;
                            particle.style.top = `${Math.random() * 100}%`;
                        });
                    }, 150);
                });
            });
        })();
         // Wait for the document to load
    document.addEventListener('DOMContentLoaded', function() {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      }, {
        threshold: 0.5 // Trigger when 50% visible
      });
      timelineItems.forEach(item => observer.observe(item));
    });

    
