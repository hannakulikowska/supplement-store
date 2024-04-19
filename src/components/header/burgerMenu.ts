export default class BurgerMenu {
  private toggleButton: HTMLButtonElement;

  private header: HTMLElement;

  constructor(toggleButtonSelector: string, headerSelector: string) {
    const toggleButton = document.querySelector(toggleButtonSelector) as HTMLButtonElement;
    const header = document.querySelector(headerSelector) as HTMLElement;

    if (!toggleButton || !header) {
      throw new Error('Required elements not found in the document.');
    }

    this.toggleButton = toggleButton;
    this.header = header;
    this.initEvents();
  }

  private initEvents(): void {
    this.toggleButton.addEventListener('click', () => this.toggleMenu());
  }

  private toggleMenu(): void {
    const isOpen = this.header.classList.contains('active');
    this.header.classList.toggle('active');
    this.toggleButton.setAttribute('aria-expanded', String(!isOpen));
  }
}
