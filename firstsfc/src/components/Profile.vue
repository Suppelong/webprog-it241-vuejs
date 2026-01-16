<template>
  <div class="profile-page">
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">Beejay Carpio</a>
        </div>
    </nav>

    <header class="text-center text-white">
        <div class="container">
            <h1 class="display-4 fw-bold">Profile Fixed!</h1> 
            <p class="lead">IT Student | Gamer | Creative Thinker</p>
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
                    </p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

:root {
    --primary-color: #0d6efd; 
    --accent-color: #18bc9c;  
    --secondary-color: #6c757d;
    --dark-bg: #212529;
    --light-bg: #eff2f7; 
    --card-bg: #ffffff;
}

.profile-page {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background: linear-gradient(-45deg, #1a2980, #26d0ce, #1e3c72, #2a5298);
    background-size: 400% 400%;
    min-height: 100vh;
}

.navbar {
    background-color: #1a1a2e !important;
    padding: 1rem 0;
}

header {
    background: #1a1a2e; 
    padding: 120px 0 100px;
}

.bg-white {
    background-color: rgba(255, 255, 255, 0.92) !important; 
    border-radius: 15px; 
}

.profile-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border: 5px solid white;
}
</style>