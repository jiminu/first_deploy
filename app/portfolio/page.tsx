import axios from 'axios';

const getResumeData = async () => {

    const response = await axios.get('https://raw.githubusercontent.com/jiminu/first_deploy/refs/heads/main/service/resume_general_info_service.json');
    return fetch('https://raw.githubusercontent.com/jiminu/first_deploy/refs/heads/main/service/resume_general_info_service.json');
}

export default function PortfolioPage() {
    
    const response = getResumeData();
    console.log(response);    
    return (
        <div>
            <h1>Portfolio Page</h1>
            <p>이곳은 포트폴리오 페이지</p>
        </div>
    );
}