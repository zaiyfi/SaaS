"use client";
import { useRouter } from "next/navigation";
import React from "react";
import UploadCareButton from "./upload-care-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
type Props = {
  userImage: string | null;
  onDelete?: any;
  onUpload?: any;
};
const ProfilePicture = ({ userImage, onUpload, onDelete }: Props) => {
  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const response = await onDelete();
    if (response) {
      router.refresh();
    }
  };
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex flex-col items-center justify-center h-[30vh]">
        {userImage ? (
          <>
            <div className="flex flex-col h-[30vh] items-center">
              <Image
                src={userImage}
                alt="User-Image"
                width={400}
                height={400}
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  );
};

export default ProfilePicture;
