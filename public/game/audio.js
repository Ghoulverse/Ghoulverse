// ==========================================
// GOO RUNNER - Audio System (Phase 7)
// Synthwave Soundtrack & Sound Effects
// ==========================================

class AudioController {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    
    // Music sequencer
    this.bpm = 128;
    this.beatInterval = null;
    this.currentNote = 0;
    this.isPlaying = false;
    
    // Synth notes (pentatonic minor scale)
    this.scale = [110, 130.81, 146.83, 164.81, 196, 220, 261.63, 293.66, 329.63, 392, 440, 523.25];
    
    // Arpeggio patterns
    this.patterns = {
      main: [0, 3, 5, 7, 0, 3, 5, 8],
      bass: [0, 0, 7, 7, 5, 5, 3, 3],
      lead: [7, 5, 3, 0, 8, 7, 5, 3]
    };
  }
  
  init() {
    if (this.ctx) return;
    
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    
    // Master gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = 0.4;
    this.masterGain.connect(this.ctx.destination);
    
    // Music channel
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.5;
    this.musicGain.connect(this.masterGain);
    
    // SFX channel
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.6;
    this.sfxGain.connect(this.masterGain);
    
    // Filter for that underwater/void feel
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 2000;
    this.filter.connect(this.musicGain);
  }
  
  startMusic() {
    if (!this.enabled || this.isPlaying) return;
    this.init();
    this.isPlaying = true;
    this.currentNote = 0;
    
    const beatDuration = 60 / this.bpm / 2; // 8th notes
    
    this.beatInterval = setInterval(() => {
      this.playBeat();
    }, beatDuration * 1000);
  }
  
  stopMusic() {
    this.isPlaying = false;
    if (this.beatInterval) {
      clearInterval(this.beatInterval);
      this.beatInterval = null;
    }
  }
  
  playBeat() {
    if (!this.ctx || !this.isPlaying) return;
    
    const beatInBar = this.currentNote % 8;
    const bar = Math.floor(this.currentNote / 8);
    
    // Bass on beats 0 and 4
    if (beatInBar === 0 || beatInBar === 4) {
      this.playBass(this.scale[this.patterns.bass[beatInBar]]);
    }
    
    // Arpeggio
    this.playArp(this.scale[this.patterns.main[beatInBar]]);
    
    // Lead melody every 2 bars
    if (bar % 2 === 1 && beatInBar % 2 === 0) {
      setTimeout(() => {
        this.playLead(this.scale[this.patterns.lead[beatInBar]]);
      }, 100);
    }
    
    // Hi-hat on off-beats
    if (beatInBar % 2 === 1) {
      this.playHihat();
    }
    
    this.currentNote++;
  }
  
  playBass(freq) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq / 2, this.ctx.currentTime);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.3);
    
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.filter);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.3);
  }
  
  playArp(freq) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    // LFO for vibrato
    const lfo = this.ctx.createOscillator();
    const lfoGain = this.ctx.createGain();
    lfo.frequency.value = 6;
    lfoGain.gain.value = 3;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();
    
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(this.filter);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  
  playLead(freq) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);
    
    // Portamento
    osc.frequency.setValueAtTime(freq * 1.9, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 2, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.4);
    
    osc.connect(gain);
    gain.connect(this.filter);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);
  }
  
  playHihat() {
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 8000;
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicGain);
    
    noise.start();
  }
  
  // ==========================================
  // SOUND EFFECTS
  // ==========================================
  
  playShoot() {
    if (!this.enabled || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.sfxGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
  
  playExplosion() {
    if (!this.enabled || !this.ctx) return;
    
    const bufferSize = this.ctx.sampleRate * 0.3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.3);
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    
    noise.start();
  }
  
  playCollect() {
    if (!this.enabled || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
    
    osc.connect(gain);
    gain.connect(this.sfxGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.15);
  }
  
  playPowerUp() {
    if (!this.enabled || !this.ctx) return;
    
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'triangle';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.2);
        
        osc.connect(gain);
        gain.connect(this.sfxGain);
        
        osc.start();
        osc.stop(this.ctx.currentTime + 0.2);
      }, i * 50);
    });
  }
  
  playUltimate() {
    if (!this.enabled || !this.ctx) return;
    
    // Rise effect
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 1);
    
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);
    
    osc.connect(gain);
    gain.connect(this.sfxGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 1);
  }
  
  playHit() {
    if (!this.enabled || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(200, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(this.sfxGain);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }
  
  // ==========================================
  // CONTROLS
  // ==========================================
  
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.startMusic();
    } else {
      this.stopMusic();
    }
    return this.enabled;
  }
  
  setMusicVolume(vol) {
    if (this.musicGain) this.musicGain.gain.value = vol;
  }
  
  setSfxVolume(vol) {
    if (this.sfxGain) this.sfxGain.gain.value = vol;
  }
}

// Create global audio instance
const audio = new AudioController();

console.log('Audio System loaded - Click to enable audio!');
