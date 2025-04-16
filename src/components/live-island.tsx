import {
  CSSProperties,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";

const getVal = (val: number | string) => {
  return typeof val === "number" ? `${val}px` : val;
};

// Define the imperative handle type
export type LiveIslandHandle = {
  close: () => void;
  open: () => void;
  toggle: () => void;
};

export type LiveIslandProps = {
  className?: string;
  top?: number | string;
  smallClassName?: string;
  smallWidth?: number | string;
  smallHeight?: number | string;
  largeClassName?: string;
  largeWidth?: number | string;
  largeHeight?: number | string;
  largeRadius?: number | string;
  wrapperClassName?: string;
  triggerType?: "click" | "hover";
  initialAnimation?: boolean;
  closeOnScroll?: boolean;
  closeOnOutsideClick?: boolean;
  onChange?: (isSmall: boolean) => void;
  children?: (isSmall: boolean) => ReactNode;
};

const LiveIsland = forwardRef<LiveIslandHandle, LiveIslandProps>(
  (props, ref) => {
    const {
      className = "",
      top = 10,
      smallClassName = "",
      smallWidth = 96,
      smallHeight = 30,
      largeClassName = "",
      largeWidth = 400,
      largeHeight = 180,
      largeRadius = 36,
      wrapperClassName = "",
      triggerType = "click",
      initialAnimation = false,
      closeOnScroll = false,
      closeOnOutsideClick = false,
      onChange,
      children,
    } = props;

    const [isHide, setIsHide] = useState(true);
    const hasMount = useRef(false);

    useEffect(() => {
      setIsHide(false);
      setTimeout(() => (hasMount.current = true), 10);
    }, []);

    const [isSmall, setIsSmall] = useState(true);
    const onChangeRef = useRef(onChange);
    onChangeRef.current = onChange;

    const onOpen = () => {
      navigator.vibrate?.(200);
      setIsSmall(false);
      onChangeRef.current?.(true);
    };

    const onClose = () => {
      setIsSmall(true);
      onChangeRef.current?.(false);
    };

    const onToggle = () => {
      if (isSmall) {
        onOpen();
      } else {
        onClose();
      }
    };

    // Expose methods via ref
    useImperativeHandle(ref, () => ({
      close: onClose,
      open: onOpen,
      toggle: onToggle,
    }));

    const isClickType = triggerType === "click";

    // Only add scroll event listener if closeOnScroll is true
    useEffect(() => {
      if (isClickType && closeOnScroll) {
        const onScroll = () => onClose();
        window.addEventListener("scroll", onScroll, true);
        return () => {
          window.removeEventListener("scroll", onScroll, true);
        };
      }
    }, [isClickType, closeOnScroll]);

    return (
      <div
        hidden={isHide}
        className={`fixed inset-x-0 z-[9999] ${wrapperClassName}`}
        style={
          {
            top: getVal(top),
            "--small-width": getVal(smallWidth),
            "--small-height": getVal(smallHeight),
            "--large-width": getVal(largeWidth),
            "--large-height": getVal(largeHeight),
            "--large-radius": getVal(largeRadius),
          } as CSSProperties
        }
      >
        {/* Only render overlay that closes on click if closeOnOutsideClick is true */}
        {isClickType && closeOnOutsideClick && (
          <div
            className={`${isSmall ? "" : "fixed inset-0"}`}
            onClick={onClose}
          />
        )}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden bg-black text-white ${className} ${
            isSmall
              ? `cursor-pointer duration-300 select-none hover:scale-105 ${smallClassName} ${
                  initialAnimation || hasMount.current
                    ? "animate-turn-to-small"
                    : ""
                }`
              : `${largeClassName} animate-turn-to-large`
          } `}
          style={{
            width: isSmall ? getVal(smallWidth) : getVal(largeWidth),
            height: isSmall ? getVal(smallHeight) : getVal(largeHeight),
            borderRadius: isSmall ? getVal(smallHeight) : getVal(largeRadius),
            boxShadow: isSmall
              ? "inset 0 0 0 1.5px rgba(255,255,255,0.15), 0 1px 2px rgba(0,0,0,0.2)"
              : "inset 0 0 0 1.5px rgba(255,255,255,0.1), 0 16px 40px rgba(0,0,0,0.7)",
          }}
          {...(isClickType && isSmall ? { onClick: onOpen } : {})}
        >
          <div className="duration-200">{children?.(isSmall)}</div>
        </div>
      </div>
    );
  },
);

LiveIsland.displayName = "LiveIsland";

export default LiveIsland;
