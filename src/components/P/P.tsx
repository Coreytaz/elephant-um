import type { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import styles from "./P.module.scss";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: "px15" | "px18" | "px20" | "px22";
}

export default function P({ children, className, size = "px18", ...props }: PProps) {
  return <p className={cn(styles.p, styles[size], className)} {...props}>{children}</p>;
}
