const videos = [
    {
        id: 'vid1',
        title: 'Indian Space Research\nOrganization',
        description: 'Welcome to the'
    },

    {
        id: 'vid2',
        description: 'Mission',
        title: 'Chandrayaan 3',
    },

    {
        id: 'vid3',
        title: 'Bhoonidhi',
        description: 'Project'
    },
    {
        id: 'vid4',
    title: 'Mangalyaan(Mars Orbiter Mission)',
    description: 'Project'
    }
];

let currentVideoIndex = 0;

function playVideo(index) {
    const videoElement = document.getElementById(videos[index].id);
    const container = videoElement.parentElement;

    container.style.display = 'block';
    videoElement.play();

    videoElement.addEventListener('ended', function onEnded() {
        videoElement.removeEventListener('ended', onEnded);
        container.style.display = 'none';
        currentVideoIndex++;
        if (currentVideoIndex >= videos.length) {
            currentVideoIndex = 0; // Reset index to loop back to the first video
        }
        playVideo(currentVideoIndex);
    });

    updateContent(container, videos[index].title, videos[index].description);
}

function updateContent(container, title, description) {
    container.querySelector('h2').textContent = title;
    container.querySelector('p').textContent = description;
}

document.addEventListener('DOMContentLoaded', function () {
    playVideo(currentVideoIndex);
});

// this is the flash tag
const newsItems = [
    "Aditya-L1 Solar observatory is successfully.",
    "ISRO launches GSAT-30 satellite to boost communication.",
    "Chandrayaan-2 sends new images of the lunar surface.",
    "ISRO announces new Gaganyaan mission timeline."
];

let currentNewsIndex = 0;

function updateFlashNews() {
    const flashNewsContent = document.getElementById('flash-news-content');
    const newsContent = newsItems[currentNewsIndex];
    flashNewsContent.innerText = newsContent;
    flashNewsContent.style.animation = 'none';
    flashNewsContent.offsetHeight; // Trigger reflow to restart animation
    flashNewsContent.style.animation = '';
    updateDots();
    currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
}

function showNews(index) {
    currentNewsIndex = index;
    updateFlashNews();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentNewsIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

setInterval(updateFlashNews, 5000); // Update news every 5 seconds
window.onload = updateFlashNews; // Initial call to display the first news item


// this is the for latest news section

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    updateDots();
    updateButtons();
}

function nextSlide() {
    if (currentSlide < document.querySelectorAll('.carousel-item').length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

function updateDots() {
    const dotsContainer = document.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';
    for (let i = 0; i < document.querySelectorAll('.carousel-item').length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
        dot.setAttribute('onclick', `showSlide(${i})`);
        dotsContainer.appendChild(dot);
    }
}

function updateButtons() {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');

    if (currentSlide === 0) {
        prevButton.classList.add('inactive');
        prevButton.classList.remove('active');
    } else {
        prevButton.classList.add('active');
        prevButton.classList.remove('inactive');
    }

    if (currentSlide === document.querySelectorAll('.carousel-item').length - 1) {
        nextButton.classList.add('inactive');
        nextButton.classList.remove('active');
    } else {
        nextButton.classList.add('active');
        nextButton.classList.remove('inactive');
    }
}

// Initialize the carousel
showSlide(currentSlide);




// Select the elements you want to interact with
// Select the elements you want to interact with
const centersNames = document.querySelector('.Headquarters');
const svgCircle = document.querySelector('#INKA');

// Add event listener for hover effect
centersNames.addEventListener('mouseenter', function () {
    svgCircle.style.transition = 'fill 0.3s ease'; // Apply transition to fill property
    svgCircle.setAttribute('fill', '#575558'); // Change SVG fill color on hover
});

centersNames.addEventListener('mouseleave', function () {
    svgCircle.setAttribute('fill', '#252328'); // Reset SVG fill color on hover out
});


const HSFC = document.querySelector('.HSFC');
const HSFCsvg = document.querySelector('#INKA');
HSFC.addEventListener('mouseenter', function () {
    HSFCsvg.style.transition = 'fill 0.3s ease'
    HSFCsvg.setAttribute('fill', '#575558')
});

HSFC.addEventListener('mouseleave', function () {
    HSFCsvg.setAttribute('fill', '#252328');
})

// Select the elements you want to interact with
const IIRS = document.querySelector('.IIRS');
const IIRSsvg = document.querySelector('#INUT');

// Add event listener for hover effect
IIRS.addEventListener('mouseenter', function () {
    IIRSsvg.style.transition = 'fill 0.3s ease'; // Apply transition to fill property
    IIRSsvg.setAttribute('fill', '#575558'); // Change SVG fill color on hover
});

IIRS.addEventListener('mouseleave', function () {
    IIRSsvg.setAttribute('fill', '#252328'); // Reset SVG fill color on hover out
});


const IPRC = document.querySelector('.IPRC');
const IPRCsvg = document.querySelector('#INTN');
IPRC.addEventListener('mouseenter', function () {
    IPRCsvg.style.transition = 'fill 0.3s ease';
    IPRCsvg.setAttribute('fill', '#575558');
});

IPRC.addEventListener('mouseleave', function () {
    IPRCsvg.setAttribute('fill', '#252328');
});


// Select the elements you want to interact with
const ISTRAC = document.querySelector('.ISTRAC');
const ISTRACsvg = document.querySelector('#INKA');

// Add event listener for hover effect
ISTRAC.addEventListener('mouseenter', function () {
    ISTRACsvg.style.transition = 'fill 0.3s ease'; // Apply transition to fill property
    ISTRACsvg.setAttribute('fill', '#575558'); // Change SVG fill color on hover
});

ISTRAC.addEventListener('mouseleave', function () {
    ISTRACsvg.setAttribute('fill', '#252328'); // Reset SVG fill color on hover out
});
