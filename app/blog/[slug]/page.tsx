import { getAllPostIds, getPostData } from '@/lib/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Link from 'next/link';

// Génération des chemins statiques pour tous les articles
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}export default async function Post({ params }: { params: { slug: string } }) {
  // Attendez que params soit disponible
  const slug = await params.slug;
  
  try {
    const postData = await getPostData(slug);
    
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Retour à accueil
          </Link>
          
          <h1 className="text-3xl font-bold mb-2">{postData.title}</h1>
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500">
              {format(new Date(postData.date), 'dd MMMM yyyy', { locale: fr })}
            </p>
            <div className="flex flex-wrap gap-2">
              {postData.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border-t pt-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    );
  } catch (error){
    return (
      console.log(error)
    )
  }
}