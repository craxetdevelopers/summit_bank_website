
import fs from "fs/promises";
import path from "path";
import FolderGalleryClient from "./FolderGalleryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function FolderGalleryPage({ params }: { params: { folder: string } }) {
  const { folder } = params;
  const folderPath = path.join(process.cwd(), "public", "gallery", folder);

  let images: string[] = [];

  try {
    const files = await fs.readdir(folderPath);
    images = files.map((file) => `/gallery/${folder}/${file}`);
  } catch (error) {
    console.error("Error reading folder:", error);
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-600">Folder not found or no images</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-10 capitalize text-center">{folder} Gallery</h1>
        <FolderGalleryClient images={images} />
      </div>
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  const galleryPath = path.join(process.cwd(), "public", "gallery");
  const folders = await fs.readdir(galleryPath);
  return folders.map((folder) => ({ folder }));
}
