/* QUESTIONS array (100 items) - hardcoded from user-provided MCQs */
const QUESTIONS = [
    { "question": "Which of the following is correct about Python?", "options": ["Compiled only", "Interpreted only", "Both compiled and interpreted", "None"], "answer": "c" },
    { "question": "What is the correct file extension for Python files?", "options": [".py", ".pt", ".pyt", ".pyth"], "answer": "a" },
    { "question": "Which symbol is used to comment a single line in Python?", "options": ["//", "/* */", "#", "[]"], "answer": "c" },
    { "question": "Python code blocks are defined using:", "options": ["{}", "()", "indentation", "begin/end"], "answer": "c" },
    { "question": "Which function is used to display output?", "options": ["echo()", "print()", "write()", "out()"], "answer": "b" },
    { "question": "What will type(10) return?", "options": ["float", "int", "string", "list"], "answer": "b" },
    { "question": "Which of the following is NOT a valid variable name?", "options": ["name", "_age", "2value", "value2"], "answer": "c" },
    { "question": "Python ignores which keyword used as a placeholder?", "options": ["null", "continue", "pass", "skip"], "answer": "c" },
    { "question": "What is the output of print(10/2)?", "options": ["5", "5.0", "2", "2.0"], "answer": "b" },
    { "question": "Python is case-sensitive.", "options": ["True", "False"], "answer": "a" },
    { "question": "What data type is “123”?", "options": ["int", "float", "str", "list"], "answer": "c" },
    { "question": "What is the type of True?", "options": ["int", "bool", "string", "logical"], "answer": "b" },
    { "question": "What will int(\"7\") return?", "options": ["\"7\"", "7", "error", "7.0"], "answer": "b" },
    { "question": "Which function shows the type of a variable?", "options": ["typeof()", "what()", "type()", "datatype()"], "answer": "c" },
    { "question": "Which of these is immutable?", "options": ["list", "set", "tuple", "dictionary"], "answer": "c" },
    { "question": "What will float(5) return?", "options": ["5", "\"5\"", "5.0", "error"], "answer": "c" },
    { "question": "What is the correct variable name?", "options": ["user-name", "user_name", "user name", "username#"], "answer": "b" },
    { "question": "Which is a valid assignment?", "options": ["x == 5", "5 = x", "x = 5", "assign(x -> 5)"], "answer": "c" },
    { "question": "Which data type allows duplicate items?", "options": ["set", "tuple", "list", "dictionary"], "answer": "c" },
    { "question": "Variable defined inside a function is:", "options": ["global", "local", "static", "public"], "answer": "b" },
    { "question": "Lists are written using:", "options": ["()", "{}", "[]", "<>"], "answer": "c" },
    { "question": "Tuples are:", "options": ["mutable", "immutable", "changeable anytime", "sorted automatically"], "answer": "b" },
    { "question": "Which removes duplicates automatically?", "options": ["list", "tuple", "set", "dictionary"], "answer": "c" },
    { "question": "Which method adds an item to a list?", "options": ["add()", "append()", "insert()", "push()"], "answer": "b" },
    { "question": "Which dictionary method gets a value?", "options": ["get()", "fetch()", "value()", "read()"], "answer": "a" },
    { "question": "What will len([1,2,3]) return?", "options": ["2", "3", "4", "error"], "answer": "b" },
    { "question": "How to access first element of a list?", "options": ["list(1)", "list[1]", "list[0]", "list{-1}"], "answer": "c" },
    { "question": "Set items are:", "options": ["ordered", "indexed", "unique", "duplicated"], "answer": "c" },
    { "question": "Dictionary keys must be:", "options": ["mutable", "immutable", "duplicated", "lists"], "answer": "b" },
    { "question": "Tuple indexing starts at:", "options": ["0", "1", "-1", "Any"], "answer": "a" },
    { "question": "Which operator is used for exponent?", "options": ["^", "**", "pow", "exp"], "answer": "b" },
    { "question": "What is the output of 5//2?", "options": ["2", "2.5", "3", "3.5"], "answer": "a" },
    { "question": "Which is a logical operator?", "options": ["++", "&&", "and", "<>"], "answer": "c" },
    { "question": "% operator gives:", "options": ["quotient", "float division", "remainder", "exponent"], "answer": "c" },
    { "question": "Which is assignment?", "options": ["==", "=", ":=", "==="], "answer": "b" },
    { "question": "not True returns:", "options": ["True", "False", "None", "error"], "answer": "b" },
    { "question": "10 > 5 and 3 < 1 returns:", "options": ["True", "False", "1", "None"], "answer": "b" },
    { "question": "Which operator checks membership?", "options": ["in", "is", "has", "of"], "answer": "a" },
    { "question": "is checks:", "options": ["value", "reference", "type", "size"], "answer": "b" },
    { "question": "7 != 8 evaluates to:", "options": ["True", "False", "Error", "None"], "answer": "a" },
    { "question": "Python uses which keyword for else-if?", "options": ["elseif", "else if", "elif", "then"], "answer": "c" },
    { "question": "What will run if all conditions fail?", "options": ["elif", "if", "else", "none"], "answer": "c" },
    { "question": "Indentation in if statements is:", "options": ["optional", "required", "only for loops", "only decorative"], "answer": "b" },
    { "question": "Which is correct?", "options": ["if(x>5):", "if x>5", "if x>5:", "if (x>5)"], "answer": "c" },
    { "question": "Nested if means:", "options": ["if inside else", "if inside if", "else inside else", "none"], "answer": "b" },
    { "question": "if True: will:", "options": ["never run", "always run", "sometimes run", "cause error"], "answer": "b" },
    { "question": "elif can exist without if.", "options": ["True", "False"], "answer": "b" },
    { "question": "else can exist without if.", "options": ["True", "False"], "answer": "b" },
    { "question": "Python compares strings based on:", "options": ["length", "ASCII values", "number of characters", "type only"], "answer": "b" },
    { "question": "What is output?\n\nif 5>2:\n    print(\"A\")\nelse:\n    print(\"B\")", "options": ["A", "B", "AB", "Error"], "answer": "a" },
    { "question": "Which loop repeats a block?", "options": ["if", "for", "switch", "break"], "answer": "b" },
    { "question": "Which keyword stops the loop?", "options": ["pass", "stop", "break", "exit"], "answer": "c" },
    { "question": "Which keyword skips to next iteration?", "options": ["skip", "continue", "pass", "jump"], "answer": "b" },
    { "question": "How many times does this run?\n\nfor i in range(5):\n    print(i)", "options": ["4", "5", "6", "infinite"], "answer": "b" },
    { "question": "range(1,6) gives:", "options": ["1–5", "1–6", "0–5", "0–6"], "answer": "a" },
    { "question": "While loop runs until:", "options": ["variable undefined", "condition true", "condition false", "error"], "answer": "c" },
    { "question": "Nested loop means:", "options": ["loop inside another loop", "break inside loop", "loop outside condition", "none"], "answer": "a" },
    { "question": "Output?\n\nfor i in range(2):\n    for j in range(2):\n        print(\"X\")", "options": ["1", "2", "3", "4"], "answer": "d" },
    { "question": "Which loop is commonly used for iterables?", "options": ["for", "while", "do-while", "switch"], "answer": "a" },
    { "question": "Which statement does nothing?", "options": ["break", "continue", "pass", "skip"], "answer": "c" },
    { "question": "Function is created using:", "options": ["define", "func", "def", "function"], "answer": "c" },
    { "question": "Which is a function call?", "options": ["def hello():", "hello", "hello()", "call hello"], "answer": "c" },
    { "question": "Parameters in function definitions are:", "options": ["inputs", "outputs", "loops", "variables only"], "answer": "a" },
    { "question": "A function with no return returns:", "options": ["None", "0", "False", "Empty string"], "answer": "a" },
    { "question": "What are arguments?", "options": ["values passed to functions", "values returned", "local variables", "comments"], "answer": "a" },
    { "question": "What is default parameter?", "options": ["fixed value if no argument", "always required", "list only", "condition"], "answer": "a" },
    { "question": "Function body starts after:", "options": ["semicolon", "->", "colon", "#"], "answer": "c" },
    { "question": "Local variables exist:", "options": ["inside function only", "everywhere", "outside function only", "runtime only"], "answer": "a" },
    { "question": "What keyword sends value back?", "options": ["send", "return", "yield", "give"], "answer": "b" },
    { "question": "A function must return a value.", "options": ["True", "False"], "answer": "b" },
    { "question": "Which function takes input?", "options": ["scan()", "input()", "read()", "ask()"], "answer": "b" },
    { "question": "input() always returns:", "options": ["int", "float", "str", "bool"], "answer": "c" },
    { "question": "What will cause error?", "options": ["int(\"10\")", "float(\"3.5\")", "int(\"abc\")", "str(5)"], "answer": "c" },
    { "question": "Which converts number to string?", "options": ["str()", "int()", "cast()", "text()"], "answer": "a" },
    { "question": "x = int(input()) means input is:", "options": ["string", "converted to int", "list", "float"], "answer": "b" },
    { "question": "bool(0) gives:", "options": ["True", "False", "None", "Error"], "answer": "b" },
    { "question": "Casting is used to:", "options": ["rename variables", "convert data types", "delete variables", "compare values"], "answer": "b" },
    { "question": "Which conversion is valid?", "options": ["list(5)", "int(\"12\")", "set(\"12\", \"34\")", "dict(\"12\")"], "answer": "b" },
    { "question": "type(input()) outputs:", "options": ["bool", "int", "float", "str"], "answer": "d" },
    { "question": "list(\"abc\") returns:", "options": ["[\"abc\"]", "[\"a\",\"b\",\"c\"]", "error", "none"], "answer": "b" },
    { "question": "Variable inside function is:", "options": ["public", "local", "global", "static"], "answer": "b" },
    { "question": "To change a global variable inside function use:", "options": ["global", "public", "static", "open"], "answer": "a" },
    { "question": "Global variables exist:", "options": ["only inside function", "entire program", "inside loops only", "inside class only"], "answer": "b" },
    { "question": "Which will cause error?\n\nprint(x)\nx=5", "options": ["prints 5", "prints 0", "error", "prints None"], "answer": "c" },
    { "question": "Local variable with same name as global:", "options": ["changes global", "hides global", "deletes global", "error"], "answer": "b" },
    { "question": "Scope means:", "options": ["location", "accessibility", "data type", "name length"], "answer": "b" },
    { "question": "Variables inside loops are:", "options": ["local to loop", "global", "undefined", "static"], "answer": "b" },
    { "question": "What keyword deletes variable?", "options": ["delete", "remove", "del", "clear"], "answer": "c" },
    { "question": "Variables created in if-block are:", "options": ["local to block", "global (if outside function)", "static", "deleted after block"], "answer": "b" },
    { "question": "Which is valid?", "options": ["global x inside function", "static x", "define x", "public x"], "answer": "a" },
    { "question": "Python indentation default spaces:", "options": ["2", "4", "6", "8"], "answer": "b" },
    { "question": "What does this do?\n\nfor _ in range(5):\n    print(\"Hi\")", "options": ["error", "creates variable \"_\"", "runs 5 times ignoring loop variable", "prints once"], "answer": "c" },
    { "question": "Which is correct function syntax?", "options": ["def fun():", "func fun():", "def fun[]:", "fun():"], "answer": "a" },
    { "question": "Which returns keys of dictionary?", "options": ["key()", "keys()", "showkeys()", "getkeys()"], "answer": "b" },
    { "question": "len({1,2,3,3}) returns:", "options": ["3", "4", "5", "error"], "answer": "a" },
    { "question": "Which can store different data types?", "options": ["list", "tuple", "set", "all of them"], "answer": "d" },
    { "question": "Which gives reverse list?", "options": ["list.reverse()", "reversed(list)", "both", "none"], "answer": "c" },
    { "question": "What is printed?\n\nprint(\"2\" + \"3\")", "options": ["5", "23", "error", "6"], "answer": "b" },
    { "question": "Which operator checks identity?", "options": ["==", "is", "in", "!="], "answer": "b" },
    { "question": "What is output?\n\nx = [1,2,3]\nprint(len(x))", "options": ["2", "3", "4", "error"], "answer": "b" }
];

// --- App state
let idx = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = 0;
let selectedIndex = null;
let startTime = Date.now();
const total = QUESTIONS.length;

// DOM refs
const qNumber = document.getElementById('qNumber');
const qText = document.getElementById('qText');
const optionsList = document.getElementById('optionsList');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const feedback = document.getElementById('feedback');
const progressBar = document.querySelector('.progress > i');
const qProgressLabel = document.getElementById('qProgressLabel');
const sideQnum = document.getElementById('sideQnum');
const sideAnswered = document.getElementById('sideAnswered');
const sideCorrect = document.getElementById('sideCorrect');
const sideWrong = document.getElementById('sideWrong');
const timerEl = document.getElementById('timer');
const finalScreen = document.getElementById('finalScreen');
const finalScore = document.getElementById('finalScore');
const finalCorrect = document.getElementById('finalCorrect');
const finalWrong = document.getElementById('finalWrong');
const restartBtn = document.getElementById('restartBtn');
const reviewBtn = document.getElementById('reviewBtn');
const finishBtn = document.getElementById('finishBtn');

// store per-question user answers for optional review
const userAnswers = Array(total).fill(null);

function renderQuestion(i) {
    const item = QUESTIONS[i];
    qNumber.textContent = `Question ${i + 1} of ${total}`;
    qText.innerHTML = item.question.replace(/\n/g, '<br>');
    optionsList.innerHTML = '';
    selectedIndex = null;
    nextBtn.disabled = true;
    feedback.textContent = '';
    // create options a,b,c,d (or fewer)
    const labels = ['a', 'b', 'c', 'd'];
    item.options.forEach((opt, j) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.setAttribute('role', 'option');
        btn.setAttribute('tabindex', '0');
        btn.dataset.index = j;
        btn.innerHTML = `<div class="label">${labels[j] || (j + 1)}</div><div class="text">${opt}</div>`;
        optionsList.appendChild(btn);

        btn.addEventListener('click', () => {
            if (btn.classList.contains('disabled')) return;
            handleSelect(j);
        });
        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSelect(j);
            }
        });
    });

    // progress
    const pct = Math.round(((i) / total) * 100);
    progressBar.style.width = `${pct}%`;
    qProgressLabel.textContent = `Progress: ${pct}%`;
    sideQnum.textContent = `${i + 1} / ${total}`;
    sideAnswered.textContent = answered;
    sideCorrect.textContent = correctCount;
    sideWrong.textContent = wrongCount;

    // disable prev on first
    prevBtn.disabled = (i === 0);
    // hide final screen if visible
    finalScreen.classList.remove('show');
    document.getElementById('quizCard').setAttribute('aria-hidden', 'false');
}

function handleSelect(choiceIdx) {
    if (selectedIndex !== null) return; // already answered
    selectedIndex = choiceIdx;
    const item = QUESTIONS[idx];
    const labels = ['a', 'b', 'c', 'd'];
    const chosenLabel = labels[choiceIdx];
    userAnswers[idx] = chosenLabel;

    // highlight options, mark correct/wrong
    Array.from(optionsList.children).forEach((el) => {
        el.classList.add('disabled');
        const j = Number(el.dataset.index);
        const label = labels[j];
        if (label === item.answer) {
            el.classList.add('correct');
        }
        if (j === choiceIdx && label !== item.answer) {
            el.classList.add('wrong');
        }
    });

    // update counters
    answered++;
    if (chosenLabel === item.answer) {
        correctCount++;
        feedback.innerHTML = `<span style="color:var(--success); font-weight:700">Correct</span>`;
    } else {
        wrongCount++;
        // show the correct option text
        const correctIdx = ['a', 'b', 'c', 'd'].indexOf(item.answer);
        const correctText = item.options[correctIdx] ?? '—';
        feedback.innerHTML = `<span style="color:var(--danger); font-weight:700; margin-right: 12px">Wrong</span> Correct: <strong style="color:#e6eef8">${item.answer}. ${correctText}</strong>`;
    }

    sideAnswered.textContent = answered;
    sideCorrect.textContent = correctCount;
    sideWrong.textContent = wrongCount;

    nextBtn.disabled = false;
    // allow Enter to proceed now (handled globally)
}

nextBtn.addEventListener('click', () => {
    if (selectedIndex === null) {
        // nothing selected — safeguard (should be disabled)
        return;
    }
    if (idx < total - 1) {
        idx++;
        renderQuestion(idx);
        // auto-scroll to top of question for small screens
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // finish
        showResults();
    }
});

prevBtn.addEventListener('click', () => {
    if (idx > 0) {
        idx--;
        // when going back we do not undo previous answer counts to keep flow simple
        // but we show previously selected state if any
        renderQuestion(idx);
        // if previously answered, mark the options accordingly
        const prevAns = userAnswers[idx];
        if (prevAns !== null) {
            const labels = ['a', 'b', 'c', 'd'];
            const chosenIndex = labels.indexOf(prevAns);
            handleSelectAfterRender(chosenIndex);
        }
    }
});

// If we render a previously answered question, reapply the display
function handleSelectAfterRender(choiceIdx) {
    if (choiceIdx === -1) return;
    const item = QUESTIONS[idx];
    const labels = ['a', 'b', 'c', 'd'];
    Array.from(optionsList.children).forEach((el) => {
        el.classList.add('disabled');
        const j = Number(el.dataset.index);
        const label = labels[j];
        if (label === item.answer) {
            el.classList.add('correct');
        }
        if (j === choiceIdx && label !== item.answer) {
            el.classList.add('wrong');
        }
    });
    selectedIndex = choiceIdx;
    nextBtn.disabled = false;
}

// Finish now button
finishBtn.addEventListener('click', showResults);

// Keyboard shortcuts: 1-4 for options; Enter to Next
document.addEventListener('keydown', (e) => {
    // 1-4 (or Numpad1-4)
    if (e.key >= '1' && e.key <= '4') {
        const k = Number(e.key) - 1;
        const option = optionsList.querySelector(`[data-index="${k}"]`);
        if (option && !option.classList.contains('disabled')) {
            option.click();
        }
    }

    if (e.key === 'Enter') {
        if (!nextBtn.disabled) {
            nextBtn.click();
        }
    }

    if (e.key === 'ArrowLeft') {
        if (!prevBtn.disabled) prevBtn.click();
    }
    if (e.key === 'ArrowRight') {
        if (!nextBtn.disabled) nextBtn.click();
    }
});

// Timer
let timerInterval = setInterval(() => {
    const diff = Date.now() - startTime;
    const s = Math.floor(diff / 1000);
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    timerEl.textContent = `${mm}:${ss}`;
}, 1000);

function showResults() {
    // finalize progress bar full
    progressBar.style.width = `100%`;
    qProgressLabel.textContent = `Progress: 100%`;
    // hide quiz area and show final screen
    document.getElementById('quizCard').setAttribute('aria-hidden', 'true');
    finalScreen.classList.add('show');
    document.getElementById('qText').textContent = '';
    document.getElementById('optionsList').innerHTML = '';
    // compute score percent
    const scorePercent = Math.round((correctCount / total) * 100);
    finalScore.textContent = `${scorePercent}%`;
    finalCorrect.textContent = correctCount;
    finalWrong.textContent = wrongCount;
    // stop timer
    clearInterval(timerInterval);
    // scroll into view
    finalScreen.scrollIntoView({ behavior: 'smooth' });
}

restartBtn.addEventListener('click', () => {
    // reset state
    idx = 0;
    correctCount = 0;
    wrongCount = 0;
    answered = 0;
    selectedIndex = null;
    startTime = Date.now();
    for (let i = 0; i < userAnswers.length; i++) userAnswers[i] = null;
    timerEl.textContent = '00:00';
    timerInterval = setInterval(() => {
        const diff = Date.now() - startTime;
        const s = Math.floor(diff / 1000);
        const mm = String(Math.floor(s / 60)).padStart(2, '0');
        const ss = String(s % 60).padStart(2, '0');
        timerEl.textContent = `${mm}:${ss}`;
    }, 1000);
    renderQuestion(idx);
});

reviewBtn.addEventListener('click', () => {
    // Allow review: step through questions, showing chosen and correct
    idx = 0;
    renderQuestion(idx);
    // mark answered states from userAnswers
    if (userAnswers[idx] !== null) {
        const labels = ['a', 'b', 'c', 'd'];
        const chosen = userAnswers[idx];
        const chosenIdx = labels.indexOf(chosen);
        handleSelectAfterRender(chosenIdx);
    }
});

// initial render
renderQuestion(idx);

// Accessibility: focus first option on load
setTimeout(() => {
    const firstOpt = optionsList.querySelector('.option');
    if (firstOpt) firstOpt.focus();
}, 200);