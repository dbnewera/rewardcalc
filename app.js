const removeCommas = number => {
    arr = number.split('');
    arr.forEach((value, index) => {
    if (value === ',') {
        arr.splice(index, 1);
      }
    })
    return parseInt(arr.join(''));
    }

  const calculateAdventureReward = () => {
    let plReward = 0;
    let mpReward = 0
    let zeniReward = 0;
    let words = document.getElementById('adv-wc');

    const calculatePL = () => {
      let posts = Math.round(removeCommas(words.value) / 200);
      let perPost = 100;
      let reward;
      if (document.getElementById('adv-solo').checked) {perPost = 50};
      if (document.getElementById('adv-kai').checked) {perPost += 25};
      reward = posts * perPost;
      if (document.getElementById('adv-clothing').checked) {reward *= 1.5};
      if (document.getElementById('adv-boost').checked) {reward *= 1.5};
      return plReward = Math.round(reward).toLocaleString();
    }
    const calculateMP = () => {
      let mp = Math.floor(removeCommas(words.value) / 1000);
      if (!document.getElementById('adv-solo').checked) {
      mp *= 2;
      return mpReward = mp.toLocaleString();
      }
      if (mp > 5) {
        mp = 5;
      }
      return mpReward = mp.toLocaleString();
    }
    const calculateZeni = () => {
      let posts = Math.round(removeCommas(words.value) / 200);
      let zeni;
      if (!document.getElementById('adv-solo').checked) {
        zeni = posts * 800;
      }
      else {
        zeni = posts * 400;
      }
      if (document.getElementById('adv-freight').checked) {zeni *= 1.1};
      if (document.getElementById('adv-adv').checked) {zeni *= 1.5};
      return zeniReward = zeni.toLocaleString(); 
    }
    const listenForChanges = () => {
      document.getElementById('adv-wc').addEventListener('keyup', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward();
      })
      document.querySelectorAll('.check').forEach(check => check.addEventListener('click', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward()
      }
      ))
    }
    const updateReward = () => {
      return document.getElementById('adv-reward').innerHTML = `+${plReward} PL, +${mpReward} MP, and +${zeniReward} zeni`;
    }
    listenForChanges();
  }
  
  const calculateSparReward = () => {
    let plReward = 0;
    let mpReward = 0
    let posts = document.getElementById('spr-posts');
    
    const calculatePL = () => {
      let perPost = 100;
      let reward;
      if (document.getElementById('spr-kai').checked) {perPost += 25};
      reward = perPost * posts.value;
      if (document.getElementById('spr-clothing').checked) {reward *= 1.5};
      reward += 1000;
      if (document.getElementById('spr-arena').checked) {reward += 250};
      if (document.getElementById('spr-team').checked) {reward += 250};
      if (document.getElementById('spr-boost').checked) {reward *= 1.5};
      return plReward = Math.round(reward).toLocaleString();
    }
    const calculateMP = () => {
      let mp = Math.floor((posts.value / 5) + 3);
      return mpReward = mp.toLocaleString();
    }
    const listenForChanges = () => {
      document.getElementById('spr-posts').addEventListener('keyup', event => {
        calculatePL();
        calculateMP();
        updateReward();
      })
      document.querySelectorAll('.check').forEach(check => check.addEventListener('click', event => {
        calculatePL();
        calculateMP();
        updateReward()
      }
      ))
    }
    const updateReward = () => {
    return document.getElementById('spr-reward').innerHTML = `+${plReward} PL and +${mpReward} MP`;
    }
    listenForChanges();
  }
  const calculateEventReward = () => {
    let plReward = 0;
    let mpReward = 0
    let zeniReward = 0;
    let posts = document.getElementById('evt-posts');
    
    const calculatePL = () => {
      let perPost = 200;
      let reward;
      if (document.getElementById('evt-kai').checked) {perPost += 25};
      reward = perPost * posts.value;
      if (document.getElementById('evt-clothing').checked) {reward *= 1.5};
      reward += 4000;
      if (document.getElementById('evt-deadly').checked) {reward += 2000};
      return plReward = Math.round(reward).toLocaleString();
    }
    const calculateMP = () => {
      let mp = Math.floor((posts.value / 5) + 4);
      if (document.getElementById('evt-deadly').checked) {mp += 2};
      return mpReward = mp.toLocaleString();
    }
    const calculateZeni = () => {
      let zeni = (posts.value * 1000) + 4000;
      if (document.getElementById('evt-deadly').checked) {zeni += 2000};
      if (document.getElementById('evt-freight').checked) {zeni *= 1.1};
      if (document.getElementById('evt-adv').checked) {zeni *= 1.5};
      return zeniReward = zeni.toLocaleString(); 
    }
    const listenForChanges = () => {
      document.getElementById('evt-posts').addEventListener('keyup', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward();
      })
      document.querySelectorAll('.check').forEach(check => check.addEventListener('click', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward()
      }
      ))
    }
    const updateReward = () => {
    return document.getElementById('evt-reward').innerHTML = `+${plReward} PL, +${mpReward} MP, and +${zeniReward} zeni`;
    }
    listenForChanges();
  }
  const calculateBattleReward = () => {
    let plReward = 0;
    let mpReward = 0
    let zeniReward = 0;
    let posts = document.getElementById('btl-posts');
    
    const calculatePL = () => {
      let perPost = 200;
      let reward;
      if (document.getElementById('btl-kai').checked) {perPost += 25};
      reward = perPost * posts.value;
      if (document.getElementById('btl-clothing').checked) {reward *= 1.5};
      if (document.getElementById('btl-winner').checked) {reward += 3000}
      else (reward += 5000);
      return plReward = Math.round(reward).toLocaleString();
    }
    const calculateMP = () => {
      let mp = Math.floor((posts.value / 5) + 4);
      if (document.getElementById('btl-winner').checked) {mp += 5}
      else (mp += 3);
      return mpReward = mp.toLocaleString();
    }
    const calculateZeni = () => {
      let zeni = posts.value * 600;
      if (document.getElementById('btl-winner').checked) {zeni += 5000};
      if (document.getElementById('btl-adv').checked) {zeni *= 1.5};
      return zeniReward = zeni.toLocaleString(); 
    }
    const listenForChanges = () => {
      document.getElementById('btl-posts').addEventListener('keyup', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward();
      })
      document.querySelectorAll('.check').forEach(check => check.addEventListener('click', event => {
        calculatePL();
        calculateMP();
        calculateZeni();
        updateReward()
      }
      ))
    }
    const updateReward = () => {
    return document.getElementById('btl-reward').innerHTML = `+${plReward} PL, +${mpReward} MP, and +${zeniReward} zeni`;
    }
    listenForChanges();
  }

  
  calculateAdventureReward();
  calculateSparReward();
  calculateEventReward();
  calculateBattleReward();
