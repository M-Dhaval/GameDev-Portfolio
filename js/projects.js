// Project data array
const projects = [
    {
        id: "impulse",
        title: "Impulse",
        subtitle: "The Next-Gen FPS Competitive Multiplayer Shooter",
        description: "An exclusive PC FPS featuring tactical combat, skill-based gunplay, and next-gen graphics for an immersive competitive experience.",
        icon: "images/Games/Impulse/icon.png",
        thumbnail: "images/Games/Impulse/Thumbnail.png",
        //tags: ["FPS"],
        tech: ["Unity", "C#", "AWS-Powered Servers", "Multiplayer", "Opsive"]
        // media: [
        //     { type: "image", url: "images/Games/Impulse/Thumbnail.png" },
        //     { type: "image", url: "images/Games/Ludo_Speed/Thumbnail.webp" },
        //     { type: "image", url: "images/Games/Ludo_Cash/Thumbnail.webp" },
        //     { type: "video", url: "https://www.youtube.com/embed/PtjGxmFIM5I" }
        // ],
        // features: [
        //     "Realistic weapon mechanics",
        //     "Competitive ranking system",
        //     "Multiple game modes",
        //     "Dedicated server infrastructure"
        // ]
    },
    {
        id: "champions-arena",
        title: "Champions Arena",
        subtitle: "MOBA-style Third-Person Shooter (TPS)",
        description: "Featuring 1v1, 2v2, and 3v3 battles with runtime map loading and three unique maps for dynamic gameplay.",
        icon: "images/Games/ChampionsArena/icon.webp",
        thumbnail: "images/Games/ChampionsArena/Thumbnail.png",
        //tags: ["MOBA", "Shooter"],
        tech: ["Unity", "C#", "Google Ads", "Firebase", "PlayFab"]
    },
    {
        id: "6ball-cricket",
        title: "6Ball Cricket",
        subtitle: "Real-time multiplayer 3D cricket game",
        description: "Features 1-over (6-ball) gameplay with an exciting tournament system for competitive matches.",
        icon: "images/Games/6Ball_Cricket/icon.png",
        thumbnail: "images/Games/6Ball_Cricket/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "WebSocket", "Payment Gateway", "Firebase", "Facebook Integration"]
    },
    {
        id: "mpl-cricket",
        title: "MPL Cricket",
        subtitle: "Madhya Pradesh League: Scindia Cup Cricket",
        description: "A franchise-based professional T20 cricket league game featuring realistic gameplay mechanics and multiple game modes.",
        icon: "images/Games/MPL_Cricket/icon.png",
        thumbnail: "images/Games/MPL_Cricket/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Gameplay Mechanics", "League System"]
    },
    {
        id: "tank.io-demo",
        title: "Tank.io - Demo",
        subtitle: "Multiplayer tank battle game",
        description: "Features real-time combat and strategic gameplay with multiplayer functionality.",
        icon: "images/Games/Tank.io/icon.JPG",
        thumbnail: "images/Games/Tank.io/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Photon PUN", "Multiplayer"]
    },
    {
        id: "step-out-and-learn",
        title: "Step Out And Learn",
        subtitle: "Location-Based Educational Project",
        description: "A teacher assigns an activity to a student and can track the student's location in real time during the activity.",
        icon: "images/Games/StepOutAndLearn/icon.JPG",
        thumbnail: "images/Games/StepOutAndLearn/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Socket.io", "Maps API"]
    },
    {
        id: "weapon-craft-run",
        title: "Weapon Craft Run and Guns Hero",
        subtitle: "Weapon Craft Run – Shoot, Collect, and Build the Ultimate Firearm",
        description: "Shoot the obstacles & doors, Collect the chargers which you load, Upgrade your gun and evolve!",
        icon: "images/Games/Weapon_Craft/icon.webp",
        thumbnail: "images/Games/Weapon_Craft/Thumbnail.png",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Ad Mediation"]
    },
    {
        id: "color-rings",
        title: "Tic Tac Toe Pro : Color Rings",
        subtitle: "",
        description: "Step into a colorful world of strategy with Color Rings Tic Tac Toe: 2 3 4 Multiplayer XOXO! Whether you’re challenging the CPU, playing with a friend, or joining a 4-player online match, this game is all about smart moves and quick thinking. It’s easy to learn, fun for all ages, and perfect for players who love a strategic twist on the classic Tic Tac Toe!.",
        icon: "images/Games/Color_Ring_Puzzle/icon.webp",
        thumbnail: "images/Games/Color_Ring_Puzzle/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN"]
    },
    {
        id: "crokinole",
        title: "Crokinole Mobile:Carrom Board",
        subtitle: "",
        description: "Dive into the captivating world of Crokinole, a classic Canadian multiplayer board game dating back to the 1860s, now beautifully reimagined for your mobile device. Experience the thrill of this circular track-based new carrom game, where precision and strategy reign supreme. Challenge players from every corner of the globe, compete against your friends, or host private matches for an unforgettable tabletop gaming experience.",
        icon: "images/Games/Crokinole_Mobile/icon.webp",
        thumbnail: "images/Games/Crokinole_Mobile/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN"]
    },
    {
        id: "ludo-speed",
        title: "Ludo Speed - Dice Game Fun!",
        subtitle: "",
        description: "Get ready to relive the fun of the classic Ludo game right on your phone! Challenge your friends, family, or the computer in this exciting board game! 🎯 <br> Ludo King follows the traditional rules and the old school look of the Ludo game. Just like the kings and queens of India's golden age, your fate depends on the roll of the Ludo's dice and your strategy of moving the tokens effectively.",
        icon: "images/Games/Ludo_Speed/icon.webp",
        thumbnail: "images/Games/Ludo_Speed/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads"]
    },
    {
        id: "ludo-cash",
        title: "Ludo Cash - Win Real Money",
        subtitle: "",
        description: "Get ready to relive the fun of the classic Ludo game right on your phone! Challenge your friends, family, or the computer in this exciting board game! 🎯 <br> Step into the world of Ludo Cash - Win Real Money, where your skills can earn you real cash prizes! Compete in thrilling tournaments and win cash prizes without spending a dime. No deposits, subscriptions, or in-app purchases required—just pure fun and rewards!",
        icon: "images/Games/Ludo_Cash/icon.webp",
        thumbnail: "images/Games/Ludo_Cash/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "ironSource", "Socket.io"]
    },
    {
        id: "perfect-duet",
        title: "Perfect Duet: Kitty Music Beat",
        subtitle: "",
        description: "😺 Get ready to purr along with the cutest musical adventure! 😻 <br> Join adorable cats as they sing and dance their way through exciting musical levels! 🐾 Tap to the rhythm 🎵 and help the kitties hit every note 🎶 in this pawsome, relaxing, and fun game. 🎸🎤",
        icon: "images/Games/Perfect_Duet/icon.webp",
        thumbnail: "images/Games/Perfect_Duet/Thumbnail.webp",
        //tags: ["Sports", "Multiplayer"],
        tech: ["Unity", "C#", "Firebase", "Google Ads"]
    },
    // {
    //     id: "star-square",
    //     title: "Star Square - Multiplayer Game",
    //     subtitle: "",
    //     description: "Play Star Square is with the online real players, This is a new Board Game. This is basically DOT (🔵) CONNECTING SQUARE MAKING GAME. Real time Chat🗨️/ Fantastic Emojis😍/ real time Talk 📞/ Real time multiplayer (more than 1 player, just like ludo, Carrom ) on this board game. THIS IS THE BEST LUDO ALTERNATIVE GAME.",
    //     icon: "images/Games/Star_Square/icon.webp",
    //     thumbnail: "images/Games/Star_Square/Thumbnail.webp",
    //     //tags: ["Sports", "Multiplayer"],
    //     tech: ["Unity", "C#", "Firebase", "Google Ads", "Photon PUN", "Real-Time Chat", "Multiplayer"]
    // }
    // Continue with all other projects...
];

// Function to generate project cards
function generateProjectCards() {
    const container = document.getElementById('projects-container');

    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.projectId = project.id;
        card.innerHTML = `
            <img class="game-icon" src="${project.icon}" alt="${project.title} Icon">
            <div class="project-image-container">
                <div class="project-image" style="background-image: url('${project.thumbnail}')"></div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-subtitle">${project.subtitle}</p>
                <p class="project-description">${project.description}</p>
                <div class="tech-list">
                    ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        // Add click event listener
        // card.addEventListener('click', () => openProjectModal(index));

        container.appendChild(card);
    });


    // Add event listeners for modal controls
    // document.querySelector('.close').addEventListener('click', closeModal);
    // document.querySelector('.left-arrow').addEventListener('click', () => navigateGallery(-1));
    // document.querySelector('.right-arrow').addEventListener('click', () => navigateGallery(1));
}

// Function to open project modal
function openProjectModal(projectIndex) {
    const project = projects[projectIndex];
    const modal = document.getElementById('projectModal');
    const mediaContainer = document.getElementById('modal-media-container');
    const descriptionContainer = document.getElementById('modal-description');
    const thumbnailContainer = document.querySelector('.thumbnail-container');

    // Clear previous content
    mediaContainer.innerHTML = '';
    descriptionContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    // Set current project index for navigation
    modal.dataset.currentProject = projectIndex;

    // Add media (first item by default)
    if (project.media && project.media.length > 0) {
        updateMediaDisplay(project.media[0]);

        // Add thumbnails
        project.media.forEach((media, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            thumbnail.src = media.type === 'image' ? media.url : `https://img.youtube.com/vi/${media.url.split('/').pop()}/default.jpg`;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.dataset.mediaIndex = index;
            thumbnail.addEventListener('click', () => {
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');

                // Update media display
                updateMediaDisplay(project.media[index]);
            });
            thumbnailContainer.appendChild(thumbnail);
        });

    }

    // Add project details
    descriptionContainer.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-description">${project.longDescription || project.description}</p>
        
        ${project.features ? `
        <div class="project-features">
            <h3>Key Features</h3>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        ` : ''}
        
        <div class="tech-list">
            <h3>Technologies Used</h3>
            ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
        </div>
    `;

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Add this variable at the top of your file to track the current video
let currentVideoElement = null;

// Function to update media display
function updateMediaDisplay(media) {
    const mediaContainer = document.getElementById('modal-media-container');

    // Pause any currently playing video
    if (currentVideoElement) {
        currentVideoElement.pause();
        currentVideoElement = null;
    }

    if (media.type === 'image') {
        mediaContainer.innerHTML = `
            <div class="image-container">
                <img src="${media.url}" alt="Project Screenshot" style="max-width: 100%; max-height: 100%;">
            </div>
        `;
    } else if (media.type === 'video') {
        mediaContainer.innerHTML = `
            <div class="video-container">
                <iframe src="${media.url}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;

        // Track the new video element
        currentVideoElement = mediaContainer.querySelector('iframe');
    }
}

// Function to navigate gallery
function navigateGallery(direction) {
    const modal = document.getElementById('projectModal');
    const currentProjectIndex = parseInt(modal.dataset.currentProject);
    const project = projects[currentProjectIndex];

    if (!project.media || project.media.length <= 1) return;

    const currentThumbnail = document.querySelector('.thumbnail.active');
    let currentMediaIndex = currentThumbnail ? parseInt(currentThumbnail.dataset.mediaIndex) : 0;
    let newMediaIndex = currentMediaIndex + direction;

    // Wrap around
    if (newMediaIndex < 0) newMediaIndex = project.media.length - 1;
    if (newMediaIndex >= project.media.length) newMediaIndex = 0;

    // Update display
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    document.querySelector(`.thumbnail[data-media-index="${newMediaIndex}"]`).classList.add('active');
    updateMediaDisplay(project.media[newMediaIndex]);
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling

    // Pause any playing video when closing
    if (currentVideoElement) {
        // Replace the iframe with a blank one to stop playback
        currentVideoElement.src = '';
        currentVideoElement = null;
    }
}

// Close modal when clicking outside content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Generate cards when DOM is loaded
document.addEventListener('DOMContentLoaded', generateProjectCards);