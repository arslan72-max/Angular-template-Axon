import { Component, OnInit } from '@angular/core';

type Platform = 'tensorflow' | 'pytorch' | 'axon';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="glass-frame about1-section">
      <h1>What is AXON?</h1>
      <p>
        Axon is a pioneering, open-source Python platform engineered to revolutionize 
        the lifecycle of neural network development. It empowers data scientists, AI researchers, 
        and developers to effortlessly design, train, test, and deploy neural networks 
        with unparalleled efficiency and minimal code overhead.
      </p>
      <p>
        Whether you are building straightforward feedforward networks or architecting 
        intricate, modular deep learning systems, Axon provides the flexibility and scalability 
        needed to meet diverse AI challenges.
      </p>
      <p>
        This is made possible through a robust, highly optimized backend combined with 
        a meticulously structured and modular platform architecture — enabling seamless 
        extensibility, performance optimization, and maintainability.
      </p>
      <p>
        By abstracting complexity and fostering rapid prototyping, Axon accelerates innovation 
        and deployment cycles, positioning itself as the essential toolkit for AI-driven solutions 
        across research, enterprise, and production environments.
      </p>
    </section>

  <section class="glass-frame about2-section">
  <h1>AXON Performance</h1>
  <h2>How much does it take on average to train a simple perceptron on a CPU with each platform?</h2> 
  <div class="compare-list">
    <div class="platform tensorflow">
      <img src="https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg" alt="TensorFlow Logo" width="120" />
      <h3>{{ counters.tensorflow.toFixed(1) }} seconds</h3>
    </div>
    <div class="platform pytorch">
      <img src="https://cdn.worldvectorlogo.com/logos/pytorch-1.svg" alt="PyTorch Logo" width="120" />
      <h3>{{ counters.pytorch.toFixed(1) }} seconds</h3>
    </div>
    <div class="platform axon">
      <img src="https://i.imgur.com/wF8HxRh.png" alt="Axon Logo" width="120" />
      <h3>{{ counters.axon.toFixed(1) }} seconds</h3>
    </div>
  </div>
</section>

  `,
  styles: [`
    .glass-frame {
      max-width: 900px;
      margin: 80px auto;
      padding: 32px 24px;
      background: rgba(0, 212, 170, 0.1);
      border: 1px solid rgba(0, 212, 170, 0.3);
      border-radius: 15px;
      backdrop-filter: blur(12px);
      box-shadow: 0 0 30px rgba(0, 212, 170, 0.3);
      color: white;
      font-family: 'Inter', sans-serif;
    }

    .about1-section {
      margin-top: 100px;
    }

    .about2-section {
      margin-bottom: 100px;
    }

    .glass-frame h1 {
      font-size: 3rem;
      margin-bottom: 24px;
      color: #00d4aa;
    }

    .about1-section p,
    .about2-section h2 {
      font-size: 1.125rem;
      margin-bottom: 16px;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.6;
    }

    .compare-list {
      display: flex;
      justify-content: space-around;
      gap: 24px;
      flex-wrap: wrap;
    }

    .platform {
      flex: 1 1 200px;
      max-width: 220px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(0, 212, 170, 0.3);
      border-radius: 16px;
      padding: 24px;
      text-align: center;
      backdrop-filter: blur(10px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: default;
    }

    .platform:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 212, 170, 0.2);
      border-color: #00d4aa;
    }

    .platform img {
      max-width: 120px;
      margin-bottom: 16px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .platform h3 {
      font-size: 1.25rem;
      color: #00d4aa;
      margin-top: 0;
    }

    @media (max-width: 768px) {
      .compare-list {
        flex-direction: column;
        align-items: center;
      }

      .platform {
        max-width: 100%;
        margin-bottom: 24px;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  counters: Record<Platform, number> = {
    tensorflow: 0,
    pytorch: 0,
    axon: 0
  };

  private targets: Record<Platform, number> = {
    tensorflow: 7.5,
    pytorch: 5.5,
    axon: 4.7
  };

  private animationDuration = 2000; // duration in ms
  private frameRate = 30; // frames per second

  ngOnInit() {
    for (const platform of Object.keys(this.counters) as Platform[]) {
      this.animateCounter(platform, this.targets[platform]);
    }
  }

  private animateCounter(platform: Platform, target: number) {
    const totalFrames = this.animationDuration / (1000 / this.frameRate);
    let frame = 0;
    const increment = target / totalFrames;

    const interval = setInterval(() => {
      frame++;
      this.counters[platform] = Math.min(target, this.counters[platform] + increment);
      if (frame >= totalFrames) {
        this.counters[platform] = target;
        clearInterval(interval);
      }
    }, 1000 / this.frameRate);
  }
}
