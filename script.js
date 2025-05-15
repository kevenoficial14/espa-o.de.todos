// Detectar modo escuro do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Array de SVGs de folhas
const leafTypes = [
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M15,3 C15,3 7,8 3,15 C-1,22 8,28 15,27 C22,26 31,22 27,15 C23,8 15,3 15,3 Z" fill="#5667FF"></path></svg>`,
    
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M15,3 C15,3 7,8 3,15 C-1,22 8,28 15,27 C22,26 31,22 27,15 C23,8 15,3 15,3 Z" fill="#7986FF"></path></svg>`,
    
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M15,3 C15,3 7,8 3,15 C-1,22 8,28 15,27 C22,26 31,22 27,15 C23,8 15,3 15,3 Z" fill="#3ECFC0"></path></svg>`,
    
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M3,15 C3,8 15,3 15,3 C15,3 27,8 27,15 C27,22 22,27 15,27 C8,27 3,22 3,15 Z" fill="#FF6C5C"></path></svg>`,
    
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M3,15 C3,8 15,3 15,3 C15,3 27,8 27,15 C27,22 22,27 15,27 C8,27 3,22 3,15 Z" fill="#7B4DFF"></path></svg>`,
    
    `<svg viewBox="0 0 30 30" width="100%" height="100%"><path d="M15,3 C20,8 27,8 27,15 C27,22 20,27 15,27 C10,27 3,22 3,15 C3,8 10,8 15,3 Z" fill="#5EEDD8"></path></svg>`
];

// Criar partículas animadas
function createParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório
        const size = 2 + Math.random() * 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição inicial aleatória
        const startX = Math.random() * 100;
        const startY = 70 + Math.random() * 30; // Concentrar na parte inferior
        particle.style.left = `${startX}%`;
        particle.style.top = `${startY}%`;
        
        // Cor aleatória
        const colorOptions = [
            'var(--primary)', 
            'var(--primary-light)', 
            'var(--secondary)', 
            'var(--secondary-light)',
            'var(--accent)',
            'var(--accent-light)'
        ];
        const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
        particle.style.background = color;
        
        // Movimento aleatório
        const moveX = -50 + Math.random() * 100;
        particle.style.setProperty('--particle-move-x', `${moveX}px`);
        
        // Duração e delay aleatórios
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;
        particle.style.animation = `particleMove ${duration}s ease-in-out ${delay}s infinite`;
        
        // Adicionar partícula ao container
        container.appendChild(particle);
    }
}

// Criar folhas caindo
function createFallingLeaves() {
    const container = document.getElementById('leavesContainer');
    const leafCount = 30;
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Tamanho aleatório de 15px a 30px
        const size = 15 + Math.random() * 15;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        
        // Posição inicial aleatória
        const startingLeft = Math.random() * 100;
        leaf.style.left = `${startingLeft}%`;
        leaf.style.top = '-50px';
        
        // Selecionar um SVG de folha aleatório
        const leafSVG = leafTypes[Math.floor(Math.random() * leafTypes.length)];
        leaf.innerHTML = leafSVG;
        
        // Adicionar uma rotação inicial aleatória
        leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        // Definir a animação
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 40;
        leaf.style.animation = `leafFall ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(leaf);
    }
}

// Criar fireflies/vagalumes
function createFireflies() {
    const container = document.getElementById('firefliesContainer');
    const fireflyCount = 30;
    
    for (let i = 0; i < fireflyCount; i++) {
        const firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        firefly.style.left = `${posX}%`;
        firefly.style.top = `${posY}%`;
        
        // Tamanho
        const size = 2 + Math.random() * 3;
        firefly.style.width = `${size}px`;
        firefly.style.height = `${size}px`;
        
        // Animação
        const duration = 2 + Math.random() * 4;
        const delay = Math.random() * 5;
        firefly.style.setProperty('--duration', `${duration}s`);
        firefly.style.animationDelay = `${delay}s`;
        
        container.appendChild(firefly);
    }
}

// Animar cards
function animateCards() {
    const cards = document.querySelectorAll('.premium-card');
    
    // Animar aparecimento dos cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'var(--transition-bounce)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });
    
    // Adicionar efeito parallax aos cards
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
        
        cards.forEach((card) => {
            // Aplicar sutilmente o efeito apenas aos cards visíveis na viewport
            const rect = card.getBoundingClientRect();
            if (
                rect.top >= -300 &&
                rect.left >= -300 &&
                rect.bottom <= (window.innerHeight + 300) &&
                rect.right <= (window.innerWidth + 300)
            ) {
                card.style.transform = `translateY(0) rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
            }
        });
    });
    
    // Resetar a rotação quando o mouse sai
    document.addEventListener('mouseleave', () => {
        cards.forEach((card) => {
            card.style.transform = 'translateY(0) rotateY(0) rotateX(0)';
        });
    });
}

// Atualizar data
function updateDate() {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = new Date().toLocaleDateString('pt-BR', options);
    document.getElementById('lastUpdate').textContent = formattedDate;
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createFallingLeaves();
    createFireflies();
    animateCards();
    updateDate();
});
