"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";
import { MAX_FILE_SIZE } from "@/constants";
import { useToast } from "@/hooks/use-toast";
import { uploadFile } from "@/lib/actions/file.action";
import { usePathname } from "next/navigation";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
  const { toast } = useToast();

  const path = usePathname();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      // Do something with the files
      setFiles(acceptedFiles);

      const uploadPromises = acceptedFiles.map(async (file) => {
        if (file.size > MAX_FILE_SIZE) {
          setFiles((prevFiles) =>
            prevFiles.filter((f) => f.name !== file.name),
          );
          return toast({
            description: (
              <p className={"my-2 text-white"}>
                <span className={"font-semibold"}>{file.name}</span> is to
                large. Maximum file size is 50MB.
              </p>
            ),
            className: "error-toast",
          });
        }
        return uploadFile({ file, ownerId, accountId, path }).then(
          (uploadFile) => {
            if (uploadFile) {
              setFiles((prevFiles) =>
                prevFiles.filter((f) => f.name !== file.name),
              );
            }
          },
        );
      });
      await Promise.all(uploadPromises);
    },
    [ownerId, accountId, path],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    fileName: string,
  ) => {
    e.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div {...getRootProps()} className={"cursor-pointer"}>
      <input {...getInputProps()} />
      <Button type={"button"} className={cn("uploader-button", className)}>
        <Image
          src={"/assets/icons/upload.svg"}
          alt={"upload"}
          width={24}
          height={24}
        />
        <p> Upload </p>
      </Button>

      {files.length > 0 && (
        <ul className={"uploader-preview-list"}>
          <h4 className={"h4 text-light-100"}> Uploading</h4>
          {files.map((file, index) => {
            const { type, extension } = getFileType(file.name);
            return (
              <li
                key={`${file.name} - ${index}`}
                className={"uploader-preview-item"}
              >
                <div className={"flex items-center gap-3"}>
                  <Thumbnail
                    type={type}
                    extension={extension}
                    url={convertFileToUrl(file)}
                  />
                  <div className={"preview-item-name"}>
                    {file.name}
                    <Image
                      src={"/assets/icons/file-loader.gif"}
                      alt={"loader"}
                      width={80}
                      height={26}
                    />
                  </div>
                </div>
                <Image
                  src={"/assets/icons/remove.svg"}
                  alt={"remove"}
                  width={24}
                  height={24}
                  onClick={(e) => handleRemoveFile(e, file.name)}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default FileUploader;
