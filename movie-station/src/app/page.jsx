import { MediaGrid } from "@/components/MediaGrid";
import { featuredContent } from "@/lib/mockData";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-10">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Movie Station</h1>
          <p className="text-xl mb-6">Your one-stop destination for movies and TV shows</p>
          <p className="text-lg">Browse our collection of the latest and greatest in entertainment.</p>
        </div>
      </section>
      
      <section>
        <MediaGrid items={featuredContent} title="Featured Content" />
      </section>
    </main>
  );
}