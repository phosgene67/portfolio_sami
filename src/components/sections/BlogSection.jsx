import Section from '../common/Section'
import SectionTitle from '../common/SectionTitle'
import BlogCard from '../cards/BlogCard'
import { blogData } from '../../data/blog'

export default function BlogSection() {
  return (
    <Section id="blog" className="bg-neutral-50">
      <div>
        <SectionTitle>Blog & Articles</SectionTitle>
        <p className="text-neutral-600 text-lg max-w-2xl mb-12">
          I'm working on a comprehensive blog about robotics, embedded systems, and engineering. Check back soon for in-depth articles and tutorials!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {blogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </Section>
  )
}
