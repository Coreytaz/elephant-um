import React from "react";
import styles from "./P.module.scss";
import cn from "classnames";

interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: "px15" | "px18" | "px20" | "px22";
}

const P: React.FC<PProps> = ({
  children,
  className,
  size = "px18",
  ...props
}) => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.px15]: size === "px15",
        [styles.px18]: size === "px18",
        [styles.px18]: size === "px20",
        [styles.px22]: size === "px22",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
