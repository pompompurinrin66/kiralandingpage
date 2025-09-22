import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import samsungLogo from '../assets/samsungelectronic.png';
import naverLogo from '../assets/naver.png';
import lgLogo from '../assets/lgchemistry.png';
import hyundaiLogo from '../assets/hyundai.png';
import cswindlogo from '../assets/cswind2.png';
import aprlogo from '../assets/apr1.svg';
import poscologo from '../assets/POSCO.png';
import lottetourlogo from '../assets/lottetour.svg';
import hanmilogo from '../assets/hanmi.png';

interface Report {
  id: number;
  title: string;
  company: string;
  industry: string;
  author: string;
  date: string;
  tags: string[];
  description: string;
  pdfUrl: string;
}

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Sample data
  const reports: Report[] = [
    {
      id: 1,
      title: '삼성전자 기업분석 리포트',
      company: '삼성전자',
      industry: '반도체',
      author: '나민재',
      date: '2025-03-15',
      tags: ['반도체', 'IT', '대형주'],
      description: '삼성전자의 메모리 반도체 사업 분석 및 향후 전망',
      pdfUrl: './test2.pdf',
    },
    {
      id: 2,
      title: 'NAVER 투자분석',
      company: 'NAVER',
      industry: '인터넷서비스',
      author: '송영훈',
      date: '2025-03-10',
      tags: ['플랫폼', '성장주', '인터넷'],
      description: 'NAVER의 클라우드 사업 확장성과 수익성 분석',
      pdfUrl: './test1.pdf',
    },
    {
      id: 3,
      title: 'LG화학 ESG 관점 분석',
      company: 'LG화학',
      industry: '화학',
      author: '우선우',
      date: '2024-02-28',
      tags: ['ESG', '배터리', '친환경'],
      description: 'LG화학의 배터리 사업과 ESG 경영 분석',
      pdfUrl: '#',
    },
    {
      id: 4,
      title: '현대차 Quant 모델링',
      company: '현대자동차',
      industry: '자동차',
      author: '허선아',
      date: '2024-02-20',
      tags: ['자동차', 'Quant', '모델링'],
      description: '현대차 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
    {
      id: 5,
      title: '씨에스윈드 기업분석 리포트',
      company: '씨에스윈드',
      industry: '에너지',
      author: 'KIRA 1팀',
      date: '2025-02-20',
      tags: ['Quant', '모델링'],
      description: '씨에스윈드 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
    {
      id: 6,
      title: '롯데관광개발 기업분석 리포트',
      company: '롯데관광개발',
      industry: '관광',
      author: 'KIRA 2팀',
      date: '2025-02-20',
      tags: ['Quant', '모델링'],
      description: '롯데관광개발 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
    {
      id: 7,
      title: '에이피알 기업분석 리포트',
      company: '에이피알',
      industry: '뷰티',
      author: 'KIRA 3팀',
      date: '2024-02-20',
      tags: ['화장품', 'Quant', '모델링'],
      description: '에이피알 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
    {
      id: 8,
      title: 'POSCO홀딩스 기업분석',
      company: 'POSCO홀딩스',
      industry: '철강',
      author: 'KIRA 4팀',
      date: '2024-02-20',
      tags: ['자동차', 'Quant', '모델링'],
      description: 'POSCO홀딩스 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
    {
      id: 9,
      title: '한미반도체 기업분석',
      company: '한미반도체',
      industry: '반도체',
      author: 'KIRA 5팀',
      date: '2024-02-20',
      tags: ['반도체', '소부장', '모델링'],
      description: '한미반도체 주가 예측 모델 및 팩터 분석',
      pdfUrl: '#',
    },
  ];

  const industries = ['전체', '반도체', '인터넷서비스', '화학', '자동차', '바이오/제약', '금융', '뷰티', '엔터테인먼트', '철강', '에너지', '관광'];
  const years = ['전체', '2025'];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === '' || selectedIndustry === '전체' || report.industry === selectedIndustry;
    const matchesYear = selectedYear === '' || selectedYear === '전체' || report.date.startsWith(selectedYear);
    
    return matchesSearch && matchesIndustry && matchesYear;
  });

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb', //archive 배경색
    paddingTop: '72px',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    padding: '40px 0',
  };

  const headerContentStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '50px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 16px 0',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#6b7280',
    margin: 0,
  };

  const filtersStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '40px 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    backgroundColor: '#ffffff',
  };

  const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
  };

  const reportsGridStyle: React.CSSProperties = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px 80px 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '24px',
  };

  // Function to get company logo URL
  const getCompanyLogo = (company: string) => {
    const logoMap: { [key: string]: string } = {
      '삼성전자': samsungLogo,
      'NAVER': naverLogo,
      'LG화학': lgLogo,
      '현대자동차': hyundaiLogo,
      '씨에스윈드': cswindlogo,
      '에이피알': aprlogo,
      'POSCO홀딩스': poscologo,
      '한미반도체': hanmilogo,
      '롯데관광개발': lottetourlogo 
    };
    return logoMap[company] || '';
  };

  const getReportCardStyle = (company: string): React.CSSProperties => ({
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  });

  const logoOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: getCompanyLogo('') ? `url(${getCompanyLogo('')})` : 'none',
    backgroundSize: '85%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.15,
    filter: 'grayscale(100%) contrast(1.2) brightness(0.8)',
    pointerEvents: 'none',
    zIndex: 0,
  };

  const cardTitleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 12px 0',
    lineHeight: '1.3',
  };

  const cardMetaStyle: React.CSSProperties = {
    fontSize: '15px',
    color: '#111827',
    margin: '0 0 16px 0',
  };

  const tagsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    margin: '16px 0',
  };

  const tagStyle: React.CSSProperties = {
    backgroundColor: '#e5f3ff',
    color: '#111827',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '500',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#036b45', //PDF보기 버튼 색깔 기존: #0b3a5b
    color: '#ffffff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '8px',
  };

  const backLinkStyle: React.CSSProperties = {
    color: '#0b3a5b',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '24px',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      
      <motion.div
        style={headerStyle}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div style={headerContentStyle}>
          <Link to="/" style={backLinkStyle}>
            ← 홈으로 돌아가기
          </Link>
          <h1 style={titleStyle}>Research Archive</h1>
          <p style={subtitleStyle}>
            학회원들의 기업분석 리포트를 열람하고 다운로드할 수 있습니다.
          </p>
        </div>
      </motion.div>

      <motion.div
        style={filtersStyle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
            검색
          </label>
          <input
            type="text"
            placeholder="제목, 기업명, 작성자 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
            산업분야
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            style={selectStyle}
          >
            {industries.map(industry => (
              <option key={industry} value={industry === '전체' ? '' : industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#374151' }}>
            연도
          </label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            style={selectStyle}
          >
            {years.map(year => (
              <option key={year} value={year === '전체' ? '' : year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      <div style={reportsGridStyle}>
        {filteredReports.map((report, index) => (
          <motion.div
            key={report.id}
            style={getReportCardStyle(report.company)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ 
              y: -4,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transition: { duration: 0.1 }
            }}
          >
            {/* Logo overlay */}
            <div 
              style={{
                ...logoOverlayStyle,
                backgroundImage: getCompanyLogo(report.company) ? `url(${getCompanyLogo(report.company)})` : 'none'
              }}
            />
            
            {/* Content wrapper with higher z-index */}
            <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={cardTitleStyle}>{report.title}</h3>
            <div style={cardMetaStyle}>
              <div><strong>기업:</strong> {report.company}</div>
              <div><strong>산업:</strong> {report.industry}</div>
              <div><strong>작성자:</strong> {report.author}</div>
              <div><strong>작성일:</strong> {report.date}</div>
            </div>
            
            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5', margin: '0 0 16px 0' }}>
              {report.description}
            </p>
            
            <div style={tagsStyle}>
              {report.tags.map(tag => (
                <span key={tag} style={tagStyle}>{tag}</span>
              ))}
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <button
                style={buttonStyle}
                onClick={() => report.pdfUrl !== '#' && window.open(report.pdfUrl, '_blank')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#064e3b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#036b45';  //PDF 버튼 색깔
                }}
                disabled={report.pdfUrl === '#'}
              >
                PDF 보기
              </button>
              <button
                style={{ 
                  ...buttonStyle, 
                  backgroundColor: report.pdfUrl === '#' ? '#d1d5db' : '#6b7280',
                  cursor: report.pdfUrl === '#' ? 'not-allowed' : 'pointer'
                }}
                onClick={() => {
                  if (report.pdfUrl !== '#') {
                    const link = document.createElement('a');
                    link.href = report.pdfUrl;
                    link.download = `${report.title}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
                onMouseEnter={(e) => {
                  if (report.pdfUrl !== '#') {
                    e.currentTarget.style.backgroundColor = '#4b5563';
                  }
                }}
                onMouseLeave={(e) => {
                  if (report.pdfUrl !== '#') {
                    e.currentTarget.style.backgroundColor = '#6b7280';
                  }
                }}
                disabled={report.pdfUrl === '#'}
              >
                다운로드
              </button>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {filteredReports.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: '#6b7280' }}>
          <p style={{ fontSize: '18px' }}>검색 조건에 맞는 리포트가 없습니다.</p>
        </div>
      )}
            
      {/* Footer */}
      <footer style={{
        backgroundColor: '#374151',
        padding: '24px 0',
        textAlign: 'center',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <p style={{
            color: '#9ca3af',
            fontSize: '14px',
            margin: 0,
            fontWeight: '400',
          }}>
            COPYRIGHTS ⓒ KIRA – Konkuk University Investment & Research Academy. ALL RIGHT RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Archive;