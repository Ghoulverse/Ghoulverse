// ==========================================
// GOO RUNNER - Phase 9 & 10: DAILY CHALLENGES + FINAL POLISH + STORE
// ==========================================

// ==========================================
// STORE SYSTEM - In-Game Shop (Press S)
// ==========================================

const storeItems = [
  // === ATTACK POWERUPS (1-8) ===
  { id: 'rapid_fire', name: 'Rapid Fire', emoji: '⚡', cost: 50, duration: 300, desc: '5x fire rate for 5s', type: 'powerup' },
  { id: 'damage_up', name: 'Power Shot', emoji: '💪', cost: 75, duration: 400, desc: '3x damage for 6s', type: 'powerup' },
  { id: 'pierce', name: 'Piercing', emoji: '🔱', cost: 90, duration: 300, desc: 'Shots pierce 5 enemies', type: 'powerup' },
  { id: 'spread_shot', name: 'Spread Shot', emoji: '📐', cost: 80, duration: 350, desc: '5-way bullet spread', type: 'powerup' },
  { id: 'homing', name: 'Homing Shots', emoji: '🎯', cost: 120, duration: 400, desc: 'Bullets track enemies', type: 'powerup' },
  { id: 'explosive', name: 'Explosive', emoji: '💥', cost: 100, duration: 300, desc: 'Bullets explode on hit', type: 'powerup' },
  { id: 'laser_beams', name: 'Laser Beams', emoji: '🔴', cost: 130, duration: 350, desc: 'Continuous laser damage', type: 'powerup' },
  { id: 'shotgun', name: 'Shotgun Blast', emoji: '🔫', cost: 85, duration: 250, desc: '12 pellets per shot', type: 'powerup' },
  
  // === DEFENSE POWERUPS (9-14) ===
  { id: 'shield', name: 'Shield', emoji: '🛡️', cost: 40, duration: 600, desc: 'Block 1 hit', type: 'powerup' },
  { id: 'super_shield', name: 'Super Shield', emoji: '🔰', cost: 100, duration: 600, desc: 'Block 3 hits', type: 'powerup' },
  { id: 'invincible', name: 'Invincibility', emoji: '✨', cost: 150, duration: 180, desc: 'Ghost mode 3s', type: 'powerup' },
  { id: 'reflect', name: 'Reflect Shield', emoji: '🔮', cost: 110, duration: 400, desc: 'Reflect enemy shots', type: 'powerup' },
  { id: 'heal', name: 'Repair Kit', emoji: '❤️', cost: 60, duration: 1, desc: 'Full HP restore', type: 'instant' },
  { id: 'regen', name: 'Auto-Repair', emoji: '💚', cost: 90, duration: 600, desc: 'Heal over time', type: 'powerup' },
  
  // === UTILITY POWERUPS (15-22) ===
  { id: 'magnet', name: 'Orb Magnet', emoji: '🧲', cost: 60, duration: 400, desc: 'Huge orb magnet range', type: 'powerup' },
  { id: 'slow_time', name: 'Time Warp', emoji: '⏱️', cost: 100, duration: 180, desc: 'Slow enemies 50%', type: 'powerup' },
  { id: 'freeze', name: 'Freeze Ray', emoji: '❄️', cost: 95, duration: 200, desc: 'Freeze all enemies', type: 'powerup' },
  { id: 'speed_boost', name: 'Speed Boost', emoji: '🏃', cost: 70, duration: 300, desc: '2x movement speed', type: 'powerup' },
  { id: 'ghost', name: 'Ghost Mode', emoji: '👻', cost: 140, duration: 240, desc: 'Phase through enemies', type: 'powerup' },
  { id: 'bomb', name: 'Smart Bomb', emoji: '💣', cost: 150, duration: 1, desc: 'Clear all enemies', type: 'instant' },
  { id: 'multiplier', name: '2x Score', emoji: '2️⃣', cost: 80, duration: 600, desc: 'Double points', type: 'powerup' },
  { id: 'orb_frenzy', name: 'Orb Frenzy', emoji: '💜', cost: 120, duration: 300, desc: 'Orbs worth 3x', type: 'powerup' },
  
  // === SPECIAL POWERUPS (23-28) ===
  { id: 'drone', name: 'Attack Drone', emoji: '🤖', cost: 130, duration: 800, desc: 'Auto-firing drone', type: 'powerup' },
  { id: 'black_hole', name: 'Black Hole', emoji: '🕳️', cost: 180, duration: 200, desc: 'Sucks in enemies', type: 'powerup' },
  { id: 'lightning', name: 'Lightning', emoji: '⚡', cost: 160, duration: 1, desc: 'Chain lightning all', type: 'instant' },
  { id: 'clone', name: 'Clone', emoji: '👥', cost: 200, duration: 400, desc: '2x firepower', type: 'powerup' },
  { id: 'vampire', name: 'Vampire', emoji: '🧛', cost: 110, duration: 500, desc: 'Heal on kill', type: 'powerup' },
  { id: 'critical', name: 'Critical Hits', emoji: '🎲', cost: 85, duration: 400, desc: '50% crit chance', type: 'powerup' },
  
  // === ULTIMATE CHARGES (29-30) ===
  { id: 'ult_charge', name: 'Ultimate Charge', emoji: '🔋', cost: 100, duration: 1, desc: 'Full ultimate meter', type: 'instant' },
  { id: 'ult_overdrive', name: 'Ult Overdrive', emoji: '🚀', cost: 180, duration: 600, desc: 'Ult lasts 2x longer', type: 'powerup' },
  
  // === TEMPORARY GHOUL RENTALS ===
  { id: 'rent_tradie', name: 'Rent Tradie', emoji: '👷', cost: 250, duration: 600, type: 'rental', ghoulId: 'TRADIE', desc: '10s as Tradie' },
  { id: 'rent_zen', name: 'Rent Zen', emoji: '🧘', cost: 350, duration: 600, type: 'rental', ghoulId: 'ZEN', desc: '10s as Zen' },
  { id: 'rent_party', name: 'Rent Party', emoji: '🥳', cost: 450, duration: 600, type: 'rental', ghoulId: 'PARTY', desc: '10s as Party' },
  { id: 'rent_scholar', name: 'Rent Scholar', emoji: '👨‍🎓', cost: 550, duration: 600, type: 'rental', ghoulId: 'SCHOLAR', desc: '10s as Scholar' },
  { id: 'rent_garden', name: 'Rent Garden', emoji: '👩‍🌾', cost: 400, duration: 600, type: 'rental', ghoulId: 'GARDEN', desc: '10s as Garden' },
  { id: 'rent_beauty', name: 'Rent Beauty', emoji: '💅', cost: 500, duration: 600, type: 'rental', ghoulId: 'BEAUTY', desc: '10s as Beauty' },
  { id: 'rent_baby', name: 'Rent Baby', emoji: '👶', cost: 900, duration: 600, type: 'rental', ghoulId: 'BABY', desc: '10s as Baby' }
];

let storeOpen = false;
let originalGhoul = null;

// ==========================================
// SAVE SYSTEM - Persistent Progress
// ==========================================

const SAVE_KEY = 'ghoulverse_save_v2';

function saveGame() {
  const saveData = {
    unlockedGhouls: game.unlockedGhouls,
    totalScore: game.totalScore,
    codexUnlocked: codexUnlocked,
    timestamp: Date.now()
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
  console.log('💾 Game saved!', saveData);
}

function loadGame() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (saved) {
    try {
      const data = JSON.parse(saved);
      game.unlockedGhouls = data.unlockedGhouls || ['GOO'];
      game.totalScore = data.totalScore || 0;
      codexUnlocked = data.codexUnlocked || {};
      console.log('💾 Game loaded!', data);
      return true;
    } catch (e) {
      console.error('Failed to load save:', e);
    }
  }
  return false;
}

// Auto-save every 10 seconds during gameplay
setInterval(() => {
  if (game.active) saveGame();
}, 10000);

// Save on page unload
window.addEventListener('beforeunload', saveGame);

// ==========================================
// COMPANION SYSTEM - Unlocked Ghouls Fight With You!
// ==========================================

let companions = []; // Active companion ghouls in gameplay
let companionProjectiles = [];

class Companion {
  constructor(ghoulId, index) {
    this.ghoul = ghouls.find(g => g.id === ghoulId);
    this.index = index;
    // Stagger companions closer together and offset from player
    this.x = player.x - 60 - (index * 45);  // Reduced from 80/70 to 60/45
    this.y = player.y + (index % 2 === 0 ? 0 : 15); // Stagger Y slightly so they don't overlap
    this.targetY = this.y;
    this.width = 50;
    this.height = 50;
    this.fireTimer = 0;
    this.fireRate = this.ghoul.weapon.fireRate;
  }
  
  update() {
    // Follow player with offset
    this.targetY = player.y + (this.index % 2 === 0 ? 0 : 15);
    this.y += (this.targetY - this.y) * 0.1;
    // Keep companions visible on screen - minimum x position of 10
    this.x = Math.max(10, player.x - 60 - (this.index * 45));
    
    // Fire at enemies
    this.fireTimer++;
    if (this.fireTimer % this.fireRate === 0) {
      this.fire();
    }
  }
  
  fire() {
    // Find nearest enemy
    let target = null;
    let nearestDist = Infinity;
    
    enemies.forEach(e => {
      const dx = e.x - this.x;
      const dy = e.y - this.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < nearestDist && e.x > this.x) {
        nearestDist = dist;
        target = e;
      }
    });
    
    if (target && nearestDist < 600) {
      const angle = Math.atan2(target.y + target.height/2 - (this.y + this.height/2), 
                               target.x + target.width/2 - this.x);
      const proj = new CompanionProjectile(
        this.x + this.width,
        this.y + this.height/2,
        this.ghoul,
        angle
      );
      companionProjectiles.push(proj);
    }
  }
  
  draw() {
    // Draw companion ghoul
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = this.ghoul.color;
    ctx.shadowBlur = 20;
    ctx.fillText(this.ghoul.emoji, this.x + this.width/2, this.y + this.height/2);
    ctx.shadowBlur = 0;
    
    // Name label
    ctx.font = '10px Courier New';
    ctx.fillStyle = this.ghoul.color;
    ctx.fillText(this.ghoul.id, this.x + this.width/2, this.y - 10);
  }
}

class CompanionProjectile {
  constructor(x, y, ghoul, angle) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(angle) * 12;
    this.vy = Math.sin(angle) * 12;
    this.damage = ghoul.weapon.damage === '???' ? 2 : ghoul.weapon.damage;
    this.color = ghoul.color;
    this.weaponType = ghoul.weapon.projectile;
    this.emoji = ghoul.weapon.projectile === 'nail' ? '🔩' : 
                  ghoul.weapon.projectile === 'orb' ? '🔮' :
                  ghoul.weapon.projectile === 'leaf' ? '🍃' :
                  ghoul.weapon.projectile === 'spread' ? '🎊' :
                  ghoul.weapon.projectile === 'beam' ? '━' :
                  ghoul.weapon.projectile === 'tome' ? '📖' :
                  ghoul.weapon.projectile === 'milk' ? '🥛' : '●';
    this.life = 60;
  }
  
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    
    // Different visuals based on weapon type
    if (this.weaponType === 'beam') {
      // Laser beam
      ctx.rotate(Math.atan2(this.vy, this.vx));
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 15;
      ctx.fillRect(-10, -3, 25, 6);
    } else if (this.weaponType === 'tome') {
      // Flying book
      ctx.font = '16px Arial';
      ctx.fillText(this.emoji, 0, 5);
    } else if (this.weaponType === 'leaf') {
      // Spinning leaf
      ctx.rotate(this.life * 0.2);
      ctx.font = '14px Arial';
      ctx.fillText(this.emoji, 0, 5);
    } else {
      // Default projectile
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
    }
    
    ctx.restore();
    ctx.shadowBlur = 0;
  }
}

function updateCompanions() {
  // PERFORMANCE: Limit companions to max 3
  const maxCompanions = 3;
  let availableCompanions = game.unlockedGhouls.filter(id => id !== game.currentGhoul?.id);
  availableCompanions = availableCompanions.slice(0, maxCompanions);
  
  // Sync companions array
  availableCompanions.forEach((id, index) => {
    const existing = companions.find(c => c.ghoul.id === id);
    if (!existing) {
      companions.push(new Companion(id, index));
    } else {
      existing.index = index;
    }
  });
  
  // Remove companions that are no longer unlocked
  companions = companions.filter(c => availableCompanions.includes(c.ghoul.id));
  
  // Update each companion (every frame for smooth movement)
  if (game.frame % 2 === 0) { // Half frame rate for position updates
    companions.forEach(c => c.update());
  }
  
  // Update projectiles
  for (let i = companionProjectiles.length - 1; i >= 0; i--) {
    const proj = companionProjectiles[i];
    proj.update();
    if (proj.life <= 0) {
      companionProjectiles.splice(i, 1);
    }
  }
  
  // PERFORMANCE: Optimized collision with spatial culling
  // Only check collisions every 2nd frame
  if (game.frame % 2 === 0) {
    for (let i = companionProjectiles.length - 1; i >= 0; i--) {
      const proj = companionProjectiles[i];
      if (proj.life <= 0) continue;
      
      for (let j = enemies.length - 1; j >= 0; j--) {
        const enemy = enemies[j];
        // Spatial culling - skip if far apart
        if (Math.abs(proj.x - enemy.x) > 100) continue;
        
        const dx = proj.x - (enemy.x + enemy.width/2);
        const dy = proj.y - (enemy.y + enemy.height/2);
        const dist = dx*dx + dy*dy; // Use squared distance (no sqrt)
        
        if (dist < (enemy.width/2 + 6) ** 2) {
          if (enemy.takeDamage(proj.damage)) {
            enemies.splice(j, 1);
          }
          proj.life = 0;
          break;
        }
      }
    }
  }
}

function drawCompanions() {
  companions.forEach(c => c.draw());
  companionProjectiles.forEach(p => p.draw());
}

function openStore() {
  console.log('openStore called, game.active:', game.active, 'storeOpen:', storeOpen);
  if (storeOpen) {
    console.log('Store already open');
    return;
  }
  // Allow opening store even if game isn't "active" but was running
  if (!game.active && !game.wasActive) {
    console.log('Cannot open store - game not running');
    return;
  }
  
  storeOpen = true;
  game.wasActive = game.active; // Remember if game was running
  game.active = false; // Pause game
  
  const modal = document.createElement('div');
  modal.id = 'storeModal';
  modal.className = 'store-modal';
  modal.innerHTML = `
    <div class="store-content" id="storeContent">
      <h2>🛒 THE VOID STORE 🛒</h2>
      <div class="store-orbs">💜 Orbs: ${game.orbs}</div>
      <div class="store-grid" id="storeGrid"></div>
      <button class="store-close" id="storeCloseBtn">RESUME RUN (S)</button>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Prevent scrolling on body when store is open
  document.body.style.overflow = 'hidden';
  
  // Close on backdrop click (but not content click)
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeStore();
  });
  
  // Touch events for mobile
  const content = document.getElementById('storeContent');
  if (content) {
    content.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });
  }
  
  document.getElementById('storeCloseBtn').onclick = closeStore;
  renderStoreItems();
}

function renderStoreItems() {
  const grid = document.getElementById('storeGrid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  // Separate powerups and rentals
  const powerups = storeItems.filter(i => i.type === 'powerup' || i.type === 'instant');
  const rentals = storeItems.filter(i => i.type === 'rental');
  
  // Powerups section
  const powerupHeader = document.createElement('div');
  powerupHeader.className = 'store-section-header';
  powerupHeader.textContent = '⚡ POWERUPS';
  grid.appendChild(powerupHeader);
  
  powerups.forEach(item => {
    const canAfford = game.orbs >= item.cost;
    const card = createStoreCard(item, canAfford);
    grid.appendChild(card);
  });
  
  // Rentals section
  const rentalHeader = document.createElement('div');
  rentalHeader.className = 'store-section-header';
  rentalHeader.textContent = '👤 GHOUR RENTALS (One Run Only)';
  grid.appendChild(rentalHeader);
  
  rentals.forEach(item => {
    const canAfford = game.orbs >= item.cost;
    const card = createStoreCard(item, canAfford);
    grid.appendChild(card);
  });
}

function createStoreCard(item, canAfford) {
  const card = document.createElement('div');
  card.className = `store-item ${canAfford ? 'available' : 'locked'}`;
  
  card.innerHTML = `
    <div class="item-emoji">${item.emoji}</div>
    <div class="item-name">${item.name}</div>
    <div class="item-desc">${item.desc}</div>
    <div class="item-cost">💜 ${item.cost}</div>
  `;
  
  if (canAfford) {
    // Both click and touch for mobile/desktop
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      purchaseItem(item);
    });
    card.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      e.preventDefault();
      purchaseItem(item);
    }, { passive: false });
    
    // Visual feedback
    card.style.cursor = 'pointer';
  }
  
  return card;
}

function purchaseItem(item) {
  if (game.orbs < item.cost) return;
  
  game.orbs -= item.cost;
  updateUI();
  
  if (item.type === 'rental') {
    // Rent a ghoul
    if (!originalGhoul) originalGhoul = game.currentGhoul;
    const rentedGhoul = ghouls.find(g => g.id === item.ghoulId);
    if (rentedGhoul) {
      game.currentGhoul = rentedGhoul;
      updateInGameDisplay();
      showNotification(`RENTED: ${rentedGhoul.name}!`, rentedGhoul.color);
      
      setTimeout(() => {
        if (originalGhoul) {
          game.currentGhoul = originalGhoul;
          originalGhoul = null;
          updateInGameDisplay();
          showNotification('Rental expired - back to ' + game.currentGhoul.name, '#fff');
        }
      }, item.duration * 16.67);
    }
  } else if (item.type === 'instant') {
    // Instant effect (nuke)
    if (item.id === 'nuke') {
      enemies.forEach(e => {
        for (let i = 0; i < 10; i++) {
          particles.push(new Particle(e.x + e.width/2, e.y + e.height/2, e.type.color));
        }
      });
      enemies = [];
      showNotification('💣 MINI NUKE DEPLOYED!', '#ef4444');
    }
  } else {
    // Powerup with duration
    applyStorePowerup(item);
  }
  
  renderStoreItems();
  const orbsDisplay = document.querySelector('.store-orbs');
  if (orbsDisplay) orbsDisplay.textContent = `💜 Orbs: ${game.orbs}`;
}

function applyStorePowerup(item) {
  showNotification(`PURCHASED: ${item.name}!`, '#a855f7');
  
  // Attack powerups
  if (item.id === 'rapid_fire') {
    activeEffects.fireRateMult = 0.2;
    setTimeout(() => activeEffects.fireRateMult = 1, item.duration * 16.67);
  }
  if (item.id === 'damage_up') {
    activeEffects.damageMult = 3;
    setTimeout(() => activeEffects.damageMult = 1, item.duration * 16.67);
  }
  if (item.id === 'pierce') {
    activeEffects.piercing = 5;
    setTimeout(() => activeEffects.piercing = 1, item.duration * 16.67);
  }
  if (item.id === 'spread_shot') {
    activeEffects.spreadShot = 5;
    setTimeout(() => activeEffects.spreadShot = 0, item.duration * 16.67);
  }
  if (item.id === 'homing') {
    activeEffects.homing = true;
    setTimeout(() => activeEffects.homing = false, item.duration * 16.67);
  }
  if (item.id === 'explosive') {
    activeEffects.explosive = true;
    setTimeout(() => activeEffects.explosive = false, item.duration * 16.67);
  }
  if (item.id === 'laser_beams') {
    activeEffects.laserBeams = true;
    setTimeout(() => activeEffects.laserBeams = false, item.duration * 16.67);
  }
  if (item.id === 'shotgun') {
    activeEffects.shotgun = true;
    setTimeout(() => activeEffects.shotgun = false, item.duration * 16.67);
  }
  
  // Defense powerups
  if (item.id === 'shield') {
    activeEffects.shield = true;
  }
  if (item.id === 'super_shield') {
    activeEffects.shieldCount = 3;
  }
  if (item.id === 'invincible') {
    activeEffects.invincible = true;
    setTimeout(() => activeEffects.invincible = false, item.duration * 16.67);
  }
  if (item.id === 'reflect') {
    activeEffects.reflect = true;
    setTimeout(() => activeEffects.reflect = false, item.duration * 16.67);
  }
  if (item.id === 'regen') {
    activeEffects.regen = true;
    setTimeout(() => activeEffects.regen = false, item.duration * 16.67);
  }
  
  // Utility powerups
  if (item.id === 'magnet') {
    activeEffects.magnetRange = 500;
    setTimeout(() => activeEffects.magnetRange = 150, item.duration * 16.67);
  }
  if (item.id === 'slow_time') {
    game.speedMultiplier *= 0.5;
    setTimeout(() => game.speedMultiplier *= 2, item.duration * 16.67);
  }
  if (item.id === 'freeze') {
    enemies.forEach(e => e.stunned = item.duration);
    showNotification('ENEMIES FROZEN!', '#0ea5e9');
  }
  if (item.id === 'speed_boost') {
    activeEffects.speedBoost = 2;
    setTimeout(() => activeEffects.speedBoost = 1, item.duration * 16.67);
  }
  if (item.id === 'ghost') {
    activeEffects.ghost = true;
    setTimeout(() => activeEffects.ghost = false, item.duration * 16.67);
  }
  if (item.id === 'multiplier') {
    activeEffects.scoreMultiplier *= 2;
    setTimeout(() => activeEffects.scoreMultiplier /= 2, item.duration * 16.67);
  }
  if (item.id === 'orb_frenzy') {
    activeEffects.orbFrenzy = 3;
    setTimeout(() => activeEffects.orbFrenzy = 1, item.duration * 16.67);
  }
  
  // Special powerups
  if (item.id === 'drone') {
    activeEffects.drone = true;
    setTimeout(() => activeEffects.drone = false, item.duration * 16.67);
  }
  if (item.id === 'black_hole') {
    activeEffects.blackHole = true;
    setTimeout(() => activeEffects.blackHole = false, item.duration * 16.67);
  }
  if (item.id === 'lightning') {
    enemies.forEach((e, i) => {
      setTimeout(() => {
        e.takeDamage(10);
        createHitSparks(e.x + e.width/2, e.y + e.height/2);
      }, i * 50);
    });
  }
  if (item.id === 'clone') {
    activeEffects.clone = true;
    setTimeout(() => activeEffects.clone = false, item.duration * 16.67);
  }
  if (item.id === 'vampire') {
    activeEffects.vampire = true;
    setTimeout(() => activeEffects.vampire = false, item.duration * 16.67);
  }
  if (item.id === 'critical') {
    activeEffects.critChance = 0.5;
    setTimeout(() => activeEffects.critChance = 0, item.duration * 16.67);
  }
  if (item.id === 'ult_charge') {
    game.orbs = 100;
    updateUI();
  }
  if (item.id === 'ult_overdrive') {
    activeEffects.ultOverdrive = true;
    setTimeout(() => activeEffects.ultOverdrive = false, item.duration * 16.67);
  }
}

function closeStore() {
  console.log('closeStore called');
  const modal = document.getElementById('storeModal');
  if (modal) modal.remove();
  storeOpen = false;
  document.body.style.overflow = ''; // Restore scrolling
  
  // Resume game if it was active before
  if (game.wasActive) {
    game.active = true;
    game.wasActive = false;
  }
}

// ==========================================
// DAILY CHALLENGE SYSTEM
// ==========================================

const challengeTypes = [
  { id: 'speed_run', name: 'Speed Demon', desc: '2x game speed, 3x score', multiplier: 3, 
    effect: () => { game.speedMultiplier = 2; } },
  { id: 'no_tools', name: 'Purist', desc: 'No tool pods, 2x score', multiplier: 2, 
    effect: () => { toolPods.length = 0; } },
  { id: 'bullet_hell', name: 'Bullet Hell', desc: '2x enemies, 2x score', multiplier: 2, 
    effect: () => { /* Handled in spawn rate */ } }
];

let dailyChallenge = null;
let challengeActive = false;

function generateDailyChallenge() {
  const today = new Date().toDateString();
  const saved = localStorage.getItem('ghoulverse_challenge');
  let previousHighScore = 0;
  
  if (saved) {
    const data = JSON.parse(saved);
    if (data.date === today) {
      // Re-attach the effect function from challengeTypes
      const challengeDef = challengeTypes.find(c => c.id === data.challenge.id);
      if (challengeDef) {
        data.challenge.effect = challengeDef.effect;
      }
      dailyChallenge = data;
      return;
    }
    // Keep high score from previous challenges
    previousHighScore = data.highScore || 0;
  }
  
  // Generate new challenge
  const challenge = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
  dailyChallenge = {
    date: today,
    challenge: { ...challenge }, // Copy to avoid reference issues
    highScore: previousHighScore,
    completed: false
  };
  
  localStorage.setItem('ghoulverse_challenge', JSON.stringify(dailyChallenge));
}

function startChallengeMode() {
  if (!dailyChallenge) generateDailyChallenge();
  challengeActive = true;
  showNotification(`CHALLENGE: ${dailyChallenge.challenge.name}!`, '#fbbf24');
}

function updateChallengeUI() {
  if (!dailyChallenge) return;
  
  const challengeEl = document.getElementById('dailyChallenge');
  if (challengeEl) {
    challengeEl.innerHTML = `
      <strong>TODAY'S CHALLENGE:</strong> ${dailyChallenge.challenge.name}<br>
      ${dailyChallenge.challenge.desc}<br>
      High Score: ${dailyChallenge.highScore}
    `;
  }
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// ==========================================
// CODEX DATABASE - Educational Enemy Info
// ==========================================

const codexDB = {
  // BACTERIA
  'E.COLI': { realName: 'Escherichia coli', classification: 'Bacteria (Gram-negative)', danger: 'Moderate', foundIn: 'Contaminated food, water, surfaces', diseases: 'Food poisoning, UTIs', fact: 'Most strains are harmless gut bacteria.', science: 'Rod-shaped, facultative anaerobe.', killedBy: 'Heat (70°C+), alcohol sanitizers', funFact: 'Named after Theodor Escherich (1885)' },
  'STAPH': { realName: 'Staphylococcus aureus', classification: 'Bacteria (Gram-positive)', danger: 'High', foundIn: 'Skin, nasal passages, surfaces', diseases: 'Skin infections, pneumonia, sepsis', fact: 'Forms biofilms - 1000x more resistant.', science: 'Spherical clusters ("staphylo" = grapes).', killedBy: 'Chlorine bleach, hydrogen peroxide', funFact: 'MRSA kills more than HIV/AIDS in US' },
  'SALMONELLA': { realName: 'Salmonella enterica', classification: 'Bacteria (Gram-negative)', danger: 'Moderate', foundIn: 'Raw poultry, eggs, produce', diseases: 'Salmonellosis, typhoid fever', fact: 'Leading cause of foodborne death.', science: 'Can survive freezing, not cooking temps.', killedBy: 'Thorough cooking (75°C+), pasteurization', funFact: 'Named after Daniel Salmon (1885)' },
  'LISTERIA': { realName: 'Listeria monocytogenes', classification: 'Bacteria (Gram-positive)', danger: 'High', foundIn: 'Deli meats, soft cheeses, soil', diseases: 'Listeriosis, meningitis, miscarriage', fact: 'Grows at refrigerator temperatures!', science: 'Psychrophile - cold-loving bacteria.', killedBy: 'Heat (70°C+), pasteurization', funFact: '20-30% fatality rate in high-risk groups' },
  'CAMPYLOBACTER': { realName: 'Campylobacter jejuni', classification: 'Bacteria (Gram-negative)', danger: 'Moderate', foundIn: 'Raw chicken, unpasteurized milk', diseases: 'Gastroenteritis, Guillain-Barré syndrome', fact: 'Most common bacterial food poisoning.', science: 'Microaerophilic - needs low oxygen.', killedBy: 'Proper cooking, pasteurization', funFact: 'Causes 1.5 million US illnesses yearly' },
  'PSEUDOMONAS': { realName: 'Pseudomonas aeruginosa', classification: 'Bacteria (Gram-negative)', danger: 'High', foundIn: 'Water, soil, hospital equipment', diseases: 'Pneumonia, bloodstream infections', fact: 'Opportunistic - attacks weak immune systems.', science: 'Obligate aerobe, loves moist environments.', killedBy: 'Chlorine, high heat, quaternary ammonium', funFact: 'Can survive in distilled water' },
  'KLEBSIELLA': { realName: 'Klebsiella pneumoniae', classification: 'Bacteria (Gram-negative)', danger: 'High', foundIn: 'Hospital environments, human gut', diseases: 'Pneumonia, UTIs, bloodstream infections', fact: 'Increasingly antibiotic-resistant (CRE).', science: 'Encapsulated - thick protective slime layer.', killedBy: 'Alcohol, bleach, heat disinfection', funFact: 'Named after Edwin Klebs (1882)' },
  'CLOSTRIDIUM': { realName: 'Clostridium difficile', classification: 'Bacteria (Gram-positive)', danger: 'Very High', foundIn: 'Hospital surfaces, human gut', diseases: 'Severe diarrhea, colitis, toxic megacolon', fact: 'Spores survive on surfaces for MONTHS.', science: 'Anaerobic spore-former, produces toxins.', killedBy: 'Bleach sporicides, UV-C, steam sterilization', funFact: 'Often caused by antibiotic overuse' },
  
  // VIRUSES
  'NOROVIRUS': { realName: 'Norwalk virus', classification: 'Virus (RNA)', danger: 'High', foundIn: 'Surfaces, food, water, vomit particles', diseases: 'Acute gastroenteritis', fact: 'Only 18 particles needed for infection!', science: 'Non-enveloped = harder to kill with alcohol.', killedBy: 'Chlorine bleach (5000+ ppm), heat', funFact: 'Causes 685 million global infections/year' },
  'CORONAVIRUS': { realName: 'SARS-CoV-2', classification: 'Virus (Enveloped RNA)', danger: 'High', foundIn: 'Respiratory droplets, surfaces, air', diseases: 'COVID-19', fact: 'Enveloped = easier to kill with soap!', science: 'Spike proteins = crown appearance.', killedBy: '70%+ alcohol, soap, bleach, UV-C', funFact: 'First identified in the 1960s' },
  'INFLUENZA': { realName: 'Influenza virus', classification: 'Virus (RNA)', danger: 'Moderate', foundIn: 'Respiratory droplets, surfaces', diseases: 'Seasonal flu, bronchitis, pneumonia', fact: 'Mutates rapidly - needs annual vaccines.', science: 'Orthomyxovirus with 8 RNA segments.', killedBy: 'Alcohol sanitizers, soap, disinfectants', funFact: 'Spanish Flu (1918) killed 50+ million' },
  'RHINOVIRUS': { realName: 'Rhinovirus', classification: 'Virus (RNA)', danger: 'Low', foundIn: 'Respiratory droplets, hands, surfaces', diseases: 'Common cold', fact: '200+ different strains exist!', science: 'Picornavirus - tiny RNA virus.', killedBy: 'Soap, alcohol, disinfectants', funFact: 'Most frequent infectious agent in humans' },
  'HEPATITIS': { realName: 'Hepatitis A/B/C virus', classification: 'Virus (DNA/RNA)', danger: 'High', foundIn: 'Blood, bodily fluids, feces', diseases: 'Liver inflammation, cirrhosis, cancer', fact: 'Hep A can survive months in environment.', science: 'Different types have different structures.', killedBy: 'Bleach, autoclaving, alcohol (enveloped)', funFact: 'Hep B vaccine was first anti-cancer vaccine' },
  'ROTA VIRUS': { realName: 'Rotavirus', classification: 'Virus (RNA)', danger: 'Moderate', foundIn: 'Feces, contaminated surfaces, hands', diseases: 'Severe diarrhea, dehydration in children', fact: 'Vaccine has saved millions of lives.', science: 'Double-shelled = very stable outside host.', killedBy: 'Alcohol (95%), bleach, hand washing', funFact: 'Looks like a wheel under microscope' },
  
  // PARASITES
  'GIARDIA': { realName: 'Giardia lamblia', classification: 'Protozoan parasite', danger: 'Moderate', foundIn: 'Contaminated water, soil', diseases: 'Giardiasis (beaver fever)', fact: 'Forms cysts that survive months in cold water.', science: 'Flagellated protozoan with two nuclei.', killedBy: 'Boiling, filtration, UV light', funFact: 'Most common intestinal parasite in US' },
  'CRYPTO': { realName: 'Cryptosporidium parvum', classification: 'Protozoan parasite', danger: 'High', foundIn: 'Contaminated water, pools, farms', diseases: 'Cryptosporidiosis, severe diarrhea', fact: 'CHLORINE RESISTANT! Major outbreak risk.', science: 'Thick-walled oocyst protects it.', killedBy: 'Filtration, UV, boiling, ozone', funFact: 'Caused largest US waterborne outbreak (1993)' },
  'TOXOPLASMA': { realName: 'Toxoplasma gondii', classification: 'Protozoan parasite', danger: 'Moderate', foundIn: 'Cat feces, undercooked meat, soil', diseases: 'Toxoplasmosis, birth defects', fact: 'Can only reproduce in cats. Mind control? Maybe.', science: 'Forms cysts in brain and muscle tissue.', killedBy: 'Heat (67°C+), freezing, thorough cooking', funFact: '1/3 of humans are infected - usually harmless' },
  'TAPEWORM': { realName: 'Taenia solium', classification: 'Helminth parasite', danger: 'Moderate', foundIn: 'Undercooked pork, contaminated food', diseases: 'Taeniasis, cysticercosis', fact: 'Can grow to 7 meters in intestines!', science: 'Flatworm with suckers and hooks.', killedBy: 'Thorough cooking, freezing', funFact: 'Can form cysts in brain (neurocysticercosis)' },
  
  // FILTH & WASTE
  'SLUDGE': { realName: 'Organic Bio-Sludge', classification: 'Organic waste mixture', danger: 'Moderate', foundIn: 'Drains, grease traps, sewage', diseases: 'Various bacterial infections', fact: '90% water + organic matter. Bacteria buffet!', science: 'Anaerobic = produces hydrogen sulfide (rotten egg).', killedBy: 'Enzymatic cleaners, mechanical removal', funFact: 'Romans used urine (ammonia) to clean!' },
  'SEWAGE': { realName: 'Raw Sewage', classification: 'Wastewater mixture', danger: 'High', foundIn: 'Sewage backups, contaminated water', diseases: 'Cholera, dysentery, hepatitis, E.coli', fact: 'Contains millions of bacteria per milliliter.', science: 'Mix of human waste, pathogens, chemicals.', killedBy: 'Chlorination, UV treatment, heat', funFact: 'Can be processed into biogas and fertilizer' },
  'GREASE': { realName: 'Kitchen Grease/Fats', classification: 'Organic lipids', danger: 'Low', foundIn: 'Kitchen drains, restaurant pipes', diseases: 'Bacterial growth medium', fact: 'Buildup causes 47% of sewer overflows.', science: 'Triglycerides that solidify when cool.', killedBy: 'Degreasers, enzymatic cleaners, hot water', funFact: 'London had a 130-ton "fatberg" in 2017!' },
  'COMPOST ROT': { realName: 'Anaerobic Decomposition', classification: 'Biological process', danger: 'Low', foundIn: 'Compost piles, decaying organic matter', diseases: 'Respiratory irritation, fungal spores', fact: 'Anaerobic = stinky. Aerobic = earthy.', science: 'Bacteria break down organics without oxygen.', killedBy: 'Aeration, proper composting, removal', funFact: 'Proper composting reaches 70°C naturally!' },
  'BLOOD STAIN': { realName: 'Hemoglobin/Protein Residue', classification: 'Biological stain', danger: 'Moderate', foundIn: 'Surfaces, fabrics, medical equipment', diseases: 'Bloodborne pathogens (HIV, Hepatitis)', fact: 'Protein-based = needs enzyme cleaners.', science: 'Hemoglobin binds to surfaces when dry.', killedBy: 'Hydrogen peroxide, enzymatic cleaners', funFact: 'Luminol makes blood glow blue in dark!' },
  'RUST': { realName: 'Iron Oxide (Fe2O3)', classification: 'Chemical compound', danger: 'Low', foundIn: 'Metal pipes, appliances, tools', diseases: 'None, but harbors bacteria', fact: 'Iron + oxygen + water = rust.', science: 'Oxidation reaction of iron.', killedBy: 'Acids (vinegar, phosphoric acid)', funFact: 'Rust never sleeps - it\'s continuous oxidation' },
  
  // MOLD
  'BLACK MOLD': { realName: 'Stachybotrys chartarum', classification: 'Filamentous fungus', danger: 'High', foundIn: 'Water-damaged drywall, cellulose', diseases: 'Respiratory issues, mycotoxicosis', fact: 'Produces mycotoxins - toxic compounds.', science: 'Reproduces via spores, needs moisture.', killedBy: 'Borax, hydrogen peroxide, professional remediation', funFact: 'Not all black mold is toxic Stachybotrys' },
  'ASPERGILLUS': { realName: 'Aspergillus fumigatus', classification: 'Filamentous fungus', danger: 'Moderate', foundIn: 'Soil, compost, air conditioning', diseases: 'Aspergillosis, allergic reactions', fact: 'Most common airborne fungal pathogen.', science: 'Thermotolerant - survives high heat.', killedBy: 'Bleach, HEPA filtration, dehumidification', funFact: 'Used to make citric acid and soy sauce!' },
  'YEAST': { realName: 'Candida albicans', classification: 'Dimorphic fungus', danger: 'Low', foundIn: 'Human body, moist environments', diseases: 'Thrush, yeast infections', fact: 'Normal flora that overgrows.', science: 'Dimorphic - yeast and filament forms.', killedBy: 'Heat, antifungals, drying', funFact: 'Used in baking and brewing for millennia' },
  'ATHLETE FUNGUS': { realName: 'Trichophyton rubrum', classification: 'Dermatophyte fungus', danger: 'Low', foundIn: 'Locker rooms, pools, skin', diseases: 'Athlete\'s foot, jock itch, ringworm', fact: 'Feeds on keratin in skin/hair/nails.', science: 'Dermatophyte = skin-eating fungus.', killedBy: 'Antifungal creams, drying, UV light', funFact: '70% of people will get it in their lifetime' },
  
  // MINERAL
  'LIMESCALE': { realName: 'Calcium Carbonate (CaCO3)', classification: 'Mineral deposit', danger: 'Low', foundIn: 'Hard water areas, kettles, pipes', diseases: 'None, harbors bacteria', fact: 'Forms when hard water evaporates.', science: 'Alkaline pH >8.5 accelerates buildup.', killedBy: 'Acids (vinegar, citric, commercial descalers)', funFact: 'White Cliffs of Dover = giant limescale!' },
  'SOAP SCUM': { realName: 'Calcium Stearate/Soap Residue', classification: 'Chemical compound', danger: 'Low', foundIn: 'Showers, tubs, sinks', diseases: 'None', fact: 'Hard water + soap = insoluble scum.', science: 'Calcium/magnesium binds to soap fatty acids.', killedBy: 'Acidic cleaners, chelating agents', funFact: 'Liquid soap produces less scum than bar soap' },
  'URINE SCALE': { realName: 'Uric Acid Crystals', classification: 'Organic mineral', danger: 'Low', foundIn: 'Toilets, urinals, bathrooms', diseases: 'Bacterial growth, odors', fact: 'Uric acid + hard water minerals.', science: 'pH changes cause crystallization.', killedBy: 'Strong acids, enzymatic cleaners', funFact: 'Ancient Romans collected urine for cleaning!' },
  'HARD WATER': { realName: 'Calcium/Magnesium Ions', classification: 'Dissolved minerals', danger: 'Low', foundIn: 'Tap water in limestone areas', diseases: 'Dry skin, soap inefficiency', fact: 'Contains Ca²⁺ and Mg²⁺ ions.', science: 'Water percolates through limestone.', killedBy: 'Water softeners, ion exchange, RO', funFact: 'Not harmful to drink, just inconvenient!' }
};

let codexUnlocked = {}; // Track unlocked entries

// ==========================================
// BOSS SYSTEM - Epic Encounters
// ==========================================

const bossTypes = [
  {
    id: 'MEGA_COLI',
    name: 'MEGA E.COLI',
    emoji: '🦠',
    color: '#4ade80',
    hp: 30,  // Reduced from 100
    phases: 3,
    attacks: ['spawn_minions', 'toxic_wave', 'cell_divide'],
    desc: 'The mother of all bacteria'
  },
  {
    id: 'STAPH_KING',
    name: 'STAPH KING',
    emoji: '👑',
    color: '#fbbf24',
    hp: 35,  // Reduced from 45 - less tanky
    phases: 3,
    attacks: ['biofilm_shield', 'spore_burst', 'royal_summon'],
    desc: 'Crowned in golden slime'
  },
  {
    id: 'SLUDGE_BEHEMOTH',
    name: 'SLUDGE BEHEMOTH',
    emoji: '🦠',
    color: '#a16207',
    hp: 200,
    phases: 4,
    attacks: ['oil_slick', 'toxic_fumes', 'sludge_wave', 'absorb'],
    desc: 'Ancient accumulation of filth'
  },
  {
    id: 'MOLD_EMPEROR',
    name: 'MOLD EMPEROR',
    emoji: '🍄',
    color: '#a855f7',
    hp: 40,  // Reduced from 55 - still challenging but killable
    phases: 3,
    attacks: ['spore_cloud', 'mycelium_web', 'regenerate', 'toxic_spores'],
    desc: 'Spore-lord of the damp realms'
  }
];

class Boss {
  constructor(type) {
    this.type = type;
    // Spawn further out so player has time to shoot
    this.x = canvas.width + 100;
    this.targetX = canvas.width - 200; // Where it stops
    this.y = canvas.height / 2 - 75;
    this.width = 100;
    this.height = 100;
    this.hp = type.hp;
    this.maxHp = type.hp;
    this.phase = 1;
    this.phaseHpThreshold = type.hp / type.phases;
    this.attackTimer = 0;
    this.attackPattern = 0;
    this.wobble = 0;
    this.hitFlash = 0;
    this.enraged = false;
    this.shielded = 0;
  }
  
  update() {
    // ENRAGED MODE: Move closer and become more aggressive at low HP
    const hpPercent = this.hp / this.maxHp;
    // Different enrage thresholds for different bosses
    const enrageThreshold = this.type.id === 'STAPH_KING' ? 0.25 : 0.3; // Lower for Staph King
    this.enraged = hpPercent < enrageThreshold;
    
    // Movement - charge at player when enraged, otherwise hover
    if (this.enraged) {
      // Aggressive: move closer to player and chase
      const targetX = player.x + 180; // Slightly further back
      this.x += (targetX - this.x) * 0.015; // Slower approach
      // More erratic movement
      this.wobble += 0.06;
      this.y = canvas.height / 2 - this.height/2 + Math.sin(this.wobble) * 60;
    } else {
      // Normal: hover at target position
      if (this.x > this.targetX) {
        this.x -= 2;
      }
      this.wobble += 0.03;
      this.y = canvas.height / 2 - this.height/2 + Math.sin(this.wobble) * 50;
    }
    
    this.attackTimer++;
    
    // Check phase transition
    const newPhase = Math.ceil(this.hp / this.phaseHpThreshold);
    if (newPhase !== this.phase && newPhase > 0) {
      this.phase = newPhase;
      this.onPhaseChange();
    }
    
    // Boss attacks - FASTER when enraged but not as crazy
    const baseAttackRate = this.enraged ? 50 : Math.max(70, 200 - (this.phase * 30));
    if (this.attackTimer % baseAttackRate === 0) {
      this.performAttack();
    }
    
    // ENRAGED: Extra random attacks (less frequent for Staph King)
    const extraAttackChance = this.type.id === 'STAPH_KING' ? 0.15 : 0.25;
    if (this.enraged && this.attackTimer % 45 === 0 && Math.random() < extraAttackChance) {
      this.performAttack();
    }
    
    if (this.hitFlash > 0) this.hitFlash--;
    if (this.shielded > 0) this.shielded--;
  }
  
  onPhaseChange() {
    showNotification(`${this.type.name} PHASE ${this.phase}!`, this.type.color);
    createExplosion(this.x + this.width/2, this.y + this.height/2, this.type.color);
    
    // Spawn orbs on phase change
    for (let i = 0; i < 3; i++) {
      orbs.push(new Orb(this.x + Math.random() * 100, this.y + Math.random() * 100));
    }
  }
  
  performAttack() {
    const attack = this.type.attacks[this.attackPattern % this.type.attacks.length];
    this.attackPattern++;
    
    // When enraged, favor direct attacks (lower chance for charge)
    if (this.enraged && Math.random() < 0.25) { // Reduced from 0.4
      this.performChargeAttack();
      return;
    }
    
    switch(attack) {
      case 'spawn_minions':
        for (let i = 0; i < 2 + this.phase; i++) {
          enemies.push(new Enemy());
        }
        showFloatingText('SPAWNING!', this.x, this.y - 30, '#f00');
        break;
        
      case 'toxic_wave':
        // Create projectiles that move down - MORE when enraged
        const projectileCount = this.enraged ? 8 : 5;
        for (let i = 0; i < projectileCount; i++) {
          setTimeout(() => {
            const proj = new Projectile(this.x, this.y + 50, 
              { weapon: { projectile: 'milk', damage: 2, fireRate: 1 }, color: this.type.color }, 0);
            proj.vx = this.enraged ? -7 : -5; // Faster when enraged
            proj.vy = (Math.random() - 0.5) * (this.enraged ? 6 : 4);
            projectiles.push(proj);
          }, i * 150);
        }
        break;
        
      case 'biofilm_shield':
        // Temporarily invincible
        this.shielded = 180;
        showFloatingText('SHIELDED!', this.x, this.y - 30, '#ff0');
        break;
        
      case 'sludge_wave':
        // Fill bottom of screen with damaging sludge
        for (let i = 0; i < canvas.width; i += 50) {
          particles.push(new AcidParticle(i, canvas.height - 20));
        }
        break;
        
      case 'spore_cloud':
        // Slow down player
        activeEffects.slowed = this.enraged ? 240 : 180;
        showNotification('SPORE CLOUD - SLOWED!', '#a855f7');
        break;
        
      case 'regenerate':
        // Heal - REDUCED amounts
        const healAmount = this.enraged ? 5 : 10; // Reduced from 15/30
        this.hp = Math.min(this.maxHp, this.hp + healAmount);
        showFloatingText('REGEN!', this.x, this.y - 30, '#0f0');
        break;
        
      case 'oil_slick':
        // Make controls slippery
        activeEffects.slippery = 300;
        showNotification('OIL SLICK!', '#a16207');
        break;
        
      case 'mycelium_web':
        // Web that slows player movement
        activeEffects.slowed = 120;
        activeEffects.webbed = true;
        setTimeout(() => activeEffects.webbed = false, 3000);
        showNotification('TRAPPED IN WEB!', '#a855f7');
        break;
        
      case 'toxic_spores':
        // Poison damage over time
        activeEffects.poisoned = 300;
        showNotification('POISONED!', '#4ade80');
        break;
    }
  }
  
  performChargeAttack() {
    // Charge toward player!
    showNotification('BOSS CHARGING!', '#f00');
    const startX = this.x;
    const chargeSpeed = 6; // Reduced from 8
    let chargeDistance = 0;
    
    const chargeInterval = setInterval(() => {
      this.x -= chargeSpeed;
      chargeDistance += chargeSpeed;
      
      // Leave trail
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(this.x + this.width, this.y + this.height/2, this.type.color));
      }
      
      // Damage player if hit during charge (deals 1 damage with new HP system)
      if (Math.abs(this.x - player.x) < 80 && Math.abs(this.y - player.y) < 80) {
        if (player.iFrames === 0 && !activeEffects.invincible) {
          // Check for shield first
          if (activeEffects.shield) {
            activeEffects.shield = false;
            player.iFrames = 60;
            showNotification('SHIELD BROKEN!', '#fff');
          } else {
            // Deal 1 damage on charge hit (survivable with HP system!)
            player.takeDamage(1);
          }
        }
      }
      
      // Stop after charging far enough or hitting edge
      if (chargeDistance > 300 || this.x < 50) {
        clearInterval(chargeInterval);
        // Retreat back
        const retreatInterval = setInterval(() => {
          this.x += 3;
          if (this.x >= startX) {
            clearInterval(retreatInterval);
          }
        }, 16);
      }
    }, 16);
  }
  
  takeDamage(dmg) {
    if (this.shielded > 0) {
      showFloatingText('BLOCKED!', this.x, this.y - 40, '#ff0');
      return false;
    }
    
    this.hp -= dmg;
    this.hitFlash = 5;
    
    // Visual hit effect
    for (let i = 0; i < 8; i++) {
      particles.push(new Particle(this.x + this.width/2, this.y + this.height/2, this.type.color));
    }
    
    // Screen shake on hit
    canvas.style.transform = `translate(${(Math.random()-0.5)*10}px, ${(Math.random()-0.5)*10}px)`;
    setTimeout(() => canvas.style.transform = '', 50);
    
    if (this.hp <= 0) {
      this.die();
      return true;
    }
    return false;
  }
  
  die() {
    // MASSIVE rewards
    const bossBonus = 5000 * Math.floor(game.distance / 500 + 1);
    game.score += bossBonus;
    showNotification(`BOSS DEFEATED! +${bossBonus} PTS!`, '#ffd700');
    
    // Huge explosion
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        createExplosion(
          this.x + Math.random() * this.width,
          this.y + Math.random() * this.height,
          this.type.color
        );
      }, i * 20);
    }
    
    // Drop many orbs (including special ghoul orbs!)
    for (let i = 0; i < 10; i++) {
      const randomGhoul = game.unlockedGhouls[Math.floor(Math.random() * game.unlockedGhouls.length)];
      orbs.push(new Orb(this.x + Math.random() * 100, this.y + Math.random() * 100, randomGhoul));
    }
    
    // Heal/effects
    showFloatingText('VICTORY! RUN CONTINUES!', player.x, player.y - 60, '#0f0');
    
    // INCREASE DIFFICULTY
    game.speedMultiplier += 0.2;
    showNotification('SWARM INTENSIFIES!', '#f43f5e');
    
    if (audio) audio.playExplosion();
    
    // Continue the run!
    currentBoss = null;
    bossSpawned = false;
  }
  
  draw() {
    // Boss shadow
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.ellipse(this.x + this.width/2, this.y + this.height + 10, this.width/2, 20, 0, 0, Math.PI*2);
    ctx.fill();
    
    // Shield effect
    if (this.shielded > 0) {
      ctx.beginPath();
      ctx.arc(this.x + this.width/2, this.y + this.height/2, this.width * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 0, ${0.5 + Math.sin(game.frame * 0.2) * 0.3})`;
      ctx.lineWidth = 4;
      ctx.stroke();
    }
    
    // Health bar (multi-phase) - make it more prominent
    const barWidth = 300;
    const barX = canvas.width/2 - barWidth/2;
    const barY = 80;
    
    // Background
    ctx.fillStyle = '#000';
    ctx.fillRect(barX, barY, barWidth, 25);
    
    // Phase colors
    const phaseColors = ['#ef4444', '#f97316', '#fbbf24', '#22c55e'];
    const currentColor = phaseColors[this.phase - 1] || '#ef4444';
    
    // Health fill
    ctx.fillStyle = this.hitFlash > 0 ? '#fff' : currentColor;
    ctx.fillRect(barX + 2, barY + 2, (barWidth - 4) * (this.hp / this.maxHp), 21);
    
    // Border
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.strokeRect(barX, barY, barWidth, 25);
    
    // Name with outline for visibility
    ctx.font = 'bold 20px Courier New';
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.strokeText(`${this.type.name} - PHASE ${this.phase}/${this.type.phases}`, canvas.width/2, barY - 15);
    ctx.fillStyle = '#fff';
    ctx.fillText(`${this.type.name} - PHASE ${this.phase}/${this.type.phases}`, canvas.width/2, barY - 15);
    
    // HP text
    ctx.font = '14px Courier New';
    ctx.fillStyle = '#fff';
    ctx.fillText(`${Math.floor(this.hp)}/${this.maxHp} HP`, canvas.width/2, barY + 50);
    
    // Boss sprite (larger!)
    ctx.font = '100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = this.type.color;
    ctx.shadowBlur = 40;
    ctx.fillText(this.type.emoji, this.x + this.width/2, this.y + this.height/2 + 10);
    ctx.shadowBlur = 0;
    
    // Phase indicators
    for (let i = 0; i < this.type.phases; i++) {
      ctx.beginPath();
      ctx.arc(barX + 20 + i * 30, barY + 40, 10, 0, Math.PI * 2);
      ctx.fillStyle = i < this.phase ? phaseColors[i] : '#333';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}

let currentBoss = null;
let bossSpawned = false;

function checkBossSpawn() {
  const bossDistance = 500; // Spawn every 500m instead of 1000m for more action
  const distanceInt = Math.floor(game.distance);
  
  // Spawn boss every 500m (but not at the very start)
  if (distanceInt > 100 && distanceInt % bossDistance < 10 && !bossSpawned && !currentBoss) {
    spawnBoss();
    bossSpawned = true;
  }
  
  // Reset spawn flag after passing boss area (with buffer)
  if (distanceInt % bossDistance > 50) {
    bossSpawned = false;
  }
}

function spawnBoss() {
  bossSpawned = true;
  const bossType = bossTypes[Math.floor(Math.random() * bossTypes.length)];
  
  // Warning first
  showNotification(`⚠️ WARNING: ${bossType.name} DETECTED!`, '#f00');
  
  // Spawn boss after brief delay
  setTimeout(() => {
    currentBoss = new Boss(bossType);
    showNotification(`${bossType.name} APPROACHES!`, '#f00');
  }, 1500);
  
  // Clear some enemies but not all
  enemies = enemies.filter(e => e.x < canvas.width / 2);
}

// ==========================================
// GHOUL DATA - With ULTIMATE Abilities
// ==========================================

const ghouls = [
  {
    id: 'GOO',
    name: 'GOO GHOUL',
    emoji: '👻',
    color: '#00f0ff',
    unlockCost: 0,
    passive: 'Double orb magnet range',
    weapon: { name: 'Ectoplasm Spray', damage: 1, fireRate: 18, projectile: 'droplet' },
    tools: [
      { id: 'spray1', name: 'Dual Nozzle', emoji: '🧴', effect: 'double_shot', desc: 'Fire 2 streams' },
      { id: 'spray2', name: 'Wide Mist', emoji: '💨', effect: 'spread_5', desc: '5-way spread' },
      { id: 'spray3', name: 'Acid Rain', emoji: '🌧️', effect: 'acid_trail', desc: 'Poison trail' }
    ],
    ultimate: {
      name: 'ECTOPLASMIC OVERLOAD',
      desc: 'Screen-wide wave of cleansing energy',
      cost: 100,
      duration: 120
    }
  },
  {
    id: 'TRADIE',
    name: 'TRADIE GHOUL',
    emoji: '👷',
    color: '#f97316',
    unlockCost: 5000,
    passive: 'Piercing projectiles',
    weapon: { name: 'Nail Gun', damage: 2, fireRate: 10, projectile: 'nail' },
    tools: [
      { id: 'trade1', name: 'Hammer Smash', emoji: '🔨', effect: 'aoe_slam', desc: 'Area damage' },
      { id: 'trade2', name: 'Jackhammer', emoji: '⛏️', effect: 'rapid_fire', desc: 'Triple speed' },
      { id: 'trade3', name: 'Power Drill', emoji: '📍', effect: 'piercing_3', desc: '3x pierce' }
    ],
    ultimate: {
      name: 'DEMOLITION DAY',
      desc: 'All enemies take massive damage',
      cost: 100,
      duration: 60
    }
  },
  {
    id: 'ZEN',
    name: 'ZEN GHOUL',
    emoji: '🧘',
    color: '#fbbf24',
    unlockCost: 10000,
    passive: 'Slows enemy bullets',
    weapon: { name: 'Incense Orb', damage: 3, fireRate: 25, projectile: 'orb' },
    tools: [
      { id: 'zen1', name: 'Gong Wave', emoji: '🔴', effect: 'screen_stun', desc: 'Stun all enemies' },
      { id: 'zen2', name: 'Lotus Shield', emoji: '🌸', effect: 'shield', desc: 'Block 1 hit' },
      { id: 'zen3', name: 'Meditation', emoji: '☸️', effect: 'time_slow', desc: 'Slow time' }
    ],
    ultimate: {
      name: 'ENLIGHTENMENT',
      desc: 'Complete invincibility + instant kill touch',
      cost: 100,
      duration: 180
    }
  },
  {
    id: 'GARDEN',
    name: 'GARDEN GHOUL',
    emoji: '👩‍🌾',
    color: '#22c55e',
    unlockCost: 15000,
    passive: 'Health regeneration',
    weapon: { name: 'Pruning Shears', damage: 2, fireRate: 12, projectile: 'leaf' },
    tools: [
      { id: 'garden1', name: 'Thorn Wall', emoji: '🌿', effect: 'thorn_barrier', desc: 'Damage on contact' },
      { id: 'garden2', name: 'Seed Bomb', emoji: '🌱', effect: 'explosive_seed', desc: 'Explosive growth' },
      { id: 'garden3', name: 'Healing Dew', emoji: '🌴', effect: 'heal_over_time', desc: 'Regenerate HP' }
    ],
    ultimate: {
      name: 'OVERGROWTH',
      desc: 'Vines cover screen, trapping & damaging enemies',
      cost: 100,
      duration: 200
    }
  },
  {
    id: 'PARTY',
    name: 'PARTY GHOUL',
    emoji: '🥳',
    color: '#a855f7',
    unlockCost: 20000,
    passive: 'Random crit damage (20% chance)',
    weapon: { name: 'Confetti Cannon', damage: 1, fireRate: 6, projectile: 'spread' },
    tools: [
      { id: 'party1', name: 'Disco Ball', emoji: '🪩', effect: 'laser_beams', desc: 'Auto-targeting lasers' },
      { id: 'party2', name: 'Party Popper', emoji: '🎉', effect: 'burst_fire', desc: '8-way burst' },
      { id: 'party3', name: 'Glow Sticks', emoji: '💡', effect: 'homing', desc: 'Homing projectiles' }
    ],
    ultimate: {
      name: 'RAVE MODE',
      desc: 'Rainbow explosions everywhere! 10x score multiplier',
      cost: 100,
      duration: 300
    }
  },
  {
    id: 'BEAUTY',
    name: 'BEAUTY GHOUL',
    emoji: '💅',
    color: '#ec4899',
    unlockCost: 25000,
    passive: 'Perfect dodge = shield',
    weapon: { name: 'Polish Beam', damage: 4, fireRate: 20, projectile: 'beam' },
    tools: [
      { id: 'beauty1', name: 'Makeup Spray', emoji: '💄', effect: 'blind_enemies', desc: 'Blind nearby foes' },
      { id: 'beauty2', name: 'Sonic Cleaner', emoji: '🔊', effect: 'sonic_boom', desc: 'Push enemies back' },
      { id: 'beauty3', name: 'Mirror Shield', emoji: '🪞', effect: 'reflect', desc: 'Reflect projectiles' }
    ],
    ultimate: {
      name: 'FLAWLESS',
      desc: 'Transform - 360° beam sweep + invincibility',
      cost: 100,
      duration: 150
    }
  },
  {
    id: 'SCHOLAR',
    name: 'SCHOLAR GHOUL',
    emoji: '👨‍🎓',
    color: '#3b82f6',
    unlockCost: 30000,
    passive: 'Scanner reveals weaknesses',
    weapon: { name: 'Book Smack', damage: 3, fireRate: 30, projectile: 'tome' },
    tools: [
      { id: 'scholar1', name: 'Microscope', emoji: '🔬', effect: 'weakpoint', desc: '3x weak spot dmg' },
      { id: 'scholar2', name: 'Chemical Flask', emoji: '🧪', effect: 'elemental_burst', desc: 'Random element' },
      { id: 'scholar3', name: 'Library Card', emoji: '📚', effect: 'summon_tomes', desc: 'Orbiting books' }
    ],
    ultimate: {
      name: 'KNOWLEDGE BOMB',
      desc: 'All enemies take 10x weakness damage',
      cost: 100,
      duration: 60
    }
  },
  {
    id: 'BABY',
    name: 'BABY GHOUL',
    emoji: '👶',
    color: '#f43f5e',
    unlockCost: 50000,
    passive: 'Randomizes all stats every 10s',
    weapon: { name: 'Bottle Blast', damage: '???', fireRate: 15, projectile: 'milk' },
    tools: [
      { id: 'baby1', name: 'Rattle Smash', emoji: '🪇', effect: 'random_aoe', desc: 'Random explosions' },
      { id: 'baby2', name: 'Pacifier', emoji: '🍭', effect: 'calm_zone', desc: 'Safe bubble' },
      { id: 'baby3', name: 'Toy Blocks', emoji: '🧸', effect: 'block_shield', desc: 'Building shield' }
    ],
    ultimate: {
      name: 'TANTRUM',
      desc: 'CHAOS - Random effects every second!',
      cost: 100,
      duration: 240
    }
  }
];

// ==========================================
// SPECIAL MOVE / ULTIMATE SYSTEM
// ==========================================

let ultimateActive = false;
let ultimateTimer = 0;
let ultimateEffects = [];

function activateUltimate() {
  if (!game.currentGhoul || game.orbs < game.currentGhoul.ultimate.cost || ultimateActive) return;
  
  game.orbs = 0;
  
  // INSTANT bar clear - disable transition, set to 0, then re-enable
  const orbFill = document.getElementById('orbFill');
  if (orbFill) {
    orbFill.style.transition = 'none';
    orbFill.style.width = '0%';
    // Force reflow
    void orbFill.offsetWidth;
    orbFill.style.transition = 'width 0.3s';
  }
  
  updateUI(); // Force immediate UI update to clear bar
  
  ultimateActive = true;
  ultimateTimer = game.currentGhoul.ultimate.duration;
  
  showNotification(`${game.currentGhoul.ultimate.name}!`, game.currentGhoul.color);
  createUltimateVFX();
  
  // Play ultimate sound
  if (audio) audio.playUltimate();
  
  switch(game.currentGhoul.id) {
    case 'GOO':
      // Ectoplasmic Overload - screen wave
      ultimateEffects.push({ type: 'wave', progress: 0 });
      break;
    case 'TRADIE':
      // Demolition Day - instant damage all
      enemies.forEach(e => {
        e.takeDamage(15);
        createExplosion(e.x + e.width/2, e.y + e.height/2, '#f97316');
      });
      break;
    case 'ZEN':
      // Enlightenment - invincibility + kill touch
      activeEffects.invincible = true;
      activeEffects.instantKill = true;
      break;
    case 'GARDEN':
      // Overgrowth - vines trap enemies
      ultimateEffects.push({ type: 'vines' });
      enemies.forEach(e => {
        e.vined = true;
        e.vineLife = 200;
      });
      break;
    case 'PARTY':
      // Rave Mode - rainbow explosions, 10x score
      activeEffects.scoreMultiplier = 10;
      activeEffects.raveMode = true;
      break;
    case 'BEAUTY':
      // Flawless - 360 beam sweep
      activeEffects.beamSweep = true;
      activeEffects.invincible = true;
      break;
    case 'SCHOLAR':
      // Knowledge Bomb - all weaknesses exposed
      enemies.forEach(e => {
        e.weaknessExposed = true;
        e.takeDamage(Math.floor(e.hp * 0.8));
      });
      break;
    case 'BABY':
      // Tantrum - chaos mode
      activeEffects.chaosMode = true;
      break;
  }
}

function updateUltimate() {
  if (!ultimateActive) return;
  
  ultimateTimer--;
  
  // GOO wave effect
  if (game.currentGhoul?.id === 'GOO') {
    const wave = ultimateEffects.find(e => e.type === 'wave');
    if (wave) {
      wave.progress += 15;
      // Damage all enemies hit by wave
      enemies.forEach(e => {
        if (!e.waveHit && e.x < wave.progress) {
          e.waveHit = true;
          e.takeDamage(5);
          createHitSparks(e.x + e.width/2, e.y + e.height/2);
        }
      });
      if (wave.progress > canvas.width + 200) {
        ultimateEffects = ultimateEffects.filter(e => e.type !== 'wave');
      }
    }
  }
  
  // PARTY rave mode effects
  if (activeEffects.raveMode && game.frame % 5 === 0) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    createExplosion(x, y, `hsl(${Math.random() * 360}, 100%, 50%)`);
    
    // Random enemy damage
    if (enemies.length > 0 && Math.random() < 0.3) {
      const target = enemies[Math.floor(Math.random() * enemies.length)];
      target.takeDamage(2);
    }
  }
  
  // BEAUTY beam sweep
  if (activeEffects.beamSweep) {
    const angle = (game.frame * 0.1) % (Math.PI * 2);
    const bx = player.x + player.width/2 + Math.cos(angle) * 400;
    const by = player.y + player.height/2 + Math.sin(angle) * 400;
    
    ctx.beginPath();
    ctx.moveTo(player.x + player.width/2, player.y + player.height/2);
    ctx.lineTo(bx, by);
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 30;
    ctx.shadowColor = '#ec4899';
    ctx.shadowBlur = 50;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Damage enemies in beam
    enemies.forEach(e => {
      const ex = e.x + e.width/2;
      const ey = e.y + e.height/2;
      const dist = pointToLineDistance(ex, ey, 
        player.x + player.width/2, player.y + player.height/2, bx, by);
      if (dist < 40) {
        e.takeDamage(3);
      }
    });
  }
  
  // BABY chaos mode
  if (activeEffects.chaosMode && game.frame % 60 === 0) {
    const chaosEffects = ['screen_stun', 'time_slow', 'heal_over_time', 'shield', 'homing'];
    const randomEffect = chaosEffects[Math.floor(Math.random() * chaosEffects.length)];
    applyTemporaryEffect(randomEffect, 60);
    showFloatingText('CHAOS!', player.x, player.y - 50, '#f43f5e');
  }
  
  // End ultimate
  if (ultimateTimer <= 0) {
    endUltimate();
  }
}

function endUltimate() {
  ultimateActive = false;
  activeEffects.invincible = false;
  activeEffects.instantKill = false;
  activeEffects.scoreMultiplier = 1;
  activeEffects.raveMode = false;
  activeEffects.beamSweep = false;
  activeEffects.chaosMode = false;
  ultimateEffects = [];
  
  // Clear vine status
  enemies.forEach(e => {
    e.vined = false;
    e.waveHit = false;
  });
  
  updateUI(); // Update UI to show ultimate ended
}

function pointToLineDistance(px, py, x1, y1, x2, y2) {
  const A = px - x1;
  const B = py - y1;
  const C = x2 - x1;
  const D = y2 - y1;
  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = -1;
  if (lenSq !== 0) param = dot / lenSq;
  let xx, yy;
  if (param < 0) { xx = x1; yy = y1; }
  else if (param > 1) { xx = x2; yy = y2; }
  else { xx = x1 + param * C; yy = y1 + param * D; }
  const dx = px - xx;
  const dy = py - yy;
  return Math.sqrt(dx * dx + dy * dy);
}

function createUltimateVFX() {
  // Flash screen
  const flash = document.createElement('div');
  flash.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: ${game.currentGhoul.color};
    opacity: 0.8;
    pointer-events: none;
    z-index: 9999;
    transition: opacity 0.5s;
  `;
  document.body.appendChild(flash);
  setTimeout(() => {
    flash.style.opacity = '0';
    setTimeout(() => flash.remove(), 500);
  }, 100);
  
  // Shockwave rings
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      createShockwave(player.x + player.width/2, player.y + player.height/2);
    }, i * 200);
  }
}

function applyTemporaryEffect(effect, duration) {
  const oldValue = activeEffects[effect];
  activeEffects[effect] = true;
  setTimeout(() => {
    if (oldValue === undefined || oldValue === false) {
      activeEffects[effect] = false;
    }
  }, duration * 16.67); // Convert frames to ms
}

// ==========================================
// TOOL SYSTEM
// ==========================================

let toolPods = [];
let equippedTools = [];
const activeEffects = {
  doubleShot: false,
  spreadShot: 0,
  piercing: 1,
  fireRateMult: 1,
  damageMult: 1,
  magnetRange: 150,
  shield: false,
  shieldCount: 0,
  timeSlow: false,
  thornBarrier: false,
  homing: false,
  explosive: false,
  laserBeams: false,
  shotgun: false,
  reflect: false,
  regen: false,
  speedBoost: 1,
  ghost: false,
  orbFrenzy: 1,
  drone: false,
  blackHole: false,
  clone: false,
  vampire: false,
  critChance: 0,
  ultOverdrive: false,
  orbitingBooks: 0,
  healOverTime: false,
  invincible: false,
  instantKill: false,
  scoreMultiplier: 1,
  raveMode: false,
  beamSweep: false,
  chaosMode: false,
  weakpointDamage: 1
};

class ToolPod {
  constructor() {
    // Pick from ALL unlocked ghouls' tools!
    const availableGhouls = ghouls.filter(g => game.unlockedGhouls.includes(g.id));
    const randomGhoul = availableGhouls[Math.floor(Math.random() * availableGhouls.length)];
    
    this.ghoulId = randomGhoul.id;
    const toolTemplate = randomGhoul.tools[Math.floor(Math.random() * randomGhoul.tools.length)];
    this.tool = { ...toolTemplate, uid: Date.now() + Math.random() };
    this.ghoulColor = randomGhoul.color;
    
    this.x = canvas.width + 80;
    this.y = Math.random() * (canvas.height - 200) + 100;
    this.radius = 35;
    this.speed = 2;
    this.pulse = 0;
    this.rotation = 0;
  }
  
  update() {
    this.x -= this.speed;
    this.pulse += 0.08;
    this.rotation += 0.02;
  }
  
  draw() {
    const glow = Math.sin(this.pulse) * 15 + 25;
    
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = this.ghoulColor;
    ctx.lineWidth = 3;
    ctx.shadowColor = this.ghoulColor;
    ctx.shadowBlur = glow;
    ctx.setLineDash([10, 5]);
    ctx.stroke();
    
    ctx.rotate(-this.rotation * 2);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius - 8, 0, Math.PI * 2);
    ctx.setLineDash([5, 10]);
    ctx.stroke();
    
    ctx.restore();
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius - 15, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(this.ghoulColor, 0.3);
    ctx.fill();
    
    ctx.font = '30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.tool.emoji, this.x, this.y);
    
    ctx.font = 'bold 10px Courier New';
    ctx.fillStyle = '#fff';
    ctx.fillText(this.tool.name.toUpperCase(), this.x, this.y + this.radius + 15);
    
    ctx.font = '9px Courier New';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText(this.tool.desc, this.x, this.y + this.radius + 28);
  }
}

function spawnToolPod() {
  if (game.frame % 1800 === 0 && toolPods.length < 2) {
    toolPods.push(new ToolPod());
  }
}

function collectTool(tool) {
  if (equippedTools.length >= 3) equippedTools.shift();
  equippedTools.push(tool);
  applyToolEffect(tool);
  updateToolBeltUI();
  showNotification(`EQUIPPED: ${tool.name}!`, tool.effect === 'time_slow' ? '#fbbf24' : null);
  createCollectParticles(tool.emoji);
  
  // Play powerup sound
  if (audio) audio.playPowerUp();
}

function applyToolEffect(tool) {
  switch(tool.effect) {
    case 'double_shot': activeEffects.doubleShot = true; break;
    case 'spread_5': activeEffects.spreadShot = 5; break;
    case 'rapid_fire': activeEffects.fireRateMult = 0.33; break;
    case 'piercing_3': activeEffects.piercing = 3; break;
    case 'screen_stun': stunAllEnemies(); break;
    case 'shield': activeEffects.shield = true; break;
    case 'time_slow': activateTimeSlow(); break;
    case 'thorn_barrier': activeEffects.thornBarrier = true; break;
    case 'heal_over_time': activeEffects.healOverTime = true; break;
    case 'laser_beams': activeEffects.laserBeams = true; break;
    case 'burst_fire': activeEffects.spreadShot = 8; break;
    case 'homing': activeEffects.homing = true; break;
    case 'blind_enemies': blindEnemies(); break;
    case 'sonic_boom': sonicBoom(); break;
    case 'weakpoint': activeEffects.weakpointDamage = 3; break;
    case 'elemental_burst': elementalBurst(); break;
    case 'summon_tomes': activeEffects.orbitingBooks = 3; break;
  }
}

function stunAllEnemies() {
  enemies.forEach(e => {
    e.stunned = 180;
    showFloatingText('STUNNED!', e.x, e.y - 30, '#fbbf24');
  });
}

function activateTimeSlow() {
  activeEffects.timeSlow = true;
  game.speedMultiplier *= 0.3;
  setTimeout(() => {
    activeEffects.timeSlow = false;
    game.speedMultiplier /= 0.3;
  }, 5000);
  showNotification('TIME SLOW ACTIVATED!', '#fbbf24');
}

function blindEnemies() {
  enemies.forEach(e => { e.blinded = 300; });
  showNotification('ENEMIES BLINDED!', '#ec4899');
}

function sonicBoom() {
  enemies.forEach(e => {
    e.x += 200;
    showFloatingText('PUSH!', e.x, e.y, '#ec4899');
  });
  createShockwave(player.x + player.width/2, player.y + player.height/2);
}

function elementalBurst() {
  const elements = ['#ef4444', '#22c55e', '#3b82f6', '#fbbf24'];
  enemies.forEach((e, i) => {
    setTimeout(() => {
      e.takeDamage(5);
      createExplosion(e.x + e.width/2, e.y + e.height/2, elements[i % 4]);
    }, i * 100);
  });
}

// ==========================================
// PROJECTILE SYSTEM
// ==========================================

let projectiles = [];
let lasers = [];

class Projectile {
  constructor(x, y, ghoul, angle = 0, isToolEnhanced = false) {
    this.x = x;
    this.y = y;
    this.vx = 15;
    this.vy = angle * 5;
    this.ghoul = ghoul;
    const baseDamage = ghoul.weapon.damage === '???' ? Math.floor(Math.random() * 5) + 1 : ghoul.weapon.damage;
    this.damage = baseDamage * (activeEffects.damageMult || 1);
    // Longer life when boss is present to reach across screen
    this.life = currentBoss ? 180 : 60;
    this.piercing = activeEffects.piercing;
    this.hits = [];
    this.isHoming = activeEffects.homing;
    this.target = null;
    this.hasAcid = equippedTools.some(t => t.effect === 'acid_trail');
    
    if (isToolEnhanced) { this.damage *= 1.5; this.vx *= 1.2; }
  }
  
  update() {
    if (this.isHoming && enemies.length > 0) {
      if (!this.target || this.target.hp <= 0) {
        let nearest = null, nearestDist = Infinity;
        enemies.forEach(e => {
          const dx = e.x - this.x, dy = e.y - this.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < nearestDist) { nearestDist = dist; nearest = e; }
        });
        this.target = nearest;
      }
      if (this.target) {
        const dx = (this.target.x + this.target.width/2) - this.x;
        const dy = (this.target.y + this.target.height/2) - this.y;
        const angle = Math.atan2(dy, dx);
        this.vx = Math.cos(angle) * 12;
        this.vy = Math.sin(angle) * 12;
      }
    }
    
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    
    if (this.hasAcid && game.frame % 5 === 0) {
      particles.push(new AcidParticle(this.x, this.y));
    }
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    if (this.isHoming) ctx.rotate(Math.atan2(this.vy, this.vx));
    
    switch(this.ghoul.weapon.projectile) {
      case 'nail': ctx.fillStyle = '#8b4513'; ctx.fillRect(-8, -3, 16, 6); break;
      case 'orb':
        ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2);
        ctx.fillStyle = this.ghoul.color;
        ctx.shadowColor = '#fbbf24'; ctx.shadowBlur = 15; ctx.fill();
        break;
      case 'leaf':
        ctx.fillStyle = '#22c55e';
        ctx.beginPath(); ctx.ellipse(0, 0, 10, 6, 0.5, 0, Math.PI * 2); ctx.fill();
        break;
      case 'spread':
        ctx.fillStyle = `hsl(${game.frame * 10}, 100%, 50%)`;
        ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill();
        break;
      case 'beam':
        ctx.fillStyle = this.ghoul.color;
        ctx.shadowColor = '#ec4899'; ctx.shadowBlur = 20;
        ctx.fillRect(0, -6, 40, 12);
        break;
      case 'tome': ctx.font = '20px Arial'; ctx.fillText('📖', 0, 5); break;
      case 'milk': ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fill(); break;
      default:
        ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fillStyle = this.ghoul.color;
        ctx.shadowColor = this.ghoul.color; ctx.shadowBlur = 10; ctx.fill();
    }
    ctx.restore();
    ctx.shadowBlur = 0;
  }
}

class LaserBeam {
  constructor() {
    this.angle = Math.random() * Math.PI * 2;
    this.life = 120;
    this.target = null;
  }
  
  update() {
    this.life--;
    if (!this.target || this.target.hp <= 0 || this.target.x < -50) {
      this.target = enemies.find(e => e.x > 0 && e.x < canvas.width);
    }
    if (this.target) {
      const dx = (this.target.x + this.target.width/2) - (player.x + player.width);
      const dy = (this.target.y + this.target.height/2) - (player.y + player.height/2);
      this.angle = Math.atan2(dy, dx);
      if (game.frame % 10 === 0) {
        this.target.takeDamage(1);
        createHitSparks(this.target.x + this.target.width/2, this.target.y + this.target.height/2);
      }
    }
  }
  
  draw() {
    if (!this.target) return;
    const startX = player.x + player.width;
    const startY = player.y + player.height/2;
    const endX = startX + Math.cos(this.angle) * 500;
    const endY = startY + Math.sin(this.angle) * 500;
    
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgba(168, 85, 247, ${this.life / 120})`;
    ctx.lineWidth = 4;
    ctx.shadowColor = '#a855f7';
    ctx.shadowBlur = 20;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

class AcidParticle {
  constructor(x, y) {
    this.x = x; this.y = y; this.life = 60; this.radius = 15;
  }
  update() {
    this.life--;
    enemies.forEach(e => {
      const dx = e.x + e.width/2 - this.x;
      const dy = e.y + e.height/2 - this.y;
      if (Math.sqrt(dx*dx + dy*dy) < this.radius + e.width/2) {
        if (game.frame % 30 === 0) e.takeDamage(1);
      }
    });
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * (this.life / 60), 0, Math.PI * 2);
    ctx.fillStyle = `rgba(50, 255, 50, ${this.life / 120})`;
    ctx.fill();
  }
}

function fireWeapon() {
  if (!game.currentGhoul) return;
  
  const adjustedFireRate = Math.floor(
    (game.currentGhoul.id === 'PARTY' 
      ? game.currentGhoul.weapon.fireRate + Math.floor(Math.random() * 5)
      : game.currentGhoul.weapon.fireRate) * activeEffects.fireRateMult
  );
  
  if (game.frame % adjustedFireRate !== 0) return;
  
  const centerX = player.x + player.width;
  const centerY = player.y + player.height / 2;
  
  if (activeEffects.spreadShot > 0) {
    const count = activeEffects.spreadShot;
    for (let i = 0; i < count; i++) {
      const angle = (i / (count - 1) - 0.5) * 0.8;
      projectiles.push(new Projectile(centerX, centerY, game.currentGhoul, angle, true));
    }
  } else if (activeEffects.doubleShot) {
    projectiles.push(new Projectile(centerX, centerY - 10, game.currentGhoul, -0.05));
    projectiles.push(new Projectile(centerX, centerY + 10, game.currentGhoul, 0.05));
  } else {
    if (game.currentGhoul.id === 'PARTY') {
      projectiles.push(new Projectile(centerX, centerY, game.currentGhoul, (Math.random() - 0.5) * 0.8));
    } else if (game.currentGhoul.id === 'BABY') {
      projectiles.push(new Projectile(centerX, centerY, game.currentGhoul, (Math.random() - 0.5)));
    } else {
      projectiles.push(new Projectile(centerX, centerY, game.currentGhoul, 0));
    }
  }
  
  // Play shoot sound
  if (audio) audio.playShoot();
}

// ==========================================
// GAME STATE & PLAYER
// ==========================================

const game = {
  active: false,
  score: 0,
  totalScore: 0,
  distance: 0,
  speed: 5,
  speedMultiplier: 1,
  orbs: 0,
  maxOrbs: 100,
  frame: 0,
  currentGhoul: null,
  unlockedGhouls: ['GOO'],
  // Progression system
  level: 1,
  intensity: 1,
  waveStartTime: 0
};

const player = {
  x: 100, y: 0, width: 60, height: 60,
  velocity: 0, gravity: 0.4, lift: -0.6, maxVelocity: 10,
  trail: [], iFrames: 0,
  hp: 3,
  maxHp: 3,
  
  reset() {
    this.y = canvas.height / 2;
    this.velocity = 0;
    this.trail = [];
    this.iFrames = 0;
    this.hp = 3; // Reset HP on new run
  },
  
  takeDamage(amount = 1) {
    if (this.iFrames > 0 || activeEffects.invincible) return;
    
    this.hp -= amount;
    this.iFrames = 60;
    
    // Screen flash effect
    const flash = document.createElement('div');
    flash.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.4);pointer-events:none;z-index:9999;';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 150);
    
    if (this.hp <= 0) {
      gameOver();
    } else {
      showNotification(`HP: ${this.hp}/${this.maxHp}`, '#f00');
    }
  },
  
  update() {
    if (input.active) this.velocity += this.lift;
    else this.velocity += this.gravity;
    
    this.velocity = Math.max(-this.maxVelocity, Math.min(this.maxVelocity, this.velocity));
    this.y += this.velocity;
    
    if (this.y < 0) { this.y = 0; this.velocity = 0; }
    if (this.y > canvas.height - this.height) { this.y = canvas.height - this.height; this.velocity = 0; }
    
    this.trail.push({x: this.x, y: this.y + this.height/2, alpha: 1});
    if (this.trail.length > 20) this.trail.shift();
    this.trail.forEach(t => t.alpha -= 0.05);
    this.trail = this.trail.filter(t => t.alpha > 0);
    
    if (this.iFrames > 0) this.iFrames--;
    
    if (activeEffects.thornBarrier) {
      enemies.forEach(e => {
        const dx = e.x + e.width/2 - (this.x + this.width/2);
        const dy = e.y + e.height/2 - (this.y + this.height/2);
        if (Math.sqrt(dx*dx + dy*dy) < 80 && game.frame % 20 === 0) {
          e.takeDamage(1);
          showFloatingText('THORN!', e.x, e.y - 20, '#22c55e');
        }
      });
    }
    
    if (activeEffects.healOverTime && game.frame % 60 === 0) {
      showFloatingText('+HP', this.x, this.y - 30, '#22c55e');
    }
    
    fireWeapon();
  },
  
  draw() {
    const ghoul = game.currentGhoul || ghouls[0];
    
    if (activeEffects.thornBarrier) {
      ctx.beginPath();
      ctx.arc(this.x + this.width/2, this.y + this.height/2, 80, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 10]);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    if (activeEffects.shield || activeEffects.invincible) {
      ctx.beginPath();
      ctx.arc(this.x + this.width/2, this.y + this.height/2, 50, 0, Math.PI * 2);
      ctx.strokeStyle = activeEffects.invincible 
        ? `rgba(255, 215, 0, ${0.5 + Math.sin(game.frame * 0.2) * 0.3})`
        : `rgba(255, 255, 255, ${0.5 + Math.sin(game.frame * 0.1) * 0.3})`;
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    this.trail.forEach((t, i) => {
      ctx.beginPath();
      ctx.arc(t.x - i * 3, t.y, 8 - i * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(ghoul.color, t.alpha * 0.5);
      ctx.fill();
    });
    
    if (this.iFrames > 0 && Math.floor(game.frame / 4) % 2 === 0) return;
    
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = ghoul.color;
    ctx.shadowBlur = 30;
    ctx.fillText(ghoul.emoji, this.x + this.width/2, this.y + this.height/2);
    ctx.shadowBlur = 0;
  }
};

// ==========================================
// ENEMIES
// ==========================================

let enemies = [];

const enemyTypes = [
  // === BACTERIA (1-8) ===
  { name: 'E.COLI', emoji: '🦠', color: '#4ade80', hp: 3, speed: 3, score: 100, weakness: 'alcohol', desc: 'Gram-negative, causes food poisoning' },
  { name: 'STAPH', emoji: '🧫', color: '#fbbf24', hp: 5, speed: 2, score: 200, weakness: 'heat', desc: 'Forms biofilms, skin infections' },
  { name: 'SALMONELLA', emoji: '🐔', color: '#ea580c', hp: 4, speed: 3.5, score: 180, weakness: 'heat', desc: 'Foodborne, poultry-associated' },
  { name: 'LISTERIA', emoji: '🥛', color: '#06b6d4', hp: 6, speed: 2.5, score: 350, weakness: 'heat', desc: 'Cold-resistant, deli meats' },
  { name: 'CAMPYLOBACTER', emoji: '🍗', color: '#84cc16', hp: 4, speed: 3.8, score: 220, weakness: 'heat', desc: 'Most common food poisoning' },
  { name: 'PSEUDOMONAS', emoji: '💧', color: '#14b8a6', hp: 5, speed: 3.2, score: 280, weakness: 'bleach', desc: 'Water-loving, opportunistic' },
  { name: 'KLEBSIELLA', emoji: '🫁', color: '#8b5cf6', hp: 7, speed: 2, score: 320, weakness: 'alcohol', desc: 'Hospital-acquired pneumonia' },
  { name: 'CLOSTRIDIUM', emoji: '⚠️', color: '#dc2626', hp: 8, speed: 1.8, score: 400, weakness: 'bleach', desc: 'Spore-forming, toxins' },
  
  // === VIRUSES (9-14) ===
  { name: 'NOROVIRUS', emoji: '🤢', color: '#f87171', hp: 2, speed: 5, score: 150, weakness: 'bleach', desc: 'Winter vomiting bug' },
  { name: 'CORONAVIRUS', emoji: '🦠', color: '#ef4444', hp: 4, speed: 4, score: 400, weakness: 'sanitizer', desc: 'Respiratory droplets' },
  { name: 'INFLUENZA', emoji: '🤧', color: '#f97316', hp: 3, speed: 4.5, score: 250, weakness: 'sanitizer', desc: 'Seasonal flu, RNA virus' },
  { name: 'RHINOVIRUS', emoji: '😷', color: '#3b82f6', hp: 2, speed: 5.5, score: 120, weakness: 'soap', desc: 'Common cold virus' },
  { name: 'HEPATITIS', emoji: '🩸', color: '#a855f7', hp: 6, speed: 2.5, score: 450, weakness: 'bleach', desc: 'Liver inflammation' },
  { name: 'ROTA VIRUS', emoji: '💩', color: '#22c55e', hp: 3, speed: 4, score: 200, weakness: 'sanitizer', desc: 'Severe diarrhea in kids' },
  
  // === PARASITES & PROTOZOA (15-18) ===
  { name: 'GIARDIA', emoji: '🦟', color: '#65a30d', hp: 5, speed: 2.8, score: 280, weakness: 'boiling', desc: 'Beaver fever, waterborne' },
  { name: 'CRYPTO', emoji: '💧', color: '#0ea5e9', hp: 6, speed: 2.2, score: 350, weakness: 'filtration', desc: 'Chlorine-resistant parasite' },
  { name: 'TOXOPLASMA', emoji: '🐱', color: '#ec4899', hp: 4, speed: 3, score: 240, weakness: 'heat', desc: 'Cat parasite, cysts' },
  { name: 'TAPEWORM', emoji: '🪱', color: '#fbbf24', hp: 8, speed: 1.5, score: 420, weakness: 'heat', desc: 'Intestinal parasite' },
  
  // === FILTH & WASTE (19-24) ===
  { name: 'SLUDGE', emoji: '🛢️', color: '#a16207', hp: 8, speed: 1.5, score: 300, weakness: 'solvent', desc: 'Organic waste buildup' },
  { name: 'SEWAGE', emoji: '🚽', color: '#713f12', hp: 9, speed: 1.8, score: 380, weakness: 'chlorine', desc: 'Raw sewage bacteria' },
  { name: 'GREASE', emoji: '🥓', color: '#ca8a04', hp: 7, speed: 2, score: 320, weakness: 'degreaser', desc: 'Kitchen grease buildup' },
  { name: 'COMPOST ROT', emoji: '🍂', color: '#65a30d', hp: 6, speed: 2.5, score: 260, weakness: 'aeration', desc: 'Anaerobic decomposition' },
  { name: 'BLOOD STAIN', emoji: '🩸', color: '#991b1b', hp: 5, speed: 3, score: 290, weakness: 'peroxide', desc: 'Protein-based stain' },
  { name: 'RUST', emoji: '🔧', color: '#9ca3af', hp: 10, speed: 1, score: 350, weakness: 'acid', desc: 'Iron oxide corrosion' },
  
  // === MOLD & FUNGI (25-28) ===
  { name: 'BLACK MOLD', emoji: '🍄', color: '#a855f7', hp: 6, speed: 2.5, score: 250, weakness: 'borax', desc: 'Stachybotrys, mycotoxins' },
  { name: 'ASPERGILLUS', emoji: '🌫️', color: '#64748b', hp: 5, speed: 3, score: 280, weakness: 'bleach', desc: 'Common indoor mold' },
  { name: 'YEAST', emoji: '🍞', color: '#fde047', hp: 4, speed: 3.5, score: 200, weakness: 'heat', desc: 'Candida overgrowth' },
  { name: 'ATHLETE FUNGUS', emoji: '🦶', color: '#f97316', hp: 5, speed: 2.8, score: 230, weakness: 'antifungal', desc: 'Tinea, skin fungus' },
  
  // === MINERAL & CHEMICAL (29-32) ===
  { name: 'LIMESCALE', emoji: '🪨', color: '#9ca3af', hp: 4, speed: 2, score: 180, weakness: 'acid', desc: 'Calcium carbonate deposits' },
  { name: 'SOAP SCUM', emoji: '🧼', color: '#e5e7eb', hp: 6, speed: 2.2, score: 240, weakness: 'acid', desc: 'Hard water + soap residue' },
  { name: 'URINE SCALE', emoji: '🚽', color: '#fcd34d', hp: 7, speed: 2, score: 310, weakness: 'acid', desc: 'Uric acid crystals' },
  { name: 'HARD WATER', emoji: '💧', color: '#60a5fa', hp: 5, speed: 2.5, score: 220, weakness: 'softener', desc: 'Mineral-rich water' }
];

class Enemy {
  constructor() {
    // Progressive enemy selection - harder enemies appear more frequently as you progress
    const progressFactor = Math.min(1, game.distance / 3000);
    const maxEnemyIndex = Math.min(enemyTypes.length - 1, Math.floor(game.distance / 500));
    
    // Weight toward harder enemies as game progresses
    let typeIndex;
    if (Math.random() < progressFactor && maxEnemyIndex > 0) {
      // More likely to spawn harder enemies
      typeIndex = Math.floor(Math.random() * (maxEnemyIndex + 1));
      typeIndex = Math.max(0, typeIndex + Math.floor(Math.random() * 2) - 1);
    } else {
      typeIndex = Math.floor(Math.random() * (maxEnemyIndex + 1));
    }
    
    const type = enemyTypes[typeIndex];
    
    this.type = type;
    this.x = canvas.width + 50;
    this.y = Math.random() * (canvas.height - 150) + 75;
    this.width = 50; this.height = 50;
    
    // Scale HP with distance
    const hpMult = 1 + (game.distance / 2000);
    this.hp = Math.floor(type.hp * hpMult);
    this.maxHp = this.hp;
    
    // Speed scales with game speed
    this.speed = type.speed * game.speedMultiplier;
    this.wobble = Math.random() * Math.PI * 2;
    this.hitFlash = 0;
    this.stunned = 0;
    this.blinded = 0;
    this.vined = false;
    this.vineLife = 0;
    this.waveHit = false;
    this.weaknessExposed = false;
  }
  
  update() {
    if (this.stunned > 0 || this.vined) {
      if (this.stunned > 0) this.stunned--;
      if (this.vined) {
        this.vineLife--;
        if (game.frame % 30 === 0) this.takeDamage(1);
        if (this.vineLife <= 0) this.vined = false;
      }
      return;
    }
    
    this.x -= this.speed;
    this.wobble += 0.05;
    this.y += Math.sin(this.wobble) * 0.5;
    if (this.hitFlash > 0) this.hitFlash--;
    if (this.blinded > 0) this.blinded--;
  }
  
  draw() {
    const barY = this.y - 20;
    ctx.fillStyle = '#000';
    ctx.fillRect(this.x, barY, this.width, 6);
    ctx.fillStyle = this.hitFlash > 0 ? '#fff' : '#ef4444';
    ctx.fillRect(this.x, barY, this.width * (this.hp / this.maxHp), 6);
    
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    
    if (this.stunned > 0) {
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 30;
      ctx.fillText('👟', this.x + this.width/2, this.y + this.height/2);
    } else if (this.blinded > 0) {
      ctx.globalAlpha = 0.3;
      ctx.shadowColor = this.type.color;
      ctx.shadowBlur = 20;
      ctx.fillText(this.type.emoji, this.x + this.width/2, this.y + this.height/2);
      ctx.globalAlpha = 1;
    } else if (this.vined) {
      ctx.shadowColor = '#22c55e';
      ctx.shadowBlur = 20;
      ctx.fillText('🌿', this.x + this.width/2, this.y + this.height/2);
    } else {
      ctx.shadowColor = this.hitFlash > 0 ? '#fff' : this.type.color;
      ctx.shadowBlur = this.hitFlash > 0 ? 40 : 20;
      ctx.fillText(this.type.emoji, this.x + this.width/2, this.y + this.height/2);
    }
    ctx.shadowBlur = 0;
    
    ctx.font = '10px Courier New';
    ctx.fillStyle = this.weaknessExposed ? '#ff0' : this.type.color;
    ctx.fillText(this.type.name, this.x + this.width/2, this.y + this.height + 15);
    
    if (game.currentGhoul?.id === 'SCHOLAR' || this.weaknessExposed) {
      ctx.font = '8px Courier New';
      ctx.fillStyle = this.weaknessExposed ? '#ff0' : '#3b82f6';
      ctx.fillText(`▼${this.type.weakness}`, this.x + this.width/2, this.y - 25);
    }
  }
  
  takeDamage(dmg) {
    if (game.currentGhoul?.id === 'PARTY' && Math.random() < 0.2) {
      dmg *= 2;
      showFloatingText('CRIT!', this.x, this.y - 40, '#ff0');
    }
    
    if (this.weaknessExposed) dmg *= 2;
    if (activeEffects.weakpointDamage > 1) dmg *= activeEffects.weakpointDamage;
    if (activeEffects.instantKill) dmg = 999;
    
    this.hp -= dmg;
    this.hitFlash = 5;
    
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(this.x + this.width/2, this.y + this.height/2, this.type.color));
    }
    
    if (this.hp <= 0) {
      this.die();
      return true;
    }
    return false;
  }
  
  die() {
    const score = this.type.score * (activeEffects.scoreMultiplier || 1) * (challengeActive ? dailyChallenge.challenge.multiplier : 1);
    game.score += score;
    
    for (let i = 0; i < 15; i++) {
      particles.push(new Particle(this.x + this.width/2, this.y + this.height/2, this.type.color));
    }
    // Drop orb (10% chance for special ghoul orb!)
    if (Math.random() < 0.4) {
      const specialChance = Math.random();
      let specialGhoul = null;
      if (specialChance < 0.1 && game.unlockedGhouls.length > 0) {
        specialGhoul = game.unlockedGhouls[Math.floor(Math.random() * game.unlockedGhouls.length)];
      }
      orbs.push(new Orb(this.x, this.y, specialGhoul));
    }
    
    // Unlock codex entry
    unlockCodexEntry(this.type.name);
    
    // Combo system
    incrementCombo();
    
    // Screen shake
    addScreenShake(5);
    
    // Play explosion sound
    if (audio) audio.playExplosion();
  }
}

// ==========================================
// OTHER GAME OBJECTS
// ==========================================

let orbs = [];
let ghoulSpirits = [];
let particles = [];
let floatingTexts = [];

class Orb {
  constructor(x, y, ghoulType = null) {
    this.x = x; 
    this.y = y; 
    this.radius = 15; 
    this.speed = 4; 
    this.pulse = 0;
    // If ghoulType specified, this is a SPECIAL orb for that ghoul
    this.ghoulType = ghoulType;
    this.orbType = this.determineOrbType();
  }
  
  determineOrbType() {
    if (!this.ghoulType) return 'standard';
    return this.ghoulType.toLowerCase();
  }
  
  getColor() {
    const colors = {
      standard: '#a855f7',
      goo: '#00f0ff',
      tradie: '#f97316',
      zen: '#fbbf24',
      garden: '#22c55e',
      party: '#a855f7',
      beauty: '#ec4899',
      scholar: '#3b82f6',
      baby: '#f43f5e'
    };
    return colors[this.orbType] || colors.standard;
  }
  
  getEmoji() {
    const emojis = {
      standard: '💜',
      goo: '👻',
      tradie: '🔨',
      zen: '☸️',
      garden: '🌿',
      party: '🎉',
      beauty: '💅',
      scholar: '📚',
      baby: '🍼'
    };
    return emojis[this.orbType] || emojis.standard;
  }
  
  update() {
    this.x -= this.speed;
    this.pulse += 0.1;
    
    let magnetRange = activeEffects.magnetRange || 150;
    if (game.currentGhoul?.id === 'GOO') magnetRange *= 2;
    
    const dx = (player.x + player.width/2) - this.x;
    const dy = (player.y + player.height/2) - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    if (dist < magnetRange) {
      this.x += dx * 0.05;
      this.y += dy * 0.05;
    }
  }
  
  draw() {
    const glow = Math.sin(this.pulse) * 10 + 20;
    const color = this.getColor();
    
    // Outer glow
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.shadowColor = color;
    ctx.shadowBlur = glow;
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Main orb
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    
    // Inner core
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    
    // Emoji for special orbs
    if (this.ghoulType) {
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.getEmoji(), this.x, this.y);
    }
  }
  
  // Apply ghoul-specific effect when collected
  applyEffect() {
    if (!this.ghoulType) {
      // Standard orb
      game.orbs = Math.min(game.orbs + 10, game.maxOrbs);
      game.score += 50;
      return;
    }
    
    // GHOUL-SPECIFIC ORB EFFECTS!
    switch(this.ghoulType) {
      case 'GOO':
        // Ectoplasm Orb: Chain lightning to nearby enemies
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        let chained = 0;
        enemies.forEach(e => {
          const dist = Math.hypot(e.x - this.x, e.y - this.y);
          if (dist < 200 && chained < 3) {
            e.takeDamage(2);
            createHitSparks(e.x + e.width/2, e.y + e.height/2);
            chained++;
          }
        });
        showFloatingText('CHAIN!', this.x, this.y - 20, '#00f0ff');
        break;
        
      case 'TRADIE':
        // Tool Orb: Instantly repair/build shield
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        activeEffects.shieldCount = (activeEffects.shieldCount || 0) + 1;
        showFloatingText('SHIELD UP!', this.x, this.y - 20, '#f97316');
        break;
        
      case 'ZEN':
        // Zen Orb: Slow time briefly
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        game.speedMultiplier *= 0.7;
        setTimeout(() => game.speedMultiplier /= 0.7, 2000);
        showFloatingText('ZEN...', this.x, this.y - 20, '#fbbf24');
        break;
        
      case 'GARDEN':
        // Nature Orb: Heal and grow thorns
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        activeEffects.thornBarrier = true;
        setTimeout(() => activeEffects.thornBarrier = false, 5000);
        showFloatingText('GROW!', this.x, this.y - 20, '#22c55e');
        break;
        
      case 'PARTY':
        // Party Orb: Confetti explosion + random score bonus
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        const bonus = Math.floor(Math.random() * 200) + 50;
        game.score += bonus;
        for (let i = 0; i < 20; i++) {
          particles.push(new Particle(this.x, this.y, `hsl(${Math.random()*360},100%,50%)`));
        }
        showFloatingText(`+${bonus}!`, this.x, this.y - 20, '#a855f7');
        break;
        
      case 'BEAUTY':
        // Glamour Orb: Blind nearby enemies
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        enemies.forEach(e => {
          if (Math.hypot(e.x - this.x, e.y - this.y) < 150) {
            e.blinded = 180;
          }
        });
        showFloatingText('BLING!', this.x, this.y - 20, '#ec4899');
        break;
        
      case 'SCHOLAR':
        // Knowledge Orb: Reveal weakpoints + bonus damage
        game.orbs = Math.min(game.orbs + 15, game.maxOrbs);
        activeEffects.weakpointDamage = 3;
        setTimeout(() => activeEffects.weakpointDamage = 1, 5000);
        enemies.forEach(e => e.weaknessExposed = true);
        showFloatingText('STUDY!', this.x, this.y - 20, '#3b82f6');
        break;
        
      case 'BABY':
        // Chaos Orb: Random effect!
        game.orbs = Math.min(game.orbs + 20, game.maxOrbs);
        const effects = ['freeze', 'heal', 'speed', 'damage'];
        const random = effects[Math.floor(Math.random() * effects.length)];
        if (random === 'freeze') enemies.forEach(e => e.stunned = 120);
        if (random === 'heal') activeEffects.shield = true;
        if (random === 'speed') game.speedMultiplier *= 1.3;
        if (random === 'damage') activeEffects.damageMult *= 2;
        showFloatingText('CHAOS!', this.x, this.y - 20, '#f43f5e');
        break;
    }
    
    updateUI();
  }
}

class GhoulSpirit {
  constructor() {
    const lockedGhouls = ghouls.filter(g => !game.unlockedGhouls.includes(g.id));
    if (lockedGhouls.length === 0) { this.collected = true; return; }
    
    this.ghoul = lockedGhouls[Math.floor(Math.random() * lockedGhouls.length)];
    this.x = canvas.width + 100;
    this.y = canvas.height / 2;
    this.radius = 55; // BIGGER hitbox (was 40)
    this.speed = 2; // Slower (was 3)
    this.pulse = 0;
    this.wobble = 0;
    this.collected = false;
    this.magnetRange = 250; // Stronger magnet
  }
  
  update() {
    if (this.collected) return;
    
    // Magnet toward player Y position
    const playerCenterY = player.y + player.height/2;
    const dy = playerCenterY - this.y;
    this.y += dy * 0.03; // Gentle tracking toward player height
    
    // Horizontal magnet when close
    const playerCenterX = player.x + player.width/2;
    const dx = playerCenterX - this.x;
    const dist = Math.sqrt(dx*dx + dy*dy);
    
    if (dist < this.magnetRange) {
      this.x += dx * 0.04; // Pull toward player
      this.y += dy * 0.04;
    }
    
    this.x -= this.speed;
    this.pulse += 0.05;
    this.wobble += 0.02;
    this.y += Math.sin(this.wobble) * 20; // Less vertical movement (was 100)
  }
  
  draw() {
    if (this.collected) return;
    const glow = Math.sin(this.pulse) * 20 + 30;
    
    // Outer glow ring
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + 15, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, 0.2)`;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Main body
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = hexToRgba(this.ghoul.color, 0.4);
    ctx.strokeStyle = this.ghoul.color;
    ctx.lineWidth = 4;
    ctx.shadowColor = this.ghoul.color;
    ctx.shadowBlur = glow;
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Emoji
    ctx.font = '50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.ghoul.emoji, this.x, this.y);
    
    // Labels
    ctx.font = 'bold 12px Courier New';
    ctx.fillStyle = '#fff';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(`UNLOCK ${this.ghoul.id}`, this.x, this.y - 65);
    
    ctx.font = '11px Courier New';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(`${this.ghoul.unlockCost} pts`, this.x, this.y + 75);
  }
  
  // More forgiving collision check
  checkCollision() {
    const px = player.x + player.width/2;
    const py = player.y + player.height/2;
    const dx = px - this.x;
    const dy = py - this.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    return dist < (this.radius + player.width/2 + 15); // Extra forgiveness
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x; this.y = y;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
    this.life = 1; this.color = color;
    this.size = Math.random() * 6 + 2;
    this.decay = Math.random() * 0.03 + 0.02;
  }
  
  update() {
    this.x += this.vx; this.y += this.vy;
    this.vy += 0.15;
    this.life -= this.decay;
  }
  
  draw() {
    ctx.globalAlpha = Math.max(0, this.life);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// ==========================================
// FX FUNCTIONS
// ==========================================

function createExplosion(x, y, color) {
  // PERFORMANCE: Reduce particle count
  for (let i = 0; i < 10; i++) particles.push(new Particle(x, y, color));
}

function createHitSparks(x, y) {
  for (let i = 0; i < 3; i++) particles.push(new Particle(x, y, '#fff'));
}

function createCollectParticles(emoji) {
  for (let i = 0; i < 10; i++) {
    const p = new Particle(player.x + player.width/2, player.y, '#ffd700');
    p.vy = -Math.random() * 5 - 2;
    p.vx = (Math.random() - 0.5) * 4;
    particles.push(p);
  }
}

let shockwaves = [];
let screenShake = 0;
let combo = 0;
let comboTimer = 0;

function createShockwave(x, y) {
  shockwaves.push({ x, y, radius: 10, maxRadius: 200, life: 30 });
}

function addScreenShake(amount) {
  screenShake = Math.max(screenShake, amount);
}

function updateCombo() {
  if (comboTimer > 0) {
    comboTimer--;
    if (comboTimer === 0) {
      // Combo ended - bonus points
      if (combo > 5) {
        const bonus = combo * 10;
        game.score += bonus;
        showFloatingText(`COMBO x${combo}! +${bonus}`, player.x, player.y - 60, '#ff0');
      }
      combo = 0;
    }
  }
}

function incrementCombo() {
  combo++;
  comboTimer = 120; // 2 seconds to maintain combo
  if (combo % 5 === 0) {
    showFloatingText(`${combo} COMBO!`, player.x, player.y - 40, '#ffd700');
  }
}

// ==========================================
// INPUT & UTILS
// ==========================================

const input = { active: false, x: 0, y: 0 };

function handleInputStart(e) {
  // Don't activate if touching store buttons
  if (e.target.closest('.mobile-controls') || e.target.closest('.store-btn')) return;
  
  input.active = true;
  const touch = e.touches ? e.touches[0] : e;
  input.x = touch.clientX;
  input.y = touch.clientY;
  
  // Vibrate on mobile for feedback
  if (navigator.vibrate && e.touches) {
    navigator.vibrate(10);
  }
}

function handleInputEnd() {
  input.active = false;
}

// Prevent zoom and scroll on mobile
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

// Prevent pull-to-refresh on mobile
window.addEventListener('touchmove', (e) => {
  if (e.target === canvas) {
    e.preventDefault();
  }
}, { passive: false });

function handleKeyDown(e) {
  if (e.code === 'Space' && game.active && !storeOpen) {
    e.preventDefault();
    activateUltimate();
  }
  if (e.code === 'KeyS' && game.active) {
    e.preventDefault();
    if (storeOpen) closeStore();
    else openStore();
  }
}

canvas.addEventListener('mousedown', handleInputStart);
canvas.addEventListener('mouseup', handleInputEnd);
canvas.addEventListener('touchstart', handleInputStart, {passive: false});
canvas.addEventListener('touchend', handleInputEnd);
canvas.addEventListener('touchmove', (e) => e.preventDefault(), {passive: false});
window.addEventListener('keydown', handleKeyDown);

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// ==========================================
// COLLISION & SPAWNING
// ==========================================

function spawnObjects() {
  // PERFORMANCE: Skip every other frame at high intensity
  const intensityMult = 1 + (game.distance / 1000);
  if (intensityMult > 3 && game.frame % 2 === 0) return;
  
  // Spawn enemies - HARD CAP of 30 enemies
  if (!currentBoss && enemies.length < 30) {
    const baseSpawnRate = Math.max(30, Math.floor((120 - Math.floor(game.distance / 200)) / intensityMult));
    const spawnRate = challengeActive && dailyChallenge?.challenge.id === 'bullet_hell' 
      ? Math.floor(baseSpawnRate / 2) 
      : baseSpawnRate;
    
    // Max 2 enemies per spawn, not 3
    const spawnCount = Math.min(2, Math.floor(intensityMult));
    if (game.frame % spawnRate === 0) {
      for (let i = 0; i < spawnCount && enemies.length < 30; i++) {
        enemies.push(new Enemy());
      }
    }
  } else if (currentBoss && enemies.length < 10) {
    // During boss: fewer minions
    const minionRate = Math.max(90, 180 - Math.floor(game.distance / 100));
    if (game.frame % minionRate === 0) enemies.push(new Enemy());
  }
  
  // Always spawn orbs (capped at 20 on screen)
  if (orbs.length < 20) {
    const orbRate = Math.max(80, 150 - Math.floor(intensityMult * 10));
    if (game.frame % orbRate === 0) {
      let specialOrb = null;
      if (game.currentGhoul && Math.random() < 0.3) {
        specialOrb = game.currentGhoul.id;
      } else if (game.unlockedGhouls.length > 1 && Math.random() < 0.2) {
        const otherGhouls = game.unlockedGhouls.filter(id => id !== game.currentGhoul?.id);
        if (otherGhouls.length > 0) {
          specialOrb = otherGhouls[Math.floor(Math.random() * otherGhouls.length)];
        }
      }
      orbs.push(new Orb(canvas.width + 50, Math.random() * (canvas.height - 150) + 75, specialOrb));
    }
  }
  
  // Ghoul spirits
  const spiritRate = Math.max(1200, 1800 - Math.floor(game.distance * 2));
  if (game.frame % spiritRate === 0 && ghoulSpirits.length === 0 && !currentBoss) {
    ghoulSpirits.push(new GhoulSpirit());
  }
  
  spawnToolPod();
  checkBossSpawn();
  
  // Speed increase
  if (game.frame % 600 === 0 && !currentBoss) {
    game.speedMultiplier += 0.015;
  }
}

function checkCollisions() {
  // PERFORMANCE: Spatial culling for all collision checks
  const playerCenterX = player.x + player.width/2;
  const playerCenterY = player.y + player.height/2;
  
  // Projectiles vs Boss - check every frame for responsive boss damage
  if (currentBoss) {
    for (let i = projectiles.length - 1; i >= 0; i--) {
      const proj = projectiles[i];
      // Skip if far from boss
      if (Math.abs(proj.x - currentBoss.x) > 100) continue;
      
      const dx = proj.x - (currentBoss.x + currentBoss.width/2);
      const dy = proj.y - (currentBoss.y + currentBoss.height/2);
      const dist = Math.sqrt(dx*dx + dy*dy);
      
      if (dist < 60) {
        const defeated = currentBoss.takeDamage(proj.damage);
        if (defeated) currentBoss = null;
        projectiles.splice(i, 1);
      }
    }
  }
  
  // PERFORMANCE: Projectile collision with spatial culling
  // Process every frame for responsive hits, but optimize with culling
  for (let i = projectiles.length - 1; i >= 0; i--) {
    const proj = projectiles[i];
    
    // ALWAYS remove projectiles that are off-screen or expired
    if (proj.x >= canvas.width + 50 || proj.life <= 0) {
      projectiles.splice(i, 1);
      continue;
    }
    
    // Skip collision check every other frame for performance
    if (game.frame % 2 !== 0) continue;
    
    let hit = false;
    
    for (let j = enemies.length - 1; j >= 0; j--) {
      const enemy = enemies[j];
      // Spatial culling
      if (Math.abs(proj.x - enemy.x) > 100) continue;
      if (proj.hits && proj.hits.includes(enemy)) continue;
      
      const dx = proj.x - (enemy.x + enemy.width/2);
      const dy = proj.y - (enemy.y + enemy.height/2);
      const dist = dx*dx + dy*dy; // Squared distance (no sqrt)
      
      if (dist < (20 + enemy.width/2) ** 2) {
        hit = true;
        if (!proj.hits) proj.hits = [];
        proj.hits.push(enemy);
        proj.piercing--;
        if (enemy.takeDamage(proj.damage)) enemies.splice(j, 1);
        if (audio) audio.playHit();
        if (proj.piercing <= 0) {
          projectiles.splice(i, 1);
          break;
        }
      }
    }
  }
  
  // Player vs Orbs
  for (let i = orbs.length - 1; i >= 0; i--) {
    const orb = orbs[i];
    if (Math.abs(orb.x - playerCenterX) > 100) continue; // Spatial culling
    
    const dx = playerCenterX - orb.x;
    const dy = playerCenterY - orb.y;
    if (dx*dx + dy*dy < (player.width/2 + orb.radius) ** 2) {
      orb.applyEffect();
      createCollectParticles(orb.getEmoji());
      orbs.splice(i, 1);
    } else if (orb.x <= -50) {
      orbs.splice(i, 1);
    }
  }
  
  // Player vs Tool Pods
  for (let i = toolPods.length - 1; i >= 0; i--) {
    const pod = toolPods[i];
    if (Math.abs(pod.x - playerCenterX) > 100) continue;
    
    const dx = playerCenterX - pod.x;
    const dy = playerCenterY - pod.y;
    if (dx*dx + dy*dy < (player.width/2 + pod.radius) ** 2) {
      collectTool(pod.tool);
      toolPods.splice(i, 1);
    }
  }
  
  // Player vs Ghoul Spirits
  for (let i = ghoulSpirits.length - 1; i >= 0; i--) {
    const spirit = ghoulSpirits[i];
    if (spirit.collected || spirit.x <= -100) {
      ghoulSpirits.splice(i, 1);
      continue;
    }
    if (spirit.checkCollision()) {
      game.unlockedGhouls.push(spirit.ghoul.id);
      showNotification(`🎉 UNLOCKED: ${spirit.ghoul.name}!`, spirit.ghoul.color);
      createCollectParticles(spirit.ghoul.emoji);
      createStartScreenGrid();
      
      for (let j = 0; j < 30; j++) {
        particles.push(new Particle(spirit.x, spirit.y, spirit.ghoul.color));
      }
      saveGame();
      companions.push(new Companion(spirit.ghoul.id, companions.length));
      if (audio) audio.playPowerUp();
      ghoulSpirits.splice(i, 1);
    }
  }
  
  // Player vs Enemies - simplified AABB collision
  if (player.iFrames === 0 && !activeEffects.invincible) {
    for (let i = enemies.length - 1; i >= 0; i--) {
      const enemy = enemies[i];
      // Spatial culling
      if (Math.abs(enemy.x - player.x) > 100) continue;
      
      if (player.x < enemy.x + enemy.width - 10 && 
          player.x + player.width > enemy.x + 10 &&
          player.y < enemy.y + enemy.height - 10 && 
          player.y + player.height > enemy.y + 10) {
        if (activeEffects.shield) {
          activeEffects.shield = false;
          enemy.takeDamage(10);
          player.iFrames = 60;
          showNotification('SHIELD BROKEN!', '#fff');
          break;
        }
        if (game.currentGhoul?.id === 'GARDEN' && Math.random() < 0.3) {
          showFloatingText('REGEN!', player.x, player.y - 30, '#22c55e');
          enemies.splice(i, 1);
          break;
        }
        // Use new HP system - enemies deal 1 damage
        player.takeDamage(1);
        // Destroy enemy on collision (they splat)
        enemy.takeDamage(999);
      }
    }
  }
}

// ==========================================
// GAME LOOP
// ==========================================

function update() {
  if (!game.active) return;
  
  game.frame++;
  game.distance += game.speed * game.speedMultiplier / 10;
  game.score += 1;
  
  player.update();
  spawnObjects();
  updateUltimate();
  
  // Update boss
  if (currentBoss) {
    currentBoss.update();
    if (currentBoss.shielded > 0) currentBoss.shielded--;
  }
  
  // PERFORMANCE: Hard caps on object counts
  if (enemies.length > 30) enemies.length = 30;
  if (projectiles.length > 50) projectiles.length = 50;
  if (companionProjectiles.length > 30) companionProjectiles.length = 30;
  if (particles.length > 100) particles.length = 100;
  if (orbs.length > 20) orbs.length = 20;
  
  // Update with limits
  for (let i = enemies.length - 1; i >= 0; i--) {
    enemies[i].update();
    if (enemies[i].x <= -100 || enemies[i].hp <= 0) enemies.splice(i, 1);
  }
  
  for (let i = orbs.length - 1; i >= 0; i--) {
    orbs[i].update();
    if (orbs[i].x <= -50) orbs.splice(i, 1);
  }
  
  for (let i = toolPods.length - 1; i >= 0; i--) {
    toolPods[i].update();
    if (toolPods[i].x <= -100) toolPods.splice(i, 1);
  }
  
  for (let i = ghoulSpirits.length - 1; i >= 0; i--) {
    ghoulSpirits[i].update();
    if (ghoulSpirits[i].collected || ghoulSpirits[i].x <= -100) {
      ghoulSpirits.splice(i, 1);
    }
  }
  
  for (let i = projectiles.length - 1; i >= 0; i--) {
    projectiles[i].update();
    if (projectiles[i].x >= canvas.width + 50 || projectiles[i].life <= 0) {
      projectiles.splice(i, 1);
    }
  }
  
  if (activeEffects.laserBeams && game.frame % 120 === 0) lasers.push(new LaserBeam());
  for (let i = lasers.length - 1; i >= 0; i--) {
    lasers[i].update();
    if (lasers[i].life <= 0) lasers.splice(i, 1);
  }
  
  // PERFORMANCE: Limit particle updates
  const particleStep = particles.length > 50 ? 2 : 1;
  for (let i = particles.length - 1; i >= 0; i -= particleStep) {
    if (particles[i]) {
      particles[i].update();
      if (particles[i].life <= 0) particles.splice(i, 1);
    }
  }
  
  shockwaves.forEach(w => { w.radius += 10; w.life--; });
  shockwaves = shockwaves.filter(w => w.life > 0);
  
  floatingTexts.forEach(t => { t.y += t.vy; t.life--; });
  floatingTexts = floatingTexts.filter(t => t.life > 0);
  
  // Update companions
  updateCompanions();
  
  checkCollisions();
  updateCombo();
  updateUI();
}

function draw() {
  // Apply screen shake
  let didShake = false;
  if (screenShake > 0) {
    const shakeX = (Math.random() - 0.5) * screenShake;
    const shakeY = (Math.random() - 0.5) * screenShake;
    ctx.save();
    ctx.translate(shakeX, shakeY);
    screenShake *= 0.9;
    if (screenShake < 0.5) screenShake = 0;
    didShake = true;
  }
  
  // PERFORMANCE: Limit total objects
  if (particles.length > 100) particles = particles.slice(-100);
  if (enemies.length > 30) enemies = enemies.slice(0, 30); // Hard enemy cap
  if (projectiles.length > 50) projectiles = projectiles.slice(-50);
  if (companionProjectiles.length > 30) companionProjectiles = companionProjectiles.slice(-30);
  
  // Background intensity color shift
  const intensity = Math.min(1, game.distance / 3000);
  const bgHue = 240 - (intensity * 60);
  ctx.fillStyle = activeEffects.raveMode 
    ? `hsl(${game.frame * 2}, 50%, 5%)`
    : `hsla(${bgHue}, 60%, 5%, 0.2)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Grid - draw every 2nd line at high intensity for performance
  const gridSpacing = intensity > 0.7 ? 200 : 100;
  const gridAlpha = 0.05 + (intensity * 0.1);
  const gridColor = activeEffects.raveMode
    ? `hsl(${game.frame * 3}, 100%, 30%)`
    : `hsla(${240 - intensity * 60}, 100%, 50%, ${gridAlpha})`;
  ctx.strokeStyle = gridColor;
  ctx.lineWidth = 1 + intensity;
  const gridOffset = (game.frame * game.speed * (1 + intensity)) % gridSpacing;
  for (let x = gridOffset; x < canvas.width; x += gridSpacing) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSpacing) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }
  
  // GOO Wave effect
  const wave = ultimateEffects.find(e => e.type === 'wave');
  if (wave) {
    ctx.beginPath();
    ctx.arc(wave.progress, canvas.height/2, 100, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 240, 255, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 5;
    ctx.stroke();
  }
  
  // Garden vines
  if (game.currentGhoul?.id === 'GARDEN' && ultimateActive) {
    ctx.strokeStyle = 'rgba(34, 197, 94, 0.5)';
    ctx.lineWidth = 8;
    for (let i = 0; i < 10; i++) {
      const x = (game.frame * 5 + i * 150) % (canvas.width + 200) - 100;
      ctx.beginPath();
      ctx.moveTo(x, canvas.height);
      ctx.quadraticCurveTo(x + 50, canvas.height/2, x + Math.sin(game.frame * 0.05 + i) * 50, 0);
      ctx.stroke();
    }
  }
  
  // Shockwaves
  shockwaves.forEach(w => {
    ctx.beginPath();
    ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(236, 72, 153, ${w.life / 30})`;
    ctx.lineWidth = 3;
    ctx.stroke();
  });
  
  orbs.forEach(o => o.draw());
  toolPods.forEach(t => t.draw());
  ghoulSpirits.forEach(s => s.draw());
  
  // Draw boss behind enemies
  if (currentBoss) currentBoss.draw();
  
  projectiles.forEach(p => p.draw());
  lasers.forEach(l => l.draw());
  
  // Orbiting books
  if (activeEffects.orbitingBooks > 0) {
    const centerX = player.x + player.width/2;
    const centerY = player.y + player.height/2;
    for (let i = 0; i < activeEffects.orbitingBooks; i++) {
      const angle = (game.frame * 0.05) + (i * Math.PI * 2 / activeEffects.orbitingBooks);
      const bx = centerX + Math.cos(angle) * 60;
      const by = centerY + Math.sin(angle) * 60;
      ctx.font = '24px Arial';
      ctx.fillText('📚', bx, by);
      enemies.forEach(e => {
        const dx = e.x + e.width/2 - bx;
        const dy = e.y + e.height/2 - by;
        if (Math.sqrt(dx*dx + dy*dy) < 30 && game.frame % 20 === 0) e.takeDamage(1);
      });
    }
  }
  
  enemies.forEach(e => e.draw());
  particles.forEach(p => p.draw());
  player.draw();
  
  // Draw companion ghouls
  drawCompanions();
  
  floatingTexts.forEach(t => {
    ctx.globalAlpha = Math.min(1, t.life / 20);
    ctx.font = 'bold 16px Courier New';
    ctx.fillStyle = t.color;
    ctx.textAlign = 'center';
    ctx.fillText(t.text, t.x, t.y);
  });
  ctx.globalAlpha = 1;
  
  // Combo display
  if (combo > 1) {
    ctx.font = 'bold 24px Courier New';
    ctx.fillStyle = `rgba(255, 215, 0, ${comboTimer / 60})`;
    ctx.textAlign = 'right';
    ctx.fillText(`${combo}x COMBO`, canvas.width - 20, 100);
    
    // Combo bar
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.fillRect(canvas.width - 150, 110, 130, 6);
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(canvas.width - 150, 110, 130 * (comboTimer / 120), 6);
  }
  
  // Challenge mode indicator
  if (challengeActive) {
    ctx.font = 'bold 20px Courier New';
    ctx.fillStyle = '#fbbf24';
    ctx.textAlign = 'center';
    ctx.fillText(`⚡ ${dailyChallenge.challenge.name} ⚡`, canvas.width / 2, 80);
    ctx.font = '14px Courier New';
    ctx.fillText(`${dailyChallenge.challenge.multiplier}x SCORE`, canvas.width / 2, 100);
  }
  
  // Restore context if shaken
  if (didShake) {
    ctx.restore();
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// ==========================================
// UI FUNCTIONS
// ==========================================

function updateUI() {
  document.getElementById('score').textContent = Math.floor(game.score);
  document.getElementById('distance').textContent = Math.floor(game.distance);
  
  const orbFill = document.getElementById('orbFill');
  const orbMeter = document.querySelector('.orb-meter');
  
  orbFill.style.width = (game.orbs / game.maxOrbs * 100) + '%';
  
  // Update orb count display
  const orbCountEl = document.getElementById('orbCount');
  if (orbCountEl) {
    orbCountEl.textContent = `💜 ${game.orbs}`;
  }
  
  // Update HP display
  const hpEl = document.getElementById('hpDisplay');
  if (hpEl) {
    hpEl.textContent = '❤️'.repeat(Math.max(0, player.hp));
  }
  
  // Visual indication when ultimate is ready
  if (game.orbs >= 100 && game.currentGhoul) {
    orbMeter.style.boxShadow = `0 0 30px ${game.currentGhoul.color}`;
    orbMeter.style.borderColor = game.currentGhoul.color;
    orbFill.style.background = `linear-gradient(90deg, ${game.currentGhoul.color}, #fff)`;
  } else {
    orbMeter.style.boxShadow = 'none';
    orbMeter.style.borderColor = '#a855f7';
    orbFill.style.background = 'linear-gradient(90deg, #a855f7, #ff00ff)';
  }
  
  // Update intensity display in HUD
  const intensityLevel = Math.floor(1 + game.distance / 500);
  const intensityEl = document.getElementById('intensityLevel');
  if (intensityEl) {
    intensityEl.textContent = `LVL ${intensityLevel}`;
    intensityEl.style.color = intensityLevel > 5 ? '#f43f5e' : (intensityLevel > 3 ? '#fbbf24' : '#00f0ff');
  }
}

function updateToolBeltUI() {
  const belt = document.getElementById('toolBeltUI');
  if (!belt) return;
  belt.innerHTML = '';
  
  equippedTools.forEach((tool, i) => {
    const slot = document.createElement('div');
    slot.className = 'tool-slot equipped';
    slot.innerHTML = tool.emoji;
    slot.style.borderColor = game.currentGhoul?.color || '#00f0ff';
    slot.style.color = game.currentGhoul?.color || '#00f0ff';
    belt.appendChild(slot);
  });
  
  for (let i = equippedTools.length; i < 3; i++) {
    const slot = document.createElement('div');
    slot.className = 'tool-slot empty';
    slot.innerHTML = '●';
    belt.appendChild(slot);
  }
}

let notificationQueue = [];

function showNotification(text, color) {
  // Calculate vertical position based on queue to prevent overlap
  const baseTop = 15; // Start at 15% from top
  const spacing = 10; // 10% spacing between notifications
  const index = notificationQueue.length;
  const topPos = Math.min(baseTop + (index * spacing), 55); // Cap at 55%
  
  const notif = document.createElement('div');
  notif.style.cssText = `
    position: absolute;
    top: ${topPos}%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${color || '#00f0ff'};
    font-size: 28px;
    font-weight: bold;
    text-shadow: 0 0 20px ${color || '#00f0ff'}, 0 0 40px ${color || '#00f0ff'};
    pointer-events: none;
    animation: fadeUp 2.5s forwards;
    z-index: 1000;
    text-align: center;
    white-space: nowrap;
  `;
  notif.textContent = text;
  document.body.appendChild(notif);
  
  // Add to queue
  notificationQueue.push(notif);
  
  // Remove from queue and DOM after animation
  setTimeout(() => {
    const idx = notificationQueue.indexOf(notif);
    if (idx > -1) notificationQueue.splice(idx, 1);
    if (notif.parentNode) notif.remove();
  }, 2500);
}

function showFloatingText(text, x, y, color) {
  floatingTexts.push({ text, x, y, color, life: 60, vy: -2 });
}

function createStartScreenGrid() {
  const grid = document.getElementById('startGhoulGrid');
  if (!grid) return;
  grid.innerHTML = '';
  
  ghouls.forEach(ghoul => {
    const card = document.createElement('div');
    const unlocked = game.unlockedGhouls.includes(ghoul.id);
    const selected = game.currentGhoul?.id === ghoul.id;
    
    card.className = `ghoul-card ${unlocked ? 'unlocked' : 'locked'} ${selected ? 'selected' : ''}`;
    card.style.color = ghoul.color;
    
    card.innerHTML = `
      <span class="emoji">${ghoul.emoji}</span>
      <span class="name">${ghoul.id}</span>
      ${!unlocked ? `<span class="cost">${ghoul.unlockCost} pts</span>` : ''}
    `;
    
    if (unlocked) {
      card.onclick = () => {
        selectGhoul(ghoul);
        createStartScreenGrid();
      };
    }
    
    grid.appendChild(card);
  });
}

function selectGhoul(ghoul) {
  game.currentGhoul = ghoul;
  player.color = ghoul.color;
  equippedTools.length = 0;
  resetActiveEffects();
  updateUltimateButton();
}

function updateUltimateButton() {
  const btn = document.getElementById('ultimateBtn');
  if (btn && game.currentGhoul) {
    btn.textContent = `ULTIMATE: ${game.currentGhoul.ultimate.name}`;
    btn.style.background = game.currentGhoul.color;
  }
}

function resetActiveEffects() {
  Object.keys(activeEffects).forEach(k => {
    if (typeof activeEffects[k] === 'boolean') activeEffects[k] = false;
    else if (typeof activeEffects[k] === 'number') activeEffects[k] = 0;
  });
  activeEffects.piercing = 1;
  activeEffects.fireRateMult = 1;
  activeEffects.scoreMultiplier = 1;
}

function startGame() {
  // Load saved progress first!
  loadGame();
  
  game.active = true;
  game.score = 0;
  game.distance = 0;
  game.speedMultiplier = 1;
  game.orbs = 0;
  game.frame = 0;
  game.level = 1;
  game.intensity = 1;
  enemies = [];
  orbs = [];
  toolPods.length = 0;
  ghoulSpirits = [];
  projectiles = [];
  lasers = [];
  particles = [];
  shockwaves = [];
  floatingTexts = [];
  equippedTools.length = 0;
  companions = []; // Reset companions
  companionProjectiles = [];
  resetActiveEffects();
  endUltimate();
  currentBoss = null;
  bossSpawned = false;
  combo = 0;
  comboTimer = 0;
  
  if (!game.currentGhoul) game.currentGhoul = ghouls[0];
  
  // Initialize companions based on unlocked ghouls
  const availableCompanions = game.unlockedGhouls.filter(id => id !== game.currentGhoul?.id);
  companions = availableCompanions.map((id, index) => new Companion(id, index));
  
  // Apply challenge effects
  if (challengeActive && dailyChallenge && dailyChallenge.challenge.effect) {
    dailyChallenge.challenge.effect();
  }
  
  player.reset();
  updateUI();
  updateInGameDisplay();
  updateToolBeltUI();
  
  // Start music
  if (audio) audio.startMusic();
  
  const startScreen = document.getElementById('startScreen');
  const gameOverScreen = document.getElementById('gameOverScreen');
  if (startScreen) {
    startScreen.classList.add('hidden');
    startScreen.style.display = 'none';
  }
  if (gameOverScreen) {
    gameOverScreen.classList.add('hidden');
    gameOverScreen.style.display = 'none';
  }
  
  showNotification('SWARM APPROACHES!', '#00f0ff');
}

function updateInGameDisplay() {
  const display = document.getElementById('ghoulDisplay');
  if (display && game.currentGhoul) {
    display.innerHTML = `
      <span class="ghoul-emoji" style="color: ${game.currentGhoul.color}">${game.currentGhoul.emoji}</span>
      <span class="ghoul-name">${game.currentGhoul.name}</span>
    `;
  }
  const passive = document.getElementById('passiveInfo');
  if (passive && game.currentGhoul) {
    passive.innerHTML = `${game.currentGhoul.passive}<br><span style="color:#a855f7">SPACE = ULTIMATE | S = STORE</span>`;
    passive.style.color = game.currentGhoul.color;
  }
}

function gameOver() {
  game.active = false;
  game.totalScore += game.score;
  
  // Save challenge high score
  if (challengeActive && dailyChallenge) {
    const finalScore = Math.floor(game.score);
    if (finalScore > dailyChallenge.highScore) {
      dailyChallenge.highScore = finalScore;
      dailyChallenge.completed = true;
      localStorage.setItem('ghoulverse_challenge', JSON.stringify(dailyChallenge));
      showNotification(`NEW HIGH SCORE: ${finalScore}!`, '#fbbf24');
    }
    challengeActive = false;
  }
  
  // SAVE GAME PROGRESS!
  saveGame();
  
  // Stop music
  if (audio) audio.stopMusic();
  
  document.getElementById('finalScore').textContent = Math.floor(game.score);
  document.getElementById('finalDistance').textContent = Math.floor(game.distance);
  
  const unlockMsg = document.getElementById('unlockedGhoul');
  const newUnlocks = game.unlockedGhouls.filter(id => 
    !['GOO'].includes(id) && ghouls.find(g => g.id === id)
  );
  if (newUnlocks.length > 0) {
    const latest = newUnlocks[newUnlocks.length - 1];
    const ghoul = ghouls.find(g => g.id === latest);
    unlockMsg.innerHTML = `<span style="color:${ghoul.color}">UNLOCKED: ${ghoul.name}!</span>`;
  } else {
    unlockMsg.textContent = '';
  }
  
  const gameOverScreen = document.getElementById('gameOverScreen');
  if (gameOverScreen) {
    gameOverScreen.classList.remove('hidden');
    gameOverScreen.style.display = 'flex';
  }
  createStartScreenGrid();
  updateCodexButton();
  updateChallengeUI();
}

// ==========================================
// CODEX SYSTEM
// ==========================================

function unlockCodexEntry(enemyType) {
  if (!codexUnlocked[enemyType]) {
    codexUnlocked[enemyType] = true;
    showNotification(`CODEX UNLOCKED: ${enemyType}!`, '#fbbf24');
    updateCodexButton();
  }
}

function updateCodexButton() {
  const btn = document.getElementById('codexBtn');
  if (btn) {
    const unlocked = Object.keys(codexUnlocked).length;
    const total = Object.keys(codexDB).length;
    btn.textContent = `CODEX (${unlocked}/${total})`;
  }
}

function openCodex() {
  const modal = document.getElementById('codexModal');
  const content = document.getElementById('codexContent');
  if (!modal || !content) return;
  
  content.innerHTML = '';
  
  Object.entries(codexDB).forEach(([key, data]) => {
    const unlocked = codexUnlocked[key];
    const card = document.createElement('div');
    card.className = `codex-card ${unlocked ? 'unlocked' : 'locked'}`;
    
    if (unlocked) {
      card.innerHTML = `
        <div class="codex-header">
          <span class="codex-emoji">${getEnemyEmoji(key)}</span>
          <div class="codex-title">
            <h3>${key}</h3>
            <span class="codex-sci">${data.realName}</span>
          </div>
        </div>
        <div class="codex-info">
          <p><strong>Classification:</strong> ${data.classification}</p>
          <p><strong>Danger Level:</strong> <span class="danger-${data.danger.toLowerCase().split(' ')[0]}">${data.danger}</span></p>
          <p><strong>Found In:</strong> ${data.foundIn}</p>
          <p><strong>Can Cause:</strong> ${data.diseases}</p>
          <div class="codex-fact">
            <strong>💡 Did You Know?</strong><br>
            ${data.fact}
          </div>
          <p><strong>Science:</strong> ${data.science}</p>
          <p><strong>Killed By:</strong> ${data.killedBy}</p>
          <div class="codex-fun">
            <strong>🎉 Fun Fact:</strong> ${data.funFact}
          </div>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="codex-locked">
          <span class="lock-icon">🔒</span>
          <p>DEFEAT ${key} TO UNLOCK</p>
        </div>
      `;
    }
    
    content.appendChild(card);
  });
  
  modal.classList.remove('hidden');
}

function closeCodex() {
  const modal = document.getElementById('codexModal');
  if (modal) modal.classList.add('hidden');
}

function getEnemyEmoji(name) {
  const emojis = {
    'E.COLI': '🦠', 'STAPH': '🧫', 'NOROVIRUS': '🤢',
    'SLUDGE': '🛢️', 'BLACK MOLD': '🍄', 'LIMESCALE': '🪨',
    'CORONAVIRUS': '🦠', 'BIOFILM': '🕸️'
  };
  return emojis[name] || '💀';
}

// Event listeners
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', startGame);

// Audio button
setTimeout(() => {
  const audioBtn = document.getElementById('audioBtn');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      const enabled = audio.toggle();
      audioBtn.innerHTML = enabled ? '🔊' : '🔇';
      audioBtn.classList.toggle('muted', !enabled);
    });
  }
}, 100);

// Global store toggle function (accessible from HTML onclick)
window.toggleStore = function() {
  console.log('Global toggleStore called, storeOpen:', storeOpen);
  if (storeOpen) {
    closeStore();
  } else {
    openStore();
  }
  return false;
};

// Store button - ROBUST VERSION with direct onclick
function initStoreButton() {
  const storeBtn = document.getElementById('storeBtn');
  if (!storeBtn) {
    console.log('Store button not found, retrying...');
    setTimeout(initStoreButton, 200);
    return;
  }
  
  console.log('Store button found, adding direct onclick');
  
  // DIRECT ONCLICK - most reliable method
  storeBtn.onclick = function(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    console.log('Store button clicked!');
    if (storeOpen) {
      closeStore();
    } else if (game.active || game.wasActive) {
      openStore();
    }
    return false;
  };
  
  // Touch handler for mobile
  storeBtn.ontouchstart = function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Store button touched!');
    if (storeOpen) {
      closeStore();
    } else if (game.active || game.wasActive) {
      openStore();
    }
    return false;
  };
  
  console.log('Store button ready');
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStoreButton);
} else {
  initStoreButton();
}
setTimeout(initStoreButton, 100);
setTimeout(initStoreButton, 300);

// Mobile button handlers
setTimeout(() => {
  const mobileUltimate = document.getElementById('mobileUltimate');
  const mobileStore = document.getElementById('mobileStore');
  const mobileHint = document.getElementById('mobileHint');
  
  if (mobileUltimate) {
    mobileUltimate.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (game.active && !storeOpen) activateUltimate();
    });
    mobileUltimate.addEventListener('click', (e) => {
      e.preventDefault();
      if (game.active && !storeOpen) activateUltimate();
    });
  }
  
  if (mobileStore) {
    const toggleStore = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Store button clicked, storeOpen:', storeOpen);
      if (storeOpen) {
        closeStore();
      } else if (game.active) {
        openStore();
      }
      return false;
    };
    mobileStore.addEventListener('touchstart', toggleStore, { passive: false });
    mobileStore.addEventListener('click', toggleStore);
  }
  
  // Hide mobile hint after first interaction
  const hideHint = () => {
    if (mobileHint) mobileHint.style.display = 'none';
  };
  canvas.addEventListener('touchstart', hideHint, { once: true });
  canvas.addEventListener('mousedown', hideHint, { once: true });
  
}, 100);

// Codex buttons (added with delay to ensure DOM is ready)
setTimeout(() => {
  const codexBtn = document.getElementById('codexBtn');
  const codexClose = document.getElementById('codexClose');
  if (codexBtn) codexBtn.addEventListener('click', openCodex);
  if (codexClose) codexClose.addEventListener('click', closeCodex);
  updateCodexButton();
}, 100);

// CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    0% { opacity: 0; transform: translate(-50%, 20px); }
    20% { opacity: 1; transform: translate(-50%, 0); }
    80% { opacity: 1; transform: translate(-50%, 0); }
    100% { opacity: 0; transform: translate(-50%, -20px); }
  }
`;
document.head.appendChild(style);

// Initialize - LOAD SAVED DATA FIRST!
loadGame(); // Load unlocked ghouls from localStorage
game.currentGhoul = ghouls[0];
player.reset();
generateDailyChallenge();
updateChallengeUI();
createStartScreenGrid(); // Now shows correctly unlocked ghouls
gameLoop();

// Challenge button
setTimeout(() => {
  const challengeBtn = document.getElementById('challengeBtn');
  if (challengeBtn) {
    challengeBtn.addEventListener('click', () => {
      startChallengeMode();
      startGame();
    });
  }
  // Make sure challenge UI is updated
  updateChallengeUI();
}, 100);

console.log('GOO RUNNER - All Phases Complete!');
