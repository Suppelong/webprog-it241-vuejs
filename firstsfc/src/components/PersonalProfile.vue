<template>
  <div class="profile-page">
    
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">Beejay Carpio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">About Me</a></li>
                    <li class="nav-item"><a class="nav-link" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li>
                    <li class="nav-item"><a class="nav-link" href="#personal">Gallery</a></li>
                    <li class="nav-item"><a class="nav-link" href="#guestbook">Feedback</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="text-center text-white">
        <div class="container">
            <h1 class="display-4 fw-bold">Hello, I'm Beejay Carpio</h1>
            <p class="lead">IT Student | Gamer | Creative Thinker</p>
            <a href="#projects" class="btn btn-outline-light mt-3 rounded-pill px-4">View My Work</a>
        </div>
    </header>

    <section id="about" class="py-5">
        <div class="container">
            <div class="row align-items-center bg-white p-5 rounded shadow-sm">
                <div class="col-lg-4 text-center mb-4 mb-lg-0">
                    <img src="/images/Beejay.jpg" alt="Beejay Carpio" class="img-fluid rounded-circle profile-img shadow">
                </div>
                <div class="col-lg-8">
                    <h2 class="fw-bold mb-3 text-primary">About Me</h2>
                    <p class="text-secondary lh-lg">
                        I am currently pursuing a Bachelor’s degree in Information Technology at Asia Pacific College. 
                        In my free time, I enjoy playing both offline and online games. I also have a passion for reading 
                        manga, manhwa, and light novels.
                    </p>
                    
                    <div class="d-flex mt-4 gap-4">
                        <div class="text-center">
                            <i class="bi bi-controller fs-2 text-info"></i>
                            <p class="small text-muted">Gamer</p>
                        </div>
                        <div class="text-center">
                            <i class="bi bi-book fs-2 text-warning"></i>
                            <p class="small text-muted">Reader</p>
                        </div>
                        <div class="text-center">
                            <i class="bi bi-code-slash fs-2 text-danger"></i>
                            <p class="small text-muted">Coder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="education" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5 section-title">Education</h2>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="timeline">
                        <div class="timeline-item">
                            <span class="timeline-year">2024 - Present</span>
                            <h3 class="timeline-school">Asia Pacific College</h3>
                            <p class="timeline-degree">Bachelor of Science in Information Technology (BSIT)</p>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-year">2022 - 2024</span>
                            <h3 class="timeline-school">Paranaque National High School - Baclaran</h3>
                            <p class="timeline-degree">Senior High School | TVL Track</p>
                        </div>
                        <div class="timeline-item">
                            <span class="timeline-year">2019 - 2020</span>
                            <h3 class="timeline-school">Baclaran ALS Center</h3>
                            <p class="timeline-degree">Alternative Learning System (ALS) Completion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5 section-title">My Projects</h2>
            <div class="row g-4">
                <div class="col-md-4" v-for="(img, index) in projectImages" :key="index">
                    <div class="card h-100 shadow-sm border-0 project-card cursor-pointer" @click="openModal(img.src)">
                        <div class="img-wrapper">
                            <img :src="img.src" class="card-img-top" :alt="img.alt">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ img.title }}</h5>
                            <p class="card-text text-muted small">{{ img.caption }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="personal" class="py-5 bg-white">
        <div class="container">
            <h2 class="text-center mb-5 section-title">Life & Hobbies</h2>
            <div class="row g-4">
                <div class="col-md-4" v-for="(img, index) in personalImages" :key="index">
                    <div class="card h-100 shadow-sm border-0 project-card cursor-pointer" @click="openModal(img.src)">
                        <div class="img-wrapper">
                            <img :src="img.src" class="card-img-top" :alt="img.alt">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ img.title }}</h5>
                            <p class="card-text text-muted small">{{ img.caption }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="guestbook" class="py-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center mb-4">
                        <h2 class="section-title">Leave a comment</h2>
                        <p class="text-muted">I'd love to hear your feedback!</p>
                    </div>
                    
                    <div class="card p-4 shadow border-0 bg-light">
                        <div v-if="submitted" class="alert alert-success">
                            Thanks, {{ name }}! Your comment has been posted.
                        </div>
                        <form v-else @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label class="form-label fw-bold text-dark">Name</label>
                                <input type="text" v-model="name" class="form-control" required placeholder="Enter your name">
                            </div>
                            <div class="mb-3">
                                <label class="form-label fw-bold text-dark">Comment</label>
                                <textarea v-model="message" class="form-control" rows="3" required placeholder="Write your comment here..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">Post Comment</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <footer class="text-center py-5 mt-auto text-white">
        <div class="container">
            <h3 class="h5 mb-4">Connect with Me</h3>
            <div class="mb-4 social-icons">
                <a href="https://www.linkedin.com/in/beejay-carpio-b01947322" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.github.com/Suppelong" target="_blank"><i class="bi bi-github"></i></a>
                <a href="https://www.facebook.com/beejay.carpio" target="_blank"><i class="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/bjycrp" target="_blank"><i class="bi bi-instagram"></i></a>
            </div>
            <hr class="border-secondary w-50 mx-auto my-4 opacity-25">
            <p class="small text-white-50 mb-2">&copy; 2026 Beejay Carpio. All Rights Reserved.</p>
        </div>
    </footer>

    <div v-if="modalVisible" class="modal-overlay" @click="closeModal">
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="currentImage" class="modal-image" @click.stop alt="Full screen view">
    </div>

  </div>
</template>

<script>
// IMPORTANT: NO imports here except standard Vue stuff if needed.
// NO image imports!
export default {
  name: 'PersonalProfile',
  data() {
    return {
      modalVisible: false,
      currentImage: '',
      name: '',
      message: '',
      submitted: false,
      
      projectImages: [
        { src: '/images/BorrowIT.png', title: 'BorrowIT', alt: 'BorrowIT App', caption: 'Item borrowing system.' },
        { src: '/images/DropStock.png', title: 'DropStock', alt: 'DropStock System', caption: 'Sneaker reselling platform.' },
        { src: '/images/How to Code your Dragon.png', title: 'How to Code Your Dragon', alt: 'Coding Game', caption: 'Flappy bird clone.' }
      ],
      
      personalImages: [
        { src: '/images/college friends 1.jpg', title: 'College Friends', alt: 'College friends', caption: 'Hanging out with the college crew.' },
        { src: '/images/college friends 2.jpg', title: 'Good Times', alt: 'More college friends', caption: 'Making memories at school.' },
        { src: '/images/family photo 1.jpg', title: 'Family', alt: 'Family photo', caption: 'Family celebration.' }
      ]
    }
  },
  methods: {
    openModal(src) {
        this.currentImage = src;
        this.modalVisible = true;
    },
    closeModal() {
        this.modalVisible = false;
        this.currentImage = '';
    },
    submitForm() {
        this.submitted = true;
        setTimeout(() => { 
            this.submitted = false; 
            this.name = ''; 
            this.message = ''; 
        }, 3000);
    }
  }
}
</script>

<style>
/* CSS RULES MOVED HERE */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #0d6efd; 
    --accent-color: #18bc9c;  
    --secondary-color: #6c757d;
    --dark-bg: #212529;
    --light-bg: #eff2f7; 
    --card-bg: #ffffff;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.profile-page {
    font-family: 'Poppins', sans-serif;
    color: #333;
    line-height: 1.7;
    background: linear-gradient(-45deg, #1a2980, #26d0ce, #1e3c72, #2a5298);
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
    min-height: 100vh;
}

.navbar {
    background-color: #1a1a2e !important;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    padding: 1rem 0;
}

.navbar-brand {
    font-weight: 700;
    letter-spacing: 1px;
}

.nav-link {
    font-weight: 400;
    margin-left: 15px;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: var(--primary-color) !important;
}

header {
    background: #1a1a2e; 
    padding: 120px 0 100px;
    margin-bottom: 0;
    border-bottom: 5px solid rgba(255,255,255,0.1);
}

section {
    position: relative;
    scroll-margin-top: 70px;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 2rem;
}

.bg-white, .bg-light, #about, #education, #projects, #personal, #guestbook {
    background-color: rgba(255, 255, 255, 0.92) !important; 
    backdrop-filter: blur(5px);
    border-radius: 15px; 
    box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
}

#education.bg-light, #personal.bg-white {
    background-color: transparent !important;
}

#education .container, #personal .container, #projects .container, #guestbook .container {
    background-color: rgba(255, 255, 255, 0.92);
    padding: 3rem;
    border-radius: 15px;
}

.section-title {
    color: #1a1a2e;
    font-weight: 700;
    margin-bottom: 2rem;
    display: inline-block;
    border-bottom: 3px solid var(--primary-color);
    padding-bottom: 10px;
}

.profile-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border: 5px solid white;
}

.project-card {
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: white; 
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
}

.img-wrapper {
    overflow: hidden;
    height: 220px;
}

.card-img-top {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.project-card:hover .card-img-top {
    transform: scale(1.1);
}

footer {
    background-color: #1a1a2e;
    margin-top: 3rem;
}

.social-icons a {
    color: white;
    background-color: rgba(255,255,255,0.1);
    width: 45px;
    height: 45px;
    line-height: 45px;
    display: inline-block;
    border-radius: 50%;
    margin: 0 10px;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icons a:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}

.timeline {
    border-left: 3px solid var(--primary-color);
    margin-left: 10px;
    padding-left: 30px;
    position: relative;
}

.timeline-item {
    position: relative;
    margin-bottom: 40px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -39px; 
    top: 5px;
    width: 15px;
    height: 15px;
    background-color: white;
    border: 3px solid var(--accent-color);
    border-radius: 50%;
}

.timeline-year {
    color: var(--accent-color);
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    margin-bottom: 5px;
    display: block;
}

.timeline-school {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--primary-color);
}

.timeline-degree {
    font-style: italic;
    color: var(--secondary-color);
    margin-bottom: 0;
}

/* Modal Styles */
.cursor-pointer {
    cursor: pointer;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 999