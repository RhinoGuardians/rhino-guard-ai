declare module 'jspdf' {
  export class jsPDF {
    constructor(options?: {
      orientation?: 'portrait' | 'landscape';
      unit?: 'mm' | 'cm' | 'in' | 'px';
      format?: string | number[];
    });
    addPage(): void;
    addImage(
      imageData: string,
      format: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    setFontSize(size: number): void;
    setTextColor(r: number, g: number, b: number): void;
    text(text: string, x: number, y: number): void;
    save(filename: string): void;
  }
}

declare module 'html2canvas' {
  interface Html2CanvasOptions {
    scale?: number;
    backgroundColor?: string | null;
    logging?: boolean;
    useCORS?: boolean;
    allowTaint?: boolean;
    imageTimeout?: number;
  }
  
  export default function html2canvas(
    element: HTMLElement,
    options?: Html2CanvasOptions
  ): Promise<HTMLCanvasElement>;
}
