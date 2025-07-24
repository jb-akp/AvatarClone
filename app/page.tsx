"use client";
import AvatarInteraction from "@/app/AvatarInteraction";
import DottedFace from "@/app/components/DottedFace";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

// Update the Avatar interface to include an image URL
interface Avatar {
  name: string;
  simli_faceid: string;
  elevenlabs_voiceid: string;
  initialPrompt: string;
}

// Updated JSON structure for avatar data with image URLs
const avatar: Avatar = {
  name: "Your AI Avatar",
  simli_faceid: "b68a2102-9eb0-44c6-b129-b285cc1f899c",
  elevenlabs_voiceid: "rSw7r3ehITkuRCQQQtM2",
  initialPrompt:
    "You are a helpful AI assistant created for a tutorial demonstration. You're knowledgeable about technology, AI, and programming. You're excited to demonstrate the capabilities of AI avatars and can engage in natural conversation about various topics. You're friendly, professional, and eager to help users understand how AI avatars work.",
};

const Demo: React.FC = () => {
  const [error, setError] = useState("");
  const [showDottedFace, setShowDottedFace] = useState(true);

  const onStart = () => {
    console.log("Starting avatar interaction...");
    setShowDottedFace(false);
  };

  return (
    <>
      <Toaster />
      <div className="bg-black min-h-screen font-abc-repro font-normal text-sm text-white">
        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-2xl">
            <div className="glass-effect p-8 rounded-3xl">
              <div className="flex flex-col items-center gap-8">
                <div>
                  {showDottedFace && <DottedFace />}
                  <AvatarInteraction
                    simli_faceid={avatar.simli_faceid}
                    elevenlabs_voiceid={avatar.elevenlabs_voiceid}
                    initialPrompt={avatar.initialPrompt}
                    onStart={onStart}
                    showDottedFace={showDottedFace}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg">
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default Demo;
