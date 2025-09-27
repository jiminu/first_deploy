import Image from "next/image";
import axios from 'axios';
import Link from "next/link";

const getPortfolioData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/jiminu/first_deploy/refs/heads/main/service/resume_portfolio_service.json');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
const getResumeData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/jiminu/first_deploy/refs/heads/main/service/resume_general_info_service.json');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image
              src="/face.jpg"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            안녕하세요, 지민우입니다
          </h1>
          {/* <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            열정적으로 코딩을 배우고 있는 개발자입니다. 
            새로운 기술을 익히고 문제를 해결하는 것을 좋아합니다.
          </p> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">자기소개</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ㅇㅇㅇㅇ </h3>
              <p className="text-gray-600 mb-4">
                내용 넣
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ㅁㅁㅁㅁㅁ </h3>
              <ol className="text-gray-600 space-y-2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 프로젝트 카드들은 나중에 추가 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link
                href="https://github.com/jiminu/first_deploy"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">First Deploy</h3>
                <p className="text-gray-600 mb-4">Next.js로 만든 첫 번째 포트폴리오 웹사이트</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">TypeScript</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">끝맺음</h2>
          <p className="text-gray-600 mb-8">좋은 인연으로 만나뵐 수 있기를 바랍니다.</p>
          <div className="flex justify-center gap-6">
            <Link 
              href="https://github.com/jiminu" 
              target="_blank"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="mailto:jmu417@gmail.com" 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              jmu417@gmail.com
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
