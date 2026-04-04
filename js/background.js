/**
 * BACKGROUND ANIMATION: Interactive Neural Network
 * Optimized Canvas-based particle system with Parallax and Theme support
 */

class NeuralNetwork {
    constructor() {
        this.canvas = document.getElementById('bg-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.scrollOffset = 0;
        
        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        this.resize();
        this.createParticles();
    }

    resize() {
        this.canvas.width = globalThis.innerWidth;
        this.canvas.height = globalThis.innerHeight;
    }

    createParticles() {
        this.particles = [];
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 1
            });
        }
    }

    addEventListeners() {
        globalThis.addEventListener('resize', () => {
            this.resize();
            this.createParticles();
        });

        globalThis.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        globalThis.addEventListener('scroll', () => {
            // Un parallax inverso para que parezca que los puntos están más al fondo
            this.scrollOffset = globalThis.pageYOffset * 0.1;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Determinar colores según el tema
        const isLight = document.body.classList.contains('light-theme');
        const particleColor = isLight ? 'rgba(37, 99, 235, 0.4)' : 'rgba(147, 197, 253, 0.4)';
        const lineColor = isLight ? 'rgba(37, 99, 235, 0.08)' : 'rgba(147, 197, 253, 0.1)';

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            
            // Movimiento básico
            p.x += p.vx;
            p.y += p.vy;

            // Rebote en bordes (considerando el scrollOffset)
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Interacción con Mouse (atracción sutil)
            if (this.mouse.x !== null) {
                const dx = p.x - this.mouse.x;
                const dy = (p.y - this.scrollOffset) - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x -= dx * force * 0.02;
                    p.y -= dy * force * 0.02;
                }
            }

            // El dibujo real debe considerar el scroll para el efecto parallax
            const drawY = p.y - this.scrollOffset;

            // Optimización: Solo dibujar si está en el viewport (con un pequeño margen)
            if (drawY > -50 && drawY < this.canvas.height + 50) {
                this.ctx.beginPath();
                this.ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
                this.ctx.fillStyle = particleColor;
                this.ctx.fill();

                // Dibujar líneas entre partículas cercanas
                for (let j = i + 1; j < this.particles.length; j++) {
                    const p2 = this.particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        this.ctx.beginPath();
                        this.ctx.strokeStyle = lineColor;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.moveTo(p.x, drawY);
                        this.ctx.lineTo(p2.x, p2.y - this.scrollOffset);
                        this.ctx.stroke();
                    }
                }
            }
        }
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Iniciar cuando el DOM esté listo
globalThis.addEventListener('DOMContentLoaded', () => {
    new NeuralNetwork();
});
