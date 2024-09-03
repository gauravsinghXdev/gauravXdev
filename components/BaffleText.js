// components/BaffleText.js
import { useEffect } from 'react';
import baffle from 'baffle';

const BaffleText = () => {
  useEffect(() => {
    const text1 = baffle('#lineOne');
    text1.set({
      characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
      speed: 120,
    });
    text1.start();
    text1.reveal(2000);

    const text2 = baffle('#name');
    text2.set({
      characters: '█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
      speed: 120,
    });
    text2.start();
    text2.reveal(4000);
  }, []);

  return (
    <div>
      <p id="lineOne">Hi, my name is</p>
      <p id="name">Gaurav Singh</p>
      <style jsx>{`
        // p {
        //   font-family: monospace;
        //   font-size: 2rem;
        // }
      `}</style>
    </div>
  );
};

export default BaffleText;
