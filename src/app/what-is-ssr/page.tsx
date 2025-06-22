import Deck from "@/src/app/components/Deck";
export default function WhatIsSSR() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-8">
        <div className="relative w-full max-w-md h-96 flex items-center justify-center">
        <Deck />
        </div>
      </main>
    )
  }