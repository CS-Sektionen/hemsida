import { useEffect } from 'react';
import anime from 'animejs';

export function useIntroAnimation() {
  useEffect(() => {
    const headerEl = document.querySelector('.card-headers h1');
    if (headerEl && !headerEl.querySelector('span')) {
      headerEl.innerHTML = headerEl.innerHTML.replace(/\S/g, '<span>$&</span>');
    }

    if (!sessionStorage.getItem('visited')) {
      sessionStorage.setItem('visited', 'true');

      anime
        .timeline({ duration: 2000 })
        .add(
          {
            targets: '.container',
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 1000,
            easing: 'easeInOutQuint',
          },
          '+=200'
        )
        .add({
          targets: '.card-headers h1 > span',
          opacity: [0, 1],
          delay: anime.stagger(100),
          duration: 1,
          easing: 'linear',
        })
        .add(
          {
            targets: '.home-logo',
            top: [-50, 7],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeOutQuint',
          },
          '+=200'
        )
        .add(
          {
            targets: '.navbar-wide, .navbar-resp',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutQuint',
          },
          '-=590'
        );
    } else {
      anime.timeline({ duration: 1000 }).add({
        targets: '.card-headers h1 > span',
        opacity: [0, 1],
        delay: anime.stagger(80),
        duration: 1,
        easing: 'linear',
      });
    }
  }, []);
}
