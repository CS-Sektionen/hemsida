export function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top, behavior: 'smooth' });
}
