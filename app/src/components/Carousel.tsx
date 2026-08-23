import { useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  slides: ReactNode[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);
  const scrollFrameRef = useRef<number | null>(null);

  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  function goTo(next: number) {
    setWithTransition(true);
    setCurrent(next);
  }

  function handleTransitionEnd() {
    if (current >= slides.length + 1) {
      setWithTransition(false);
      setCurrent(1);
    } else if (current <= 0) {
      setWithTransition(false);
      setCurrent(slides.length);
    }
  }

  function handleMobileScroll() {
    if (scrollFrameRef.current !== null) return;
    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const track = mobileTrackRef.current;
      if (!track || track.clientWidth === 0) return;
      const index = Math.round(track.scrollLeft / track.clientWidth);
      setMobileIndex(Math.min(Math.max(index, 0), slides.length - 1));
    });
  }

  function goToMobileSlide(index: number) {
    const track = mobileTrackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' });
  }

  return (
    <>
      <div className={`${styles['carousel-container']} ${styles['carousel-desktop']}`}>
        <button className={styles.prev} onClick={() => goTo(current - 1)} />
        <div
          ref={trackRef}
          className={styles['carousel-track']}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: withTransition ? undefined : 'none',
          }}
        >
          {extended.map((slide, index) => (
            <div className={styles['carousel-slide']} key={index}>
              {slide}
            </div>
          ))}
        </div>
        <button className={styles.next} onClick={() => goTo(current + 1)} />
      </div>

      <div className={styles['carousel-mobile']}>
        <div ref={mobileTrackRef} className={styles['mobile-track']} onScroll={handleMobileScroll}>
          {slides.map((slide, index) => (
            <div className={styles['mobile-slide']} key={index}>
              {slide}
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === mobileIndex ? styles.active : ''}`}
              aria-label={`Visa bild ${index + 1}`}
              onClick={() => goToMobileSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
