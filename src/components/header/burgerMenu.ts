export default class BurgerMenu {
  private toggleButton: HTMLButtonElement;

  private header: HTMLElement;

  private body: Element;

  constructor(toggleButtonSelector: string, headerSelector: string) {
    const toggleButton = document.querySelector(toggleButtonSelector) as HTMLButtonElement;
    const header = document.querySelector(headerSelector) as HTMLElement;
    this.body = document.body;

    if (!toggleButton || !header) {
      throw new Error('Required elements not found in the document.');
    }

    this.toggleButton = toggleButton;
    this.header = header;
    this.initEvents();
  }

  private initEvents(): void {
    this.toggleButton.addEventListener('click', () => this.toggleMenu());
    window.addEventListener('resize', this.handleResize);
  }

  private toggleMenu(): void {
    const isOpen = this.header.classList.contains('active');
    this.header.classList.toggle('active');
    this.body.classList.toggle('no-scroll');
    this.toggleButton.setAttribute('aria-expanded', String(!isOpen));
  }

  private debounce(fn: Function, ms: number): () => void {
    let timer: number | undefined;
    return () => {
      clearTimeout(timer);
      timer = window.setTimeout(() => {
        fn.apply(this);
      }, ms);
    };
  }

  private handleResize = this.debounce(() => {
    if (window.innerWidth > 924) {
      this.header.classList.remove('active');
      this.body.classList.remove('no-scroll');
      this.toggleButton.setAttribute('aria-expanded', 'false');
    }
  }, 250);
}
