import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

interface ToggleThemeButtonProps extends React.ComponentProps<typeof Button> {
  animate?: boolean;
}

const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = ({
  animate = true,
  ...props
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let animateColorModeIcon: any;
  let animation: any;

  if (animate) {
    animation = useAnimation();
    const [angle, setAngle] = useState(360);

    animateColorModeIcon = async () => {
      await animation.start({
        rotate: angle,
        transition: { duration: 0.5 },
        type: "spring",
      });
      setAngle(angle === Number.MAX_SAFE_INTEGER ? 0 : angle + 360);
    };
  }

  const ColorModeIcon: React.FC = () => {
    return <>{colorMode == "light" ? <MoonIcon /> : <SunIcon />}</>;
  };

  return (
    <Button
      onClick={() => {
        toggleColorMode();

        if (animate) {
          animateColorModeIcon();
        }
      }}
      data-testid="toggle-theme-btn"
      {...props}
    >
      {animate ? (
        <motion.div animate={animation}>
          <ColorModeIcon />
        </motion.div>
      ) : (
        <ColorModeIcon />
      )}
    </Button>
  );
};

export default ToggleThemeButton;
