"use client";
import { useState, useEffect, useCallback } from "react";

export default function TypeWriter({ phrases, speed = 80, deleteSpeed = 40, pauseTime = 2000 }) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      setText(currentPhrase.substring(0, text.length - 1));
    } else {
      setText(currentPhrase.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentPhrase) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }
  }, [text, phraseIndex, isDeleting, phrases, pauseTime]);

  useEffect(() => {
    const timer = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span>
      {text}
      <span className="cursor" />
    </span>
  );
}
