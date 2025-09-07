import { useState } from "react";


/**
 * Darkens the existing background on hover using a translucent overlay + blend.
 * Works with solid colors or background images. Children/text aren't affected.
 */
function HoverBox({
  children,
  className,
  baseStyle = {},
  hoverStyle = {},
  // controls for the darkening overlay:
  tintRGBA = "0,0,0",     // black tint by default
  tintOpacity = 0.15,     // ~15% darkness
  // click behaviour
  href,
  newTab = true
}: {
  children: React.ReactNode;
  className: string;
  baseStyle: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  tintRGBA: string;
  tintOpacity: number;
  href: string;
  newTab: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const Component = href ? 'a' : 'div';

  const darkenOnHover = hovered
    ? {
        // Overlay a translucent gradient (counts as a background image)
        backgroundImage: `linear-gradient(rgba(${tintRGBA}, ${tintOpacity}), rgba(${tintRGBA}, ${tintOpacity}))`,
        // Blend the overlay with whatever background is already set
        backgroundBlendMode: "multiply",
      }
    : {};

  const linkProps = href ? {href, ...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} : {};

  return (
    <Component
      className={className}
      style={{
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
        ...darkenOnHover,
        transition:
          "background-color 0.2s ease, color 0.2s ease, background-image 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...linkProps}
    >
      {children}
    </Component>
  );
}

export default HoverBox;
