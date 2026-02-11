// LearnHub - Main JavaScript File

// User Data Management
let currentUser = null;
const users = JSON.parse(localStorage.getItem('learnhub_users')) || [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadNotesGrid();
    setupScrollListener();
    setupSearchListener();
    checkLoginStatus();
    loadUserSettings();
    loadLibraryCodeInEditor(); // Load code from library if redirected back from code-library.html
});

// ============== CODE LIBRARY FUNCTION ==============
// Opens the code library page when user clicks on "500+ Code Examples" card
function openCodeLibrary() {
    window.location.href = 'code-library.html';
}

// Opens code library with click animation
function openCodeLibraryWithAnimation(event) {
    const card = event.currentTarget;
    card.classList.add('click-pulse');
    
    // Wait for animation to complete before navigating
    setTimeout(() => {
        window.location.href = 'code-library.html';
    }, 200);
}

// Load code from library if redirected back from code-library.html
function loadLibraryCodeInEditor() {
    const libraryCodeData = sessionStorage.getItem('libraryCode');
    
    if (libraryCodeData) {
        try {
            const data = JSON.parse(libraryCodeData);
            const language = data.language;
            const code = data.code;
            const codeName = data.name;

            // Use setTimeout to ensure DOM is ready
            setTimeout(() => {
                // Open the code editor panel
                const codeEditorPanel = document.getElementById('codeEditorPanel');
                if (codeEditorPanel) {
                    codeEditorPanel.classList.add('active');
                    document.body.classList.add('modal-open');
                }

                // Get editor textareas
                const htmlEditor = document.getElementById('htmlEditor');
                const cssEditor = document.getElementById('cssEditor');
                const jsEditor = document.getElementById('jsEditor');

                // Clear all editors first
                if (htmlEditor) htmlEditor.value = '';
                if (cssEditor) cssEditor.value = '';
                if (jsEditor) jsEditor.value = '';

                // Language mapping for display
                const languageNames = {
                    'html': 'HTML',
                    'css': 'CSS',
                    'javascript': 'JavaScript',
                    'java': 'Java',
                    'python': 'Python',
                    'c': 'C',
                    'cpp': 'C++',
                    'csharp': 'C#',
                    'php': 'PHP',
                    'go': 'Go',
                    'rust': 'Rust',
                    'kotlin': 'Kotlin',
                    'swift': 'Swift',
                    'r': 'R',
                    'sql': 'SQL'
                };

                const displayLang = languageNames[language] || language;

                // Populate based on language
                if (language === 'html') {
                    if (htmlEditor) htmlEditor.value = code;
                    // Switch to HTML tab
                    document.querySelectorAll('.editor-tab').forEach(tab => tab.classList.remove('active'));
                    const htmlTab = document.querySelector('[data-lang="html"]');
                    if (htmlTab) htmlTab.classList.add('active');
                    if (htmlEditor && htmlEditor.parentElement) htmlEditor.parentElement.style.display = 'block';
                    if (cssEditor && cssEditor.parentElement) cssEditor.parentElement.style.display = 'none';
                    if (jsEditor && jsEditor.parentElement) jsEditor.parentElement.style.display = 'none';
                } else if (language === 'css') {
                    if (cssEditor) cssEditor.value = code;
                    // Switch to CSS tab
                    document.querySelectorAll('.editor-tab').forEach(tab => tab.classList.remove('active'));
                    const cssTab = document.querySelector('[data-lang="css"]');
                    if (cssTab) cssTab.classList.add('active');
                    if (htmlEditor && htmlEditor.parentElement) htmlEditor.parentElement.style.display = 'none';
                    if (cssEditor && cssEditor.parentElement) cssEditor.parentElement.style.display = 'block';
                    if (jsEditor && jsEditor.parentElement) jsEditor.parentElement.style.display = 'none';
                } else if (language === 'javascript') {
                    if (jsEditor) jsEditor.value = code;
                    // Switch to JS tab
                    document.querySelectorAll('.editor-tab').forEach(tab => tab.classList.remove('active'));
                    const jsTab = document.querySelector('[data-lang="js"]');
                    if (jsTab) jsTab.classList.add('active');
                    if (htmlEditor && htmlEditor.parentElement) htmlEditor.parentElement.style.display = 'none';
                    if (cssEditor && cssEditor.parentElement) cssEditor.parentElement.style.display = 'none';
                    if (jsEditor && jsEditor.parentElement) jsEditor.parentElement.style.display = 'block';
                } else {
                    // For other languages (Java, Python, C, C++, etc.), show code with language annotation
                    const codeDisplay = `=====================================\n📚 ${displayLang} Code - "${codeName}"\n=====================================\n\n${code}\n\n=====================================\n💡 How to Run This ${displayLang} Code:\n\n1. Copy the code above\n2. Use an online compiler or IDE for ${displayLang}:\n   - Java: JDoodle, OnlineJudge, or Replit\n   - Python: Replit, OnlineGDB, or Python.org\n   - C/C++: OnlineGDB, Replit, or Compiler Explorer\n   - C#: Replit, or .NET Fiddle\n   - PHP: Replit, or PHP Sandbox\n   - Go: Replit, or Go Playground\n   - Rust: Replit, or Rust Playground\n   - Kotlin: Replit, or Kotlin Playground\n   - Swift: Replit, or Swift Playground\n   - R: Replit, or RStudio Cloud\n   - SQL: DB Fiddle, or SQLiteOnline\n\n3. Paste the code\n4. Click Run/Execute\n=====================================`;
                    if (jsEditor) jsEditor.value = codeDisplay;
                    document.querySelectorAll('.editor-tab').forEach(tab => tab.classList.remove('active'));
                    const jsTab = document.querySelector('[data-lang="js"]');
                    if (jsTab) jsTab.classList.add('active');
                    if (htmlEditor && htmlEditor.parentElement) htmlEditor.parentElement.style.display = 'none';
                    if (cssEditor && cssEditor.parentElement) cssEditor.parentElement.style.display = 'none';
                    if (jsEditor && jsEditor.parentElement) jsEditor.parentElement.style.display = 'block';
                }

                // Clear the session storage after loading
                sessionStorage.removeItem('libraryCode');

            }, 500);

        } catch (e) {
            console.error('Error loading library code:', e);
            sessionStorage.removeItem('libraryCode');
        }
    }
}


// Companies panel data and functions (Company Interviews & Recruitments)
const companies = [
    {
        name: 'Google',
        openings: 'Software Engineer, Frontend Engineer',
        recruitment: 'Visit careers.google.com or apply via referral. Hiring for SWE, SDE roles across offices.',
        questions: [
            'Explain event loop in JavaScript.',
            'How does prototypal inheritance work?',
            'Design a URL shortener service.'
        ]
    },
    {
        name: 'Amazon',
        openings: 'SDE, SDET, Backend Engineer',
        recruitment: 'Apply through amazon.jobs; look for internship and full-time roles.',
        questions: [
            'Explain CAP theorem.',
            'Describe a time you optimized a slow system.',
            'How to design a scalable notifications system?'
        ]
    },
    {
        name: 'TCS',
        openings: 'Graduate Hiring, Developer Trainee',
        recruitment: 'TCS off-campus and on-campus drives; check TCS NextStep portal.',
        questions: [
            'Explain OOP concepts.',
            'What is the difference between TCP and UDP?',
            'Write a program to reverse a linked list.'
        ]
    }
];

function renderCompaniesList() {
    const list = document.getElementById('companiesList');
    if (!list) return;
    list.innerHTML = companies.map((c, i) => `
        <div class="company-item" onclick="showCompanyDetails(${i})">
            <div class="company-name">${c.name}</div>
            <div class="company-openings">${c.openings}</div>
        </div>
    `).join('');
}

function showCompanyDetails(index) {
    const details = document.getElementById('companyDetails');
    if (!details) return;
    const c = companies[index];
    details.innerHTML = `
        <div class="details-inner">
            <h3>${c.name}</h3>
            <p class="company-openings"><strong>Openings:</strong> ${c.openings}</p>
            <p class="company-recruit"><strong>Recruitment:</strong> ${c.recruitment}</p>
            <h4>Interview Questions</h4>
            <ul class="company-questions">
                ${c.questions.map(q => `<li>${q}</li>`).join('')}
            </ul>
        </div>
    `;
}

function openCompaniesPanel() {
    const modal = document.getElementById('companiesModal');
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeCompaniesPanel() {
    const modal = document.getElementById('companiesModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCompaniesPanel();
});

// Click outside to close
document.addEventListener('click', (e) => {
    const modal = document.getElementById('companiesModal');
    if (!modal) return;
    if (modal.classList.contains('active')) {
        const panel = modal.querySelector('.companies-panel');
        if (panel && !panel.contains(e.target) && !document.getElementById('companiesBtn').contains(e.target)) {
            closeCompaniesPanel();
        }
    }
});

// Render companies list once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderCompaniesList();
    renderResourcesCategories();
});

// ============== Resources Panel (Learning Resources) ==============
 const resources = {
    'Programming Languages': [
        { title: 'C Language', url: 'https://www.geeksforgeeks.org/c-programming-language/', icon: 'fas fa-copyright' },
        { title: 'C++', url: 'https://www.geeksforgeeks.org/c-plus-plus/', icon: 'fas fa-code' },
        { title: 'Java', url: 'https://www.geeksforgeeks.org/java/', icon: 'fab fa-java' },
        { title: 'Python', url: 'https://www.geeksforgeeks.org/python-programming-language/', icon: 'fab fa-python' },
        { title: 'JavaScript', url: 'https://www.geeksforgeeks.org/javascript/', icon: 'fab fa-js-square' },
        { title: 'C# (C Sharp)', url: 'https://www.geeksforgeeks.org/csharp-programming-language/', icon: 'fas fa-hashtag' },
        { title: 'PHP', url: 'https://www.geeksforgeeks.org/php-programming-language/', icon: 'fab fa-php' },
        { title: 'Go (Golang)', url: 'https://www.geeksforgeeks.org/golang/', icon: 'fas fa-rocket' },
        { title: 'Rust', url: 'https://www.geeksforgeeks.org/rust-programming-language/', icon: 'fas fa-cog' },
        { title: 'Kotlin', url: 'https://www.geeksforgeeks.org/kotlin-programming-language/', icon: 'fas fa-mobile-alt' },
        { title: 'Swift', url: 'https://www.geeksforgeeks.org/swift-programming-language/', icon: 'fab fa-apple' },
        { title: 'R Language', url: 'https://www.geeksforgeeks.org/r-programming-language/', icon: 'fas fa-chart-pie' }
    ],
 

    'Core CS Subjects': [
        { title: 'Data Structures & Algorithms', url: 'https://www.geeksforgeeks.org/data-structures/', icon: 'fas fa-sitemap' },
        { title: 'Algorithms', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/', icon: 'fas fa-cogs' },
        { title: 'Operating System (OS)', url: 'https://www.geeksforgeeks.org/operating-systems/', icon: 'fas fa-server' },
        { title: 'Database Management (DBMS)', url: 'https://www.geeksforgeeks.org/dbms/', icon: 'fas fa-database' },
        { title: 'Computer Networks (CN)', url: 'https://www.geeksforgeeks.org/computer-network-tutorials/', icon: 'fas fa-network-wired' },
        { title: 'Software Engineering (SE)', url: 'https://www.geeksforgeeks.org/software-engineering/', icon: 'fas fa-wrench' },
        { title: 'Compiler Design', url: 'https://www.geeksforgeeks.org/compiler-design/', icon: 'fas fa-cog' },
        { title: 'Theory of Computation (TOC)', url: 'https://www.geeksforgeeks.org/theory-of-computation/', icon: 'fas fa-brain' },
        { title: 'Digital Logic (DLD)', url: 'https://www.geeksforgeeks.org/digital-logic-design/', icon: 'fas fa-microchip' }
    ],
    'Web Development': [
        { title: 'HTML', url: 'https://www.geeksforgeeks.org/html/', icon: 'fab fa-html5' },
        { title: 'CSS', url: 'https://www.geeksforgeeks.org/css/', icon: 'fab fa-css3-alt' },
        { title: 'Web Development (Complete)', url: 'https://www.geeksforgeeks.org/web-development/', icon: 'fas fa-globe' }
    ],
    'Advanced Topics': [
        { title: 'Artificial Intelligence (AI)', url: 'https://www.geeksforgeeks.org/artificial-intelligence/', icon: 'fas fa-robot' },
        { title: 'Machine Learning (ML)', url: 'https://www.geeksforgeeks.org/machine-learning/', icon: 'fas fa-chart-line' },
        { title: 'Deep Learning', url: 'https://www.geeksforgeeks.org/deep-learning/', icon: 'fas fa-network-wired' },
        { title: 'Data Science', url: 'https://www.geeksforgeeks.org/data-science/', icon: 'fas fa-chart-bar' },
        { title: 'Cloud Computing', url: 'https://www.geeksforgeeks.org/cloud-computing/', icon: 'fas fa-cloud' },
        { title: 'Cyber Security', url: 'https://www.geeksforgeeks.org/cyber-security/', icon: 'fas fa-shield-alt' }
    ]
};

function renderResourcesCategories() {
    const container = document.getElementById('resourcesCategories');
    if (!container) return;
    
    let html = '';
    for (const [category, links] of Object.entries(resources)) {
        let categoryIcon = 'fas fa-book';
        if (category === 'Programming Languages') categoryIcon = 'fas fa-code';
        if (category === 'Core CS Subjects') categoryIcon = 'fas fa-university';
        if (category === 'Web Development') categoryIcon = 'fas fa-globe';
        if (category === 'Advanced Topics') categoryIcon = 'fas fa-star';
        
        html += `
            <div class="resource-category">
                <h4 class="category-title">
                    <i class="${categoryIcon}"></i> ${category}
                </h4>
                <ul class="category-links">
                    ${links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="resource-link">
                            <i class="${link.icon}"></i>
                            <span>${link.title}</span>
                            <i class="fas fa-external-link-alt" style="margin-left:auto; font-size:12px;"></i>
                        </a>
                    `).join('')}
                </ul>
            </div>
        `;
    }
    container.innerHTML = html;
}

function openResourcesPanel() {
    const modal = document.getElementById('resourcesModal');
    if (!modal) return;
    renderResourcesCategories();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeResourcesPanel() {
    const modal = document.getElementById('resourcesModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

// Close resources modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeResourcesPanel();
        closeCompaniesPanel();
    }
});

// Click outside resources modal to close
document.addEventListener('click', (e) => {
    const modal = document.getElementById('resourcesModal');
    if (!modal) return;
    if (modal.classList.contains('active')) {
        const panel = modal.querySelector('.resources-panel');
        if (panel && !panel.contains(e.target) && !document.getElementById('resourcesBtn').contains(e.target)) {
            closeResourcesPanel();
        }
    }
});

// Check if user is logged in
function checkLoginStatus() {
    const savedUser = localStorage.getItem('learnhub_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        // Ensure bookmarks array exists for existing users
        if (!currentUser.bookmarks) {
            currentUser.bookmarks = [];
            localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        }
        showMainContent();
        updateUserDisplay();
    } else {
        showLoginOverlay();
    }
}

// Show Login Overlay
function showLoginOverlay() {
    document.getElementById('loginOverlay').classList.remove('hidden');
}

// Hide Login Overlay and Show Main Content
function showMainContent() {
    document.getElementById('loginOverlay').classList.add('hidden');
}

// Login Functions
function showSignup() {
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.add("active");
}

function showLogin() {
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
}

// Handle Login Form Submit - Demo Mode: Accepts any email/password
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value || 'user@example.com';
    const password = document.getElementById('loginPassword').value || 'demo123';
    const name = email.split('@')[0];
    
    // Create or get user from localStorage
    let user = users.find(u => u.email === email);
    
    if (!user) {
        // Create new user
        user = {
            name: name.charAt(0).toUpperCase() + name.slice(1),
            email: email,
            password: password,
            topicsCompleted: 0,
            streakDays: 0,
            bookmarks: [],
            darkMode: false,
            animationType: 'fade',
            animationSpeed: 0.5,
            joinedDate: new Date().toISOString()
        };
        users.push(user);
        localStorage.setItem('learnhub_users', JSON.stringify(users));
    }
    
    currentUser = user;
    localStorage.setItem('learnhub_current_user', JSON.stringify(user));
    showMainContent();
    updateUserDisplay();
    showToast('Welcome back, ' + user.name + '! 🎉');
});

// Handle Signup Form Submit
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value || 'User';
    const email = document.getElementById('signupEmail').value || 'user@example.com';
    const password = document.getElementById('signupPassword').value || 'demo123';
    
    // Check if user already exists
    let user = users.find(u => u.email === email);
    
    if (!user) {
        user = {
            name: name,
            email: email,
            password: password,
            topicsCompleted: 0,
            streakDays: 0,
            bookmarks: [],
            darkMode: false,
            animationType: 'fade',
            animationSpeed: 0.5,
            joinedDate: new Date().toISOString()
        };
        users.push(user);
        localStorage.setItem('learnhub_users', JSON.stringify(users));
    }
    
    currentUser = user;
    localStorage.setItem('learnhub_current_user', JSON.stringify(user));
    
    showMainContent();
    updateUserDisplay();
    showToast('Welcome to LearnHub, ' + name + '! 🎓');
});

// Logout Function
function logout() {
    currentUser = null;
    localStorage.removeItem('learnhub_current_user');
    document.getElementById('accountDropdown').classList.remove('active');
    showLoginOverlay();
    showToast('Logged out successfully!');
}

// Update User Display
function updateUserDisplay() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
        document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
        document.getElementById('headerProfileCircle').textContent = currentUser.name.charAt(0).toUpperCase();
        
        // Update stats
        document.getElementById('topicsCompleted').textContent = currentUser.topicsCompleted || 0;
        document.getElementById('streakDays').textContent = currentUser.streakDays || 0;
        
        // Update settings controls
        document.getElementById('darkModeToggle').checked = currentUser.darkMode || false;
        document.getElementById('animationSelect').value = currentUser.animationType || 'fade';
        document.getElementById('animationSpeed').value = currentUser.animationSpeed || 0.5;
        
        // Apply dark mode if enabled
        if (currentUser.darkMode) {
            document.body.classList.add('dark-mode');
        }
        
        // Apply animation settings
        applyAnimationSettings();
    }
}

// Toggle Account Dropdown
function toggleAccountDropdown() {
    const dropdown = document.getElementById('accountDropdown');
    dropdown.classList.toggle('active');
}

// Toggle Bookmarks Popup
function toggleBookmarksPopup() {
    const popup = document.getElementById('bookmarksPopup');
    const overlay = document.getElementById('bookmarksOverlay');
    
    popup.classList.toggle('active');
    overlay.classList.toggle('active');
    
    // Load bookmarks when opening
    if (popup.classList.contains('active')) {
        loadBookmarksPopup();
    }
}

// Load Bookmarks in Popup
function loadBookmarksPopup() {
    const content = document.getElementById('bookmarksPopupContent');
    
    if (!currentUser || !currentUser.bookmarks || currentUser.bookmarks.length === 0) {
        content.innerHTML = `
            <div class="bookmarks-popup-empty">
                <div class="empty-icon"><i class="fas fa-bookmark"></i></div>
                <p>No bookmarks yet!</p>
                <p style="font-size: 12px; margin-top: 10px;">Click the bookmark icon on any topic to save it here.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    currentUser.bookmarks.forEach((bookmark, index) => {
        const subjectData = subjects[bookmark.subject];
        if (subjectData) {
            html += `
                <div class="bookmarks-popup-item" onclick="openBookmark('${bookmark.subject}', '${bookmark.topicId}')">
                    <div class="item-icon">${subjectData.icon}</div>
                    <div class="item-info">
                        <div class="item-title">${bookmark.topicTitle}</div>
                        <div class="item-subject">${subjectData.title}</div>
                    </div>
                    <button class="remove-bookmark-btn" onclick="event.stopPropagation(); removeBookmarkFromPopup(${index})">✕</button>
                </div>
            `;
        }
    });
    
    content.innerHTML = html;
}

// Open Bookmark from Popup
function openBookmark(subjectId, topicId) {
    // Close popup
    toggleBookmarksPopup();
    
    // Select subject and load topic
    selectSubject(subjectId);
    
    // Find and load the specific topic
    setTimeout(() => {
        loadTopic(subjectId, topicId);
    }, 100);
    
    showToast('Opening bookmark...');
}

// Remove Bookmark from Popup
function removeBookmarkFromPopup(index) {
    if (currentUser && currentUser.bookmarks) {
        currentUser.bookmarks.splice(index, 1);
        localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        
        // Update in users array
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].bookmarks = currentUser.bookmarks;
            localStorage.setItem('learnhub_users', JSON.stringify(users));
        }
        
        // Reload bookmarks display
        loadBookmarksPopup();
        loadBookmarks(); // Also update dropdown bookmarks
        showToast('Bookmark removed!');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('accountDropdown');
    const profile = document.querySelector('.user-profile');
    if (!dropdown.contains(e.target) && !profile.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

// Dark Mode Toggle
function toggleDarkMode() {
    const isDarkMode = document.getElementById('darkModeToggle').checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    if (currentUser) {
        currentUser.darkMode = isDarkMode;
        localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        
        // Update user in users array
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].darkMode = isDarkMode;
            localStorage.setItem('learnhub_users', JSON.stringify(users));
        }
    }
}

// Animation Type Change
function changeAnimation() {
    const animationType = document.getElementById('animationSelect').value;
    
    // Remove all animation classes
    document.body.classList.remove('animation-fade', 'animation-slide', 'animation-pop', 'animation-none');
    
    // Add selected animation class
    document.body.classList.add('animation-' + animationType);
    
    if (currentUser) {
        currentUser.animationType = animationType;
        localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].animationType = animationType;
            localStorage.setItem('learnhub_users', JSON.stringify(users));
        }
    }
}

// Animation Speed Change
function changeAnimationSpeed() {
    const speed = document.getElementById('animationSpeed').value;
    document.documentElement.style.setProperty('--animation-speed', speed + 's');
    
    if (currentUser) {
        currentUser.animationSpeed = speed;
        localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].animationSpeed = speed;
            localStorage.setItem('learnhub_users', JSON.stringify(users));
        }
    }
}

// Apply Animation Settings
function applyAnimationSettings() {
    if (currentUser && currentUser.animationType) {
        document.body.classList.remove('animation-fade', 'animation-slide', 'animation-pop', 'animation-none');
        document.body.classList.add('animation-' + currentUser.animationType);
    }
    
    if (currentUser && currentUser.animationSpeed) {
        document.documentElement.style.setProperty('--animation-speed', currentUser.animationSpeed + 's');
    }
}

// Load User Settings
function loadUserSettings() {
    const savedSettings = localStorage.getItem('learnhub_settings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        if (settings.darkMode) {
            document.body.classList.add('dark-mode');
            document.getElementById('darkModeToggle').checked = true;
        }
    }
}

// Update Progress
function updateProgress(type) {
    if (currentUser) {
        if (type === 'topic') {
            currentUser.topicsCompleted = (currentUser.topicsCompleted || 0) + 1;
            document.getElementById('topicsCompleted').textContent = currentUser.topicsCompleted;
        }
        
        localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
        
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            if (type === 'topic') {
                users[userIndex].topicsCompleted = currentUser.topicsCompleted;
            }
            localStorage.setItem('learnhub_users', JSON.stringify(users));
        }
    }
}

// Data structures for topics and content
const subjects = {
    html: {
        title: "HTML ",
        icon: "<i class='fab fa-html5' style='color: #e34f26;'></i>",
        topics: [
            { id: "introduction", title: "HTML Introduction", type: "basics", code: "<!DOCTYPE html>\n<html>\n<head>\n    <title>My First Page</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my first HTML page.</p>\n</body>\n</html>", content: "<h3>What is HTML?</h3>\n<p><strong>HTML (HyperText Markup Language)</strong> is the standard markup language used to create web pages. It provides the basic structure of websites and is essential for web development. HTML describes the structure of a web page using a system of markup elements and tags.</p>\n\n<p>Think of HTML as the skeleton of a website. Just like how our bones give structure to our body, HTML gives structure to web pages. It tells the browser what to display and how to display it.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">HTML Document Structure</div>\n    <div class=\"diagram-box\" style=\"background: #e34f26; color: white;\">&lt;DOCTYPE html&gt;</div>\n    <div class=\"diagram-box\" style=\"background: #1572b6; color: white;\">&lt;html&gt;</div>\n    <div style=\"display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 10px;\">\n        <div class=\"diagram-box\" style=\"background: #4caf50; color: white;\">&lt;head&gt;</div>\n        <div class=\"diagram-box\" style=\"background: #ff9800; color: white;\">&lt;body&gt;</div>\n    </div>\n</div>\n\n<h3>Key Features of HTML:</h3>\n<ul>\n    <li><strong>HyperText:</strong> HTML allows you to create links that connect pages to other pages, enabling users to navigate between websites easily.</li>\n    <li><strong>Markup Language:</strong> HTML uses tags to mark up content. These tags define how content should be displayed in the browser.</li>\n    <li><strong>Platform Independent:</strong> HTML works on all operating systems and browsers. You can create HTML files on Windows, Mac, or Linux.</li>\n    <li><strong>Case Insensitive:</strong> HTML tags are not case-sensitive, though lowercase is recommended for modern standards.</li>\n    <li><strong>Extensible:</strong> HTML can be combined with other technologies like CSS for styling and JavaScript for interactivity.</li>\n</ul>\n\n<h3>Why Learn HTML?</h3>\n<p>HTML is the foundation of web development. Every website you visit is built using HTML. Whether you want to become a frontend developer, backend developer, or full-stack developer, HTML is your first step. It is relatively easy to learn and provides immediate visual feedback as you practice.</p>\n\n<h3>How HTML Works:</h3>\n<p>When you open an HTML file in a web browser, the browser reads the HTML code and renders it as a visible web page. The browser does not display the HTML tags themselves but uses them to determine how to display the content.</p>" },
            { id: "headings", title: "HTML Headings", type: "basics", code: "<h1>This is Heading 1</h1>\n<h2>This is Heading 2</h2>\n<h3>This is Heading 3</h3>\n<h4>This is Heading 4</h4>\n<h5>This is Heading 5</h5>\n<h6>This is Heading 6</h6>", content: "<h3>HTML Headings Explained</h3>\n<p><strong>HTML headings</strong> are one of the most important elements on a webpage. They define the hierarchy and structure of your content. Headings range from <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, where <code>&lt;h1&gt;</code> is the most important heading and <code>&lt;h6&gt;</code> is the least important.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Heading Size Comparison</div>\n    <div style=\"text-align: left; padding: 10px;\">\n        <h1 style=\"margin: 5px 0; color: #e34f26;\">Heading 1 - Largest (32px)</h1>\n        <h2 style=\"margin: 5px 0; color: #1572b6;\">Heading 2 - Large (24px)</h2>\n        <h3 style=\"margin: 5px 0; color: #4caf50;\">Heading 3 - Medium (18.72px)</h3>\n        <h4 style=\"margin: 5px 0; color: #ff9800;\">Heading 4 - Medium (16px)</h4>\n        <h5 style=\"margin: 5px 0; color: #9c27b0;\">Heading 5 - Small (13.28px)</h5>\n        <h6 style=\"margin: 5px 0; color: #607d8b;\">Heading 6 - Smallest (10.72px)</h6>\n    </div>\n</div>\n\n<h3>Best Practices for Headings:</h3>\n<ul>\n    <li><strong>Use Only One H1 Per Page:</strong> The <code>&lt;h1&gt;</code> tag should be the main title of your page content. Search engines expect only one main heading.</li>\n    <li><strong>Maintain Hierarchical Order:</strong> Don't skip heading levels. Use H1 followed by H2, then H3, etc. This creates a logical structure.</li>\n    <li><strong>Be Descriptive:</strong> Headings should clearly describe the content that follows. Avoid vague titles like \"Section 1.\"</li>\n    <li><strong>Keep Headings Concise:</strong> Aim for short, meaningful headings that give users and search engines a clear idea of the content.</li>\n    <li><strong>Use Headings for SEO:</strong> Search engines use headings to understand your content structure. Include relevant keywords naturally.</li>\n</ul>\n\n<h3>Common Mistakes to Avoid:</h3>\n<ul>\n    <li>Using headings just to make text bigger (use CSS for that instead)</li>\n    <li>Skipping from H1 to H3 without using H2</li>\n    <li>Using too many headings that fragment the content</li>\n    <li>Making headings too long and cumbersome</li>\n</ul>" },
            { id: "paragraphs", title: "HTML Paragraphs", type: "basics", code: "<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>\n\n<p>\n    This paragraph\n    has multiple lines\n    but the browser will ignore it.\n</p>", content: "<h3>HTML Paragraphs Explained</h3>\n<p>The <strong><code>&lt;p&gt;</code> element</strong> is used to define paragraphs in HTML. It is one of the most commonly used HTML elements for structuring text content on web pages. Browsers automatically add a blank line before and after each paragraph.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">How Paragraphs Appear</div>\n    <div style=\"background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: left; color: #333; font-family: Arial, sans-serif;\">\n        <p style=\"margin: 0 0 15px 0; color: #333; font-size: 16px; line-height: 1.6;\">This is the first paragraph. The browser automatically adds space before and after this paragraph.</p>\n        <p style=\"margin: 0 0 15px 0; color: #333; font-size: 16px; line-height: 1.6;\">This is the second paragraph. Notice the blank line between the two paragraphs? That's the browser's default paragraph spacing.</p>\n        <p style=\"margin: 0; color: #333; font-size: 16px; line-height: 1.6;\">This third paragraph demonstrates that multiple spaces and line breaks in your HTML code are ignored by the browser.</p>\n    </div>\n</div>\n\n<h3>Important Notes About Paragraphs:</h3>\n<ul>\n    <li><strong>Whitespace Handling:</strong> HTML ignores extra spaces, tabs, and line breaks. Use <code>&lt;br&gt;</code> for line breaks within a paragraph.</li>\n    <li><strong>Block-Level Element:</strong> <code>&lt;p&gt;</code> is a block-level element, meaning it takes up the full width available and creates a new line before and after.</li>\n    <li><strong>Semantic Meaning:</strong> Using <code>&lt;p&gt;</code> tells the browser and search engines that this content is a paragraph.</li>\n    <li><strong>Nesting:</strong> You cannot nest paragraphs inside other paragraphs. Inline elements like <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, or <code>&lt;strong&gt;</code> can go inside paragraphs.</li>\n</ul>\n\n<h3>Related Elements:</h3>\n<ul>\n    <li><strong><code>&lt;br&gt;</code></strong> - Creates a single line break within a paragraph</li>\n    <li><strong><code>&lt;pre&gt;</code></strong> - Preserves whitespace and line breaks (preformatted text)</li>\n    <li><strong><code>&lt;hr&gt;</code></strong> - Creates a horizontal rule (thematic break) between paragraphs</li>\n</ul>" },
            { id: "links", title: "HTML Links", type: "basics", code: '<a href="https://www.google.com">Visit Google</a>\n\n<a href="about.html">About Page</a>\n\n<a href="mailto:info@example.com">Send Email</a>', content: "<h3>HTML Links (Anchor Tags) Explained</h3>\n<p>Links are the foundation of the World Wide Web. The <strong><code>&lt;a&gt;</code> (anchor) element</strong> creates hyperlinks that connect web pages to each other. Without links, the web would not be connected!</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Anatomy of an HTML Link</div>\n    <div style=\"background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: left; font-family: monospace; font-size: 14px; overflow-x: auto;\">\n        <span style=\"color: #e34f26;\">&lt;a</span> <span style=\"color: #1572b6;\">href</span>=<span style=\"color: #0d6efd;\">\"https://www.example.com\"</span> <span style=\"color: #1572b6;\">target</span>=<span style=\"0d6efd;\">\"_blank\"</span> <span style=\"color: #1572b6;\">title</span>=<span style=\"color: #0d6efd;\">\"Visit Example\"</span><span style=\"color: #e34f26;\">&gt;</span>Click Here<span style=\"color: #e34f26;\">&lt;/a&gt;</span>\n    </div>\n    <div style=\"display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px; text-align: left; font-size: 13px; color: #666;\">\n        <div style=\"background: #e3f2fd; padding: 10px; border-radius: 5px; flex: 1; min-width: 150px;\"><strong style=\"color: #1572b6;\">&lt;a&gt;</strong><br>Opening Tag</div>\n        <div style=\"background: #e8f5e9; padding: 10px; border-radius: 5px; flex: 1; min-width: 150px;\"><strong style=\"color: #4caf50;\">href</strong><br>Attribute: URL</div>\n        <div style=\"background: #fff3e0; padding: 10px; border-radius: 5px; flex: 1; min-width: 150px;\"><strong style=\"color: #ff9800;\">Visible Text</strong><br>Clickable Text</div>\n        <div style=\"background: #fce4ec; padding: 10px; border-radius: 5px; flex: 1; min-width: 150px;\"><strong style=\"color: #e91e63;\">&lt;/a&gt;</strong><br>Closing Tag</div>\n    </div>\n</div>\n\n<h3>Link Attributes:</h3>\n<ul>\n    <li><strong><code>href</code></strong> - Specifies the URL of the page the link goes to. This is the most important attribute.</li>\n    <li><strong><code>target</code></strong> - Specifies where to open the linked document:\n        <ul>\n            <li><code>_blank</code> - Opens in a new tab or window</li>\n            <li><code>_self</code> - Opens in the same tab (default)</li>\n            <li><code>_parent</code> - Opens in the parent frame</li>\n            <li><code>_top</code> - Opens in the full body of the window</li>\n        </ul>\n    </li>\n    <li><strong><code>title</code></strong> - Provides additional information (shown as a tooltip on hover)</li>\n    <li><strong><code>rel</code></strong> - Specifies the relationship between the current page and the linked page</li>\n</ul>" },
            { id: "images", title: "HTML Images", type: "basics", code: '<img src="image.jpg" alt="Description" width="500" height="300">\n\n<img src="https://example.com/logo.png" alt="Logo">', content: "<h3>HTML Images Explained</h3>\n<p>Images make web pages visually appealing and engaging. The <strong><code>&lt;img&gt;</code> element</strong> is used to embed images in HTML pages. It is a <strong>self-closing (void) element</strong>, meaning it does not have a closing tag.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Image Tag Structure</div>\n    <div style=\"background: #f5f5f5; padding: 15px; border-radius: 8px; text-align: left; font-family: monospace; font-size: 14px; overflow-x: auto; white-space: nowrap;\">\n        <span style=\"color: #e34f26;\">&lt;img</span> <span style=\"color: #1572b6;\">src</span>=<span style=\"color: #0d6efd;\">\"image.jpg\"</span> <span style=\"color: #1572b6;\">alt</span>=<span style=\"color: #0d6efd;\">\"Description\"</span> <span style=\"color: #1572b6;\">width</span>=<span style=\"color: #0d6efd;\">\"500\"</span> <span style=\"color: #1572b6;\">height</span>=<span style=\"color: #0d6efd;\">\"300\"</span><span style=\"color: #e34f26;\">/&gt;</span>\n    </div>\n    <div style=\"display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 15px; font-size: 13px; color: #666;\">\n        <div style=\"background: #e3f2fd; padding: 10px 15px; border-radius: 5px;\"><span style=\"color: #e34f26; font-weight: bold;\">&lt;img&gt;</span><br>Image Element</div>\n        <div style=\"background: #e8f5e9; padding: 10px 15px; border-radius: 5px;\"><span style=\"color: #4caf50; font-weight: bold;\">src</span><br>Image Path</div>\n        <div style=\"background: #fff3e0; padding: 10px 15px; border-radius: 5px;\"><span style=\"color: #ff9800; font-weight: bold;\">alt</span><br>Alt Text</div>\n        <div style=\"background: #fce4ec; padding: 10px 15px; border-radius: 5px;\"><span style=\"color: #e91e63; font-weight: bold;\">width/height</span><br>Dimensions</div>\n    </div>\n</div>\n\n<h3>Important Image Attributes:</h3>\n<ul>\n    <li><strong><code>src</code></strong> (Required) - Specifies the path or URL to the image file. This can be a relative path (images/pic.jpg) or an absolute URL (https://example.com/image.jpg).</li>\n    <li><strong><code>alt</code></strong> (Required for accessibility) - Provides alternative text that describes the image. This is crucial for screen readers and when the image fails to load.</li>\n    <li><strong><code>width</code> and <code>height</code></strong> - Specify the dimensions of the image in pixels. Using both helps prevent layout shifts while the image loads.</li>\n    <li><strong><code>loading</code></strong> - Can be set to \"lazy\" to defer loading images until they are about to scroll into view.</li>\n</ul>" },
            { id: "lists", title: "HTML Lists", type: "basics", code: "<!-- Unordered List -->\n<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n</ul>\n\n<!-- Ordered List -->\n<ol>\n    <li>First item</li>\n    <li>Second item</li>\n    <li>Third item</li>\n</ol>", content: "<h3>HTML Lists Explained</h3>\n<p>Lists are essential for organizing content on web pages. HTML provides three types of lists to structure information effectively.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Types of HTML Lists</div>\n    <div style=\"display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 15px;\">\n        <div style=\"background: #e3f2fd; padding: 20px; border-radius: 10px; flex: 1; min-width: 200px; text-align: left;\">\n            <h4 style=\"color: #1572b6; margin-top: 0;\">Unordered List (&lt;ul&gt;)</h4>\n            <ul style=\"margin: 10px 0; padding-left: 20px;\">\n                <li>Bullet points</li>\n                <li>No specific order</li>\n                <li>Default: filled circles</li>\n            </ul>\n        </div>\n        <div style=\"background: #e8f5e9; padding: 20px; border-radius: 10px; flex: 1; min-width: 200px; text-align: left;\">\n            <h4 style=\"color: #4caf50; margin-top: 0;\">Ordered List (&lt;ol&gt;)</h4>\n            <ol style=\"margin: 10px 0; padding-left: 20px;\">\n                <li>Numbered items</li>\n                <li>Sequential order</li>\n                <li>Can use: 1, A, a, I, i</li>\n            </ol>\n        </div>\n        <div style=\"background: #fff3e0; padding: 20px; border-radius: 10px; flex: 1; min-width: 200px; text-align: left;\">\n            <h4 style=\"color: #ff9800; margin-top: 0;\">Description List (&lt;dl&gt;)</h4>\n            <dl style=\"margin: 10px 0; padding-left: 20px;\">\n                <dt><strong>Term</strong></dt>\n                <dd>Description</dd>\n            </dl>\n        </div>\n    </div>\n</div>\n\n<h3>List Types in Detail:</h3>\n<ul>\n    <li><strong><code>&lt;ul&gt;</strong> - Unordered (Bulleted) List:** Used when the order of items doesn't matter. Common uses: navigation menus, feature lists, ingredients.</li>\n    <li><strong><code>&lt;ol&gt;</strong> - Ordered (Numbered) List:** Used when items need to be in a specific order. You can use numbers (1, 2, 3), letters (A, B, C), or Roman numerals (I, II, III).</li>\n    <li><strong><code>&lt;dl&gt;</strong> - Description List:** Used for terms and their definitions. Contains <code>&lt;dt&gt;</code> for terms and <code>&lt;dd&gt;</code> for descriptions.</li>\n    <li><strong><code>&lt;li&gt;</strong> - List Item:** Used inside <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> to define each item in the list.</li>\n</ul>" },
            { id: "forms", title: "HTML Forms", type: "advanced", code: '<form action="/submit" method="POST">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email">\n    \n    <button type="submit">Submit</button>\n</form>', content: "<h3>HTML Forms Explained</h3>\n<p>Forms are essential for collecting user data on websites. The <strong><code>&lt;form&gt;</code> element</strong> creates a container for various input controls that allow users to submit data to a server.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Form Input Types</div>\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px;\">\n        <div style=\"background: #e3f2fd; padding: 15px; border-radius: 8px; text-align: center;\"><code>text</code><br><small>Single line text</small></div>\n        <div style=\"background: #e8f5e9; padding: 15px; border-radius: 8px; text-align: center;\"><code>email</code><br><small>Email address</small></div>\n        <div style=\"background: #fff3e0; padding: 15px; border-radius: 8px; text-align: center;\"><code>password</code><br><small>Hidden text</small></div>\n        <div style=\"background: #fce4ec; padding: 15px; border-radius: 8px; text-align: center;\"><code>checkbox</code><br><small>Check boxes</small></div>\n        <div style=\"background: #f3e5f5; padding: 15px; border-radius: 8px; text-align: center;\"><code>radio</code><br><small>Radio buttons</small></div>\n        <div style=\"background: #e0f2f1; padding: 15px; border-radius: 8px; text-align: center;\"><code>submit</code><br><small>Submit button</small></div>\n    </div>\n</div>\n\n<h3>Form Elements:</h3>\n<ul>\n    <li><strong><code>&lt;form&gt;</code></strong> - Container for all form elements. Key attributes: <code>action</code> (URL to send data) and <code>method</code> (GET or POST).</li>\n    <li><strong><code>&lt;input&gt;</code></strong> - Most versatile form element. <code>type</code> attribute can be: text, email, password, checkbox, radio, number, date, etc.</li>\n    <li><strong><code>&lt;label&gt;</code></strong> - Labels for form elements. Use <code>for</code> attribute matching input <code>id</code> for accessibility.</li>\n    <li><strong><code>&lt;select&gt;</code></strong> - Dropdown list with <code>&lt;option&gt;</code> elements inside.</li>\n    <li><strong><code>&lt;textarea&gt;</code></strong> - Multi-line text input. Attributes: <code>rows</code> and <code>cols</code> for size.</li>\n    <li><strong><code>&lt;button&gt;</code></strong> - Clickable button. Types: submit, reset, button.</li>\n</ul>" },
            { id: "tables", title: "HTML Tables", type: "advanced", code: '<table border="1">\n    <tr>\n        <th>Name</th>\n        <th>Age</th>\n    </tr>\n    <tr>\n        <td>John</td>\n        <td>25</td>\n    </tr>\n    <tr>\n        <td>Jane</td>\n        <td>30</td>\n    </tr>\n</table>', content: "<h3>HTML Tables Explained</h3>\n<p>Tables are used to display tabular data in a structured format. The <strong><code>&lt;table&gt;</code> element</strong> creates the table container with rows and cells.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Table Structure</div>\n    <div style=\"overflow-x: auto;\">\n        <table style=\"width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px;\">\n            <tr style=\"background: #e34f26; color: white;\">\n                <th style=\"padding: 12px; border: 1px solid #ddd;\">&lt;table&gt;<br>Table</th>\n                <th style=\"padding: 12px; border: 1px solid #ddd;\">&lt;tr&gt;<br>Row</th>\n                <th style=\"padding: 12px; border: 1px solid #ddd;\">&lt;th&gt;<br>Header Cell</th>\n                <th style=\"padding: 12px; border: 1px solid #ddd;\">&lt;td&gt;<br>Data Cell</th>\n            </tr>\n            <tr style=\"background: #f9f9f9;\">\n                <td style=\"padding: 10px; border: 1px solid #ddd; text-align: center;\">Container</td>\n                <td style=\"padding: 10px; border: 1px solid #ddd; text-align: center;\">Row</td>\n                <td style=\"padding: 10px; border: 1px solid #ddd; text-align: center;\">Header</td>\n                <td style=\"padding: 10px; border: 1px solid #ddd; text-align: center;\">Content</td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<h3>Table Elements:</h3>\n<ul>\n    <li><strong><code>&lt;table&gt;</code></strong> - Creates the table container.</li>\n    <li><strong><code>&lt;tr&gt;</code></strong> - Table Row. Each row contains cells.</li>\n    <li><strong><code>&lt;th&gt;</code></strong> - Table Header Cell. Usually in the first row. Displayed in bold.</li>\n    <li><strong><code>&lt;td&gt;</code></strong> - Table Data Cell. Contains the actual data.</li>\n    <li><strong><code>&lt;thead&gt;</code></strong> - Groups header content.</li>\n    <li><strong><code>&lt;tbody&gt;</code></strong> - Groups body content (recommended for accessibility).</li>\n    <li><strong><code>&lt;tfoot&gt;</code></strong> - Groups footer content.</li>\n</ul>" },
            { id: "semantic", title: "Semantic HTML", type: "advanced", code: "<header>\n    <nav>...</nav>\n</header>\n\n<main>\n    <article>\n        <section>...</section>\n    </article>\n    <aside>...</aside>\n</main>\n\n<footer>...</footer>", content: "<h3>Semantic HTML Explained</h3>\n<p><strong>Semantic HTML</strong> uses elements that clearly describe their meaning to both the browser and the developer. This improves code readability, accessibility, and SEO.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Semantic Page Layout</div>\n    <div style=\"display: flex; flex-direction: column; gap: 10px; margin-top: 15px;\">\n        <div style=\"background: #e34f26; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold;\">&lt;header&gt; - Page Header</div>\n        <div style=\"display: flex; gap: 10px; flex-wrap: wrap;\">\n            <div style=\"background: #1572b6; color: white; padding: 10px; border-radius: 5px; flex: 1; text-align: center; min-width: 150px;\">&lt;nav&gt; - Navigation</div>\n        </div>\n        <div style=\"display: flex; gap: 10px; flex-wrap: wrap;\">\n            <div style=\"background: #4caf50; color: white; padding: 10px; border-radius: 5px; flex: 3; text-align: center; min-width: 200px;\">&lt;main&gt; - Main Content\n                <div style=\"background: #4caf50; opacity: 0.7; margin-top: 5px; padding: 5px; border-radius: 3px; font-size: 13px;\">&lt;article&gt; - Independent Content</div>\n                <div style=\"background: #4caf50; opacity: 0.7; margin-top: 5px; padding: 5px; border-radius: 3px; font-size: 13px;\">&lt;section&gt; - Thematic Grouping</div>\n            </div>\n            <div style=\"background: #ff9800; color: white; padding: 10px; border-radius: 5px; flex: 1; min-width: 120px;\">&lt;aside&gt; - Sidebar</div>\n        </div>\n        <div style=\"background: #9c27b0; color: white; padding: 10px; border-radius: 5px; text-align: center; font-weight: bold;\">&lt;footer&gt; - Page Footer</div>\n    </div>\n</div>\n\n<h3>Semantic Elements:</h3>\n<ul>\n    <li><strong><code>&lt;header&gt;</code></strong> - Header content (logo, navigation, headings)</li>\n    <li><strong><code>&lt;nav&gt;</code></strong> - Navigation links (menus, tables of contents)</li>\n    <li><strong><code>&lt;main&gt;</code></strong> - Main content (unique to the page)</li>\n    <li><strong><code>&lt;article&gt;</code></self-contained, independently distributable</li>\n    <li><strong><code>&lt;section&gt;</code></strong> - Thematic grouping of content</li>\n    <li><strong><code>&lt;aside&gt;</code></strong> - Sidebar content (tangentially related)</li>\n    <li><strong><code>&lt;footer&gt;</code></strong> - Footer content (copyright, contact info)</li>\n    <li><strong><code>&lt;figure&gt;</code></strong> - Self-contained content (images, diagrams)</li>\n    <li><strong><code>&lt;figcaption&gt;</code></strong> - Caption for figure</li>\n</ul>" },
            { id: "meta", title: "HTML Meta Tags", type: "advanced", code: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="Description of page">\n<meta name="keywords" content="HTML, CSS, JavaScript">\n<meta name="author" content="Author Name">', content: "<h3>HTML Meta Tags Explained</h3>\n<p><strong>Meta tags</strong> provide metadata (information about data) about your HTML document. They are placed in the <code>&lt;head&gt;</code> section and are not visible on the page but are crucial for SEO and browser functionality.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Common Meta Tags</div>\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax: 150px, 1fr)); gap: 15px; margin-top: 15px;\">\n        <div style=\"background: #e3f2fd; padding: 15px; border-radius: 8px;\">\n            <strong style=\"color: #1572b6;\">charset</strong>\n            <p style=\"margin: 5px 0 0 0; font-size: 13px; color: #666;\">Character encoding<br><code>UTF-8</code></p>\n        </div>\n        <div style=\"background: #e8f5e9; padding: 15px; border-radius: 8px;\">\n            <strong style=\"color: #4caf50;\">viewport</strong>\n            <p style=\"margin: 5px 0 0 0; font-size: 13px; color: #666;\">Responsive settings<br><code>width=device-width</code></p>\n        </div>\n        <div style=\"background: #fff3e0; padding: 15px; border-radius: 8px;\">\n            <strong style=\"color: #ff9800;\">description</strong>\n            <p style=\"margin: 5px 0 0 0; font-size: 13px; color: #666;\">SEO description<br><code>150-160 chars</code></p>\n        </div>\n        <div style=\"background: #fce4ec; padding: 15px; border-radius: 8px;\">\n            <strong style=\"color: #e91e63;\">keywords</strong>\n            <p style=\"margin: 5px 0 0 0; font-size: 13px; color: #666;\">Search keywords<br><code>comma separated</code></p>\n        </div>\n    </div>\n</div>\n\n<h3>Important Meta Tags:</h3>\n<ul>\n    <li><strong><code>&lt;meta charset=\"UTF-8\"&gt;</code></strong> - Specifies the character encoding. UTF-8 is the universal standard.</li>\n    <li><strong><code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code></strong> - Essential for responsive design on mobile devices.</li>\n    <li><strong><code>&lt;meta name=\"description\" content=\"...\"&gt;</code></strong> - Brief description of your page (150-160 characters). Shown in search results.</li>\n    <li><strong><code>&lt;meta name=\"keywords\" content=\"...\"&gt;</code></strong> - Comma-separated keywords (less important for modern SEO).</li>\n    <li><strong><code>&lt;meta name=\"author\" content=\"...\"&gt;</code></strong> - Author of the document.</li>\n    <li><strong><code>&lt;meta http-equiv=\"refresh\" content=\"30\"&gt;</code></strong> - Refreshes the page every 30 seconds.</li>\n</ul>" },
            { id: "html5", title: "HTML5 New Features", type: "advanced", code: "<!-- New Input Types -->\n<input type=\"email\">\n<input type=\"date\">\n<input type=\"range\">\n<input type=\"color\">\n\n<!-- New Elements -->\n<video src=\"video.mp4\" controls></video>\n<audio src=\"audio.mp3\" controls></audio>\n<canvas></canvas>\n<svg></svg>", content: "<h3>HTML5 New Features Explained</h3>\n<p><strong>HTML5</strong> introduced many powerful features that revolutionized web development. These additions made it easier to create modern, interactive websites without relying heavily on plugins.</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">HTML5 New Elements & APIs</div>\n    <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-top: 15px; font-size: 13px;\">\n        <div style=\"background: #e3f2fd; padding: 12px; border-radius: 8px; text-align: center;\">📝 <strong>Forms</strong><br>New input types</div>\n        <div style=\"background: #e8f5e9; padding: 12px; border-radius: 8px; text-align: center;\">🎥 <strong>Video</strong><br>Native playback</div>\n        <div style=\"background: #fff3e0; padding: 12px; border-radius: 8px; text-align: center;\">🎵 <strong>Audio</strong><br>Sound playback</div>\n        <div style=\"background: #fce4ec; padding: 12px; border-radius: 8px; text-align: center;\">🎨 <strong>Canvas</strong><br>2D drawing</div>\n        <div style=\"background: #f3e5f5; padding: 12px; border-radius: 8px; text-align: center;\">📍 <strong>Geolocation</strong><br>User location</div>\n        <div style=\"background: #e0f2f1; padding: 12px; border-radius: 8px; text-align: center;\">💾 <strong>Storage</strong><br>Local data</div>\n    </div>\n</div>\n\n<h3>New Input Types:</h3>\n<ul>\n    <li><code>email</code> - Validates email format</li>\n    <li><code>url</code> - Validates URL format</li>\n    <li><code>tel</code> - Phone number input</li>\n    <li><code>date</code>, <code>time</code> - Date and time pickers</li>\n    <li><code>number</code>, <code>range</code> - Number and range sliders</li>\n    <li><code>color</code> - Color picker</li>\n    <li><code>search</code> - Search input with clear button</li>\n</ul>\n\n<h3>New Semantic Elements:</h3>\n<ul>\n    <li><code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;figcaption&gt;</code></li>\n    <li><code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code></li>\n    <li><code>&lt;mark&gt;</code> - Highlighted text</li>\n    <li><code>&lt;time&gt;</code> - Machine-readable time</li>\n    <li><code>&lt;progress&gt;</code> - Progress bar</li>\n    <li><code>&lt;meter&gt;</code> - Scalar measurement</li>\n</ul>" },
            { id: "practice1", title: "HTML Practice Exercise", type: "practice", code: "<!-- Create a simple webpage with:\n1. A heading with your name\n2. A paragraph about yourself\n3. An image (use placeholder)\n4. A link to your favorite website -->\n\n<h1>My Name</h1>\n<p>Write about yourself here...</p>\n<img src=\"https://via.placeholder.com/300\" alt=\"My Photo\">\n<a href=\"https://www.google.com\">Click Here</a>", content: "<h3>Practice Exercise: Build Your Personal Webpage</h3>\n<p>This exercise will help you apply what you've learned about HTML basics. Create a simple personal webpage that includes:</p>\n\n<div class=\"diagram\">\n    <div class=\"diagram-title\">Your Personal Webpage Structure</div>\n    <div style=\"background: #f5f5f5; padding: 20px; border-radius: 8px; text-align: left; font-family: Arial, sans-serif;\">\n        <div style=\"background: #e34f26; color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; font-size: 18px; text-align: center; font-weight: bold;\">Your Name (&lt;h1&gt;)</div>\n        <div style=\"background: #4caf50; color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; font-size: 14px; text-align: center;\">A paragraph about yourself (&lt;p&gt;)</div>\n        <div style=\"background: #2196f3; color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; text-align: center;\">\n            <div style=\"width: 80px; height: 60px; background: #ddd; margin: 0 auto; border-radius: 3px; display: flex; align-items: center; justify-content: center; color: #333; font-size: 12px;\">Image</div>\n            <div style=\"margin-top: 5px; font-size: 12px;\">Your Photo (&lt;img&gt;)</div>\n        </div>\n        <div style=\"background: #9c27b0; color: white; padding: 10px; border-radius: 5px; text-align: center; font-size: 14px;\">Link to your favorite website (&lt;a&gt;)</div>\n    </div>\n</div>\n\n<h3>Step-by-Step Instructions:</h3>\n<ol>\n    <li><strong>Create an H1 heading:</strong> Write your name using <code>&lt;h1&gt;Your Name&lt;/h1&gt;</code></li>\n    <li><strong>Add a paragraph:</strong> Write 2-3 sentences about yourself using <code>&lt;p&gt;</code> tags</li>\n    <li><strong>Insert an image:</strong> Use <code>&lt;img src=\"https://via.placeholder.com/300\" alt=\"Your Photo\"&gt;</code></li>\n    <li><strong>Add a link:</strong> Link to your favorite website using <code>&lt;a href=\"URL\"&gt;Link Text&lt;/a&gt;</code></li>\n</ol>\n\n<h3>Bonus Challenges:</h3>\n<ul>\n    <li>Add more headings and paragraphs to expand your page</li>\n    <li>Create an unordered list of your hobbies</li>\n    <li>Add a table with your favorite movies or books</li>\n    <li>Include a navigation menu with links to different sections</li>\n</ul>\n\n<p><strong>Remember:</strong> Use proper indentation to make your code readable. Always close your tags properly. Use descriptive alt text for images.</p>" }
        ]
    },
    css: {
        title: "CSS ",
        icon: "<i class='fab fa-css3-alt' style='color: #1572b6;'></i>",
        topics: [
            { id: "introduction", title: "CSS Introduction", type: "basics", code: "/* Internal CSS */\n<style>\n    p {\n        color: blue;\n        font-size: 16px;\n    }\n</style>\n\n/* External CSS */\n<link rel=\"stylesheet\" href=\"style.css\">", content: "<h3>What is CSS?</h3>\n<p>CSS stands for Cascading Style Sheets. It is used to style and layout web pages. CSS describes how HTML elements should be displayed on screen.</p>\n\n<h3>Ways to Add CSS:</h3>\n<ul>\n    <li><strong>Inline:</strong> Using the style attribute</li>\n    <li><strong>Internal:</strong> Using the <style> tag in head</li>\n    <li><strong>External:</strong> Using an external .css file</li>\n</ul>" },
            { id: "selectors", title: "CSS Selectors", type: "basics", code: "/* Element Selector */\np { color: blue; }\n\n/* Class Selector */\n.highlight { background: yellow; }\n\n/* ID Selector */\n#header { font-size: 24px; }\n\n/* Multiple Selectors */\nh1, h2, h3 { margin: 0; }", content: "<h3>CSS Selectors</h3>\n<p>CSS selectors are used to select HTML elements you want to style.</p>\n\n<h3>Types of Selectors:</h3>\n<ul>\n    <li><strong>Element:</strong> p, h1, div</li>\n    <li><strong>Class:</strong> .classname</li>\n    <li><strong>ID:</strong> #idname</li>\n    <li><strong>Universal:</strong> *</li>\n    <li><strong>Group:</strong> selector1, selector2</li>\n</ul>" },
            { id: "colors", title: "CSS Colors", type: "basics", code: ".color-example {\n    color: red;\n    background-color: #ff0000;\n    border-color: rgb(255, 0, 0);\n    opacity: 0.5;\n}", content: "<h3>CSS Colors</h3>\n<p>CSS supports various color formats including named colors, HEX, RGB, RGBA, HSL, and HSLA.</p>\n\n<h3>Color Formats:</h3>\n<ul>\n    <li><strong>Named:</strong> red, blue, green</li>\n    <li><strong>HEX:</strong> #ff0000</li>\n    <li><strong>RGB:</strong> rgb(255, 0, 0)</li>\n    <li><strong>RGBA:</strong> rgba(255, 0, 0, 0.5)</li>\n    <li><strong>HSL:</strong> hsl(0, 100%, 50%)</li>\n</ul>" },
            { id: "backgrounds", title: "CSS Backgrounds", type: "basics", code: ".background-example {\n    background-color: lightblue;\n    background-image: url('https://via.placeholder.com/300');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}", content: "<h3>CSS Backgrounds</h3>\n<p>The background properties are used to add background effects to elements.</p>\n\n<h3>Background Properties:</h3>\n<ul>\n    <li><strong>background-color</strong> - Sets background color</li>\n    <li><strong>background-image</strong> - Sets background image</li>\n    <li><strong>background-repeat</strong> - Controls repetition</li>\n    <li><strong>background-position</strong> - Sets position</li>\n    <li><strong>background-size</strong> - Sets size</li>\n</ul>" },
            { id: "boxmodel", title: "CSS Box Model", type: "advanced", code: ".box {\n    width: 200px;\n    padding: 20px;\n    border: 1px solid black;\n    margin: 10px;\n    box-sizing: border-box;\n}", content: "<h3>CSS Box Model</h3>\n<p>Every element in web design is a rectangular box. The CSS box model consists of: content, padding, border, and margin.</p>\n\n<h3>Box Model Layers:</h3>\n<ol>\n    <li><strong>Content:</strong> The actual content</li>\n    <li><strong>Padding:</strong> Space around content</li>\n    <li><strong>Border:</strong> Border around padding</li>\n    <li><strong>Margin:</strong> Space outside border</li>\n</ol>" },
            { id: "flexbox", title: "CSS Flexbox", type: "advanced", code: ".container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    gap: 10px;\n}\n\n.item {\n    flex: 1;\n    align-self: flex-start;\n}", content: "<h3>CSS Flexbox</h3>\n<p>Flexbox is a one-dimensional layout method for laying out items in rows or columns.</p>\n\n<h3>Container Properties:</h3>\n<ul>\n    <li><strong>display:</strong> flex</li>\n    <li><strong>flex-direction:</strong> row | column</li>\n    <li><strong>justify-content:</strong> center | space-between</li>\n    <li><strong>align-items:</strong> center | flex-start | flex-end</li>\n    <li><strong>flex-wrap:</strong> wrap | nowrap</li>\n    <li><strong>gap:</strong> spacing between items</li>\n</ul>" },
            { id: "grid", title: "CSS Grid", type: "advanced", code: ".grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto;\n    gap: 20px;\n    grid-template-areas: \n        \"header header header\"\n        \"sidebar main main\"\n        \"footer footer footer\";\n}", content: "<h3>CSS Grid</h3>\n<p>CSS Grid Layout is a two-dimensional layout system for the web.</p>\n\n<h3>Grid Properties:</h3>\n<ul>\n    <li><strong>display:</strong> grid</li>\n    <li><strong>grid-template-columns:</strong> Defines columns</li>\n    <li><strong>grid-template-rows:</strong> Defines rows</li>\n    <li><strong>gap:</strong> Space between items</li>\n    <li><strong>grid-area:</strong> Define named areas</li>\n</ul>" },
            { id: "animations", title: "CSS Animations", type: "advanced", code: "@keyframes slide {\n    from { transform: translateX(0); }\n    to { transform: translateX(100px); }\n}\n\n.element {\n    animation: slide 2s ease infinite;\n    transition: all 0.3s ease;\n}", content: "<h3>CSS Animations and Transitions</h3>\n<p>CSS animations and transitions allow you to animate CSS property changes.</p>\n\n<h3>Transition Properties:</h3>\n<ul>\n    <li><strong>transition-property:</strong> Property to animate</li>\n    <li><strong>transition-duration:</strong> How long</li>\n    <li><strong>transition-timing-function:</strong> Ease, linear, etc.</li>\n    <li><strong>transition-delay:</strong> Wait before starting</li>\n</ul>" },
            { id: "responsive", title: "Responsive Design", type: "advanced", code: "@media (max-width: 768px) {\n    .container {\n        flex-direction: column;\n    }\n    \n    .sidebar {\n        display: none;\n    }\n}\n\n/* Mobile First */\n@media (min-width: 768px) {\n    .desktop {\n        display: block;\n    }\n}", content: "<h3>Responsive Web Design</h3>\n<p>Responsive design makes your website look good on all devices using CSS media queries.</p>\n\n<h3>Breakpoints:</h3>\n<ul>\n    <li><strong>Mobile:</strong> max-width: 576px</li>\n    <li><strong>Tablet:</strong> max-width: 768px</li>\n    <li><strong>Desktop:</strong> max-width: 992px</li>\n    <li><strong>Large:</strong> max-width: 1200px</li>\n</ul>" },
            { id: "practice1", title: "CSS Practice Exercise", type: "practice", code: "/* Create a card component:\n1. Add padding of 20px\n2. Add a subtle shadow\n3. Rounded corners of 10px\n4. Center the text\n5. Add hover effect */\n\n.card {\n    /* Your styles here */\n    background: white;\n    border-radius: 10px;\n    padding: 20px;\n}", content: "<h3>Practice: Build a Card Component</h3>\n<p>Create a card component with the following styles:</p>\n<ol>\n    <li>White background</li>\n    <li>10px border radius</li>\n    <li>20px padding</li>\n    <li>Subtle box shadow</li>\n    <li>Centered text</li>\n    <li>Hover effect (transform or shadow)</li>\n</ol>" }
        ]
    },
    javascript: {
        title: "JavaScript ",
        icon: "<i class='fab fa-js' style='color: #f7df1e;'></i>",
        topics: [
            { id: "introduction", title: "JavaScript Introduction", type: "basics", code: "<script>\n    console.log(\"Hello, World!\");\n    alert(\"Welcome to JavaScript!\");\n    document.getElementById(\"demo\").innerHTML = \"Hello\";\n</script>", content: "<h3>What is JavaScript?</h3>\n<p>JavaScript is a programming language that enables interactive web pages. It is an essential part of web applications alongside HTML and CSS.</p>\n\n<h3>What JavaScript Can Do:</h3>\n<ul>\n    <li>Change HTML content and attributes</li>\n    <li>Change CSS styles</li>\n    <li>Validate form data</li>\n    <li>Create animations and interactive effects</li>\n    <li>Build complex web applications</li>\n</ul>" },
            { id: "variables", title: "JavaScript Variables", type: "basics", code: "// Using var (function scoped)\nvar name = \"John\";\n\n// Using let (block scoped)\nlet age = 25;\n\n// Using const (block scoped, immutable)\nconst PI = 3.14159;\n\n// Reassignment\nage = 26; // OK\n// PI = 3.14; // Error!", content: "<h3>JavaScript Variables</h3>\n<p>Variables are containers for storing data values. JavaScript has three ways to declare variables.</p>\n\n<h3>Variable Types:</h3>\n<ul>\n    <li><strong>var:</strong> Function-scoped, can be redeclared</li>\n    <li><strong>let:</strong> Block-scoped, can be reassigned</li>\n    <li><strong>const:</strong> Block-scoped, cannot be reassigned</li>\n</ul>\n\n<h3>Best Practice:</h3>\n<p>Use const by default, and let when you need to reassign. Avoid var in modern JavaScript.</p>" },
            { id: "datatypes", title: "JavaScript Data Types", type: "basics", code: "// Primitive Types\nlet str = \"Hello\";       // String\nlet num = 42;            // Number\nlet bool = true;        // Boolean\nlet undef = undefined;  // Undefined\nlet nul = null;         // Null\nlet sym = Symbol();     // Symbol\nlet big = 123n;         // BigInt\n\n// Reference Types\nlet arr = [1, 2, 3];    // Array\nlet obj = { key: \"value\" }; // Object", content: "<h3>JavaScript Data Types</h3>\n<p>JavaScript has two categories of data types: Primitive and Reference.</p>\n\n<h3>Primitive Types (7):</h3>\n<ul>\n    <li>String</li>\n    <li>Number</li>\n    <li>Boolean</li>\n    <li>Undefined</li>\n    <li>Null</li>\n    <li>Symbol</li>\n    <li>BigInt</li>\n</ul>\n\n<h3>Reference Types:</h3>\n<ul>\n    <li>Object</li>\n    <li>Array</li>\n    <li>Function</li>\n</ul>" },
            { id: "arrays", title: "JavaScript Arrays", type: "basics", code: "let fruits = [\"Apple\", \"Banana\", \"Orange\"];\n\n// Access elements\nfruits[0];  // \"Apple\"\nfruits.length;  // 3\n\n// Add/Remove\nfruits.push(\"Mango\");     // Add to end\nfruits.pop();             // Remove from end\nfruits.unshift(\"Grape\");  // Add to start\nfruits.shift();           // Remove from start\n\n// Methods\nfruits.includes(\"Banana\");  // true\nfruits.indexOf(\"Orange\");  // 2\nfruits.slice(1, 2);        // [\"Banana\"]", content: "<h3>JavaScript Arrays</h3>\n<p>Arrays are used to store multiple values in a single variable. Arrays are zero-indexed.</p>\n\n<h3>Array Methods:</h3>\n<ul>\n    <li><strong>push()</strong> - Add to end</li>\n    <li><strong>pop()</strong> - Remove from end</li>\n    <li><strong>unshift()</strong> - Add to start</li>\n    <li><strong>shift()</strong> - Remove from start</li>\n    <li><strong>map()</strong> - Create new array</li>\n    <li><strong>filter()</strong> - Filter elements</li>\n    <li><strong>reduce()</strong> - Reduce to single value</li>\n</ul>" },
            { id: "functions", title: "JavaScript Functions", type: "basics", code: "// Function Declaration\nfunction greet(name) {\n    return \"Hello, \" + name + \"!\";\n}\n\n// Function Expression\nconst add = function(a, b) {\n    return a + b;\n};\n\n// Arrow Function\nconst multiply = (a, b) => a * b;\n\n// Default Parameters\nconst greetUser = (name = \"Guest\") => {\n    return \"Welcome, \" + name;\n};", content: "<h3>JavaScript Functions</h3>\n<p>Functions are blocks of code designed to perform a particular task. They are executed when something calls (invokes) them.</p>\n\n<h3>Function Types:</h3>\n<ul>\n    <li><strong>Function Declaration:</strong> Hoisted, can be called before definition</li>\n    <li><strong>Function Expression:</strong> Not hoisted</li>\n    <li><strong>Arrow Function:</strong> Concise syntax, no own this</li>\n</ul>" },
            { id: "objects", title: "JavaScript Objects", type: "basics", code: "// Object Creation\nconst person = {\n    name: \"John\",\n    age: 30,\n    \"full-name\": \"John Doe\",  // Bracket notation\n    greet: function() {\n        return \"Hello, I am \" + this.name;\n    }\n};\n\n// Access Properties\nperson.name;           // Dot notation\nperson[\"age\"];         // Bracket notation\n\n// Add/Update Properties\nperson.job = \"Developer\";\ndelete person.age;", content: "<h3>JavaScript Objects</h3>\n<p>Objects are collections of properties. Each property is a key-value pair.</p>\n\n<h3>Object Methods:</h3>\n<ul>\n    <li><strong>Object.keys()</strong> - Get all keys</li>\n    <li><strong>Object.values()</strong> - Get all values</li>\n    <li><strong>Object.entries()</strong> - Get key-value pairs</li>\n    <li><strong>Object.assign()</strong> - Merge objects</li>\n</ul>" },
            { id: "dom", title: "DOM Manipulation", type: "advanced", code: "// Select Elements\nconst element = document.getElementById(\"id\");\nconst elements = document.querySelectorAll(\".class\");\nconst first = document.querySelector(\".class\");\n\n// Change Content\nelement.textContent = \"New text\";\nelement.innerHTML = \"<p>HTML content</p>\";\n\n// Change Styles\nelement.style.color = \"blue\";\nelement.classList.add(\"active\");\nelement.classList.remove(\"hidden\");\n\n// Create Elements\nconst newDiv = document.createElement(\"div\");\nnewDiv.textContent = \"New div\";\ndocument.body.appendChild(newDiv);", content: "<h3>DOM Manipulation</h3>\n<p>The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content.</p>\n\n<h3>Selecting Elements:</h3>\n<ul>\n    <li><strong>getElementById()</strong> - By ID</li>\n    <li><strong>querySelector()</strong> - First match</li>\n    <li><strong>querySelectorAll()</strong> - All matches</li>\n</ul>" },
            { id: "async", title: "Async JavaScript", type: "advanced", code: "// Callback\nfunction fetchData(callback) {\n    setTimeout(() => {\n        callback(\"Data received\");\n    }, 1000);\n}\n\n// Promise\nconst fetchPromise = new Promise((resolve, reject) => {\n    // Async operation\n    resolve(\"Success!\");\n});\n\n// Async/Await\nasync function getData() {\n    try {\n        const response = await fetch(url);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error(error);\n    }\n}", content: "<h3>Asynchronous JavaScript</h3>\n<p>JavaScript is single-threaded and synchronous, but we can handle asynchronous operations using callbacks, promises, and async/await.</p>\n\n<h3>Async Methods:</h3>\n<ul>\n    <li><strong>setTimeout()</strong> - Delay execution</li>\n    <li><strong>setInterval()</strong> - Repeat execution</li>\n    <li><strong>fetch()</strong> - HTTP requests</li>\n    <li><strong>Promises</strong> - Handle async operations</li>\n    <li><strong>async/await</strong> - Cleaner promise syntax</li>\n</ul>" },
            { id: "es6", title: "ES6+ Features", type: "advanced", code: "// Destructuring\nconst { name, age } = person;\nconst [first, second] = array;\n\n// Spread Operator\nconst newArray = [...oldArray, newItem];\nconst newObj = { ...obj, newProp: value };\n\n// Template Literals\nconst message = `Hello, ${name}!`;\n\n// Ternary Operator\nconst status = age >= 18 ? \"Adult\" : \"Minor\";\n\n// Optional Chaining\nconst city = person.address?.city;\n\n// Nullish Coalescing\nconst value = null ?? \"default\";", content: "<h3>ES6+ Modern JavaScript</h3>\n<p>ECMAScript 2015 (ES6) and later versions introduced many powerful features to JavaScript.</p>\n\n<h3>Key ES6+ Features:</h3>\n<ul>\n    <li><strong>let and const</strong> - Block-scoped variables</li>\n    <li><strong>Arrow Functions</strong> - Concise syntax</li>\n    <li><strong>Template Literals</strong> - String interpolation</li>\n    <li><strong>Destructuring</strong> - Extract values</li>\n    <li><strong>Spread Operator</strong> - Expand arrays/objects</li>\n    <li><strong>Classes</strong> - OOP syntax</li>\n    <li><strong>Modules</strong> - Import/export</li>\n</ul>" },
            { id: "practice1", title: "JavaScript Practice", type: "practice", code: "// Practice Exercise: Array Methods\nconst numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// 1. Filter even numbers\nconst evens = numbers.filter(n => n % 2 === 0);\n\n// 2. Map to double values\nconst doubled = numbers.map(n => n * 2);\n\n// 3. Find sum of all numbers\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\n\nconsole.log(evens, doubled, sum);", content: "<h3>Practice: Array Methods</h3>\n<p>Complete the following exercises using array methods:</p>\n<ol>\n    <li>Filter even numbers from the array</li>\n    <li>Map to get double each value</li>\n    <li>Use reduce to find the sum</li>\n    <li>Chain multiple methods together</li>\n</ol>" }
        ]
    },
    python: {
        title: "Python ",
        icon: "<i class='fab fa-python' style='color: #3776ab;'></i>",
        topics: [
            { id: "introduction", title: "Python Introduction", type: "basics", code: "# First Python Program\nprint(\"Hello, World!\")\n\n# Variables\nname = \"John\"\nage = 25\nheight = 5.9\n\n# Multiple Assignment\na = b = c = 10\n\n# Data Types\nprint(type(name))  # <class 'str'>\nprint(type(age))   # <class 'int'>", content: "<h3>What is Python?</h3>\n<p>Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms.</p>\n\n<h3>Why Python?</h3>\n<ul>\n    <li>Easy to learn and read</li>\n    <li>Versatile (web, data science, AI, automation)</li>\n    <li>Huge community and libraries</li>\n    <li>Cross-platform</li>\n</ul>" },
            { id: "variables", title: "Python Variables", type: "basics", code: "# Variable Assignment\nx = 5\ny = \"Hello\"\nz = 3.14\n\n# Multiple Values\nfruits = [\"apple\", \"banana\", \"cherry\"]\ncoordinates = (4, 5)\npoint = {\"x\": 1, \"y\": 2}\n\n# Constants (by convention)\nPI = 3.14159\nMAX_SIZE = 100\n\n# Type Hints (Python 3.6+)\nname = \"John\"\nage = 25\nprice = 19.99", content: "<h3>Python Variables</h3>\n<p>Variables in Python are created when you assign a value to them. Python is dynamically typed - you do not need to declare the type.</p>\n\n<h3>Data Types:</h3>\n<ul>\n    <li><strong>int:</strong> Integer numbers</li>\n    <li><strong>float:</strong> Decimal numbers</li>\n    <li><strong>str:</strong> Strings</li>\n    <li><strong>bool:</strong> True/False</li>\n    <li><strong>list:</strong> Ordered collection</li>\n    <li><strong>tuple:</strong> Immutable sequence</li>\n    <li><strong>dict:</strong> Key-value pairs</li>\n</ul>" },
            { id: "datatypes", title: "Python Data Types", type: "basics", code: "# Strings\nname = \"Python\"\nname.upper()      # \"PYTHON\"\nname.lower()      # \"python\"\nname[0]           # \"P\"\nname[0:2]         # \"Py\"\n\n# Lists\nnumbers = [1, 2, 3, 4, 5]\nnumbers.append(6)\nnumbers.remove(1)\nnumbers[0] = 10\n\n# Tuples\ncoordinates = (10, 20)\n# coordinates[0] = 5  # Error! Tuples are immutable\n\n# Dictionaries\nperson = {\"Name\": \"John\", \"age\": 30}\nperson[\"city\"] = \"NYC\"\nperson.get(\"name\")  # \"John\"", content: "<h3>Python Data Types</h3>\n<p>Python has several built-in data types that are used to store and manipulate data.</p>\n\n<h3>Collection Types:</h3>\n<ul>\n    <li><strong>List:</strong> Ordered, mutable collection</li>\n    <li><strong>Tuple:</strong> Ordered, immutable collection</li>\n    <li><strong>Set:</strong> Unordered, no duplicates</li>\n    <li><strong>Dictionary:</strong> Key-value pairs</li>\n</ul>" },
            { id: "operators", title: "Python Operators", type: "basics", code: "# Arithmetic Operators\na = 10\nb = 3\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.33\nprint(a // b) # 3 (floor division)\nprint(a % b)  # 1 (modulus)\nprint(a ** b) # 1000 (exponent)\n\n# Comparison Operators\nprint(a == b)  # False\nprint(a != b)  # True\nprint(a > b)   # True\n\n# Logical Operators\nprint(a > 5 and b < 5)  # True\nprint(a > 5 or b > 5)   # True\nprint(not a > 5)        # False", content: "<h3>Python Operators</h3>\n<p>Operators are used to perform operations on variables and values.</p>\n\n<h3>Operator Types:</h3>\n<ul>\n    <li><strong>Arithmetic:</strong> +, -, *, /, //, %, **</li>\n    <li><strong>Comparison:</strong> ==, !=, >, <, >=, <=</li>\n    <li><strong>Logical:</strong> and, or, not</li>\n    <li><strong>Assignment:</strong> =, +=, -=, *=, /=</li>\n    <li><strong>Identity:</strong> is, is not</li>\n    <li><strong>Membership:</strong> in, not in</li>\n</ul>" },
            { id: "conditionals", title: "Python Conditionals", type: "basics", code: "age = 18\n\n# If Statement\nif age >= 18:\n    print(\"Adult\")\n\n# If-Else\nif age < 13:\n    print(\"Child\")\nelse:\n    print(\"Teenager or Adult\")\n\n# Elif\nscore = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n\n# Ternary Operator\nstatus = \"Adult\" if age >= 18 else \"Minor\"", content: "<h3>Python Conditionals</h3>\n<p>Conditional statements allow you to execute different code based on different conditions.</p>\n\n<h3>Conditional Statements:</h3>\n<ul>\n    <li><strong>if:</strong> Execute if condition is true</li>\n    <li><strong>else:</strong> Execute if if condition is false</li>\n    <li><strong>elif:</strong> Multiple conditions</li>\n    <li><strong>ternary:</strong> One-line conditional</li>\n</ul>" },
            { id: "loops", title: "Python Loops", type: "basics", code: "# For Loop\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n\n# Range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\nfor i in range(1, 6):\n    print(i)  # 1, 2, 3, 4, 5\n\n# While Loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# Break and Continue\nfor i in range(10):\n    if i == 5:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)", content: "<h3>Python Loops</h3>\n<p>Loops are used to execute a block of code repeatedly.</p>\n\n<h3>Loop Types:</h3>\n<ul>\n    <li><strong>for loop:</strong> Iterate over a sequence</li>\n    <li><strong>while loop:</strong> Execute while condition is true</li>\n    <li><strong>range():</strong> Generate a sequence of numbers</li>\n</ul>\n\n<h3>Loop Control:</h3>\n<ul>\n    <li><strong>break:</strong> Exit loop</li>\n    <li><strong>continue:</strong> Skip to next iteration</li>\n    <li><strong>else:</strong> Execute when loop completes normally</li>\n</ul>" },
            { id: "functions", title: "Python Functions", type: "basics", code: "# Function Definition\ndef greet(name):\n    \"\"\"Return a greeting message.\"\"\"\n    return \"Hello, \" + name + \"!\"\n\n# Function Call\nmessage = greet(\"John\")\nprint(message)\n\n# Default Parameters\ndef power(base, exponent=2):\n    return base ** exponent\n\nprint(power(3))     # 9\nprint(power(3, 3))  # 27\n\n# Lambda Function\nsquare = lambda x: x ** 2\nprint(square(5))  # 25", content: "<h3>Python Functions</h3>\n<p>Functions are reusable blocks of code that perform a specific task.</p>\n\n<h3>Function Components:</h3>\n<ul>\n    <li><strong>def:</strong> Keyword to define function</li>\n    <li><strong>name:</strong> Function name</li>\n    <li><strong>parameters:</strong> Input values in parentheses</li>\n    <li><strong>return:</strong> Output value</li>\n    <li><strong>docstring:</strong> Documentation string</li>\n</ul>" },
            { id: "oop", title: "Python OOP", type: "advanced", code: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f\"Hello, I am {self.name}\"\n\n# Inheritance\nclass Student(Person):\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self.grade = grade\n    \n    def study(self):\n        return f\"{self.name} is studying\"\n\n# Create Object\njohn = Person(\"John\", 25)\njane = Student(\"Jane\", 20, \"A\")", content: "<h3>Python Object-Oriented Programming</h3>\n<p>Python supports object-oriented programming with classes, objects, inheritance, and polymorphism.</p>\n\n<h3>OOP Concepts:</h3>\n<ul>\n    <li><strong>Class:</strong> Blueprint for objects</li>\n    <li><strong>Object:</strong> Instance of a class</li>\n    <li><strong>__init__:</strong> Constructor method</li>\n    <li><strong>self:</strong> Reference to current instance</li>\n    <li><strong>Inheritance:</strong> Create new class from existing</li>\n    <li><strong>super():</strong> Access parent class</li>\n</ul>" },
            { id: "filehandling", title: "Python File Handling", type: "advanced", code: "# Read File\nwith open(\"example.txt\", \"r\") as file:\n    content = file.read()\n    lines = file.readlines()\n\n# Write File\nwith open(\"output.txt\", \"w\") as file:\n    file.write(\"Hello, World!\\n\")\n    file.write(\"This is a new line.\")\n\n# Append to File\nwith open(\"example.txt\", \"a\") as file:\n    file.write(\"\\nAppended text\")\n\n# CSV Files\nimport csv\nwith open(\"data.csv\", \"w\", newline=\"\") as file:\n    writer = csv.writer(file)\n    writer.writerow([\"Name\", \"Age\"])\n    writer.writerow([\"John\", 25])", content: "<h3>Python File Handling</h3>\n<p>Python provides built-in functions and methods to read from and write to files.</p>\n\n<h3>File Modes:</h3>\n<ul>\n    <li><strong>r:</strong> Read (default)</li>\n    <li><strong>w:</strong> Write (overwrite)</li>\n    <li><strong>a:</strong> Append</li>\n    <li><strong>r+:</strong> Read and write</li>\n</ul>\n\n<h3>File Methods:</h3>\n<ul>\n    <li><strong>read()</strong> - Read entire file</li>\n    <li><strong>readline()</strong> - Read one line</li>\n    <li><strong>readlines()</strong> - Read all lines</li>\n    <li><strong>write()</strong> - Write to file</li>\n</ul>" },
            { id: "practice1", title: "Python Practice", type: "practice", code: "# Practice Exercise: FizzBuzz\n# Print numbers 1-50, but:\n# - For multiples of 3, print \"Fizz\"\n# - For multiples of 5, print \"Buzz\"\n# - For multiples of both, print \"FizzBuzz\"\n\nfor i in range(1, 51):\n    if i % 3 == 0 and i % 5 == 0:\n        print(\"FizzBuzz\")\n    elif i % 3 == 0:\n        print(\"Fizz\")\n    elif i % 5 == 0:\n        print(\"Buzz\")\n    else:\n        print(i)", content: "<h3>Practice: FizzBuzz</h3>\n<p>The classic FizzBuzz problem is a common interview question. Write a program that:</p>\n<ol>\n    <li>Prints numbers 1 to 50</li>\n    <li>For multiples of 3, print \"Fizz\"</li>\n    <li>For multiples of 5, print \"Buzz\"</li>\n    <li>For multiples of both, print \"FizzBuzz\"</li>\n</ol>" },
                {
            id: "introduction",
            title: "Python Introduction",
            type: "basics",
            code: "# First Python Program\nprint(\"Hello, World!\")\n\n# Variables\nname = \"John\"\nage = 25\nheight = 5.9\n\n# Multiple Assignment\na = b = c = 10\n\n# Data Types\nprint(type(name))  # <class 'str'>\nprint(type(age))   # <class 'int'>",
            content: "<h3>What is Python?</h3>\n<p>Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms.</p>\n\n<h3>Why Python?</h3>\n<ul>\n    <li>Easy to learn and read</li>\n    <li>Versatile (web, data science, AI, automation)</li>\n    <li>Huge community and libraries</li>\n    <li>Cross-platform</li>\n</ul>"
        },
        {
            id: "variables",
            title: "Python Variables",
            type: "basics",
            code: "# Variable Assignment\nx = 5\ny = \"Hello\"\nz = 3.14\n\n# Multiple Values\nfruits = [\"apple\", \"banana\", \"cherry\"]\ncoordinates = (4, 5)\npoint = {\"x\": 1, \"y\": 2}\n\n# Constants (by convention)\nPI = 3.14159\nMAX_SIZE = 100\n\n# Type Hints (Python 3.6+)\nname = \"John\"\nage = 25\nprice = 19.99",
            content: "<h3>Python Variables</h3>\n<p>Variables in Python are created when you assign a value to them. Python is dynamically typed - you do not need to declare the type.</p>\n\n<h3>Data Types:</h3>\n<ul>\n    <li><strong>int:</strong> Integer numbers</li>\n    <li><strong>float:</strong> Decimal numbers</li>\n    <li><strong>str:</strong> Strings</li>\n    <li><strong>bool:</strong> True/False</li>\n    <li><strong>list:</strong> Ordered collection</li>\n    <li><strong>tuple:</strong> Immutable sequence</li>\n    <li><strong>dict:</strong> Key-value pairs</li>\n</ul>"
        },

         {
            id: "datatypes",
            title: "Python Data Types",
            type: "basics",
            code: "# Strings\nname = \"Python\"\nname.upper()      # \"PYTHON\"\nname.lower()      # \"python\"\nname[0]           # \"P\"\nname[0:2]         # \"Py\"\n\n# Lists\nnumbers = [1, 2, 3, 4, 5]\nnumbers.append(6)\nnumbers.remove(1)\nnumbers[0] = 10\n\n# Tuples\ncoordinates = (10, 20)\n# coordinates[0] = 5  # Error! Tuples are immutable\n\n# Dictionaries\nperson = {\"Name\": \"John\", \"age\": 30}\nperson[\"city\"] = \"NYC\"\nperson.get(\"name\")  # \"John\"",
            content: "<h3>Python Data Types</h3>\n<p>Python has several built-in data types that are used to store and manipulate data. Understanding these types is crucial for effective programming.</p>\n\n<h3>Collection Types:</h3>\n<ul>\n    <li><strong>List:</strong> Ordered, mutable collection - can be modified after creation</li>\n    <li><strong>Tuple:</strong> Ordered, immutable collection - cannot be changed once created</li>\n    <li><strong>Set:</strong> Unordered collection with no duplicate elements</li>\n    <li><strong>Dictionary:</strong> Key-value pairs for storing data with unique keys</li>\n</ul>\n\n<h3>Mutable vs Immutable:</h3>\n<ul>\n    <li><strong>Mutable:</strong> Can be changed after creation (Lists, Dictionaries, Sets)</li>\n    <li><strong>Immutable:</strong> Cannot be changed after creation (Strings, Tuples, Numbers)</li>\n</ul>\n\n<h3>Type Conversion:</h3>\n<p>Python allows conversion between different data types using built-in functions like int(), float(), str(), list(), tuple(), dict().</p>"
        },
      
        {
            id: "variables",
            title: "Python Variables",
            type: "basics",
            code: `# Variable Assignment
x = 5
y = "Hello"
z = 3.14

# Multiple Values
fruits = ["apple", "banana", "cherry"]
coordinates = (4, 5)
point = {"x": 1, "y": 2}

# Constants (by convention)
PI = 3.14159
MAX_SIZE = 100

# Type Hints (Python 3.6+)
name = "John"
age = 25
price = 19.99`,
            content: `<h3>Python Variables</h3>
<p>Variables in Python are created when you assign a value to them. Python is dynamically typed - you do not need to declare the type.</p>

<h3>Data Types:</h3>
<ul>
    <li><strong>int:</strong> Integer numbers</li>
    <li><strong>float:</strong> Decimal numbers</li>
    <li><strong>str:</strong> Strings</li>
    <li><strong>bool:</strong> True/False</li>
    <li><strong>list:</strong> Ordered collection</li>
    <li><strong>tuple:</strong> Immutable sequence</li>
    <li><strong>dict:</strong> Key-value pairs</li>
</ul>`
        },
        {
            id: "datatypes",
            title: "Python Data Types",
            type: "basics",
            code: `# Strings
name = "Python"
name.upper()      # "PYTHON"
name.lower()      # "python"
name[0]           # "P"
name[0:2]         # "Py"

# Lists
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
numbers.remove(1)
numbers[0] = 10

# Tuples
coordinates = (10, 20)
# coordinates[0] = 5  # Error! Tuples are immutable

# Dictionaries
person = {"Name": "John", "age": 30}
person["city"] = "NYC"
person.get("name")  # "John"`,
            content: `<h3>Python Data Types</h3>
<p>Python has several built-in data types that are used to store and manipulate data.</p>

<h3>Collection Types:</h3>
<ul>
    <li><strong>List:</strong> Ordered, mutable collection</li>
    <li><strong>Tuple:</strong> Ordered, immutable collection</li>
    <li><strong>Set:</strong> Unordered, no duplicates</li>
    <li><strong>Dictionary:</strong> Key-value pairs</li>
</ul>`
        },
        {
            id: "operators",
            title: "Python Operators",
            type: "basics",
            code: `# Arithmetic Operators
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.33
print(a // b) # 3 (floor division)
print(a % b)  # 1 (modulus)
print(a ** b) # 1000 (exponent)

# Comparison Operators
print(a == b)  # False
print(a != b)  # True
print(a > b)   # True

# Logical Operators
print(a > 5 and b < 5)  # True
print(a > 5 or b > 5)   # True
print(not a > 5)        # False`,
            content: `<h3>Python Operators</h3>
<p>Operators are used to perform operations on variables and values.</p>

<h3>Operator Types:</h3>
<ul>
    <li><strong>Arithmetic:</strong> +, -, *, /, //, %, **</li>
    <li><strong>Comparison:</strong> ==, !=, >, <, >=, <=</li>
    <li><strong>Logical:</strong> and, or, not</li>
    <li><strong>Assignment:</strong> =, +=, -=, *=, /=</li>
    <li><strong>Identity:</strong> is, is not</li>
    <li><strong>Membership:</strong> in, not in</li>
</ul>`
        },
        {
            id: "conditionals",
            title: "Python Conditionals",
            type: "basics",
            code: `age = 18

# If Statement
if age >= 18:
    print("Adult")

# If-Else
if age < 13:
    print("Child")
else:
    print("Teenager or Adult")

# Elif
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")

# Ternary Operator
status = "Adult" if age >= 18 else "Minor"`,
            content: `<h3>Python Conditionals</h3>
<p>Conditional statements allow you to execute different code based on different conditions.</p>

<h3>Conditional Statements:</h3>
<ul>
    <li><strong>if:</strong> Execute if condition is true</li>
    <li><strong>else:</strong> Execute if if condition is false</li>
    <li><strong>elif:</strong> Multiple conditions</li>
    <li><strong>ternary:</strong> One-line conditional</li>
</ul>`
        },
        {
            id: "loops",
            title: "Python Loops",
            type: "basics",
            code: `# For Loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# While Loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break and Continue
for i in range(10):
    if i == 5:
        break
    if i % 2 == 0:
        continue
    print(i)`,
            content: `<h3>Python Loops</h3>
<p>Loops are used to execute a block of code repeatedly.</p>

<h3>Loop Types:</h3>
<ul>
    <li><strong>for loop:</strong> Iterate over a sequence</li>
    <li><strong>while loop:</strong> Execute while condition is true</li>
    <li><strong>range():</strong> Generate a sequence of numbers</li>
</ul>

<h3>Loop Control:</h3>
<ul>
    <li><strong>break:</strong> Exit loop</li>
    <li><strong>continue:</strong> Skip to next iteration</li>
    <li><strong>else:</strong> Execute when loop completes normally</li>
</ul>`
        },
        {
            id: "functions",
            title: "Python Functions",
            type: "basics",
            code: `# Function Definition
def greet(name):
    """Return a greeting message."""
    return "Hello, " + name + "!"

# Function Call
message = greet("John")
print(message)

# Default Parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))     # 9
print(power(3, 3))  # 27

# Lambda Function
square = lambda x: x ** 2
print(square(5))  # 25`,
            content: `<h3>Python Functions</h3>
<p>Functions are reusable blocks of code that perform a specific task.</p>

<h3>Function Components:</h3>
<ul>
    <li><strong>def:</strong> Keyword to define function</li>
    <li><strong>name:</strong> Function name</li>
    <li><strong>parameters:</strong> Input values in parentheses</li>
    <li><strong>return:</strong> Output value</li>
    <li><strong>docstring:</strong> Documentation string</li>
</ul>`
        },
        {
            id: "oop",
            title: "Python OOP",
            type: "advanced",
            code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I am {self.name}"

# Inheritance
class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade
    
    def study(self):
        return f"{self.name} is studying"

# Create Object
john = Person("John", 25)
jane = Student("Jane", 20, "A")`,
            content: `<h3>Python Object-Oriented Programming</h3>
<p>Python supports object-oriented programming with classes, objects, inheritance, and polymorphism.</p>

<h3>OOP Concepts:</h3>
<ul>
    <li><strong>Class:</strong> Blueprint for objects</li>
    <li><strong>Object:</strong> Instance of a class</li>
    <li><strong>__init__:</strong> Constructor method</li>
    <li><strong>self:</strong> Reference to current instance</li>
    <li><strong>Inheritance:</strong> Create new class from existing</li>
    <li><strong>super():</strong> Access parent class</li>
</ul>`
        },
        {
            id: "filehandling",
            title: "Python File Handling",
            type: "advanced",
            code: `# Read File
with open("example.txt", "r") as file:
    content = file.read()
    lines = file.readlines()

# Write File
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is a new line.")

# Append to File
with open("example.txt", "a") as file:
    file.write("\nAppended text")

# CSV Files
import csv
with open("data.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Name", "Age"])
    writer.writerow(["John", 25])`,
            content: `<h3>Python File Handling</h3>
<p>Python provides built-in functions and methods to read from and write to files.</p>

<h3>File Modes:</h3>
<ul>
    <li><strong>r:</strong> Read (default)</li>
    <li><strong>w:</strong> Write (overwrite)</li>
    <li><strong>a:</strong> Append</li>
    <li><strong>r+:</strong> Read and write</li>
</ul>

<h3>File Methods:</h3>
<ul>
    <li><strong>read()</strong> - Read entire file</li>
    <li><strong>readline()</strong> - Read one line</li>
    <li><strong>readlines()</strong> - Read all lines</li>
    <li><strong>write()</strong> - Write to file</li>
</ul>`
        },
        {
            id: "practice1",
            title: "Python Practice",
            type: "practice",
            code: `# Practice Exercise: FizzBuzz
# Print numbers 1-50, but:
# - For multiples of 3, print "Fizz"
# - For multiples of 5, print "Buzz"
# - For multiples of both, print "FizzBuzz"

for i in range(1, 51):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
            content: `<h3>Practice: FizzBuzz</h3>
<p>The classic FizzBuzz problem is a common interview question. Write a program that:</p>
<ol>
    <li>Prints numbers 1 to 50</li>
    <li>For multiples of 3, print "Fizz"</li>
    <li>For multiples of 5, print "Buzz"</li>
    <li>For multiples of both, print "FizzBuzz"</li>
</ol>`
        }
        ]
    },

    

    webdevelopment: {
    title: "Web Development",
    icon: "<i class='fas fa-code' style='color: #007acc;'></i>",
    topics: [
        {
            id: "html-basics",
            title: "HTML Fundamentals",
            type: "basics",
            code: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>My First Webpage</title>\n</head>\n<body>\n    <h1>Welcome to Web Development</h1>\n    <p>This is a paragraph.</p>\n    <a href=\"https://example.com\">Visit Example</a>\n</body>\n</html>",
            content: "<h3>HTML Basics</h3>\n<p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>\n\n<h3>HTML Structure:</h3>\n<ul>\n    <li><strong>!DOCTYPE:</strong> Document type declaration</li>\n    <li><strong>html:</strong> Root element</li>\n    <li><strong>head:</strong> Contains meta information</li>\n    <li><strong>body:</strong> Contains visible content</li>\n</ul>\n\n<h3>Basic Tags:</h3>\n<ul>\n    <li>h1-h6: Headings</li>\n    <li>p: Paragraph</li>\n    <li>a: Anchor (links)</li>\n    <li>img: Image</li>\n    <li>div: Division/container</li>\n</ul>"
        },
        {
            id: "html-semantic",
            title: "HTML5 Semantic Elements",
            type: "basics",
            code: "<header>\n    <nav>\n        <ul>\n            <li><a href=\"#home\">Home</a></li>\n            <li><a href=\"#about\">About</a></li>\n        </ul>\n    </nav>\n</header>\n<main>\n    <article>\n        <h2>Article Title</h2>\n        <p>Article content...</p>\n    </article>\n    <aside>\n        <h3>Related Content</h3>\n    </aside>\n</main>\n<footer>\n    <p>&copy; 2024 My Website</p>\n</footer>",
            content: "<h3>HTML5 Semantic Elements</h3>\n<p>Semantic elements clearly describe their meaning to both browser and developer.</p>\n\n<h3>Why Use Semantic HTML:</h3>\n<ul>\n    <li>Better SEO</li>\n    <li>Improved accessibility</li>\n    <li>Easier to read and maintain</li>\n    <li>Better structure</li>\n</ul>\n\n<h3>Common Semantic Tags:</h3>\n<ul>\n    <li>header: Introductory content</li>\n    <li>nav: Navigation links</li>\n    <li>main: Main content</li>\n    <li>article: Independent content</li>\n    <li>section: Thematic grouping</li>\n    <li>aside: Sidebar content</li>\n    <li>footer: Footer content</li>\n</ul>"
        },
        {
            id: "css-basics",
            title: "CSS Fundamentals",
            type: "basics",
            code: "/* CSS Basics */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f4f4f4;\n}\n\nh1 {\n    color: #333;\n    text-align: center;\n    font-size: 2rem;\n}\n\n.container {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n}\n\n.btn {\n    background-color: #007acc;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}",
            content: "<h3>CSS Fundamentals</h3>\n<p>CSS (Cascading Style Sheets) describes how HTML elements are displayed on screen.</p>\n\n<h3>CSS Syntax:</h3>\n<pre>\nselector {\n    property: value;\n}\n</pre>\n\n<h3>CSS Selectors:</h3>\n<ul>\n    <li><strong>Element:</strong> p, h1, div</li>\n    <li><strong>Class:</strong> .className</li>\n    <li><strong>ID:</strong> #idName</li>\n    <li><strong>Attribute:</strong> [type='text']</li>\n    <li><strong>Pseudo-class:</strong> :hover, :focus</li>\n</ul>\n\n<h3>Box Model:</h3>\n<ul>\n    <li>Content</li>\n    <li>Padding</li>\n    <li>Border</li>\n    <li>Margin</li>\n</ul>"
        },
        {
            id: "css-flexbox",
            title: "CSS Flexbox",
            type: "intermediate",
            code: ".container {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.item {\n    flex: 1;\n    min-width: 200px;\n    padding: 20px;\n    background: #ddd;\n}\n\n.item:nth-child(1) {\n    order: 2;\n}\n\n.item:nth-child(2) {\n    flex-grow: 2;\n}\n\n.item:nth-child(3) {\n    align-self: flex-end;\n}",
            content: "<h3>CSS Flexbox</h3>\n<p>Flexbox is a layout model that allows elements to align and distribute space within a container.</p>\n\n<h3>Flex Container Properties:</h3>\n<ul>\n    <li><strong>display: flex:</strong> Creates flex container</li>\n    <li><strong>flex-direction:</strong> row, column, row-reverse</li>\n    <li><strong>justify-content:</strong> Horizontal alignment</li>\n    <li><strong>align-items:</strong> Vertical alignment</li>\n    <li><strong>flex-wrap:</strong> Controls wrapping</li>\n</ul>\n\n<h3>Flex Item Properties:</h3>\n<ul>\n    <li><strong>flex-grow:</strong> Ability to grow</li>\n    <li><strong>flex-shrink:</strong> Ability to shrink</li>\n    <li><strong>flex-basis:</strong> Initial size</li>\n    <li><strong>order:</strong> Visual order</li>\n    <li><strong>align-self:</strong> Individual alignment</li>\n</ul>"
        },
        {
            id: "css-grid",
            title: "CSS Grid",
            type: "intermediate",
            code: ".container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 100px auto 100px;\n    gap: 10px;\n    grid-template-areas:\n        \"header header header\"\n        \"sidebar main main\"\n        \"footer footer footer\";\n}\n\n.header {\n    grid-area: header;\n    grid-column: 1 / -1;\n}\n\n.main {\n    grid-area: main;\n    grid-row: 2 / 3;\n}\n\n.sidebar {\n    grid-area: sidebar;\n    grid-column: 1 / 2;\n}\n\n.footer {\n    grid-area: footer;\n}",
            content: "<h3>CSS Grid Layout</h3>\n<p>CSS Grid is a two-dimensional layout system for the web.</p>\n\n<h3>Grid Container Properties:</h3>\n<ul>\n    <li><strong>display: grid:</strong> Creates grid container</li>\n    <li><strong>grid-template-columns:</strong> Defines columns</li>\n    <li><strong>grid-template-rows:</strong> Defines rows</li>\n    <li><strong>grid-template-areas:</strong> Defines areas</li>\n    <li><strong>gap:</strong> Space between grid items</li>\n</ul>\n\n<h3>Grid Item Properties:</h3>\n<ul>\n    <li><strong>grid-column:</strong> Column placement</li>\n    <li><strong>grid-row:</strong> Row placement</li>\n    <li><strong>grid-area:</strong> Area placement</li>\n    <li><strong>justify-self:</strong> Horizontal alignment</li>\n    <li><strong>align-self:</strong> Vertical alignment</li>\n</ul>"
        },
        {
            id: "responsive-design",
            title: "Responsive Web Design",
            type: "intermediate",
            code: "/* Mobile First Approach */\n.container {\n    width: 100%;\n    padding: 10px;\n}\n\n/* Tablet */\n@media (min-width: 768px) {\n    .container {\n        width: 750px;\n        padding: 20px;\n    }\n    .columns {\n        display: flex;\n        gap: 20px;\n    }\n}\n\n/* Desktop */\n@media (min-width: 1024px) {\n    .container {\n        width: 1000px;\n    }\n    .columns {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n/* Large Screens */\n@media (min-width: 1200px) {\n    .container {\n        width: 1170px;\n    }\n}",
            content: "<h3>Responsive Web Design</h3>\n<p>Creating websites that work well on all devices and screen sizes.</p>\n\n<h3>Key Concepts:</h3>\n<ul>\n    <li><strong>Fluid Grids:</strong> Use percentages, not fixed pixels</li>\n    <li><strong>Flexible Images:</strong> max-width: 100%</li>\n    <li><strong>Media Queries:</strong> Different styles for different devices</li>\n    <li><strong>Mobile First:</strong> Design for mobile first, then enhance</li>\n</ul>\n\n<h3>Common Breakpoints:</h3>\n<ul>\n    <li>Mobile: < 768px</li>\n    <li>Tablet: 768px - 1024px</li>\n    <li>Desktop: > 1024px</li>\n</ul>\n\n<h3>Viewport Meta Tag:</h3>\n<code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code>"
        },
        {
            id: "javascript-dom",
            title: "JavaScript DOM Manipulation",
            type: "intermediate",
            code: "// DOM Selection\nconst btn = document.getElementById('myButton');\nconst items = document.querySelectorAll('.item');\nconst form = document.querySelector('form');\n\n// Event Listeners\nbtn.addEventListener('click', function() {\n    this.style.backgroundColor = 'blue';\n    this.textContent = 'Clicked!';\n});\n\n// Create Element\nconst newDiv = document.createElement('div');\nnewDiv.className = 'new-item';\nnewDiv.innerHTML = '<p>New content</p>';\n\n// Append to DOM\ndocument.body.appendChild(newDiv);\n\n// Remove Element\nconst oldDiv = document.querySelector('.old');\noldDiv.remove();\n\n// Update Styles\ndocument.querySelector('.box').style.cssText = \n    'background: red; color: white; padding: 10px;';",
            content: "<h3>DOM Manipulation</h3>\n<p>The Document Object Model (DOM) represents the structure of an HTML document.</p>\n\n<h3>DOM Selection Methods:</h3>\n<ul>\n    <li><strong>getElementById():</strong> Select by ID</li>\n    <li><strong>querySelector():</strong> First matching element</li>\n    <li><strong>querySelectorAll():</strong> All matching elements</li>\n    <li><strong>getElementsByClassName():</strong> By class name</li>\n    <li><strong>getElementsByTagName():</strong> By tag name</li>\n</ul>\n\n<h3>DOM Manipulation Methods:</h3>\n<ul>\n    <li><strong>createElement():</strong> Create new element</li>\n    <li><strong>appendChild():</strong> Add element to DOM</li>\n    <li><strong>removeChild():</strong> Remove element</li>\n    <li><strong>setAttribute():</strong> Set attribute</li>\n    <li><strong>classList:</strong> Add/remove CSS classes</li>\n</ul>"
        },
        {
            id: "javascript-events",
            title: "JavaScript Events",
            type: "intermediate",
            code: "// Event Listener\nconst button = document.getElementById('btn');\n\n// Click Event\nbutton.addEventListener('click', (event) => {\n    console.log('Button clicked!', event.target);\n    event.preventDefault(); // Prevent default behavior\n});\n\n// Mouse Events\nbutton.addEventListener('mouseover', () => {\n    button.style.transform = 'scale(1.1)';\n});\n\nbutton.addEventListener('mouseout', () => {\n    button.style.transform = 'scale(1)';\n});\n\n// Keyboard Events\ndocument.addEventListener('keydown', (event) => {\n    console.log('Key pressed:', event.key);\n    if (event.key === 'Escape') {\n        closeModal();\n    }\n});\n\n// Form Events\nconst form = document.getElementById('myForm');\nform.addEventListener('submit', (event) => {\n    event.preventDefault();\n    const formData = new FormData(form);\n    console.log('Form submitted:', formData);\n});\n\n// Event Delegation\ndocument.querySelector('.list').addEventListener('click', (event) => {\n    if (event.target.tagName === 'LI') {\n        console.log('List item clicked:', event.target.textContent);\n    }\n});",
            content: "<h3>JavaScript Events</h3>\n<p>Events are actions or occurrences that happen in the browser.</p>\n\n<h3>Common Event Types:</h3>\n<ul>\n    <li><strong>Mouse Events:</strong> click, dblclick, mouseover, mouseout</li>\n    <li><strong>Keyboard Events:</strong> keydown, keyup, keypress</li>\n    <li><strong>Form Events:</strong> submit, change, input, focus, blur</li>\n    <li><strong>Window Events:</strong> load, resize, scroll</li>\n    <li><strong>Touch Events:</strong> touchstart, touchmove, touchend</li>\n</ul>\n\n<h3>Event Object Properties:</h3>\n<ul>\n    <li><strong>target:</strong> Element that triggered event</li>\n    <li><strong>type:</strong> Event type (click, submit, etc.)</li>\n    <li><strong>preventDefault():</strong> Prevent default behavior</li>\n    <li><strong>stopPropagation():</strong> Stop event bubbling</li>\n</ul>\n\n<h3>Event Delegation:</h3>\n<p>Attach event listener to parent element to handle events from child elements.</p>"
        },
        {
            id: "ajax-fetch",
            title: "AJAX & Fetch API",
            type: "advanced",
            code: "// Fetch API - GET Request\nfetch('https://api.example.com/data')\n    .then(response => {\n        if (!response.ok) {\n            throw new Error('Network response was not ok');\n        }\n        return response.json();\n    })\n    .then(data => {\n        console.log('Data received:', data);\n        displayData(data);\n    })\n    .catch(error => {\n        console.error('Error:', error);\n        showError(error.message);\n    });\n\n// POST Request\nfetch('https://api.example.com/data', {\n    method: 'POST',\n    headers: {\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer token123'\n    },\n    body: JSON.stringify({\n        name: 'John',\n        age: 30\n    })\n})\n.then(response => response.json())\n.then(data => console.log('Success:', data));\n\n// Async/Await\nasync function fetchData() {\n    try {\n        const response = await fetch('https://api.example.com/data');\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error('Fetch error:', error);\n        return null;\n    }\n}",
            content: "<h3>AJAX & Fetch API</h3>\n<p>AJAX (Asynchronous JavaScript and XML) allows web pages to update asynchronously by exchanging data with a server.</p>\n\n<h3>Fetch API Methods:</h3>\n<ul>\n    <li><strong>GET:</strong> Retrieve data</li>\n    <li><strong>POST:</strong> Send data to create resource</li>\n    <li><strong>PUT:</strong> Update entire resource</li>\n    <li><strong>PATCH:</strong> Partial update</li>\n    <li><strong>DELETE:</strong> Remove resource</li>\n</ul>\n\n<h3>HTTP Status Codes:</h3>\n<ul>\n    <li>200-299: Success</li>\n    <li>300-399: Redirection</li>\n    <li>400-499: Client errors</li>\n    <li>500-599: Server errors</li>\n</ul>\n\n<h3>Request Headers:</h3>\n<ul>\n    <li>Content-Type: application/json</li>\n    <li>Authorization: Bearer token</li>\n    <li>Accept: application/json</li>\n    <li>User-Agent: Browser info</li>\n</ul>"
        },
        {
            id: "localstorage",
            title: "Web Storage API",
            type: "advanced",
            code: "// localStorage\nlocalStorage.setItem('username', 'john_doe');\nlocalStorage.setItem('theme', 'dark');\nlocalStorage.setItem('settings', JSON.stringify({\n    notifications: true,\n    language: 'en',\n    volume: 80\n}));\n\n// Get data\nconst username = localStorage.getItem('username');\nconst settings = JSON.parse(localStorage.getItem('settings'));\n\n// Remove item\nlocalStorage.removeItem('theme');\n\n// Clear all\nlocalStorage.clear();\n\n// sessionStorage (cleared when tab closes)\nsessionStorage.setItem('sessionId', 'abc123');\nconst sessionId = sessionStorage.getItem('sessionId');\n\n// Check if storage is available\nfunction isStorageAvailable(type) {\n    try {\n        const storage = window[type];\n        const test = '__storage_test__';\n        storage.setItem(test, test);\n        storage.removeItem(test);\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\n\n// Event listener for storage changes\nwindow.addEventListener('storage', (event) => {\n    console.log(`Storage changed: ${event.key} = ${event.newValue}`);\n});",
            content: "<h3>Web Storage API</h3>\n<p>Web Storage provides ways to store data in the browser with larger capacity than cookies.</p>\n\n<h3>Storage Types:</h3>\n<ul>\n    <li><strong>localStorage:</strong> Persistent storage (never expires)</li>\n    <li><strong>sessionStorage:</strong> Session storage (cleared on tab close)</li>\n</ul>\n\n<h3>Storage Methods:</h3>\n<ul>\n    <li><strong>setItem(key, value):</strong> Store data</li>\n    <li><strong>getItem(key):</strong> Retrieve data</li>\n    <li><strong>removeItem(key):</strong> Remove specific item</li>\n    <li><strong>clear():</strong> Remove all data</li>\n    <li><strong>key(index):</strong> Get key name at index</li>\n</ul>\n\n<h3>Limitations:</h3>\n<ul>\n    <li>Storage limit: 5-10MB per domain</li>\n    <li>Only strings can be stored</li>\n    <li>Synchronous operations</li>\n    <li>Same-origin policy applies</li>\n</ul>\n\n<h3>Best Practices:</h3>\n<ul>\n    <li>Use JSON.stringify() for objects</li>\n    <li>Use JSON.parse() to retrieve objects</li>\n    <li>Handle storage errors gracefully</li>\n    <li>Clear old/unused data</li>\n</ul>"
        },
        {
            id: "web-performance",
            title: "Web Performance Optimization",
            type: "advanced",
            code: "// Lazy Loading Images\n<img src=\"placeholder.jpg\" \n     data-src=\"real-image.jpg\" \n     class=\"lazy\" \n     alt=\"Description\">\n\n<script>\nconst images = document.querySelectorAll('.lazy');\nconst imageObserver = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n        if (entry.isIntersecting) {\n            const img = entry.target;\n            img.src = img.dataset.src;\n            img.classList.remove('lazy');\n            observer.unobserve(img);\n        }\n    });\n});\n\nimages.forEach(img => imageObserver.observe(img));\n</script>\n\n// Code Splitting with Dynamic Import\nbutton.addEventListener('click', async () => {\n    const module = await import('./heavyModule.js');\n    module.heavyFunction();\n});\n\n// Debouncing Function\nfunction debounce(func, delay) {\n    let timeoutId;\n    return function(...args) {\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(() => {\n            func.apply(this, args);\n        }, delay);\n    };\n}\n\n// Usage\nwindow.addEventListener('resize', debounce(() => {\n    console.log('Window resized');\n}, 300));",
            content: "<h3>Web Performance Optimization</h3>\n<p>Techniques to make websites faster and more efficient.</p>\n\n<h3>Optimization Techniques:</h3>\n<ul>\n    <li><strong>Image Optimization:</strong> Compress images, use WebP format</li>\n    <li><strong>Lazy Loading:</strong> Load content when needed</li>\n    <li><strong>Code Splitting:</strong> Split code into smaller bundles</li>\n    <li><strong>Caching:</strong> Use browser cache effectively</li>\n    <li><strong>Minification:</strong> Remove unnecessary characters</li>\n</ul>\n\n<h3>Performance Metrics:</h3>\n<ul>\n    <li><strong>FCP (First Contentful Paint):</strong> First content appears</li>\n    <li><strong>LCP (Largest Contentful Paint):</strong> Largest element loads</li>\n    <li><strong>CLS (Cumulative Layout Shift):</strong> Visual stability</li>\n    <li><strong>FID (First Input Delay):</strong> Time to interactive</li>\n</ul>\n\n<h3>Tools for Optimization:</h3>\n<ul>\n    <li>Lighthouse (Chrome DevTools)</li>\n    <li>WebPageTest</li>\n    <li>GTmetrix</li>\n    <li>PageSpeed Insights</li>\n</ul>"
        },
        {
            id: "web-security",
            title: "Web Security Fundamentals",
            type: "advanced",
            code: "// Content Security Policy\n// In HTML head\n<meta http-equiv=\"Content-Security-Policy\" \n      content=\"default-src 'self'; \n               script-src 'self' https://apis.google.com;\n               style-src 'self' 'unsafe-inline';\n               img-src 'self' data: https:;\">\n\n// Sanitizing User Input\nfunction sanitizeInput(input) {\n    const div = document.createElement('div');\n    div.textContent = input;\n    return div.innerHTML;\n}\n\n// Example usage\nconst userInput = \"<script>alert('XSS')</script>\";\nconst safeInput = sanitizeInput(userInput);\n\n// HTTPS Only\nif (window.location.protocol !== 'https:') {\n    window.location.href = \n        'https://' + window.location.host + window.location.pathname;\n}\n\n// Secure Cookies\n// Set cookie with HttpOnly and Secure flags\nfunction setSecureCookie(name, value, days) {\n    const expires = new Date(Date.now() + days * 864e5).toUTCString();\n    document.cookie = \n        `${name}=${encodeURIComponent(value)}; ` +\n        `expires=${expires}; ` +\n        `path=/; ` +\n        `Secure; ` +\n        `SameSite=Strict`;\n}",
            content: "<h3>Web Security Fundamentals</h3>\n<p>Protecting websites and web applications from security threats.</p>\n\n<h3>Common Security Threats:</h3>\n<ul>\n    <li><strong>XSS (Cross-Site Scripting):</strong> Injecting malicious scripts</li>\n    <li><strong>CSRF (Cross-Site Request Forgery):</strong> Unauthorized commands</li>\n    <li><strong>SQL Injection:</strong> Database manipulation</li>\n    <li><strong>Clickjacking:</strong> Tricking users to click hidden elements</li>\n</ul>\n\n<h3>Security Best Practices:</h3>\n<ul>\n    <li>Always validate and sanitize user input</li>\n    <li>Use HTTPS for all communications</li>\n    <li>Implement proper CORS policies</li>\n    <li>Use Content Security Policy (CSP)</li>\n    <li>Set secure HTTP headers</li>\n    <li>Implement rate limiting</li>\n    <li>Use parameterized queries for databases</li>\n</ul>\n\n<h3>Security Headers:</h3>\n<ul>\n    <li>Content-Security-Policy</li>\n    <li>X-Frame-Options</li>\n    <li>Strict-Transport-Security</li>\n    <li>X-Content-Type-Options</li>\n    <li>Referrer-Policy</li>\n</ul>"
        },
        {
            id: "webpack-basics",
            title: "Module Bundlers (Webpack)",
            type: "advanced",
            code: "// webpack.config.js\nconst path = require('path');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\n\nmodule.exports = {\n    mode: 'development', // or 'production'\n    entry: './src/index.js',\n    output: {\n        filename: 'bundle.[contenthash].js',\n        path: path.resolve(__dirname, 'dist'),\n        clean: true,\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,\n                use: {\n                    loader: 'babel-loader',\n                    options: {\n                        presets: ['@babel/preset-env']\n                    }\n                }\n            },\n            {\n                test: /\\.css$/,\n                use: ['style-loader', 'css-loader']\n            },\n            {\n                test: /\\.(png|svg|jpg|jpeg|gif)$/i,\n                type: 'asset/resource',\n            }\n        ]\n    },\n    plugins: [\n        new HtmlWebpackPlugin({\n            title: 'My App',\n            template: './src/index.html'\n        })\n    ],\n    devServer: {\n        static: './dist',\n        hot: true,\n        open: true\n    }\n};",
            content: "<h3>Module Bundlers - Webpack</h3>\n<p>Webpack is a static module bundler for modern JavaScript applications.</p>\n\n<h3>Core Concepts:</h3>\n<ul>\n    <li><strong>Entry:</strong> Starting point of dependency graph</li>\n    <li><strong>Output:</strong> Where to emit bundled files</li>\n    <li><strong>Loaders:</strong> Transform non-JS files</li>\n    <li><strong>Plugins:</strong> Perform wider range of tasks</li>\n    <li><strong>Mode:</strong> Development or production</li>\n</ul>\n\n<h3>Common Loaders:</h3>\n<ul>\n    <li><strong>babel-loader:</strong> Transpile ES6+</li>\n    <li><strong>css-loader:</strong> Handle CSS imports</li>\n    <li><strong>style-loader:</strong> Inject CSS into DOM</li>\n    <li><strong>file-loader:</strong> Handle image files</li>\n    <li><strong>ts-loader:</strong> TypeScript support</li>\n</ul>\n\n<h3>Common Plugins:</h3>\n<ul>\n    <li><strong>HtmlWebpackPlugin:</strong> Create HTML files</li>\n    <li><strong>MiniCssExtractPlugin:</strong> Extract CSS to file</li>\n    <li><strong>CleanWebpackPlugin:</strong> Clean output folder</li>\n    <li><strong>DotenvPlugin:</strong> Handle environment variables</li>\n</ul>"
}]},

    java: {
        title: "Java ",
        icon: "<i class='fab fa-java' style='color: #007396;'></i>",
        topics: [
            { id: "introduction", title: "Java Introduction", type: "basics", code: "// First Java Program\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n\n// Compile and Run\n// javac HelloWorld.java\n// java HelloWorld", content: "<h3>What is Java?</h3>\n<p>Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.</p>\n\n<h3>Key Features:</h3>\n<ul>\n    <li>Platform independent (Write Once, Run Anywhere)</li>\n    <li>Object-oriented</li>\n    <li>Strong memory management</li>\n    <li>Multi-threaded</li>\n    <li>Secure and robust</li>\n</ul>" },
            { id: "variables", title: "Java Variables", type: "basics", code: "// Primitive Data Types\nint age = 25;\ndouble salary = 50000.50;\nfloat price = 19.99f;\nchar grade = 'A';\nboolean isActive = true;\n\n// Reference Types\nString name = \"John\";\n\n// Type Inference (Java 10+)\nvar message = \"Hello\";  // String\nvar count = 10;         // int", content: "<h3>Java Variables</h3>\n<p>Variables are containers for storing data values. Java has two types: primitive and reference.</p>\n\n<h3>Primitive Types (8):</h3>\n<ul>\n    <li><strong>byte:</strong> 8-bit integer</li>\n    <li><strong>short:</strong> 16-bit integer</li>\n    <li><strong>int:</strong> 32-bit integer</li>\n    <li><strong>long:</strong> 64-bit integer</li>\n    <li><strong>float:</strong> 32-bit floating point</li>\n    <li><strong>double:</strong> 64-bit floating point</li>\n    <li><strong>char:</strong> Single character</li>\n    <li><strong>boolean:</strong> true/false</li>\n</ul>" },
            { id: "oop", title: "Java OOP", type: "basics", code: "// Class\npublic class Car {\n    // Attributes\n    private String brand;\n    private int speed;\n    \n    // Constructor\n    public Car(String brand, int speed) {\n        this.brand = brand;\n        this.speed = speed;\n    }\n    \n    // Methods\n    public void accelerate(int increment) {\n        speed += increment;\n    }\n    \n    public void brake(int decrement) {\n        speed -= decrement;\n    }\n    \n    // Getter\n    public String getInfo() {\n        return brand + \" at \" + speed + \" km/h\";\n    }\n}", content: "<h3>Java OOP Concepts</h3>\n<p>Java is an object-oriented programming language. Everything in Java is associated with classes and objects.</p>\n\n<h3>OOP Principles:</h3>\n<ul>\n    <li><strong>Encapsulation:</strong> Bundling data and methods</li>\n    <li><strong>Inheritance:</strong> Creating new classes from existing</li>\n    <li><strong>Polymorphism:</strong> Multiple forms</li>\n    <li><strong>Abstraction:</strong> Hiding complexity</li>\n</ul>" },
            { id: "arrays", title: "Java Arrays", type: "basics", code: "// One-dimensional Array\nint[] numbers = new int[5];\nnumbers[0] = 1;\nnumbers[1] = 2;\n\nint[] scores = {10, 20, 30, 40, 50};\n\n// Two-dimensional Array\nint[][] matrix = new int[3][3];\nmatrix[0][0] = 1;\n\nint[][] table = {\n    {1, 2, 3},\n    {4, 5, 6},\n    {7, 8, 9}\n};\n\n// Array Methods\nSystem.out.println(scores.length);\nArrays.sort(scores);\nArrays.fill(numbers, 0);", content: "<h3>Java Arrays</h3>\n<p>An array is a collection of similar types of data. Arrays in Java are objects that store multiple variables of the same type.</p>\n\n<h3>Array Operations:</h3>\n<ul>\n    <li><strong>Declaration:</strong> type[] arrayName</li>\n    <li><strong>Initialization:</strong> new type[size]</li>\n    <li><strong>Access:</strong> arrayName[index]</li>\n    <li><strong>Length:</strong> arrayName.length</li>\n</ul>" },
            { id: "strings", title: "Java Strings", type: "basics", code: "// String Declaration\nString greeting = \"Hello\";\nString name = new String(\"World\");\n\n// String Methods\nSystem.out.println(greeting.length());           // 5\nSystem.out.println(greeting.toUpperCase());      // \"HELLO\"\nSystem.out.println(greeting.concat(\" World\"));   // \"Hello World\"\nSystem.out.println(greeting.charAt(0));          // 'H'\nSystem.out.println(greeting.substring(1, 3));    // \"el\"\n\n// String Comparison\nString s1 = \"Hello\";\nString s2 = \"Hello\";\nSystem.out.println(s1 == s2);        // true (same reference)\nSystem.out.println(s1.equals(s2));   // true (same content)", content: "<h3>Java Strings</h3>\n<p>In Java, strings are objects of the String class. Strings are immutable - once created, they cannot be changed.</p>\n\n<h3>String Methods:</h3>\n<ul>\n    <li><strong>length()</strong> - Get length</li>\n    <li><strong>charAt()</strong> - Get character at index</li>\n    <li><strong>substring()</strong> - Extract substring</li>\n    <li><strong>toUpperCase/toLowerCase()</strong> - Change case</li>\n    <li><strong>trim()</strong> - Remove whitespace</li>\n    <li><strong>equals()</strong> - Compare content</li>\n</ul>" },
            { id: "collections", title: "Java Collections", type: "advanced", code: "import java.util.*;\n\n// ArrayList\nArrayList<String> fruits = new ArrayList<>();\nfruits.add(\"Apple\");\nfruits.add(\"Banana\");\nfruits.remove(0);\n\n// HashMap\nHashMap<String, Integer> ages = new HashMap<>();\nages.put(\"John\", 25);\nages.put(\"Jane\", 30);\nSystem.out.println(ages.get(\"John\"));  // 25\n\n// HashSet\nHashSet<Integer> numbers = new HashSet<>();\nnumbers.add(1);\nnumbers.add(2);\nnumbers.add(1);  // Duplicate - ignored", content: "<h3>Java Collections Framework</h3>\n<p>The Java Collections Framework provides data structures to store and manipulate groups of objects.</p>\n\n<h3>Collection Types:</h3>\n<ul>\n    <li><strong>List:</strong> Ordered collection (ArrayList, LinkedList)</li>\n    <li><strong>Set:</strong> Unique elements (HashSet, TreeSet)</li>\n    <li><strong>Map:</strong> Key-value pairs (HashMap, TreeMap)</li>\n    <li><strong>Queue:</strong> FIFO (LinkedList, PriorityQueue)</li>\n</ul>" },
            { id: "exceptions", title: "Java Exceptions", type: "advanced", code: "// Try-Catch\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero\");\n}\n\n// Multiple Catch\ntry {\n    int[] arr = new int[5];\n    arr[10] = 100;\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"Index out of bounds\");\n} catch (Exception e) {\n    System.out.println(\"Other exception\");\n}\n\n// Finally Block\ntry {\n    // Code that might throw exception\n} finally {\n    // Always executes\n}\n\n// Custom Exception\nclass MyException extends Exception {\n    public MyException(String message) {\n        super(message);\n    }\n}", content: "<h3>Java Exceptions</h3>\n<p>An exception is an event that disrupts the normal flow of the program instructions. Java provides a robust exception handling mechanism.</p>\n\n<h3>Exception Types:</h3>\n<ul>\n    <li><strong>Checked:</strong> Must be handled (IOException)</li>\n    <li><strong>Unchecked:</strong> Runtime exceptions (NullPointerException)</li>\n    <li><strong>Error:</strong> JVM errors (OutOfMemoryError)</li>\n</ul>" },
            { id: "threads", title: "Java Multithreading", type: "advanced", code: "// Method 1: Extend Thread\nclass MyThread extends Thread {\n    public void run() {\n        System.out.println(\"Thread running\");\n    }\n}\n\n// Method 2: Implement Runnable\nclass MyRunnable implements Runnable {\n    public void run() {\n        System.out.println(\"Runnable running\");\n    }\n}\n\n// Create and Start Thread\nMyThread t1 = new MyThread();\nt1.start();\n\nThread t2 = new Thread(new MyRunnable());\nt2.start();\n\n// Thread Methods\ntry {\n    t1.sleep(1000);  // Pause thread\n    t1.join();       // Wait for completion\n} catch (InterruptedException e) {\n    e.printStackTrace();\n}", content: "<h3>Java Multithreading</h3>\n<p>Multithreading allows a program to run multiple threads simultaneously. Each thread is a lightweight subprocess.</p>\n\n<h3>Thread Lifecycle:</h3>\n<ul>\n    <li><strong>New:</strong> Thread created</li>\n    <li><strong>Runnable:</strong> Ready to run</li>\n    <li><strong>Running:</strong> Currently executing</li>\n    <li><strong>Blocked:</strong> Waiting for resources</li>\n    <li><strong>Terminated:</strong> Execution complete</li>\n</ul>" },
            { id: "streams", title: "Java Streams", type: "advanced", code: "import java.util.stream.*;\nimport java.util.Arrays;\n\nList<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n\n// Filter even numbers and double them\nList<Integer> result = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * 2)\n    .collect(Collectors.toList());\n\n// Find first number greater than 5\nnumbers.stream()\n    .filter(n -> n > 5)\n    .findFirst()\n    .ifPresent(System.out::println);\n\n// Count elements\nlong count = numbers.stream().count();\n\n// Sum of all numbers\nint sum = numbers.stream()\n    .mapToInt(Integer::intValue)\n    .sum();", content: "<h3>Java Streams</h3>\n<p>Java Streams provide a functional approach to process collections of objects. Streams do not store data but process data from collections.</p>\n\n<h3>Stream Operations:</h3>\n<ul>\n    <li><strong>filter()</strong> - Filter elements</li>\n    <li><strong>map()</strong> - Transform elements</li>\n    <li><strong>reduce()</strong> - Combine elements</li>\n    <li><strong>collect()</strong> - Convert to collection</li>\n    <li><strong>forEach()</strong> - Iterate</li>\n    <li><strong>findFirst()/findAny()</strong> - Find element</li>\n</ul>" },
            { id: "practice1", title: "Java Practice", type: "practice", code: "// Practice: Find Prime Numbers\n// Write a method to check if a number is prime\n// Then find all primes between 1 and 100\n\npublic class PrimeFinder {\n    public static boolean isPrime(int n) {\n        if (n <= 1) return false;\n        for (int i = 2; i <= Math.sqrt(n); i++) {\n            if (n % i == 0) {\n                return false;\n            }\n        }\n        return true;\n    }\n    \n    public static void main(String[] args) {\n        for (int i = 1; i <= 100; i++) {\n            if (isPrime(i)) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}", content: "<h3>Practice: Prime Numbers</h3>\n<p>Write a Java program that:</p>\n<ol>\n    <li>Creates a method to check if a number is prime</li>\n    <li>Handles edge cases (1 and negative numbers)</li>\n    <li>Optimizes by checking up to square root</li>\n    <li>Finds all prime numbers between 1 and 100</li>\n</ol>" }
        ]
    },
    sql: {
        title: "SQL ",
        icon: "<i class='fas fa-database' style='color: #4479a1;'></i>",
        topics: [
            { id: "introduction", title: "SQL Introduction", type: "basics", code: "-- SQL (Structured Query Language)\n-- Used for managing and manipulating relational databases\n\n-- Select all data from a table\nSELECT * FROM employees;\n\n-- Select specific columns\nSELECT first_name, last_name, salary FROM employees;\n\n-- Filter with WHERE\nSELECT * FROM employees WHERE salary > 50000;\n\n-- Order results\nSELECT * FROM employees ORDER BY salary DESC;", content: "<h3>What is SQL?</h3>\n<p>SQL (Structured Query Language) is a standard language for storing, manipulating, and retrieving data in relational database management systems.</p>\n\n<h3>SQL Categories:</h3>\n<ul>\n    <li><strong>DQL:</strong> Data Query Language (SELECT)</li>\n    <li><strong>DML:</strong> Data Manipulation Language (INSERT, UPDATE, DELETE)</li>\n    <li><strong>DDL:</strong> Data Definition Language (CREATE, ALTER, DROP)</li>\n    <li><strong>DCL:</strong> Data Control Language (GRANT, REVOKE)</li>\n</ul>" },
            { id: "select", title: "SQL SELECT", type: "basics", code: "-- Select all columns\nSELECT * FROM customers;\n\n-- Select specific columns\nSELECT customer_id, customer_name, city FROM customers;\n\n-- Use aliases\nSELECT customer_name AS name, city AS location FROM customers;\n\n-- Select distinct values\nSELECT DISTINCT city FROM customers;\n\n-- Limit results (MySQL)\nSELECT * FROM products LIMIT 10;\n\n-- Offset results\nSELECT * FROM products LIMIT 10 OFFSET 20;", content: "<h3>SQL SELECT Statement</h3>\n<p>The SELECT statement is used to select data from a database. The data is returned in a result table called a result-set.</p>\n\n<h3>SELECT Clauses:</h3>\n<ul>\n    <li><strong>SELECT:</strong> Specify columns</li>\n    <li><strong>FROM:</strong> Specify table</li>\n    <li><strong>DISTINCT:</strong> Unique values only</li>\n    <li><strong>LIMIT/OFFSET:</strong> Pagination</li>\n    <li><strong>AS:</strong> Column aliases</li>\n</ul>" },
            { id: "where", title: "SQL WHERE", type: "basics", code: "-- Basic WHERE clause\nSELECT * FROM employees WHERE department = 'Sales';\n\n-- Comparison operators\nSELECT * FROM products WHERE price >= 100;\nSELECT * FROM orders WHERE quantity != 0;\n\n-- Logical operators\nSELECT * FROM employees \nWHERE salary > 50000 AND department = 'IT';\n\nSELECT * FROM employees \nWHERE salary > 80000 OR department = 'Management';\n\nSELECT * FROM employees \nWHERE NOT department = 'HR';", content: "<h3>SQL WHERE Clause</h3>\n<p>The WHERE clause is used to filter records. It extracts only those records that fulfill a specified condition.</p>\n\n<h3>Comparison Operators:</h3>\n<ul>\n    <li><strong>=</strong> Equal</li>\n    <li><strong>!= or <></strong> Not equal</li>\n    <li><strong>></strong> Greater than</li>\n    <li><strong><</strong> Less than</li>\n    <li><strong>>=</strong> Greater than or equal</li>\n    <li><strong><=</strong> Less than or equal</li>\n</ul>" },
            { id: "joins", title: "SQL JOINs", type: "advanced", code: "-- INNER JOIN (only matching rows)\nSELECT orders.order_id, customers.customer_name\nFROM orders\nINNER JOIN customers ON orders.customer_id = customers.customer_id;\n\n-- LEFT JOIN (all from left + matching from right)\nSELECT customers.customer_name, orders.order_id\nFROM customers\nLEFT JOIN orders ON customers.customer_id = orders.customer_id;\n\n-- RIGHT JOIN (all from right + matching from left)\nSELECT * FROM table1\nRIGHT JOIN table2 ON table1.id = table2.id;\n\n-- FULL JOIN (all rows)\nSELECT * FROM table1\nFULL OUTER JOIN table2 ON table1.id = table2.id;", content: "<h3>SQL JOINs</h3>\n<p>JOINs are used to combine rows from two or more tables based on a related column between them.</p>\n\n<h3>Join Types:</h3>\n<ul>\n    <li><strong>INNER:</strong> Only matching rows</li>\n    <li><strong>LEFT:</strong> All left + matching right</li>\n    <li><strong>RIGHT:</strong> All right + matching left</li>\n    <li><strong>FULL:</strong> All rows when there is a match</li>\n    <li><strong>CROSS:</strong> Cartesian product</li>\n</ul>" },
            { id: "aggregates", title: "SQL Aggregate Functions", type: "advanced", code: "-- COUNT - Count rows\nSELECT COUNT(*) FROM employees;\nSELECT COUNT(DISTINCT department) FROM employees;\n\n-- SUM - Calculate total\nSELECT SUM(salary) FROM employees;\n\n-- AVG - Calculate average\nSELECT AVG(salary) FROM employees;\n\n-- MIN/MAX - Find extreme values\nSELECT MIN(salary), MAX(salary) FROM employees;\n\n-- GROUP BY\nSELECT department, AVG(salary) as avg_salary\nFROM employees\nGROUP BY department;\n\n-- HAVING (filter groups)\nSELECT department, AVG(salary)\nFROM employees\nGROUP BY department\nHAVING AVG(salary) > 60000;", content: "<h3>SQL Aggregate Functions</h3>\n<p>Aggregate functions perform a calculation on a set of values and return a single value.</p>\n\n<h3>Aggregate Functions:</h3>\n<ul>\n    <li><strong>COUNT()</strong> - Count rows</li>\n    <li><strong>SUM()</strong> - Sum of values</li>\n    <li><strong>AVG()</strong> - Average value</li>\n    <li><strong>MIN()</strong> - Minimum value</li>\n    <li><strong>MAX()</strong> - Maximum value</li>\n</ul>" },
            { id: "subqueries", title: "SQL Subqueries", type: "advanced", code: "-- Subquery in WHERE\nSELECT * FROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);\n\n-- Subquery in FROM\nSELECT department, avg_salary\nFROM (SELECT department, AVG(salary) as avg_salary\n      FROM employees\n      GROUP BY department) AS dept_avg;\n\n-- Subquery in SELECT\nSELECT employee_name,\n       (SELECT MAX(salary) FROM employees) as max_salary\nFROM employees;\n\n-- EXISTS\nSELECT * FROM departments d\nWHERE EXISTS (SELECT * FROM employees e\n              WHERE e.department_id = d.id);", content: "<h3>SQL Subqueries</h3>\n<p>A subquery is a SQL query nested inside a larger query. Subqueries can be used in SELECT, FROM, WHERE, and HAVING clauses.</p>\n\n<h3>Subquery Types:</h3>\n<ul>\n    <li><strong>Single-row:</strong> Returns one row</li>\n    <li><strong>Multi-row:</strong> Returns multiple rows</li>\n    <li><strong>Correlated:</strong> References outer query</li>\n    <li><strong>Nested:</strong> Multiple subqueries</li>\n</ul>" },
            { id: "indexes", title: "SQL Indexes", type: "advanced", code: "-- Create Index\nCREATE INDEX idx_employee_name \nON employees(last_name, first_name);\n\n-- Unique Index\nCREATE UNIQUE INDEX idx_email \nON users(email);\n\n-- Composite Index\nCREATE INDEX idx_composite \nON orders(customer_id, order_date);\n\n-- Drop Index\nDROP INDEX idx_employee_name;\n\n-- Show Indexes\nSHOW INDEX FROM employees;", content: "<h3>SQL Indexes</h3>\n<p>Indexes are used to speed up data retrieval operations on database tables. They work like an index in a book.</p>\n\n<h3>Index Types:</h3>\n<ul>\n    <li><strong>Single-column:</strong> Index on one column</li>\n    <li><strong>Composite:</strong> Index on multiple columns</li>\n    <li><strong>Unique:</strong> Ensures unique values</li>\n    <li><strong>Full-text:</strong> Text search optimization</li>\n</ul>" },
            { id: "transactions", title: "SQL Transactions", type: "advanced", code: "-- Start Transaction\nBEGIN TRANSACTION;\n\n-- Execute operations\nUPDATE accounts SET balance = balance - 1000 \nWHERE account_id = 1;\n\nUPDATE accounts SET balance = balance + 1000 \nWHERE account_id = 2;\n\n-- Commit (save changes)\nCOMMIT;\n\n-- Rollback (undo changes)\nROLLBACK;\n\n-- Savepoint\nSAVEPOINT sp1;\nROLLBACK TO sp1;", content: "<h3>SQL Transactions</h3>\n<p>A transaction is a logical unit of work that is either completely executed or not executed at all. Transactions follow ACID properties.</p>\n\n<h3>ACID Properties:</h3>\n<ul>\n    <li><strong>Atomicity:</strong> All or nothing</li>\n    <li><strong>Consistency:</strong> Valid state</li>\n    <li><strong>Isolation:</strong> Concurrent access</li>\n    <li><strong>Durability:</strong> Permanent changes</li>\n</ul>" },
            { id: "practice1", title: "SQL Practice", type: "practice", code: "-- Practice: Complex Query\n-- Find the top 5 employees with highest salary\n-- in each department who joined after 2020\n\nSELECT department, employee_name, salary, join_date\nFROM employees e1\nWHERE (\n    SELECT COUNT(*)\n    FROM employees e2\n    WHERE e2.department = e1.department\n    AND e2.salary >= e1.salary\n) <= 5\nAND join_date > '2020-01-01'\nORDER BY department, salary DESC;", content: "<h3>Practice: Complex Queries</h3>\n<p>Solve this complex SQL query challenge:</p>\n<ol>\n    <li>Find top 5 highest-paid employees per department</li>\n    <li>Only include employees who joined after 2020</li>\n    <li>Order by department and salary</li>\n    <li>Use correlated subquery for ranking</li>\n</ol>" }
        ]
    },
    dsa: {
        title: "DSA ",
        icon: "<i class='fas fa-sitemap' style='color: #ffa500;'></i>",
        topics: [
            { id: "arrays", title: "Arrays", type: "basics", code: "// Array Operations\nclass ArrayOperations {\n    // Linear Search\n    public static int linearSearch(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) return i;\n        }\n        return -1;\n    }\n    \n    // Binary Search (sorted array)\n    public static int binarySearch(int[] arr, int target) {\n        int left = 0, right = arr.length - 1;\n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (arr[mid] == target) return mid;\n            else if (arr[mid] < target) left = mid + 1;\n            else right = mid - 1;\n        }\n        return -1;\n    }\n}", content: "<h3>Arrays</h3>\n<p>An array is a collection of elements stored at contiguous memory locations. Arrays provide O(1) access time but O(n) insertion and deletion.</p>\n\n<h3>Array Operations:</h3>\n<ul>\n    <li><strong>Access:</strong> O(1)</li>\n    <li><strong>Search:</strong> O(n) linear, O(log n) binary</li>\n    <li><strong>Insertion:</strong> O(n)</li>\n    <li><strong>Deletion:</strong> O(n)</li>\n</ul>\n\n<h3>When to Use Arrays:</h3>\n<ul>\n    <li>Fixed size known in advance</li>\n    <li>Random access needed</li>\n    <li>Memory efficiency important</li>\n</ul>" },
            { id: "linkedlist", title: "Linked Lists", type: "basics", code: "// Singly Linked List\nclass Node {\n    int data;\n    Node next;\n    \n    Node(int data) {\n        this.data = data;\n        this.next = null;\n    }\n}\n\nclass LinkedList {\n    Node head;\n    \n    // Add at end\n    void append(int data) {\n        Node newNode = new Node(data);\n        if (head == null) {\n            head = newNode;\n            return;\n        }\n        Node current = head;\n        while (current.next != null) {\n            current = current.next;\n        }\n        current.next = newNode;\n    }\n    \n    // Delete from front\n    int deleteFront() {\n        if (head == null) return -1;\n        int data = head.data;\n        head = head.next;\n        return data;\n    }\n}", content: "<h3>Linked Lists</h3>\n<p>A linked list is a linear data structure where elements are stored in nodes. Each node contains data and a reference to the next node.</p>\n\n<h3>Types of Linked Lists:</h3>\n<ul>\n    <li><strong>Singly:</strong> One direction</li>\n    <li><strong>Doubly:</strong> Both directions</li>\n    <li><strong>Circular:</strong> Last points to first</li>\n</ul>\n\n<h3>Operations:</h3>\n<ul>\n    <li><strong>Insertion:</strong> O(1) at head</li>\n    <li><strong>Deletion:</strong> O(1) at head</li>\n    <li><strong>Search:</strong> O(n)</li>\n</ul>" },
            { id: "stacks", title: "Stacks", type: "basics", code: "// Stack using Array\nclass Stack {\n    private int[] arr;\n    private int top;\n    private int capacity;\n    \n    Stack(int size) {\n        arr = new int[size];\n        capacity = size;\n        top = -1;\n    }\n    \n    // Push\n    void push(int x) {\n        if (top == capacity - 1) {\n            System.out.println(\"Stack Overflow\");\n            return;\n        }\n        arr[++top] = x;\n    }\n    \n    // Pop\n    int pop() {\n        if (top == -1) {\n            System.out.println(\"Stack Underflow\");\n            return -1;\n        }\n        return arr[top--];\n    }\n    \n    // Peek\n    int peek() {\n        if (top == -1) return -1;\n        return arr[top];\n    }\n    \n    boolean isEmpty() {\n        return top == -1;\n    }\n}", content: "<h3>Stacks</h3>\n<p>A stack is a LIFO (Last In First Out) data structure. The last element added is the first to be removed.</p>\n\n<h3>Stack Operations:</h3>\n<ul>\n    <li><strong>push():</strong> Add element to top</li>\n    <li><strong>pop():</strong> Remove element from top</li>\n    <li><strong>peek():</strong> View top element</li>\n    <li><strong>isEmpty():</strong> Check if empty</li>\n</ul>\n\n<h3>Applications:</h3>\n<ul>\n    <li>Expression evaluation</li>\n    <li>Function call management</li>\n    <li>Undo/Redo operations</li>\n    <li>Parentheses matching</li>\n</ul>" },
            { id: "queues", title: "Queues", type: "basics", code: "// Queue using Array (Circular)\nclass Queue {\n    private int[] arr;\n    private int front, rear, size, capacity;\n    \n    Queue(int cap) {\n        arr = new int[cap];\n        capacity = cap;\n        front = 0;\n        rear = -1;\n        size = 0;\n    }\n    \n    // Enqueue\n    void enqueue(int x) {\n        if (size == capacity) {\n            System.out.println(\"Queue Full\");\n            return;\n        }\n        rear = (rear + 1) % capacity;\n        arr[rear] = x;\n        size++;\n    }\n    \n    // Dequeue\n    int dequeue() {\n        if (size == 0) {\n            System.out.println(\"Queue Empty\");\n            return -1;\n        }\n        int x = arr[front];\n        front = (front + 1) % capacity;\n        size--;\n        return x;\n    }\n}", content: "<h3>Queues</h3>\n<p>A queue is a FIFO (First In First Out) data structure. The first element added is the first to be removed.</p>\n\n<h3>Queue Operations:</h3>\n<ul>\n    <li><strong>enqueue():</strong> Add to rear</li>\n    <li><strong>dequeue():</strong> Remove from front</li>\n    <li><strong>front():</strong> View front element</li>\n    <li><strong>rear():</strong> View rear element</li>\n</ul>\n\n<h3>Types of Queues:</h3>\n<ul>\n    <li><strong>Simple Queue:</strong> Basic FIFO</li>\n    <li><strong>Circular Queue:</strong> Wrap around</li>\n    <li><strong>Priority Queue:</strong> Based on priority</li>\n    <li><strong>Deque:</strong> Double-ended</li>\n</ul>" },
            { id: "trees", title: "Binary Trees", type: "advanced", code: "// Binary Tree Node\nclass TreeNode {\n    int val;\n    TreeNode left, right;\n    \n    TreeNode(int val) {\n        this.val = val;\n        this.left = null;\n        this.right = null;\n    }\n}\n\nclass BinaryTree {\n    TreeNode root;\n    \n    // Inorder Traversal (Left, Root, Right)\n    void inorder(TreeNode node) {\n        if (node == null) return;\n        inorder(node.left);\n        System.out.print(node.val + \" \");\n        inorder(node.right);\n    }\n    \n    // Preorder Traversal (Root, Left, Right)\n    void preorder(TreeNode node) {\n        if (node == null) return;\n        System.out.print(node.val + \" \");\n        preorder(node.left);\n        preorder(node.right);\n    }\n    \n    // Postorder Traversal (Left, Right, Root)\n    void postorder(TreeNode node) {\n        if (node == null) return;\n        postorder(node.left);\n        postorder(node.right);\n        System.out.print(node.val + \" \");\n    }\n}", content: "<h3>Binary Trees</h3>\n<p>A binary tree is a hierarchical data structure where each node has at most two children: left child and right child.</p>\n\n<h3>Tree Traversals:</h3>\n<ul>\n    <li><strong>Inorder:</strong> Left - Root - Right</li>\n    <li><strong>Preorder:</strong> Root - Left - Right</li>\n    <li><strong>Postorder:</strong> Left - Right - Root</li>\n    <li><strong>Level Order:</strong> Level by level</li>\n</ul>\n\n<h3>Tree Types:</h3>\n<ul>\n    <li><strong>Full:</strong> 0 or 2 children</li>\n    <li><strong>Complete:</strong> All levels filled</li>\n    <li><strong>Perfect:</strong> All leaves same depth</li>\n    <li><strong>Balanced:</strong> Height balanced</li>\n</ul>" },
            { id: "bst", title: "Binary Search Trees", type: "advanced", code: "// BST Operations\nclass BST {\n    TreeNode root;\n    \n    // Insert\n    TreeNode insert(TreeNode node, int val) {\n        if (node == null) return new TreeNode(val);\n        \n        if (val < node.val) {\n            node.left = insert(node.left, val);\n        } else if (val > node.val) {\n            node.right = insert(node.right, val);\n        }\n        return node;\n    }\n    \n    // Search\n    boolean search(TreeNode node, int val) {\n        if (node == null) return false;\n        if (val == node.val) return true;\n        return val < node.val ? \n            search(node.left, val) : \n            search(node.right, val);\n    }\n    \n    // Delete\n    TreeNode delete(TreeNode node, int val) {\n        if (node == null) return null;\n        \n        if (val < node.val) {\n            node.left = delete(node.left, val);\n        } else if (val > node.val) {\n            node.right = delete(node.right, val);\n        } else {\n            // Node with one child\n            if (node.left == null) return node.right;\n            if (node.right == null) return node.left;\n            \n            // Two children: get successor\n            node.val = minValue(node.right);\n            node.right = delete(node.right, node.val);\n        }\n        return node;\n    }\n    \n    int minValue(TreeNode node) {\n        int min = node.val;\n        while (node.left != null) {\n            min = node.left.val;\n            node = node.left;\n        }\n        return min;\n    }\n}", content: "<h3>Binary Search Trees (BST)</h3>\n<p>A BST is a binary tree where for each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater.</p>\n\n<h3>BST Properties:</h3>\n<ul>\n    <li><strong>Search:</strong> O(log n) average, O(n) worst</li>\n    <li><strong>Insert:</strong> O(log n) average, O(n) worst</li>\n    <li><strong>Delete:</strong> O(log n) average, O(n) worst</li>\n    <li><strong>Space:</strong> O(n)</li>\n</ul>\n\n<h3>Balanced BST:</h3>\n<ul>\n    <li>AVL Trees</li>\n    <li>Red-Black Trees</li>\n    <li>B-Trees</li>\n</ul>" },
            { id: "graphs", title: "Graphs", type: "advanced", code: "// Graph using Adjacency List\nclass Graph {\n    private int V;  // Number of vertices\n    private LinkedList<Integer>[] adj;\n    \n    Graph(int v) {\n        V = v;\n        adj = new LinkedList[V];\n        for (int i = 0; i < V; i++) {\n            adj[i] = new LinkedList<>();\n        }\n    }\n    \n    // Add edge (undirected)\n    void addEdge(int u, int v) {\n        adj[u].add(v);\n        adj[v].add(u);\n    }\n    \n    // BFS\n    void BFS(int start) {\n        boolean[] visited = new boolean[V];\n        Queue<Integer> q = new Queue<>(V);\n        q.enqueue(start);\n        visited[start] = true;\n        \n        while (!q.isEmpty()) {\n            int s = q.dequeue();\n            System.out.print(s + \" \");\n            \n            for (int neighbor : adj[s]) {\n                if (!visited[neighbor]) {\n                    visited[neighbor] = true;\n                    q.enqueue(neighbor);\n                }\n            }\n        }\n    }\n    \n    // DFS (recursive)\n    void DFS(int v, boolean[] visited) {\n        visited[v] = true;\n        System.out.print(v + \" \");\n        \n        for (int neighbor : adj[v]) {\n            if (!visited[neighbor]) {\n                DFS(neighbor, visited);\n            }\n        }\n    }\n}", content: "<h3>Graphs</h3>\n<p>A graph is a non-linear data structure consisting of nodes (vertices) and edges connecting them.</p>\n\n<h3>Graph Representations:</h3>\n<ul>\n    <li><strong>Adjacency List:</strong> Memory efficient</li>\n    <li><strong>Adjacency Matrix:</strong> Fast edge lookup</li>\n</ul>\n\n<h3>Graph Traversal:</h3>\n<ul>\n    <li><strong>BFS:</strong> Level by level (queue)</li>\n    <li><strong>DFS:</strong> Depth first (stack/recursion)</li>\n</ul>\n\n<h3>Graph Types:</h3>\n<ul>\n    <li><strong>Directed/Undirected</strong></li>\n    <li><strong>Weighted/Unweighted</strong></li>\n    <li><strong>Cyclic/Acyclic</strong></li>\n</ul>" },
            { id: "sorting", title: "Sorting Algorithms", type: "advanced", code: "// Quick Sort\nclass QuickSort {\n    void quickSort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            quickSort(arr, low, pi - 1);\n            quickSort(arr, pi + 1, high);\n        }\n    }\n    \n    int partition(int[] arr, int low, int high) {\n        int pivot = arr[high];\n        int i = low - 1;\n        \n        for (int j = low; j < high; j++) {\n            if (arr[j] < pivot) {\n                i++;\n                swap(arr, i, j);\n            }\n        }\n        swap(arr, i + 1, high);\n        return i + 1;\n    }\n    \n    void swap(int[] arr, int i, int j) {\n        int temp = arr[i];\n        arr[i] = arr[j];\n        arr[j] = temp;\n    }\n}\n\n// Merge Sort\nclass MergeSort {\n    void mergeSort(int[] arr, int l, int r) {\n        if (l < r) {\n            int m = l + (r - l) / 2;\n            mergeSort(arr, l, m);\n            mergeSort(arr, m + 1, r);\n            merge(arr, l, m, r);\n        }\n    }\n    \n    void merge(int[] arr, int l, int m, int r) {\n        int n1 = m - l + 1;\n        int n2 = r - m;\n        int[] L = new int[n1];\n        int[] R = new int[n2];\n        \n        for (int i = 0; i < n1; i++) L[i] = arr[l + i];\n        for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];\n        \n        int i = 0, j = 0, k = l;\n        while (i < n1 && j < n2) {\n            arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];\n        }\n        while (i < n1) arr[k++] = L[i++];\n        while (j < n2) arr[k++] = R[j++];\n    }\n}", content: "<h3>Sorting Algorithms</h3>\n<p>Sorting algorithms arrange elements in a specific order. Different algorithms have different time and space complexities.</p>\n\n<h3>Comparison Sorts:</h3>\n<ul>\n    <li><strong>Bubble Sort:</strong> O(n²)</li>\n    <li><strong>Selection Sort:</strong> O(n²)</li>\n    <li><strong>Insertion Sort:</strong> O(n²)</li>\n    <li><strong>Merge Sort:</strong> O(n log n)</li>\n    <li><strong>Quick Sort:</strong> O(n log n) avg</li>\n    <li><strong>Heap Sort:</strong> O(n log n)</li>\n</ul>\n\n<h3>Non-Comparison Sorts:</h3>\n<ul>\n    <li><strong>Counting Sort:</strong> O(n + k)</li>\n    <li><strong>Radix Sort:</strong> O(nk)</li>\n    <li><strong>Bucket Sort:</strong> O(n + k)</li>\n</ul>" },
            { id: "dp", title: "Dynamic Programming", type: "advanced", code: "// Fibonacci with DP (Memoization)\nclass Fibonacci {\n    long[] memo = new long[100];\n    \n    long fib(int n) {\n        if (memo[n] != 0) return memo[n];\n        if (n == 0) return 0;\n        if (n == 1) return 1;\n        memo[n] = fib(n - 1) + fib(n - 2);\n        return memo[n];\n    }\n}\n\n// Bottom-up DP (Tabulation)\nclass Knapsack {\n    int knapsack(int W, int[] wt, int[] val, int n) {\n        int[][] dp = new int[n + 1][W + 1];\n        \n        for (int i = 1; i <= n; i++) {\n            for (int w = 1; w <= W; w++) {\n                if (wt[i - 1] <= w) {\n                    dp[i][w] = Math.max(\n                        val[i - 1] + dp[i - 1][w - wt[i - 1]],\n                        dp[i - 1][w]\n                    );\n                } else {\n                    dp[i][w] = dp[i - 1][w];\n                }\n            }\n        }\n        return dp[n][W];\n    }\n}\n\n// Longest Common Subsequence\nclass LCS {\n    int lcs(String X, String Y) {\n        int m = X.length(), n = Y.length();\n        int[][] dp = new int[m + 1][n + 1];\n        \n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (X.charAt(i - 1) == Y.charAt(j - 1)) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n                }\n            }\n        }\n        return dp[m][n];\n    }\n}", content: "<h3>Dynamic Programming</h3>\n<p>Dynamic Programming is an optimization technique that breaks problems into overlapping subproblems and stores their solutions to avoid redundant calculations.</p>\n\n<h3>DP Approaches:</h3>\n<ul>\n    <li><strong>Top-down (Memoization):</strong> Recursive with caching</li>\n    <li><strong>Bottom-up (Tabulation):</strong> Iterative with table</li>\n</ul>\n\n<h3>Classic DP Problems:</h3>\n<ul>\n    <li>Fibonacci</li>\n    <li>0/1 Knapsack</li>\n    <li>Longest Common Subsequence</li>\n    <li>Edit Distance</li>\n    <li>Coin Change</li>\n    <li>Longest Increasing Subsequence</li>\n</ul>" },
            { id: "practice1", title: "DSA Practice", type: "practice", code: "// Practice: Detect Cycle in Linked List\nclass Solution {\n    // Floyd Cycle Detection Algorithm\n    public boolean hasCycle(ListNode head) {\n        if (head == null) return false;\n        \n        ListNode slow = head;\n        ListNode fast = head;\n        \n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            \n            if (slow == fast) {\n                return true;  // Cycle detected\n            }\n        }\n        return false;\n    }\n    \n    // Find middle of linked list\n    public ListNode middleNode(ListNode head) {\n        ListNode slow = head;\n        ListNode fast = head;\n        \n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return slow;\n    }\n}", content: "<h3>Practice: Linked List Problems</h3>\n<p>Solve these classic linked list problems:</p>\n<ol>\n    <li>Detect if a linked list has a cycle</li>\n    <li>Find the middle node</li>\n    <li>Reverse a linked list</li>\n    <li>Remove nth node from end</li>\n    <li>Merge two sorted lists</li>\n</ol>" },
        
          
        {
            id: "complexity-analysis",
            title: "Time & Space Complexity Analysis",
            type: "basics",
            code: `// Big O Notation Examples
            // Constant Time: O(1)
            function getElement(arr, index) {
                return arr[index];  // Single operation
            }
            
            // Linear Time: O(n)
            function findMax(arr) {
                let max = arr[0];
                for(let i = 1; i < arr.length; i++) {
                    if(arr[i] > max) max = arr[i];
                }
                return max;  // n operations
            }
            
            // Quadratic Time: O(n²)
            function findPairs(arr) {
                for(let i = 0; i < arr.length; i++) {
                    for(let j = 0; j < arr.length; j++) {
                        console.log(arr[i], arr[j]);
                    }
                }
            }`,
            content: `<h2>Time & Space Complexity Analysis</h2>
            
            <h3>1. Introduction to Algorithm Analysis</h3>
            <p><strong>Algorithm analysis</strong> is the process of determining the computational complexity of algorithms. It helps us predict how an algorithm will perform as the input size grows, allowing us to choose the most efficient algorithm for a given problem.</p>
            
            <h3>2. Asymptotic Notations</h3>
            <p>Asymptotic notations are mathematical tools used to describe the limiting behavior of functions. In computer science, we use them to describe the performance of algorithms.</p>
            
            <h4>2.1 Big O Notation (Upper Bound)</h4>
            <p><strong>Definition:</strong> A function f(n) is O(g(n)) if there exist positive constants c and n₀ such that 0 ≤ f(n) ≤ c·g(n) for all n ≥ n₀.</p>
            <p><strong>Interpretation:</strong> Big O describes the <em>worst-case</em> scenario. It provides an upper bound on the growth rate of the algorithm.</p>
            
            <h4>2.2 Omega Notation (Lower Bound)</h4>
            <p><strong>Definition:</strong> A function f(n) is Ω(g(n)) if there exist positive constants c and n₀ such that 0 ≤ c·g(n) ≤ f(n) for all n ≥ n₀.</p>
            <p><strong>Interpretation:</strong> Omega describes the <em>best-case</em> scenario. It provides a lower bound on the growth rate.</p>
            
            <h4>2.3 Theta Notation (Tight Bound)</h4>
            <p><strong>Definition:</strong> A function f(n) is Θ(g(n)) if there exist positive constants c₁, c₂, and n₀ such that 0 ≤ c₁·g(n) ≤ f(n) ≤ c₂·g(n) for all n ≥ n₀.</p>
            <p><strong>Interpretation:</strong> Theta describes both upper and lower bounds. It means the function grows at the same rate as g(n).</p>
            
            <h3>3. Common Time Complexities</h3>
            
            <h4>3.1 Constant Time: O(1)</h4>
            <p><strong>Definition:</strong> The running time does not depend on the input size.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Operations take the same amount of time regardless of input size</li>
                    <li>Examples: Array indexing, arithmetic operations, accessing a variable</li>
                </ul>
            </p>
            
            <h4>3.2 Logarithmic Time: O(log n)</h4>
            <p><strong>Definition:</strong> The running time grows logarithmically with the input size.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>The problem size is halved at each step</li>
                    <li>Base of logarithm doesn't matter in asymptotic analysis</li>
                    <li>Examples: Binary search, operations on balanced binary trees</li>
                </ul>
            </p>
            
            <h4>3.3 Linear Time: O(n)</h4>
            <p><strong>Definition:</strong> The running time grows linearly with the input size.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Single loop through the input</li>
                    <li>Examples: Linear search, finding maximum/minimum in array</li>
                </ul>
            </p>
            
            <h4>3.4 Linearithmic Time: O(n log n)</h4>
            <p><strong>Definition:</strong> The running time grows in proportion to n log n.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Common in efficient sorting algorithms</li>
                    <li>Examples: Merge sort, heap sort, quick sort (average case)</li>
                </ul>
            </p>
            
            <h4>3.5 Quadratic Time: O(n²)</h4>
            <p><strong>Definition:</strong> The running time grows quadratically with the input size.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Nested loops over the input</li>
                    <li>Examples: Bubble sort, selection sort, insertion sort</li>
                </ul>
            </p>
            
            <h4>3.6 Exponential Time: O(2ⁿ)</h4>
            <p><strong>Definition:</strong> The running time doubles with each additional element in the input.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Brute-force solutions to NP-complete problems</li>
                    <li>Examples: Solving the traveling salesman problem via brute force</li>
                </ul>
            </p>
            
            <h4>3.7 Factorial Time: O(n!)</h4>
            <p><strong>Definition:</strong> The running time grows factorially with the input size.</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Generating all permutations</li>
                    <li>Examples: Solving the traveling salesman problem by trying all permutations</li>
                </ul>
            </p>
            
            <h3>4. Space Complexity</h3>
            <p><strong>Definition:</strong> Space complexity measures the total amount of memory an algorithm needs relative to the input size.</p>
            
            <h4>4.1 Auxiliary Space vs Total Space</h4>
            <p><strong>Auxiliary Space:</strong> Extra space or temporary space used by an algorithm.</p>
            <p><strong>Total Space:</strong> Space required by algorithm including input storage.</p>
            
            <h4>4.2 Common Space Complexities</h4>
            <ul>
                <li><strong>O(1):</strong> Constant space - uses fixed amount of memory</li>
                <li><strong>O(n):</strong> Linear space - memory usage grows linearly with input</li>
                <li><strong>O(n²):</strong> Quadratic space - memory usage grows quadratically</li>
            </ul>
            
            <h3>5. Rules for Complexity Analysis</h3>
            
            <h4>5.1 Rule of Sum</h4>
            <p>If an algorithm consists of sequential blocks, the total time complexity is the sum of complexities of individual blocks.</p>
            <p><strong>Example:</strong> O(n) + O(n²) = O(n²) (take the dominant term)</p>
            
            <h4>5.2 Rule of Product</h4>
            <p>If an algorithm consists of nested blocks, the total time complexity is the product of complexities.</p>
            <p><strong>Example:</strong> O(n) × O(n) = O(n²)</p>
            
            <h4>5.3 Drop Constants</h4>
            <p>In asymptotic analysis, we ignore constant factors.</p>
            <p><strong>Example:</strong> O(2n) = O(n), O(5) = O(1)</p>
            
            <h4>5.4 Drop Non-Dominant Terms</h4>
            <p>We keep only the most significant term.</p>
            <p><strong>Example:</strong> O(n³ + n² + n) = O(n³)</p>
            
            <h3>6. Best, Average, and Worst Case Analysis</h3>
            
            <h4>6.1 Worst-Case Complexity</h4>
            <p>The maximum amount of resources an algorithm will ever need.</p>
            <p><strong>Importance:</strong> Guarantees the algorithm will never perform worse than this.</p>
            
            <h4>6.2 Best-Case Complexity</h4>
            <p>The minimum amount of resources an algorithm will need.</p>
            <p><strong>Importance:</strong> Shows the lower bound of performance.</p>
            
            <h4>6.3 Average-Case Complexity</h4>
            <p>The expected amount of resources for typical inputs.</p>
            <p><strong>Importance:</strong> Most realistic measure for practical applications.</p>
            
            <h3>7. Amortized Analysis</h3>
            <p><strong>Definition:</strong> A method for analyzing algorithms that perform a sequence of operations, where some operations may be expensive, but they occur infrequently enough that the average cost is low.</p>
            
            <h4>7.1 Aggregate Method</h4>
            <p>Determine total cost of n operations, then divide by n.</p>
            
            <h4>7.2 Accounting Method</h4>
            <p>Assign different charges to different operations.</p>
            
            <h4>7.3 Potential Method</h4>
            <p>Define a potential function that represents the prepaid work.</p>
            
            <h3>8. Practical Implications</h3>
            
            <h4>8.1 When to Optimize</h4>
            <ul>
                <li>Optimize time complexity when dealing with large datasets</li>
                <li>Optimize space complexity when memory is limited</li>
                <li>Consider both time and space trade-offs</li>
            </ul>
            
            <h4>8.2 Real-World Considerations</h4>
            <ul>
                <li>Cache performance and locality of reference</li>
                <li>Parallelization capabilities</li>
                <li>Hardware-specific optimizations</li>
                <li>Constant factors matter for small inputs</li>
            </ul>
            
            <h3>9. Comparison of Common Algorithms</h3>
            <table class="dsa-table">
                <tr>
                    <th>Algorithm</th>
                    <th>Best Case</th>
                    <th>Average Case</th>
                    <th>Worst Case</th>
                    <th>Space</th>
                </tr>
                <tr>
                    <td>Binary Search</td>
                    <td>O(1)</td>
                    <td>O(log n)</td>
                    <td>O(log n)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Merge Sort</td>
                    <td>O(n log n)</td>
                    <td>O(n log n)</td>
                    <td>O(n log n)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Quick Sort</td>
                    <td>O(n log n)</td>
                    <td>O(n log n)</td>
                    <td>O(n²)</td>
                    <td>O(log n)</td>
                </tr>
                <tr>
                    <td>Bubble Sort</td>
                    <td>O(n)</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Insertion Sort</td>
                    <td>O(n)</td>
                    <td>O(n²)</td>
                    <td>O(n²)</td>
                    <td>O(1)</td>
                </tr>
            </table>
            
            <h3>10. Master Theorem</h3>
            <p>The Master Theorem provides a cookbook solution for recurrence relations of the form:</p>
            <p><strong>T(n) = aT(n/b) + f(n)</strong></p>
            <p>Where:
                <ul>
                    <li>a ≥ 1 (number of subproblems)</li>
                    <li>b > 1 (factor by which problem size reduces)</li>
                    <li>f(n) is asymptotically positive</li>
                </ul>
            </p>
            
            <h4>10.1 Three Cases</h4>
            <p><strong>Case 1:</strong> If f(n) = O(n<sup>log<sub>b</sub>a - ε</sup>) for some ε > 0, then T(n) = Θ(n<sup>log<sub>b</sub>a</sup>)</p>
            <p><strong>Case 2:</strong> If f(n) = Θ(n<sup>log<sub>b</sub>a</sup> log<sup>k</sup>n), then T(n) = Θ(n<sup>log<sub>b</sub>a</sup> log<sup>k+1</sup>n)</p>
            <p><strong>Case 3:</strong> If f(n) = Ω(n<sup>log<sub>b</sub>a + ε</sup>) and af(n/b) ≤ cf(n), then T(n) = Θ(f(n))</p>
            
            <h3>11. Limitations of Big O Notation</h3>
            <ul>
                <li>Hides constant factors which matter for small inputs</li>
                <li>Assumes all operations take equal time</li>
                <li>Doesn't consider hardware-specific optimizations</li>
                <li>Ignores memory hierarchy effects (cache, RAM, disk)</li>
                <li>May not reflect real-world performance for moderate inputs</li>
            </ul>
            
            <h3>12. Conclusion</h3>
            <p>Complexity analysis is fundamental to computer science. While Big O provides a high-level understanding of algorithm scalability, practical implementation requires considering both asymptotic complexity and constant factors. The choice of algorithm depends on the specific requirements including input size, available memory, and performance constraints.</p>`
        },
        {
            id: "arrays",
            title: "Arrays Data Structure",
            type: "basics",
            code: `// Array Operations
            class DynamicArray {
                constructor(capacity = 10) {
                    this.arr = new Array(capacity);
                    this.size = 0;
                    this.capacity = capacity;
                }
                
                // O(1) average, O(n) worst case
                push(element) {
                    if(this.size === this.capacity) {
                        this.resize();
                    }
                    this.arr[this.size] = element;
                    this.size++;
                }
                
                // O(1)
                get(index) {
                    if(index < 0 || index >= this.size) {
                        throw new Error("Index out of bounds");
                    }
                    return this.arr[index];
                }
                
                // O(n)
                insert(index, element) {
                    if(index < 0 || index > this.size) {
                        throw new Error("Index out of bounds");
                    }
                    
                    if(this.size === this.capacity) {
                        this.resize();
                    }
                    
                    // Shift elements to right
                    for(let i = this.size; i > index; i--) {
                        this.arr[i] = this.arr[i-1];
                    }
                    
                    this.arr[index] = element;
                    this.size++;
                }
                
                // O(n)
                remove(index) {
                    if(index < 0 || index >= this.size) {
                        throw new Error("Index out of bounds");
                    }
                    
                    // Shift elements to left
                    for(let i = index; i < this.size - 1; i++) {
                        this.arr[i] = this.arr[i+1];
                    }
                    
                    this.size--;
                    return this.arr[index];
                }
                
                // O(n)
                resize() {
                    this.capacity *= 2;
                    const newArr = new Array(this.capacity);
                    
                    for(let i = 0; i < this.size; i++) {
                        newArr[i] = this.arr[i];
                    }
                    
                    this.arr = newArr;
                }
            }`,
            content: `<h2>Arrays Data Structure</h2>
            
            <h3>1. Introduction to Arrays</h3>
            <p><strong>Definition:</strong> An array is a linear data structure that stores elements in contiguous memory locations. Each element can be accessed directly using its index.</p>
            
            <h4>1.1 Fundamental Properties</h4>
            <ul>
                <li><strong>Homogeneous:</strong> All elements are of the same data type</li>
                <li><strong>Contiguous Memory:</strong> Elements are stored in adjacent memory locations</li>
                <li><strong>Random Access:</strong> Any element can be accessed in O(1) time using its index</li>
                <li><strong>Fixed Size:</strong> Traditional arrays have a fixed size determined at declaration</li>
            </ul>
            
            <h4>1.2 Memory Representation</h4>
            <p>For an array arr of size n with base address B and element size S:</p>
            <p>Address of arr[i] = B + i × S</p>
            
            <h3>2. Types of Arrays</h3>
            
            <h4>2.1 One-Dimensional Arrays</h4>
            <p><strong>Definition:</strong> A linear collection of elements accessed by a single index.</p>
            <p><strong>Declaration (C++):</strong> int arr[5];</p>
            <p><strong>Memory Layout:</strong> [a₀][a₁][a₂][a₃][a₄]</p>
            
            <h4>2.2 Multi-Dimensional Arrays</h4>
            <p><strong>2.2.1 Two-Dimensional Arrays</strong></p>
            <p><strong>Definition:</strong> A matrix-like structure with rows and columns.</p>
            <p><strong>Declaration:</strong> int matrix[3][4];</p>
            
            <p><strong>Memory Representation:</strong></p>
            <ul>
                <li><strong>Row-major order:</strong> Elements stored row by row
                    <br>Address of matrix[i][j] = B + (i × cols + j) × S
                </li>
                <li><strong>Column-major order:</strong> Elements stored column by column
                    <br>Address of matrix[i][j] = B + (j × rows + i) × S
                </li>
            </ul>
            
            <p><strong>2.2.2 N-Dimensional Arrays</strong></p>
            <p>General formula for n-dimensional array with dimensions d₁×d₂×...×dₙ:</p>
            <p>Address of arr[i₁][i₂]...[iₙ] = B + (i₁×d₂×d₃×...×dₙ + i₂×d₃×...×dₙ + ... + iₙ₋₁×dₙ + iₙ) × S</p>
            
            <h4>2.3 Dynamic Arrays</h4>
            <p><strong>Definition:</strong> Arrays that can grow or shrink in size during program execution.</p>
            <p><strong>Implementation:</strong> Typically implemented by allocating a larger array when needed and copying elements.</p>
            
            <h3>3. Array Operations and Their Complexities</h3>
            
            <h4>3.1 Access Operation</h4>
            <p><strong>Time Complexity:</strong> O(1)</p>
            <p><strong>Process:</strong> Direct memory access using index calculation</p>
            
            <h4>3.2 Search Operations</h4>
            <p><strong>3.2.1 Linear Search</strong></p>
            <p><strong>Time Complexity:</strong> O(n) worst case, O(1) best case</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <p><strong>3.2.2 Binary Search (for sorted arrays)</strong></p>
            <p><strong>Time Complexity:</strong> O(log n)</p>
            <p><strong>Prerequisite:</strong> Array must be sorted</p>
            
            <h4>3.3 Insertion Operations</h4>
            <p><strong>3.3.1 Insert at End</strong></p>
            <p><strong>Time Complexity:</strong> O(1) for dynamic arrays (amortized), O(n) for static arrays when resizing</p>
            
            <p><strong>3.3.2 Insert at Beginning/Middle</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Process:</strong> Shift all elements from insertion point to the right</p>
            
            <h4>3.4 Deletion Operations</h4>
            <p><strong>3.4.1 Delete from End</strong></p>
            <p><strong>Time Complexity:</strong> O(1)</p>
            
            <p><strong>3.4.2 Delete from Beginning/Middle</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Process:</strong> Shift all elements after deletion point to the left</p>
            
            <h4>3.5 Update Operation</h4>
            <p><strong>Time Complexity:</strong> O(1)</p>
            <p><strong>Process:</strong> Direct access and modification</p>
            
            <h3>4. Dynamic Array Implementation Details</h3>
            
            <h4>4.1 Growth Strategy</h4>
            <p><strong>Geometric Growth:</strong> Common strategy is to double the size when array is full.</p>
            <p><strong>Mathematical Analysis:</strong> With doubling strategy, amortized cost of insertion is O(1).</p>
            
            <p><strong>Proof:</strong> Consider inserting n elements into an initially empty array:
                <ul>
                    <li>Cost of regular insertions: n × O(1) = O(n)</li>
                    <li>Cost of resizing: 1 + 2 + 4 + 8 + ... + 2<sup>⌈log₂n⌉</sup> ≤ 2n = O(n)</li>
                    <li>Total cost: O(n) + O(n) = O(n)</li>
                    <li>Amortized cost per insertion: O(n)/n = O(1)</li>
                </ul>
            </p>
            
            <h4>4.2 Shrink Strategy</h4>
            <p>To avoid memory waste, arrays can shrink when occupancy falls below a certain threshold (e.g., 25%).</p>
            <p><strong>Important:</strong> Shrinking should be less aggressive than growing to avoid thrashing.</p>
            
            <h3>5. Special Types of Arrays</h3>
            
            <h4>5.1 Sorted Arrays</h4>
            <p><strong>Properties:</strong> Elements are arranged in ascending/descending order.</p>
            <p><strong>Advantages:</strong> Enables binary search (O(log n) search time).</p>
            <p><strong>Disadvantages:</strong> Insertion and deletion are O(n).</p>
            
            <h4>5.2 Bit Arrays (Bit Vectors)</h4>
            <p><strong>Definition:</strong> Arrays that store boolean values using individual bits.</p>
            <p><strong>Memory Efficiency:</strong> 8× more memory efficient than boolean arrays.</p>
            
            <h4>5.3 Parallel Arrays</h4>
            <p><strong>Definition:</strong> Multiple arrays of the same size where corresponding elements represent different attributes of the same entity.</p>
            <p><strong>Example:</strong> names[], ages[], scores[] where names[i], ages[i], scores[i] belong to the same person.</p>
            
            <h4>5.4 Sparse Arrays</h4>
            <p><strong>Definition:</strong> Arrays where most elements have the same value (usually zero).</p>
            <p><strong>Optimization:</strong> Store only non-default values with their indices.</p>
            
            <h3>6. Array Algorithms</h3>
            
            <h4>6.1 Rotation Algorithms</h4>
            <p><strong>6.1.1 Using Temporary Array</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(n)</p>
            
            <p><strong>6.1.2 Juggling Algorithm</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <p><strong>6.1.3 Reversal Algorithm</strong></p>
            <p>Steps:
                <ol>
                    <li>Reverse first d elements</li>
                    <li>Reverse remaining n-d elements</li>
                    <li>Reverse entire array</li>
                </ol>
            </p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <h4>6.2 Array Reversal</h4>
            <p><strong>Algorithm:</strong> Swap elements from ends moving toward center.</p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <h4>6.3 Finding Second Largest Element</h4>
            <p><strong>Algorithm:</strong> Track both largest and second largest while traversing.</p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <h4>6.4 Majority Element Algorithms</h4>
            <p><strong>Definition:</strong> An element appearing more than n/2 times.</p>
            
            <p><strong>6.4.1 Moore's Voting Algorithm</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <h3>7. Mathematical Properties of Array Addressing</h3>
            
            <h4>7.1 Address Calculation Formulas</h4>
            
            <p><strong>One-dimensional array:</strong></p>
            <p>Address(A[i]) = Base_Address + i × w</p>
            <p>Where w = size of each element in bytes</p>
            
            <p><strong>Two-dimensional array (row-major):</strong></p>
            <p>Address(A[i][j]) = Base_Address + (i × n + j) × w</p>
            <p>Where n = number of columns</p>
            
            <p><strong>Two-dimensional array (column-major):</strong></p>
            <p>Address(A[i][j]) = Base_Address + (j × m + i) × w</p>
            <p>Where m = number of rows</p>
            
            <h4>7.2 Generalized Formula for k-dimensional array</h4>
            <p>For array A[d₁][d₂]...[dₖ] stored in row-major order:</p>
            <p>Address(A[i₁][i₂]...[iₖ]) = B + (i₁×d₂×d₃×...×dₖ + i₂×d₃×...×dₖ + ... + iₖ₋₁×dₖ + iₖ) × w</p>
            
            <h3>8. Applications of Arrays</h3>
            
            <h4>8.1 Data Storage</h4>
            <ul>
                <li>Storing collections of homogeneous data</li>
                <li>Implementation of other data structures (stacks, queues, heaps, hash tables)</li>
                <li>Matrix representation for mathematical computations</li>
            </ul>
            
            <h4>8.2 Algorithm Implementation</h4>
            <ul>
                <li>Dynamic programming tables</li>
                <li>Lookup tables</li>
                <li>Buffer for I/O operations</li>
                <li>Temporary storage for algorithms</li>
            </ul>
            
            <h4>8.3 System Programming</h4>
            <ul>
                <li>Memory buffers</li>
                <li>Frame buffers in graphics</li>
                <li>I/O buffers</li>
            </ul>
            
            <h3>9. Advantages of Arrays</h3>
            <ul>
                <li><strong>Random Access:</strong> O(1) access time for any element</li>
                <li><strong>Cache Friendliness:</strong> Contiguous memory improves cache performance</li>
                <li><strong>Memory Efficiency:</strong> No overhead for pointers/links</li>
                <li><strong>Simplicity:</strong> Easy to understand and implement</li>
                <li><strong>Predictable Performance:</strong> Consistent access time</li>
            </ul>
            
            <h3>10. Disadvantages of Arrays</h3>
            <ul>
                <li><strong>Fixed Size:</strong> Static arrays have fixed size (dynamic arrays solve this with overhead)</li>
                <li><strong>Insertion/Deletion Cost:</strong> O(n) for beginning/middle positions</li>
                <li><strong>Memory Waste:</strong> May allocate more memory than needed</li>
                <li><strong>Homogeneous Elements:</strong> All elements must be of same type</li>
                <li><strong>Memory Fragmentation:</strong> Large arrays may cause fragmentation</li>
            </ul>
            
            <h3>11. Optimizations and Variations</h3>
            
            <h4>11.1 Circular Arrays</h4>
            <p><strong>Definition:</strong> Arrays where the last element is connected to the first element.</p>
            <p><strong>Applications:</strong> Circular buffers, queues.</p>
            <p><strong>Index Calculation:</strong> (i % n) for index i in array of size n.</p>
            
            <h4>11.2 Gap Buffers</h4>
            <p><strong>Definition:</strong> Arrays with a "gap" that allows efficient insertion/deletion at cursor position.</p>
            <p><strong>Applications:</strong> Text editors.</p>
            
            <h4>11.3 Segmented Arrays</h4>
            <p><strong>Definition:</strong> Arrays divided into segments for parallel processing.</p>
            
            <h3>12. Comparison with Other Data Structures</h3>
            <table class="dsa-table">
                <tr>
                    <th>Feature</th>
                    <th>Array</th>
                    <th>Linked List</th>
                    <th>Dynamic Array</th>
                </tr>
                <tr>
                    <td>Access Time</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Insertion (beginning)</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                    <td>O(n)</td>
                </tr>
                <tr>
                    <td>Insertion (end)</td>
                    <td>O(1)</td>
                    <td>O(1) with tail pointer</td>
                    <td>O(1) amortized</td>
                </tr>
                <tr>
                    <td>Memory Usage</td>
                    <td>Fixed</td>
                    <td>Per element overhead</td>
                    <td>May waste space</td>
                </tr>
                <tr>
                    <td>Cache Performance</td>
                    <td>Excellent</td>
                    <td>Poor</td>
                    <td>Excellent</td>
                </tr>
            </table>
            
            <h3>13. Time-Space Tradeoffs</h3>
            <p>Arrays demonstrate several important time-space tradeoffs:</p>
            <ul>
                <li><strong>Pre-allocation vs Dynamic Allocation:</strong> Static arrays save allocation time but waste space if underutilized</li>
                <li><strong>Memory vs Speed:</strong> Larger pre-allocated arrays waste memory but provide faster appends</li>
                <li><strong>Copying vs Pointers:</strong> Array resizing requires copying but provides better cache locality</li>
            </ul>
            
            <h3>14. Implementation Considerations</h3>
            
            <h4>14.1 Language-Specific Details</h4>
            <p><strong>C/C++:</strong> Raw arrays, pointer arithmetic, manual memory management</p>
            <p><strong>Java:</strong> Arrays are objects, bounds checking, ArrayList for dynamic arrays</p>
            <p><strong>Python:</strong> Lists are dynamic arrays, automatic resizing</p>
            <p><strong>JavaScript:</strong> Arrays are dynamic, can hold mixed types</p>
            
            <h4>14.2 Memory Alignment</h4>
            <p>Arrays should be aligned to memory boundaries for optimal performance. Most compilers handle this automatically.</p>
            
            <h4>14.3 Bounds Checking</h4>
            <p>Some languages (Java, C#) perform bounds checking at runtime, while others (C, C++) do not.</p>
            
            <h3>15. Advanced Topics</h3>
            
            <h4>15.1 SIMD and Vectorization</h4>
            <p>Arrays are ideal for SIMD (Single Instruction Multiple Data) operations where the same operation is performed on multiple data elements simultaneously.</p>
            
            <h4>15.2 Parallel Array Processing</h4>
            <p>Arrays can be easily partitioned for parallel processing using techniques like:
                <ul>
                    <li>OpenMP directives</li>
                    <li>GPU parallel processing (CUDA, OpenCL)</li>
                    <li>MapReduce patterns</li>
                </ul>
            </p>
            
            <h4>15.3 Array vs Pointer</h4>
            <p>In C/C++, arrays decay to pointers in many contexts, but they are not identical:
                <ul>
                    <li>sizeof(array) gives total size, sizeof(pointer) gives pointer size</li>
                    <li>Arrays cannot be reassigned, pointers can</li>
                    <li>Array names are constant pointers</li>
                </ul>
            </p>
            
            <h3>16. Conclusion</h3>
            <p>Arrays are fundamental data structures that provide efficient random access through contiguous memory allocation. While they have limitations in dynamic resizing and insertion/deletion operations, their cache efficiency and simplicity make them indispensable in computer science. Understanding arrays is crucial as they form the basis for more complex data structures and algorithms.</p>`
        },
        {
            id: "linked-lists",
            title: "Linked Lists",
            type: "basics",
            code: `// Singly Linked List Implementation
            class ListNode {
                constructor(data) {
                    this.data = data;
                    this.next = null;
                }
            }
            
            class LinkedList {
                constructor() {
                    this.head = null;
                    this.size = 0;
                }
                
                // O(1)
                insertAtBeginning(data) {
                    let newNode = new ListNode(data);
                    newNode.next = this.head;
                    this.head = newNode;
                    this.size++;
                }
                
                // O(n) without tail pointer, O(1) with tail pointer
                insertAtEnd(data) {
                    let newNode = new ListNode(data);
                    
                    if(this.head === null) {
                        this.head = newNode;
                    } else {
                        let current = this.head;
                        while(current.next !== null) {
                            current = current.next;
                        }
                        current.next = newNode;
                    }
                    this.size++;
                }
                
                // O(n)
                insertAtPosition(data, position) {
                    if(position < 0 || position > this.size) {
                        throw new Error("Invalid position");
                    }
                    
                    if(position === 0) {
                        this.insertAtBeginning(data);
                        return;
                    }
                    
                    let newNode = new ListNode(data);
                    let current = this.head;
                    let previous = null;
                    let count = 0;
                    
                    while(count < position) {
                        previous = current;
                        current = current.next;
                        count++;
                    }
                    
                    newNode.next = current;
                    previous.next = newNode;
                    this.size++;
                }
                
                // O(n)
                search(data) {
                    let current = this.head;
                    let position = 0;
                    
                    while(current !== null) {
                        if(current.data === data) {
                            return position;
                        }
                        current = current.next;
                        position++;
                    }
                    return -1;
                }
                
                // O(1) for beginning, O(n) for others
                delete(data) {
                    if(this.head === null) return false;
                    
                    // If head needs to be deleted
                    if(this.head.data === data) {
                        this.head = this.head.next;
                        this.size--;
                        return true;
                    }
                    
                    let current = this.head;
                    let previous = null;
                    
                    while(current !== null && current.data !== data) {
                        previous = current;
                        current = current.next;
                    }
                    
                    if(current === null) return false;
                    
                    previous.next = current.next;
                    this.size--;
                    return true;
                }
                
                // O(n)
                reverse() {
                    let previous = null;
                    let current = this.head;
                    let next = null;
                    
                    while(current !== null) {
                        next = current.next;
                        current.next = previous;
                        previous = current;
                        current = next;
                    }
                    
                    this.head = previous;
                }
            }`,
            content: `<h2>Linked Lists Data Structure</h2>
            
            <h3>1. Introduction to Linked Lists</h3>
            <p><strong>Definition:</strong> A linked list is a linear data structure where elements (called nodes) are stored at non-contiguous memory locations. Each node contains data and a reference (link) to the next node in the sequence.</p>
            
            <h4>1.1 Fundamental Properties</h4>
            <ul>
                <li><strong>Dynamic Size:</strong> Can grow or shrink during execution</li>
                <li><strong>Non-contiguous Memory:</strong> Nodes can be anywhere in memory</li>
                <li><strong>Sequential Access:</strong> Elements accessed sequentially from head</li>
                <li><strong>No Memory Waste:</strong> Allocates memory only when needed</li>
            </ul>
            
            <h4>1.2 Basic Node Structure</h4>
            <p>A node typically contains:</p>
            <ul>
                <li><strong>Data:</strong> The actual value stored</li>
                <li><strong>Next Pointer:</strong> Reference to the next node</li>
                <li><strong>(Optional) Previous Pointer:</strong> For doubly linked lists</li>
            </ul>
            
            <h3>2. Types of Linked Lists</h3>
            
            <h4>2.1 Singly Linked List</h4>
            <p><strong>Definition:</strong> Each node points only to the next node.</p>
            <p><strong>Structure:</strong> Head → [data|next] → [data|next] → ... → [data|null]</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Unidirectional traversal (forward only)</li>
                    <li>Simple implementation</li>
                    <li>Less memory overhead (one pointer per node)</li>
                </ul>
            </p>
            
            <h4>2.2 Doubly Linked List</h4>
            <p><strong>Definition:</strong> Each node points to both next and previous nodes.</p>
            <p><strong>Structure:</strong> Head ⇄ [prev|data|next] ⇄ [prev|data|next] ⇄ ...</p>
            <p><strong>Characteristics:</strong>
                <ul>
                    <li>Bidirectional traversal (forward and backward)</li>
                    <li>Easier deletion of arbitrary nodes</li>
                    <li>More memory overhead (two pointers per node)</li>
                </ul>
            </p>
            
            <h4>2.3 Circular Linked List</h4>
            <p><strong>2.3.1 Circular Singly Linked List</strong></p>
            <p><strong>Definition:</strong> Last node points back to the first node.</p>
            <p><strong>Structure:</strong> Head → [data|next] → [data|next] → ... → Head</p>
            
            <p><strong>2.3.2 Circular Doubly Linked List</strong></p>
            <p><strong>Definition:</strong> Last node points to first, first points to last.</p>
            <p><strong>Structure:</strong> Head ⇄ [prev|data|next] ⇄ ... ⇄ Head</p>
            
            <p><strong>Applications:</strong> Round-robin scheduling, multiplayer games, circular buffers.</p>
            
            <h4>2.4 XOR Linked List (Memory Efficient)</h4>
            <p><strong>Definition:</strong> Stores XOR of previous and next addresses instead of separate pointers.</p>
            <p><strong>Advantages:</strong> Same functionality as doubly linked list with single pointer space.</p>
            <p><strong>Disadvantages:</strong> Complex implementation, not supported by garbage-collected languages.</p>
            
            <h4>2.5 Skip List</h4>
            <p><strong>Definition:</strong> Multi-level linked list that allows fast search like balanced trees.</p>
            <p><strong>Time Complexity:</strong> O(log n) for search, insert, delete.</p>
            <p><strong>Applications:</strong> Redis sorted sets, concurrent data structures.</p>
            
            <h4>2.6 Unrolled Linked List</h4>
            <p><strong>Definition:</strong> Each node contains a small array of elements.</p>
            <p><strong>Advantages:</strong> Better cache performance, reduced pointer overhead.</p>
            
            <h3>3. Memory Representation</h3>
            
            <h4>3.1 Node Allocation</h4>
            <p>Nodes are dynamically allocated from heap memory:</p>
            <ul>
                <li><strong>malloc()/free()</strong> in C</li>
                <li><strong>new/delete</strong> in C++</li>
                <li><strong>Automatic garbage collection</strong> in Java/Python/JavaScript</li>
            </ul>
            
            <h4>3.2 Memory Overhead</h4>
            <p>For a singly linked list storing integers (4 bytes):</p>
            <ul>
                <li>Data: 4 bytes</li>
                <li>Next pointer: 8 bytes (on 64-bit systems)</li>
                <li>Total per node: 12 bytes</li>
                <li>Overhead: 8/12 = 67%</li>
            </ul>
            
            <h3>4. Operations and Their Complexities</h3>
            
            <h4>4.1 Traversal</h4>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Process:</strong> Start from head, follow next pointers until null.</p>
            
            <h4>4.2 Search</h4>
            <p><strong>Time Complexity:</strong> O(n) worst case</p>
            <p><strong>Best Case:</strong> O(1) if element at head</p>
            <p><strong>Average Case:</strong> O(n/2) = O(n)</p>
            
            <h4>4.3 Insertion</h4>
            
            <p><strong>4.3.1 At Beginning</strong></p>
            <p><strong>Time Complexity:</strong> O(1)</p>
            <p>Steps:
                <ol>
                    <li>Create new node</li>
                    <li>Set new node's next to current head</li>
                    <li>Update head to new node</li>
                </ol>
            </p>
            
            <p><strong>4.3.2 At End</strong></p>
            <p><strong>Time Complexity:</strong> O(n) without tail pointer, O(1) with tail pointer</p>
            <p>Steps (without tail):
                <ol>
                    <li>Traverse to last node</li>
                    <li>Set last node's next to new node</li>
                </ol>
            </p>
            
            <p><strong>4.3.3 At Specific Position</strong></p>
            <p><strong>Time Complexity:</strong> O(n) worst case</p>
            <p>Steps:
                <ol>
                    <li>Traverse to position-1 node</li>
                    <li>Set new node's next to current node's next</li>
                    <li>Set current node's next to new node</li>
                </ol>
            </p>
            
            <h4>4.4 Deletion</h4>
            
            <p><strong>4.4.1 From Beginning</strong></p>
            <p><strong>Time Complexity:</strong> O(1)</p>
            <p>Steps:
                <ol>
                    <li>Store reference to head</li>
                    <li>Update head to head.next</li>
                    <li>Free old head memory</li>
                </ol>
            </p>
            
            <p><strong>4.4.2 From End</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p>Steps:
                <ol>
                    <li>Traverse to second last node</li>
                    <li>Set its next to null</li>
                    <li>Free last node memory</li>
                </ol>
            </p>
            
            <p><strong>4.4.3 Specific Node</strong></p>
            <p><strong>Time Complexity:</strong> O(n) for search + O(1) for deletion</p>
            
            <h4>4.5 Reverse Operation</h4>
            <p><strong>Iterative Approach:</strong> O(n) time, O(1) space</p>
            <p><strong>Recursive Approach:</strong> O(n) time, O(n) space (call stack)</p>
            
            <h4>4.6 Sorting</h4>
            <p><strong>Merge Sort:</strong> O(n log n) time, O(log n) space (recursive) or O(1) space (iterative)</p>
            <p><strong>Insertion Sort:</strong> O(n²) time, O(1) space</p>
            
            <h3>5. Doubly Linked List Specific Operations</h3>
            
            <h4>5.1 Advantages Over Singly Linked List</h4>
            <ul>
                <li>Can traverse in both directions</li>
                <li>Delete arbitrary node in O(1) if pointer to node is given</li>
                <li>Insert before a node in O(1) if pointer to node is given</li>
            </ul>
            
            <h4>5.2 Disadvantages</h4>
            <ul>
                <li>Extra memory for previous pointer</li>
                <li>More complex implementation</li>
                <li>More pointer updates during operations</li>
            </ul>
            
            <h4>5.3 Node Structure</h4>
            <pre>
            class DoublyListNode {
                constructor(data) {
                    this.data = data;
                    this.prev = null;
                    this.next = null;
                }
            }
            </pre>
            
            <h3>6. Circular Linked List Operations</h3>
            
            <h4>6.1 Traversal</h4>
            <p>Special care needed to avoid infinite loops. Stop when you return to starting point.</p>
            
            <h4>6.2 Insertion in Empty List</h4>
            <p>Create node where next (and prev for doubly) points to itself.</p>
            
            <h4>6.3 Advantages</h4>
            <ul>
                <li>Any node can be starting point</li>
                <li>Useful for circular queues</li>
                <li>Round-robin scheduling</li>
            </ul>
            
            <h3>7. Advanced Algorithms on Linked Lists</h3>
            
            <h4>7.1 Cycle Detection</h4>
            <p><strong>Floyd's Cycle-Finding Algorithm (Tortoise and Hare):</strong></p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            <p><strong>Space Complexity:</strong> O(1)</p>
            
            <h4>7.2 Finding Middle Element</h4>
            <p><strong>Two-pointer Technique:</strong></p>
            <p><strong>Approach:</strong> Move slow pointer one step, fast pointer two steps. When fast reaches end, slow is at middle.</p>
            <p><strong>Time Complexity:</strong> O(n)</p>
            
            <h4>7.3 Merging Two Sorted Lists</h4>
            <p><strong>Iterative Approach:</strong> O(m+n) time, O(1) space</p>
            <p><strong>Recursive Approach:</strong> O(m+n) time, O(m+n) space</p>
            
            <h4>7.4 Palindrome Check</h4>
            <p><strong>Approach 1:</strong> Reverse second half and compare</p>
            <p><strong>Approach 2:</strong> Use stack</p>
            <p><strong>Approach 3:</strong> Recursion</p>
            
            <h4>7.5 Intersection Point of Two Lists</h4>
            <p><strong>Approach:</strong> 
                <ol>
                    <li>Find lengths of both lists</li>
                    <li>Move pointer of longer list by difference</li>
                    <li>Move both pointers until they meet</li>
                </ol>
            </p>
            
            <h3>8. Memory Management Considerations</h3>
            
            <h4>8.1 Garbage Collection</h4>
            <p>In languages with automatic garbage collection (Java, Python, JavaScript), deleted nodes are automatically reclaimed.</p>
            
            <h4>8.2 Manual Memory Management</h4>
            <p>In C/C++, programmer must explicitly free memory using free() or delete.</p>
            
            <h4>8.3 Memory Leaks</h4>
            <p>Common issues:
                <ul>
                    <li>Forgetting to free deleted nodes</li>
                    <li>Losing reference to allocated memory</li>
                    <li>Circular references in garbage-collected languages</li>
                </ul>
            </p>
            
            <h3>9. Applications of Linked Lists</h3>
            
            <h4>9.1 Implementation of Other Data Structures</h4>
            <ul>
                <li><strong>Stacks and Queues:</strong> Dynamic implementation</li>
                <li><strong>Hash Tables:</strong> Chaining for collision resolution</li>
                <li><strong>Graphs:</strong> Adjacency list representation</li>
                <li><strong>Polynomials:</strong> Sparse polynomial representation</li>
            </ul>
            
            <h4>9.2 Real-World Applications</h4>
            <ul>
                <li><strong>Undo functionality:</strong> In text editors (stack using linked list)</li>
                <li><strong>Browser history:</strong> Doubly linked list for back/forward navigation</li>
                <li><strong>Music player:</strong> Playlist as linked list</li>
                <li><strong>Image viewer:</strong> Navigation between images</li>
                <li><strong>File system:</strong> Directory structure</li>
                <li><strong>Symbol table:</strong> In compilers</li>
            </ul>
            
            <h4>9.3 System Programming</h4>
            <ul>
                <li>Memory pools</li>
                <li>Process scheduling queues</li>
                <li>Buffer management</li>
            </ul>
            
            <h3>10. Advantages of Linked Lists</h3>
            <ul>
                <li><strong>Dynamic Size:</strong> No need to specify size in advance</li>
                <li><strong>Efficient Insertion/Deletion:</strong> O(1) at beginning, no shifting needed</li>
                <li><strong>Memory Efficiency:</strong> No pre-allocation, only use what's needed</li>
                <li><strong>No Memory Waste:</strong> Unlike arrays with unused capacity</li>
                <li><strong>Flexible Memory:</strong> Nodes can be anywhere in memory</li>
            </ul>
            
            <h3>11. Disadvantages of Linked Lists</h3>
            <ul>
                <li><strong>Sequential Access:</strong> No random access, must traverse from head</li>
                <li><strong>Memory Overhead:</strong> Extra space for pointers</li>
                <li><strong>Poor Cache Performance:</strong> Non-contiguous memory causes cache misses</li>
                <li><strong>Complex Implementation:</strong> More error-prone with pointer manipulation</li>
                <li><strong>Reverse Traversal:</strong> Difficult in singly linked lists</li>
                <li><strong>Memory Leaks:</strong> Risk of losing references</li>
            </ul>
            
            <h3>12. Comparison with Arrays</h3>
            <table class="dsa-table">
                <tr>
                    <th>Parameter</th>
                    <th>Array</th>
                    <th>Linked List</th>
                </tr>
                <tr>
                    <td>Access</td>
                    <td>Random (O(1))</td>
                    <td>Sequential (O(n))</td>
                </tr>
                <tr>
                    <td>Insertion at beginning</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Deletion at beginning</td>
                    <td>O(n)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>Memory Allocation</td>
                    <td>Static/Contiguous</td>
                    <td>Dynamic/Non-contiguous</td>
                </tr>
                <tr>
                    <td>Memory Overhead</td>
                    <td>None</td>
                    <td>Pointers per node</td>
                </tr>
                <tr>
                    <td>Cache Performance</td>
                    <td>Excellent</td>
                    <td>Poor</td>
                </tr>
                <tr>
                    <td>Memory Usage</td>
                    <td>Fixed/May waste</td>
                    <td>Exact/No waste</td>
                </tr>
            </table>
            
            <h3>13. Implementation Variations</h3>
            
            <h4>13.1 With Tail Pointer</h4>
            <p>Maintains reference to last node for O(1) append operations.</p>
            
            <h4>13.2 With Sentinel Nodes</h4>
            <p>Dummy nodes at beginning and/or end to simplify edge cases.</p>
            
            <h4>13.3 Memory Pool</h4>
            <p>Pre-allocate nodes in array for better cache performance while maintaining linked structure.</p>
            
            <h3>14. Thread Safety Considerations</h3>
            
            <h4>14.1 Concurrent Access</h4>
            <p>Linked lists are not thread-safe by default. Concurrent modifications can cause:
                <ul>
                    <li>Race conditions</li>
                    <li>Memory corruption</li>
                    <li>Lost updates</li>
                </ul>
            </p>
            
            <h4>14.2 Synchronization Mechanisms</h4>
            <ul>
                <li><strong>Locks:</strong> Coarse-grained or fine-grained</li>
                <li><strong>Lock-free algorithms:</strong> Using CAS (Compare-and-Swap)</li>
                <li><strong>Read-copy-update (RCU):</strong> For read-heavy workloads</li>
            </ul>
            
            <h3>15. Advanced Linked List Variants</h3>
            
            <h4>15.1 Self-adjusting Lists</h4>
            <p><strong>Move-to-front:</strong> Recently accessed elements moved to front.</p>
            <p><strong>Transpose:</strong> Accessed element swapped with predecessor.</p>
            
            <h4>15.2 Multilevel Linked Lists</h4>
            <p>Used in file systems, sparse matrices.</p>
            
            <h4>15.3 Persistent Linked Lists</h4>
            <p>Immutable lists where operations return new lists without modifying original.</p>
            
            <h3>16. Algorithm Design Patterns</h3>
            
            <h4>16.1 Two-pointer Technique</h4>
            <p>Applications: Middle element, cycle detection, palindrome check.</p>
            
            <h4>16.2 Dummy Node</h4>
            <p>Simplify edge cases in operations like merging.</p>
            
            <h4>16.3 Recursion</h4>
            <p>Natural fit for linked list problems (reverse, traversal, etc.).</p>
            
            <h3>17. Common Interview Problems</h3>
            <ol>
                <li>Reverse a linked list (iterative and recursive)</li>
                <li>Detect and remove cycle</li>
                <li>Merge two sorted lists</li>
                <li>Find intersection point</li>
                <li>Palindrome check</li>
                <li>Rotate list</li>
                <li>Flatten a multilevel linked list</li>
                <li>Clone list with random pointers</li>
                <li>LRU Cache implementation</li>
                <li>Add two numbers represented as linked lists</li>
            </ol>
            
            <h3>18. Performance Optimization</h3>
            
            <h4>18.1 Cache Optimization</h4>
            <ul>
                <li><strong>Memory Pool:</strong> Allocate nodes from contiguous memory</li>
                <li><strong>Node Packing:</strong> Store multiple elements per node</li>
                <li><strong>Prefetching:</strong> Access next node while processing current</li>
            </ul>
            
            <h4>18.2 Memory Optimization</h4>
            <ul>
                <li>XOR linked list for doubly linked functionality</li>
                <li>Unrolled linked list to reduce pointer overhead</li>
                <li>Pointer compression in 32-bit systems</li>
            </ul>
            
            <h3>19. Language-Specific Implementations</h3>
            
            <h4>19.1 C++ Standard Template Library</h4>
            <p><strong>std::list:</strong> Doubly linked list</p>
            <p><strong>std::forward_list:</strong> Singly linked list (C++11 onwards)</p>
            
            <h4>19.2 Java Collections Framework</h4>
            <p><strong>LinkedList:</strong> Doubly linked list implementation</p>
            
            <h4>19.3 Python</h4>
            <p><strong>collections.deque:</strong> Doubly linked list implementation</p>
            
            <h4>19.4 C#</h4>
            <p><strong>LinkedList&lt;T&gt;:</strong> Doubly linked list</p>
            
            <h3>20. Historical Context</h3>
            <p>Linked lists were among the earliest data structures developed. They were crucial in early computing when memory was limited and dynamic allocation was necessary. The concept dates back to the 1950s with the development of IPL (Information Processing Language).</p>
            
            <h3>21. Future Trends</h3>
            <ul>
                <li><strong>Persistent data structures</strong> for functional programming</li>
                <li><strong>Lock-free concurrent linked lists</strong> for multicore processors</li>
                <li><strong>Cache-oblivious linked lists</strong> for automatic optimization</li>
                <li><strong>Hybrid structures</strong> combining arrays and linked lists</li>
            </ul>
            
            <h3>22. Conclusion</h3>
            <p>Linked lists are fundamental dynamic data structures that excel at frequent insertions and deletions, especially at the beginning. While they have poor cache performance compared to arrays due to non-contiguous memory, their flexibility and dynamic nature make them indispensable for many applications. Understanding linked lists is crucial for computer science education and forms the basis for understanding more complex data structures like trees and graphs.</p>`
        },
        {
            id: "stacks-queues",
            title: "Stacks & Queues",
            type: "basics",
            code: `// Stack Implementation using Array
            class ArrayStack {
                constructor(capacity = 10) {
                    this.arr = new Array(capacity);
                    this.top = -1;
                    this.capacity = capacity;
                }
                
                // O(1)
                push(element) {
                    if(this.isFull()) {
                        throw new Error("Stack overflow");
                    }
                    this.top++;
                    this.arr[this.top] = element;
                }
                
                // O(1)
                pop() {
                    if(this.isEmpty()) {
                        throw new Error("Stack underflow");
                    }
                    const element = this.arr[this.top];
                    this.top--;
                    return element;
                }
                
                // O(1)
                peek() {
                    if(this.isEmpty()) {
                        throw new Error("Stack is empty");
                    }
                    return this.arr[this.top];
                }
                
                // O(1)
                isEmpty() {
                    return this.top === -1;
                }
                
                // O(1)
                isFull() {
                    return this.top === this.capacity - 1;
                }
                
                // O(1)
                size() {
                    return this.top + 1;
                }
            }
            
            // Queue Implementation using Circular Array
            class CircularQueue {
                constructor(capacity = 10) {
                    this.arr = new Array(capacity);
                    this.front = 0;
                    this.rear = -1;
                    this.size = 0;
                    this.capacity = capacity;
                }
                
                // O(1)
                enqueue(element) {
                    if(this.isFull()) {
                        throw new Error("Queue is full");
                    }
                    this.rear = (this.rear + 1) % this.capacity;
                    this.arr[this.rear] = element;
                    this.size++;
                }
                
                // O(1)
                dequeue() {
                    if(this.isEmpty()) {
                        throw new Error("Queue is empty");
                    }
                    const element = this.arr[this.front];
                    this.front = (this.front + 1) % this.capacity;
                    this.size--;
                    return element;
                }
                
                // O(1)
                peek() {
                    if(this.isEmpty()) {
                        throw new Error("Queue is empty");
                    }
                    return this.arr[this.front];
                }
                
                // O(1)
                isEmpty() {
                    return this.size === 0;
                }
                
                // O(1)
                isFull() {
                    return this.size === this.capacity;
                }
            }`,
            content: `<h2>Stacks & Queues Data Structures</h2>
            
            <h3>1. Introduction to Stacks</h3>
            <p><strong>Definition:</strong> A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements are added and removed from only one end called the "top".</p>
            
            <h4>1.1 Fundamental Properties</h4>
            <ul>
                <li><strong>LIFO Principle:</strong> Last element added is first element removed</li>
                <li><strong>Single Access Point:</strong> All operations performed at top</li>
                <li><strong>Limited Access:</strong> Cannot access arbitrary elements directly</li>
                <li><strong>Dynamic Size:</strong> Can grow and shrink as needed</li>
            </ul>
            
            <h4>1.2 Stack ADT (Abstract Data Type)</h4>
            <p>A stack typically supports these operations:</p>
            <ul>
                <li><strong>push(element):</strong> Add element to top</li>
                <li><strong>pop():</strong> Remove and return top element</li>
                <li><strong>peek() / top():</strong> Return top element without removing</li>
                <li><strong>isEmpty():</strong> Check if stack is empty</li>
                <li><strong>size():</strong> Return number of elements</li>
            </ul>
            
            <h3>2. Stack Implementation Methods</h3>
            
            <h4>2.1 Array-Based Implementation</h4>
            <p><strong>Advantages:</strong>
                <ul>
                    <li>Cache friendly (contiguous memory)</li>
                    <li>Simple implementation</li>
                    <li>O(1) time for all operations</li>
                </ul>
            </p>
            <p><strong>Disadvantages:</strong>
                <ul>
                    <li>Fixed size (unless dynamic array used)</li>
                    <li>May waste memory if capacity > needed</li>
                </ul>
            </p>
            
            <h4>2.2 Linked List-Based Implementation</h4>
            <p><strong>Advantages:</strong>
                <ul>
                    <li>Dynamic size</li>
                    <li>No fixed capacity</li>
                    <li>Efficient memory usage</li>
                </ul>
            </p>
            <p><strong>Disadvantages:</strong>
                <ul>
                    <li>Extra memory for pointers</li>
                    <li>Poor cache performance</li>
                </ul>
            </p>
            
            <h4>2.3 Dynamic Array Implementation</h4>
            <p>Combines benefits of arrays and dynamic sizing by resizing when full (typically doubling).</p>
            
            <h3>3. Stack Operations Analysis</h3>
            
            <h4>3.1 Time Complexities</h4>
            <table class="dsa-table">
                <tr>
                    <th>Operation</th>
                    <th>Array Implementation</th>
                    <th>Linked List Implementation</th>
                </tr>
                <tr>
                    <td>push()</td>
                    <td>O(1) amortized</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>pop()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>peek()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>isEmpty()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>size()</td>
                    <td>O(1)</td>
                    <td>O(1) with counter</td>
                </tr>
            </table>
            
            <h4>3.2 Space Complexities</h4>
            <ul>
                <li><strong>Array:</strong> O(n) where n is capacity</li>
                <li><strong>Linked List:</strong> O(n) plus pointer overhead</li>
            </ul>
            
            <h3>4. Applications of Stacks</h3>
            
            <h4>4.1 Expression Evaluation</h4>
            <p><strong>Infix to Postfix Conversion:</strong> Using stack to handle operator precedence</p>
            <p><strong>Postfix Evaluation:</strong> Using stack to compute result</p>
            
            <h4>4.2 Syntax Parsing</h4>
            <p><strong>Balanced Parentheses:</strong> Check if parentheses, brackets, braces are properly nested</p>
            <p><strong>HTML/XML Validation:</strong> Check matching tags</p>
            
            <h4>4.3 Function Call Management</h4>
            <p><strong>Call Stack:</strong> Programming languages use stack for:
                <ul>
                    <li>Function calls and returns</li>
                    <li>Storing local variables</li>
                    <li>Return addresses</li>
                    <li>Exception handling</li>
                </ul>
            </p>
            
            <h4>4.4 Backtracking Algorithms</h4>
            <ul>
                <li>Maze solving</li>
                <li>N-Queens problem</li>
                <li>Sudoku solver</li>
                <li>Depth-First Search (DFS)</li>
            </ul>
            
            <h4>4.5 Undo/Redo Operations</h4>
            <p>Text editors, graphic editors maintain stack of operations for undo functionality.</p>
            
            <h4>4.6 Browser History</h4>
            <p>Back button functionality using stack.</p>
            
            <h4>4.7 Memory Management</h4>
            <p>Stack-based memory allocation for local variables.</p>
            
            <h3>5. Introduction to Queues</h3>
            <p><strong>Definition:</strong> A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the "rear" and removed from the "front".</p>
            
            <h4>5.1 Fundamental Properties</h4>
            <ul>
                <li><strong>FIFO Principle:</strong> First element added is first element removed</li>
                <li><strong>Two Access Points:</strong> Insertion at rear, removal from front</li>
                <li><strong>Order Preservation:</strong> Maintains insertion order</li>
            </ul>
            
            <h4>5.2 Queue ADT (Abstract Data Type)</h4>
            <p>A queue typically supports these operations:</p>
            <ul>
                <li><strong>enqueue(element):</strong> Add element to rear</li>
                <li><strong>dequeue():</strong> Remove and return front element</li>
                <li><strong>front() / peek():</strong> Return front element without removing</li>
                <li><strong>isEmpty():</strong> Check if queue is empty</li>
                <li><strong>size():</strong> Return number of elements</li>
            </ul>
            
            <h3>6. Queue Implementation Methods</h3>
            
            <h4>6.1 Array-Based Implementation</h4>
            <p><strong>Simple Array:</strong> May lead to inefficient space usage as front moves forward</p>
            <p><strong>Circular Array:</strong> Efficient use of space by treating array as circular</p>
            
            <h4>6.2 Linked List-Based Implementation</h4>
            <p>Maintain both head (front) and tail (rear) pointers for O(1) enqueue and dequeue.</p>
            
            <h4>6.3 Dynamic Array Implementation</h4>
            <p>Similar to stack but with circular buffer implementation.</p>
            
            <h3>7. Circular Queue Implementation</h3>
            
            <h4>7.1 Concept</h4>
            <p>Treat array as circular by using modulo arithmetic for indices:</p>
            <ul>
                <li>front = (front + 1) % capacity</li>
                <li>rear = (rear + 1) % capacity</li>
            </ul>
            
            <h4>7.2 Full/Empty Conditions</h4>
            <p><strong>Approach 1:</strong> Count elements (size variable)</p>
            <p><strong>Approach 2:</strong> Leave one empty slot
                <ul>
                    <li>Empty: front == rear</li>
                    <li>Full: (rear + 1) % capacity == front</li>
                </ul>
            </p>
            
            <h3>8. Queue Operations Analysis</h3>
            
            <h4>8.1 Time Complexities</h4>
            <table class="dsa-table">
                <tr>
                    <th>Operation</th>
                    <th>Array Implementation</th>
                    <th>Linked List Implementation</th>
                </tr>
                <tr>
                    <td>enqueue()</td>
                    <td>O(1) amortized</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>dequeue()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>front()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>isEmpty()</td>
                    <td>O(1)</td>
                    <td>O(1)</td>
                </tr>
                <tr>
                    <td>size()</td>
                    <td>O(1)</td>
                    <td>O(1) with counter</td>
                </tr>
            </table>
            
            <h3>9. Types of Queues</h3>
            
            <h4>9.1 Simple Queue</h4>
            <p>Basic FIFO queue as described above.</p>
            
            <h4>9.2 Circular Queue</h4>
            <p>Array implementation that reuses empty spaces.</p>
            
            <h4>9.3 Priority Queue</h4>
            <p>Elements dequeued based on priority, not insertion order.</p>
            
            <h4>9.4 Double-Ended Queue (Deque)</h4>
            <p>Allows insertion and deletion at both ends.</p>
            
            <h4>9.5 Blocking Queue</h4>
            <p>Thread-safe queue that blocks when empty (dequeue) or full (enqueue).</p>
            
            <h4>9.6 Concurrent Queue</h4>
            <p>Designed for multi-threaded access without external synchronization.</p>
            
            <h3>10. Applications of Queues</h3>
            
            <h4>10.1 Operating Systems</h4>
            <ul>
                <li><strong>Process Scheduling:</strong> Ready queue, job queue</li>
                <li><strong>I/O Buffering:</strong> Keyboard buffer, print spooler</li>
                <li><strong>Message Passing:</strong> Inter-process communication</li>
            </ul>
            
            <h4>10.2 Network Systems</h4>
            <ul>
                <li><strong>Packet Buffering:</strong> In routers and switches</li>
                <li><strong>Bandwidth Management:</strong> Traffic shaping</li>
                <li><strong>Request Handling:</strong> Web servers</li>
            </ul>
            
            <h4>10.3 Simulation and Modeling</h4>
            <p>Discrete event simulation (customer service, manufacturing).</p>
            
            <h4>10.4 Breadth-First Search (BFS)</h4>
            <p>Graph traversal algorithm.</p>
            
            <h4>10.5 Producer-Consumer Problem</h4>
            <p>Synchronization problem in concurrent programming.</p>
            
            <h4>10.6 Real-World Applications</h4>
            <ul>
                <li>Call center systems</li>
                <li>Ticket booking systems</li>
                <li>Playlist in media players</li>
                <li>CPU task scheduling</li>
            </ul>
            
            <h3>11. Double-Ended Queue (Deque)</h3>
            
            <h4>11.1 Definition</h4>
            <p>A deque (pronounced "deck") allows insertion and deletion at both ends.</p>
            
            <h4>11.2 Operations</h4>
            <ul>
                <li>addFirst(element)</li>
                <li>addLast(element)</li>
                <li>removeFirst()</li>
                <li>removeLast()</li>
                <li>getFirst()</li>
                <li>getLast()</li>
            </ul>
            
            <h4>11.3 Implementations</h4>
            <p><strong>Doubly Linked List:</strong> Natural implementation</p>
            <p><strong>Circular Array:</strong> More complex but cache efficient</p>
            
            <h4>11.4 Applications</h4>
            <ul>
                <li>Undo with history (stack of deques)</li>
                <li>Palindrome checker</li>
                <li>Sliding window problems</li>
            </ul>
            
            <h3>12. Priority Queue</h3>
            
            <h4>12.1 Definition</h4>
            <p>A queue where each element has a priority. Elements with higher priority are dequeued first.</p>
            
            <h4>12.2 Characteristics</h4>
            <ul>
                <li>Does not follow FIFO strictly</li>
                <li>Priority can be defined by comparator</li>
                <li>Same priority elements may follow FIFO</li>
            </ul>
            
            <h4>12.3 Implementations</h4>
            <p><strong>Unsorted Array/List:</strong> O(1) enqueue, O(n) dequeue</p>
            <p><strong>Sorted Array/List:</strong> O(n) enqueue, O(1) dequeue</p>
            <p><strong>Binary Heap:</strong> O(log n) for both enqueue and dequeue</p>
            
            <h4>12.4 Applications</h4>
            <ul>
                <li>Dijkstra's shortest path algorithm</li>
                <li>Huffman coding</li>
                <li>Load balancing</li>
                <li>Hospital emergency room</li>
                <li>CPU scheduling</li>
            </ul>
            
            <h3>13. Expression Evaluation Algorithms</h3>
            
            <h4>13.1 Notation Types</h4>
            <p><strong>Infix:</strong> Operator between operands (A + B)</p>
            <p><strong>Prefix (Polish):</strong> Operator before operands (+ A B)</p>
            <p><strong>Postfix (Reverse Polish):</strong> Operator after operands (A B +)</p>
            
            <h4>13.2 Infix to Postfix Conversion Algorithm</h4>
            <p><strong>Shunting-yard Algorithm (Dijkstra):</strong></p>
            <ol>
                <li>Initialize empty stack for operators, empty list for output</li>
                <li>Scan infix expression left to right</li>
                <li>If operand, add to output</li>
                <li>If '(', push to stack</li>
                <li>If ')', pop from stack to output until '('</li>
                <li>If operator, pop from stack while stack has operator with higher or equal precedence</li>
                <li>Push current operator to stack</li>
                <li>After scanning, pop all remaining operators to output</li>
            </ol>
            
            <h4>13.3 Postfix Evaluation Algorithm</h4>
            <ol>
                <li>Initialize empty stack</li>
                <li>Scan postfix expression left to right</li>
                <li>If operand, push to stack</li>
                <li>If operator, pop two operands, apply operator, push result</li>
                <li>After scanning, stack contains final result</li>
            </ol>
            
            <h3>14. Stack-Based Algorithms</h3>
            
            <h4>14.1 Balanced Parentheses</h4>
            <p><strong>Algorithm:</strong>
                <ol>
                    <li>Initialize empty stack</li>
                    <li>Scan expression left to right</li>
                    <li>If opening bracket, push to stack</li>
                    <li>If closing bracket:
                        <ul>
                            <li>If stack empty, return false</li>
                            <li>Pop from stack and check if matches</li>
                        </ul>
                    </li>
                    <li>After scanning, return true if stack empty, else false</li>
                </ol>
            </p>
            
            <h4>14.2 Next Greater Element</h4>
            <p>Find next greater element for each element in array.</p>
            <p><strong>Algorithm:</strong> Use monotonic decreasing stack, O(n) time.</p>
            
            <h4>14.3 Stock Span Problem</h4>
            <p>Calculate span for each day where span = number of consecutive days before with price ≤ current price.</p>
            <p><strong>Algorithm:</strong> Use stack to maintain decreasing prices.</p>
            
            <h4>14.4 Largest Rectangle in Histogram</h4>
            <p><strong>Algorithm:</strong> Use stack to maintain increasing heights, O(n) time.</p>
            
            <h3>15. Queue-Based Algorithms</h3>
            
            <h4>15.1 Breadth-First Search (BFS)</h4>
            <p><strong>Algorithm:</strong>
                <ol>
                    <li>Initialize queue with starting vertex</li>
                    <li>Mark starting vertex visited</li>
                    <li>While queue not empty:
                        <ul>
                            <li>Dequeue vertex v</li>
                            <li>Process v</li>
                            <li>Enqueue all unvisited neighbors of v</li>
                            <li>Mark neighbors visited</li>
                        </ul>
                    </li>
                </ol>
            </p>
            
            <h4>15.2 Level Order Tree Traversal</h4>
            <p>Similar to BFS, process tree level by level.</p>
            
            <h4>15.3 Sliding Window Maximum</h4>
            <p>Find maximum in each sliding window of size k.</p>
            <p><strong>Algorithm:</strong> Use deque to maintain candidates, O(n) time.</p>
            
            <h4>15.4 Recent Counter</h4>
            <p>Count requests in last 3000 milliseconds.</p>
            <p><strong>Algorithm:</strong> Use queue to maintain timestamps.</p>
            
            <h3>16. Implementation Details</h3>
            
            <h4>16.1 Error Conditions</h4>
            <p><strong>Stack Underflow:</strong> pop() or peek() on empty stack</p>
            <p><strong>Stack Overflow:</strong> push() on full stack (fixed size)</p>
            <p><strong>Queue Underflow:</strong> dequeue() on empty queue</p>
            <p><strong>Queue Overflow:</strong> enqueue() on full queue</p>
            
            <h4>16.2 Thread Safety</h4>
            <p>Basic stacks and queues are not thread-safe. Concurrent access requires synchronization.</p>
            
            <h4>16.3 Memory Management</h4>
            <p>Array implementations need to handle resizing. Linked implementations need proper node allocation/deallocation.</p>
            
            <h3>17. Advanced Queue Variants</h3>
            
            <h4>17.1 Blocking Queue</h4>
            <p>Blocks thread on dequeue when empty, on enqueue when full.</p>
            
            <h4>17.2 Concurrent Queue</h4>
            <p>Lock-free or wait-free implementations using CAS operations.</p>
            
            <h4>17.3 Delay Queue</h4>
            <p>Elements become available after delay.</p>
            
            <h4>17.4 Transfer Queue</h4>
            <p>Blocks until another thread receives element.</p>
            
            <h3>18. System Stack vs Data Structure Stack</h3>
            
            <h4>18.1 System Call Stack</h4>
            <p>Managed by OS/compiler for function calls:</p>
            <ul>
                <li>Automatic memory management</li>
                <li>Limited size (stack overflow error)</li>
                <li>Hardware supported (stack pointer register)</li>
            </ul>
            
            <h4>18.2 Data Structure Stack</h4>
            <p>Implemented in heap memory:</p>
            <ul>
                <li>Manual memory management</li>
                <li>Larger capacity possible</li>
                <li>Flexible implementation</li>
            </ul>
            
            <h3>19. Real-World System Examples</h3>
            
            <h4>19.1 CPU Pipeline</h4>
            <p>Instruction queue in processor pipeline.</p>
            
            <h4>19.2 Disk Scheduling</h4>
            <p>Elevator algorithm (SCAN) uses queue-like structure.</p>
            
            <h4>19.3 Event Handling</h4>
            <p>GUI event queue (mouse clicks, keyboard events).</p>
            
            <h4>19.4 Message Queues</h4>
            <p>RabbitMQ, Kafka for distributed systems.</p>
            
            <h3>20. Mathematical Properties</h3>
            
            <h4>20.1 Queueing Theory</h4>
            <p>Mathematical study of waiting lines:</p>
            <ul>
                <li>Little's Law: L = λW (average number = arrival rate × average wait time)</li>
                <li>M/M/1 queue model</li>
                <li>Queueing networks</li>
            </ul>
            
            <h4>20.2 Stack Permutations</h4>
            <p>Study of permutations achievable through stack operations.</p>
            <p>Number of stack permutations = Catalan numbers: Cₙ = (2n)!/((n+1)!n!)</p>
            
            <h3>21. Comparison Table</h3>
            <table class="dsa-table">
                <tr>
                    <th>Aspect</th>
                    <th>Stack</th>
                    <th>Queue</th>
                    <th>Deque</th>
                </tr>
                <tr>
                    <td>Principle</td>
                    <td>LIFO</td>
                    <td>FIFO</td>
                    <td>Both ends</td>
                </tr>
                <tr>
                    <td>Insertion</td>
                    <td>Top only</td>
                    <td>Rear only</td>
                    <td>Both ends</td>
                </tr>
                <tr>
                    <td>Deletion</td>
                    <td>Top only</td>
                    <td>Front only</td>
                    <td>Both ends</td>
                </tr>
                <tr>
                    <td>Access</td>
                    <td>Top only</td>
                    <td>Front only</td>
                    <td>Both ends</td>
                </tr>
                <tr>
                    <td>Applications</td>
                    <td>Undo, DFS, parsing</td>
                    <td>BFS, scheduling, buffering</td>
                    <td>Palindrome, sliding window</td>
                </tr>
            </table>
            
            <h3>22. Implementation in Standard Libraries</h3>
            
            <h4>22.1 Java</h4>
            <p><strong>Stack:</strong> java.util.Stack (extends Vector, synchronized)</p>
            <p><strong>Queue:</strong> java.util.Queue interface, LinkedList implementation</p>
            <p><strong>Deque:</strong> java.util.Deque interface, ArrayDeque implementation</p>
            
            <h4>22.2 C++</h4>
            <p><strong>Stack:</strong> std::stack (container adapter)</p>
            <p><strong>Queue:</strong> std::queue (container adapter)</p>
            <p><strong>Deque:</strong> std::deque (double-ended queue)</p>
            
            <h4>22.3 Python</h4>
            <p><strong>Stack:</strong> Use list (append/pop)</p>
            <p><strong>Queue:</strong> collections.deque</p>
            
            <h4>22.4 C#</h4>
            <p><strong>Stack:</strong> System.Collections.Generic.Stack&lt;T&gt;</p>
            <p><strong>Queue:</strong> System.Collections.Generic.Queue&lt;T&gt;</p>
            
            <h3>23. Common Interview Problems</h3>
            
            <h4>23.1 Stack Problems</h4>
            <ol>
                <li>Valid parentheses</li>
                <li>Min stack (O(1) getMin)</li>
                <li>Next greater element</li>
                <li>Largest rectangle in histogram</li>
                <li>Simplify path (Unix-style)</li>
                <li>Evaluate reverse polish notation</li>
                <li>Decode string (3[a2[c]] → accaccacc)</li>
                <li>Asteroid collision</li>
                <li>Daily temperatures</li>
                <li>Remove k digits to form smallest number</li>
            </ol>
            
            <h4>23.2 Queue Problems</h4>
            <ol>
                <li>Implement stack using queues</li>
                <li>Implement queue using stacks</li>
                <li>Circular tour (petrol pumps)</li>
                <li>Sliding window maximum</li>
                <li>First non-repeating character in stream</li>
                <li>Rotting oranges (BFS)</li>
                <li>Course schedule (topological sort)</li>
                <li>Number of islands (BFS)</li>
                <li>Open the lock</li>
                <li>Design hit counter</li>
            </ol>
            
            <h3>24. Performance Considerations</h3>
            
            <h4>24.1 Array vs Linked List</h4>
            <p><strong>Arrays:</strong> Better cache locality, fixed overhead, may waste space</p>
            <p><strong>Linked Lists:</strong> No unused capacity, pointer overhead, cache unfriendly</p>
            
            <h4>24.2 Resizing Strategy</h4>
            <p>Dynamic arrays should use geometric growth (e.g., double when full) for amortized O(1) operations.</p>
            
            <h4>24.3 Memory Alignment</h4>
            <p>Array-based implementations benefit from aligned memory addresses.</p>
            
            <h3>25. Historical Context</h3>
            <p>Stacks were first proposed by Alan Turing in 1946. The term "stack" was coined by Klaus Samelson and Friedrich Bauer in 1957. Queues have been used since the beginning of computing for task scheduling.</p>
            
            <h3>26. Future Trends</h3>
            <ul>
                <li><strong>Persistent stacks/queues:</strong> Immutable versions for functional programming</li>
                <li><strong>Distributed queues:</strong> For microservices architecture</li>
                <li><strong>Lock-free concurrent queues:</strong> For massively parallel systems</li>
                <li><strong>Hardware-supported queues:</strong> In network processors</li>
            </ul>
            
            <h3>27. Conclusion</h3>
            <p>Stacks and queues are fundamental linear data structures with complementary properties. Stacks follow LIFO and are ideal for reversal, backtracking, and nested structures. Queues follow FIFO and are perfect for ordering, scheduling, and buffering. Both have O(1) time operations for their core functions and are building blocks for more complex algorithms and systems.</p>`
        }
        ]
      
    },
    react: {
        title: "React ",
        icon: "<i class='fab fa-react' style='color: #61dafb;'></i>",
        topics: [
            { id: "introduction", title: "React Introduction", type: "basics", code: "// Basic React Component\nimport React from \"react\";\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Hello, React!</h1>\n      <p>Welcome to React learning.</p>\n    </div>\n  );\n}\n\nexport default App;\n\n// JSX Syntax\nconst element = <h1>Hello, {name}!</h1>;\n\n// React Elements are immutable", content: "<h3>What is React?</h3>\n<p>React is a JavaScript library for building user interfaces, particularly single-page applications. It uses a component-based architecture.</p>\n\n<h3>Key Features:</h3>\n<ul>\n    <li><strong>JSX:</strong> Syntax extension for JavaScript</li>\n    <li><strong>Components:</strong> Reusable UI pieces</li>\n    <li><strong>Virtual DOM:</strong> Efficient updates</li>\n    <li><strong>One-way Data Flow:</strong> Unidirectional</li>\n    <li><strong>Hooks:</strong> State in functional components</li>\n</ul>" },
            { id: "jsx", title: "JSX Deep Dive", type: "basics", code: "// JSX Expressions\nconst name = \"John\";\nconst element = <h1>Hello, {name}!</h1>;\n\n// Conditional Rendering\n{isLoggedIn ? (\n    <UserGreeting />\n) : (\n    <GuestGreeting />\n)}\n\n// Inline If with Logical &&\n{unreadMessages.length > 0 && (\n    <h2>You have {unreadMessages.length} unread</h2>\n)}\n\n// Inline Styles\nconst style = {\n    color: \"blue\",\n    backgroundColor: \"lightgray\",\n    fontSize: \"20px\"\n};\n\nreturn <p style={style}>Styled Text</p>;", content: "<h3>JSX Deep Dive</h3>\n<p>JSX is a syntax extension that looks like HTML but works with JavaScript. It makes creating UI components more intuitive.</p>\n\n<h3>JSX Rules:</h3>\n<ul>\n    <li>Must return single parent element</li>\n    <li>Use curly braces for expressions</li>\n    <li>className instead of class</li>\n    <li>Self-close tags like <img /></li>\n    <li>CamelCase for attributes</li>\n</ul>" },
            { id: "components", title: "React Components", type: "basics", code: "// Function Component\nfunction Welcome(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n\n// Class Component\nclass Welcome extends React.Component {\n    render() {\n        return <h1>Hello, {this.props.name}</h1>;\n    }\n}\n\n// Component with State (Class)\nclass Counter extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { count: 0 };\n    }\n    \n    render() {\n        return (\n            <div>\n                <p>Count: {this.state.count}</p>\n            </div>\n        );\n    }\n}\n\n// Using Components\n<Welcome name=\"John\" />\n<Counter />", content: "<h3>React Components</h3>\n<p>Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.</p>\n\n<h3>Component Types:</h3>\n<ul>\n    <li><strong>Functional:</strong> Simple, use hooks</li>\n    <li><strong>Class:</strong> Complex state/lifecycle</li>\n</ul>\n\n<h3>Component Props:</h3>\n<ul>\n    <li>Read-only data</li>\n    <li>Passed from parent</li>\n    <li>Cannot be modified by child</li>\n</ul>" },
            { id: "hooks", title: "React Hooks", type: "basics", code: "// useState Hook\nimport { useState } from \"react\";\n\nfunction Counter() {\n    const [count, setCount] = useState(0);\n    \n    return (\n        <div>\n            <p>Count: {count}</p>\n            <button onClick={() => setCount(count + 1)}>\n                Increment\n            </button>\n        </div>\n    );\n}\n\n// useEffect Hook\nimport { useEffect } from \"react\";\n\nuseEffect(() => {\n    // Side effect code\n    document.title = `Count: ${count}`;\n    \n    return () => {\n        // Cleanup code\n    };\n}, [count]);  // Dependency array", content: "<h3>React Hooks</h3>\n<p>Hooks let you use state and other React features in functional components. They were introduced in React 16.8.</p>\n\n<h3>Common Hooks:</h3>\n<ul>\n    <li><strong>useState:</strong> Add state to component</li>\n    <li><strong>useEffect:</strong> Side effects</li>\n    <li><strong>useContext:</strong> Access context</li>\n    <li><strong>useRef:</strong> Reference DOM elements</li>\n    <li><strong>useMemo:</strong> Memoized values</li>\n    <li><strong>useCallback:</strong> Memoized functions</li>\n</ul>" },
            { id: "state", title: "State Management", type: "advanced", code: "// Multiple State Variables\nfunction UserProfile() {\n    const [name, setName] = useState(\"\");\n    const [email, setEmail] = useState(\"\");\n    const [age, setAge] = useState(0);\n    \n    // Object State\n    const [user, setUser] = useState({\n        name: \"\",\n        email: \"\",\n        age: 0\n    });\n    \n    // Update object state\n    const updateUser = (field, value) => {\n        setUser(prev => ({\n            ...prev,\n            [field]: value\n        }));\n    };\n    \n    // Array State\n    const [items, setItems] = useState([]);\n    \n    const addItem = (item) => {\n        setItems(prev => [...prev, item]);\n    };\n    \n    const removeItem = (id) => {\n        setItems(prev => prev.filter(item => item.id !== id));\n    };\n}", content: "<h3>State Management</h3>\n<p>State is data that changes over time in your component. When state changes, React re-renders the component.</p>\n\n<h3>State Guidelines:</h3>\n<ul>\n    <li>State is immutable</li>\n    <li>Use setter function to update</li>\n    <li>State updates are asynchronous</li>\n    <li>Use functional updates when depending on previous state</li>\n</ul>\n\n<h3>State vs Props:</h3>\n<ul>\n    <li><strong>Props:</strong> Read-only, passed down</li>\n    <li><strong>State:</strong> Mutable, local to component</li>\n</ul>" },
            { id: "props", title: "Props and Props Drilling", type: "advanced", code: "// Passing Props\nfunction Parent() {\n    const data = \"Hello from Parent\";\n    return <Child message={data} />;\n}\n\nfunction Child({ message }) {\n    return <Grandchild text={message} />;\n}\n\nfunction Grandchild({ text }) {\n    return <p>{text}</p>;\n}\n\n// Prop Types (Type Checking)\nimport PropTypes from \"prop-types\";\n\nfunction Greeting({ name, age }) {\n    return <h1>Hello, {name}!</h1>;\n}\n\nGreeting.propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number\n};\n\n// Default Props\nGreeting.defaultProps = {\n    age: 18\n};", content: "<h3>Props and Prop Drilling</h3>\n<p>Props are how components communicate with each other. Data flows down from parent to child through props.</p>\n\n<h3>Prop Drilling Issue:</h3>\n<p>When you need to pass data through many intermediate components, it can become verbose.</p>\n\n<h3>Solutions:</h3>\n<ul>\n    <li><strong>Context API:</strong> Share data globally</li>\n    <li><strong>State Management:</strong> Redux, Zustand</li>\n    <li><strong>Composition:</strong> Component composition</li>\n</ul>" },
            { id: "context", title: "React Context", type: "advanced", code: "// Create Context\nimport { createContext, useContext } from \"react\";\n\nconst ThemeContext = createContext(\"light\");\n\n// Provider Component\nfunction ThemeProvider({ children }) {\n    const [theme, setTheme] = useState(\"light\");\n    \n    return (\n        <ThemeContext.Provider value={{ theme, setTheme }}>\n            {children}\n        </ThemeContext.Provider>\n    );\n}\n\n// Consume Context\nfunction ThemedButton() {\n    const { theme, setTheme } = useContext(ThemeContext);\n    \n    return (\n        <button className={theme}>\n            Current Theme: {theme}\n        </button>\n    );\n}\n\n// Using Provider\n<ThemeProvider>\n    <App />\n</ThemeProvider>", content: "<h3>React Context</h3>\n<p>Context provides a way to pass data through the component tree without having to pass props manually at every level.</p>\n\n<h3>Context Use Cases:</h3>\n<ul>\n    <li>Theme (light/dark mode)</li>\n    <li>User authentication</li>\n    <li>Language preferences</li>\n    <li>Global state</li>\n</ul>\n\n<h3>Context API:</h3>\n<ul>\n    <li><strong>createContext():</strong> Create context</li>\n    <li><strong>Provider:</strong> Wrap components</li>\n    <li><strong>useContext():</strong> Access context value</li>\n</ul>" },
            { id: "forms", title: "React Forms", type: "advanced", code: "// Controlled Component\nfunction NameForm() {\n    const [name, setName] = useState(\"\");\n    const [essay, setEssay] = useState(\"Default\");\n    const [flavor, setFlavor] = useState(\"coconut\");\n    \n    function handleSubmit(event) {\n        event.preventDefault();\n        alert(`Name: ${name}, Essay: ${essay}, Flavor: ${flavor}`);\n    }\n    \n    return (\n        <form onSubmit={handleSubmit}>\n            <label>\n                Name:\n                <input\n                    type=\"text\"\n                    value={name}\n                    onChange={(e) => setName(e.target.value)}\n                />\n            </label>\n            <label>\n                Essay:\n                <textarea\n                    value={essay}\n                    onChange={(e) => setEssay(e.target.value)}\n                />\n            </label>\n            <label>\n                Pick favorite flavor:\n                <select\n                    value={flavor}\n                    onChange={(e) => setFlavor(e.target.value)}\n                >\n                    <option value=\"grapefruit\">Grapefruit</option>\n                    <option value=\"lime\">Lime</option>\n                    <option value=\"coconut\">Coconut</option>\n                </select>\n            </label>\n            <button type=\"submit\">Submit</button>\n        </form>\n    );\n}", content: "<h3>React Forms</h3>\n<p>In React, form elements maintain their own state. A controlled component has its state controlled by React.</p>\n\n<h3>Form Handling:</h3>\n<ul>\n    <li><strong>Controlled Components:</strong> React manages state</li>\n    <li><strong>Uncontrolled Components:</strong> DOM manages state</li>\n    <li><strong>Refs:</strong> Access form values without state</li>\n</ul>\n\n<h3>Input Types:</h3>\n<ul>\n    <li>Text inputs</li>\n    <li>Textareas</li>\n    <li>Select dropdowns</li>\n    <li>Checkboxes</li>\n    <li>Radio buttons</li>\n</ul>" },
            { id: "router", title: "React Router", type: "advanced", code: "// React Router Setup\nimport { BrowserRouter, Routes, Route, Link } from \"react-router-dom\";\n\nfunction App() {\n    return (\n        <BrowserRouter>\n            <nav>\n                <Link to=\"/\">Home</Link>\n                <Link to=\"/about\">About</Link>\n                <Link to=\"/users\">Users</Link>\n            </nav>\n            \n            <Routes>\n                <Route path=\"/\" element={<Home />} />\n                <Route path=\"/about\" element={<About />} />\n                <Route path=\"/users\" element={<Users />} />\n                <Route path=\"/users/:id\" element={<UserProfile />} />\n            </Routes>\n        </BrowserRouter>\n    );\n}\n\n// Programmatic Navigation\nimport { useNavigate } from \"react-router-dom\";\n\nfunction LoginButton() {\n    const navigate = useNavigate();\n    \n    function handleLogin() {\n        // After login logic\n        navigate(\"/dashboard\");\n    }\n    \n    return <button onClick={handleLogin}>Login</button>;\n}", content: "<h3>React Router</h3>\n<p>React Router enables navigation among different components in a React application, enabling single-page application behavior.</p>\n\n<h3>Router Components:</h3>\n<ul>\n    <li><strong>BrowserRouter:</strong> Router for web apps</li>\n    <li><strong>Routes:</strong> Container for routes</li>\n    <li><strong>Route:</strong> Individual route</li>\n    <li><strong>Link:</strong> Navigation links</li>\n    <li><strong>useNavigate:</strong> Programmatic nav</li>\n    <li><strong>useParams:</strong> URL parameters</li>\n</ul>" },
            { id: "practice1", title: "React Practice", type: "practice", code: "// Practice: Todo App with React Hooks\nimport { useState, useEffect } from \"react\";\n\nfunction TodoApp() {\n    const [todos, setTodos] = useState([]);\n    const [inputValue, setInputValue] = useState(\"\");\n    \n    // Load from localStorage\n    useEffect(() => {\n        const saved = JSON.parse(localStorage.getItem(\"todos\"));\n        if (saved) setTodos(saved);\n    }, []);\n    \n    // Save to localStorage\n    useEffect(() => {\n        localStorage.setItem(\"todos\", JSON.stringify(todos));\n    }, [todos]);\n    \n    function addTodo() {\n        if (inputValue.trim()) {\n            setTodos([\n                ...todos,\n                { id: Date.now(), text: inputValue, completed: false }\n            ]);\n            setInputValue(\"\");\n        }\n    }\n    \n    function toggleTodo(id) {\n        setTodos(todos.map(todo =>\n            todo.id === id\n                ? { ...todo, completed: !todo.completed }\n                : todo\n        ));\n    }\n    \n    function deleteTodo(id) {\n        setTodos(todos.filter(todo => todo.id !== id));\n    }\n    \n    return (\n        <div>\n            <h1>Todo App</h1>\n            <input\n                value={inputValue}\n                onChange={(e) => setInputValue(e.target.value)}\n                placeholder=\"Add a todo...\"\n            />\n            <button onClick={addTodo}>Add</button>\n            <ul>\n                {todos.map(todo => (\n                    <li\n                        key={todo.id}\n                        onClick={() => toggleTodo(todo.id)}\n                        style={{ textDecoration: todo.completed ? \"line-through\" : \"none\" }}\n                    >\n                        {todo.text}\n                        <button onClick={() => deleteTodo(todo.id)}>X</button>\n                    </li>\n                ))}\n            </ul>\n        </div>\n    );\n}", content: "<h3>Practice: Todo App</h3>\n<p>Build a Todo application with the following features:</p>\n<ol>\n    <li>Add new todos</li>\n    <li>Mark todos as complete/incomplete</li>\n    <li>Delete todos</li>\n    <li>Persist data to localStorage</li>\n    <li>Filter todos (all/active/completed)</li>\n</ol>" }
        ]
    },
   c: {
    title: "C Language ",
    icon: "<i class='fas fa-c' style='color: #A8B9CC;'></i>",
    topics: [
        { 
            id: "introduction", 
            title: "C Introduction", 
            type: "basics", 
            code: "// First C Program\n#include <stdio.h>\n\nint main() {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n\n// Basic Syntax\n#include <stdio.h>\nint main() {\n    int number = 10;\n    float pi = 3.14;\n    char grade = 'A';\n    \n    printf(\"Number: %d\\n\", number);\n    printf(\"Pi: %.2f\\n\", pi);\n    printf(\"Grade: %c\\n\", grade);\n    \n    return 0;\n}",
            content: "<h3>What is C Programming?</h3>\n<p>C is a general-purpose, procedural programming language developed in 1972 by Dennis Ritchie at Bell Labs. It's the foundation for many modern programming languages and operating systems.</p>\n\n<h3>Key Features:</h3>\n<ul>\n    <li><strong>Procedural Language:</strong> Follows step-by-step procedure</li>\n    <li><strong>Mid-level Language:</strong> Combines low and high-level features</li>\n    <li><strong>Portable:</strong> Code can run on different machines</li>\n    <li><strong>Fast and Efficient:</strong> Close to hardware</li>\n    <li><strong>Rich Library:</strong> Standard library functions</li>\n    <li><strong>Memory Management:</strong> Manual memory handling</li>\n</ul>\n\n<h3>C Compilation Process:</h3>\n<pre>\nSource Code (.c) → Preprocessor → Compiler → Assembler → Linker → Executable\n</pre>"
        },
        { 
            id: "variables", 
            title: "Variables & Data Types", 
            type: "basics", 
            code: "// Variable Declaration & Initialization\n#include <stdio.h>\n\nint main() {\n    // Basic Data Types\n    int age = 25;                    // Integer (4 bytes)\n    float salary = 45000.50;         // Floating point (4 bytes)\n    double pi = 3.14159265359;       // Double precision (8 bytes)\n    char grade = 'A';                // Character (1 byte)\n    \n    // Type Modifiers\n    short int smallNumber = 100;     // Short integer\n    long int bigNumber = 1000000;    // Long integer\n    unsigned int positiveOnly = 500; // Only positive values\n    \n    // Size of Data Types\n    printf(\"Size of int: %lu bytes\\n\", sizeof(int));\n    printf(\"Size of float: %lu bytes\\n\", sizeof(float));\n    printf(\"Size of char: %lu bytes\\n\", sizeof(char));\n    \n    // Format Specifiers\n    printf(\"Age: %d\\n\", age);        // %d for integers\n    printf(\"Salary: %.2f\\n\", salary); // %f for float\n    printf(\"Grade: %c\\n\", grade);    // %c for characters\n    \n    return 0;\n}",
            content: "<h3>Variables & Data Types</h3>\n<p>Variables are containers for storing data values in memory. Each variable has a specific type, which determines the size and layout of the variable's memory.</p>\n\n<h3>Basic Data Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Data Type</th>\n        <th>Size (bytes)</th>\n        <th>Range</th>\n        <th>Format Specifier</th>\n    </tr>\n    <tr>\n        <td>int</td>\n        <td>4</td>\n        <td>-2,147,483,648 to 2,147,483,647</td>\n        <td>%d</td>\n    </tr>\n    <tr>\n        <td>float</td>\n        <td>4</td>\n        <td>±3.4e-38 to ±3.4e+38</td>\n        <td>%f</td>\n    </tr>\n    <tr>\n        <td>double</td>\n        <td>8</td>\n        <td>±1.7e-308 to ±1.7e+308</td>\n        <td>%lf</td>\n    </tr>\n    <tr>\n        <td>char</td>\n        <td>1</td>\n        <td>-128 to 127</td>\n        <td>%c</td>\n    </tr>\n</table>\n\n<h3>Type Modifiers:</h3>\n<ul>\n    <li><strong>signed:</strong> Can hold both positive and negative values</li>\n    <li><strong>unsigned:</strong> Only positive values</li>\n    <li><strong>short:</strong> Smaller size integer</li>\n    <li><strong>long:</strong> Larger size integer</li>\n</ul>"
        },
        { 
            id: "operators", 
            title: "Operators in C", 
            type: "basics", 
            code: "// Operators Examples\n#include <stdio.h>\n\nint main() {\n    int a = 10, b = 3;\n    \n    // Arithmetic Operators\n    printf(\"Addition: %d\\n\", a + b);       // 13\n    printf(\"Subtraction: %d\\n\", a - b);    // 7\n    printf(\"Multiplication: %d\\n\", a * b); // 30\n    printf(\"Division: %d\\n\", a / b);       // 3 (integer division)\n    printf(\"Modulus: %d\\n\", a % b);        // 1\n    \n    // Relational Operators\n    printf(\"a > b: %d\\n\", a > b);          // 1 (true)\n    printf(\"a == b: %d\\n\", a == b);        // 0 (false)\n    printf(\"a != b: %d\\n\", a != b);        // 1 (true)\n    \n    // Logical Operators\n    int x = 1, y = 0;\n    printf(\"x && y: %d\\n\", x && y);         // 0 (false)\n    printf(\"x || y: %d\\n\", x || y);         // 1 (true)\n    printf(\"!x: %d\\n\", !x);                // 0 (false)\n    \n    // Assignment Operators\n    int c = 5;\n    c += 3;  // c = c + 3 → 8\n    c -= 2;  // c = c - 2 → 6\n    c *= 2;  // c = c * 2 → 12\n    \n    // Increment/Decrement\n    int i = 5;\n    printf(\"i++: %d\\n\", i++);  // Prints 5, then i becomes 6\n    printf(\"++i: %d\\n\", ++i);  // i becomes 7, then prints 7\n    \n    // Ternary Operator\n    int max = (a > b) ? a : b;\n    printf(\"Max: %d\\n\", max);\n    \n    return 0;\n}",
            content: "<h3>Operators in C</h3>\n<p>Operators are symbols that perform operations on variables and values. C provides various types of operators.</p>\n\n<h3>Operator Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Operator Type</th>\n        <th>Symbols</th>\n        <th>Description</th>\n    </tr>\n    <tr>\n        <td>Arithmetic</td>\n        <td>+, -, *, /, %, ++, --</td>\n        <td>Mathematical operations</td>\n    </tr>\n    <tr>\n        <td>Relational</td>\n        <td>==, !=, >, <, >=, <=</td>\n        <td>Comparison operations</td>\n    </tr>\n    <tr>\n        <td>Logical</td>\n        <td>&&, ||, !</td>\n        <td>Boolean operations</td>\n    </tr>\n    <tr>\n        <td>Assignment</td>\n        <td>=, +=, -=, *=, /=, %=</td>\n        <td>Assign values</td>\n    </tr>\n    <tr>\n        <td>Bitwise</td>\n        <td>&, |, ^, ~, <<, >></td>\n        <td>Bit-level operations</td>\n    </tr>\n    <tr>\n        <td>Ternary</td>\n        <td>?:</td>\n        <td>Conditional operator</td>\n    </tr>\n</table>\n\n<h3>Operator Precedence:</h3>\n<ol>\n    <li>Parentheses ()</li>\n    <li>Unary operators (++, --, !)</li>\n    <li>Multiplicative (*, /, %)</li>\n    <li>Additive (+, -)</li>\n    <li>Relational (<, <=, >, >=)</li>\n    <li>Equality (==, !=)</li>\n    <li>Logical AND (&&)</li>\n    <li>Logical OR (||)</li>\n    <li>Assignment (=, +=, -=, etc.)</li>\n</ol>"
        },
        { 
            id: "control", 
            title: "Control Statements", 
            type: "basics", 
            code: "// Control Flow Examples\n#include <stdio.h>\n\nint main() {\n    // If-Else Statement\n    int marks = 85;\n    \n    if (marks >= 90) {\n        printf(\"Grade: A\\n\");\n    } else if (marks >= 75) {\n        printf(\"Grade: B\\n\");\n    } else if (marks >= 50) {\n        printf(\"Grade: C\\n\");\n    } else {\n        printf(\"Grade: F\\n\");\n    }\n    \n    // Switch Statement\n    int day = 3;\n    switch(day) {\n        case 1:\n            printf(\"Monday\\n\");\n            break;\n        case 2:\n            printf(\"Tuesday\\n\");\n            break;\n        case 3:\n            printf(\"Wednesday\\n\");\n            break;\n        default:\n            printf(\"Invalid day\\n\");\n    }\n    \n    // For Loop\n    printf(\"For Loop:\\n\");\n    for(int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    \n    // While Loop\n    printf(\"While Loop:\\n\");\n    int count = 1;\n    while(count <= 5) {\n        printf(\"%d \", count);\n        count++;\n    }\n    printf(\"\\n\");\n    \n    // Do-While Loop\n    printf(\"Do-While Loop:\\n\");\n    int num = 1;\n    do {\n        printf(\"%d \", num);\n        num++;\n    } while(num <= 5);\n    printf(\"\\n\");\n    \n    // Break and Continue\n    printf(\"Break Example:\\n\");\n    for(int i = 1; i <= 10; i++) {\n        if(i == 5) {\n            break;  // Exit loop\n        }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    \n    printf(\"Continue Example:\\n\");\n    for(int i = 1; i <= 5; i++) {\n        if(i == 3) {\n            continue;  // Skip iteration\n        }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    \n    return 0;\n}",
            content: "<h3>Control Statements in C</h3>\n<p>Control statements determine the flow of program execution based on conditions and loops.</p>\n\n<h3>Decision Making Statements:</h3>\n<ul>\n    <li><strong>if:</strong> Executes code if condition is true</li>\n    <li><strong>if-else:</strong> Two-way decision making</li>\n    <li><strong>if-else if-else:</strong> Multi-way decision making</li>\n    <li><strong>switch:</strong> Multi-choice based on variable value</li>\n</ul>\n\n<h3>Looping Statements:</h3>\n<ul>\n    <li><strong>for loop:</strong> Known number of iterations</li>\n    <li><strong>while loop:</strong> Unknown iterations, condition checked first</li>\n    <li><strong>do-while loop:</strong> Unknown iterations, executes at least once</li>\n</ul>\n\n<h3>Jump Statements:</h3>\n<ul>\n    <li><strong>break:</strong> Exit loop or switch</li>\n    <li><strong>continue:</strong> Skip current iteration</li>\n    <li><strong>goto:</strong> Jump to labeled statement</li>\n    <li><strong>return:</strong> Exit from function</li>\n</ul>\n\n<h3>Flow Diagram:</h3>\n<pre>\nStart\n  ↓\nCondition → False → End\n  ↓ True\nExecute Code\n  ↓\n  Loop Back\n</pre>"
        },
        { 
            id: "functions", 
            title: "Functions in C", 
            type: "basics", 
            code: "// Function Examples\n#include <stdio.h>\n\n// Function Declaration/Prototype\nint add(int a, int b);\nvoid greet();\nint factorial(int n);\n\nint main() {\n    // Function Call\n    greet();\n    \n    int result = add(5, 3);\n    printf(\"Sum: %d\\n\", result);\n    \n    // Recursive Function\n    int fact = factorial(5);\n    printf(\"Factorial of 5: %d\\n\", fact);\n    \n    return 0;\n}\n\n// Function Definition\nint add(int a, int b) {\n    return a + b;\n}\n\nvoid greet() {\n    printf(\"Hello from function!\\n\");\n}\n\n// Recursive Function\nint factorial(int n) {\n    if (n <= 1) {\n        return 1;\n    } else {\n        return n * factorial(n - 1);\n    }\n}\n\n// Function with different parameters\nvoid printDetails(char name[], int age, float height) {\n    printf(\"Name: %s\\n\", name);\n    printf(\"Age: %d\\n\", age);\n    printf(\"Height: %.2f\\n\", height);\n}\n\n// Call by Value vs Call by Reference\nvoid swapByValue(int a, int b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}\n\nvoid swapByReference(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}",
            content: "<h3>Functions in C</h3>\n<p>A function is a block of code that performs a specific task. Functions help in dividing complex problems into smaller chunks and promote code reusability.</p>\n\n<h3>Function Components:</h3>\n<ul>\n    <li><strong>Function Declaration:</strong> Tells compiler about function</li>\n    <li><strong>Function Definition:</strong> Actual implementation</li>\n    <li><strong>Function Call:</strong> Invoking the function</li>\n</ul>\n\n<h3>Function Types:</h3>\n<ul>\n    <li><strong>Library Functions:</strong> Predefined in C (printf, scanf)</li>\n    <li><strong>User-defined Functions:</strong> Created by programmer</li>\n    <li><strong>Recursive Functions:</strong> Calls itself</li>\n</ul>\n\n<h3>Parameter Passing Methods:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Method</th>\n        <th>Description</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td>Call by Value</td>\n        <td>Copy of value is passed</td>\n        <td>swapByValue(a, b)</td>\n    </tr>\n    <tr>\n        <td>Call by Reference</td>\n        <td>Address is passed</td>\n        <td>swapByReference(&a, &b)</td>\n    </tr>\n</table>\n\n<h3>Function Diagram:</h3>\n<pre>\nMain Function\n    ↓\nFunction Call → Pass Arguments\n    ↓\nFunction Execution\n    ↓\nReturn Value → Main Function\n</pre>"
        },
        { 
            id: "arrays", 
            title: "Arrays in C", 
            type: "advanced", 
            code: "// Arrays Examples\n#include <stdio.h>\n\nint main() {\n    // 1D Array\n    int numbers[5] = {10, 20, 30, 40, 50};\n    \n    printf(\"1D Array:\\n\");\n    for(int i = 0; i < 5; i++) {\n        printf(\"numbers[%d] = %d\\n\", i, numbers[i]);\n    }\n    \n    // 2D Array (Matrix)\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    \n    printf(\"\\n2D Array:\\n\");\n    for(int i = 0; i < 3; i++) {\n        for(int j = 0; j < 3; j++) {\n            printf(\"%d \", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    \n    // Array Operations\n    int arr[10];\n    int sum = 0;\n    \n    // Input array elements\n    printf(\"\\nEnter 10 numbers:\\n\");\n    for(int i = 0; i < 10; i++) {\n        scanf(\"%d\", &arr[i]);\n    }\n    \n    // Find sum and average\n    for(int i = 0; i < 10; i++) {\n        sum += arr[i];\n    }\n    float average = sum / 10.0;\n    \n    // Find largest element\n    int largest = arr[0];\n    for(int i = 1; i < 10; i++) {\n        if(arr[i] > largest) {\n            largest = arr[i];\n        }\n    }\n    \n    printf(\"Sum: %d\\n\", sum);\n    printf(\"Average: %.2f\\n\", average);\n    printf(\"Largest: %d\\n\", largest);\n    \n    // String as Character Array\n    char name[50] = \"John Doe\";\n    printf(\"\\nName: %s\\n\", name);\n    \n    // String functions\n    char str1[20] = \"Hello\";\n    char str2[20] = \"World\";\n    char str3[40];\n    \n    // String length\n    int length = 0;\n    while(str1[length] != '\\0') {\n        length++;\n    }\n    printf(\"Length of '%s': %d\\n\", str1, length);\n    \n    return 0;\n}",
            content: "<h3>Arrays in C</h3>\n<p>An array is a collection of similar data items stored at contiguous memory locations. Arrays can be of any data type and can be single or multi-dimensional.</p>\n\n<h3>Array Declaration Syntax:</h3>\n<pre>\ndata_type array_name[array_size];\nint marks[5];  // Array of 5 integers\n</pre>\n\n<h3>Array Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Array Type</th>\n        <th>Dimension</th>\n        <th>Example</th>\n        <th>Memory Diagram</th>\n    </tr>\n    <tr>\n        <td>1D Array</td>\n        <td>Single row</td>\n        <td>int arr[5]</td>\n        <td>[0][1][2][3][4]</td>\n    </tr>\n    <tr>\n        <td>2D Array</td>\n        <td>Matrix</td>\n        <td>int matrix[3][3]</td>\n        <td>Rows × Columns</td>\n    </tr>\n    <tr>\n        <td>Multi-D Array</td>\n        <td>Multiple dimensions</td>\n        <td>int cube[3][3][3]</td>\n        <td>3D grid</td>\n    </tr>\n</table>\n\n<h3>Array Operations:</h3>\n<ul>\n    <li><strong>Traversal:</strong> Access each element</li>\n    <li><strong>Insertion:</strong> Add element at position</li>\n    <li><strong>Deletion:</strong> Remove element</li>\n    <li><strong>Searching:</strong> Find element (Linear/Binary)</li>\n    <li><strong>Sorting:</strong> Arrange elements (Bubble, Quick, Merge)</li>\n</ul>\n\n<h3>Memory Representation:</h3>\n<pre>\nint arr[5] = {10, 20, 30, 40, 50}\n\nIndex:   0    1    2    3    4\nValue:  10   20   30   40   50\nAddress:1000 1004 1008 1012 1016\n</pre>"
        },
        { 
            id: "pointers", 
            title: "Pointers in C", 
            type: "advanced", 
            code: "// Pointers Examples\n#include <stdio.h>\n\nint main() {\n    // Basic Pointer\n    int var = 20;\n    int *ptr;      // Pointer declaration\n    \n    ptr = &var;    // Pointer stores address of var\n    \n    printf(\"Value of var: %d\\n\", var);\n    printf(\"Address of var: %p\\n\", &var);\n    printf(\"Value of ptr: %p\\n\", ptr);\n    printf(\"Value at ptr: %d\\n\", *ptr);\n    \n    // Pointer Arithmetic\n    int arr[5] = {10, 20, 30, 40, 50};\n    int *arrPtr = arr;  // Points to first element\n    \n    printf(\"\\nArray using pointers:\\n\");\n    for(int i = 0; i < 5; i++) {\n        printf(\"*(arrPtr + %d) = %d\\n\", i, *(arrPtr + i));\n    }\n    \n    // Pointer to Pointer\n    int value = 100;\n    int *p1 = &value;\n    int **p2 = &p1;  // Pointer to pointer\n    \n    printf(\"\\nDouble Pointer:\\n\");\n    printf(\"Value: %d\\n\", value);\n    printf(\"Value via p1: %d\\n\", *p1);\n    printf(\"Value via p2: %d\\n\", **p2);\n    \n    // Pointers and Functions\n    int a = 5, b = 10;\n    printf(\"\\nBefore swap: a = %d, b = %d\\n\", a, b);\n    swap(&a, &b);  // Pass addresses\n    printf(\"After swap: a = %d, b = %d\\n\", a, b);\n    \n    // Dynamic Memory Allocation\n    int *dynamicArray;\n    int n;\n    \n    printf(\"\\nEnter size of array: \");\n    scanf(\"%d\", &n);\n    \n    // Allocate memory dynamically\n    dynamicArray = (int*)malloc(n * sizeof(int));\n    \n    if(dynamicArray == NULL) {\n        printf(\"Memory allocation failed!\\n\");\n        return 1;\n    }\n    \n    // Use allocated memory\n    for(int i = 0; i < n; i++) {\n        dynamicArray[i] = i * 10;\n    }\n    \n    printf(\"Dynamic Array: \");\n    for(int i = 0; i < n; i++) {\n        printf(\"%d \", dynamicArray[i]);\n    }\n    printf(\"\\n\");\n    \n    // Free allocated memory\n    free(dynamicArray);\n    \n    return 0;\n}\n\n// Function using pointers\nvoid swap(int *x, int *y) {\n    int temp = *x;\n    *x = *y;\n    *y = temp;\n}",
            content: "<h3>Pointers in C</h3>\n<p>A pointer is a variable that stores the memory address of another variable. Pointers are powerful features of C that allow direct memory manipulation.</p>\n\n<h3>Pointer Concepts:</h3>\n<ul>\n    <li><strong>Address Operator (&):</strong> Gets memory address</li>\n    <li><strong>Dereference Operator (*):</strong> Accesses value at address</li>\n    <li><strong>Pointer Arithmetic:</strong> Operations on pointer addresses</li>\n    <li><strong>Pointer to Pointer:</strong> Stores address of another pointer</li>\n</ul>\n\n<h3>Pointer Declaration and Usage:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Declaration</th>\n        <th>Description</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td>int *p;</td>\n        <td>Pointer to integer</td>\n        <td>p = &var;</td>\n    </tr>\n    <tr>\n        <td>char *c;</td>\n        <td>Pointer to character</td>\n        <td>c = &ch;</td>\n    </tr>\n    <tr>\n        <td>float *f;</td>\n        <td>Pointer to float</td>\n        <td>f = &num;</td>\n    </tr>\n    <tr>\n        <td>int **pp;</td>\n        <td>Pointer to pointer</td>\n        <td>pp = &p;</td>\n    </tr>\n</table>\n\n<h3>Memory Allocation Functions:</h3>\n<ul>\n    <li><strong>malloc():</strong> Allocates memory</li>\n    <li><strong>calloc():</strong> Allocates and initializes to zero</li>\n    <li><strong>realloc():</strong> Resizes allocated memory</li>\n    <li><strong>free():</strong> Deallocates memory</li>\n</ul>\n\n<h3>Pointer Diagram:</h3>\n<pre>\nVariable:      int x = 10;\nAddress:       1000\nPointer:       int *ptr = &x;\n\nptr → Stores address 1000\n*ptr → Accesses value 10\n</pre>"
        },
        { 
            id: "structures", 
            title: "Structures & Unions", 
            type: "advanced", 
            code: "// Structures and Unions Examples\n#include <stdio.h>\n#include <string.h>\n\n// Structure Definition\nstruct Student {\n    int roll_no;\n    char name[50];\n    float marks;\n    char grade;\n};\n\n// Nested Structure\nstruct Address {\n    char street[100];\n    char city[50];\n    int pincode;\n};\n\nstruct Employee {\n    int id;\n    char name[50];\n    struct Address addr;  // Nested structure\n    float salary;\n};\n\n// Union Definition\nunion Data {\n    int i;\n    float f;\n    char str[20];\n};\n\nint main() {\n    // Structure variable declaration and initialization\n    struct Student s1 = {101, \"John Doe\", 85.5, 'A'};\n    \n    printf(\"Student Details:\\n\");\n    printf(\"Roll No: %d\\n\", s1.roll_no);\n    printf(\"Name: %s\\n\", s1.name);\n    printf(\"Marks: %.2f\\n\", s1.marks);\n    printf(\"Grade: %c\\n\\n\", s1.grade);\n    \n    // Array of Structures\n    struct Student class[3];\n    \n    for(int i = 0; i < 3; i++) {\n        printf(\"Enter details for student %d:\\n\", i+1);\n        printf(\"Roll No: \");\n        scanf(\"%d\", &class[i].roll_no);\n        printf(\"Name: \");\n        scanf(\"%s\", class[i].name);\n        printf(\"Marks: \");\n        scanf(\"%f\", &class[i].marks);\n        \n        // Assign grade based on marks\n        if(class[i].marks >= 90) class[i].grade = 'A';\n        else if(class[i].marks >= 75) class[i].grade = 'B';\n        else if(class[i].marks >= 50) class[i].grade = 'C';\n        else class[i].grade = 'F';\n    }\n    \n    printf(\"\\nClass Details:\\n\");\n    for(int i = 0; i < 3; i++) {\n        printf(\"Student %d: %s, Marks: %.2f, Grade: %c\\n\", \n               class[i].roll_no, class[i].name, class[i].marks, class[i].grade);\n    }\n    \n    // Structure Pointer\n    struct Student *ptr;\n    ptr = &s1;\n    printf(\"\\nAccess via pointer: %s\\n\", ptr->name);\n    \n    // Union Example\n    union Data data;\n    \n    data.i = 10;\n    printf(\"\\nUnion integer value: %d\\n\", data.i);\n    \n    data.f = 220.5;\n    printf(\"Union float value: %.2f\\n\", data.f);\n    \n    strcpy(data.str, \"C Programming\");\n    printf(\"Union string value: %s\\n\", data.str);\n    \n    // Typedef Example\n    typedef struct {\n        int day;\n        int month;\n        int year;\n    } Date;\n    \n    Date today = {7, 2, 2024};\n    printf(\"\\nToday's Date: %d/%d/%d\\n\", today.day, today.month, today.year);\n    \n    return 0;\n}",
            content: "<h3>Structures and Unions in C</h3>\n<p>Structures and unions are user-defined data types that allow grouping of different data types under a single name.</p>\n\n<h3>Structure vs Union:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Feature</th>\n        <th>Structure</th>\n        <th>Union</th>\n    </tr>\n    <tr>\n        <td>Memory</td>\n        <td>Allocates memory for all members</td>\n        <td>Allocates memory for largest member</td>\n    </tr>\n    <tr>\n        <td>Access</td>\n        <td>All members can be accessed</td>\n        <td>Only one member at a time</td>\n    </tr>\n    <tr>\n        <td>Size</td>\n        <td>Sum of all members + padding</td>\n        <td>Size of largest member</td>\n    </tr>\n    <tr>\n        <td>Use Case</td>\n        <td>Store multiple related data</td>\n        <td>Memory efficient storage</td>\n    </tr>\n</table>\n\n<h3>Structure Syntax:</h3>\n<pre>\nstruct structure_name {\n    data_type member1;\n    data_type member2;\n    // ... more members\n};\n\n// Variable declaration\nstruct structure_name variable_name;\n</pre>\n\n<h3>Union Syntax:</h3>\n<pre>\nunion union_name {\n    data_type member1;\n    data_type member2;\n    // ... more members\n};\n\n// Variable declaration\nunion union_name variable_name;\n</pre>\n\n<h3>Memory Layout Example:</h3>\n<pre>\nStructure:                     Union:\nstruct Student {               union Data {\n    int roll_no;   // 4 bytes      int i;       // 4 bytes\n    char name[20]; // 20 bytes     float f;     // 4 bytes\n    float marks;   // 4 bytes      char str[20];// 20 bytes\n};                              };\nTotal size: 28+ bytes          Total size: 20 bytes\n</pre>"
        },
        { 
            id: "file", 
            title: "File Handling", 
            type: "advanced", 
            code: "// File Handling Examples\n#include <stdio.h>\n\nint main() {\n    FILE *file;\n    char data[100];\n    \n    // Writing to a file\n    file = fopen(\"example.txt\", \"w\");\n    \n    if(file == NULL) {\n        printf(\"Error opening file!\\n\");\n        return 1;\n    }\n    \n    printf(\"Enter text to write to file:\\n\");\n    fgets(data, sizeof(data), stdin);\n    \n    fputs(data, file);\n    fclose(file);\n    \n    printf(\"Data written successfully!\\n\\n\");\n    \n    // Reading from a file\n    file = fopen(\"example.txt\", \"r\");\n    \n    if(file == NULL) {\n        printf(\"Error opening file!\\n\");\n        return 1;\n    }\n    \n    printf(\"Contents of file:\\n\");\n    while(fgets(data, sizeof(data), file) != NULL) {\n        printf(\"%s\", data);\n    }\n    \n    fclose(file);\n    \n    // Appending to a file\n    file = fopen(\"example.txt\", \"a\");\n    \n    if(file == NULL) {\n        printf(\"Error opening file!\\n\");\n        return 1;\n    }\n    \n    printf(\"\\n\\nEnter text to append:\\n\");\n    fgets(data, sizeof(data), stdin);\n    \n    fputs(data, file);\n    fclose(file);\n    \n    printf(\"Data appended successfully!\\n\");\n    \n    // Binary File Operations\n    struct Student {\n        int roll_no;\n        char name[50];\n        float marks;\n    } student;\n    \n    // Write binary data\n    FILE *binFile = fopen(\"students.dat\", \"wb\");\n    \n    if(binFile == NULL) {\n        printf(\"Error creating binary file!\\n\");\n        return 1;\n    }\n    \n    // Add some records\n    struct Student students[3] = {\n        {101, \"Alice\", 85.5},\n        {102, \"Bob\", 92.0},\n        {103, \"Charlie\", 78.5}\n    };\n    \n    fwrite(students, sizeof(struct Student), 3, binFile);\n    fclose(binFile);\n    \n    // Read binary data\n    binFile = fopen(\"students.dat\", \"rb\");\n    \n    if(binFile == NULL) {\n        printf(\"Error opening binary file!\\n\");\n        return 1;\n    }\n    \n    printf(\"\\nStudent Records from Binary File:\\n\");\n    printf(\"Roll No\\tName\\t\\tMarks\\n\");\n    printf(\"------------------------\\n\");\n    \n    while(fread(&student, sizeof(struct Student), 1, binFile)) {\n        printf(\"%d\\t%s\\t%.2f\\n\", \n               student.roll_no, student.name, student.marks);\n    }\n    \n    fclose(binFile);\n    \n    // File Position Operations\n    file = fopen(\"example.txt\", \"r\");\n    \n    // Move to beginning\n    fseek(file, 0, SEEK_SET);\n    \n    // Get current position\n    long pos = ftell(file);\n    printf(\"\\nCurrent position: %ld\\n\", pos);\n    \n    // Move 10 bytes ahead\n    fseek(file, 10, SEEK_CUR);\n    \n    fclose(file);\n    \n    return 0;\n}",
            content: "<h3>File Handling in C</h3>\n<p>File handling allows programs to store and retrieve data from files. C provides various functions for file operations through the stdio.h header.</p>\n\n<h3>File Opening Modes:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Mode</th>\n        <th>Description</th>\n        <th>File Exists</th>\n        <th>File Doesn't Exist</th>\n    </tr>\n    <tr>\n        <td>\"r\"</td>\n        <td>Read only</td>\n        <td>Opens for reading</td>\n        <td>Error</td>\n    </tr>\n    <tr>\n        <td>\"w\"</td>\n        <td>Write only</td>\n        <td>Truncates file</td>\n        <td>Creates new</td>\n    </tr>\n    <tr>\n        <td>\"a\"</td>\n        <td>Append</td>\n        <td>Appends to end</td>\n        <td>Creates new</td>\n    </tr>\n    <tr>\n        <td>\"r+\"</td>\n        <td>Read/Write</td>\n        <td>Opens for both</td>\n        <td>Error</td>\n    </tr>\n    <tr>\n        <td>\"w+\"</td>\n        <td>Read/Write</td>\n        <td>Truncates file</td>\n        <td>Creates new</td>\n    </tr>\n    <tr>\n        <td>\"a+\"</td>\n        <td>Read/Append</td>\n        <td>Read/append</td>\n        <td>Creates new</td>\n    </tr>\n</table>\n\n<h3>File Operations:</h3>\n<ul>\n    <li><strong>fopen():</strong> Open a file</li>\n    <li><strong>fclose():</strong> Close a file</li>\n    <li><strong>fprintf():</strong> Write formatted output</li>\n    <li><strong>fscanf():</strong> Read formatted input</li>\n    <li><strong>fgets():</strong> Read string from file</li>\n    <li><strong>fputs():</strong> Write string to file</li>\n    <li><strong>fgetc():</strong> Read character</li>\n    <li><strong>fputc():</strong> Write character</li>\n    <li><strong>fread():</strong> Read binary data</li>\n    <li><strong>fwrite():</strong> Write binary data</li>\n    <li><strong>fseek():</strong> Move file pointer</li>\n    <li><strong>ftell():</strong> Get current position</li>\n    <li><strong>rewind():</strong> Move to beginning</li>\n</ul>\n\n<h3>File Processing Flow:</h3>\n<pre>\nOpen File → Check if opened → Process File → Close File\n    ↑           ↓                    ↓           ↓\n fopen()     Error?              Read/Write    fclose()\n</pre>"
        },
        { 
            id: "practice1", 
            title: "C Programming Practice", 
            type: "practice", 
            code: "// Practice: Bank Management System\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n#define MAX_ACCOUNTS 100\n\nstruct BankAccount {\n    int account_number;\n    char name[50];\n    float balance;\n    char account_type[20];  // Savings or Current\n};\n\nstruct BankAccount accounts[MAX_ACCOUNTS];\nint account_count = 0;\n\n// Function Prototypes\nvoid createAccount();\nvoid depositMoney();\nvoid withdrawMoney();\nvoid checkBalance();\nvoid displayAllAccounts();\nvoid searchAccount();\nvoid deleteAccount();\nvoid saveToFile();\nvoid loadFromFile();\n\nint main() {\n    int choice;\n    \n    // Load existing accounts from file\n    loadFromFile();\n    \n    do {\n        printf(\"\\n===== BANK MANAGEMENT SYSTEM =====\\n\");\n        printf(\"1. Create New Account\\n\");\n        printf(\"2. Deposit Money\\n\");\n        printf(\"3. Withdraw Money\\n\");\n        printf(\"4. Check Balance\\n\");\n        printf(\"5. Display All Accounts\\n\");\n        printf(\"6. Search Account\\n\");\n        printf(\"7. Delete Account\\n\");\n        printf(\"8. Save and Exit\\n\");\n        printf(\"Enter your choice: \");\n        scanf(\"%d\", &choice);\n        \n        switch(choice) {\n            case 1:\n                createAccount();\n                break;\n            case 2:\n                depositMoney();\n                break;\n            case 3:\n                withdrawMoney();\n                break;\n            case 4:\n                checkBalance();\n                break;\n            case 5:\n                displayAllAccounts();\n                break;\n            case 6:\n                searchAccount();\n                break;\n            case 7:\n                deleteAccount();\n                break;\n            case 8:\n                saveToFile();\n                printf(\"Data saved successfully! Goodbye!\\n\");\n                break;\n            default:\n                printf(\"Invalid choice! Try again.\\n\");\n        }\n    } while(choice != 8);\n    \n    return 0;\n}\n\nvoid createAccount() {\n    if(account_count >= MAX_ACCOUNTS) {\n        printf(\"Bank is full! Cannot create more accounts.\\n\");\n        return;\n    }\n    \n    struct BankAccount new_account;\n    \n    printf(\"\\n===== CREATE NEW ACCOUNT =====\\n\");\n    \n    new_account.account_number = 1000 + account_count + 1;\n    \n    printf(\"Enter account holder name: \");\n    scanf(\" %[^\\n]\", new_account.name);\n    \n    printf(\"Enter account type (Savings/Current): \");\n    scanf(\"%s\", new_account.account_type);\n    \n    printf(\"Enter initial deposit: \");\n    scanf(\"%f\", &new_account.balance);\n    \n    if(new_account.balance < 500) {\n        printf(\"Minimum balance should be 500!\\n\");\n        return;\n    }\n    \n    accounts[account_count] = new_account;\n    account_count++;\n    \n    printf(\"\\nAccount created successfully!\\n\");\n    printf(\"Account Number: %d\\n\", new_account.account_number);\n    printf(\"Account Holder: %s\\n\", new_account.name);\n}\n\nvoid depositMoney() {\n    int acc_no;\n    float amount;\n    \n    printf(\"\\n===== DEPOSIT MONEY =====\\n\");\n    printf(\"Enter account number: \");\n    scanf(\"%d\", &acc_no);\n    \n    for(int i = 0; i < account_count; i++) {\n        if(accounts[i].account_number == acc_no) {\n            printf(\"Account Holder: %s\\n\", accounts[i].name);\n            printf(\"Current Balance: %.2f\\n\", accounts[i].balance);\n            \n            printf(\"Enter amount to deposit: \");\n            scanf(\"%f\", &amount);\n            \n            if(amount <= 0) {\n                printf(\"Invalid amount!\\n\");\n                return;\n            }\n            \n            accounts[i].balance += amount;\n            printf(\"Deposit successful!\\n\");\n            printf(\"New Balance: %.2f\\n\", accounts[i].balance);\n            return;\n        }\n    }\n    \n    printf(\"Account not found!\\n\");\n}\n\nvoid withdrawMoney() {\n    int acc_no;\n    float amount;\n    \n    printf(\"\\n===== WITHDRAW MONEY =====\\n\");\n    printf(\"Enter account number: \");\n    scanf(\"%d\", &acc_no);\n    \n    for(int i = 0; i < account_count; i++) {\n        if(accounts[i].account_number == acc_no) {\n            printf(\"Account Holder: %s\\n\", accounts[i].name);\n            printf(\"Current Balance: %.2f\\n\", accounts[i].balance);\n            \n            printf(\"Enter amount to withdraw: \");\n            scanf(\"%f\", &amount);\n            \n            if(amount <= 0) {\n                printf(\"Invalid amount!\\n\");\n                return;\n            }\n            \n            if(accounts[i].balance - amount < 500) {\n                printf(\"Insufficient balance! Minimum balance required: 500\\n\");\n                return;\n            }\n            \n            accounts[i].balance -= amount;\n            printf(\"Withdrawal successful!\\n\");\n            printf(\"New Balance: %.2f\\n\", accounts[i].balance);\n            return;\n        }\n    }\n    \n    printf(\"Account not found!\\n\");\n}\n\nvoid checkBalance() {\n    int acc_no;\n    \n    printf(\"\\n===== CHECK BALANCE =====\\n\");\n    printf(\"Enter account number: \");\n    scanf(\"%d\", &acc_no);\n    \n    for(int i = 0; i < account_count; i++) {\n        if(accounts[i].account_number == acc_no) {\n            printf(\"\\nAccount Details:\\n\");\n            printf(\"Account Number: %d\\n\", accounts[i].account_number);\n            printf(\"Account Holder: %s\\n\", accounts[i].name);\n            printf(\"Account Type: %s\\n\", accounts[i].account_type);\n            printf(\"Current Balance: %.2f\\n\", accounts[i].balance);\n            return;\n        }\n    }\n    \n    printf(\"Account not found!\\n\");\n}\n\nvoid displayAllAccounts() {\n    if(account_count == 0) {\n        printf(\"No accounts found!\\n\");\n        return;\n    }\n    \n    printf(\"\\n===== ALL ACCOUNTS =====\\n\");\n    printf(\"%-15s %-20s %-15s %-10s\\n\", \n           \"Account No\", \"Name\", \"Type\", \"Balance\");\n    printf(\"----------------------------------------------------------\\n\");\n    \n    for(int i = 0; i < account_count; i++) {\n        printf(\"%-15d %-20s %-15s %-10.2f\\n\", \n               accounts[i].account_number,\n               accounts[i].name,\n               accounts[i].account_type,\n               accounts[i].balance);\n    }\n    \n    printf(\"\\nTotal Accounts: %d\\n\", account_count);\n}\n\nvoid searchAccount() {\n    int acc_no;\n    \n    printf(\"\\n===== SEARCH ACCOUNT =====\\n\");\n    printf(\"Enter account number: \");\n    scanf(\"%d\", &acc_no);\n    \n    for(int i = 0; i < account_count; i++) {\n        if(accounts[i].account_number == acc_no) {\n            printf(\"\\nAccount Found!\\n\");\n            printf(\"Account Number: %d\\n\", accounts[i].account_number);\n            printf(\"Account Holder: %s\\n\", accounts[i].name);\n            printf(\"Account Type: %s\\n\", accounts[i].account_type);\n            printf(\"Current Balance: %.2f\\n\", accounts[i].balance);\n            return;\n        }\n    }\n    \n    printf(\"Account not found!\\n\");\n}\n\nvoid deleteAccount() {\n    int acc_no;\n    \n    printf(\"\\n===== DELETE ACCOUNT =====\\n\");\n    printf(\"Enter account number: \");\n    scanf(\"%d\", &acc_no);\n    \n    for(int i = 0; i < account_count; i++) {\n        if(accounts[i].account_number == acc_no) {\n            // Shift all accounts after this one\n            for(int j = i; j < account_count - 1; j++) {\n                accounts[j] = accounts[j + 1];\n            }\n            \n            account_count--;\n            printf(\"Account deleted successfully!\\n\");\n            return;\n        }\n    }\n    \n    printf(\"Account not found!\\n\");\n}\n\nvoid saveToFile() {\n    FILE *file = fopen(\"bank_data.dat\", \"wb\");\n    \n    if(file == NULL) {\n        printf(\"Error saving data!\\n\");\n        return;\n    }\n    \n    // Save account count\n    fwrite(&account_count, sizeof(int), 1, file);\n    \n    // Save all accounts\n    for(int i = 0; i < account_count; i++) {\n        fwrite(&accounts[i], sizeof(struct BankAccount), 1, file);\n    }\n    \n    fclose(file);\n}\n\nvoid loadFromFile() {\n    FILE *file = fopen(\"bank_data.dat\", \"rb\");\n    \n    if(file == NULL) {\n        return;  // File doesn't exist yet\n    }\n    \n    // Read account count\n    fread(&account_count, sizeof(int), 1, file);\n    \n    // Read all accounts\n    for(int i = 0; i < account_count; i++) {\n        fread(&accounts[i], sizeof(struct BankAccount), 1, file);\n    }\n    \n    fclose(file);\n    printf(\"Previous data loaded successfully!\\n\");\n}",
            content: "<h3>Practice: Bank Management System</h3>\n<p>Build a comprehensive Bank Management System with the following features:</p>\n<ol>\n    <li><strong>Account Management:</strong>\n        <ul>\n            <li>Create new bank accounts</li>\n            <li>View all accounts</li>\n            <li>Search for specific account</li>\n            <li>Delete accounts</li>\n        </ul>\n    </li>\n    <li><strong>Transaction Features:</strong>\n        <ul>\n            <li>Deposit money</li>\n            <li>Withdraw money</li>\n            <li>Check balance</li>\n            <li>Minimum balance validation</li>\n        </ul>\n    </li>\n    <li><strong>Data Persistence:</strong>\n        <ul>\n            <li>Save data to binary file</li>\n            <li>Load data from file on startup</li>\n            <li>Automatic data backup</li>\n        </ul>\n    </li>\n    <li><strong>Advanced Features:</strong>\n        <ul>\n            <li>Account types (Savings/Current)</li>\n            <li>Unique account numbers</li>\n            <li>Transaction history</li>\n            <li>Interest calculation</li>\n        </ul>\n    </li>\n</ol>\n\n<h3>Key Concepts Used:</h3>\n<ul>\n    <li>Structures for account data</li>\n    <li>Arrays for storing multiple accounts</li>\n    <li>File handling for data persistence</li>\n    <li>Functions for modular programming</li>\n    <li>Menu-driven interface</li>\n    <li>Error handling and validation</li>\n</ul>"
        }
    ]
},
     cpp: {
    title: "C++ Programming ",
    icon: "<i class='fas fa-c-plus-plus' style='color: #00599C;'></i>",
    topics: [
        { 
            id: "introduction", 
            title: "C++ Introduction", 
            type: "basics", 
            code: "// First C++ Program\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, C++!\" << endl;\n    \n    // Variables and Output\n    int age = 25;\n    double salary = 50000.50;\n    char grade = 'A';\n    string name = \"John Doe\";\n    \n    cout << \"Name: \" << name << endl;\n    cout << \"Age: \" << age << endl;\n    cout << \"Salary: $\" << salary << endl;\n    cout << \"Grade: \" << grade << endl;\n    \n    // Input from user\n    int num;\n    cout << \"\\nEnter a number: \";\n    cin >> num;\n    cout << \"You entered: \" << num << endl;\n    \n    return 0;\n}\n\n// Function example\nint add(int a, int b) {\n    return a + b;\n}",
            content: "<h3>What is C++ Programming?</h3>\n<p>C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup in 1985 as an extension of C. It supports object-oriented, procedural, and generic programming paradigms.</p>\n\n<h3>Key Features:</h3>\n<ul>\n    <li><strong>Object-Oriented:</strong> Classes, objects, inheritance, polymorphism</li>\n    <li><strong>Performance:</strong> Close to hardware, efficient</li>\n    <li><strong>Rich Library:</strong> Standard Template Library (STL)</li>\n    <li><strong>Memory Management:</strong> Both automatic and manual</li>\n    <li><strong>Platform Independent:</strong> Write once, compile anywhere</li>\n    <li><strong>Multi-paradigm:</strong> Supports multiple programming styles</li>\n</ul>\n\n<h3>C vs C++ Comparison:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Feature</th>\n        <th>C</th>\n        <th>C++</th>\n    </tr>\n    <tr>\n        <td>Paradigm</td>\n        <td>Procedural</td>\n        <td>Multi-paradigm</td>\n    </tr>\n    <tr>\n        <td>OOP Support</td>\n        <td>No</td>\n        <td>Yes</td>\n    </tr>\n    <tr>\n        <td>Standard Library</td>\n        <td>Limited</td>\n        <td>Rich (STL)</td>\n    </tr>\n    <tr>\n        <td>Function Overloading</td>\n        <td>No</td>\n        <td>Yes</td>\n    </tr>\n    <tr>\n        <td>Exception Handling</td>\n        <td>No</td>\n        <td>Yes</td>\n    </tr>\n</table>"
        },
        { 
            id: "oop", 
            title: "Object-Oriented Programming", 
            type: "basics", 
            code: "// Class and Object Example\n#include <iostream>\n#include <string>\nusing namespace std;\n\n// Class Definition\nclass Student {\nprivate:\n    string name;\n    int rollNumber;\n    float marks;\n    \npublic:\n    // Constructor\n    Student(string n, int r, float m) {\n        name = n;\n        rollNumber = r;\n        marks = m;\n    }\n    \n    // Member Functions\n    void displayDetails() {\n        cout << \"\\nStudent Details:\" << endl;\n        cout << \"Name: \" << name << endl;\n        cout << \"Roll Number: \" << rollNumber << endl;\n        cout << \"Marks: \" << marks << endl;\n    }\n    \n    // Setter and Getter\n    void setMarks(float m) {\n        if(m >= 0 && m <= 100) {\n            marks = m;\n        }\n    }\n    \n    float getMarks() {\n        return marks;\n    }\n    \n    // Calculate Grade\n    char calculateGrade() {\n        if(marks >= 90) return 'A';\n        else if(marks >= 75) return 'B';\n        else if(marks >= 50) return 'C';\n        else return 'F';\n    }\n};\n\nint main() {\n    // Creating Objects\n    Student s1(\"Alice\", 101, 85.5);\n    Student s2(\"Bob\", 102, 92.0);\n    \n    // Using Object Methods\n    s1.displayDetails();\n    cout << \"Grade: \" << s1.calculateGrade() << endl;\n    \n    s2.displayDetails();\n    cout << \"Grade: \" << s2.calculateGrade() << endl;\n    \n    // Array of Objects\n    Student classStudents[3] = {\n        Student(\"Charlie\", 103, 78.5),\n        Student(\"David\", 104, 88.0),\n        Student(\"Eve\", 105, 95.5)\n    };\n    \n    cout << \"\\n\\nClass Students:\" << endl;\n    for(int i = 0; i < 3; i++) {\n        classStudents[i].displayDetails();\n    }\n    \n    // Pointer to Object\n    Student *ptr = &s1;\n    ptr->displayDetails();\n    \n    // Dynamic Object\n    Student *dynamicStudent = new Student(\"Frank\", 106, 82.5);\n    dynamicStudent->displayDetails();\n    delete dynamicStudent;  // Free memory\n    \n    return 0;\n}",
            content: "<h3>Object-Oriented Programming in C++</h3>\n<p>OOP is a programming paradigm that organizes software design around objects rather than functions and logic. It focuses on objects that contain both data and methods.</p>\n\n<h3>OOP Pillars:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Pillar</th>\n        <th>Description</th>\n        <th>Keyword</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td>Encapsulation</td>\n        <td>Bundling data with methods</td>\n        <td>private, public</td>\n        <td>Class with private data</td>\n    </tr>\n    <tr>\n        <td>Inheritance</td>\n        <td>Creating new classes from existing</td>\n        <td>class, :, public</td>\n        <td>Child class extends Parent</td>\n    </tr>\n    <tr>\n        <td>Polymorphism</td>\n        <td>One interface, multiple implementations</td>\n        <td>virtual, override</td>\n        <td>Function overloading</td>\n    </tr>\n    <tr>\n        <td>Abstraction</td>\n        <td>Hiding complex implementation</td>\n        <td>abstract class</td>\n        <td>Pure virtual functions</td>\n    </tr>\n</table>\n\n<h3>Class Syntax:</h3>\n<pre>\nclass ClassName {\nprivate:\n    // Private data members\n    \npublic:\n    // Constructors\n    // Member functions\n    // Getters and Setters\n    \nprotected:\n    // Accessible in derived classes\n};\n</pre>\n\n<h3>Object Creation:</h3>\n<pre>\n// Static allocation\nClassName obj1;\nClassName obj2(parameters);\n\n// Dynamic allocation\nClassName *ptr = new ClassName();\nClassName *ptr2 = new ClassName(parameters);\n\n// Array of objects\nClassName arr[10];\n</pre>"
        },
        { 
            id: "constructors", 
            title: "Constructors & Destructors", 
            type: "basics", 
            code: "// Constructors and Destructors\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Car {\nprivate:\n    string brand;\n    string model;\n    int year;\n    float price;\n    static int carCount;  // Static member\n    \npublic:\n    // Default Constructor\n    Car() {\n        brand = \"Unknown\";\n        model = \"Unknown\";\n        year = 2024;\n        price = 0.0;\n        carCount++;\n        cout << \"Default constructor called\" << endl;\n    }\n    \n    // Parameterized Constructor\n    Car(string b, string m, int y, float p) {\n        brand = b;\n        model = m;\n        year = y;\n        price = p;\n        carCount++;\n        cout << \"Parameterized constructor called\" << endl;\n    }\n    \n    // Copy Constructor\n    Car(const Car &obj) {\n        brand = obj.brand;\n        model = obj.model;\n        year = obj.year;\n        price = obj.price;\n        carCount++;\n        cout << \"Copy constructor called\" << endl;\n    }\n    \n    // Destructor\n    ~Car() {\n        carCount--;\n        cout << \"Destructor called for \" << brand << endl;\n    }\n    \n    // Member Functions\n    void display() {\n        cout << \"\\nCar Details:\" << endl;\n        cout << \"Brand: \" << brand << endl;\n        cout << \"Model: \" << model << endl;\n        cout << \"Year: \" << year << endl;\n        cout << \"Price: $\" << price << endl;\n    }\n    \n    // Static Member Function\n    static int getCarCount() {\n        return carCount;\n    }\n    \n    // Setter Methods\n    void setBrand(string b) { brand = b; }\n    void setModel(string m) { model = m; }\n    void setYear(int y) { year = y; }\n    void setPrice(float p) { price = p; }\n    \n    // Getter Methods\n    string getBrand() { return brand; }\n    string getModel() { return model; }\n    int getYear() { return year; }\n    float getPrice() { return price; }\n};\n\n// Initialize static member\nint Car::carCount = 0;\n\nint main() {\n    cout << \"Initial car count: \" << Car::getCarCount() << endl;\n    \n    // Using Default Constructor\n    Car car1;\n    car1.display();\n    \n    // Using Parameterized Constructor\n    Car car2(\"Toyota\", \"Camry\", 2023, 25000.0);\n    car2.display();\n    \n    Car car3(\"Honda\", \"Civic\", 2024, 22000.0);\n    car3.display();\n    \n    // Using Copy Constructor\n    Car car4 = car2;  // Copy constructor\n    car4.setYear(2025);\n    car4.setPrice(26000.0);\n    car4.display();\n    \n    // Dynamic Object\n    Car *car5 = new Car(\"Ford\", \"Mustang\", 2024, 35000.0);\n    car5->display();\n    \n    // Array of Objects\n    Car showroom[3] = {\n        Car(\"BMW\", \"X5\", 2024, 65000.0),\n        Car(\"Mercedes\", \"E-Class\", 2024, 70000.0),\n        Car(\"Audi\", \"A4\", 2024, 45000.0)\n    };\n    \n    cout << \"\\nShowroom Cars:\" << endl;\n    for(int i = 0; i < 3; i++) {\n        showroom[i].display();\n    }\n    \n    cout << \"\\nCurrent car count: \" << Car::getCarCount() << endl;\n    \n    // Delete dynamic object\n    delete car5;\n    \n    cout << \"\\nFinal car count: \" << Car::getCarCount() << endl;\n    \n    return 0;\n}",
            content: "<h3>Constructors & Destructors in C++</h3>\n<p>Constructors and destructors are special member functions that handle object initialization and cleanup. Constructors are called when objects are created, and destructors are called when objects are destroyed.</p>\n\n<h3>Constructor Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Constructor Type</th>\n        <th>Purpose</th>\n        <th>Syntax</th>\n        <th>When Called</th>\n    </tr>\n    <tr>\n        <td>Default Constructor</td>\n        <td>Initialize with default values</td>\n        <td>ClassName()</td>\n        <td>Object creation without parameters</td>\n    </tr>\n    <tr>\n        <td>Parameterized Constructor</td>\n        <td>Initialize with given values</td>\n        <td>ClassName(params)</td>\n        <td>Object creation with parameters</td>\n    </tr>\n    <tr>\n        <td>Copy Constructor</td>\n        <td>Initialize from another object</td>\n        <td>ClassName(const ClassName &obj)</td>\n        <td>Copying object, pass by value</td>\n    </tr>\n    <tr>\n        <td>Move Constructor (C++11)</td>\n        <td>Transfer resources efficiently</td>\n        <td>ClassName(ClassName&&)</td>\n        <td>Temporary object transfer</td>\n    </tr>\n</table>\n\n<h3>Destructor:</h3>\n<ul>\n    <li>Name: ~ClassName()</li>\n    <li>No parameters, no return type</li>\n    <li>Automatically called when object goes out of scope</li>\n    <li>Used for cleanup (closing files, releasing memory)</li>\n    <li>Only one destructor per class</li>\n</ul>\n\n<h3>Constructor Overloading:</h3>\n<pre>\nclass Example {\npublic:\n    // Default constructor\n    Example() { /* ... */ }\n    \n    // Parameterized constructor\n    Example(int x) { /* ... */ }\n    \n    // Another parameterized constructor\n    Example(int x, string s) { /* ... */ }\n};\n</pre>\n\n<h3>Object Lifecycle:</h3>\n<pre>\n1. Memory Allocation\n2. Constructor Called (Initialize)\n3. Object in Use\n4. Destructor Called (Cleanup)\n5. Memory Deallocation\n</pre>"
        },
        { 
            id: "inheritance", 
            title: "Inheritance in C++", 
            type: "advanced", 
            code: "// Inheritance Examples\n#include <iostream>\n#include <string>\nusing namespace std;\n\n// Base Class\nclass Person {\nprotected:\n    string name;\n    int age;\n    string gender;\n    \npublic:\n    Person(string n, int a, string g) {\n        name = n;\n        age = a;\n        gender = g;\n    }\n    \n    void displayBasicInfo() {\n        cout << \"Name: \" << name << endl;\n        cout << \"Age: \" << age << endl;\n        cout << \"Gender: \" << gender << endl;\n    }\n    \n    // Virtual function for polymorphism\n    virtual void showRole() {\n        cout << \"I am a person\" << endl;\n    }\n    \n    // Pure virtual function (makes class abstract)\n    virtual void introduction() = 0;\n};\n\n// Derived Class - Single Inheritance\nclass Student : public Person {\nprivate:\n    int rollNumber;\n    string course;\n    float cgpa;\n    \npublic:\n    // Constructor calling base class constructor\n    Student(string n, int a, string g, int r, string c, float gpa)\n        : Person(n, a, g) {\n        rollNumber = r;\n        course = c;\n        cgpa = gpa;\n    }\n    \n    void displayStudentInfo() {\n        displayBasicInfo();\n        cout << \"Roll Number: \" << rollNumber << endl;\n        cout << \"Course: \" << course << endl;\n        cout << \"CGPA: \" << cgpa << endl;\n    }\n    \n    // Override virtual function\n    void showRole() override {\n        cout << \"I am a student\" << endl;\n    }\n    \n    void introduction() override {\n        cout << \"Hello, I'm \" << name << \", a student of \" << course << endl;\n    }\n};\n\n// Another Derived Class\nclass Teacher : public Person {\nprivate:\n    string department;\n    string subject;\n    float salary;\n    \npublic:\n    Teacher(string n, int a, string g, string dept, string sub, float sal)\n        : Person(n, a, g) {\n        department = dept;\n        subject = sub;\n        salary = sal;\n    }\n    \n    void displayTeacherInfo() {\n        displayBasicInfo();\n        cout << \"Department: \" << department << endl;\n        cout << \"Subject: \" << subject << endl;\n        cout << \"Salary: $\" << salary << endl;\n    }\n    \n    void showRole() override {\n        cout << \"I am a teacher\" << endl;\n    }\n    \n    void introduction() override {\n        cout << \"Hello, I'm Prof. \" << name << \", teaching \" << subject << endl;\n    }\n};\n\n// Multi-level Inheritance\nclass CollegeStudent : public Student {\nprivate:\n    int year;\n    string collegeName;\n    \npublic:\n    CollegeStudent(string n, int a, string g, int r, string c, float gpa, \n                   int y, string college)\n        : Student(n, a, g, r, c, gpa) {\n        year = y;\n        collegeName = college;\n    }\n    \n    void displayCollegeInfo() {\n        displayStudentInfo();\n        cout << \"Year: \" << year << endl;\n        cout << \"College: \" << collegeName << endl;\n    }\n    \n    void showRole() override {\n        cout << \"I am a college student\" << endl;\n    }\n};\n\n// Multiple Inheritance\nclass TeachingAssistant : public Student, public Teacher {\nprivate:\n    string assignedCourse;\n    \npublic:\n    TeachingAssistant(string n, int a, string g, \n                      int r, string stuCourse, float gpa,\n                      string dept, string sub, float sal,\n                      string assignCourse)\n        : Student(n, a, g, r, stuCourse, gpa),\n          Teacher(n, a, g, dept, sub, sal) {\n        assignedCourse = assignCourse;\n    }\n    \n    // Override to resolve ambiguity\n    void displayBasicInfo() {\n        Student::displayBasicInfo();\n    }\n    \n    void showRole() override {\n        cout << \"I am a teaching assistant\" << endl;\n    }\n    \n    void introduction() override {\n        cout << \"I'm a TA for \" << assignedCourse << endl;\n    }\n};\n\nint main() {\n    cout << \"===== INHERITANCE DEMONSTRATION =====\\n\" << endl;\n    \n    // Single Inheritance\n    cout << \"1. Student (Single Inheritance):\\n\" << endl;\n    Student s1(\"Alice\", 20, \"Female\", 101, \"Computer Science\", 8.5);\n    s1.displayStudentInfo();\n    s1.showRole();\n    s1.introduction();\n    \n    cout << \"\\n\\n2. Teacher (Single Inheritance):\\n\" << endl;\n    Teacher t1(\"Dr. Smith\", 45, \"Male\", \"Computer Science\", \"Data Structures\", 75000);\n    t1.displayTeacherInfo();\n    t1.showRole();\n    t1.introduction();\n    \n    // Multi-level Inheritance\n    cout << \"\\n\\n3. College Student (Multi-level):\\n\" << endl;\n    CollegeStudent cs1(\"Bob\", 21, \"Male\", 102, \"Engineering\", 9.0, 3, \"MIT\");\n    cs1.displayCollegeInfo();\n    cs1.showRole();\n    \n    // Polymorphism with pointers\n    cout << \"\\n\\n4. Polymorphism Demo:\\n\" << endl;\n    Person* people[3];\n    people[0] = new Student(\"Charlie\", 22, \"Male\", 103, \"Physics\", 7.8);\n    people[1] = new Teacher(\"Dr. Johnson\", 50, \"Female\", \"Mathematics\", \"Calculus\", 80000);\n    people[2] = new CollegeStudent(\"Diana\", 19, \"Female\", 104, \"Biology\", 8.2, 2, \"Harvard\");\n    \n    for(int i = 0; i < 3; i++) {\n        cout << \"\\nPerson \" << i+1 << \":\" << endl;\n        people[i]->introduction();\n        people[i]->showRole();\n    }\n    \n    // Cleanup\n    for(int i = 0; i < 3; i++) {\n        delete people[i];\n    }\n    \n    return 0;\n}",
            content: "<h3>Inheritance in C++</h3>\n<p>Inheritance is a fundamental OOP concept that allows a class to inherit properties and behaviors from another class. The existing class is called the base/parent class, and the new class is called the derived/child class.</p>\n\n<h3>Inheritance Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Inheritance Type</th>\n        <th>Description</th>\n        <th>Syntax</th>\n        <th>Diagram</th>\n    </tr>\n    <tr>\n        <td>Single</td>\n        <td>One derived class from one base class</td>\n        <td>class B : public A</td>\n        <td>A → B</td>\n    </tr>\n    <tr>\n        <td>Multiple</td>\n        <td>One derived class from multiple base classes</td>\n        <td>class C : public A, public B</td>\n        <td>A, B → C</td>\n    </tr>\n    <tr>\n        <td>Multi-level</td>\n        <td>Derived class becomes base for another</td>\n        <td>class C : public B, class B : public A</td>\n        <td>A → B → C</td>\n    </tr>\n    <tr>\n        <td>Hierarchical</td>\n        <td>Multiple derived classes from single base</td>\n        <td>class B : public A, class C : public A</td>\n        <td>A → B, A → C</td>\n    </tr>\n    <tr>\n        <td>Hybrid</td>\n        <td>Combination of multiple types</td>\n        <td>Varies</td>\n        <td>Complex structure</td>\n    </tr>\n</table>\n\n<h3>Access Specifiers in Inheritance:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Base Class Access</th>\n        <th>Inheritance Type</th>\n        <th>Access in Derived Class</th>\n    </tr>\n    <tr>\n        <td>private</td>\n        <td>public</td>\n        <td>Not accessible</td>\n    </tr>\n    <tr>\n        <td>protected</td>\n        <td>public</td>\n        <td>protected</td>\n    </tr>\n    <tr>\n        <td>public</td>\n        <td>public</td>\n        <td>public</td>\n    </tr>\n    <tr>\n        <td>private</td>\n        <td>protected</td>\n        <td>Not accessible</td>\n    </tr>\n    <tr>\n        <td>protected</td>\n        <td>protected</td>\n        <td>protected</td>\n    </tr>\n    <tr>\n        <td>public</td>\n        <td>protected</td>\n        <td>protected</td>\n    </tr>\n</table>\n\n<h3>Constructor Calling Order:</h3>\n<pre>\n1. Base class constructor\n2. Member object constructors (in declaration order)\n3. Derived class constructor\n</pre>"
        },
        { 
            id: "polymorphism", 
            title: "Polymorphism in C++", 
            type: "advanced", 
            code: "// Polymorphism Examples\n#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\n// Base Class with virtual functions\nclass Shape {\nprotected:\n    string name;\n    string color;\n    \npublic:\n    Shape(string n, string c) : name(n), color(c) {}\n    \n    // Virtual function - can be overridden\n    virtual void display() {\n        cout << \"Shape: \" << name << \", Color: \" << color << endl;\n    }\n    \n    // Pure virtual function - must be overridden\n    virtual double calculateArea() = 0;\n    virtual double calculatePerimeter() = 0;\n    \n    virtual ~Shape() {\n        cout << \"Shape \" << name << \" destroyed\" << endl;\n    }\n};\n\n// Derived Class 1\nclass Circle : public Shape {\nprivate:\n    double radius;\n    \npublic:\n    Circle(string n, string c, double r) : Shape(n, c), radius(r) {}\n    \n    // Function Overriding\n    void display() override {\n        cout << \"Circle: \" << name << \", Color: \" << color \n             << \", Radius: \" << radius << endl;\n    }\n    \n    double calculateArea() override {\n        return 3.14159 * radius * radius;\n    }\n    \n    double calculatePerimeter() override {\n        return 2 * 3.14159 * radius;\n    }\n};\n\n// Derived Class 2\nclass Rectangle : public Shape {\nprivate:\n    double length;\n    double width;\n    \npublic:\n    Rectangle(string n, string c, double l, double w) \n        : Shape(n, c), length(l), width(w) {}\n    \n    void display() override {\n        cout << \"Rectangle: \" << name << \", Color: \" << color \n             << \", Length: \" << length << \", Width: \" << width << endl;\n    }\n    \n    double calculateArea() override {\n        return length * width;\n    }\n    \n    double calculatePerimeter() override {\n        return 2 * (length + width);\n    }\n};\n\n// Derived Class 3\nclass Triangle : public Shape {\nprivate:\n    double base;\n    double height;\n    double side1, side2, side3;\n    \npublic:\n    Triangle(string n, string c, double b, double h, double s1, double s2, double s3)\n        : Shape(n, c), base(b), height(h), side1(s1), side2(s2), side3(s3) {}\n    \n    void display() override {\n        cout << \"Triangle: \" << name << \", Color: \" << color \n             << \", Base: \" << base << \", Height: \" << height << endl;\n    }\n    \n    double calculateArea() override {\n        return 0.5 * base * height;\n    }\n    \n    double calculatePerimeter() override {\n        return side1 + side2 + side3;\n    }\n};\n\n// Function Overloading (Compile-time Polymorphism)\nclass Calculator {\npublic:\n    // Overloaded add functions\n    int add(int a, int b) {\n        return a + b;\n    }\n    \n    double add(double a, double b) {\n        return a + b;\n    }\n    \n    string add(string a, string b) {\n        return a + b;\n    }\n    \n    int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    \n    // Overloaded with default parameters\n    double multiply(double a, double b, double c = 1.0) {\n        return a * b * c;\n    }\n};\n\n// Operator Overloading\nclass Complex {\nprivate:\n    double real;\n    double imag;\n    \npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    // Operator overloading for +\n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n    \n    // Operator overloading for -\n    Complex operator-(const Complex& other) {\n        return Complex(real - other.real, imag - other.imag);\n    }\n    \n    // Operator overloading for *\n    Complex operator*(const Complex& other) {\n        return Complex(real * other.real - imag * other.imag,\n                      real * other.imag + imag * other.real);\n    }\n    \n    // Operator overloading for << (output)\n    friend ostream& operator<<(ostream& os, const Complex& c) {\n        os << c.real << \" + \" << c.imag << \"i\";\n        return os;\n    }\n    \n    // Operator overloading for >> (input)\n    friend istream& operator>>(istream& is, Complex& c) {\n        cout << \"Enter real part: \";\n        is >> c.real;\n        cout << \"Enter imaginary part: \";\n        is >> c.imag;\n        return is;\n    }\n};\n\nint main() {\n    cout << \"===== POLYMORPHISM DEMONSTRATION =====\\n\" << endl;\n    \n    // Runtime Polymorphism\n    cout << \"1. Runtime Polymorphism (Virtual Functions):\\n\" << endl;\n    \n    vector<Shape*> shapes;\n    shapes.push_back(new Circle(\"Red Circle\", \"Red\", 5.0));\n    shapes.push_back(new Rectangle(\"Blue Rectangle\", \"Blue\", 4.0, 6.0));\n    shapes.push_back(new Triangle(\"Green Triangle\", \"Green\", 3.0, 4.0, 3.0, 4.0, 5.0));\n    \n    for(Shape* shape : shapes) {\n        shape->display();\n        cout << \"Area: \" << shape->calculateArea() << endl;\n        cout << \"Perimeter: \" << shape->calculatePerimeter() << endl;\n        cout << endl;\n    }\n    \n    // Cleanup\n    for(Shape* shape : shapes) {\n        delete shape;\n    }\n    shapes.clear();\n    \n    // Compile-time Polymorphism - Function Overloading\n    cout << \"\\n2. Compile-time Polymorphism (Function Overloading):\\n\" << endl;\n    Calculator calc;\n    \n    cout << \"calc.add(5, 10) = \" << calc.add(5, 10) << endl;\n    cout << \"calc.add(3.5, 2.7) = \" << calc.add(3.5, 2.7) << endl;\n    cout << \"calc.add(\\\"Hello\\\", \\\" World\\\") = \" << calc.add(\"Hello\", \" World\") << endl;\n    cout << \"calc.add(1, 2, 3) = \" << calc.add(1, 2, 3) << endl;\n    cout << \"calc.multiply(2, 3) = \" << calc.multiply(2, 3) << endl;\n    cout << \"calc.multiply(2, 3, 4) = \" << calc.multiply(2, 3, 4) << endl;\n    \n    // Operator Overloading\n    cout << \"\\n3. Operator Overloading:\\n\" << endl;\n    Complex c1(3, 4);\n    Complex c2(1, 2);\n    \n    Complex sum = c1 + c2;\n    Complex diff = c1 - c2;\n    Complex prod = c1 * c2;\n    \n    cout << \"c1 = \" << c1 << endl;\n    cout << \"c2 = \" << c2 << endl;\n    cout << \"c1 + c2 = \" << sum << endl;\n    cout << \"c1 - c2 = \" << diff << endl;\n    cout << \"c1 * c2 = \" << prod << endl;\n    \n    // Input complex number\n    Complex c3;\n    cout << \"\\nEnter a complex number:\\n\";\n    cin >> c3;\n    cout << \"You entered: \" << c3 << endl;\n    \n    return 0;\n}",
            content: "<h3>Polymorphism in C++</h3>\n<p>Polymorphism means \"many forms\" - the ability of objects of different classes to respond to the same message in different ways. It allows one interface to be used for a general class of actions.</p>\n\n<h3>Types of Polymorphism:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Type</th>\n        <th>Mechanism</th>\n        <th>When Resolved</th>\n        <th>Keywords</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td>Compile-time</td>\n        <td>Function Overloading<br>Operator Overloading</td>\n        <td>Compile time</td>\n        <td>-</td>\n        <td>add(int, int)<br>add(double, double)</td>\n    </tr>\n    <tr>\n        <td>Runtime</td>\n        <td>Function Overriding<br>Virtual Functions</td>\n        <td>Runtime</td>\n        <td>virtual, override</td>\n        <td>Base class pointer to derived object</td>\n    </tr>\n</table>\n\n<h3>Virtual Functions:</h3>\n<ul>\n    <li>Declared with <code>virtual</code> keyword in base class</li>\n    <li>Can be overridden in derived classes</li>\n    <li>Enables runtime polymorphism</li>\n    <li>Late binding (dynamic binding)</li>\n</ul>\n\n<h3>Pure Virtual Functions & Abstract Classes:</h3>\n<pre>\n// Pure virtual function\nvirtual returnType functionName() = 0;\n\n// Abstract class (cannot be instantiated)\nclass AbstractClass {\npublic:\n    virtual void pureVirtualFunction() = 0;\n    virtual ~AbstractClass() {}\n};\n</pre>\n\n<h3>Function Overloading vs Overriding:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Aspect</th>\n        <th>Function Overloading</th>\n        <th>Function Overriding</th>\n    </tr>\n    <tr>\n        <td>Scope</td>\n        <td>Same class</td>\n        <td>Different classes (inheritance)</td>\n    </tr>\n    <tr>\n        <td>Function Signature</td>\n        <td>Must differ</td>\n        <td>Must be same</td>\n    </tr>\n    <tr>\n        <td>Return Type</td>\n        <td>Can differ</td>\n        <td>Must be same (or covariant)</td>\n    </tr>\n    <tr>\n        <td>Resolution</td>\n        <td>Compile-time</td>\n        <td>Runtime</td>\n    </tr>\n    <tr>\n        <td>Keyword</td>\n        <td>Not required</td>\n        <td>virtual (base), override (derived)</td>\n    </tr>\n</table>\n\n<h3>Polymorphism Flow:</h3>\n<pre>\nBase Class Pointer\n      ↓\nVirtual Function Table (vtable)\n      ↓\nCalls appropriate derived class function\n      ↓\nDifferent behaviors for different objects\n</pre>"
        },
        { 
            id: "templates", 
            title: "Templates & STL", 
            type: "advanced", 
            code: "// Templates and STL Examples\n#include <iostream>\n#include <vector>\n#include <list>\n#include <deque>\n#include <stack>\n#include <queue>\n#include <set>\n#include <map>\n#include <algorithm>\n#include <string>\n#include <functional>\nusing namespace std;\n\n// Function Template\ntemplate <typename T>\nT findMax(T a, T b) {\n    return (a > b) ? a : b;\n}\n\n// Multiple Type Parameters\ntemplate <typename T1, typename T2>\nvoid displayPair(T1 first, T2 second) {\n    cout << \"First: \" << first << \", Second: \" << second << endl;\n}\n\n// Class Template\ntemplate <typename T>\nclass Array {\nprivate:\n    T* arr;\n    int size;\n    \npublic:\n    Array(int s) : size(s) {\n        arr = new T[size];\n    }\n    \n    ~Array() {\n        delete[] arr;\n    }\n    \n    void setElement(int index, T value) {\n        if(index >= 0 && index < size) {\n            arr[index] = value;\n        }\n    }\n    \n    T getElement(int index) {\n        if(index >= 0 && index < size) {\n            return arr[index];\n        }\n        return T();  // Default value\n    }\n    \n    void display() {\n        cout << \"Array elements: \";\n        for(int i = 0; i < size; i++) {\n            cout << arr[i] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // Template member function\n    template <typename U>\n    void copyFrom(const Array<U>& other) {\n        for(int i = 0; i < size && i < other.size; i++) {\n            arr[i] = static_cast<T>(other.getElement(i));\n        }\n    }\n};\n\n// STL Algorithms Examples\ntemplate <typename T>\nvoid printContainer(const T& container, const string& name = \"\") {\n    if(!name.empty()) {\n        cout << name << \": \";\n    }\n    for(const auto& element : container) {\n        cout << element << \" \";\n    }\n    cout << endl;\n}\n\nint main() {\n    cout << \"===== TEMPLATES AND STL DEMONSTRATION =====\\n\" << endl;\n    \n    // Function Templates\n    cout << \"1. Function Templates:\\n\" << endl;\n    cout << \"findMax(5, 10) = \" << findMax(5, 10) << endl;\n    cout << \"findMax(3.14, 2.71) = \" << findMax(3.14, 2.71) << endl;\n    cout << \"findMax('a', 'z') = \" << findMax('a', 'z') << endl;\n    cout << \"findMax(string(\\\"apple\\\"), string(\\\"banana\\\")) = \" \n         << findMax(string(\"apple\"), string(\"banana\")) << endl;\n    \n    displayPair(10, 3.14);\n    displayPair(\"Hello\", 'A');\n    \n    // Class Templates\n    cout << \"\\n2. Class Templates:\\n\" << endl;\n    \n    Array<int> intArray(5);\n    for(int i = 0; i < 5; i++) {\n        intArray.setElement(i, (i+1) * 10);\n    }\n    intArray.display();\n    \n    Array<double> doubleArray(3);\n    doubleArray.setElement(0, 3.14);\n    doubleArray.setElement(1, 2.71);\n    doubleArray.setElement(2, 1.618);\n    doubleArray.display();\n    \n    Array<string> stringArray(2);\n    stringArray.setElement(0, \"Hello\");\n    stringArray.setElement(1, \"World\");\n    stringArray.display();\n    \n    // STL Vector\n    cout << \"\\n3. STL Vector (Dynamic Array):\\n\" << endl;\n    vector<int> numbers = {5, 2, 8, 1, 9, 3};\n    \n    cout << \"Original vector: \";\n    printContainer(numbers);\n    \n    // Add elements\n    numbers.push_back(10);\n    numbers.push_back(4);\n    cout << \"After push_back: \";\n    printContainer(numbers);\n    \n    // Sort\n    sort(numbers.begin(), numbers.end());\n    cout << \"Sorted: \";\n    printContainer(numbers);\n    \n    // Reverse sort\n    sort(numbers.rbegin(), numbers.rend());\n    cout << \"Reverse sorted: \";\n    printContainer(numbers);\n    \n    // Find element\n    auto it = find(numbers.begin(), numbers.end(), 8);\n    if(it != numbers.end()) {\n        cout << \"Found 8 at position: \" << distance(numbers.begin(), it) << endl;\n    }\n    \n    // Remove element\n    numbers.erase(remove(numbers.begin(), numbers.end(), 3), numbers.end());\n    cout << \"After removing 3: \";\n    printContainer(numbers);\n    \n    // STL List (Doubly Linked List)\n    cout << \"\\n4. STL List:\\n\" << endl;\n    list<string> names = {\"Alice\", \"Bob\", \"Charlie\", \"David\"};\n    printContainer(names, \"Names\");\n    \n    // Add to front and back\n    names.push_front(\"Zoe\");\n    names.push_back(\"Eve\");\n    printContainer(names, \"After push_front/push_back\");\n    \n    // Sort list\n    names.sort();\n    printContainer(names, \"Sorted names\");\n    \n    // STL Map (Key-Value Pairs)\n    cout << \"\\n5. STL Map:\\n\" << endl;\n    map<string, int> studentGrades;\n    \n    studentGrades[\"Alice\"] = 85;\n    studentGrades[\"Bob\"] = 92;\n    studentGrades[\"Charlie\"] = 78;\n    studentGrades[\"David\"] = 88;\n    \n    cout << \"Student Grades:\\n\";\n    for(const auto& pair : studentGrades) {\n        cout << pair.first << \": \" << pair.second << endl;\n    }\n    \n    // Find in map\n    auto mapIt = studentGrades.find(\"Bob\");\n    if(mapIt != studentGrades.end()) {\n        cout << \"\\nFound Bob's grade: \" << mapIt->second << endl;\n    }\n    \n    // STL Set (Unique Sorted Elements)\n    cout << \"\\n6. STL Set:\\n\" << endl;\n    set<int> uniqueNumbers = {5, 2, 8, 2, 5, 1, 9, 1, 3};\n    printContainer(uniqueNumbers, \"Unique numbers\");\n    \n    // Check if element exists\n    if(uniqueNumbers.find(8) != uniqueNumbers.end()) {\n        cout << \"8 is in the set\" << endl;\n    }\n    \n    // STL Stack (LIFO)\n    cout << \"\\n7. STL Stack:\\n\" << endl;\n    stack<int> s;\n    \n    s.push(10);\n    s.push(20);\n    s.push(30);\n    \n    cout << \"Stack top: \" << s.top() << endl;\n    s.pop();\n    cout << \"After pop, top: \" << s.top() << endl;\n    \n    // STL Queue (FIFO)\n    cout << \"\\n8. STL Queue:\\n\" << endl;\n    queue<string> q;\n    \n    q.push(\"First\");\n    q.push(\"Second\");\n    q.push(\"Third\");\n    \n    cout << \"Queue front: \" << q.front() << endl;\n    cout << \"Queue back: \" << q.back() << endl;\n    q.pop();\n    cout << \"After pop, front: \" << q.front() << endl;\n    \n    // Lambda Expressions (C++11)\n    cout << \"\\n9. Lambda Expressions:\\n\" << endl;\n    vector<int> nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\n    \n    // Filter even numbers\n    vector<int> evenNumbers;\n    copy_if(nums.begin(), nums.end(), back_inserter(evenNumbers),\n            [](int n) { return n % 2 == 0; });\n    printContainer(evenNumbers, \"Even numbers\");\n    \n    // Transform (square each element)\n    vector<int> squares;\n    transform(nums.begin(), nums.end(), back_inserter(squares),\n              [](int n) { return n * n; });\n    printContainer(squares, \"Squares\");\n    \n    // Sort with custom comparator\n    vector<string> words = {\"banana\", \"apple\", \"cherry\", \"date\", \"elderberry\"};\n    sort(words.begin(), words.end(),\n         [](const string& a, const string& b) {\n             return a.length() < b.length();\n         });\n    printContainer(words, \"Words sorted by length\");\n    \n    return 0;\n}",
            content: "<h3>Templates & STL in C++</h3>\n<p>Templates enable generic programming by allowing functions and classes to work with different data types. STL (Standard Template Library) is a powerful library that provides ready-to-use data structures and algorithms.</p>\n\n<h3>Templates Types:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Template Type</th>\n        <th>Description</th>\n        <th>Syntax</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td>Function Template</td>\n        <td>Generic function</td>\n        <td>template <typename T></td>\n        <td>swap(T& a, T& b)</td>\n    </tr>\n    <tr>\n        <td>Class Template</td>\n        <td>Generic class</td>\n        <td>template <class T></td>\n        <td>vector<T>, stack<T></td>\n    </tr>\n    <tr>\n        <td>Template Specialization</td>\n        <td>Special behavior for specific type</td>\n        <td>template <></td>\n        <td>Special handling for char*</td>\n    </tr>\n</table>\n\n<h3>STL Components:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Component</th>\n        <th>Description</th>\n        <th>Common Classes</th>\n        <th>Time Complexity</th>\n    </tr>\n    <tr>\n        <td>Containers</td>\n        <td>Store data</td>\n        <td>vector, list, deque, array</td>\n        <td>Varies</td>\n    </tr>\n    <tr>\n        <td>Sequence Containers</td>\n        <td>Linear arrangements</td>\n        <td>vector, list, deque</td>\n        <td>O(1) access</td>\n    </tr>\n    <tr>\n        <td>Associative Containers</td>\n        <td>Sorted, key-value</td>\n        <td>set, map, multiset, multimap</td>\n        <td>O(log n)</td>\n    </tr>\n    <tr>\n        <td>Container Adapters</td>\n        <td>Interface adapters</td>\n        <td>stack, queue, priority_queue</td>\n        <td>Varies</td>\n    </tr>\n    <tr>\n        <td>Algorithms</td>\n        <td>Operations on containers</td>\n        <td>sort, find, transform</td>\n        <td>Varies</td>\n    </tr>\n    <tr>\n        <td>Iterators</td>\n        <td>Access container elements</td>\n        <td>begin(), end(), rbegin()</td>\n        <td>O(1)</td>\n    </tr>\n    <tr>\n        <td>Functors</td>\n        <td>Function objects</td>\n        <td>less<T>, greater<T></td>\n        <td>O(1)</td>\n    </tr>\n</table>\n\n<h3>Common STL Algorithms:</h3>\n<ul>\n    <li><strong>Non-modifying:</strong> find, count, search, for_each</li>\n    <li><strong>Modifying:</strong> copy, move, transform, replace</li>\n    <li><strong>Sorting:</strong> sort, stable_sort, partial_sort</li>\n    <li><strong>Binary Search:</strong> lower_bound, upper_bound, binary_search</li>\n    <li><strong>Heap:</strong> make_heap, push_heap, pop_heap</li>\n    <li><strong>Min/Max:</strong> min, max, min_element, max_element</li>\n</ul>\n\n<h3>Lambda Expressions (C++11):</h3>\n<pre>\n[capture](parameters) -> return_type {\n    // function body\n};\n\n// Example:\nauto square = [](int x) { return x * x; };\nvector<int> v = {1, 2, 3, 4, 5};\ntransform(v.begin(), v.end(), v.begin(), square);\n</pre>"
        },
        { 
            id: "files", 
            title: "File Handling in C++", 
            type: "advanced", 
            code: "// File Handling Examples\n#include <iostream>\n#include <fstream>\n#include <string>\n#include <vector>\n#include <sstream>\n#include <iomanip>\nusing namespace std;\n\nclass Student {\nprivate:\n    int rollNo;\n    string name;\n    float marks;\n    char grade;\n    \npublic:\n    Student() : rollNo(0), name(\"\"), marks(0.0), grade('F') {}\n    \n    Student(int r, string n, float m) : rollNo(r), name(n), marks(m) {\n        calculateGrade();\n    }\n    \n    void calculateGrade() {\n        if(marks >= 90) grade = 'A';\n        else if(marks >= 75) grade = 'B';\n        else if(marks >= 50) grade = 'C';\n        else grade = 'F';\n    }\n    \n    void display() const {\n        cout << left << setw(10) << rollNo \n             << setw(20) << name \n             << setw(10) << marks \n             << setw(5) << grade << endl;\n    }\n    \n    // Getters\n    int getRollNo() const { return rollNo; }\n    string getName() const { return name; }\n    float getMarks() const { return marks; }\n    char getGrade() const { return grade; }\n    \n    // Setters\n    void setRollNo(int r) { rollNo = r; }\n    void setName(string n) { name = n; }\n    void setMarks(float m) { marks = m; calculateGrade(); }\n    \n    // For file operations\n    friend ofstream& operator<<(ofstream& ofs, const Student& s);\n    friend ifstream& operator>>(ifstream& ifs, Student& s);\n};\n\n// Overload << for file output\nofstream& operator<<(ofstream& ofs, const Student& s) {\n    ofs << s.rollNo << endl;\n    ofs << s.name << endl;\n    ofs << s.marks << endl;\n    ofs << s.grade << endl;\n    return ofs;\n}\n\n// Overload >> for file input\nifstream& operator>>(ifstream& ifs, Student& s) {\n    ifs >> s.rollNo;\n    ifs.ignore();  // Ignore newline\n    getline(ifs, s.name);\n    ifs >> s.marks;\n    ifs >> s.grade;\n    return ifs;\n}\n\nclass StudentRecordSystem {\nprivate:\n    vector<Student> students;\n    string filename = \"students.dat\";\n    \npublic:\n    void addStudent() {\n        int rollNo;\n        string name;\n        float marks;\n        \n        cout << \"\\nEnter Student Details:\" << endl;\n        cout << \"Roll No: \";\n        cin >> rollNo;\n        cin.ignore();  // Clear input buffer\n        \n        cout << \"Name: \";\n        getline(cin, name);\n        \n        cout << \"Marks: \";\n        cin >> marks;\n        \n        Student s(rollNo, name, marks);\n        students.push_back(s);\n        \n        cout << \"Student added successfully!\" << endl;\n    }\n    \n    void displayAllStudents() {\n        if(students.empty()) {\n            cout << \"\\nNo students found!\" << endl;\n            return;\n        }\n        \n        cout << \"\\n\" << string(60, '=') << endl;\n        cout << \"STUDENT RECORDS\" << endl;\n        cout << string(60, '=') << endl;\n        cout << left << setw(10) << \"Roll No\" \n             << setw(20) << \"Name\" \n             << setw(10) << \"Marks\" \n             << setw(5) << \"Grade\" << endl;\n        cout << string(60, '-') << endl;\n        \n        for(const auto& student : students) {\n            student.display();\n        }\n        \n        cout << string(60, '=') << endl;\n        cout << \"Total Students: \" << students.size() << endl;\n    }\n    \n    void searchStudent() {\n        int rollNo;\n        cout << \"\\nEnter Roll No to search: \";\n        cin >> rollNo;\n        \n        for(const auto& student : students) {\n            if(student.getRollNo() == rollNo) {\n                cout << \"\\nStudent Found!\" << endl;\n                cout << string(40, '-') << endl;\n                student.display();\n                return;\n            }\n        }\n        \n        cout << \"Student with Roll No \" << rollNo << \" not found!\" << endl;\n    }\n    \n    void saveToFile() {\n        ofstream outFile(filename, ios::binary);\n        \n        if(!outFile) {\n            cerr << \"Error opening file for writing!\" << endl;\n            return;\n        }\n        \n        // Write number of students\n        int count = students.size();\n        outFile.write(reinterpret_cast<char*>(&count), sizeof(count));\n        \n        // Write each student\n        for(const auto& student : students) {\n            outFile.write(reinterpret_cast<const char*>(&student), sizeof(Student));\n        }\n        \n        outFile.close();\n        cout << \"\\nData saved to file successfully!\" << endl;\n    }\n    \n    void loadFromFile() {\n        ifstream inFile(filename, ios::binary);\n        \n        if(!inFile) {\n            cout << \"No existing data file found. Starting fresh.\" << endl;\n            return;\n        }\n        \n        // Clear existing data\n        students.clear();\n        \n        // Read number of students\n        int count;\n        inFile.read(reinterpret_cast<char*>(&count), sizeof(count));\n        \n        // Read each student\n        for(int i = 0; i < count; i++) {\n            Student s;\n            inFile.read(reinterpret_cast<char*>(&s), sizeof(Student));\n            students.push_back(s);\n        }\n        \n        inFile.close();\n        cout << \"\\nData loaded from file successfully!\" << endl;\n    }\n    \n    // Text file operations\n    void saveToTextFile() {\n        ofstream textFile(\"students.txt\");\n        \n        if(!textFile) {\n            cerr << \"Error creating text file!\" << endl;\n            return;\n        }\n        \n        // Write header\n        textFile << left << setw(10) << \"Roll No\" \n                 << setw(20) << \"Name\" \n                 << setw(10) << \"Marks\" \n                 << setw(5) << \"Grade\" << endl;\n        textFile << string(45, '-') << endl;\n        \n        // Write data\n        for(const auto& student : students) {\n            textFile << left << setw(10) << student.getRollNo() \n                     << setw(20) << student.getName() \n                     << setw(10) << student.getMarks() \n                     << setw(5) << student.getGrade() << endl;\n        }\n        \n        textFile.close();\n        cout << \"\\nData saved to text file successfully!\" << endl;\n    }\n    \n    void loadFromTextFile() {\n        ifstream textFile(\"students.txt\");\n        \n        if(!textFile) {\n            cout << \"No text file found!\" << endl;\n            return;\n        }\n        \n        string line;\n        // Skip header\n        getline(textFile, line);\n        getline(textFile, line);\n        \n        students.clear();\n        \n        while(getline(textFile, line)) {\n            if(line.empty()) continue;\n            \n            istringstream iss(line);\n            int rollNo;\n            string name;\n            float marks;\n            char grade;\n            \n            iss >> rollNo >> name >> marks >> grade;\n            \n            Student s(rollNo, name, marks);\n            students.push_back(s);\n        }\n        \n        textFile.close();\n        cout << \"\\nData loaded from text file successfully!\" << endl;\n    }\n    \n    // CSV file operations\n    void exportToCSV() {\n        ofstream csvFile(\"students.csv\");\n        \n        if(!csvFile) {\n            cerr << \"Error creating CSV file!\" << endl;\n            return;\n        }\n        \n        // Write header\n        csvFile << \"Roll No,Name,Marks,Grade\\n\";\n        \n        // Write data\n        for(const auto& student : students) {\n            csvFile << student.getRollNo() << \",\"\n                    << \"\\\"\" << student.getName() << \"\\\",\"\n                    << student.getMarks() << \",\"\n                    << student.getGrade() << \"\\n\";\n        }\n        \n        csvFile.close();\n        cout << \"\\nData exported to CSV file successfully!\" << endl;\n    }\n    \n    void showMenu() {\n        int choice;\n        \n        do {\n            cout << \"\\n===== STUDENT RECORD SYSTEM =====\" << endl;\n            cout << \"1. Add Student\" << endl;\n            cout << \"2. Display All Students\" << endl;\n            cout << \"3. Search Student\" << endl;\n            cout << \"4. Save to Binary File\" << endl;\n            cout << \"5. Load from Binary File\" << endl;\n            cout << \"6. Save to Text File\" << endl;\n            cout << \"7. Load from Text File\" << endl;\n            cout << \"8. Export to CSV\" << endl;\n            cout << \"9. Exit\" << endl;\n            cout << \"Enter your choice: \";\n            cin >> choice;\n            \n            switch(choice) {\n                case 1: addStudent(); break;\n                case 2: displayAllStudents(); break;\n                case 3: searchStudent(); break;\n                case 4: saveToFile(); break;\n                case 5: loadFromFile(); break;\n                case 6: saveToTextFile(); break;\n                case 7: loadFromTextFile(); break;\n                case 8: exportToCSV(); break;\n                case 9: \n                    saveToFile();\n                    cout << \"\\nThank you! Data saved. Goodbye!\" << endl;\n                    break;\n                default:\n                    cout << \"Invalid choice! Try again.\" << endl;\n            }\n        } while(choice != 9);\n    }\n};\n\nint main() {\n    cout << \"===== FILE HANDLING IN C++ =====\\n\" << endl;\n    \n    // Basic file operations\n    cout << \"1. Basic File Operations:\\n\" << endl;\n    \n    // Writing to a file\n    ofstream outFile(\"example.txt\");\n    if(outFile) {\n        outFile << \"Hello, File Handling in C++!\\n\";\n        outFile << \"This is a sample text file.\\n\";\n        outFile << \"Line 3 of the file.\\n\";\n        outFile.close();\n        cout << \"Text written to file successfully!\" << endl;\n    }\n    \n    // Reading from a file\n    ifstream inFile(\"example.txt\");\n    if(inFile) {\n        cout << \"\\nFile Contents:\" << endl;\n        cout << \"----------------\" << endl;\n        string line;\n        while(getline(inFile, line)) {\n            cout << line << endl;\n        }\n        inFile.close();\n    }\n    \n    // Appending to a file\n    ofstream appendFile(\"example.txt\", ios::app);\n    if(appendFile) {\n        appendFile << \"\\nThis line was appended.\\n\";\n        appendFile << \"End of file.\\n\";\n        appendFile.close();\n        cout << \"\\nText appended to file successfully!\" << endl;\n    }\n    \n    // Binary file operations\n    cout << \"\\n2. Binary File Operations:\\n\" << endl;\n    \n    // Write binary data\n    ofstream binOut(\"data.bin\", ios::binary);\n    if(binOut) {\n        int numbers[] = {10, 20, 30, 40, 50};\n        binOut.write(reinterpret_cast<char*>(numbers), sizeof(numbers));\n        binOut.close();\n        cout << \"Binary data written successfully!\" << endl;\n    }\n    \n    // Read binary data\n    ifstream binIn(\"data.bin\", ios::binary);\n    if(binIn) {\n        int readNumbers[5];\n        binIn.read(reinterpret_cast<char*>(readNumbers), sizeof(readNumbers));\n        binIn.close();\n        \n        cout << \"Numbers read from binary file: \";\n        for(int i = 0; i < 5; i++) {\n            cout << readNumbers[i] << \" \";\n        }\n        cout << endl;\n    }\n    \n    // File position operations\n    cout << \"\\n3. File Position Operations:\\n\" << endl;\n    \n    fstream file(\"example.txt\", ios::in | ios::out);\n    if(file) {\n        // Get current position\n        streampos pos = file.tellg();\n        cout << \"Current position: \" << pos << endl;\n        \n        // Move to beginning\n        file.seekg(0, ios::beg);\n        \n        // Read first 5 characters\n        char buffer[6];\n        file.read(buffer, 5);\n        buffer[5] = '\\0';\n        cout << \"First 5 characters: \" << buffer << endl;\n        \n        // Move 10 bytes from current position\n        file.seekg(10, ios::cur);\n        pos = file.tellg();\n        cout << \"Position after moving 10 bytes: \" << pos << endl;\n        \n        file.close();\n    }\n    \n    // Complete Student Record System\n    cout << \"\\n4. Student Record System:\\n\" << endl;\n    StudentRecordSystem system;\n    system.loadFromFile();  // Load existing data\n    system.showMenu();\n    \n    return 0;\n}",
            content: "<h3>File Handling in C++</h3>\n<p>C++ provides comprehensive file handling capabilities through the fstream library. It supports both text and binary file operations with various modes and operations.</p>\n\n<h3>File Stream Classes:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Class</th>\n        <th>Description</th>\n        <th>Inherits From</th>\n        <th>Purpose</th>\n    </tr>\n    <tr>\n        <td>ifstream</td>\n        <td>Input file stream</td>\n        <td>istream</td>\n        <td>Reading from files</td>\n    </tr>\n    <tr>\n        <td>ofstream</td>\n        <td>Output file stream</td>\n        <td>ostream</td>\n        <td>Writing to files</td>\n    </tr>\n    <tr>\n        <td>fstream</td>\n        <td>File stream</td>\n        <td>iostream</td>\n        <td>Both reading and writing</td>\n    </tr>\n</table>\n\n<h3>File Opening Modes:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Mode</th>\n        <th>Description</th>\n        <th>Constant</th>\n    </tr>\n    <tr>\n        <td>Read</td>\n        <td>Open for reading</td>\n        <td>ios::in</td>\n    </tr>\n    <tr>\n        <td>Write</td>\n        <td>Open for writing</td>\n        <td>ios::out</td>\n    </tr>\n    <tr>\n        <td>Append</td>\n        <td>Append to end of file</td>\n        <td>ios::app</td>\n    </tr>\n    <tr>\n        <td>Truncate</td>\n        <td>Discard file contents</td>\n        <td>ios::trunc</td>\n    </tr>\n    <tr>\n        <td>Binary</td>\n        <td>Binary mode</td>\n        <td>ios::binary</td>\n    </tr>\n    <tr>\n        <td>Read/Write</td>\n        <td>Open for both</td>\n        <td>ios::in | ios::out</td>\n    </tr>\n</table>\n\n<h3>Text vs Binary Files:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Aspect</th>\n        <th>Text Files</th>\n        <th>Binary Files</th>\n    </tr>\n    <tr>\n        <td>Content</td>\n        <td>Human readable text</td>\n        <td>Binary data</td>\n    </tr>\n    <tr>\n        <td>Newline</td>\n        <td>Platform specific (\\n, \\r\\n)</td>\n        <td>Raw bytes</td>\n    </tr>\n    <tr>\n        <td>Size</td>\n        <td>Larger (character encoding)</td>\n        <td>Smaller (raw data)</td>\n    </tr>\n    <tr>\n        <td>Operations</td>\n        <td>>>, <<, getline()</td>\n        <td>read(), write()</td>\n    </tr>\n    <tr>\n        <td>Portability</td>\n        <td>May have issues across platforms</td>\n        <td>More portable</td>\n    </tr>\n    <tr>\n        <td>Use Case</td>\n        <td>Configuration, logs, CSV</td>\n        <td>Images, databases, objects</td>\n    </tr>\n</table>\n\n<h3>File Operations:</h3>\n<ul>\n    <li><strong>Opening:</strong> open(), constructor</li>\n    <li><strong>Closing:</strong> close()</li>\n    <li><strong>Checking:</strong> is_open(), good(), fail(), eof()</li>\n    <li><strong>Reading:</strong> >>, get(), getline(), read()</li>\n    <li><strong>Writing:</strong> <<, put(), write()</li>\n    <li><strong>Positioning:</strong> tellg(), tellp(), seekg(), seekp()</li>\n</ul>\n\n<h3>Error Handling:</h3>\n<pre>\ntry {\n    ifstream file(\"data.txt\");\n    if(!file.is_open()) {\n        throw runtime_error(\"Cannot open file\");\n    }\n    // File operations\n} catch(const exception& e) {\n    cerr << \"Error: \" << e.what() << endl;\n}\n</pre>"
        },
        { 
            id: "practice1", 
            title: "C++ Practice Project", 
            type: "practice", 
            code: "// Practice: Library Management System\n#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <set>\n#include <algorithm>\n#include <memory>\n#include <fstream>\n#include <sstream>\n#include <iomanip>\n#include <ctime>\n#include <chrono>\nusing namespace std;\n\nclass Book {\nprivate:\n    string isbn;\n    string title;\n    string author;\n    string category;\n    int year;\n    double price;\n    int quantity;\n    bool available;\n    \npublic:\n    Book() : isbn(\"\"), title(\"\"), author(\"\"), category(\"\"), \n             year(0), price(0.0), quantity(0), available(false) {}\n    \n    Book(string i, string t, string a, string c, int y, double p, int q) \n        : isbn(i), title(t), author(a), category(c), \n          year(y), price(p), quantity(q), available(q > 0) {}\n    \n    // Getters\n    string getISBN() const { return isbn; }\n    string getTitle() const { return title; }\n    string getAuthor() const { return author; }\n    string getCategory() const { return category; }\n    int getYear() const { return year; }\n    double getPrice() const { return price; }\n    int getQuantity() const { return quantity; }\n    bool isAvailable() const { return available && quantity > 0; }\n    \n    // Setters\n    void setTitle(string t) { title = t; }\n    void setAuthor(string a) { author = a; }\n    void setCategory(string c) { category = c; }\n    void setYear(int y) { year = y; }\n    void setPrice(double p) { price = p; }\n    void setQuantity(int q) { \n        quantity = q; \n        available = (q > 0);\n    }\n    \n    // Methods\n    void display() const {\n        cout << left << setw(15) << isbn \n             << setw(25) << title \n             << setw(20) << author \n             << setw(15) << category \n             << setw(8) << year \n             << setw(10) << fixed << setprecision(2) << price \n             << setw(10) << quantity \n             << setw(10) << (available ? \"Yes\" : \"No\") << endl;\n    }\n    \n    void borrowBook() {\n        if(quantity > 0) {\n            quantity--;\n            if(quantity == 0) {\n                available = false;\n            }\n        }\n    }\n    \n    void returnBook() {\n        quantity++;\n        available = true;\n    }\n    \n    // For file operations\n    string toFileString() const {\n        ostringstream oss;\n        oss << isbn << \"|\" << title << \"|\" << author << \"|\" \n            << category << \"|\" << year << \"|\" << price << \"|\" << quantity;\n        return oss.str();\n    }\n    \n    static Book fromFileString(const string& str) {\n        istringstream iss(str);\n        string token;\n        vector<string> tokens;\n        \n        while(getline(iss, token, '|')) {\n            tokens.push_back(token);\n        }\n        \n        if(tokens.size() >= 7) {\n            return Book(tokens[0], tokens[1], tokens[2], tokens[3],\n                       stoi(tokens[4]), stod(tokens[5]), stoi(tokens[6]));\n        }\n        return Book();\n    }\n};\n\nclass Member {\nprivate:\n    int memberId;\n    string name;\n    string email;\n    string phone;\n    string membershipType;  // Regular, Premium, Student\n    time_t joinDate;\n    vector<string> borrowedBooks;  // ISBNs of borrowed books\n    int maxBooks;  // Maximum books based on membership\n    \npublic:\n    Member() : memberId(0), name(\"\"), email(\"\"), phone(\"\"), \n              membershipType(\"Regular\"), joinDate(0), maxBooks(3) {}\n    \n    Member(int id, string n, string e, string p, string type)\n        : memberId(id), name(n), email(e), phone(p), \n          membershipType(type), joinDate(time(nullptr)) {\n        setMaxBooks();\n    }\n    \n    void setMaxBooks() {\n        if(membershipType == \"Student\") maxBooks = 5;\n        else if(membershipType == \"Premium\") maxBooks = 10;\n        else maxBooks = 3;\n    }\n    \n    // Getters\n    int getMemberId() const { return memberId; }\n    string getName() const { return name; }\n    string getEmail() const { return email; }\n    string getPhone() const { return phone; }\n    string getMembershipType() const { return membershipType; }\n    int getMaxBooks() const { return maxBooks; }\n    int getBorrowedCount() const { return borrowedBooks.size(); }\n    vector<string> getBorrowedBooks() const { return borrowedBooks; }\n    \n    // Methods\n    void display() const {\n        cout << left << setw(10) << memberId \n             << setw(20) << name \n             << setw(25) << email \n             << setw(15) << phone \n             << setw(15) << membershipType \n             << setw(10) << borrowedBooks.size() << \"/\" << maxBooks << endl;\n    }\n    \n    bool canBorrowMore() const {\n        return borrowedBooks.size() < maxBooks;\n    }\n    \n    bool borrowBook(const string& isbn) {\n        if(canBorrowMore()) {\n            borrowedBooks.push_back(isbn);\n            return true;\n        }\n        return false;\n    }\n    \n    bool returnBook(const string& isbn) {\n        auto it = find(borrowedBooks.begin(), borrowedBooks.end(), isbn);\n        if(it != borrowedBooks.end()) {\n            borrowedBooks.erase(it);\n            return true;\n        }\n        return false;\n    }\n    \n    bool hasBook(const string& isbn) const {\n        return find(borrowedBooks.begin(), borrowedBooks.end(), isbn) \n               != borrowedBooks.end();\n    }\n    \n    // File operations\n    string toFileString() const {\n        ostringstream oss;\n        oss << memberId << \"|\" << name << \"|\" << email << \"|\" \n            << phone << \"|\" << membershipType << \"|\" << joinDate << \"|\";\n            \n        for(size_t i = 0; i < borrowedBooks.size(); i++) {\n            if(i > 0) oss << \";\";\n            oss << borrowedBooks[i];\n        }\n        \n        return oss.str();\n    }\n    \n    static Member fromFileString(const string& str) {\n        istringstream iss(str);\n        string token;\n        vector<string> tokens;\n        \n        while(getline(iss, token, '|')) {\n            tokens.push_back(token);\n        }\n        \n        if(tokens.size() >= 7) {\n            Member m(stoi(tokens[0]), tokens[1], tokens[2], \n                    tokens[3], tokens[4]);\n            m.joinDate = stol(tokens[5]);\n            \n            // Parse borrowed books\n            istringstream booksStream(tokens[6]);\n            string bookISBN;\n            while(getline(booksStream, bookISBN, ';')) {\n                if(!bookISBN.empty()) {\n                    m.borrowedBooks.push_back(bookISBN);\n                }\n            }\n            \n            return m;\n        }\n        return Member();\n    }\n};\n\nclass Transaction {\nprivate:\n    int transactionId;\n    string memberId;\n    string bookISBN;\n    time_t borrowDate;\n    time_t dueDate;\n    time_t returnDate;\n    string status;  // Borrowed, Returned, Overdue\n    double fine;\n    \npublic:\n    Transaction(int tid, string mid, string isbn) \n        : transactionId(tid), memberId(mid), bookISBN(isbn), \n          borrowDate(time(nullptr)), fine(0.0) {\n        // Due date is 14 days from borrow date\n        dueDate = borrowDate + (14 * 24 * 60 * 60);\n        returnDate = 0;\n        status = \"Borrowed\";\n    }\n    \n    // Getters\n    int getTransactionId() const { return transactionId; }\n    string getMemberId() const { return memberId; }\n    string getBookISBN() const { return bookISBN; }\n    string getStatus() const { return status; }\n    double getFine() const { return fine; }\n    \n    // Methods\n    void display() const {\n        cout << left << setw(15) << transactionId \n             << setw(15) << memberId \n             << setw(15) << bookISBN \n             << setw(25) << ctime(&borrowDate)\n             << setw(25) << ctime(&dueDate) \n             << setw(15) << status \n             << setw(10) << fixed << setprecision(2) << fine << endl;\n    }\n    \n    void returnBook() {\n        returnDate = time(nullptr);\n        status = \"Returned\";\n        \n        // Calculate fine if overdue\n        if(returnDate > dueDate) {\n            int daysOverdue = (returnDate - dueDate) / (24 * 60 * 60);\n            fine = daysOverdue * 5.0;  // $5 per day\n            status = \"Overdue\";\n        }\n    }\n    \n    bool isOverdue() const {\n        if(status == \"Returned\") return false;\n        time_t now = time(nullptr);\n        return now > dueDate;\n    }\n    \n    void updateStatus() {\n        if(status != \"Returned\" && isOverdue()) {\n            status = \"Overdue\";\n            int daysOverdue = (time(nullptr) - dueDate) / (24 * 60 * 60);\n            fine = daysOverdue * 5.0;\n        }\n    }\n    \n    // File operations\n    string toFileString() const {\n        ostringstream oss;\n        oss << transactionId << \"|\" << memberId << \"|\" << bookISBN << \"|\" \n            << borrowDate << \"|\" << dueDate << \"|\" \n            << returnDate << \"|\" << status << \"|\" << fine;\n        return oss.str();\n    }\n    \n    static Transaction fromFileString(const string& str) {\n        istringstream iss(str);\n        string token;\n        vector<string> tokens;\n        \n        while(getline(iss, token, '|')) {\n            tokens.push_back(token);\n        }\n        \n        if(tokens.size() >= 8) {\n            Transaction t(stoi(tokens[0]), tokens[1], tokens[2]);\n            t.borrowDate = stol(tokens[3]);\n            t.dueDate = stol(tokens[4]);\n            t.returnDate = stol(tokens[5]);\n            t.status = tokens[6];\n            t.fine = stod(tokens[7]);\n            return t;\n        }\n        // Return dummy transaction\n        return Transaction(0, \"\", \"\");\n    }\n};\n\nclass Library {\nprivate:\n    map<string, Book> books;  // ISBN -> Book\n    map<int, Member> members;  // MemberID -> Member\n    vector<Transaction> transactions;\n    int nextMemberId;\n    int nextTransactionId;\n    \n    // File names\n    const string booksFile = \"books.dat\";\n    const string membersFile = \"members.dat\";\n    const string transactionsFile = \"transactions.dat\";\n    \npublic:\n    Library() : nextMemberId(1001), nextTransactionId(1) {\n        loadData();\n    }\n    \n    ~Library() {\n        saveData();\n    }\n    \n    // Book Management\n    void addBook() {\n        cout << \"\\n=== ADD NEW BOOK ===\\n\" << endl;\n        \n        string isbn, title, author, category;\n        int year, quantity;\n        double price;\n        \n        cout << \"Enter ISBN: \";\n        cin >> isbn;\n        cin.ignore();\n        \n        // Check if book already exists\n        if(books.find(isbn) != books.end()) {\n            cout << \"Book with ISBN \" << isbn << \" already exists!\" << endl;\n            cout << \"Do you want to increase quantity? (y/n): \";\n            char choice;\n            cin >> choice;\n            \n            if(choice == 'y' || choice == 'Y') {\n                cout << \"Enter additional quantity: \";\n                int addQty;\n                cin >> addQty;\n                books[isbn].setQuantity(books[isbn].getQuantity() + addQty);\n                cout << \"Quantity updated successfully!\" << endl;\n            }\n            return;\n        }\n        \n        cout << \"Enter Title: \";\n        getline(cin, title);\n        \n        cout << \"Enter Author: \";\n        getline(cin, author);\n        \n        cout << \"Enter Category: \";\n        getline(cin, category);\n        \n        cout << \"Enter Year: \";\n        cin >> year;\n        \n        cout << \"Enter Price: $\";\n        cin >> price;\n        \n        cout << \"Enter Quantity: \";\n        cin >> quantity;\n        \n        Book newBook(isbn, title, author, category, year, price, quantity);\n        books[isbn] = newBook;\n        \n        cout << \"\\nBook added successfully!\" << endl;\n    }\n    \n    void searchBook() {\n        cout << \"\\n=== SEARCH BOOK ===\\n\" << endl;\n        cout << \"1. Search by ISBN\" << endl;\n        cout << \"2. Search by Title\" << endl;\n        cout << \"3. Search by Author\" << endl;\n        cout << \"4. Search by Category\" << endl;\n        cout << \"Enter choice: \";\n        \n        int choice;\n        cin >> choice;\n        cin.ignore();\n        \n        string searchTerm;\n        cout << \"Enter search term: \";\n        getline(cin, searchTerm);\n        \n        vector<Book> results;\n        \n        switch(choice) {\n            case 1:\n                if(books.find(searchTerm) != books.end()) {\n                    results.push_back(books[searchTerm]);\n                }\n                break;\n            case 2:\n                for(const auto& pair : books) {\n                    if(pair.second.getTitle().find(searchTerm) != string::npos) {\n                        results.push_back(pair.second);\n                    }\n                }\n                break;\n            case 3:\n                for(const auto& pair : books) {\n                    if(pair.second.getAuthor().find(searchTerm) != string::npos) {\n                        results.push_back(pair.second);\n                    }\n                }\n                break;\n            case 4:\n                for(const auto& pair : books) {\n                    if(pair.second.getCategory().find(searchTerm) != string::npos) {\n                        results.push_back(pair.second);\n                    }\n                }\n                break;\n            default:\n                cout << \"Invalid choice!\" << endl;\n                return;\n        }\n        \n        if(results.empty()) {\n            cout << \"\\nNo books found!\" << endl;\n        } else {\n            cout << \"\\nFound \" << results.size() << \" book(s):\\n\" << endl;\n            displayBookHeader();\n            for(const auto& book : results) {\n                book.display();\n            }\n        }\n    }\n    \n    void displayAllBooks() {\n        cout << \"\\n=== ALL BOOKS ===\\n\" << endl;\n        \n        if(books.empty()) {\n            cout << \"No books in library!\" << endl;\n            return;\n        }\n        \n        displayBookHeader();\n        for(const auto& pair : books) {\n            pair.second.display();\n        }\n        cout << \"\\nTotal Books: \" << books.size() << endl;\n    }\n    \n    void displayBookHeader() const {\n        cout << left << setw(15) << \"ISBN\" \n             << setw(25) << \"Title\" \n             << setw(20) << \"Author\" \n             << setw(15) << \"Category\" \n             << setw(8) << \"Year\" \n             << setw(10) << \"Price\" \n             << setw(10) << \"Quantity\" \n             << setw(10) << \"Available\" << endl;\n        cout << string(113, '-') << endl;\n    }\n    \n    // Member Management\n    void addMember() {\n        cout << \"\\n=== ADD NEW MEMBER ===\\n\" << endl;\n        \n        string name, email, phone, membershipType;\n        \n        cout << \"Enter Name: \";\n        cin.ignore();\n        getline(cin, name);\n        \n        cout << \"Enter Email: \";\n        getline(cin, email);\n        \n        cout << \"Enter Phone: \";\n        getline(cin, phone);\n        \n        cout << \"Enter Membership Type (Regular/Student/Premium): \";\n        getline(cin, membershipType);\n        \n        // Validate membership type\n        if(membershipType != \"Regular\" && membershipType != \"Student\" && \n           membershipType != \"Premium\") {\n            cout << \"Invalid membership type! Defaulting to Regular.\" << endl;\n            membershipType = \"Regular\";\n        }\n        \n        Member newMember(nextMemberId++, name, email, phone, membershipType);\n        members[newMember.getMemberId()] = newMember;\n        \n        cout << \"\\nMember added successfully!\" << endl;\n        cout << \"Member ID: \" << newMember.getMemberId() << endl;\n    }\n    \n    void displayAllMembers() {\n        cout << \"\\n=== ALL MEMBERS ===\\n\" << endl;\n        \n        if(members.empty()) {\n            cout << \"No members registered!\" << endl;\n            return;\n        }\n        \n        cout << left << setw(10) << \"ID\" \n             << setw(20) << \"Name\" \n             << setw(25) << \"Email\" \n             << setw(15) << \"Phone\" \n             << setw(15) << \"Membership\" \n             << setw(10) << \"Borrowed\" << endl;\n        cout << string(95, '-') << endl;\n        \n        for(const auto& pair : members) {\n            pair.second.display();\n        }\n        \n        cout << \"\\nTotal Members: \" << members.size() << endl;\n    }\n    \n    // Transaction Management\n    void borrowBook() {\n        cout << \"\\n=== BORROW BOOK ===\\n\" << endl;\n        \n        int memberId;\n        string isbn;\n        \n        cout << \"Enter Member ID: \";\n        cin >> memberId;\n        \n        if(members.find(memberId) == members.end()) {\n            cout << \"Member not found!\" << endl;\n            return;\n        }\n        \n        Member& member = members[memberId];\n        \n        if(!member.canBorrowMore()) {\n            cout << \"Member has reached maximum borrowing limit!\" << endl;\n            return;\n        }\n        \n        cout << \"Enter ISBN: \";\n        cin >> isbn;\n        \n        if(books.find(isbn) == books.end()) {\n            cout << \"Book not found!\" << endl;\n            return;\n        }\n        \n        Book& book = books[isbn];\n        \n        if(!book.isAvailable()) {\n            cout << \"Book is not available!\" << endl;\n            return;\n        }\n        \n        // Check if member already has this book\n        if(member.hasBook(isbn)) {\n            cout << \"Member already has this book!\" << endl;\n            return;\n        }\n        \n        // Process borrowing\n        book.borrowBook();\n        member.borrowBook(isbn);\n        \n        Transaction transaction(nextTransactionId++, \n                               to_string(memberId), isbn);\n        transactions.push_back(transaction);\n        \n        cout << \"\\nBook borrowed successfully!\" << endl;\n        cout << \"Transaction ID: \" << transaction.getTransactionId() << endl;\n        cout << \"Due Date: \" << ctime(&transaction.getDueDate());\n    }\n    \n    void returnBook() {\n        cout << \"\\n=== RETURN BOOK ===\\n\" << endl;\n        \n        int memberId;\n        string isbn;\n        \n        cout << \"Enter Member ID: \";\n        cin >> memberId;\n        \n        if(members.find(memberId) == members.end()) {\n            cout << \"Member not found!\" << endl;\n            return;\n        }\n        \n        Member& member = members[memberId];\n        \n        cout << \"Enter ISBN: \";\n        cin >> isbn;\n        \n        if(books.find(isbn) == books.end()) {\n            cout << \"Book not found!\" << endl;\n            return;\n        }\n        \n        if(!member.hasBook(isbn)) {\n            cout << \"Member does not have this book!\" << endl;\n            return;\n        }\n        \n        // Find transaction\n        for(auto& transaction : transactions) {\n            if(transaction.getMemberId() == to_string(memberId) &&\n               transaction.getBookISBN() == isbn &&\n               transaction.getStatus() != \"Returned\") {\n                \n                // Process return\n                transaction.returnBook();\n                books[isbn].returnBook();\n                member.returnBook(isbn);\n                \n                cout << \"\\nBook returned successfully!\" << endl;\n                \n                if(transaction.getFine() > 0) {\n                    cout << \"Fine: $\" << fixed << setprecision(2) \n                         << transaction.getFine() << endl;\n                }\n                \n                return;\n            }\n        }\n        \n        cout << \"Transaction not found!\" << endl;\n    }\n    \n    void displayOverdueBooks() {\n        cout << \"\\n=== OVERDUE BOOKS ===\\n\" << endl;\n        \n        int count = 0;\n        \n        cout << left << setw(15) << \"Trans ID\" \n             << setw(15) << \"Member ID\" \n             << setw(15) << \"ISBN\" \n             << setw(25) << \"Borrow Date\" \n             << setw(25) << \"Due Date\" \n             << setw(15) << \"Status\" \n             << setw(10) << \"Fine\" << endl;\n        cout << string(120, '-') << endl;\n        \n        for(auto& transaction : transactions) {\n            transaction.updateStatus();\n            if(transaction.getStatus() == \"Overdue\") {\n                transaction.display();\n                count++;\n            }\n        }\n        \n        if(count == 0) {\n            cout << \"No overdue books!\" << endl;\n        } else {\n            cout << \"\\nTotal Overdue: \" << count << endl;\n        }\n    }\n    \n    // File Operations\n    void saveData() {\n        saveBooks();\n        saveMembers();\n        saveTransactions();\n    }\n    \n    void loadData() {\n        loadBooks();\n        loadMembers();\n        loadTransactions();\n    }\n    \n    void saveBooks() {\n        ofstream file(booksFile);\n        if(file) {\n            for(const auto& pair : books) {\n                file << pair.second.toFileString() << endl;\n            }\n        }\n    }\n    \n    void loadBooks() {\n        ifstream file(booksFile);\n        if(file) {\n            books.clear();\n            string line;\n            while(getline(file, line)) {\n                Book book = Book::fromFileString(line);\n                if(!book.getISBN().empty()) {\n                    books[book.getISBN()] = book;\n                }\n            }\n        }\n    }\n    \n    void saveMembers() {\n        ofstream file(membersFile);\n        if(file) {\n            for(const auto& pair : members) {\n                file << pair.second.toFileString() << endl;\n            }\n        }\n    }\n    \n    void loadMembers() {\n        ifstream file(membersFile);\n        if(file) {\n            members.clear();\n            string line;\n            while(getline(file, line)) {\n                Member member = Member::fromFileString(line);\n                if(member.getMemberId() > 0) {\n                    members[member.getMemberId()] = member;\n                    // Update nextMemberId\n                    if(member.getMemberId() >= nextMemberId) {\n                        nextMemberId = member.getMemberId() + 1;\n                    }\n                }\n            }\n        }\n    }\n    \n    void saveTransactions() {\n        ofstream file(transactionsFile);\n        if(file) {\n            for(const auto& transaction : transactions) {\n                file << transaction.toFileString() << endl;\n            }\n        }\n    }\n    \n    void loadTransactions() {\n        ifstream file(transactionsFile);\n        if(file) {\n            transactions.clear();\n            string line;\n            while(getline(file, line)) {\n                Transaction transaction = Transaction::fromFileString(line);\n                if(transaction.getTransactionId() > 0) {\n                    transactions.push_back(transaction);\n                    // Update nextTransactionId\n                    if(transaction.getTransactionId() >= nextTransactionId) {\n                        nextTransactionId = transaction.getTransactionId() + 1;\n                    }\n                }\n            }\n        }\n    }\n    \n    // Statistics\n    void showStatistics() {\n        cout << \"\\n=== LIBRARY STATISTICS ===\\n\" << endl;\n        \n        int totalBooks = 0;\n        int availableBooks = 0;\n        double totalValue = 0.0;\n        \n        for(const auto& pair : books) {\n            totalBooks += pair.second.getQuantity();\n            if(pair.second.isAvailable()) {\n                availableBooks += pair.second.getQuantity();\n            }\n            totalValue += pair.second.getPrice() * pair.second.getQuantity();\n        }\n        \n        int activeTransactions = 0;\n        double totalFines = 0.0;\n        \n        for(const auto& transaction : transactions) {\n            transaction.updateStatus();\n            if(transaction.getStatus() != \"Returned\") {\n                activeTransactions++;\n            }\n            totalFines += transaction.getFine();\n        }\n        \n        cout << \"Books:\\n\";\n        cout << \"  Total Unique Titles: \" << books.size() << endl;\n        cout << \"  Total Copies: \" << totalBooks << endl;\n        cout << \"  Available Copies: \" << availableBooks << endl;\n        cout << \"  Total Value: $\" << fixed << setprecision(2) << totalValue << endl;\n        \n        cout << \"\\nMembers:\\n\";\n        cout << \"  Total Members: \" << members.size() << endl;\n        \n        map<string, int> membershipStats;\n        for(const auto& pair : members) {\n            membershipStats[pair.second.getMembershipType()]++;\n        }\n        \n        for(const auto& stat : membershipStats) {\n            cout << \"  \" << stat.first << \" Members: \" << stat.second << endl;\n        }\n        \n        cout << \"\\nTransactions:\\n\";\n        cout << \"  Total Transactions: \" << transactions.size() << endl;\n        cout << \"  Active Borrowings: \" << activeTransactions << endl;\n        cout << \"  Total Fines Due: $\" << fixed << setprecision(2) << totalFines << endl;\n    }\n    \n    // Main Menu\n    void showMenu() {\n        int choice;\n        \n        do {\n            cout << \"\\n===== LIBRARY MANAGEMENT SYSTEM =====\" << endl;\n            cout << \"1. Add Book\" << endl;\n            cout << \"2. Search Book\" << endl;\n            cout << \"3. Display All Books\" << endl;\n            cout << \"4. Add Member\" << endl;\n            cout << \"5. Display All Members\" << endl;\n            cout << \"6. Borrow Book\" << endl;\n            cout << \"7. Return Book\" << endl;\n            cout << \"8. Display Overdue Books\" << endl;\n            cout << \"9. Show Statistics\" << endl;\n            cout << \"10. Save Data\" << endl;\n            cout << \"11. Load Data\" << endl;\n            cout << \"0. Exit\" << endl;\n            cout << \"Enter your choice: \";\n            cin >> choice;\n            \n            switch(choice) {\n                case 1: addBook(); break;\n                case 2: searchBook(); break;\n                case 3: displayAllBooks(); break;\n                case 4: addMember(); break;\n                case 5: displayAllMembers(); break;\n                case 6: borrowBook(); break;\n                case 7: returnBook(); break;\n                case 8: displayOverdueBooks(); break;\n                case 9: showStatistics(); break;\n                case 10: saveData(); break;\n                case 11: loadData(); break;\n                case 0: \n                    saveData();\n                    cout << \"\\nData saved. Thank you! Goodbye!\" << endl;\n                    break;\n                default:\n                    cout << \"Invalid choice! Try again.\" << endl;\n            }\n        } while(choice != 0);\n    }\n};\n\nint main() {\n    cout << \"===== C++ LIBRARY MANAGEMENT SYSTEM =====\\n\" << endl;\n    \n    Library library;\n    library.showMenu();\n    \n    return 0;\n}",
            content: "<h3>Practice: Library Management System</h3>\n<p>Build a comprehensive Library Management System with complete object-oriented design, file handling, and data management capabilities.</p>\n\n<h3>Core Features:</h3>\n<ol>\n    <li><strong>Book Management:</strong>\n        <ul>\n            <li>Add new books with ISBN, title, author, category</li>\n            <li>Search books by various criteria</li>\n            <li>Display all books with availability status</li>\n            <li>Update book information and quantities</li>\n        </ul>\n    </li>\n    <li><strong>Member Management:</strong>\n        <ul>\n            <li>Register new members with different membership types</li>\n            <li>View all members with their borrowing status</li>\n            <li>Track borrowed books per member</li>\n            <li>Set borrowing limits based on membership</li>\n        </ul>\n    </li>\n    <li><strong>Transaction Management:</strong>\n        <ul>\n            <li>Borrow books with due dates</li>\n            <li>Return books with fine calculation</li>\n            <li>Track overdue books</li>\n            <li>Maintain complete transaction history</li>\n        </ul>\n    </li>\n    <li><strong>Data Persistence:</strong>\n        <ul>\n            <li>Save all data to files on exit</li>\n            <li>Load data from files on startup</li>\n            <li>Separate files for books, members, transactions</li>\n            <li>Proper serialization/deserialization</li>\n        </ul>\n    </li>\n    <li><strong>Statistics & Reports:</strong>\n        <ul>\n            <li>Library statistics dashboard</li>\n            <li>Financial reports (fines, book value)</li>\n            <li>Member activity reports</li>\n            <li>Book usage statistics</li>\n        </ul>\n    </li>\n</ol>\n\n<h3>Advanced Features:</h3>\n<ul>\n    <li><strong>Object-Oriented Design:</strong> Proper class hierarchy and relationships</li>\n    <li><strong>STL Containers:</strong> Use of map, vector, set for efficient data management</li>\n    <li><strong>File Handling:</strong> Binary and text file operations</li>\n    <li><strong>Error Handling:</strong> Input validation and error recovery</li>\n    <li><strong>Time Management:</strong> Due date calculation and fine computation</li>\n    <li><strong>Search Functionality:</strong> Multiple search criteria with fuzzy matching</li>\n</ul>\n\n<h3>Key Concepts Demonstrated:</h3>\n<ul>\n    <li>Classes and Objects with proper encapsulation</li>\n    <li>Constructors, Destructors, and Copy Constructors</li>\n    <li>Operator Overloading for file operations</li>\n    <li>STL containers (map, vector, set) for data storage</li>\n    <li>File I/O with serialization</li>\n    <li>Exception handling and input validation</li>\n    <li>Menu-driven interface with modular functions</li>\n    <li>Data persistence and recovery</li>\n</ul>\n\n<h3>System Architecture:</h3>\n<pre>\nLibrary System\n├── Book Management\n│   ├── Book Class\n│   ├── Book Catalog (STL Map)\n│   └── Search Functions\n├── Member Management\n│   ├── Member Class\n│   ├── Member Database (STL Map)\n│   └── Membership Types\n├── Transaction Management\n│   ├── Transaction Class\n│   ├── Borrow/Return Logic\n│   └── Fine Calculation\n└── Data Persistence\n    ├── File Operations\n    ├── Serialization\n    └── Data Recovery\n</pre>"
        }
    ]
}, dbms: {
    title: "Database Management System (DBMS)  ",
    icon: "<i class='fas fa-database' style='color: #336791;'></i>",
    topics: [
        { 
            id: "introduction", 
            title: "Introduction to DBMS", 
            type: "basics", 
            code: "// Example of basic SQL query structure\nSELECT * FROM Students WHERE grade = 'A';\n\n// Creating a table in SQL\nCREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    age INT,\n    email VARCHAR(100) UNIQUE\n);\n\n// Inserting data\nINSERT INTO Students VALUES (101, 'Alice', 21, 'alice@university.edu');\n\n// Updating data\nUPDATE Students SET age = 22 WHERE student_id = 101;\n\n// Deleting data\nDELETE FROM Students WHERE student_id = 101;",
            content: "<h3>What is a Database Management System?</h3>\n<p>A <strong>Database Management System (DBMS)</strong> is software that manages databases, providing an interface to store, retrieve, and manipulate data efficiently and securely. It acts as an intermediary between the database and end users or applications, ensuring data is consistently organized and easily accessible.</p>\n\n<h3>Key Theoretical Concepts:</h3>\n<ul>\n    <li><strong>Database:</strong> An organized, consistent collection of data that can be easily accessed and managed</li>\n    <li><strong>Data Independence:</strong> DBMS offers both logical and physical data independence, protecting users/applications from changes in physical data storage</li>\n    <li><strong>Centralized View:</strong> Provides a centralized view of data that multiple users can access from multiple locations</li>\n    <li><strong>Schema:</strong> Defines the database's logical structure including tables, columns, data types, and relationships</li>\n</ul>\n\n<h3>Problems with Traditional File-Based Systems:</h3>\n<p>Before DBMS, organizations used file-based systems that suffered from several critical issues:</p>\n<ul>\n    <li><strong>Data Redundancy:</strong> Duplicate entries across different files</li>\n    <li><strong>Inconsistency:</strong> Conflicting or outdated information</li>\n    <li><strong>Data Isolation:</strong> Information scattered across files made retrieval difficult</li>\n    <li><strong>Integrity Problems:</strong> Without constraints, data quality suffered</li>\n    <li><strong>Atomicity Issues:</strong> Operations could leave databases in inconsistent states</li>\n    <li><strong>Concurrent Access Anomalies:</strong> Multiple users accessing data simultaneously created conflicts</li>\n    <li><strong>Security Vulnerabilities:</strong> Lack of sophisticated access control mechanisms</li>\n    <li><strong>Single-User Access:</strong> No support for multi-user collaboration</li>\n</ul>\n\n<h3>How DBMS Works:</h3>\n<p>A DBMS includes several interconnected components that provide database management, transaction processing, and querying services:</p>\n<pre>\n1. User/Application → Query\n2. DBMS Interface → Query Parser\n3. Query Optimizer → Execution Plan\n4. Storage Manager → Physical Data\n5. Result → Returned to User\n</pre>"
        },
        { 
            id: "components", 
            title: "DBMS Components & Architecture", 
            type: "basics", 
            code: "// Three-tier architecture implementation concept\n// Presentation Tier (User Interface)\n// Application Tier (Business Logic)\n// Database Tier (Data Storage)\n\n// Example of DDL command\nCREATE DATABASE UniversityDB;\n\n// Example of DML command\nSELECT student_name, grade FROM Students WHERE department = 'Computer Science';\n\n// Example of DCL command\nGRANT SELECT, INSERT ON Students TO professor_user;\n\n// Example of TCL command\nBEGIN TRANSACTION;\nUPDATE Accounts SET balance = balance - 100 WHERE account_id = 1;\nUPDATE Accounts SET balance = balance + 100 WHERE account_id = 2;\nCOMMIT;",
            content: "<h3>Components of a DBMS</h3>\n<p>A DBMS is made up of six key components that work together to handle data effectively:</p>\n\n<h3>Core Components:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Component</th>\n        <th>Description</th>\n        <th>Examples/Details</th>\n    </tr>\n    <tr>\n        <td><strong>Hardware</strong></td>\n        <td>Physical devices that store and process data</td>\n        <td>Servers, disks, RAM, network devices</td>\n    </tr>\n    <tr>\n        <td><strong>Software</strong></td>\n        <td>Actual DBMS software and related applications</td>\n        <td>MySQL, Oracle, PostgreSQL, OS, network software</td>\n    </tr>\n    <tr>\n        <td><strong>Data</strong></td>\n        <td>Raw facts stored in structured formats</td>\n        <td>Operational Data (user data) and Metadata (data about data)</td>\n    </tr>\n    <tr>\n        <td><strong>Procedures</strong></td>\n        <td>Instructions and rules for using DBMS effectively</td>\n        <td>Setup, login/logout, backup, access control procedures</td>\n    </tr>\n    <tr>\n        <td><strong>Database Access Language</strong></td>\n        <td>Language to interact with the database</td>\n        <td>SQL, DDL, DML, DCL, TCL commands</td>\n    </tr>\n    <tr>\n        <td><strong>People</strong></td>\n        <td>Users interacting with DBMS at different levels</td>\n        <td>DBA, Developers, End Users</td>\n    </tr>\n</table>\n\n<h3>Architectural Components:</h3>\n<ul>\n    <li><strong>Database Engine (Storage Engine):</strong> Heart of DBMS, manages physical storage on disk</li>\n    <li><strong>Query Processor:</strong> Interprets and executes SQL commands (Parser, Optimizer, Executor)</li>\n    <li><strong>Transaction Manager:</strong> Ensures ACID properties across operations</li>\n    <li><strong>Storage Manager:</strong> Handles interface between database operations and file system</li>\n    <li><strong>Security and Authorization Manager:</strong> Controls access to database resources</li>\n    <li><strong>Lock Manager:</strong> Manages concurrent access to same data</li>\n    <li><strong>Log Manager:</strong> Records all changes made to data</li>\n    <li><strong>Metadata Catalog:</strong> Repository for all database objects</li>\n</ul>\n\n<h3>Database Languages:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Language Type</th>\n        <th>Purpose</th>\n        <th>Commands</th>\n    </tr>\n    <tr>\n        <td>DDL (Data Definition Language)</td>\n        <td>Define database structure and schema</td>\n        <td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td>\n    </tr>\n    <tr>\n        <td>DML (Data Manipulation Language)</td>\n        <td>Manipulate data within database</td>\n        <td>SELECT, INSERT, UPDATE, DELETE</td>\n    </tr>\n    <tr>\n        <td>DCL (Data Control Language)</td>\n        <td>Control access permissions</td>\n        <td>GRANT, REVOKE</td>\n    </tr>\n    <tr>\n        <td>TCL (Transaction Control Language)</td>\n        <td>Manage database transactions</td>\n        <td>COMMIT, ROLLBACK, SAVEPOINT</td>\n    </tr>\n    <tr>\n        <td>DQL (Data Query Language)</td>\n        <td>Retrieve data without modifying</td>\n        <td>SELECT (considered subset of DML)</td>\n    </tr>\n</table>\n\n<h3>Three-Tier Architecture:</h3>\n<ul>\n    <li><strong>Presentation Tier:</strong> User interfaces that forward requests to application tier</li>\n    <li><strong>Application Tier:</strong> Processes requests, implements business logic</li>\n    <li><strong>Database Tier:</strong> Stores/manages actual data, maintains security and integrity</li>\n</ul>"
        },
        { 
            id: "dataModels", 
            title: "Data Models & Types of DBMS", 
            type: "basics", 
            code: "// Relational Model Example\nCREATE TABLE Students (\n    student_id INT PRIMARY KEY,\n    name VARCHAR(50),\n    major VARCHAR(50)\n);\n\nCREATE TABLE Courses (\n    course_id INT PRIMARY KEY,\n    title VARCHAR(100),\n    credits INT\n);\n\nCREATE TABLE Enrollments (\n    enrollment_id INT PRIMARY KEY,\n    student_id INT,\n    course_id INT,\n    grade CHAR(1),\n    FOREIGN KEY (student_id) REFERENCES Students(student_id),\n    FOREIGN KEY (course_id) REFERENCES Courses(course_id)\n);\n\n// NoSQL Document Store Example (MongoDB-like)\n{\n  \"_id\": \"101\",\n  \"name\": \"Alice\",\n  \"age\": 21,\n  \"courses\": [\n    {\"course_id\": \"CS101\", \"title\": \"Intro to CS\", \"grade\": \"A\"},\n    {\"course_id\": \"MATH201\", \"title\": \"Calculus\", \"grade\": \"B\"}\n  ],\n  \"address\": {\n    \"street\": \"123 Main St\",\n    \"city\": \"Boston\",\n    \"state\": \"MA\"\n  }\n}",
            content: "<h3>Data Models in DBMS</h3>\n<p>Data models provide the conceptual framework for organizing and structuring information within a database. Each model offers different advantages for specific applications.</p>\n\n<h3>Types of Data Models:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Model Type</th>\n        <th>Structure</th>\n        <th>Characteristics</th>\n        <th>Examples</th>\n    </tr>\n    <tr>\n        <td><strong>Hierarchical</strong></td>\n        <td>Tree-like, parent-child relationships</td>\n        <td>Fast navigation, fixed structure, handles one-to-many relationships well</td>\n        <td>IBM IMS</td>\n    </tr>\n    <tr>\n        <td><strong>Network</strong></td>\n        <td>Graph-like, allows multiple parents</td>\n        <td>More flexible than hierarchical, handles complex relationships</td>\n        <td>Integrated Data Store (IDS)</td>\n    </tr>\n    <tr>\n        <td><strong>Relational (RDBMS)</strong></td>\n        <td>Tables with rows and columns</td>\n        <td>Most common, uses SQL, ACID compliance, mathematical foundation</td>\n        <td>MySQL, Oracle, PostgreSQL</td>\n    </tr>\n    <tr>\n        <td><strong>Object-Oriented</strong></td>\n        <td>Data stored as objects</td>\n        <td>Integrates OOP concepts, supports complex data types</td>\n        <td>ObjectDB, db4o</td>\n    </tr>\n    <tr>\n        <td><strong>NoSQL</strong></td>\n        <td>Various non-relational formats</td>\n        <td>Handles large-scale unstructured data, flexible schemas</td>\n        <td>MongoDB, Cassandra</td>\n    </tr>\n</table>\n\n<h3>Types of DBMS:</h3>\n\n<h4>1. Relational DBMS (RDBMS):</h4>\n<ul>\n    <li>Organizes data into tables with rows and columns</li>\n    <li>Uses primary/foreign keys to establish relationships</li>\n    <li>SQL is the standard query language</li>\n    <li>Examples: MySQL, Oracle, Microsoft SQL Server, PostgreSQL</li>\n</ul>\n\n<h4>2. NoSQL DBMS:</h4>\n<ul>\n    <li><strong>Key-Value Store:</strong> Unique key with associated value (Redis, DynamoDB)</li>\n    <li><strong>Document Store:</strong> Key with semi-structured document (MongoDB, Couchbase)</li>\n    <li><strong>Graph Database:</strong> Nodes and edges for relationships (Neo4j, Amazon Neptune)</li>\n    <li><strong>Wide-Column Store:</strong> Tables with flexible column names (Cassandra, HBase)</li>\n</ul>\n\n<h4>3. Other Types:</h4>\n<ul>\n    <li><strong>Cloud-Based:</strong> Hosted on cloud platforms (Amazon RDS, MongoDB Atlas)</li>\n    <li><strong>NewSQL:</strong> Modern relational systems with NoSQL scalability</li>\n    <li><strong>In-Memory DBMS:</strong> Relies on main memory for faster access (SAP HANA, Redis)</li>\n    <li><strong>Columnar DBMS:</strong> Stores data by columns for analytical queries (Snowflake, Amazon Redshift)</li>\n    <li><strong>Multi-model DBMS:</strong> Supports multiple database models (Azure Cosmos DB, MarkLogic)</li>\n    <li><strong>Time Series:</strong> Stores data linked to timestamps (Amazon Timestream)</li>\n</ul>\n\n<h3>Difference between DBMS and RDBMS:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Aspect</th>\n        <th>DBMS</th>\n        <th>RDBMS</th>\n    </tr>\n    <tr>\n        <td>Data Model</td>\n        <td>Supports various models</td>\n        <td>Exclusively relational model</td>\n    </tr>\n    <tr>\n        <td>Data Organization</td>\n        <td>Files or other structures</td>\n        <td>Structured tables with relations</td>\n    </tr>\n    <tr>\n        <td>Data Integrity</td>\n        <td>Limited constraints</td>\n        <td>Guaranteed via normalization</td>\n    </tr>\n    <tr>\n        <td>Query Language</td>\n        <td>May not use SQL</td>\n        <td>Uses SQL</td>\n    </tr>\n    <tr>\n        <td>ACID Properties</td>\n        <td>May not support fully</td>\n        <td>Provides ACID compliance</td>\n    </tr>\n</table>"
        },
        { 
            id: "erModel", 
            title: "Entity-Relationship Model", 
            type: "advanced", 
            code: "// ER Diagram components represented in SQL-like comments\n/*\nENTITIES:\n- Student (Strong Entity)\n  Attributes: student_id (Key), name, date_of_birth\n- Course (Strong Entity)\n  Attributes: course_code (Key), title, credits\n- Department (Strong Entity)\n  Attributes: dept_id (Key), dept_name\n\nRELATIONSHIPS:\n- Enrolls (Many-to-Many between Student and Course)\n  Attributes: semester, grade\n- Belongs_To (Many-to-One between Student and Department)\n- Offers (One-to-Many between Department and Course)\n\nWEAK ENTITY:\n- Project (depends on Course)\n  Attributes: project_id (Partial Key), title, due_date\n*/\n\n// Resulting SQL tables from ER diagram\nCREATE TABLE Department (\n    dept_id VARCHAR(10) PRIMARY KEY,\n    dept_name VARCHAR(50) NOT NULL\n);\n\nCREATE TABLE Student (\n    student_id INT PRIMARY KEY,\n    name VARCHAR(50) NOT NULL,\n    date_of_birth DATE,\n    dept_id VARCHAR(10),\n    FOREIGN KEY (dept_id) REFERENCES Department(dept_id)\n);",
            content: "<h3>Entity-Relationship Model</h3>\n<p>The <strong>Entity-Relationship (ER) Model</strong> is a conceptual model for designing databases to represent real-world data using entities, attributes, and relationships. An <strong>ER Diagram</strong> is a visual representation of the database schema showing entities, their attributes, and relationships.</p>\n\n<h3>ER Diagram Components:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Component</th>\n        <th>Description</th>\n        <th>Representation</th>\n    </tr>\n    <tr>\n        <td><strong>Entity</strong></td>\n        <td>Real-world object or concept</td>\n        <td>Rectangle</td>\n    </tr>\n    <tr>\n        <td><strong>Strong Entity</strong></td>\n        <td>Has primary key, independent existence</td>\n        <td>Rectangle (single line)</td>\n    </tr>\n    <tr>\n        <td><strong>Weak Entity</strong></td>\n        <td>Depends on strong entity, no sufficient attributes for PK</td>\n        <td>Double-lined rectangle</td>\n    </tr>\n    <tr>\n        <td><strong>Attribute</strong></td>\n        <td>Properties of entities</td>\n        <td>Oval</td>\n    </tr>\n    <tr>\n        <td><strong>Key Attribute</strong></td>\n        <td>Uniquely identifies entity</td>\n        <td>Oval with underline</td>\n    </tr>\n    <tr>\n        <td><strong>Composite Attribute</strong></td>\n        <td>Composed of other attributes (e.g., address)</td>\n        <td>Oval comprising other ovals</td>\n    </tr>\n    <tr>\n        <td><strong>Multivalued Attribute</strong></td>\n        <td>Can have multiple values (e.g., phone numbers)</td>\n        <td>Double-lined oval</td>\n    </tr>\n    <tr>\n        <td><strong>Derived Attribute</strong></td>\n        <td>Can be derived from other attributes (e.g., age from DOB)</td>\n        <td>Dashed oval</td>\n    </tr>\n    <tr>\n        <td><strong>Relationship</strong></td>\n        <td>Association between entities</td>\n        <td>Diamond</td>\n    </tr>\n</table>\n\n<h3>Types of Relationships:</h3>\n<ul>\n    <li><strong>One-to-One (1:1):</strong> Each entity in set A relates to at most one entity in set B</li>\n    <li><strong>One-to-Many (1:N):</strong> Entity in A relates to multiple entities in B, but B relates to at most one in A</li>\n    <li><strong>Many-to-One (N:1):</strong> Reverse of One-to-Many</li>\n    <li><strong>Many-to-Many (M:N):</strong> Multiple entities in A relate to multiple entities in B</li>\n    <li><strong>Recursive Relationship:</strong> Entity relates to itself</li>\n</ul>\n\n<h3>Cardinality in DBMS:</h3>\n<p>Cardinality expresses the maximum number of possible relationship occurrences for an entity participating in a relationship. It defines the quantitative relationship between entities.</p>\n\n<h3>Participation Constraints:</h3>\n<ul>\n    <li><strong>Total Participation:</strong> Every entity must participate in at least one relationship\n        <ul><li>Example: Every department must have a manager</li></ul>\n    </li>\n    <li><strong>Partial Participation:</strong> Some entities may not participate in relationships\n        <ul><li>Example: Not all employees are managers</li></ul>\n    </li>\n</ul>\n\n<h3>Minimum Tables Required from ER Diagram:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Cardinality</th>\n        <th>Participation</th>\n        <th>Minimum Tables</th>\n    </tr>\n    <tr>\n        <td>1:1</td>\n        <td>Partial participation of both entities</td>\n        <td>2</td>\n    </tr>\n    <tr>\n        <td>1:1</td>\n        <td>Total participation of at least 1 entity</td>\n        <td>1</td>\n    </tr>\n    <tr>\n        <td>1:N</td>\n        <td>Any</td>\n        <td>2</td>\n    </tr>\n    <tr>\n        <td>M:N</td>\n        <td>Any</td>\n        <td>3</td>\n    </tr>\n</table>\n\n<h3>Additional ER Concepts:</h3>\n<ul>\n    <li><strong>Specialization:</strong> Top-down approach dividing entity into sub-entities</li>\n    <li><strong>Generalization:</strong> Bottom-up approach combining entities into higher entity</li>\n    <li><strong>Aggregation:</strong> Abstraction where relationships are represented as entity sets</li>\n</ul>"
        },
        { 
            id: "keys", 
            title: "Keys & Relational Concepts", 
            type: "advanced", 
            code: "// Example table for key demonstration\nCREATE TABLE STUDENT (\n    student_id INT,\n    name VARCHAR(50),\n    email VARCHAR(100),\n    phone VARCHAR(15),\n    ssn VARCHAR(11) UNIQUE,\n    PRIMARY KEY (student_id)\n);\n\n/* KEYS IDENTIFICATION:\n- Primary Key: student_id\n- Candidate Keys: student_id, email, ssn\n- Super Keys: {student_id}, {student_id, name}, {email, phone}, etc.\n- Alternate Keys: email, ssn\n- Foreign Key Example: (in another table)\n  CREATE TABLE Enrollment (\n      enroll_id INT PRIMARY KEY,\n      student_id INT,  -- Foreign Key\n      course_id INT,\n      FOREIGN KEY (student_id) REFERENCES STUDENT(student_id)\n  );\n*/\n\n// Composite Key Example\nCREATE TABLE Course_Prerequisite (\n    course_id VARCHAR(10),\n    prerequisite_id VARCHAR(10),\n    PRIMARY KEY (course_id, prerequisite_id)\n);",
            content: "<h3>Keys in Relational Databases</h3>\n<p>Keys are crucial concepts in relational databases used to identify records uniquely and establish relationships between tables.</p>\n\n<h3>Types of Keys:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Key Type</th>\n        <th>Definition</th>\n        <th>Characteristics</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td><strong>Primary Key</strong></td>\n        <td>Unique identifier for each record</td>\n        <td>Cannot contain NULL values, only one per table</td>\n        <td>student_id in Students table</td>\n    </tr>\n    <tr>\n        <td><strong>Candidate Key</strong></td>\n        <td>Minimal set of attributes that uniquely identify tuple</td>\n        <td>Can be more than one, proper subset can't determine tuple uniquely</td>\n        <td>student_id or email in Students table</td>\n    </tr>\n    <tr>\n        <td><strong>Super Key</strong></td>\n        <td>Any combination that uniquely identifies record</td>\n        <td>May include extra attributes, candidate key is always super key</td>\n        <td>{student_id}, {student_id, name}, {email, phone}</td>\n    </tr>\n    <tr>\n        <td><strong>Alternate Key</strong></td>\n        <td>Candidate key not chosen as primary key</td>\n        <td>Provides alternative unique identification</td>\n        <td>email if student_id is primary key</td>\n    </tr>\n    <tr>\n        <td><strong>Foreign Key</strong></td>\n        <td>Attribute(s) referencing primary key of another table</td>\n        <td>Establishes relationships between tables</td>\n        <td>dept_id in Students table referencing Departments table</td>\n    </tr>\n    <tr>\n        <td><strong>Composite Key</strong></td>\n        <td>Primary key consisting of multiple columns</td>\n        <td>Together uniquely identify record</td>\n        <td>{course_id, student_id} in Enrollments</td>\n    </tr>\n    <tr>\n        <td><strong>Unique Key</strong></td>\n        <td>Ensures uniqueness but allows one NULL value</td>\n        <td>Differs from primary key in NULL allowance</td>\n        <td>email in Users table (allows one NULL)</td>\n    </tr>\n</table>\n\n<h3>Key Terms in Relational Databases:</h3>\n<ul>\n    <li><strong>Table/Relation:</strong> Collection of rows in a database</li>\n    <li><strong>Record/Tuple:</strong> Single row in a table</li>\n    <li><strong>Field/Attribute:</strong> Column in a table</li>\n    <li><strong>Domain:</strong> Set of possible values for a field</li>\n    <li><strong>Index:</strong> Tool that speeds up database queries</li>\n    <li><strong>View:</strong> Virtual table created from actual tables</li>\n    <li><strong>Cardinality (of table):</strong> Total number of rows in a table</li>\n    <li><strong>Degree:</strong> Number of columns in a table</li>\n    <li><strong>Schema:</strong> Structure of table including name, fields, allowed values</li>\n    <li><strong>Prime Attributes:</strong> Attributes part of any candidate key</li>\n    <li><strong>Non-Prime Attributes:</strong> Attributes not part of any key</li>\n</ul>\n\n<h3>Integrity Constraints:</h3>\n<p>Rules that ensure data in a database is accurate and consistent:</p>\n<ul>\n    <li><strong>Entity Integrity:</strong> Each record must have unique identifier (primary key)</li>\n    <li><strong>Referential Integrity:</strong> Relationships between tables must be consistent (foreign keys)</li>\n    <li><strong>Domain Integrity:</strong> Data in each field must meet certain rules (type, range)</li>\n    <li><strong>User-Defined Integrity:</strong> Custom rules set by users for specific needs</li>\n</ul>\n\n<h3>Database Design Goals:</h3>\n<ul>\n    <li>Zero redundancy in the system</li>\n    <li>Loss-less join</li>\n    <li>Dependency preservation</li>\n    <li>Overcome shortcomings of conventional file system</li>\n</ul>"
        },
        { 
            id: "normalization", 
            title: "Normalization & Functional Dependencies", 
            type: "advanced", 
            code: "// Unnormalized table (violates 1NF)\nCREATE TABLE Orders_Bad (\n    order_id INT,\n    customer_name VARCHAR(100),\n    products VARCHAR(500) -- Contains multiple values like \"Laptop, Mouse, Keyboard\"\n);\n\n// 1NF Compliance\nCREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_name VARCHAR(100)\n);\n\nCREATE TABLE Order_Items (\n    item_id INT PRIMARY KEY,\n    order_id INT,\n    product_name VARCHAR(100),\n    FOREIGN KEY (order_id) REFERENCES Orders(order_id)\n);\n\n// Example showing functional dependencies\n/*\nSTUDENT_COURSE table:\nstudent_id, course_id, student_name, course_title, grade\n\nFunctional Dependencies:\nstudent_id → student_name  (student_id determines student_name)\ncourse_id → course_title   (course_id determines course_title)\n{student_id, course_id} → grade  (composite key determines grade)\n\nPartial Dependency (violates 2NF):\nIf {student_id, course_id} is PK, but student_name depends only on student_id\n\nTransitive Dependency (violates 3NF):\nIf student_id → dept_id and dept_id → dept_name, then student_id → dept_name transitively\n*/",
            content: "<h3>Normalization in DBMS</h3>\n<p><strong>Normalization</strong> is a process of organizing data in a database to reduce redundancy and improve data integrity. It involves splitting large tables into smaller, interrelated tables to eliminate data duplication.</p>\n\n<h3>Why Normalization is Needed:</h3>\n<ul>\n    <li>Ensures data integrity</li>\n    <li>Reduces update anomalies</li>\n    <li>Minimizes data redundancy</li>\n    <li>Enhances database performance</li>\n    <li>Makes database maintenance easier</li>\n</ul>\n\n<h3>Normal Forms:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Normal Form</th>\n        <th>Rule</th>\n        <th>Description</th>\n        <th>Example Fix</th>\n    </tr>\n    <tr>\n        <td><strong>1NF (First Normal Form)</strong></td>\n        <td>Atomic values, no repeating groups</td>\n        <td>Each column contains single, indivisible values</td>\n        <td>Split \"products\" column with multiple items into separate rows</td>\n    </tr>\n    <tr>\n        <td><strong>2NF (Second Normal Form)</strong></td>\n        <td>1NF + no partial dependencies</td>\n        <td>Every non-prime attribute fully functionally dependent on entire PK</td>\n        <td>Remove attributes dependent on only part of composite key</td>\n    </tr>\n    <tr>\n        <td><strong>3NF (Third Normal Form)</strong></td>\n        <td>2NF + no transitive dependencies</td>\n        <td>No non-prime attribute transitively dependent on primary key</td>\n        <td>Remove attributes dependent on other non-key attributes</td>\n    </tr>\n    <tr>\n        <td><strong>BCNF (Boyce-Codd NF)</strong></td>\n        <td>Stricter version of 3NF</td>\n        <td>For every functional dependency A→B, A must be super key</td>\n        <td>Also called 3.5NF</td>\n    </tr>\n</table>\n\n<h3>Functional Dependencies:</h3>\n<p>A constraint specifying the relationship between attributes, represented as A→B, where set A determines values of set B.</p>\n\n<h4>Types of Functional Dependencies:</h4>\n<ul>\n    <li><strong>Trivial:</strong> Right-hand side is subset of left-hand side (A→A)</li>\n    <li><strong>Non-Trivial:</strong> Right-hand side is not subset of left-hand side (Student_ID→Student_Name)</li>\n    <li><strong>Multivalued:</strong> One attribute determines set of values for another (Student_ID→→Student_Courses)</li>\n    <li><strong>Transitive:</strong> Dependency through third attribute (Student_ID→Student_Name and Student_Name→Department)</li>\n</ul>\n\n<h3>Normalization Process Example:</h3>\n<pre>\nUNNORMALIZED (all in one table):\nOrders(order_id, customer_id, customer_name, customer_address, product_id, product_name, quantity)\n\nPROBLEMS:\n- Customer details repeated for each order\n- Product details repeated for each order\n- Update anomalies if customer address changes\n\n1NF:\n- Ensure atomic values\n- Remove repeating groups\n\n2NF:\n- Remove partial dependencies\n- Customer details depend only on customer_id, not full PK\n- Product details depend only on product_id\n\n3NF:\n- Remove transitive dependencies\n- If customer_address depends on customer_zip, which depends on customer_id\n\nRESULT (Normalized):\nCustomers(customer_id, customer_name, customer_zip)\nZip_Codes(zip_code, city, state)\nProducts(product_id, product_name, price)\nOrders(order_id, customer_id, order_date)\nOrder_Items(order_id, product_id, quantity)\n</pre>\n\n<h3>Denormalization:</h3>\n<p>The reverse process of normalization that combines normalized tables to improve query performance, often at the cost of increased redundancy.</p>\n\n<h3>Armstrong's Axioms:</h3>\n<p>Rules used to infer all functional dependencies on a relational database:</p>\n<ul>\n    <li><strong>Reflexivity:</strong> If Y ⊆ X, then X → Y</li>\n    <li><strong>Augmentation:</strong> If X → Y, then XZ → YZ</li>\n    <li><strong>Transitivity:</strong> If X → Y and Y → Z, then X → Z</li>\n</ul>\n\n<h3>Attribute Closure (X+):</h3>\n<p>All attributes functionally determined by X. Example: If R(ABCD) with {A→B, B→C, C→D}, then A+ = {ABCD}.</p>"
        },
        { 
            id: "transactions", 
            title: "Transactions & ACID Properties", 
            type: "advanced", 
            code: "// Bank transfer transaction demonstrating ACID properties\nSTART TRANSACTION;\n\n-- Atomicity: All or nothing\nUPDATE Accounts SET balance = balance - 500 WHERE account_id = 1;\nUPDATE Accounts SET balance = balance + 500 WHERE account_id = 2;\n\n-- Consistency check\nIF (SELECT balance FROM Accounts WHERE account_id = 1) < 0 THEN\n    ROLLBACK;  -- Atomicity: undo all changes\n    RAISE_ERROR 'Insufficient funds';\nELSE\n    COMMIT;    -- Make changes permanent (Durability)\nEND IF;\n\n-- Isolation levels example\nSET TRANSACTION ISOLATION LEVEL SERIALIZABLE;\n\n-- Transaction with savepoint\nSTART TRANSACTION;\nINSERT INTO Orders (order_id, customer_id) VALUES (1001, 501);\nSAVEPOINT order_created;\n\nUPDATE Inventory SET quantity = quantity - 1 WHERE product_id = 10;\n-- If inventory update fails\nROLLBACK TO SAVEPOINT order_created;\n-- Continue with other operations or rollback completely",
            content: "<h3>Transactions in DBMS</h3>\n<p>A <strong>transaction</strong> is a single logical unit of work that accesses and possibly modifies the contents of a database. Transactions ensure reliable execution of database operations and manage simultaneous access without conflicts.</p>\n\n<h3>ACID Properties:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Property</th>\n        <th>Description</th>\n        <th>Ensures</th>\n        <th>Example</th>\n    </tr>\n    <tr>\n        <td><strong>Atomicity</strong></td>\n        <td>All or nothing execution</td>\n        <td>Either entire transaction completes or none of it does</td>\n        <td>Bank transfer: both debit and credit must complete</td>\n    </tr>\n    <tr>\n        <td><strong>Consistency</strong></td>\n        <td>Database remains in valid state</td>\n        <td>Transaction brings database from one valid state to another</td>\n        <td>Account balance never goes negative</td>\n    </tr>\n    <tr>\n        <td><strong>Isolation</strong></td>\n        <td>Transactions don't interfere</td>\n        <td>Each transaction executes independently</td>\n        <td>Two users can transfer money simultaneously without conflict</td>\n    </tr>\n    <tr>\n        <td><strong>Durability</strong></td>\n        <td>Committed changes persist</td>\n        <td>Once transaction commits, changes survive system failures</td>\n        <td>After successful transfer, changes remain even after power failure</td>\n    </tr>\n</table>\n\n<h3>Transaction States:</h3>\n<pre>\n1. Active → Transaction executing\n2. Partially Committed → Final operation executed\n3. Committed → Transaction completed successfully\n4. Failed → Can't proceed normally\n5. Aborted → Rolled back, database restored to prior state\n6. Terminated → Left system\n</pre>\n\n<h3>Concurrency Control:</h3>\n<p>In environments where multiple users access and modify the database simultaneously, DBMS guarantees controlled transaction execution to prevent data corruption.</p>\n\n<h4>Concurrency Problems (without control):</h4>\n<ul>\n    <li><strong>Dirty Read:</strong> Reading uncommitted data that may be rolled back</li>\n    <li><strong>Non-Repeatable Read:</strong> Different values read for same data in same transaction</li>\n    <li><strong>Phantom Read:</strong> New rows appear in repeated reads</li>\n    <li><strong>Lost Update:</strong> Two transactions update same data, one overwrites other</li>\n</ul>\n\n<h3>Isolation Levels:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Level</th>\n        <th>Dirty Read</th>\n        <th>Non-Repeatable Read</th>\n        <th>Phantom Read</th>\n        <th>Performance</th>\n    </tr>\n    <tr>\n        <td><strong>Read Uncommitted</strong></td>\n        <td>Allowed</td>\n        <td>Allowed</td>\n        <td>Allowed</td>\n        <td>Highest</td>\n    </tr>\n    <tr>\n        <td><strong>Read Committed</strong></td>\n        <td>Prevented</td>\n        <td>Allowed</td>\n        <td>Allowed</td>\n        <td>High</td>\n    </tr>\n    <tr>\n        <td><strong>Repeatable Read</strong></td>\n        <td>Prevented</td>\n        <td>Prevented</td>\n        <td>Allowed</td>\n        <td>Medium</td>\n    </tr>\n    <tr>\n        <td><strong>Serializable</strong></td>\n        <td>Prevented</td>\n        <td>Prevented</td>\n        <td>Prevented</td>\n        <td>Lowest</td>\n    </tr>\n</table>\n\n<h3>Locks in DBMS:</h3>\n<p>A database lock is a mechanism to protect shared data from being updated by multiple users simultaneously.</p>\n<ul>\n    <li><strong>Shared Lock (Read Lock):</strong> Many transactions can hold lock for reading</li>\n    <li><strong>Exclusive Lock (Write Lock):</strong> Only one transaction can hold lock for writing</li>\n</ul>\n\n<h3>Transaction Control Language (TCL):</h3>\n<ul>\n    <li><strong>COMMIT:</strong> Saves all transaction changes permanently</li>\n    <li><strong>ROLLBACK:</strong> Undoes changes made during transaction</li>\n    <li><strong>SAVEPOINT:</strong> Sets point within transaction for partial rollback</li>\n</ul>\n\n<h3>Transaction Manager Functions:</h3>\n<ul>\n    <li>Commit and rollback management</li>\n    <li>Locking mechanisms for multi-user environments</li>\n    <li>Concurrency control for simultaneous reads/writes</li>\n</ul>"
        },
        { 
            id: "advanced", 
            title: "Advanced DBMS Concepts", 
            type: "advanced", 
            code: "// Index creation examples\nCREATE INDEX idx_student_name ON Students(name);\n\n-- Clustered index (usually on primary key)\n-- Table physically sorted by clustered index\n\n-- Non-clustered index\nCREATE NONCLUSTERED INDEX idx_student_email ON Students(email);\n\n-- Composite index\nCREATE INDEX idx_dept_course ON Courses(department_id, course_code);\n\n-- View creation\nCREATE VIEW High_GPA_Students AS\nSELECT student_id, name, gpa\nFROM Students\nWHERE gpa >= 3.5;\n\n-- Using the view\nSELECT * FROM High_GPA_Students ORDER BY gpa DESC;\n\n-- Trigger example\nCREATE TRIGGER update_timestamp\nBEFORE UPDATE ON Students\nFOR EACH ROW\nSET NEW.updated_at = CURRENT_TIMESTAMP;\n\n-- Stored procedure\nCREATE PROCEDURE GetStudentInfo(IN student_id INT)\nBEGIN\n    SELECT s.name, s.email, d.dept_name, COUNT(e.course_id) as courses_taken\n    FROM Students s\n    JOIN Departments d ON s.dept_id = d.dept_id\n    LEFT JOIN Enrollments e ON s.student_id = e.student_id\n    WHERE s.student_id = student_id\n    GROUP BY s.student_id;\nEND;",
            content: "<h3>Advanced DBMS Concepts</h3>\n\n<h3>Indexing:</h3>\n<p>Indexes are data structures that improve the speed of data retrieval operations at the cost of additional writes and storage.</p>\n\n<h4>Types of Indexes:</h4>\n<ul>\n    <li><strong>Clustered Index:</strong> Determines physical order of data in table (usually primary key)</li>\n    <li><strong>Non-Clustered Index:</strong> Separate structure with pointers to data</li>\n    <li><strong>Composite Index:</strong> Index on multiple columns</li>\n    <li><strong>Unique Index:</strong> Ensures indexed columns contain unique values</li>\n</ul>\n\n<h4>B-Tree and B+ Trees:</h4>\n<p>Common indexing structures that ensure balanced trees for efficient searching, insertion, and deletion.</p>\n\n<h3>Views:</h3>\n<p>A <strong>view</strong> is a virtual table derived from one or more base tables, representing a pre-defined query.</p>\n\n<h4>Benefits of Views:</h4>\n<ul>\n    <li><strong>Data Abstraction:</strong> Hide complexity of underlying tables</li>\n    <li><strong>Security:</strong> Restrict access to specific columns/rows</li>\n    <li><strong>Simplified Querying:</strong> Encapsulate complex queries</li>\n    <li><strong>Data Independence:</strong> Applications unaffected by schema changes</li>\n</ul>\n\n<h3>Triggers:</h3>\n<p>A <strong>database trigger</strong> is a set of instructions automatically executed in response to specific events on a table or view.</p>\n\n<h3>Joins:</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Join Type</th>\n        <th>Description</th>\n        <th>Result</th>\n    </tr>\n    <tr>\n        <td><strong>INNER JOIN</strong></td>\n        <td>Returns matching rows from both tables</td>\n        <td>Intersection</td>\n    </tr>\n    <tr>\n        <td><strong>LEFT (OUTER) JOIN</strong></td>\n        <td>All rows from left table + matches from right</td>\n        <td>All left plus matches</td>\n    </tr>\n    <tr>\n        <td><strong>RIGHT (OUTER) JOIN</strong></td>\n        <td>All rows from right table + matches from left</td>\n        <td>All right plus matches</td>\n    </tr>\n    <tr>\n        <td><strong>FULL (OUTER) JOIN</strong></td>\n        <td>All rows when there's match in either table</td>\n        <td>Union</td>\n    </tr>\n    <tr>\n        <td><strong>CROSS JOIN</strong></td>\n        <td>Cartesian product of both tables</td>\n        <td>All combinations</td>\n    </tr>\n    <tr>\n        <td><strong>SELF JOIN</strong></td>\n        <td>Table joined with itself</td>\n        <td>Compare rows within same table</td>\n    </tr>\n</table>\n\n<h3>File Organization:</h3>\n<p>Methods of storing data records in files for efficient access, arrangement, and retrieval from physical storage.</p>\n\n<h3>Query Processing & Optimization:</h3>\n<ul>\n    <li><strong>Query Parser:</strong> Validates SQL syntax</li>\n    <li><strong>Query Optimizer:</strong> Determines most efficient execution plan</li>\n    <li><strong>Query Executor:</strong> Carries out optimized plan</li>\n    <li><strong>Optimization Techniques:</strong> Index usage, join ordering, predicate pushdown</li>\n</ul>\n\n<h3>Backup and Recovery:</h3>\n<p>DBMS provides backup and recovery options by creating backup copies so data can be restored to a consistent state after failures.</p>\n\n<h3>Security Features:</h3>\n<ul>\n    <li>User authentication and authorization</li>\n    <li>Role-based access control</li>\n    <li>Data encryption (in transit and at rest)</li>\n    <li>Audit logging</li>\n</ul>\n\n<h3>Data Abstraction Levels:</h3>\n<ol>\n    <li><strong>Physical Level:</strong> How data is actually stored (lowest level)</li>\n    <li><strong>Logical Level:</strong> What data is stored and relationships</li>\n    <li><strong>View Level:</strong> Individual user perspectives (highest level)</li>\n</ol>\n\n<h3>Database Constraints:</h3>\n<p>Rules or conditions that control behavior of database tables, including:</p>\n<ul>\n    <li>NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY</li>\n    <li>CHECK constraints (value range validation)</li>\n    <li>DEFAULT values</li>\n</ul>"
        },
        { 
            id: "applications", 
            title: "Applications & Future Trends", 
            type: "practice", 
            code: "// SQL for banking application\n-- Transaction table for banking\nCREATE TABLE Transactions (\n    transaction_id INT PRIMARY KEY,\n    account_id INT,\n    transaction_type ENUM('DEPOSIT', 'WITHDRAWAL', 'TRANSFER'),\n    amount DECIMAL(10,2),\n    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    FOREIGN KEY (account_id) REFERENCES Accounts(account_id),\n    INDEX idx_account_date (account_id, timestamp)\n);\n\n-- E-commerce order processing\nCREATE TABLE Orders (\n    order_id INT PRIMARY KEY,\n    customer_id INT,\n    order_date DATE,\n    status ENUM('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'),\n    total_amount DECIMAL(10,2),\n    INDEX idx_customer_status (customer_id, status)\n);\n\n-- Healthcare patient records (simplified)\nCREATE TABLE Patients (\n    patient_id INT PRIMARY KEY,\n    name VARCHAR(100),\n    date_of_birth DATE,\n    blood_type CHAR(3),\n    emergency_contact VARCHAR(100),\n    medical_history JSON  -- For semi-structured data\n);\n\n-- Social media friendship graph (conceptual)\n/*\nIn a graph database like Neo4j:\nCREATE (user1:User {name: 'Alice'})\nCREATE (user2:User {name: 'Bob'})\nCREATE (user1)-[:FRIENDS_WITH]->(user2)\n*/",
            content: "<h3>Applications of DBMS:</h3>\n\n<h4>1. Banking:</h4>\n<ul>\n    <li>Manages customer accounts, transactions, loans</li>\n    <li>Ensures ACID properties for financial transactions</li>\n    <li>Handles high-volume concurrent access</li>\n</ul>\n\n<h4>2. E-commerce:</h4>\n<ul>\n    <li>Tracks products, inventory, orders, customers</li>\n    <li>Manages shopping carts and payment processing</li>\n    <li>Personalized recommendations based on purchase history</li>\n</ul>\n\n<h4>3. Healthcare:</h4>\n<ul>\n    <li>Stores patient records, medical history, diagnoses</li>\n    <li>Manages appointments and billing</li>\n    <li>Ensures privacy and security of sensitive data (HIPAA compliance)</li>\n</ul>\n\n<h4>4. Education:</h4>\n<ul>\n    <li>Handles student information, grades, schedules</li>\n    <li>Manages course registrations and faculty records</li>\n    <li>Tracks alumni and donor information</li>\n</ul>\n\n<h4>5. Social Media:</h4>\n<ul>\n    <li>Manages user profiles, connections, interactions</li>\n    <li>Stores posts, messages, multimedia content</li>\n    <li>Graph databases for relationship mapping</li>\n</ul>\n\n<h4>6. Airlines and Hospitality:</h4>\n<ul>\n    <li>Reservation systems for flights, hotels, rental cars</li>\n    <li>Customer loyalty programs</li>\n    <li>Real-time inventory management</li>\n</ul>\n\n<h4>7. Telecommunications:</h4>\n<ul>\n    <li>Call detail records</li>\n    <li>Customer billing and service management</li>\n    <li>Network performance monitoring</li>\n</ul>\n\n<h4>8. Data Science and Analytics:</h4>\n<ul>\n    <li>Data warehouses for historical analysis</li>\n    <li>Business intelligence and reporting</li>\n    <li>Machine learning data pipelines</li>\n</ul>\n\n<h3>Future Trends in DBMS Technology:</h3>\n\n<h4>1. Generative AI Integration:</h4>\n<ul>\n    <li>Natural language to SQL query conversion</li>\n    <li>Automated database design and schema generation</li>\n    <li>Intelligent query optimization and debugging</li>\n    <li>AI-powered performance tuning</li>\n</ul>\n\n<h4>2. Vector Databases:</h4>\n<ul>\n    <li>Specialized for AI/ML applications</li>\n    <li>Retrieval-Augmented Generation (RAG) for LLMs</li>\n    <li>Similarity search for embeddings</li>\n</ul>\n\n<h4>3. Cloud-Native Databases:</h4>\n<ul>\n    <li>Serverless database architectures</li>\n    <li>Auto-scaling and global distribution</li>\n    <li>Managed services reducing administrative overhead</li>\n</ul>\n\n<h4>4. Multi-Model Databases:</h4>\n<ul>\n    <li>Support for multiple data models in single system</li>\n    <li>Unified querying across different data types</li>\n    <li>Reduced complexity in polyglot persistence environments</li>\n</ul>\n\n<h4>5. In-Memory Computing:</h4>\n<ul>\n    <li>Faster analytics and real-time processing</li>\n    <li>Hybrid transactional/analytical processing (HTAP)</li>\n    <li>Reduced latency for time-sensitive applications</li>\n</ul>\n\n<h4>6. Blockchain Integration:</h4>\n<ul>\n    <li>Immutable audit trails</li>\n    <li>Decentralized database architectures</li>\n    <li>Enhanced data provenance and trust</li>\n</ul>\n\n<h3>Career Opportunities in DBMS:</h3>\n<ul>\n    <li><strong>Database Administrator (DBA):</strong> Manages security, performance, backups</li>\n    <li><strong>Data Analyst:</strong> Analyzes data for business insights</li>\n    <li><strong>Database Developer:</strong> Designs and implements database solutions</li>\n    <li><strong>Data Scientist:</strong> Builds models and derives insights from data</li>\n    <li><strong>Cloud Database Expert:</strong> Specializes in cloud-based database solutions</li>\n    <li><strong>Data Engineer:</strong> Builds and maintains data pipelines</li>\n    <li><strong>Information Security Analyst:</strong> Focuses on database security</li>\n</ul>\n\n<h3>DBMS vs. Traditional File Systems (Summary):</h3>\n<table border='1' style='width:100%'>\n    <tr>\n        <th>Feature</th>\n        <th>File System</th>\n        <th>DBMS</th>\n    </tr>\n    <tr>\n        <td>Data Redundancy</td>\n        <td>High (multiple copies)</td>\n        <td>Minimal (centralized)</td>\n    </tr>\n    <tr>\n        <td>Data Consistency</td>\n        <td>Low (inconsistent updates)</td>\n        <td>High (controlled updates)</td>\n    </tr>\n    <tr>\n        <td>Concurrent Access</td>\n        <td>Limited or problematic</td>\n        <td>Robust support</td>\n    </tr>\n    <tr>\n        <td>Data Security</td>\n        <td>Limited</td>\n        <td>Comprehensive controls</td>\n    </tr>\n    <tr>\n        <td>Backup & Recovery</td>\n        <td>Manual, error-prone</td>\n        <td>Automated, reliable</td>\n    </tr>\n    <tr>\n        <td>Data Integrity</td>\n        <td>No built-in constraints</td>\n        <td>Enforced constraints</td>\n    </tr>\n    <tr>\n        <td>Data Sharing</td>\n        <td>Difficult</td>\n        <td>Easy (centralized repository)</td>\n    </tr>\n</table>"
        }
    ]
},
    networking: {
    title: "Computer Networking ",
    icon: "<i class='fas fa-network-wired' style='color: #4CAF50;'></i>",
    topics: [
        {
            id: "introduction",
            title: "Networking Introduction",
            type: "basics",
            
            content: `<h3>What is Computer Networking?</h3>
            <p>Computer networking involves connecting multiple devices to share resources and communicate with each other. Networks enable data exchange between computers, servers, and other devices.</p>
            
            <h3>Network Types:</h3>
            <ul>
                <li><strong>LAN:</strong> Local Area Network (Home/Office)</li>
                <li><strong>WAN:</strong> Wide Area Network (Internet)</li>
                <li><strong>MAN:</strong> Metropolitan Area Network</li>
                <li><strong>PAN:</strong> Personal Area Network</li>
                <li><strong>VPN:</strong> Virtual Private Network</li>
            </ul>
            
            <h3>Network Topologies:</h3>
            <div class="diagram">
                <pre>
                Star Topology:
                        [Server]
                          |
                    ------------
                    |    |    |
                   PC1  PC2  PC3
                
                Mesh Topology:
                    PC1 ↔ PC2
                     ↕     ↕
                    PC3 ↔ PC4
                </pre>
            </div>
            
            <h3>Key Protocols:</h3>
            <ul>
                <li>HTTP/HTTPS - Web communication</li>
                <li>TCP - Reliable transmission</li>
                <li>UDP - Fast transmission</li>
                <li>IP - Addressing and routing</li>
                <li>DNS - Domain name resolution</li>
            </ul>`
        },
        {
            id: "osi-model",
            title: "OSI Model Deep Dive",
            type: "basics",
            
            content: `<h3>OSI Model (Open Systems Interconnection)</h3>
            <p>The OSI model is a conceptual framework that standardizes network communication into 7 distinct layers. Each layer has specific functions and protocols.</p>
            
            <h3>Layer Details:</h3>
            <table class="network-table">
                <tr>
                    <th>Layer</th>
                    <th>Name</th>
                    <th>Function</th>
                    <th>Protocols/Devices</th>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Application</td>
                    <td>User interface, network services</td>
                    <td>HTTP, FTP, SMTP, DNS</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Presentation</td>
                    <td>Data translation, encryption</td>
                    <td>SSL, TLS, JPEG, MPEG</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Session</td>
                    <td>Session management</td>
                    <td>NetBIOS, RPC</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Transport</td>
                    <td>End-to-end connections</td>
                    <td>TCP, UDP, SCTP</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Network</td>
                    <td>Logical addressing, routing</td>
                    <td>IP, ICMP, OSPF, Router</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Data Link</td>
                    <td>Physical addressing, error detection</td>
                    <td>Ethernet, PPP, Switch, Bridge</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Physical</td>
                    <td>Physical transmission</td>
                    <td>Cat5/6 cables, Hubs, Repeaters</td>
                </tr>
            </table>
            
            <h3>Data Encapsulation Process:</h3>
            <div class="diagram">
                <pre>
                Application Data
                        ↓
                +-------------------+
                | Application Header|
                +-------------------+
                |      DATA         |
                +-------------------+
                        ↓
                +-------------------+
                | Transport Header  |
                +-------------------+
                | Segment           |
                +-------------------+
                        ↓
                +-------------------+
                | Network Header    |
                +-------------------+
                | Packet            |
                +-------------------+
                        ↓
                +-------------------+
                | Data Link Header  |
                +-------------------+
                | Frame             |
                +-------------------+
                        ↓
                Physical Transmission
                </pre>
            </div>`
        },
        {
            id: "tcp-ip",
            title: "TCP/IP Protocol Suite",
            type: "basics",
           
            content: `<h3>TCP/IP Protocol Suite</h3>
            <p>The TCP/IP model is the practical implementation used on the internet. It has 4 layers that correspond to the OSI model.</p>
            
            <h3>TCP/IP Layers:</h3>
            <ol>
                <li><strong>Application Layer:</strong> Combines OSI Application, Presentation, and Session layers</li>
                <li><strong>Transport Layer:</strong> End-to-end communication (TCP/UDP)</li>
                <li><strong>Internet Layer:</strong> Logical addressing and routing (IP)</li>
                <li><strong>Network Access Layer:</strong> Combines OSI Data Link and Physical layers</li>
            </ol>
            
            <h3>TCP vs UDP:</h3>
            <table class="network-table">
                <tr>
                    <th>Feature</th>
                    <th>TCP</th>
                    <th>UDP</th>
                </tr>
                <tr>
                    <td>Connection</td>
                    <td>Connection-oriented</td>
                    <td>Connectionless</td>
                </tr>
                <tr>
                    <td>Reliability</td>
                    <td>Guaranteed delivery</td>
                    <td>Best effort</td>
                </tr>
                <tr>
                    <td>Ordering</td>
                    <td>Sequenced packets</td>
                    <td>No sequencing</td>
                </tr>
                <tr>
                    <td>Speed</td>
                    <td>Slower (overhead)</td>
                    <td>Faster</td>
                </tr>
                <tr>
                    <td>Use Cases</td>
                    <td>Web, Email, File Transfer</td>
                    <td>Video streaming, DNS, VoIP</td>
                </tr>
            </table>
            
            <h3>Port Numbers:</h3>
            <ul>
                <li><strong>Well-known ports (0-1023):</strong>
                    <ul>
                        <li>21 - FTP</li>
                        <li>22 - SSH</li>
                        <li>25 - SMTP</li>
                        <li>53 - DNS</li>
                        <li>80 - HTTP</li>
                        <li>443 - HTTPS</li>
                    </ul>
                </li>
                <li><strong>Registered ports (1024-49151):</strong> MySQL (3306), PostgreSQL (5432)</li>
                <li><strong>Dynamic ports (49152-65535):</strong> Ephemeral ports</li>
            </ul>`
        },
        {
            id: "ip-addressing",
            title: "IP Addressing & Subnetting",
            type: "advanced",
           
            content: `<h3>IP Addressing Fundamentals</h3>
            <p>IP addresses uniquely identify devices on a network. IPv4 uses 32-bit addresses, while IPv6 uses 128-bit addresses.</p>
            
            <h3>IPv4 Address Structure:</h3>
            <div class="diagram">
                <pre>
                192 . 168 . 1 . 10
                ↓    ↓    ↓   ↓
                Network . Host
                
                Binary: 11000000.10101000.00000001.00001010
                </pre>
            </div>
            
            <h3>Subnetting Example:</h3>
            <p><strong>Problem:</strong> Divide 192.168.1.0/24 into 4 subnets</p>
            <ol>
                <li>Original: 192.168.1.0/24 (256 addresses)</li>
                <li>New subnet mask: /26 (255.255.255.192)</li>
                <li>Each subnet: 64 addresses (62 usable)</li>
            </ol>
            
            <table class="network-table">
                <tr>
                    <th>Subnet</th>
                    <th>Network Address</th>
                    <th>Usable Range</th>
                    <th>Broadcast</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>192.168.1.0/26</td>
                    <td>192.168.1.1 - 192.168.1.62</td>
                    <td>192.168.1.63</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>192.168.1.64/26</td>
                    <td>192.168.1.65 - 192.168.1.126</td>
                    <td>192.168.1.127</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>192.168.1.128/26</td>
                    <td>192.168.1.129 - 192.168.1.190</td>
                    <td>192.168.1.191</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>192.168.1.192/26</td>
                    <td>192.168.1.193 - 192.168.1.254</td>
                    <td>192.168.1.255</td>
                </tr>
            </table>
            
            <h3>IPv6 Addressing:</h3>
            <ul>
                <li>128-bit address space</li>
                <li>Hexadecimal notation (8 groups of 4 hex digits)</li>
                <li>Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334</li>
                <li>Zero compression: 2001:db8:85a3::8a2e:370:7334</li>
                <li>Link-local: fe80::/10</li>
                <li>Unique local: fc00::/7</li>
            </ul>`
        },
        {
            id: "routing",
            title: "Routing Protocols",
            type: "advanced",
           
            content: `<h3>Routing Protocols</h3>
            <p>Routing protocols determine the best path for data packets to travel across networks. Routers use routing tables to make forwarding decisions.</p>
            
            <h3>Types of Routing:</h3>
            <ul>
                <li><strong>Static Routing:</strong> Manual configuration
                    <ul>
                        <li>Advantages: Simple, secure, low overhead</li>
                        <li>Disadvantages: Not scalable, manual updates</li>
                    </ul>
                </li>
                <li><strong>Dynamic Routing:</strong> Automatic updates
                    <ul>
                        <li>Distance Vector: RIP, EIGRP</li>
                        <li>Link State: OSPF, IS-IS</li>
                        <li>Path Vector: BGP</li>
                    </ul>
                </li>
            </ul>
            
            <h3>Common Routing Protocols:</h3>
            <table class="network-table">
                <tr>
                    <th>Protocol</th>
                    <th>Type</th>
                    <th>Metric</th>
                    <th>Use Case</th>
                </tr>
                <tr>
                    <td>RIP</td>
                    <td>Distance Vector</td>
                    <td>Hop Count</td>
                    <td>Small networks</td>
                </tr>
                <tr>
                    <td>OSPF</td>
                    <td>Link State</td>
                    <td>Cost (Bandwidth)</td>
                    <td>Enterprise networks</td>
                </tr>
                <tr>
                    <td>EIGRP</td>
                    <td>Advanced DV</td>
                    <td>Composite metric</td>
                    <td>Cisco networks</td>
                </tr>
                <tr>
                    <td>BGP</td>
                    <td>Path Vector</td>
                    <td>Path attributes</td>
                    <td>Internet routing</td>
                </tr>
            </table>
            
            <h3>OSPF Areas Design:</h3>
            <div class="diagram">
                <pre>
                Area 0 (Backbone)
                    ↑
                -----------------
                |       |       |
                Area 1  Area 2  Area 3
                
                Router Types:
                • Internal Router: All interfaces in same area
                • Backbone Router: Interface in Area 0
                • Area Border Router (ABR): Connects areas
                • Autonomous System Border Router (ASBR): Connects to other AS
                </pre>
            </div>`
        },
        {
            id: "dns-dhcp",
            title: "DNS & DHCP",
            type: "advanced",
            
            content: `<h3>DNS (Domain Name System)</h3>
            <p>DNS translates human-readable domain names to IP addresses. It's a hierarchical, distributed database.</p>
            
            <h3>DNS Hierarchy:</h3>
            <div class="diagram">
                <pre>
                Root Level (.)
                        |
                Top Level Domains (.com, .org, .net)
                        |
                Second Level (example.com)
                        |
                Subdomains (www.example.com, mail.example.com)
                </pre>
            </div>
            
            <h3>DNS Record Types:</h3>
            <ul>
                <li><strong>A/AAAA:</strong> IPv4/IPv6 address record</li>
                <li><strong>CNAME:</strong> Canonical name (alias)</li>
                <li><strong>MX:</strong> Mail exchange</li>
                <li><strong>NS:</strong> Name server</li>
                <li><strong>PTR:</strong> Pointer record (reverse DNS)</li>
                <li><strong>SOA:</strong> Start of authority</li>
                <li><strong>TXT:</strong> Text record (SPF, DKIM)</li>
                <li><strong>SRV:</strong> Service location</li>
            </ul>
            
            <h3>DHCP (Dynamic Host Configuration Protocol)</h3>
            <p>DHCP automatically assigns IP addresses and network configuration to devices on a network.</p>
            
            <h3>DHCP Process (DORA):</h3>
            <ol>
                <li><strong>Discover:</strong> Client broadcasts to find DHCP servers</li>
                <li><strong>Offer:</strong> Server offers IP configuration</li>
                <li><strong>Request:</strong> Client requests offered configuration</li>
                <li><strong>Acknowledge:</strong> Server confirms and assigns lease</li>
            </ol>
            
            <h3>DHCP Scope Options:</h3>
            <ul>
                <li>IP Address Range</li>
                <li>Subnet Mask</li>
                <li>Default Gateway</li>
                <li>DNS Servers</li>
                <li>Domain Name</li>
                <li>Lease Duration</li>
                <li>Reservations (static IP for MAC)</li>
            </ul>`
        },
        {
            id: "security",
            title: "Network Security",
            type: "advanced",
            
            content: `<h3>Network Security Fundamentals</h3>
            <p>Network security involves protecting network infrastructure and data from unauthorized access, misuse, or attacks.</p>
            
            <h3>Common Threats:</h3>
            <ul>
                <li><strong>DDoS Attacks:</strong> Overwhelm resources with traffic</li>
                <li><strong>Man-in-the-Middle:</strong> Intercept communication</li>
                <li><strong>Packet Sniffing:</strong> Capture unencrypted data</li>
                <li><strong>IP Spoofing:</strong> Fake source IP address</li>
                <li><strong>Port Scanning:</strong> Discover open ports</li>
                <li><strong>DNS Poisoning:</strong> Redirect to malicious sites</li>
            </ul>
            
            <h3>Security Mechanisms:</h3>
            <table class="network-table">
                <tr>
                    <th>Technology</th>
                    <th>Purpose</th>
                    <th>Layer</th>
                </tr>
                <tr>
                    <td>Firewall</td>
                    <td>Filter traffic based on rules</td>
                    <td>Network/Transport</td>
                </tr>
                <tr>
                    <td>IDS/IPS</td>
                    <td>Detect/Prevent intrusions</td>
                    <td>Network/Application</td>
                </tr>
                <tr>
                    <td>VPN</td>
                    <td>Encrypted tunnel</td>
                    <td>Network/Transport</td>
                </tr>
                <tr>
                    <td>SSL/TLS</td>
                    <td>Encrypt web traffic</td>
                    <td>Transport/Application</td>
                </tr>
                <tr>
                    <td>WPA3</td>
                    <td>Wireless security</td>
                    <td>Data Link</td>
                </tr>
            </table>
            
            <h3>Defense in Depth Strategy:</h3>
            <div class="diagram">
                <pre>
                Perimeter Defense (Firewall)
                        ↓
                Network Segmentation (VLANs)
                        ↓
                Host Security (Antivirus)
                        ↓
                Application Security (WAF)
                        ↓
                Data Security (Encryption)
                        ↓
                User Education (Training)
                </pre>
            </div>
            
            <h3>Best Practices:</h3>
            <ul>
                <li>Use strong authentication (MFA)</li>
                <li>Implement principle of least privilege</li>
                <li>Regular security patches and updates</li>
                <li>Network segmentation with VLANs</li>
                <li>Encrypt sensitive data in transit and at rest</li>
                <li>Regular security audits and monitoring</li>
            </ul>`
        },
        {
            id: "wireless",
            title: "Wireless Networking",
            type: "advanced",
            
            content: `<h3>Wireless Networking</h3>
            <p>Wireless networks use radio waves to connect devices without physical cables. They operate primarily on 2.4GHz and 5GHz frequency bands.</p>
            
            <h3>Wireless Standards Evolution:</h3>
            <table class="network-table">
                <tr>
                    <th>Standard</th>
                    <th>Year</th>
                    <th>Frequency</th>
                    <th>Max Speed</th>
                    <th>Features</th>
                </tr>
                <tr>
                    <td>802.11</td>
                    <td>1997</td>
                    <td>2.4GHz</td>
                    <td>2 Mbps</td>
                    <td>Original standard</td>
                </tr>
                <tr>
                    <td>802.11b</td>
                    <td>1999</td>
                    <td>2.4GHz</td>
                    <td>11 Mbps</td>
                    <td>Widespread adoption</td>
                </tr>
                <tr>
                    <td>802.11a</td>
                    <td>1999</td>
                    <td>5GHz</td>
                    <td>54 Mbps</td>
                    <td>Less interference</td>
                </tr>
                <tr>
                    <td>802.11g</td>
                    <td>2003</td>
                    <td>2.4GHz</td>
                    <td>54 Mbps</td>
                    <td>Backward compatible</td>
                </tr>
                <tr>
                    <td>802.11n</td>
                    <td>2009</td>
                    <td>2.4/5GHz</td>
                    <td>600 Mbps</td>
                    <td>MIMO, 40MHz channels</td>
                </tr>
                <tr>
                    <td>802.11ac</td>
                    <td>2013</td>
                    <td>5GHz</td>
                    <td>1.3 Gbps</td>
                    <td>MU-MIMO, 160MHz</td>
                </tr>
                <tr>
                    <td>802.11ax</td>
                    <td>2019</td>
                    <td>2.4/5/6GHz</td>
                    <td>10 Gbps</td>
                    <td>WiFi 6, OFDMA</td>
                </tr>
            </table>
            
            <h3>Wireless Security Protocols:</h3>
            <ul>
                <li><strong>WEP:</strong> Weak, easily cracked</li>
                <li><strong>WPA:</strong> TKIP encryption, better than WEP</li>
                <li><strong>WPA2:</strong> AES-CCMP, current standard</li>
                <li><strong>WPA3:</strong> Latest standard, stronger encryption</li>
            </ul>
            
            <h3>Wireless Network Design:</h3>
            <div class="diagram">
                <pre>
                Enterprise Wireless Design:
                
                [Internet]
                    |
                [Controller]
                    |
                ------------
                |          |
              [AP1]      [AP2]
                |          |
              Users      Users
              
                Key Considerations:
                • Channel planning (1, 6, 11 for 2.4GHz)
                • Power levels adjustment
                • SSID broadcast control
                • Roaming support
                • Load balancing
                </pre>
            </div>
            
            <h3>Wireless Site Survey Metrics:</h3>
            <ul>
                <li><strong>RSSI (Received Signal Strength):</strong>
                    <ul>
                        <li>-30 dBm: Excellent</li>
                        <li>-50 dBm: Good</li>
                        <li>-70 dBm: Fair</li>
                        <li>-90 dBm: Poor</li>
                    </ul>
                </li>
                <li><strong>SNR (Signal-to-Noise Ratio):</strong>
                    <ul>
                        <li>> 25 dB: Excellent</li>
                        <li>15-25 dB: Good</li>
                        <li>10-15 dB: Fair</li>
                        <li>< 10 dB: Poor</li>
                    </ul>
                </li>
                <li><strong>Channel Utilization:</strong> Should be < 60%</li>
                <li><strong>Retry Rate:</strong> Should be < 10%</li>
            </ul>`
        },
        {
            id: "practice1",
            title: "Network Design Lab",
            type: "practice",
           
            content: `<h3>Practice: Small Office Network Design</h3>
            <p>Design and implement a network for a small office with the following requirements:</p>
            
            <h3>Requirements:</h3>
            <ol>
                <li>50 users across 3 departments</li>
                <li>Separate VLANs for each department</li>
                <li>Guest WiFi network with internet-only access</li>
                <li>VoIP system with QoS</li>
                <li>Centralized file server</li>
                <li>Internet connectivity with firewall</li>
                <li>Network monitoring capability</li>
            </ol>
            
            <h3>Network Diagram:</h3>
            <div class="diagram">
                <pre>
                            [Internet]
                                |
                            [Firewall/Router]
                                |
                        [Core Switch]
                        /     |     \    \
                    [Switch][Switch][Switch][AP]
                      |       |       |      |
                    Sales     HR      IT   Guests
                    (VLAN10) (VLAN20)(VLAN30)(VLAN99)
                    
                    [File Server]
                    [VoIP PBX]
                </pre>
            </div>
            
            <h3>Implementation Tasks:</h3>
            <table class="network-table">
                <tr>
                    <th>Task</th>
                    <th>Configuration</th>
                    <th>Purpose</th>
                </tr>
                <tr>
                    <td>1. VLAN Setup</td>
                    <td>Create VLANs 10,20,30,99</td>
                    <td>Network segmentation</td>
                </tr>
                <tr>
                    <td>2. DHCP</td>
                    <td>Configure scopes per VLAN</td>
                    <td>Automatic IP assignment</td>
                </tr>
                <tr>
                    <td>3. Inter-VLAN Routing</td>
                    <td>Router-on-a-stick or L3 switch</td>
                    <td>Department communication</td>
                </tr>
                <tr>
                    <td>4. WiFi Setup</td>
                    <td>Configure AP with multiple SSIDs</td>
                    <td>Wireless access</td>
                </tr>
                <tr>
                    <td>5. Security</td>
                    <td>Firewall rules, ACLs</td>
                    <td>Network protection</td>
                </tr>
                <tr>
                    <td>6. QoS</td>
                    <td>Prioritize VoIP traffic</td>
                    <td>Voice quality</td>
                </tr>
                <tr>
                    <td>7. Monitoring</td>
                    <td>SNMP, syslog</td>
                    <td>Network visibility</td>
                </tr>
            </table>
            
            <h3>Testing Checklist:</h3>
            <ul>
                <li>✓ All devices get correct IP addresses</li>
                <li>✓ Inter-VLAN routing works</li>
                <li>✓ Internet access from all VLANs</li>
                <li>✓ Guest network isolation</li>
                <li>✓ VoIP call quality good</li>
                <li>✓ File server accessible</li>
                <li>✓ Security policies enforced</li>
            </ul>`
        }
    ]
},
    csharp: {
        title: "C# ",
        icon: "<i class='fab fa-microsoft' style='color: #239120;'></i>",
        topics: [
            { id: "csharp-intro", title: "C# Introduction", type: "basics", code: "// Hello World in C#\nusing System;\nclass Program { static void Main() { Console.WriteLine(\"Hello, World!\"); } }", content: "<h3>What is C#?</h3><p>C# is a modern, object-oriented language developed by Microsoft for the .NET platform.</p>" },
            { id: "csharp-syntax", title: "C# Syntax & Types", type: "basics", code: "int x = 10;\nstring s = \"Hello\";\nvar v = 5;", content: "<p>Basic types, declarations, and var inference.</p>" },
            { id: "csharp-oop", title: "OOP in C#", type: "basics", code: "class Person { public string Name; public int Age; }", content: "<p>Classes, inheritance, interfaces, and properties.</p>" },
            { id: "csharp-collections", title: "Collections & Generics", type: "advanced", code: "var list = new List<int>() {1,2,3}; var dict = new Dictionary<string,int>();", content: "<p>Lists, dictionaries, and generic types.</p>" },
            { id: "csharp-linq", title: "LINQ Basics", type: "advanced", code: "var evens = numbers.Where(n => n % 2 == 0);", content: "<p>Query collections with concise expressions.</p>" },
            { id: "csharp-async", title: "Async/Await", type: "advanced", code: "async Task&lt;int&gt; GetAsync() { await Task.Delay(100); return 1; }", content: "<p>Asynchronous programming with async/await and Task.</p>" },
            { id: "csharp-memory", title: "Memory & GC", type: "advanced", code: "// Use IDisposable and using pattern", content: "<p>Garbage collection, IDisposable, and memory management.</p>" },
            { id: "csharp-netcore", title: ".NET/.NET Core Overview", type: "advanced", code: "// dotnet new console", content: "<p>Cross-platform runtime and tooling (.NET Core / .NET 5+).</p>" },
            { id: "csharp-security", title: "C# Security Basics", type: "advanced", code: "// Use parameterized queries to avoid SQL injection", content: "<p>Best practices: input validation, secure libraries.</p>" },
            { id: "csharp-practice", title: "C# Practice Exercise", type: "practice", code: "// Build a simple CRUD console app using a list as storage", content: "<p>Create a small console app to add/edit/delete items.</p>" }
        ]
    },
    php: {
        title: "PHP ",
        icon: "<i class='fab fa-php' style='color: #8892bf;'></i>",
        topics: [
            { id: "php-intro", title: "PHP Introduction", type: "basics", code: "<?php echo 'Hello World'; ?>", content: "<p>Server-side scripting language widely used for web development.</p>" },
            { id: "php-syntax", title: "PHP Syntax & Variables", type: "basics", code: "$name = 'John'; $age = 30;", content: "<p>Variables, strings, arrays and basic syntax.</p>" },
            { id: "php-arrays", title: "Arrays & Superglobals", type: "basics", code: "$arr = ['a'=>1,'b'=>2]; print_r($_POST);", content: "<p>Indexed/associative arrays and $_GET/$_POST usage.</p>" },
            { id: "php-oop", title: "OOP in PHP", type: "advanced", code: "class User { public $name; function __construct($n){$this->name=$n;} }", content: "<p>Classes, traits, namespaces and autoloading (PSR-4).</p>" },
            { id: "php-mysql", title: "PHP & Databases", type: "advanced", code: "$pdo = new PDO(...); $stmt = $pdo->prepare(...);", content: "<p>Use PDO with prepared statements to access databases.</p>" },
            { id: "php-security", title: "Security Best Practices", type: "advanced", code: "// Use password_hash() and validate inputs", content: "<p>Sanitize input, avoid SQL injection, use CSRF tokens.</p>" },
            { id: "php-frameworks", title: "Frameworks (Laravel)", type: "advanced", code: "// artisan serve", content: "<p>Laravel, Symfony — MVC frameworks for PHP.</p>" },
            { id: "php-rest", title: "Build REST APIs", type: "advanced", code: "// Return JSON with header('Content-Type: application/json'); echo json_encode($data);", content: "<p>Create APIs, routing, authentication and versioning.</p>" },
            { id: "php-testing", title: "Testing in PHP", type: "advanced", code: "// PHPUnit example", content: "<p>Unit testing with PHPUnit and integration tests.</p>" },
            { id: "php-practice", title: "PHP Practice Project", type: "practice", code: "// Build a simple CRUD using PDO and templates", content: "<p>Create a small CRUD blog with create/read/update/delete.</p>" }
        ]
    },
    go: {
        title: "Go ",
        icon: "<i class='fas fa-code' style='color: #00add8;'></i>",
        topics: [
            { id: "go-intro", title: "Go Introduction", type: "basics", code: "package main\nimport \"fmt\"\nfunc main(){fmt.Println(\"Hello Go\")} ", content: "<p>Go (Golang) is a statically typed, compiled language by Google.</p>" },
            { id: "go-syntax", title: "Syntax & Types", type: "basics", code: "var x int = 5; y := 10", content: "<p>Short declarations, slices, maps and structs.</p>" },
            { id: "go-concurrency", title: "Concurrency (goroutines)", type: "advanced", code: "go func(){ fmt.Println(\"goroutine\") }()", content: "<p>Lightweight concurrency primitives: goroutines and channels.</p>" },
            { id: "go-channels", title: "Channels & Select", type: "advanced", code: "ch := make(chan int); ch <- 1; v := <-ch", content: "<p>Channel communication and select for multiplexing.</p>" },
            { id: "go-packages", title: "Packages & Modules", type: "advanced", code: "module myapp\nrequire golang.org/x/...", content: "<p>Module system and package organization.</p>" },
            { id: "go-testing", title: "Testing & Tooling", type: "advanced", code: "// go test", content: "<p>Built-in testing and tooling (go fmt, vet, build).</p>" },
            { id: "go-nethttp", title: "net/http Basics", type: "advanced", code: "http.HandleFunc('/', handler); http.ListenAndServe(':8080', nil)", content: "<p>Simple web servers using Go's stdlib.</p>" },
            { id: "go-performance", title: "Performance & Profiling", type: "advanced", code: "// go tool pprof", content: "<p>Profiling CPU, memory; efficient concurrency patterns.</p>" },
            { id: "go-error", title: "Error Handling", type: "advanced", code: "if err != nil { return err }", content: "<p>Idiomatic errors, wrapping and sentinel errors.</p>" },
            { id: "go-practice", title: "Go Practice", type: "practice", code: "// Build a REST service with net/http and JSON", content: "<p>Create a small API service returning JSON data.</p>" }
        ]
    },
    rust: {
        title: "Rust ",
        icon: "<i class='fas fa-cube' style='color: #dea584;'></i>",
        topics: [
            { id: "rust-intro", title: "Rust Introduction", type: "basics", code: "fn main() { println!(\"Hello, Rust!\"); }", content: "<p>Rust is a systems programming language focused on safety and speed.</p>" },
            { id: "rust-ownership", title: "Ownership & Borrowing", type: "advanced", code: "let s = String::from(\"hi\"); let r = &s;", content: "<p>Ownership, borrowing and lifetimes are core Rust concepts.</p>" },
            { id: "rust-variables", title: "Variables & Mutability", type: "basics", code: "let x = 5; let mut y = 6;", content: "<p>Immutable by default; use mut for mutability.</p>" },
            { id: "rust-patterns", title: "Pattern Matching", type: "advanced", code: "match x { 0 => println!(\"zero\"), _ => () }", content: "<p>Powerful match statement and pattern matching.</p>" },
            { id: "rust-collections", title: "Collections & Vec", type: "basics", code: "let mut v = Vec::new(); v.push(1);", content: "<p>Vectors, HashMap, String handling.</p>" },
            { id: "rust-error", title: "Error Handling", type: "advanced", code: "fn foo() -> Result&lt;T, E&gt; { Ok(val) }", content: "<p>Use Result and Option enums for error handling.</p>" },
            { id: "rust-ownership2", title: "Lifetimes Deep Dive", type: "advanced", code: "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str { ... }", content: "<p>Explicit lifetimes and borrowing rules.</p>" },
            { id: "rust-cargo", title: "Cargo & Crates", type: "advanced", code: "cargo build\ncargo test", content: "<p>Package manager and build tool; crates.io ecosystem.</p>" },
            { id: "rust-concurrency", title: "Concurrency & Safety", type: "advanced", code: "std::thread::spawn(|| { /* ... */ });", content: "<p>Fearless concurrency via ownership model.</p>" },
            { id: "rust-practice", title: "Rust Practice", type: "practice", code: "// Build a CLI tool using clap and error handling", content: "<p>Create a small command-line utility with robust error handling.</p>" }
        ]
    },
    kotlin: {
        title: "Kotlin ",
        icon: "<i class='fas fa-mobile' style='color: #7f52ff;'></i>",
        topics: [
            { id: "kotlin-intro", title: "Kotlin Introduction", type: "basics", code: "fun main() { println(\"Hello Kotlin\") }", content: "<p>Modern JVM language interoperable with Java; concise syntax.</p>" },
            { id: "kotlin-syntax", title: "Basic Syntax", type: "basics", code: "val x: Int = 5\nvar y = 6", content: "<p>Immutable val and mutable var; type inference.</p>" },
            { id: "kotlin-oop", title: "OOP & Data Classes", type: "basics", code: "data class User(val name: String, val age: Int)", content: "<p>Data classes, sealed classes, and null-safety.</p>" },
            { id: "kotlin-coroutines", title: "Coroutines", type: "advanced", code: "launch { delay(1000); println(\"Done\") }", content: "<p>Lightweight concurrency via coroutines.</p>" },
            { id: "kotlin-android", title: "Kotlin for Android", type: "advanced", code: "class MainActivity : AppCompatActivity() { }", content: "<p>Primary language for modern Android development.</p>" },
            { id: "kotlin-collections", title: "Collections & Extensions", type: "advanced", code: "val list = listOf(1,2,3).map { it*2 }", content: "<p>Standard library helpers and extension functions.</p>" },
            { id: "kotlin-null", title: "Null Safety", type: "advanced", code: "val name: String? = null\nname?.length ?: 0", content: "<p>Nullable types with safe call and Elvis operator.</p>" },
            { id: "kotlin-testing", title: "Testing & Tooling", type: "advanced", code: "// kotlin test with JUnit", content: "<p>Unit testing, Gradle, and multiplatform targets.</p>" },
            { id: "kotlin-functional", title: "Functional Style", type: "advanced", code: "val sum = list.sum()", content: "<p>Higher-order functions, lambdas and functional constructs.</p>" },
            { id: "kotlin-practice", title: "Kotlin Practice", type: "practice", code: "// Build a small Android or CLI app using Kotlin", content: "<p>Create a tiny app to exercise language features.</p>" }
        ]
    },
    swift: {
        title: "Swift ",
        icon: "<i class='fab fa-apple' style='color: #0db7ed;'></i>",
        topics: [
            { id: "swift-intro", title: "Swift Introduction", type: "basics", code: "import Foundation\nprint(\"Hello, Swift!\")", content: "<p>Swift is Apple's modern language for iOS/macOS development.</p>" },
            { id: "swift-syntax", title: "Syntax & Types", type: "basics", code: "let name: String = \"Alice\"\nvar score = 10", content: "<p>Type inference, optionals, and value types.</p>" },
            { id: "swift-closures", title: "Closures & Functions", type: "advanced", code: "let add = { (a:Int, b:Int) in a+b }", content: "<p>Closures, trailing closures, and functional APIs.</p>" },
            { id: "swift-classes", title: "Classes & Structs", type: "basics", code: "struct Point { var x:Int; var y:Int }", content: "<p>Value vs reference semantics; protocols and extensions.</p>" },
            { id: "swift-async", title: "Concurrency (async/await)", type: "advanced", code: "Task { await someAsyncFunc() }", content: "<p>Modern concurrency with async/await, actors and tasks.</p>" },
            { id: "swift-uikit", title: "UIKit & SwiftUI", type: "advanced", code: "struct ContentView: View { var body: some View { Text(\"Hello\") } }", content: "<p>Build UIs with UIKit or SwiftUI declarative framework.</p>" },
            { id: "swift-error", title: "Error Handling", type: "advanced", code: "do { try f() } catch { print(error) }", content: "<p>Throws, do/catch and Result types.</p>" },
            { id: "swift-pkg", title: "Swift Package Manager", type: "advanced", code: "// swift package init", content: "<p>SPM for dependency management and builds.</p>" },
            { id: "swift-testing", title: "Testing", type: "advanced", code: "// XCTest example", content: "<p>Unit/UI testing with XCTest framework.</p>" },
            { id: "swift-practice", title: "Swift Practice", type: "practice", code: "// Build a simple SwiftUI view and state management", content: "<p>Create a small app or widget using SwiftUI.</p>" }
        ]
    },
    r: {
        title: "R ",
        icon: "<i class='fas fa-chart-line' style='color: #198CE7;'></i>",
        topics: [
            { id: "r-intro", title: "R Introduction", type: "basics", code: "# R Hello\nprint('Hello R')", content: "<p>R is a language/environment for statistical computing and graphics.</p>" },
            { id: "r-data", title: "Data Frames & Vectors", type: "basics", code: "v <- c(1,2,3)\ndf <- data.frame(x=1:3, y=c('a','b','c'))", content: "<p>Vectors, lists, matrices and data frames are core structures.</p>" },
            { id: "r-ggplot", title: "Data Visualization (ggplot2)", type: "advanced", code: "library(ggplot2)\nggplot(df, aes(x,y)) + geom_point()", content: "<p>Create professional plots with ggplot2 grammar of graphics.</p>" },
            { id: "r-dplyr", title: "Data Manipulation (dplyr)", type: "advanced", code: "library(dplyr)\ndf %>% filter(x>1) %>% select(y)", content: "<p>Use dplyr for readable data transformation pipelines.</p>" },
            { id: "r-stats", title: "Statistical Modeling", type: "advanced", code: "model <- lm(y ~ x, data=df)\nsummary(model)", content: "<p>Linear models, hypothesis testing and summary statistics.</p>" },
            { id: "r-tidyr", title: "Tidying Data (tidyr)", type: "advanced", code: "library(tidyr)\ndf %>% pivot_longer(cols=...)", content: "<p>Reshape data for analysis using tidyr.</p>" },
            { id: "r-packages", title: "R Packages & CRAN", type: "advanced", code: "install.packages('dplyr')\nlibrary(dplyr)", content: "<p>Install and manage packages via CRAN and devtools.</p>" },
            { id: "r-ml", title: "Machine Learning in R", type: "advanced", code: "library(caret)\ntrain(...)", content: "<p>Use caret, randomForest and other packages for ML workflows.</p>" },
            { id: "r-repro", title: "Reproducible Research", type: "advanced", code: "# RMarkdown\n---\noutput: html_document\n---", content: "<p>Use RMarkdown and notebooks for reproducible reports.</p>" },
            { id: "r-practice", title: "R Practice", type: "practice", code: "# Load dataset and perform EDA (exploratory data analysis)\nlibrary(ggplot2)\n# ...", content: "<p>Perform EDA, clean data, visualize and build a simple model.</p>" }
        ]
    },
    algorithms: {
        title: "Algorithms ",
        icon: "<i class='fas fa-cogs'></i>",
        topics: [
            { id: "alg-intro", title: "Algorithms Overview", type: "basics", code: "", content: "<h3>What is an Algorithm?</h3><p>An algorithm is a finite set of well-defined instructions to solve a class of problems. Algorithms are evaluated on correctness, time complexity, and space complexity. Understanding algorithmic paradigms helps you choose the right approach for problems: brute force, divide-and-conquer, greedy, dynamic programming, and backtracking.</p>" },
            { id: "alg-complexity", title: "Complexity Analysis", type: "basics", code: "", content: "<h3>Time & Space Complexity</h3><p>Use Big-O to describe worst-case growth. Count dominant operations, drop constants and lower-order terms. Amortized analysis and average-case analysis are important for practical performance.</p>" },
            { id: "divide-conquer", title: "Divide and Conquer", type: "advanced", code: "", content: "<h3>Divide and Conquer</h3><p>Divide the problem into subproblems, solve recursively, and combine results. Classic examples: merge sort, quick sort, binary search, Karatsuba multiplication. Recurrence relations and Master Theorem are used for analysis.</p>" },
            { id: "greedy", title: "Greedy Algorithms", type: "advanced", code: "", content: "<h3>Greedy</h3><p>Make locally optimal choices hoping to reach a global optimum. Works for interval scheduling, Huffman coding, fractional knapsack. Proofs often use exchange arguments.</p>" },
            { id: "dp", title: "Dynamic Programming", type: "advanced", code: "", content: "<h3>Dynamic Programming</h3><p>Break problems into overlapping subproblems and reuse solutions. Key steps: define state, recurrence, base cases. Examples: Fibonacci, knapsack, LIS, LCS.</p>" },
            { id: "graphs-algo", title: "Graph Algorithms", type: "advanced", code: "", content: "<h3>Graph Algorithms</h3><p>Graphs model pairwise relations. Traversals (BFS/DFS), shortest paths (Dijkstra, Bellman-Ford), minimum spanning trees (Kruskal, Prim), and flow algorithms (Ford-Fulkerson) are fundamental.</p>" },
            { id: "sorting-techniques", title: "Sorting Techniques", type: "basics", code: "", content: "<h3>Sorting</h3><p>Understand time/space tradeoffs: O(n log n) comparison sorts and linear-time non-comparison sorts like counting and radix when applicable.</p>" },
            { id: "searching-techniques", title: "Searching", type: "basics", code: "", content: "<h3>Searching</h3><p>Linear search vs binary search. Binary search is O(log n) on sorted arrays; careful handling of boundaries and invariants is required.</p>" },
            { id: "backtracking", title: "Backtracking & Recursion", type: "advanced", code: "", content: "<h3>Backtracking</h3><p>Backtracking systematically searches solution spaces for problems like N-Queens, Sudoku, and combinatorial generation. Pruning and heuristics reduce search time.</p>" },
            { id: "alg-practice", title: "Algorithms Practice", type: "practice", code: "", content: "<h3>Practice</h3><p>Implement classic algorithms, analyze edge cases, and optimize for time/space. Solve problems on arrays, trees, graphs, and DP to build intuition.</p>" }
        ]
    },
    os: {
        title: "Operating Systems ",
        icon: "<i class='fas fa-desktop' style='color: #4caf50;'></i>",
        topics: [
            { id: "os-intro", title: "OS Overview", type: "basics", code: "", content: "<h3>Operating Systems</h3><p>An OS manages hardware, processes, memory, file systems, and I/O. It provides abstractions like processes/threads and services like scheduling, IPC, and device management.</p>" },
            { id: "processes-threads", title: "Processes & Threads", type: "basics", code: "", content: "<h3>Processes & Threads</h3><p>Processes have separate address spaces; threads share memory. Context switching, PCB, and lightweight threads vs heavyweight processes are key concepts.</p>" },
            { id: "scheduling", title: "CPU Scheduling", type: "advanced", code: "", content: "<h3>Scheduling</h3><p>Scheduling algorithms balance throughput, turnaround time, and fairness. Study preemptive vs non-preemptive policies and evaluate with metrics like waiting time and response time.</p>" },
            { id: "synchronization", title: "Concurrency & Synchronization", type: "advanced", code: "", content: "<h3>Concurrency</h3><p>Synchronization primitives prevent race conditions. Understand critical sections, mutual exclusion, deadlock conditions (Coffman), and strategies: prevention, avoidance, detection, and recovery.</p>" },
            { id: "memory-management", title: "Memory Management", type: "advanced", code: "", content: "<h3>Memory Management</h3><p>Allocating and protecting memory using paging and segmentation. Study fragmentation, allocation strategies (first-fit, best-fit), and swapping.</p>" },
            { id: "virtual-memory", title: "Virtual Memory", type: "advanced", code: "", content: "<h3>Virtual Memory</h3><p>Virtual memory gives processes the illusion of contiguous large memory. Learn page tables, multi-level paging, TLBs, and page replacement algorithms.</p>" },
            { id: "file-systems", title: "File Systems", type: "advanced", code: "", content: "<h3>File Systems</h3><p>File organization, metadata, inodes, allocation strategies, and consistency mechanisms like journaling. Understand mounting, permissions, and caching.</p>" },
            { id: "io-devices", title: "I/O & Device Management", type: "advanced", code: "", content: "<h3>I/O</h3><p>Device drivers, interrupt handling, polling vs interrupts, DMA, and driver models for modular OS design.</p>" },
            { id: "security-os", title: "OS Security", type: "advanced", code: "", content: "<h3>Security</h3><p>Authentication, access control models (DAC, MAC), and secure design to protect kernels and user processes.</p>" },
            { id: "os-practice", title: "OS Practice", type: "practice", code: "", content: "<h3>Practice</h3><p>Build simulators for scheduling and page replacement to see algorithms in action and compare metrics.</p>" }
        ]
    },
    compiler: {
        title: "Compiler Design ",
        icon: "<i class='fas fa-code' style='color: #9c27b0;'></i>",
        topics: [
                        { id: "comp-intro", title: "Compiler Overview", type: "basics",   content: `
<h2>Compiler Design — Overview</h2>
<p>Compilers translate programs written in high-level languages to executable code. They perform multiple well-defined phases to transform source text into optimized machine code while checking for errors and preserving semantics.</p>

<div class="diagram">
    <div class="diagram-title">Compiler Phases</div>
    <div class="diagram-box">Source Code</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Lexical Analysis</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Parsing</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Semantic Analysis</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Intermediate Representation</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Optimization</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Code Generation</div>
</div>

<h3>Key Goals</h3>
<ul>
    <li><strong>Correctness:</strong> Preserve original program semantics.</li>
    <li><strong>Performance:</strong> Produce efficient code in time and space.</li>
    <li><strong>Diagnostics:</strong> Provide helpful error messages for developers.</li>
</ul>

<p>This chapter introduces the overall structure and responsibilities of each phase. Later topics dive into the algorithms and data structures used.</p>
` },
                        { id: "lexical", title: "Lexical Analysis", type: "basics",   content: `
<h2>Lexical Analysis (Scanning)</h2>
<p>The lexical analyzer (scanner) reads raw characters and groups them into tokens: identifiers, keywords, literals, and operators. It removes whitespace and comments while tracking line/column information for error reporting.</p>

<div class="diagram">
    <div class="diagram-title">Scanner Flow</div>
    <div class="diagram-box">Input Char Stream</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">DFA-based Recognizer</div>
    <div class="diagram-arrow">→</div>
    <div class="diagram-box">Token Stream</div>
</div>

<h3>Implementation Notes</h3>
<ul>
    <li>Define regular expressions for token classes.</li>
    <li>Compile regex to a DFA (via NFA) for linear-time scanning.</li>
    <li>Handle longest-match and reserved-word checks.</li>
    <li>Emit tokens with type, lexeme, and source position.</li>
</ul>

<p>Tools: <code>lex/flex</code> or hand-written scanners are common. Robust scanners report meaningful lexical errors and support Unicode where necessary.</p>
` },
                        { id: "parsing", title: "Parsing & Syntax Analysis", type: "advanced",   content: `
<h2>Parsing & Syntax Analysis</h2>
<p>Parsing converts a token sequence into a parse tree (concrete syntax tree) or an abstract syntax tree (AST) according to a context-free grammar. Parsers must detect and recover from syntax errors gracefully.</p>

<div class="diagram">
    <div class="diagram-title">Parser Types</div>
    <div class="diagram-box">Top-Down (LL)</div>
    <div class="diagram-box">Bottom-Up (LR)</div>
</div>

<h3>Top-Down Parsing (LL)</h3>
<p>Recursive-descent parsers implement grammar productions with mutually recursive functions. LL(1) requires eliminating left recursion and computing FIRST/FOLLOW sets for predictive parsing tables.</p>

<h3>Bottom-Up Parsing (LR)</h3>
<p>LR parsers (SLR, LALR, CLR) construct parse trees by shifting tokens and reducing when a right-hand side of a production matches. Tools like <code>yacc</code>/<code>bison</code> generate LR parsers from grammar specifications.</p>

<h3>Error Recovery</h3>
<p>Strategies include panic-mode recovery, phrase-level recovery, and error productions to continue parsing and produce multiple diagnostics.</p>
` },
                        { id: "semantic", title: "Semantic Analysis", type: "advanced",   content: `
<h2>Semantic Analysis</h2>
<p>Semantic analysis enforces language rules that go beyond grammar, such as type correctness, scope resolution, and identification of declarations vs. uses.</p>

<div class="diagram">
    <div class="diagram-title">Semantic Workflows</div>
    <div class="diagram-box">Symbol Table Construction</div>
    <div class="diagram-box">Type Checking</div>
    <div class="diagram-box">Flow/Usage Analysis</div>
</div>

<h3>Symbol Tables</h3>
<p>Implement symbol tables with scoped stacks or hash tables with scope links. Store information: identifier name, type, storage class, and declaration location.</p>

<h3>Type Checking</h3>
<p>Perform static type inference or checking. Support for polymorphism, generics, and overloading increases complexity; many compilers use constraint solving to resolve types.</p>
` },
                        { id: "ir", title: "Intermediate Representation", type: "advanced",   content: `
<h2>Intermediate Representation (IR)</h2>
<p>IR is a machine-independent representation that bridges front-end analysis and back-end code generation. Common IRs: AST, three-address code (TAC), control-flow graphs (CFG), and SSA form.</p>

<div class="diagram">
    <div class="diagram-title">IR Examples</div>
    <div class="diagram-box">AST</div>
    <div class="diagram-box">TAC</div>
    <div class="diagram-box">CFG / SSA</div>
</div>

<h3>Choosing an IR</h3>
<p>IR choice affects ease of optimization and code generation. SSA simplifies many data-flow analyses at the cost of conversion and destruction complexity.</p>
` },
                        { id: "optimization", title: "Code Optimization", type: "advanced",   content: `
<h2>Code Optimization</h2>
<p>Optimizations transform IR to improve runtime or reduce size without changing semantics. Categories: local, global, interprocedural, machine-specific, and peephole optimizations.</p>

<div class="diagram">
    <div class="diagram-title">Optimization Examples</div>
    <div class="diagram-box">Constant Folding</div>
    <div class="diagram-box">Dead Code Elimination</div>
    <div class="diagram-box">Loop-Invariant Code Motion</div>
</div>

<h3>Data-flow Analysis</h3>
<p>Use reaching definitions, liveness, and available expressions to guide optimizations. Solve data-flow equations on the CFG to compute properties used by transformations.</p>
` },
                        { id: "codegen", title: "Code Generation", type: "advanced",  content: `
<h2>Code Generation</h2>
<p>Code generation maps IR to target machine instructions. Key tasks: instruction selection, register allocation, instruction scheduling, and adherence to calling conventions.</p>

<div class="diagram">
    <div class="diagram-title">Backend Steps</div>
    <div class="diagram-box">Instruction Selection</div>
    <div class="diagram-box">Register Allocation</div>
    <div class="diagram-box">Instruction Scheduling</div>
</div>

<h3>Register Allocation</h3>
<p>Graph-coloring algorithms and linear-scan allocation are common approaches. Spilling moves values to memory when registers are scarce.</p>
` },
                        { id: "linking", title: "Linking & Loading", type: "advanced",  content: `
<h2>Linking & Loading</h2>
<p>Linking resolves symbol references across object files and libraries. Static linking produces a single executable; dynamic linking defers binding to load or runtime, enabling shared libraries and smaller binaries.</p>

<div class="diagram">
    <div class="diagram-title">Linking Workflow</div>
    <div class="diagram-box">Object Files (.o)</div>
    <div class="diagram-box">Linker</div>
    <div class="diagram-box">Executable / Shared Library</div>
</div>

<h3>Relocation</h3>
<p>Relocation adjusts addresses when modules are combined. Dynamic loaders support position-independent code (PIC) and lazy symbol binding for performance.</p>
` },
            { id: "runtime", title: "Runtime Systems", type: "advanced",  content: `
<h2>Runtime Systems</h2>
<p>Runtimes provide services required by programs: memory allocation, garbage collection, threading support, exception handling, and platform interop.</p>

<h3>Garbage Collection</h3>
<p>Common algorithms: reference counting, mark-sweep, copying collectors, and generational collectors. Each has trade-offs in pause times and throughput.</p>

<h3>Runtime Data Structures</h3>
<p>Runtime uses stacks, heaps, and metadata tables (type info, vtables) to support dynamic features and introspection.</p>
` },
            { id: "compiler-practice", title: "Compiler Practice", type: "practice",   content: "<h3>Practice</h3><p>Implement a small interpreter or compiler frontend to perform lexical analysis, parsing, and evaluation to solidify concepts.</p>" }
        ]
    },
    toc: {
        title: "Theory of Computation ",
        icon: "<i class='fas fa-brain' style='color: #3f51b5;'></i>",
        topics: [
                        { id: "toc-intro", title: "TOC Overview", type: "basics",    content: `
<h2>Theory of Computation — Overview</h2>
<p>Theory of Computation (ToC) studies formal models of computation and the limits of what can be computed. It establishes rigorous foundations for language recognition, decidability, and complexity.</p>

<div class="diagram">
    <div class="diagram-title">High-level Map</div>
    <div class="diagram-box">Regular Languages</div>
    <div class="diagram-box">Context-Free Languages</div>
    <div class="diagram-box">Turing Machines</div>
</div>

<p>Core questions: Which problems are decidable? Which are tractable? How do resources (time/space) affect solvability?</p>
` },
                        { id: "regular-languages", title: "Regular Languages & Regex", type: "basics",   content: `
<h2>Regular Languages & Finite Automata</h2>
<p>Regular languages are the simplest class of formal languages and can be described by regular expressions, DFAs, or NFAs. They are closed under union, concatenation, and Kleene star.</p>

<div class="diagram">
    <div class="diagram-title">DFA vs NFA</div>
    <div class="diagram-box">NFA (multiple transitions)</div>
    <div class="diagram-box">DFA (deterministic)</div>
</div>

<h3>Pumping Lemma</h3>
<p>Use the pumping lemma to prove that certain languages are not regular by deriving contradictions on repeated substrings.</p>
` },
                        { id: "context-free", title: "Context-Free Grammars", type: "advanced",  content: `
<h2>Context-Free Grammars (CFGs)</h2>
<p>CFGs generate context-free languages (CFLs) which model nested structures like balanced parentheses and programming language syntax. Pushdown automata (PDA) recognize CFLs using a stack.</p>

<div class="diagram">
    <div class="diagram-title">CFG → PDA</div>
    <div class="diagram-box">Productions</div>
    <div class="diagram-box">Stack-based recognition</div>
</div>

<h3>Parsing Algorithms</h3>
<p>CYK algorithm (O(n^3)) works for grammars in CNF. Deterministic parsing uses LR/LL families with linear-time complexity for suitable grammars.</p>
` },
                        { id: "turing-machines", title: "Turing Machines", type: "advanced", content: `
<h2>Turing Machines</h2>
<p>A Turing machine is an abstract computational model with an infinite tape and a finite state control. It formalizes the notion of algorithm and computability.</p>

<div class="diagram">
    <div class="diagram-title">Turing Machine Model</div>
    <div class="diagram-box">Finite-State Control</div>
    <div class="diagram-box">Infinite Tape</div>
    <div class="diagram-box">Read/Write Head</div>
</div>

<p>Many undecidability results (e.g., Halting Problem) are proven by reductions involving Turing machines.</p>
` },
            { id: "decidability", title: "Decidability & Undecidability", type: "advanced",   content: `
<h2>Decidability</h2>
<p>A decision problem is decidable if a Turing machine exists that halts with yes/no for every input. Undecidable problems, like the Halting Problem, have no such algorithm.</p>

<h3>Proof Sketch — Halting Problem</h3>
<p>Assume a decider for halting exists, construct a machine that contradicts itself when given its own description, producing a paradox that proves undecidability.</p>
` },
                        { id: "complexity-classes", title: "Complexity Classes (P, NP)", type: "advanced",  content: `
<h2>Complexity Classes</h2>
<p>Complexity theory categorizes problems by time/space resources. P is the class solvable in polynomial time. NP contains problems verifiable in polynomial time given certificates. NP-Complete problems are the hardest in NP under polynomial reductions.</p>

<div class="diagram">
    <div class="diagram-title">Class Relationships</div>
    <div class="diagram-box">P ⊆ NP</div>
    <div class="diagram-box">NP-Complete (hardest in NP)</div>
</div>
` },
            { id: "reductions", title: "Reductions & Completeness", type: "advanced",   content: `
<h2>Reductions & Completeness</h2>
<p>Use polynomial-time reductions to relate problems. To show a problem is NP-Complete, reduce a known NP-Complete problem to it in polynomial time.</p>

<h3>Cook–Levin Theorem</h3>
<p>Establishes SAT as NP-Complete by encoding nondeterministic polynomial-time computations as Boolean formulas.</p>
` },
            { id: "pumping-lemmas", title: "Pumping Lemmas", type: "advanced",   content: `
<h2>Pumping Lemmas</h2>
<p>Pumping lemmas are proof techniques: for regular languages, any sufficiently long string can be decomposed and pumped; for CFLs a similar but more complex lemma exists. Use contradictions to show non-membership.</p>

<h3>Example</h3>
<p>Prove L = {a^n b^n | n ≥ 0} is not regular by showing pumping fails for splits that preserve equal counts.</p>
` },
            { id: "closure-properties", title: "Closure Properties", type: "advanced",  content: `
<h2>Closure Properties</h2>
<p>Regular and context-free languages have closure properties: regular languages are closed under union, concat, star, complement, and intersection; CFLs are closed under union, concat, and star but not complement or intersection in general.</p>

<h3>Use in Proofs</h3>
<p>Closure properties help construct languages and derive contradictions when proving non-membership.</p>
` },
            { id: "toc-practice", title: "TOC Practice", type: "practice",  content: `
<h3>Practice</h3>
<p>Construct DFAs/NFAs for sample regular expressions, convert CFGs to PDAs, and practice using pumping lemmas and reductions. Write proofs and implement small simulators to validate automata behavior.</p>
` }
        ]
    },

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>digital logic>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/ 
    dld: {
        title: "Digital Logic ",
        icon: "<i class='fas fa-microchip' style='color: #607d8b;'></i>",
        topics: [
                        { id: "logic-gates", title: "Logic Gates", type: "basics",   content: `
<h2>Logic Gates</h2>
<p>Fundamental primitives: AND, OR, NOT, NAND, NOR, XOR, XNOR. Each gate implements a boolean function with a truth table.</p>

<div class="diagram">
    <div class="diagram-title">Basic Gate Symbols</div>
    <div class="diagram-box">AND</div>
    <div class="diagram-box">OR</div>
    <div class="diagram-box">NOT</div>
</div>

<p>Understanding how complex functions are constructed from gates is the foundation of digital design.</p>
` },
                        { id: "boolean-algebra", title: "Boolean Algebra", type: "basics",   content: `
<h2>Boolean Algebra</h2>
<p>Boolean algebra provides rules (identity, null, idempotent, complement, De Morgan's laws) to manipulate logical expressions. Simplification reduces circuit cost.</p>

<div class="diagram">
    <div class="diagram-title">De Morgan</div>
    <div class="diagram-box">!(A & B) = !A | !B</div>
    <div class="diagram-box">!(A | B) = !A & !B</div>
</div>

<p>Techniques: algebraic simplification, Karnaugh maps (K-maps) for up to 6 variables, and Quine–McCluskey for systematic minimization.</p>
` },
                        { id: "combinational", title: "Combinational Circuits", type: "advanced",   content: `
<h2>Combinational Circuits</h2>
<p>Combinational circuits compute outputs purely from current inputs (no memory). Examples: adders, multiplexers, encoders, decoders, comparators.</p>

<div class="diagram">
    <div class="diagram-title">Carry Ripple Adder</div>
    <div class="diagram-box">Full Adder Chain</div>
</div>

<p>Design principles: construct truth table → derive minimal boolean expressions → implement with gates. Optimize for delay, area, and power.</p>
` },
                        { id: "sequential", title: "Sequential Circuits", type: "advanced",   content: `
<h2>Sequential Circuits</h2>
<p>Sequential circuits include memory elements (flip-flops, latches). Output depends on input and current state. Design uses finite state machines (FSMs): Mealy and Moore models.</p>

<div class="diagram">
    <div class="diagram-title">FSM Design Flow</div>
    <div class="diagram-box">State Diagram</div>
    <div class="diagram-box">State Table</div>
    <div class="diagram-box">Logic + Flip-Flops</div>
</div>

<p>Follow steps: specify behavior → draw state diagram → assign binary encodings → derive next-state and output logic → implement and analyze timing.</p>
` },
                        { id: "flipflops", title: "Flip-Flops & Registers", type: "advanced",   content: `
<h2>Flip-Flops & Registers</h2>
<p>Flip-flops are edge-triggered storage elements (D, JK, T, SR). Registers are groups of flip-flops used to store multi-bit values. Timing constraints (setup/hold) are crucial.</p>

<div class="diagram">
    <div class="diagram-title">Timing Diagram</div>
    <div class="diagram-box">Clock Edge</div>
    <div class="diagram-box">Data Stable before Setup</div>
    <div class="diagram-box">Hold Time after Edge</div>
</div>

<p>Violating setup/hold leads to metastability; design for reliable margins and use synchronizers for cross-clock domain signals.</p>
` },
                        { id: "arithmetic-circuits", title: "Arithmetic Circuits", type: "advanced", content: `
<h2>Arithmetic Circuits</h2>
<p>Design adders (ripple-carry, carry-lookahead), multipliers (array, Wallace tree), and ALUs. Trade-offs include latency (carry propagation) and hardware complexity.</p>

<div class="diagram">
    <div class="diagram-title">Carry-Lookahead Concept</div>
    <div class="diagram-box">Generate/Propagate Signals</div>
    <div class="diagram-box">Lookahead Carry Logic</div>
</div>

<p>Optimizations reduce critical path; pipeline arithmetic units for high-frequency designs.</p>
` },
                        { id: "memory-architecture", title: "Memory & Storage", type: "advanced",  content: `
<h2>Memory & Storage</h2>
<p>Overview of memory hierarchy: registers → caches → main memory → secondary storage. Understand SRAM vs DRAM, latency vs capacity trade-offs, and cache organization (direct-mapped, set-associative).</p>

<div class="diagram">
    <div class="diagram-title">Memory Hierarchy</div>
    <div class="diagram-box">Registers</div>
    <div class="diagram-box">Cache (L1/L2/L3)</div>
    <div class="diagram-box">DRAM</div>
</div>

<p>Questions: caching policies (LRU), write-back vs write-through, and impact on system performance.</p>
` },
                        { id: "logic-design-tools", title: "HDL & Design Tools", type: "advanced",  content: `
<h2>HDL & Design Tools</h2>
<p>Hardware description languages (Verilog, VHDL) model and simulate hardware. Flow: write HDL → simulate → synthesize → place & route → program device.</p>

<div class="diagram">
    <div class="diagram-title">Design Flow</div>
    <div class="diagram-box">HDL Code</div>
    <div class="diagram-box">Simulation</div>
    <div class="diagram-box">Synthesis / FPGA</div>
</div>

<p>Use toolchains (ModelSim, Vivado) and follow good verification practices: unit tests, constrained random tests, and formal checks where necessary.</p>
` },
                        { id: "timing-analysis", title: "Timing & Propagation", type: "advanced", content: `
<h2>Timing & Propagation</h2>
<p>Analyze critical paths to ensure timing closure. Calculate propagation delays, clock skew, setup and hold margins. Use static timing analysis tools to find violations early.</p>

<div class="diagram">
    <div class="diagram-title">Timing Elements</div>
    <div class="diagram-box">Combinational Delay</div>
    <div class="diagram-box">Register Setup/Hold</div>
</div>

<p>Balance logic depth and pipeline stages to meet clock targets while minimizing area and power.</p>
` },
                        { id: "dl-practice", title: "Digital Logic Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Design a 4-bit synchronous up/down counter: draw state table, derive logic, implement with flip-flops, and create timing diagrams. Simulate with an HDL to validate behavior.</p>
` }
        ]
    },
    software: {
        title: "Software Engineering ",
        icon: "<i class='fas fa-tools' style='color: #795548;'></i>",
        topics: [
                        { id: "se-intro", title: "SE Overview", type: "basics",   content: `
<h2>Software Engineering — Overview</h2>
<p>Software engineering applies engineering principles to software development to build reliable, maintainable, and scalable systems. It covers lifecycle processes, quality attributes, and project practices.</p>

<div class="diagram">
    <div class="diagram-title">SDLC Phases</div>
    <div class="diagram-box">Requirements</div>
    <div class="diagram-box">Design</div>
    <div class="diagram-box">Implementation</div>
    <div class="diagram-box">Testing</div>
    <div class="diagram-box">Deployment</div>
    <div class="diagram-box">Maintenance</div>
</div>

<p>This topic introduces processes and trade-offs that shape team and architectural choices.</p>
` },
                        { id: "requirements", title: "Requirements Engineering", type: "basics",   content: `
<h2>Requirements Engineering</h2>
<p>Requirements capture stakeholder needs and define what the system should do (functional) and how well (non-functional). Good requirements are clear, testable, and traceable.</p>

<h3>Artifacts</h3>
<ul>
    <li>Use cases / user stories</li>
    <li>Acceptance criteria</li>
    <li>Non-functional requirements (performance, security, availability)</li>
</ul>

<p>Traceability matrices link requirements to design, code, and tests to manage change and validation.</p>
` },
                        { id: "design-arch", title: "Design & Architecture", type: "advanced",   content: `
<h2>Design & Architecture</h2>
<p>Architecture describes a system's high-level structure. Common styles: layered, microservices, event-driven, client-server. Focus on separation of concerns, modularity, and scalability.</p>

<div class="diagram">
    <div class="diagram-title">Layered Architecture</div>
    <div class="diagram-box">Presentation</div>
    <div class="diagram-box">Business Logic</div>
    <div class="diagram-box">Data Layer</div>
</div>

<p>Architectural decisions trade off consistency, latency, complexity, and operational cost.</p>
` },
                        { id: "design-patterns", title: "Design Patterns", type: "advanced",   content: `
<h2>Design Patterns</h2>
<p>Design patterns are proven solutions to recurring design problems. Categories: creational, structural, behavioral. Understanding intent and consequences is more important than rote usage.</p>

<div class="diagram">
    <div class="diagram-title">Pattern Examples</div>
    <div class="diagram-box">Singleton</div>
    <div class="diagram-box">Factory</div>
    <div class="diagram-box">Observer</div>
</div>

<p>Use patterns judiciously; prioritize readability and testability.</p>
` },
                        { id: "testing-se", title: "Testing & QA", type: "advanced",  content: `
<h2>Testing & Quality Assurance</h2>
<p>Testing verifies behavior; QA establishes confidence through automated tests, code review, and process controls. Levels: unit, integration, system, and acceptance tests.</p>

<h3>Testing Pyramid</h3>
<div class="diagram">
    <div class="diagram-box">UI Tests (few)</div>
    <div class="diagram-box">Integration Tests</div>
    <div class="diagram-box">Unit Tests (many)</div>
</div>

<p>Invest in test automation, CI pipelines, and reproducible test environments for fast feedback.</p>
` },
                        { id: "version-control", title: "Version Control", type: "basics",   content: `
<h2>Version Control</h2>
<p>Source control (Git) is essential for collaboration. Learn branching strategies, resolving conflicts, and meaningful commit messages.</p>

<h3>Best Practices</h3>
<ul>
    <li>Small, focused commits</li>
    <li>Code reviews and pull requests</li>
    <li>Protect main branches and use CI checks</li>
</ul>
` },
                        { id: "devops", title: "CI/CD & DevOps", type: "advanced",   content: `
<h2>CI/CD & DevOps</h2>
<p>CI automates building and testing on commits. CD automates deployment. Infrastructure as code, monitoring, and observability are central to reliable operations.</p>

<div class="diagram">
    <div class="diagram-title">CI/CD Pipeline</div>
    <div class="diagram-box">Commit → Build</div>
    <div class="diagram-box">Test → Deploy</div>
</div>

<p>Shift-left quality and automating rollbacks improve delivery velocity and safety.</p>
` },
                        { id: "project-mgmt", title: "Project Management", type: "advanced",   content: `
<h2>Project Management</h2>
<p>Agile practices (Scrum, Kanban) structure work into iterations, emphasizing continuous delivery and stakeholder feedback. Use metrics to measure progress and adapt plans.</p>

<h3>Key Ceremonies</h3>
<ul>
    <li>Sprint Planning</li>
    <li>Daily Standup</li>
    <li>Review & Retrospective</li>
</ul>
` },
                        { id: "security-se", title: "Secure Development", type: "advanced",   content: `
<h2>Secure Development</h2>
<p>Security must be integrated into the SDLC: threat modeling, secure coding, dependency management, secrets handling, and runtime monitoring.</p>

<h3>Practices</h3>
<ul>
    <li>Least privilege and strong authentication</li>
    <li>Input validation and output encoding</li>
    <li>Automated dependency scanning</li>
</ul>
` },
                        { id: "se-practice", title: "SE Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Plan a small project: capture user stories, break into tasks, implement iteratively, add automated tests, and deploy via CI/CD. Reflect in retrospectives to improve the process.</p>
` }
        ]
    },
    ai: {
        title: "Artificial Intelligence ",
        icon: "<i class='fas fa-robot' style='color: #ff6b6b;'></i>",
        topics: [
            { id: "ai-intro", title: "AI Overview", type: "basics",   content: `
<h2>Artificial Intelligence — Overview</h2>
<p>AI is the field of creating machines and software that can perceive, reason, learn, and act intelligently. It spans narrow AI (task-specific) and general AI (human-level intelligence).</p>

<div class="diagram">
  <div class="diagram-title">AI Subfields</div>
  <div class="diagram-box">Machine Learning</div>
  <div class="diagram-box">Robotics</div>
  <div class="diagram-box">NLP</div>
  <div class="diagram-box">Computer Vision</div>
</div>

<p>Key challenges: knowledge representation, reasoning under uncertainty, and learning from limited data.</p>
` },
            { id: "ai-search", title: "Search & Problem Solving", type: "advanced",   content: `
<h2>Search Algorithms</h2>
<p>Many AI problems are cast as search: find a path from initial state to goal state. Uninformed search (BFS, DFS) vs informed search (A*, heuristic-guided).</p>

<h3>Strategies</h3>
<ul>
  <li>Depth-First Search (DFS)</li>
  <li>Breadth-First Search (BFS)</li>
  <li>A* with heuristics</li>
</ul>
` },
            { id: "ai-knowledge", title: "Knowledge Representation", type: "advanced",   content: `
<h2>Knowledge Representation</h2>
<p>How to encode knowledge: propositional logic, first-order logic, semantic networks, frames, ontologies. Choose based on expressiveness and reasoning efficiency.</p>
` },
            { id: "ai-uncertainty", title: "Reasoning Under Uncertainty", type: "advanced",   content: `
<h2>Uncertainty & Probability</h2>
<p>Real-world problems have incomplete or noisy information. Bayesian networks and probabilistic inference handle uncertainty. Bayes' theorem is fundamental.</p>
` },
            { id: "ai-vision", title: "Computer Vision", type: "advanced",   content: `
<h2>Computer Vision</h2>
<p>Extract information from images: edge detection, feature extraction, object recognition, image segmentation. Deep learning revolutionized vision tasks.</p>
` },
            { id: "ai-nlp", title: "Natural Language Processing", type: "advanced",  content: `
<h2>Natural Language Processing</h2>
<p>Processing human language: tokenization, parsing, semantic understanding, machine translation, question answering. Transformers and language models are state-of-the-art.</p>
` },
            { id: "ai-robotics", title: "Robotics", type: "advanced",   content: `
<h2>Robotics</h2>
<p>Autonomous machines that perceive and act. Topics: kinematics, path planning, sensor fusion, control algorithms, and human-robot interaction.</p>
` },
            { id: "ai-games", title: "Game Playing AI", type: "advanced",  content: `
<h2>Game Playing</h2>
<p>AI agents play games like chess, Go, and video games. Minimax with alpha-beta pruning reduces search space. Deep learning + Monte Carlo tree search powers modern players.</p>
` },
            { id: "ai-ethics", title: "AI Ethics & Safety", type: "advanced",  content: `
<h2>AI Ethics & Safety</h2>
<p>Responsible AI: Handle bias and fairness, interpretability, privacy, and alignment of AI goals with human values. Build trustworthy systems.</p>
` },
            { id: "ai-practice", title: "AI Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Implement search algorithms or a knowledge-based system to solve a logic puzzle or maze.</p>
` }
        ]
    },
    ml: {
        title: "Machine Learning ",
        icon: "<i class='fas fa-chart-line' style='color: #4ecdc4;'></i>",
        topics: [
            { id: "ml-intro", title: "ML Fundamentals", type: "basics",   content: `
<h2>Machine Learning — Fundamentals</h2>
<p>ML enables systems to learn from data without explicit programming. Three paradigms: supervised (labeled data), unsupervised (unlabeled), and reinforcement (rewards).</p>

<div class="diagram">
  <div class="diagram-title">ML Paradigms</div>
  <div class="diagram-box">Supervised</div>
  <div class="diagram-box">Unsupervised</div>
  <div class="diagram-box">Reinforcement</div>
</div>

<p>Key steps: collect data, preprocess, select model, train, evaluate, deploy.</p>
` },
            { id: "ml-supervised", title: "Supervised Learning", type: "basic",   content: `
<h2>Supervised Learning</h2>
<p>Learn from labeled examples (X, y). Regression predicts continuous values; classification predicts categories. Loss functions guide optimization.</p>

<h3>Common Algorithms</h3>
<ul>
  <li>Linear/Logistic Regression</li>
  <li>Decision Trees</li>
  <li>Support Vector Machines (SVM)</li>
</ul>
` },
            { id: "ml-unsupervised", title: "Unsupervised Learning", type: "advanced",  content: `
<h2>Unsupervised Learning</h2>
<p>Learn patterns from unlabeled data. Clustering groups similar examples; dimensionality reduction finds low-dimensional representations.</p>
` },
            { id: "ml-features", title: "Feature Engineering", type: "advanced",   content: `
<h2>Feature Engineering</h2>
<p>Transform raw data into useful features. Normalize scales, encode categorical variables, select informative features, and extract domain-specific features for better model performance.</p>
` },
            { id: "ml-validation", title: "Model Validation & Evaluation", type: "advanced",  content: `
<h2>Validation & Evaluation</h2>
<p>Use cross-validation and metrics (accuracy, precision, recall, F1, ROC-AUC) to assess model quality. Avoid overfitting and underfitting.</p>
` },
            { id: "ml-ensemble", title: "Ensemble Methods", type: "advanced", content: `
<h2>Ensemble Methods</h2>
<p>Combine multiple models to reduce variance and bias. Bagging (parallel), boosting (sequential), random forests, and stacking are powerful ensemble techniques.</p>
` },
            { id: "ml-hyperparameter", title: "Hyperparameter Tuning", type: "advanced",   content: `
<h2>Hyperparameter Tuning</h2>
<p>Find optimal hyperparameters using grid search, random search, or Bayesian optimization. Use validation sets to avoid overfitting.</p>
` },
            { id: "ml-optimization", title: "Optimization & Gradient Descent", type: "advanced",  content: `
<h2>Optimization Algorithms</h2>
<p>Update model parameters to minimize loss. Gradient descent variants: SGD, momentum, Adam. Learning rate scheduling matters for convergence.</p>
` },
            { id: "ml-bias", title: "Bias, Variance & Regularization", type: "advanced", content: `
<h2>Bias-Variance Tradeoff</h2>
<p>High bias (underfitting) vs high variance (overfitting). Regularization (L1/L2), dropout, and early stopping reduce overfitting.</p>
` },
            { id: "ml-practice", title: "ML Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Implement a complete ML pipeline: load data, engineer features, train a classifier, validate, and evaluate using metrics.</p>
` }
        ]
    },
    deep: {
        title: "Deep Learning ",
        icon: "<i class='fas fa-network-wired' style='color: #ffa502;'></i>",
        topics: [
            { id: "deep-intro", title: "Deep Learning Overview", type: "basics",   content: `
<h2>Deep Learning — Overview</h2>
<p>Deep neural networks with multiple layers learn hierarchical feature representations. Breakthroughs in image recognition, NLP, and reinforcement learning.</p>

<div class="diagram">
  <div class="diagram-title">Neural Network Layers</div>
  <div class="diagram-box">Input Layer</div>
  <div class="diagram-box">Hidden Layers</div>
  <div class="diagram-box">Output Layer</div>
</div>

<p>Key components: neurons, activation functions, backpropagation, and optimization.</p>
` },
            { id: "deep-perceptron", title: "Perceptron & Backpropagation", type: "basics",  content: `
<h2>Perceptron & Backprop</h2>
<p>A perceptron is a single neuron; neural networks stack perceptrons. Backpropagation computes gradients efficiently using the chain rule for weight updates.</p>
` },
            { id: "deep-cnn", title: "Convolutional Neural Networks (CNN)", type: "advanced",  content: `
<h2>Convolutional Neural Networks</h2>
<p>CNNs use convolutional and pooling layers to extract spatial features. Hierarchical architecture: early layers detect edges, later layers detect objects.</p>

<h3>Key Components</h3>
<ul>
  <li>Convolution (feature extraction)</li>
  <li>Pooling (dimensionality reduction)</li>
  <li>Fully connected (classification)</li>
</ul>
` },
            { id: "deep-rnn", title: "Recurrent Neural Networks (RNN)", type: "advanced",  content: `
<h2>Recurrent Neural Networks</h2>
<p>RNNs process sequences by maintaining hidden state. LSTMs and GRUs solve vanishing gradient problem. Applications: NLP, time series, speech.</p>
` },
            { id: "deep-transformers", title: "Transformers & Attention", type: "advanced",   content: `
<h2>Transformers & Attention</h2>
<p>Attention mechanism allows models to focus on relevant parts of input. Transformers use self-attention and are parallelizable—power BERT, GPT, and modern NLP systems.</p>
` },
            { id: "deep-optimization", title: "Training & Optimization", type: "advanced",   content: `
<h2>Training Deep Networks</h2>
<p>Challenges: vanishing gradients, overfitting, slow convergence. Solutions: batch normalization, layer normalization, dropout, careful weight initialization, and adaptive learning rates (Adam).</p>
` },
            { id: "deep-transfer", title: "Transfer Learning", type: "advanced",  content: `
<h2>Transfer Learning</h2>
<p>Use models pretrained on large datasets and fine-tune on smaller, task-specific data. Dramatically reduces training time and data requirements.</p>
` },
            { id: "deep-gans", title: "Generative Models (GANs, VAE)", type: "advanced",   content: `
<h2>Generative Models</h2>
<p>GANs pit generator vs discriminator for realistic data generation. VAEs learn probabilistic latent codes. Applications: image synthesis, data augmentation.</p>
` },
            { id: "deep-reinforcement", title: "Deep Reinforcement Learning", type: "advanced",   content: `
<h2>Deep Reinforcement Learning</h2>
<p>Combine deep learning with RL: DQN for control, policy gradients for continuous actions, actor-critic methods. Breaks Atari games and other complex tasks.</p>
` },
            { id: "deep-practice", title: "Deep Learning Practice", type: "practice",  content: `
<h3>Practice</h3>
<p>Train a CNN for image classification or an LSTM for sequence modeling on real datasets.</p>
` }
        ]
    },
    datasci: {
        title: "Data Science ",
        icon: "<i class='fas fa-chart-bar' style='color: #8e44ad;'></i>",
        topics: [
            { id: "datasci-intro", title: "Data Science Overview", type: "basics",  content: `
<h2>Data Science — Overview</h2>
<p>Data science combines statistics, programming, and domain expertise to extract insight from data. Workflow: collection, cleaning, exploration, modeling, visualization, decision-making.</p>

<div class="diagram">
  <div class="diagram-title">Data Science Workflow</div>
  <div class="diagram-box">Collect</div>
  <div class="diagram-box">Clean</div>
  <div class="diagram-box">Explore</div>
  <div class="diagram-box">Model</div>
  <div class="diagram-box">Visualize</div>
</div>
` },
            { id: "datasci-etl", title: "Data Collection & ETL", type: "basics",  content: `
<h2>Data Collection & ETL</h2>
<p>Extract data from sources, transform for consistency, and load into data warehouses. Handle missing values, duplicates, and outliers. Data quality is critical.</p>
` },
            { id: "datasci-eda", title: "Exploratory Data Analysis (EDA)", type: "basics",   content: `
<h2>Exploratory Data Analysis</h2>
<p>Understand data: compute summary statistics, visualize distributions, find correlations, identify patterns and anomalies. EDA guides feature engineering and model selection.</p>
` },
            { id: "datasci-viz", title: "Data Visualization", type: "advanced",  content: `
<h2>Data Visualization</h2>
<p>Communicate insights visually using charts, plots, and dashboards. Choose visualization types based on data: bar charts for categories, line plots for trends, scatter plots for relationships.</p>
` },
            { id: "datasci-stats", title: "Statistical Analysis", type: "advanced", content: `
<h2>Statistical Analysis</h2>
<p>Hypothesis testing determines if observed differences are significant. t-tests, ANOVA, chi-square tests, and confidence intervals quantify evidence.</p>
` },
            { id: "datasci-regression", title: "Regression Analysis", type: "advanced",  content: `
<h2>Regression Analysis</h2>
<p>Model relationships between variables. Linear regression, multiple regression, and polynomial regression. Check assumptions: linearity, normality, homoscedasticity.</p>
` },
            { id: "datasci-timeseries", title: "Time Series Analysis", type: "advanced",   content: `
<h2>Time Series Analysis</h2>
<p>Analyze temporal data: identify trends and seasonality. ARIMA models and exponential smoothing forecast future values. Stationarity and autocorrelation are key concepts.</p>
` },
            { id: "datasci-ab", title: "A/B Testing & Experimentation", type: "advanced",  content: `
<h2>A/B Testing & Experimentation</h2>
<p>Design controlled experiments to test hypotheses. Randomization, sample size calculation, and proper statistical analysis ensure valid conclusions.</p>
` },
            { id: "datasci-big", title: "Big Data Technologies", type: "advanced",   content: `
<h2>Big Data Technologies</h2>
<p>Process massive datasets using distributed systems: Hadoop, Apache Spark, cloud data warehouses. Parallel processing and scalable storage enable large-scale analysis.</p>
` },
            { id: "datasci-practice", title: "Data Science Practice", type: "practice",  content: `
<h3>Practice</h3>
<p>Perform complete EDA, build a predictive model, and communicate findings with visualizations on a real-world dataset.</p>
` }
        ]
    },
    cloud: {
        title: "Cloud Computing ",
        icon: "<i class='fas fa-cloud' style='color: #3498db;'></i>",
        topics: [
            { id: "cloud-intro", title: "Cloud Computing Overview", type: "basics",  content: `
<h2>Cloud Computing — Overview</h2>
<p>Cloud computing delivers IT services over the internet: Infrastructure (IaaS), Platform (PaaS), Software (SaaS). Benefits: scalability, cost-efficiency, global reach, and reduced management burden.</p>

<div class="diagram">
  <div class="diagram-title">Service Models</div>
  <div class="diagram-box">IaaS (Infrastructure)</div>
  <div class="diagram-box">PaaS (Platform)</div>
  <div class="diagram-box">SaaS (Software)</div>
</div>
` },
            { id: "cloud-iaas", title: "Infrastructure as a Service (IaaS)", type: "basic", content: `
<h2>Infrastructure as a Service</h2>
<p>Rent computing resources: virtual machines, networks, storage. Trade off: full control but more management responsibility. Examples: AWS EC2, Azure VMs.</p>
` },
            { id: "cloud-paas", title: "Platform as a Service (PaaS)", type: "advanced",   content: `
<h2>Platform as a Service</h2>
<p>Develop and deploy apps without managing infrastructure. PaaS provides runtime, databases, and middleware. Less operational overhead; less control.</p>
` },
            { id: "cloud-saas", title: "Software as a Service (SaaS)", type: "advanced",   content: `
<h2>Software as a Service</h2>
<p>Use applications hosted in the cloud without installing or maintaining. Low management; fully managed by vendor. Pay subscription fees.</p>
` },
            { id: "cloud-storage", title: "Cloud Storage & Databases", type: "advanced",   content: `
<h2>Cloud Storage & Databases</h2>
<p>Scalable storage: object storage (S3), block storage, databases (managed SQL, NoSQL). Automatic replication and durability ensure data safety.</p>
` },
            { id: "cloud-security", title: "Cloud Security & Compliance", type: "advanced",  content: `
<h2>Cloud Security</h2>
<p>Secure cloud deployments: Identity and Access Management (IAM), encryption, VPCs for isolation, audit logging. Comply with regulations: GDPR, HIPAA, PCI-DSS.</p>
` },
            { id: "cloud-scaling", title: "Scalability & Load Balancing", type: "advanced",   content: `
<h2>Scalability & Load Balancing</h2>
<p>Handle variable load via auto-scaling. Distribute traffic with load balancers. Deploy across multiple regions for global availability and disaster recovery.</p>
` },
            { id: "cloud-monitoring", title: "Monitoring & Observability", type: "advanced",  content: `
<h2>Monitoring & Observability</h2>
<p>Monitor cloud resources: metrics, logs, traces. Set alarms for thresholds. Observability enables fast troubleshooting and performance optimization.</p>
` },
            { id: "cloud-costopt", title: "Cost Optimization", type: "advanced",  content: `
<h2>Cost Optimization</h2>
<p>Reduce cloud bills: use reserved instances, spot instances, right-size resources, and delete unused assets. Monitor spending and budget alerts.</p>
` },
            { id: "cloud-practice", title: "Cloud Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Deploy a scalable web application on a cloud platform with databases, load balancing, and monitoring.</p>
` }
        ]
    },
    cyber: {
        title: "Cyber Security ",
        icon: "<i class='fas fa-shield-alt' style='color: #e74c3c;'></i>",
        topics: [
            { id: "cyber-intro", title: "Cybersecurity Overview", type: "basics",   content: `
<h2>Cybersecurity — Overview</h2>
<p>Cyber security protects digital assets from malicious attacks. The CIA triad: Confidentiality (privacy), Integrity (accuracy), Availability (accessibility). Threats span malware, phishing, data breaches.</p>

<div class="diagram">
  <div class="diagram-title">CIA Triad</div>
  <div class="diagram-box">Confidentiality</div>
  <div class="diagram-box">Integrity</div>
  <div class="diagram-box">Availability</div>
</div>
` },
            { id: "cyber-threats", title: "Common Threats & Attacks", type: "basics",  content: `
<h2>Threats & Attack Types</h2>
<p>Malware (viruses, trojans, ransomware), phishing, DDoS, SQL injection, cross-site scripting (XSS). Understand attack vectors to defend against them.</p>

<h3>Common Attacks</h3>
<ul>
  <li>Malware & Ransomware</li>
  <li>Phishing & Social Engineering</li>
  <li>DDoS (Distributed Denial of Service)</li>
</ul>
` },
            { id: "cyber-crypto", title: "Cryptography Basics", type: "advanced",   content: `
<h2>Cryptography</h2>
<p>Protect data confidentiality with encryption and integrity with hashing. Symmetric (fast, shared key), asymmetric (key pairs, slower). Digital signatures verify authenticity.</p>
` },
            { id: "cyber-auth", title: "Authentication & Access Control", type: "advanced",  content: `
<h2>Authentication & Authorization</h2>
<p>Verify identity: passwords, multi-factor authentication, biometrics. Control access: role-based (RBAC), attribute-based (ABAC). Least privilege principle.</p>
` },
            { id: "cyber-network", title: "Network Security", type: "advanced",  content: `
<h2>Network Security</h2>
<p>Protect networks with firewalls, intrusion detection/prevention systems (IDS/IPS), VPNs, and encrypted protocols (SSL/TLS). Segment networks with DMZ.</p>
` },
            { id: "cyber-web", title: "Web Application Security", type: "advanced",   content: `
<h2>Web Application Security</h2>
<p>OWASP Top 10 vulnerabilities: SQL injection, cross-site scripting (XSS), broken authentication, CSRF. Mitigation: input validation, parameterized queries, security headers.</p>
` },
            { id: "cyber-secure-dev", title: "Secure Development", type: "advanced",  content: `
<h2>Secure Development (SecDev)</h2>
<p>Integrate security throughout SDLC: threat modeling, secure code review, static/dynamic analysis, dependency scanning, and security testing.</p>
` },
            { id: "cyber-incidents", title: "Incident Response & Forensics", type: "advanced",  content: `
<h2>Incident Response</h2>
<p>Detect security incidents, contain damage, eradicate threats, and recover. Maintain logs for forensic analysis. Post-mortems improve future response.</p>
` },
            { id: "cyber-compliance", title: "Compliance & Standards", type: "advanced",   content: `
<h2>Compliance & Standards</h2>
<p>Meet regulatory requirements: ISO 27001, NIST, SOC 2, GDPR, PCI-DSS. Security audits and penetration testing verify compliance.</p>
` },
            { id: "cyber-practice", title: "Cybersecurity Practice", type: "practice",   content: `
<h3>Practice</h3>
<p>Perform a security audit, identify vulnerabilities, or write a security policy and incident response plan.</p>
` }
        ]
    }
};

// State management
let currentSubject = 'html';
let currentTopicIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadNotesGrid();
    loadQuizQuestion();
    setupScrollListener();
    setupSearchListener();
});

// Navigation functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active-section');
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Initialize practice section if practice is selected
    if (sectionId === 'practice') {
        initializePracticeSection();
    }
}

function updateSidebarTopicCounts() {
    const subjectItems = document.querySelectorAll('.subject-item');
    subjectItems.forEach(item => {
        const subjectId = item.getAttribute('onclick').match(/'([^']+)'/)[1];
        const subjectData = subjects[subjectId];
        const topicCountSpan = item.querySelector('.topic-count');
        
        if (topicCountSpan && subjectData) {
            const count = subjectData.topics.length;
            topicCountSpan.textContent = `${count} topics`;
        }
    });
}

function getSubjectTopicCount(subjectId) {
    const subjectData = subjects[subjectId];
    return subjectData ? subjectData.topics.length : 0;
}

// Update the selectSubject function to refresh counts
function selectSubject(subject) {
    currentSubject = subject;
    currentTopicIndex = 0;
    
    // Update sidebar
    document.querySelectorAll('.subject-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Update subject title
    const subjectData = subjects[subject];
    document.getElementById('subjectTitle').textContent = subjectData.title + ' Notes';
    
    // Show notes section
    showSection('notes');
    loadNotesGrid();
    
    // Update sidebar topic counts
    updateSidebarTopicCounts();
    
    // Update progress
    updateProgress();
}

// Call updateSidebarTopicCounts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadNotesGrid();
    setupScrollListener();
    setupSearchListener();
    checkLoginStatus();
    loadUserSettings();
    updateSidebarTopicCounts(); // Add this line
});

function loadNotesGrid() {
    const grid = document.getElementById('notesGrid');
    const subjectData = subjects[currentSubject];
    
    grid.innerHTML = '';
    
    subjectData.topics.forEach((topic, index) => {
        const card = document.createElement('div');
        card.className = 'note-card';
        card.onclick = () => loadTopic(currentSubject, topic.id);
        card.setAttribute('data-type', topic.type);
        
        card.innerHTML = `
            <div class="note-icon">${subjectData.icon}</div>
            <h4>${topic.title}</h4>
            <p>${getTopicDescription(topic.id)}</p>
            <div class="note-meta">
                <span class="difficulty ${topic.type}">${capitalizeFirst(topic.type)}</span>
                <span>${getReadTime(topic.id)}</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function filterNotes(filter) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter cards
    document.querySelectorAll('.note-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-type') === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function getTopicDescription(topicId) {
    const descriptions = {
        'introduction': 'Learn the basics and fundamentals',
        'intro': 'Introduction to the subject',
        'overview': 'Overview and key concepts',
        'headings': 'Understanding heading tags h1-h6',
        'paragraphs': 'Working with text paragraphs',
        'links': 'Creating hyperlinks between pages',
        'images': 'Adding images to web pages',
        'lists': 'Creating ordered and unordered lists',
        'forms': 'Building user input forms',
        'tables': 'Creating data tables',
        'semantic': 'Using semantic HTML5 elements',
        'meta': 'Managing meta information',
        'html5': 'New features in HTML5',
        'variables': 'Declaring and using variables',
        'datatypes': 'Understanding data types',
        'arrays': 'Working with array collections',
        'functions': 'Creating reusable functions',
        'objects': 'Working with objects',
        'dom': 'Manipulating DOM elements',
        'async': 'Asynchronous programming',
        'es6': 'Modern ES6+ features',
        'colors': 'Applying colors and gradients',
        'backgrounds': 'Background styling',
        'boxmodel': 'Understanding CSS box model',
        'flexbox': 'Flexible box layout',
        'grid': 'CSS grid layout system',
        'animations': 'Creating animations',
        'responsive': 'Mobile-first responsive design',
        'selectors': 'CSS selector types',
        'operators': 'Arithmetic and logical operators',
        'conditionals': 'If-else statements',
        'loops': 'For and while loops',
        'oop': 'Object-oriented programming',
        'filehandling': 'Reading and writing files',
        'collections': 'Java collections framework',
        'exceptions': 'Exception handling',
        'threads': 'Multithreading concepts',
        'streams': 'Stream API operations',
        'select': 'Querying data with SELECT',
        'where': 'Filtering data',
        'joins': 'Combining tables',
        'aggregates': 'Aggregate functions',
        'subqueries': 'Nested queries',
        'indexes': 'Database optimization',
        'transactions': 'ACID transactions',
        'linkedlist': 'Singly and doubly linked lists',
        'stacks': 'LIFO data structure',
        'queues': 'FIFO data structure',
        'trees': 'Binary tree structures',
        'bst': 'Binary search trees',
        'graphs': 'Graph representations',
        'sorting': 'Sorting algorithms',
        'dp': 'Dynamic programming patterns',
        'practice': 'Hands-on practice exercise',
        'practice1': 'Hands-on coding exercise'
    };
    
    // Return specific description or a smart default based on title pattern
    if (descriptions[topicId]) {
        return descriptions[topicId];
    }
    
    // Smart default based on topicId patterns
    if (topicId.includes('practice')) return 'Practice and apply your knowledge';
    if (topicId.includes('overview') || topicId.includes('intro')) return 'Introduction and overview';
    if (topicId.includes('basics')) return 'Learn the fundamentals';
    if (topicId.includes('advanced')) return 'Advanced concepts and techniques';
    if (topicId.includes('deep')) return 'Deep dive into details';
    
    return 'Learn this comprehensive topic';
}

function getReadTime(topicId) {
    // Find the topic across all subjects to get its type
    let topicType = 'basics';
    for (const subject in subjects) {
        const topic = subjects[subject].topics.find(t => t.id === topicId);
        if (topic) {
            topicType = topic.type;
            break;
        }
    }
    
    const times = {
        'basics': '8 min',
        'advanced': '12 min',
        'practice': '15 min'
    };
    
    return times[topicType] || '10 min';
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function loadTopic(subject, topicId) {
    const subjectData = subjects[subject];
    const topic = subjectData.topics.find(t => t.id === topicId);
    
    if (!topic) return;
    
    currentTopicIndex = subjectData.topics.findIndex(t => t.id === topicId);
    
    // Update topic title
    document.getElementById('topicTitle').textContent = topic.title;
    
    // Update content
    document.getElementById('contentText').innerHTML = topic.content;
    
    // Update code example - hide if empty
    const codeElement = document.getElementById('codeExample');
    const codeSection = document.querySelector('.code-section');
    const practiceSection = document.querySelector('.practice-section');
    
    if (topic.code && topic.code.trim() !== '') {
        codeElement.textContent = topic.code;
        
        // Update Prism highlighting
        if (typeof Prism !== 'undefined') {
            Prism.highlightElement(codeElement);
        }
        
        // Show code and practice sections
        if (codeSection) codeSection.style.display = 'block';
        if (practiceSection) practiceSection.style.display = 'block';
        
        // Update exercise description
        document.getElementById('exerciseText').textContent = getExerciseDescription(topicId);
        
        // Reset practice code
        document.getElementById('practiceCode').value = topic.code;
    } else {
        // Hide code and practice sections if no code
        if (codeSection) codeSection.style.display = 'none';
        if (practiceSection) practiceSection.style.display = 'none';
    }
    
    document.getElementById('output').textContent = '';
    
    // Show topic content section
    showSection('topicContent');
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update bookmark button text based on bookmark status
    updateBookmarkButtonStatus(subject, topicId);
}

function getExerciseDescription(topicId) {
    const exercises = {
        'html': 'Create a simple webpage with all the HTML concepts you learned.',
        'css': 'Style a webpage using CSS selectors, colors, and layouts.',
        'javascript': 'Write JavaScript code to manipulate the DOM.',
        'python': 'Solve a programming problem using Python.',
        'java': 'Implement a Java class with OOP concepts.',
        'sql': 'Write SQL queries to retrieve and manipulate data.',
        'dsa': 'Implement a data structure algorithm.',
        'react': 'Build a React component with state and props.'
    };
    
    return exercises[topicId] || 'Practice the concepts learned in this topic.';
}

function goBack() {
    showSection('notes');
}

function updateNavigationButtons() {
    const subjectData = subjects[currentSubject];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentTopicIndex === 0;
    nextBtn.disabled = currentTopicIndex === subjectData.topics.length - 1;
}

function prevTopic() {
    if (currentTopicIndex > 0) {
        currentTopicIndex--;
        const subjectData = subjects[currentSubject];
        loadTopic(currentSubject, subjectData.topics[currentTopicIndex].id);
    }
}

function nextTopic() {
    const subjectData = subjects[currentSubject];
    if (currentTopicIndex < subjectData.topics.length - 1) {
        currentTopicIndex++;
        loadTopic(currentSubject, subjectData.topics[currentTopicIndex].id);
    }
}

function bookmarkTopic() {
    if (!currentUser) {
        showToast('Please login to bookmark topics! 🔖');
        return;
    }
    
    const subjectData = subjects[currentSubject];
    const topic = subjectData.topics[currentTopicIndex];
    const bookmarkId = currentSubject + '|' + topic.id;
    
    // Check if already bookmarked
    if (!currentUser.bookmarks) {
        currentUser.bookmarks = [];
    }
    
    const existingIndex = currentUser.bookmarks.findIndex(b => b.id === bookmarkId);
    
    if (existingIndex === -1) {
        // Add bookmark
        currentUser.bookmarks.push({
            id: bookmarkId,
            subject: currentSubject,
            subjectTitle: subjectData.title,
            subjectIcon: subjectData.icon,
            topicId: topic.id,
            topicTitle: topic.title,
            timestamp: new Date().toISOString()
        });
        showToast('Topic bookmarked! 🔖');
    } else {
        // Remove bookmark
        currentUser.bookmarks.splice(existingIndex, 1);
        showToast('Bookmark removed! 📌');
    }
    
    // Save to localStorage
    saveUserData();
    
    // Refresh bookmarks display
    loadBookmarksPopup();
}

function loadBookmarks() {
    const bookmarksList = document.getElementById('bookmarksList');
    
    if (!currentUser || !currentUser.bookmarks || currentUser.bookmarks.length === 0) {
        bookmarksList.innerHTML = '<p class="empty-message">No bookmarks yet</p>';
        return;
    }
    
    let html = '';
    currentUser.bookmarks.forEach((bookmark, index) => {
        html += `
            <div class="bookmark-item" onclick="navigateToBookmark('${bookmark.subject}', '${bookmark.topicId}')">
                <div class="bookmark-info">
                    <span class="bookmark-icon">${bookmark.subjectIcon}</span>
                    <span class="bookmark-title">${bookmark.topicTitle}</span>
                </div>
                <button class="remove-bookmark" onclick="event.stopPropagation(); removeBookmark(${index})">✕</button>
            </div>
        `;
    });
    
    bookmarksList.innerHTML = html;
}

function removeBookmark(index) {
    if (currentUser && currentUser.bookmarks) {
        currentUser.bookmarks.splice(index, 1);
        saveUserData();
        loadBookmarks();
        showToast('Bookmark removed! 📌');
    }
}

function navigateToBookmark(subject, topicId) {
    // Close dropdown
    document.getElementById('accountDropdown').classList.remove('active');
    
    // Navigate to the bookmarked topic
    loadSubject(subject);
    setTimeout(() => {
        loadTopic(subject, topicId);
    }, 100);
    
    showToast('Opening bookmark... 📖');
}

function saveUserData() {
    // Save to current user
    localStorage.setItem('learnhub_current_user', JSON.stringify(currentUser));
    
    // Update in users array
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('learnhub_users', JSON.stringify(users));
    }
}

function shareTopic() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        showToast('Link copied to clipboard! 📋');
    });
}

function copyCode() {
    const code = document.getElementById('codeExample').textContent;
    navigator.clipboard.writeText(code).then(() => {
        showToast('Code copied! 📋');
    });
}

function tryCode() {
    const codeEditor = document.getElementById('codeEditorPanel');
    const code = document.getElementById('codeExample').textContent;
    
    // Reset editors
    document.getElementById('htmlEditor').value = '';
    document.getElementById('cssEditor').value = '';
    document.getElementById('jsEditor').value = '';
    
    // Detect language and populate appropriate editor
    if (currentSubject === 'html' || currentSubject === 'css') {
        document.getElementById('htmlEditor').value = code;
    } else if (currentSubject === 'javascript') {
        document.getElementById('htmlEditor').value = '<!DOCTYPE html>\n<html>\n<head>\n    <title>JS Practice</title>\n    <style>\n        /* Add CSS here */\n    </style>\n</head>\n<body>\n    <div id="output"></div>\n    <script>\n        // Add JS here\n        console.log("Hello World");\n    <\/script>\n</body>\n</html>';
    } else if (currentSubject === 'python') {
        // Open Python compiler in new tab
        window.open('https://www.programiz.com/python-programming/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'java') {
        // Open Java compiler in new tab
        window.open('https://onecompiler.com/java', '_blank');
        return;
    } else if (currentSubject === 'c') {
        // Open Java compiler in new tab
        window.open(' https://www.programiz.com/c-programming/online-compiler/', '_blank');
        return;
    
    } else if (currentSubject === 'cpp') {
        // Open Java compiler in new tab
        window.open(' https://www.programiz.com/cpp-programming/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'sql') {
        // Open SQL compiler in new tab
        window.open('https://www.programiz.com/sql/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'react') {
        // Open React compiler in new tab
        window.open('https://onecompiler.com/react', '_blank');
        return;
    } else if (currentSubject === 'php') {
        // Open React compiler in new tab
        window.open('https://www.programiz.com/php/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'go') {
        // Open React compiler in new tab
        window.open('https://www.programiz.com/golang/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'rust') {
        // Open React compiler in new tab
        window.open('https://www.programiz.com/rust/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'kotlin') {
        // Open React compiler in new tab
        window.open(' https://www.programiz.com/kotlin-programming/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'r') {
        // Open React compiler in new tab
        window.open(' https://www.programiz.com/r/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'swift') {
        // Open React compiler in new tab
        window.open('  https://www.programiz.com/swift/online-compiler/', '_blank');
        return;
    } else if (currentSubject === 'dbms') {
        // Open React compiler in new tab
        window.open(' https://www.programiz.com/sql/online-compiler/', '_blank');
        return;
    } else {
        // For other subjects, show the code editor
        document.getElementById('htmlEditor').value = code;
    }
    
    // Show code editor panel with animation
    codeEditor.classList.add('active');
    
    // Run the code
    runEditorCode();
    
    showToast('Code editor opened! 💻');
}

function closeCodeEditor() {
    const codeEditor = document.getElementById('codeEditorPanel');
    codeEditor.classList.remove('active');
}

function switchEditorTab(lang) {
    // Update tab styling
    document.querySelectorAll('.editor-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide appropriate editor based on language
    const htmlEditor = document.getElementById('htmlEditor').parentElement;
    const cssEditor = document.getElementById('cssEditor').parentElement;
    const jsEditor = document.getElementById('jsEditor').parentElement;
    
    htmlEditor.style.display = 'none';
    cssEditor.style.display = 'none';
    jsEditor.style.display = 'none';
    
    if (lang === 'html') {
        htmlEditor.style.display = 'block';
    } else if (lang === 'css') {
        cssEditor.style.display = 'block';
    } else if (lang === 'js') {
        jsEditor.style.display = 'block';
    }
}

function runEditorCode() {
    const html = document.getElementById('htmlEditor').value;
    const css = document.getElementById('cssEditor').value;
    const js = document.getElementById('jsEditor').value;
    const preview = document.getElementById('codePreview');
    
    // Combine HTML, CSS, and JS
    const combinedCode = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            <\/script>
        </body>
        </html>
    `;
    
    // Set the preview iframe content
    preview.srcdoc = combinedCode;
}

function resetEditorCode() {
    document.getElementById('htmlEditor').value = '';
    document.getElementById('cssEditor').value = '';
    document.getElementById('jsEditor').value = '';
    document.getElementById('codePreview').srcdoc = '';
    showToast('Editor reset! 🔄');
}

function runPractice() {
    const code = document.getElementById('practiceCode').value;
    const output = document.getElementById('output');
    
    try {
        // Simple JavaScript execution (for demo purposes)
        if (currentSubject === 'javascript') {
            // Create a safe evaluation environment
            const logs = [];
            const mockConsole = {
                log: (...args) => logs.push(args.join(' '))
            };
            
            // Evaluate the code
            const result = new Function('console', code)(mockConsole);
            
            if (logs.length > 0) {
                output.textContent = logs.join('\n');
            } else if (result !== undefined) {
                output.textContent = result;
            } else {
                output.textContent = 'Code executed successfully! (No output)';
            }
        } else {
            output.textContent = 'Code execution is currently available for JavaScript topics only.';
        }
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }
    
    showToast('Code executed!');
}

// Practice functions
function startPractice(problemId) {
    showToast('Loading problem: ' + problemId);
    showSection('topicContent');
    document.getElementById('topicTitle').textContent = 'Practice: ' + problemId;
}

// Search function
function searchNotes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (!query) return;
    
    showSection('notes');
    document.getElementById('subjectTitle').textContent = 'Search Results';
    
    const grid = document.getElementById('notesGrid');
    grid.innerHTML = '';
    
    // Search across all subjects
    Object.keys(subjects).forEach(subjectKey => {
        const subjectData = subjects[subjectKey];
        
        subjectData.topics.forEach(topic => {
            const titleMatch = topic.title.toLowerCase().includes(query);
            const contentMatch = topic.content.toLowerCase().includes(query);
            
            if (titleMatch || contentMatch) {
                const card = document.createElement('div');
                card.className = 'note-card';
                card.onclick = () => {
                    selectSubject(subjectKey);
                    setTimeout(() => loadTopic(subjectKey, topic.id), 100);
                };
                
                card.innerHTML = `
                    <div class="note-icon">${subjectData.icon}</div>
                    <h4>${topic.title}</h4>
                    <p>${subjectData.title}</p>
                    <div class="note-meta">
                        <span class="difficulty ${topic.type}">${capitalizeFirst(topic.type)}</span>
                        <span>${getReadTime(topic.id)}</span>
                    </div>
                `;
                
                grid.appendChild(card);
            }
        });
    });
    
    if (grid.children.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: #666;">No results found for "' + query + '"</p>';
    }
    
    showToast('Found ' + grid.children.length + ' results');
}

function setupSearchListener() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchNotes();
        }
    });
}

// Scroll to top
function setupScrollListener() {
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollBtn = document.getElementById('scrollTop');
        
        if (scrollTop > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize Prism when page loads
if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
}

// ============= PRACTICE QUESTIONS FUNCTIONS =============

let practiceSubjectSelected = null;
let practiceQuestionIndex = 0;

// Initialize practice section when page loads
function initializePracticeSection() {
    console.log('Initializing practice section...');
    const practiceGrid = document.getElementById('practiceSubjectsGrid');
    
    if (!practiceGrid) {
        console.error('practiceSubjectsGrid not found');
        return;
    }
    
    // Always load subjects fresh
    if (typeof practiceQuestions !== 'undefined' && practiceQuestions) {
        console.log('practiceQuestions found, loading subjects');
        loadPracticeSubjects();
    } else {
        console.warn('practiceQuestions not yet defined, retrying...');
        setTimeout(initializePracticeSection, 500);
    }
}

// Load all practice subjects
function loadPracticeSubjects() {
    console.log('loadPracticeSubjects() called');
    
    const grid = document.getElementById('practiceSubjectsGrid');
    
    if (!grid) {
        console.error('❌ practiceSubjectsGrid element not found!');
        return;
    }
    
    console.log('✓ practiceSubjectsGrid found');
    grid.innerHTML = '';
    
    // Check if practiceQuestions is defined
    if (typeof practiceQuestions === 'undefined') {
        console.error('❌ practiceQuestions is not defined');
        grid.innerHTML = '<p style="color: red; text-align: center; padding: 20px;">Error: Questions data not loaded. Please refresh the page.</p>';
        return;
    }
    
    const subjectKeys = Object.keys(practiceQuestions);
    console.log('✓ practiceQuestions found with', subjectKeys.length, 'subjects:', subjectKeys.join(', '));
    
    try {
        for (const [key, subject] of Object.entries(practiceQuestions)) {
            console.log('Creating card for:', key);
            const subjectCard = document.createElement('div');
            subjectCard.className = 'practice-subject-card';
            subjectCard.innerHTML = `
                <div class="subject-icon">${subject.icon}</div>
                <h3>${subject.title}</h3>
                <span class="question-count">${subject.questions.length} Questions</span>
                <button class="practice-btn" onclick="loadPracticeQuestions('${key}')">Start Practice</button>
            `;
            grid.appendChild(subjectCard);
        }
        console.log('✓ All ' + subjectKeys.length + ' subjects loaded successfully');
    } catch (error) {
        console.error('❌ Error loading subjects:', error);
        grid.innerHTML = '<p style="color: red; text-align: center; padding: 20px;">Error: ' + error.message + '</p>';
    }
}

// Load practice questions for a subject
function loadPracticeQuestions(subjectKey) {
    console.log('Loading practice questions for:', subjectKey);
    console.log('practiceQuestions object exists?', typeof practiceQuestions !== 'undefined');
    
    if (typeof practiceQuestions === 'undefined' || !practiceQuestions[subjectKey]) {
        console.error('Questions data not found for subject:', subjectKey);
        alert('Error: Questions data not found. Please refresh the page.');
        return;
    }
    
    practiceSubjectSelected = subjectKey;
    practiceQuestionIndex = 0;
    
    const subject = practiceQuestions[subjectKey];
    console.log('Subject found:', subject.title, 'with', subject.questions.length, 'questions');
    
    // Hide all sections first
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Show questions section
    const practiceQuestionsSection = document.getElementById('practiceQuestions');
    if (practiceQuestionsSection) {
        practiceQuestionsSection.classList.add('active-section');
        console.log('Practice questions section shown');
    } else {
        console.error('practiceQuestions element not found');
        return;
    }
    
    // Update title
    const titleEl = document.getElementById('practiceQuestionsTitle');
    if (titleEl) {
        titleEl.textContent = `${subject.title} - Practice Questions`;
    }
    
    // Display questions
    displayQuestions(subject.questions);
    
    // Scroll to top
    setTimeout(() => scrollToTop(), 100);
}

// Display all questions
function displayQuestions(questions) {
    console.log('Displaying questions, count:', questions ? questions.length : 0);
    
    const container = document.getElementById('questionsContainer');
    if (!container) {
        console.error('Questions container (#questionsContainer) not found!');
        return;
    }
    
    container.innerHTML = '';
    
    if (!questions || questions.length === 0) {
        console.warn('No questions provided');
        container.innerHTML = '<p style="color: red; padding: 20px;">No questions found</p>';
        return;
    }
    
    console.log('Creating question cards for', questions.length, 'questions');
    
    try {
        questions.forEach((question, index) => {
            const questionCard = document.createElement('div');
            questionCard.className = 'question-card';
            
            // Create question card HTML
            questionCard.innerHTML = `
                <div class="question-header">
                    <div>
                        <span class="question-number">Q${question.number}</span>
                    </div>
                    <button class="question-toggle-btn" onclick="toggleAnswer(this, ${index})" type="button">▼</button>
                </div>
                <div class="question-text">${question.question}</div>
                <div class="question-definition">💡 ${question.definition}</div>
                <div class="question-answer" id="answer-${index}">
                    ${question.answer}
                </div>
            `;
            
            container.appendChild(questionCard);
            console.log('Created card for question', index + 1, ':', question.question);
        });
        
        console.log('All questions rendered successfully');
        
        // Update progress
        const progressEl = document.getElementById('questionProgress');
        if (progressEl) {
            progressEl.textContent = `1/${questions.length}`;
            console.log('Progress updated to 1/' + questions.length);
        }
    } catch (error) {
        console.error('Error displaying questions:', error);
        container.innerHTML = '<p style="color: red; padding: 20px;">Error rendering questions: ' + error.message + '</p>';
    }
}

// Toggle answer visibility
function toggleAnswer(btn, index) {
    console.log('Toggling answer for question', index);
    
    const answerDiv = document.getElementById(`answer-${index}`);
    if (!answerDiv) {
        console.error('Answer div not found for index:', index);
        return;
    }
    
    const questionCard = btn.closest('.question-card');
    
    if (answerDiv.classList.contains('show')) {
        // Hide answer
        answerDiv.classList.remove('show');
        btn.classList.remove('open');
        if (questionCard) questionCard.classList.remove('active');
        console.log('Answer hidden');
    } else {
        // Show answer
        answerDiv.classList.add('show');
        btn.classList.add('open');
        if (questionCard) questionCard.classList.add('active');
        console.log('Answer shown');
    }
}

// Go back to subjects
function backToSubjects() {
    console.log('Going back to subjects...');
    
    // Hide questions section
    const practiceQuestionsSection = document.getElementById('practiceQuestions');
    if (practiceQuestionsSection) {
        practiceQuestionsSection.classList.remove('active-section');
        console.log('Practice questions section hidden');
    }
    
    // Show practice section
    const practiceSection = document.getElementById('practice');
    if (practiceSection) {
        practiceSection.classList.add('active-section');
        console.log('Practice section shown');
    }
    
    // Scroll to top
    setTimeout(() => scrollToTop(), 100);
}

// Call initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOMContentLoaded Event ===');
    console.log('practiceQuestions defined?', typeof practiceQuestions !== 'undefined');
    
    if (typeof practiceQuestions !== 'undefined') {
        console.log('practiceQuestions available with', Object.keys(practiceQuestions).length, 'subjects');
        initializePracticeSection();
    } else {
        console.warn('practiceQuestions not available yet, scheduling retry...');
        setTimeout(() => {
            console.log('Retry check - practiceQuestions defined?', typeof practiceQuestions !== 'undefined');
            initializePracticeSection();
        }, 500);
    }
});
 



