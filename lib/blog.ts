import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export type PostMetadata = {
  id: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Utiliser gray-matter pour analyser la section des métadonnées
  const matterResult = matter(fileContents);

  // Utiliser remark pour convertir le markdown en HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
  const contentHtml = processedContent.toString();
  console.log(contentHtml, id)

  // Combiner les données avec l'id
  return {
    id,
    contentHtml,
    ...matterResult.data as { title: string; description: string; date: string; tags: string[] }
  };
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getSortedPostsMetadata(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    // Récupérer l'ID du post à partir du nom du fichier
    const id = fileName.replace(/\.md$/, '');

    // Lire le fichier markdown comme une chaîne
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Utiliser gray-matter pour analyser la section des métadonnées
    const matterResult = matter(fileContents);

    // Combiner les données avec l'id
    return {
      id,
      ...matterResult.data as { title: string; description: string; date: string; tags: string[] }
    };
  });

  // Trier les posts par date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}