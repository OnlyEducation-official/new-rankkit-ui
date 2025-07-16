// components/GoogleRatingCard.tsx
"use client"
import Image from "next/image"
import "@/tailwind.css"

export default function GoogleRatingCard() {
  return (
    <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 w-full max-w-sm shadow-lg">
      <div className="flex items-center gap-4">
        <Image src="/google-icon.svg" alt="Google Icon" width={48} height={48} />
        <div>
          <p className="text-lg font-semibold">Google Rating</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-2xl font-bold">4.8</span>
            <span className="text-yellow-400 text-xl">★★★★★</span>
          </div>
          <p className="text-sm mt-1 underline">See all our reviews</p>
        </div>
      </div>
    </div>
  )
}
