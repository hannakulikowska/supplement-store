export default class StickyHeader {
  private header: HTMLElement | null;

  constructor(headerSelector: string) {
    this.header = document.querySelector(headerSelector);
    this.addScrollListener();
  }

  private addScrollListener(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  private handleScroll = (): void => {
    if (this.header) {
      if (window.scrollY > 400) {
        this.header.classList.add('header--sticky');
      } else {
        this.header.classList.remove('header--sticky');
      }
    }
  };
}
