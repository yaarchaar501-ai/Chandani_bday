
// Show the birthday surprise
function showSurprise() {
  document.getElementById("message").scrollIntoView({
    behavior: "smooth"
  });
  createHearts(20);
}

// Background floating hearts
function createHearts(count = 8) {
  const container = document.getElementById("hearts");
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (16 + Math.random() * 22) + "px";
    heart.style.animation = `floatUp ${4 + Math.random() * 4}s linear forwards`;
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 8500);
  }
}

setInterval(() => createHearts(2), 1200);

// Music button
function toggleMusic() {
  const song = document.getElementById("birthdaySong");
  const button = document.getElementById("musicButton");

  if (!song || !button) return;

  if (song.paused) {
    song.play()
      .then(() => button.textContent = "⏸ Pause Music")
      .catch(() => alert("Pehle music folder mein birthday-song.mp3 add karo ❤️"));
  } else {
    song.pause();
    button.textContent = "🎵 Play Music";
  }
}

// Cake surprise

function celebrate() {
  const message = document.getElementById("cakeMessage");

  if (message) {
    message.innerHTML =
      "🎂 Happy Birthday Chandani! ❤️<br>Close your eyes and make a beautiful wish! ✨";
  }

  createHearts(40);
  launchFireworks();

  const cake = document.querySelector(".cake");

  if (cake) {
    cake.style.transform = "scale(1.3) rotateY(360deg)";

    setTimeout(() => {
      cake.style.transform = "";
    }, 1000);
  }
}

// Gift surprise
function openGift() {
  const message = document.getElementById("giftMessage");
  if (message) {
    message.textContent = "Surprise! You are one of the most special people in my life. Love you, Chandani! 💝";
  }
  createHearts(35);
}

// Three.js magical background
function start3DBackground() {
  const canvas = document.getElementById("three-bg");

  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  camera.position.z = 35;

  const particles = [];
  const geometry = new THREE.SphereGeometry(0.12, 8, 8);

  for (let i = 0; i < 90; i++) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0xff8fc7 : 0xffd1e6
    });

    const particle = new THREE.Mesh(geometry, material);

    particle.position.set(
      (Math.random() - 0.5) * 65,
      (Math.random() - 0.5) * 45,
      (Math.random() - 0.5) * 25
    );

    scene.add(particle);
    particles.push(particle);
  }

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
  });

  function animate() {
    requestAnimationFrame(animate);

    particles.forEach((particle, index) => {
      particle.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      particle.rotation.x += 0.003;
    });

    camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

start3DBackground();

// Magical butterflies and stars
function createMagicParticles() {
  const container = document.getElementById("magic-particles");
  if (!container) return;

  const symbols = ["🦋", "✨", "⭐", "💗", "🌸"];

  const item = document.createElement("div");
  item.className = "magic-item";

  item.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = (18 + Math.random() * 24) + "px";
  item.style.animationDuration = (6 + Math.random() * 6) + "s";

  container.appendChild(item);

  setTimeout(() => item.remove(), 12500);
}

setInterval(createMagicParticles, 700);

// Open the magical heart locket
function openLocket() {
  const message = document.getElementById("locketMessage");

  if (message) {
    message.classList.add("show");
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  createHearts(25);
}

// Open the memory snow globe
function openMemories() {
  const globe = document.getElementById("memoryGlobe");

  if (globe) {
    globe.classList.add("show");
    globe.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  createHearts(35);
  launchFireworks();
}
