"use server";
// node-appwrite
import { Account, Client, Databases, Storage, Avatars } from "node-appwrite";
import { appWriteConfig } from "@/lib/appwrite/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// session Client
export const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId);
  const session = (await cookies()).get("appwrite-session");
  if (!session || !session.value) {
    console.error("No session found");
    // Redirect to sign-in page if no session is found
    redirect("/sign-in");
  }
  client.setSession(session.value);
  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

export const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId)
    .setKey(appWriteConfig.secretKey);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatars() {
      return new Avatars(client);
    },
  };
};
