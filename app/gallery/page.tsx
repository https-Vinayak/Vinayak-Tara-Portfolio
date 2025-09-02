import Image from 'next/image';
export default function GalleryPage() {
  const projects = [
    {
      link: 'https://github.com/https-Vinayak/Pet-Adopt-App',
      image: '/Pet-Adopt-App/Pet-Adopt-App-Main.png',
      icon: '',
      title: 'Pet-App',
      detail: 'High-performance Progressive Pet App with offline capabilities.',
      tag: 'Live',
      tagColor: 'bg-blue-600',
      height: 'h-60',
    },
    {
      link: '#',
      image: '/code.jpg',
      icon: '💡',
      title: 'Collaboration Platform',
      detail: 'WebSocket-based platform with conflict resolution.',
      tag: 'Beta',
      tagColor: 'bg-green-600',
      height: 'h-32',
    },
    {
      link: '#',
      image: '/code.jpg',
      icon: '🖼️',
      title: 'Portfolio Website',
      detail: 'Personal portfolio with interactive animations and modern design.',
      tag: 'Featured',
      tagColor: 'bg-pink-600',
      height: 'h-80',
    },
    {
      link: '#',
      image: '/code.jpg',
      icon: '📱',
      title: 'Mobile App',
      detail: 'Cross-platform mobile app for productivity.',
      tag: 'Mobile',
      tagColor: 'bg-purple-600',
      height: 'h-44',
    },
    {
      link: '#',
      image: '/code.jpg',
      icon: '🔒',
      title: 'Security Dashboard',
      detail: 'Real-time security analytics and monitoring.',
      tag: 'Security',
      tagColor: 'bg-blue-700',
      height: 'h-52',
    },
    {
      link: '#',
      image: '/code.jpg',
      icon: '🧠',
      title: 'AI Assistant',
      detail: 'AI-powered assistant for daily tasks.',
      tag: 'AI',
      tagColor: 'bg-green-700',
      height: 'h-36',
    },
    // Add more projects here as needed
  ];
  return (
    <div className="relative min-h-screen bg-[#161B22] py-12 px-4 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20 z-0">
        <div className="grid-overlay animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          Project Gallery
        </h1>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 [column-fill:_balance]">{/* Masonry layout */}
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="block bg-[#21262D] rounded-2xl mb-6 p-6 text-white hover:scale-[1.03] hover:shadow-2xl transition-all shadow-lg break-inside-avoid animate-fade-in"
            >
              <div className={`mb-4 ${project.height} bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl overflow-hidden relative`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-2">{project.detail}</p>
              <span className={`inline-block px-3 py-1 ${project.tagColor} text-white rounded-full text-xs`}>{project.tag}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}