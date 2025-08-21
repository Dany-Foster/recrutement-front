// src/global.d.ts
import { ButtonProps as MTButtonProps} from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  export interface ButtonProps extends Omit<MTButtonProps,
    | "placeholder"
    | "onResize"
    | "onResizeCapture"
    | "onPointerEnterCapture"
    | "onPointerLeaveCapture"
  > {}
}



declare global {
  namespace React {
    interface DOMAttributes<T> {
      onResize?: ReactEventHandler<T> | undefined;
      onResizeCapture?: ReactEventHandler<T> | undefined;
      placeholder?: string | undefined;
      onPointerEnterCapture?: ReactEventHandler<T> | undefined;
      onPointerLeaveCapture?: ReactEventHandler<T> | undefined;
      crossOrigin?: string | undefined;
    }
  }
}