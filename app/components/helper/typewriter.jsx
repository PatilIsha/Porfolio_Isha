"use client";

import { useEffect, useState } from "react";

const Typewriter = ({
  words = [],
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    // finished typing the full word -> pause, then start deleting
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    // finished deleting -> move on to the next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={className}>
      {words[index] ? words[index].substring(0, subIndex) : ""}
      <span className="text-pink-500" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};

export default Typewriter;
