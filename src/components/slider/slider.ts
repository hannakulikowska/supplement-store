type ScrollerElement = HTMLElement & {
  querySelector: (selector: string) => HTMLElement | null;
};

export default class ScrollerAnimation {
  private scrollers: NodeListOf<ScrollerElement>;

  constructor(selector: string) {
    this.scrollers = document.querySelectorAll(selector);
    this.init();
  }

  private addAnimation(): void {
    this.scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', 'true');

      const scrollerInner = scroller.querySelector('.brands__slider-inner') as HTMLElement;
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

        scrollerContent.forEach((item) => {
          const duplicateItem = item.cloneNode(true) as HTMLElement;
          duplicateItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicateItem);
        });
      }
    });
  }

  private init(): void {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation();
    }
  }
}
