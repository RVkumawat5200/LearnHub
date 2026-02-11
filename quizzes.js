// quizzes.js
// Keeps URLs hidden in the UI; opens external quiz pages in a new tab

const quizzesMap = {
    // DSA - general page (topic buttons open same resource)
    dsa_arrays: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_linkedlist: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_stack: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_queue: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_trees: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_graphs: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_heap: 'https://www.geeksforgeeks.org/data-structure-gq/',
    dsa_hashing: 'https://www.geeksforgeeks.org/data-structure-gq/',

    // Python
    py_variables: 'https://www.geeksforgeeks.org/python-multiple-choice-questions/',
    py_control: 'https://www.geeksforgeeks.org/python-multiple-choice-questions/',
    py_lists: 'https://www.geeksforgeeks.org/python-multiple-choice-questions/',
    py_functions: 'https://www.geeksforgeeks.org/python-multiple-choice-questions/',
    py_oop: 'https://www.geeksforgeeks.org/python-multiple-choice-questions/',

    // C
    c_arrays: 'https://www.geeksforgeeks.org/c/c-compound-data-type-quizzes/',
    c_pointers: 'https://www.geeksforgeeks.org/c/c-compound-data-type-quizzes/',
    c_strings: 'https://www.geeksforgeeks.org/c/c-compound-data-type-quizzes/',
    c_structures: 'https://www.geeksforgeeks.org/c/c-compound-data-type-quizzes/',

    // C++
    cpp_basics: 'https://www.geeksforgeeks.org/cpp/c-programming-multiple-choice-questions/',
    cpp_arrays: 'https://www.geeksforgeeks.org/cpp/c-programming-multiple-choice-questions/',
    cpp_oop: 'https://www.geeksforgeeks.org/cpp/c-programming-multiple-choice-questions/'
};

function openTopic(key) {
    const url = quizzesMap[key];
    if (!url) {
        alert('Link not available');
        return;
    }
    // open in a new tab without revealing the URL visually in the UI
    window.open(url, '_blank');
}

// optional: allow Enter key navigation on focused buttons
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.classList.contains('link-btn')) {
        const key = document.activeElement.dataset.key;
        if (key) openTopic(key);
    }
});

 
// ===== SEARCH QUIZ TOPICS & CARDS =====
function searchCodeLibrary() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    const query = input.value.toLowerCase().trim();

    const cards = document.querySelectorAll('.topic-card');

    cards.forEach(card => {
        let matchFound = false;

        // Check card title + description
        const cardText = card.innerText.toLowerCase();
        if (cardText.includes(query)) {
            matchFound = true;
        }

        // Show / hide card
        card.style.display = matchFound ? 'block' : 'none';
    });
}
