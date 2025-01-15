import React from "react";

interface DotLineLoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
  dots?: number;
}

const DotLineLoader: React.FC<DotLineLoaderProps> = ({
  size = "medium",
  color = "bg-blue-600",
  text = "Loading",
  dots = 3,
}) => {
  // Size mappings
  const sizeConfig = {
    small: {
      dot: "h-1.5 w-1.5",
      spacing: "space-x-1.5",
      text: "text-sm",
    },
    medium: {
      dot: "h-2 w-2",
      spacing: "space-x-2",
      text: "text-base",
    },
    large: {
      dot: "h-3 w-3",
      spacing: "space-x-3",
      text: "text-lg",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Dots container */}
      <div className={`flex items-center ${sizeConfig[size].spacing}`}>
        {[...Array(dots)].map((_, index) => (
          <div
            key={index}
            className={`
              ${color}
              ${sizeConfig[size].dot}
              rounded-full
              animate-pulse
            `}
            style={{
              animationDelay: `${index * 200}ms`,
              animationDuration: "1s",
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      {text && (
        <div className="relative mt-4">
          <span className={`${sizeConfig[size].text} text-gray-600`}>
            {text}
          </span>
          <span
            className={`
              absolute 
              -right-4
              ${sizeConfig[size].text}
              text-gray-600
              animate-pulse
            `}
            style={{ animationDuration: "1.5s" }}
          >
            ...
          </span>
        </div>
      )}
    </div>
  );
};

export default DotLineLoader;
