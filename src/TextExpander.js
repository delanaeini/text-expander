import { useState } from "react";

export default function TextExpander({
  children,
  className = "",
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <>
      <p className={className}>
        {isExpanded
          ? children
          : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."}
        <span
          role="button"
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ color: buttonColor, cursor: "pointer", marginLeft: "6px" }}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </span>
      </p>
    </>
  );
}
