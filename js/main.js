// Project media data - replace with your actual videos/images
const projectMedia = {
    'impulse': {
        media: [
            //{ type: 'image', src: 'images/impulse1.jpg', alt: 'Impulse Game Screenshot 1' },
            //{ type: 'image', src: 'images/impulse2.jpg', alt: 'Impulse Game Screenshot 2' },
            { type: 'video', src: 'https://drive.google.com/file/d/12K8QKalcR_QBhNWGzTsUqwftGYw-M0w9/preview', title: 'Impulse Gameplay' }
        ],
        description: 'Impulse is a next-gen FPS shooter with tactical combat and skill-based gunplay. This video showcases gameplay mechanics and multiplayer features.'
    },
    'champions': {
        media: [
            { type: 'image', src: 'images/champions1.jpg', alt: 'Champions Arena Screenshot 1' },
            { type: 'image', src: 'images/champions2.jpg', alt: 'Champions Arena Screenshot 2' },
            { type: 'image', src: 'images/champions3.jpg', alt: 'Champions Arena Screenshot 3' }
        ],
        description: 'Champions Arena features MOBA-style combat with 1v1, 2v2, and 3v3 battles. The game includes dynamic map loading and unique character abilities.'
    },
    '6ball': {
        type: 'video',
        src: 'https://www.youtube.com/embed/ANOTHER_VIDEO_ID',
        description: '6Ball Cricket offers fast-paced 1-over cricket matches with real-time multiplayer functionality and tournament systems.'
    },
    'mpl': {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        description: 'MPL Cricket simulates professional T20 league cricket with realistic batting, bowling, and fielding mechanics.'
    },
    'tankio': {
        type: 'video',
        src: 'https://www.youtube.com/embed/TANKIO_VIDEO_ID',
        description: 'Tank.io features real-time multiplayer tank battles with strategic gameplay and power-up systems.'
    },
    'stepout': {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
        description: 'Step Out And Learn is an educational platform that allows teachers to track student location during outdoor learning activities.'
    }
    // Add similar structures for other projects
};

let currentProject = null;
let currentMediaIndex = 0;

function openModal(projectId) {
    currentProject = projectId;
    currentMediaIndex = 0;
    updateModalContent();

    const modal = document.getElementById('projectModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function navigateGallery(direction) {
    const project = projectMedia[currentProject];
    currentMediaIndex += direction;

    // Wrap around if at beginning/end
    if (currentMediaIndex < 0) {
        currentMediaIndex = project.media.length - 1;
    } else if (currentMediaIndex >= project.media.length) {
        currentMediaIndex = 0;
    }

    updateModalContent();
}

function updateModalContent() {
    const mediaContainer = document.getElementById('modal-media-container');
    const descriptionContainer = document.getElementById('modal-description');
    const thumbnailContainer = document.querySelector('.thumbnail-container');
    const project = projectMedia[currentProject];
    const media = project.media[currentMediaIndex];

    // Clear previous content
    mediaContainer.innerHTML = '';
    thumbnailContainer.innerHTML = '';

    // Add current media
    if (media.type === 'video') {
        mediaContainer.innerHTML = `
            <div class="video-container">
                <iframe src="${media.src}" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen title="${media.title || ''}"></iframe>
            </div>
        `;
    } else {
        mediaContainer.innerHTML = `
            <div class="image-container">
                <img src="${media.src}" alt="${media.alt}">
            </div>
        `;
    }

    // Add description
    descriptionContainer.innerHTML = `<p>${project.description}</p>`;

    // Add thumbnails
    project.media.forEach((item, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = item.type === 'video' ?
            `https://img.youtube.com/vi/${item.src.split('/embed/')[1]}/0.jpg` :
            item.src;
        thumbnail.alt = item.alt || '';
        thumbnail.className = `thumbnail ${index === currentMediaIndex ? 'active' : ''}`;
        thumbnail.onclick = () => {
            currentMediaIndex = index;
            updateModalContent();
        };
        thumbnailContainer.appendChild(thumbnail);
    });
}

// Close modal when clicking outside content
window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('projectModal');
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            navigateGallery(-1);
        } else if (e.key === 'ArrowRight') {
            navigateGallery(1);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});