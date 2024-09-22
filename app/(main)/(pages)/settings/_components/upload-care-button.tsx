"use client";
import React from "react";
import { FileUploaderRegular } from "@uploadcare/react-uploader";

import { useRouter } from "next/navigation";
import "@uploadcare/react-uploader/core.css";

type Props = {
  onUpload: (e: string) => any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();

  const handleChangeEvent = (e) => {
    if (e.isSuccess) {
      console.log(e.allEntries[0].cdnUrl);
      onUpload(e.allEntries[0].cdnUrl);
      router.refresh();
    }
  };

  return (
    <div>
      <FileUploaderRegular
        pubkey="dde9eacc784d86c4a7bc"
        onChange={(e) => handleChangeEvent(e)}
        maxLocalFileSizeBytes={2000000}
      />
    </div>
  );
};

export default UploadCareButton;
