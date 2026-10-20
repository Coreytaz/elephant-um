import type { InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return <input className={cn(styles.input, className)} {...props} />;
}
