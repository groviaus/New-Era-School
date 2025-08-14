"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function GtmTestPage() {
  const handleClick = () => {
    sendGTMEvent({ event: "testEvent", category: "Button", value: "Clicked" });
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>GTM Test</h1>
      <button onClick={handleClick}>Send GTM test event</button>
    </main>
  );
}
