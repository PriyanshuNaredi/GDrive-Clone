import React from "react";
import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.action";
import { Models } from "node-appwrite";
import Card from "@/components/Card";
import { getFileTypesParams } from "@/lib/utils";

const Page = async ({ params, searchParams }: SearchParamProps) => {
  const type = ((await params)?.type as string) || " ";
  const types = getFileTypesParams(type) as FileType[];

  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const files = await getFiles({ types, searchText, sort });

  return (
    <div className={"page-container"}>
      <section className={"w-full"}>
        <h1 className={"h1 capitalize"}>{type}</h1>
        <div className={"total-size-section"}>
          <p className={"body-1"}>
            Total: <span className={"h5"}>{/* {totalSize} */} 0MB</span>
          </p>
          <div className={"sort-container"}>
            <p className={"body-1 hidden text-light-200 sm:block"}>sort by:</p>
            <Sort />
          </div>
        </div>
      </section>
      {/*  Render The Files */}
      {files.total > 0 ? (
        <section className={"file-list"}>
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className={"empty-list"}>
          No files Uploaded yet. Please upload a file to see it here.
        </p>
      )}
    </div>
  );
};
export default Page;
