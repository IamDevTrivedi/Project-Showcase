const projects = [
    {
        name: 'Notes Keeping App',
        imageUrl: 'images/1.png',
        description: 'A web application for creating, storing, and managing personal notes with a user-friendly interface.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Notes-Keeping-App/',
        repoUrl: 'https://github.com/IamDevTrivedi/Notes-Keeping-App'
    },
    {
        name: 'Clock App',
        imageUrl: 'images/2.png',
        description: 'An interactive clock application displaying current time and potentially additional time-related features.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Clock-App/',
        repoUrl: 'https://github.com/IamDevTrivedi/Clock-App'
    },
    {
        name: 'Text-To-Speech Convertor',
        imageUrl: 'images/3.5.png',
        description: 'A tool that converts written text into spoken words, useful for accessibility and content consumption.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Text-To-Speech-Convertor/',
        repoUrl: 'https://github.com/IamDevTrivedi/Text-To-Speech-Convertor'
    },
    {
        name: 'Date-Time Calculator',
        imageUrl: 'images/3.png',
        description: 'An application for performing various calculations related to dates and times, such as duration between dates.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Date-Time-Calculator/',
        repoUrl: 'https://github.com/IamDevTrivedi/Date-Time-Calculator'
    },
    {
        name: 'QR Code Generator',
        imageUrl: 'images/4.png',
        description: 'A tool that creates QR codes from user input, useful for sharing information in a scannable format.',
        hostingUrl: 'https://iamdevtrivedi.github.io/QR-code-generator/',
        repoUrl: 'https://github.com/IamDevTrivedi/QR-code-generator'
    },
    {
        name: 'Sudoku Maker Solver',
        imageUrl: 'images/5.png',
        description: 'An application that can both generate Sudoku puzzles and solve them, demonstrating algorithm implementation.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Sudoku-Maker-Solver/',
        repoUrl: 'https://github.com/IamDevTrivedi/Sudoku-Maker-Solver'
    },
    {
        name: 'Secure Password Generator',
        imageUrl: 'images/6.png',
        description: 'A tool for generating strong, secure passwords based on user-defined criteria to enhance online security.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Secure-Password-Generator-cpp/',
        repoUrl: 'https://github.com/IamDevTrivedi/Secure-Password-Generator-cpp'
    },
    {
        name: 'Pomodoro Timer',
        imageUrl: 'images/7.png',
        description: 'A productivity tool implementing the Pomodoro Technique, helping users manage work intervals and breaks.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Pomodoro-Timer/',
        repoUrl: 'https://github.com/IamDevTrivedi/Pomodoro-Timer'
    },
    {
        name: 'Tic-Tac-Toe',
        imageUrl: 'images/8.png',
        description: 'A classic game of Tic-Tac-Toe implemented as a web application, demonstrating basic game logic.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Tic-Tac-Toe/',
        repoUrl: 'https://github.com/IamDevTrivedi/Tic-Tac-Toe'
    },
    {
        name: 'Rock Paper Scissors',
        imageUrl: 'images/9.png',
        description: 'An interactive implementation of the classic game Rock Paper Scissors, playable against the computer.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Rock-Paper-Scissors/',
        repoUrl: 'https://github.com/IamDevTrivedi/Rock-Paper-Scissors'
    },
    {
        name: 'Coin Flipper',
        imageUrl: 'images/10.png',
        description: 'A simple application that simulates coin flips, useful for making random binary decisions.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Coin-Flipper/',
        repoUrl: 'https://github.com/IamDevTrivedi/Coin-Flipper'
    },
    {
        name: 'Contact Me',
        imageUrl: 'images/11.png',
        description: 'A contact form or page allowing visitors to send messages or inquiries directly to the developer.',
        hostingUrl: 'https://iamdevtrivedi.github.io/Contact-Me/',
        repoUrl: 'https://github.com/IamDevTrivedi/Contact-Me'
    }
];

function createProjectCard(name, imageUrl, description, hostingUrl, repoUrl) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const projectName = document.createElement('h3');
    projectName.className = 'project-name';
    projectName.classList.add("name") ; 
    projectName.textContent = name;

    const image = document.createElement('div');
    image.className = 'project-image';
    image.style.backgroundImage = `url(${imageUrl})`;

    const info = document.createElement('div');
    info.className = 'project-info';

    const desc = document.createElement('p');
    desc.className = 'project-description';
    desc.textContent = description.split(' ').slice(0, 20).join(' '); // Limit to 20 words

    const links = document.createElement('div');
    links.className = 'project-links';

    const hostLink = document.createElement('a');
    hostLink.href = hostingUrl;
    hostLink.target = '_blank';
    hostLink.textContent = 'View Project';

    const repoLink = document.createElement('a');
    repoLink.href = repoUrl;
    repoLink.target = '_blank';
    repoLink.textContent = 'GitHub Repository';

    links.appendChild(hostLink);
    links.appendChild(repoLink);
    info.appendChild(desc);
    info.appendChild(links);
    card.appendChild(projectName);
    card.appendChild(image);
    card.appendChild(info);

    return card;
}

const projectGrid = document.getElementById('projectGrid');
projects.forEach(project => {
    const card = createProjectCard(project.name, project.imageUrl, project.description, project.hostingUrl, project.repoUrl);
    projectGrid.appendChild(card);
});