export default class HeaderChanger {
  private header: HTMLElement;

  constructor(headerSelector: string, targetSelector: string) {
    const header = document.querySelector(headerSelector);
    const target = document.querySelector(targetSelector);

    if (!header || !(header instanceof HTMLElement)) {
      throw new Error('Header element not found or is not an HTMLElement');
    }

    if (!target || !(target instanceof HTMLElement)) {
      throw new Error('Target element not found or is not an HTMLElement');
    }

    this.header = header;
    this.createObserver(target);
  }

  private createObserver(target: HTMLElement): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.header.classList.add('header--fixed');
          } else {
            this.header.classList.remove('header--fixed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    observer.observe(target);
  }
}
