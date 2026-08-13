import { useEffect, useState } from "react";

export function TypedText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length] ?? "";
    if (!deleting && text === current) {
      const hold = window.setTimeout(() => setDeleting(true), 1800);
      return () => window.clearTimeout(hold);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((value) => (value + 1) % phrases.length);
      return;
    }
    const timer = window.setTimeout(
      () => {
        setText((value) =>
          deleting ? current.slice(0, value.length - 1) : current.slice(0, value.length + 1),
        );
      },
      deleting ? 38 : 72,
    );
    return () => window.clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return (
    <span className="shimmer-text">
      {text}
      <span className="type-caret text-turquoise">|</span>
    </span>
  );
}
