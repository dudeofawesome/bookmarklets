(() => {
  const ns = { ...(window.doa_disney_pass ?? {}) };
  window.doa_disney_pass = ns;
  if (ns.interval != null) clearInterval(ns.interval);

  console.log('Creating alerter');

  ns.my_turn_alerted = false;
  ns.interval = setInterval(() => {
    const progress = parseFloat(
      document
        .getElementById('MainPart_divProgressbar_Progress')
        .style.width.replace('%', ''),
    );
    if (progress > (ns.last_progress ?? 0)) {
      ns.last_progress = progress;
      console.log(`We made ${progress}% progress!`);
      new Audio(
        'https://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3',
      ).play();
    }

    const my_turn =
      window.getComputedStyle(
        document.getElementById('divConfirmRedirectModal'),
      ).display !== 'none';
    if (my_turn && !ns.my_turn_alerted) {
      ns.my_turn_alerted = true;
      const siren = new Audio(
        'https://soundbible.com/mp3/Tornado_Siren_II-Delilah-747233690.mp3',
      );
      siren.loop = true;
      siren.play();
    }
  }, 1000);

  console.log(`Created alerter (interval ID: ${ns.interval})`);
})();
