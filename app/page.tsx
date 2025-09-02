"use client";

import { Button } from "@/components/ui";

export default function Home() {
  return (
    <div className="">
      <section className="bg-[url(/me.jpeg)]  h-screen bg-no-repeat bg-cover bg-top">
        <div className="w-full h-full flex justify-center items-center bg-zinc-950/95">
          <div className="text-center flex flex-col gap-6">
            <h1 className="text-4xl">Adão Ângelo João</h1>
            <p>
              Web & Mobile Developer passionate about technology and creating
              solutions that impact lives.
            </p>
            <div className="flex gap-4 justify-center items-center">
              <Button>GET IN TOUCH</Button>
              <Button variant="outline">GITHUB</Button>
            </div>
          </div>
        </div>
      </section>

      <p>
        Web & Mobile Developer passionate about technology and creating
        solutions that impact lives.
      </p>
    </div>
  );
}
