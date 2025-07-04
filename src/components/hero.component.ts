import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Build and deploy<br>
              your AI models<br>
              <span class="highlight">Now</span>
            </h1>
            <p class="hero-description">
              Axon is a free, open-source Python-based platform that helps you build, 
              train, test, and deploy your neural network models — with minimal code 
              and maximum performance.
            </p>
            <button class="btn btn-primary">
              Install latest version
            </button>
          </div>
          
          <div class="hero-visual">
            <div class="card learn-card">
              <div class="card-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="3" stroke="#00d4aa" stroke-width="2" fill="none"/>
                  <circle cx="36" cy="12" r="3" stroke="#00d4aa" stroke-width="2" fill="none"/>
                  <circle cx="12" cy="36" r="3" stroke="#00d4aa" stroke-width="2" fill="none"/>
                  <circle cx="36" cy="36" r="3" stroke="#00d4aa" stroke-width="2" fill="none"/>
                  <circle cx="24" cy="24" r="3" stroke="#00d4aa" stroke-width="2" fill="none"/>
                  <line x1="15" y1="12" x2="21" y2="24" stroke="#00d4aa" stroke-width="2"/>
                  <line x1="33" y1="12" x2="27" y2="24" stroke="#00d4aa" stroke-width="2"/>
                  <line x1="15" y1="36" x2="21" y2="24" stroke="#00d4aa" stroke-width="2"/>
                  <line x1="33" y1="36" x2="27" y2="24" stroke="#00d4aa" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="card-title">Learn machine learning</h3>
              <p class="card-description">
                An introductory-level certified tutorial that helps you explore the world of 
                supervised machine learning using Axon as a tool. Get your certificate
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background decorative elements -->
      <div class="background-decoration">
        <div class="flowing-shape"></div>
        <div class="geometric-lines"></div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 120px 0 80px;
      position: relative;
      overflow: hidden;
    }
    
    .hero-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      position: relative;
      z-index: 2;
    }
    
    .hero-content {
      display: flex;
      align-items: center;
      gap: 80px;
      min-height: 600px;
    }
    
    .hero-text {
      flex: 1;
    }
    
    .hero-title {
      font-size: 48px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 24px;
      color: white;
    }
    
    .highlight {
      color: #00d4aa;
    }
    
    .hero-description {
      font-size: 18px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 32px;
      max-width: 500px;
    }
    
    .hero-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .learn-card {
      max-width: 350px;
      text-align: left;
    }
    
    .card-icon {
      margin-bottom: 20px;
      align-items:center;
    }
    
    .card-title {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 16px;
      color: white;
    }
    
    .card-description {
      font-size: 16px;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.7);
    }
    
    .background-decoration {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    
    .flowing-shape {
      position: absolute;
      top: 15%;
      right: 10%;
      width: 400px;
      height: 400px;
      background: linear-gradient(135deg, 
        rgba(0, 212, 170, 0.1) 0%,
        rgba(0, 180, 216, 0.1) 50%,
        rgba(0, 168, 204, 0.1) 100%
      );
      border-radius: 50%;
      filter: blur(40px);
      animation: pulse 8s ease-in-out infinite;
    }
    
    .geometric-lines {
      position: absolute;
      top: 20%;
      right: 15%;
      width: 300px;
      height: 300px;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M50 150 Q150 50 250 150 Q150 250 50 150" fill="none" stroke="rgba(0,212,170,0.3)" stroke-width="2"/><path d="M70 150 Q150 70 230 150 Q150 230 70 150" fill="none" stroke="rgba(0,212,170,0.2)" stroke-width="2"/><path d="M90 150 Q150 90 210 150 Q150 210 90 150" fill="none" stroke="rgba(0,212,170,0.1)" stroke-width="2"/></svg>') center/contain no-repeat;
      animation: rotate 20s linear infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.1; }
      50% { transform: scale(1.2) rotate(180deg); opacity: 0.2; }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      .hero {
        padding: 100px 0 60px;
      }
      
      .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 40px;
      }
      
      .hero-title {
        font-size: 36px;
      }
      
      .hero-description {
        font-size: 16px;
      }
      
      .learn-card {
        max-width: 100%;
      }
      
      .flowing-shape {
        right: -100px;
        width: 300px;
        height: 300px;
      }
      
      .geometric-lines {
        right: -50px;
        width: 200px;
        height: 200px;
      }
    }
  `]
})
export class HeroComponent {}