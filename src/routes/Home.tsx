import React from 'react';
import { Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import footerLogo from '../assets/kira-footer-logo.png';

const Home = () => {
  // About section content
  const aboutCards = [
    {
      title: 'Fundamental Research',
      description: '포괄적이고 체계적인 연구를 통해 경제 전반의 흐름과 특정 산업의 동향, 그리고 구체적인 투자 기회들을 깊이 있게 이해하고 분석합니다.', //Understand and analyze economies, industries, and investment opportunities through comprehensive research.
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      ),
    },
    {
      title: 'Quantitative Analysis',
      description: '시장의 트렌드를 파악하고, 각종 시장 신호를 분석하며, 데이터에 기반한 투자 전략을 수립하기 위해 다양한 수학적 모델과 정량적 분석 기법을 활용합니다.',  //Use mathematical models for market trends, signal analysis, and data-driven investment strategies.
      icon: <Lightbulb size={60} />,
    },
    {
      title: 'Macro-Seminar',
      description: '거시경제의 발전 동향과 정책 변화들에 대해 토론하고, 이러한 거시적 요인들이 전 세계 금융시장과 개별 투자 기회들에 어떤 영향을 미치는지 분석합니다.', //Discuss macroeconomic developments and analyze their impact on global markets and investment opportunities.
      icon: (
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <circle cx="12" cy="12" r="6"/>
          <circle cx="12" cy="12" r="2"/>

        </svg>
      ),
    },
  ];

  // What We Do items data
  const whatWeDoItems = [
    {
      number: 1,
      title: '자산운용대회',
      description: '가상의 자본금을 활용해 실제 주식시장에서 포트폴리오를 구성하여 운용하는 대회입니다. Fundamental, Quant, Macro 등 재무이론을 바탕으로 투자 전략을 수립하고, 리스크 관리와 수익률 극대화를 경험할 수 있습니다. 우수한 성과를 거둔 팀에게는 시상과 함께 투자 노하우를 공유하는 기회가 제공됩니다.',
    },
    {
      number: 2,
      title: '기업분석 스터디',
      description: '상장기업의 재무제표 분석과 기업가치 평가 방법론을 체계적으로 학습하는 정규 스터디입니다. 학회원들과 함께 실제 기업 사례를 분석하며 재무분석 역량을 기를 수 있습니다. DCF, 상대가치평가 등 다양한 밸류에이션 기법을 습득하고 적용하는 시간을 가집니다.',
    },
    {
      number: 3,
      title: '기업분석 프로젝트',
      description: '한 학기 동안 특정 기업이나 산업을 깊이 있게 분석하는 장기 프로젝트를 수행합니다. 팀별로 업 분위, 경쟁사 비교, 재무모델링 등을 종합한 전문적인 투자보고서를 작성합니다. 완성된 보고서는 학회 내 발표회에서 공유되며, 우수작은 대외 공모전 출품 기회도 제공됩니다.',
    },
    {
      number: 4,
      title: '네트워킹 & 커뮤니티',
      description: '금융업계 선배 동문들과의 만남과 현직자 특강을 통해 실무 경험을 공유받을 수 있습니다. 정기적인 학회 모임과 MT를 통해 동기들 간 유대관계를 형성하고, 업계에 대한 관심을 함께 키워갑니다. 졸업 후에도 지속되는 든든한 인적 네트워크를 구축할 수 있는 소중한 기회입니다.',
    },
  ];

  // partners data
  const partners = [
    { name: '나민재', position: 'President', image: '' },
    { name: '송영훈', position: 'Vice President', image: '' },
  ];

  const cardGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    marginTop: '40px',
  };

  const aboutTextStyle: React.CSSProperties = {
    maxWidth: '1120px',
    margin: '0 auto 60px auto',
    textAlign: 'center',
  };

  const emphasisTextStyle: React.CSSProperties = {
    fontSize: '26px',
    fontWeight: '700',
    color: '#0b3a5b',
    margin: '0 0 20px 0',
    lineHeight: '1.5',
  };

  const regularTextStyle: React.CSSProperties = {
    fontSize: '19.8px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  };

  const timelineStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  };

  const timelineItemStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderLeft: '4px solid #0b3a5b',
  };

  const partnersGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginTop: '10px',
  };

  const partnerCardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '80px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  };

  const partnerImageStyle: React.CSSProperties = {
    width: '500px', //사진 크기
    height: '500px',
    borderRadius: '2%',
    margin: '0 auto 16px auto',
    objectFit: 'cover',
  };

  // Contact

  const contactSectionStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '0',
    position: 'relative',
  };

  const contactContainerStyle: React.CSSProperties = {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '4fr 0fr', //칼럼, 지도 비율
    minHeight: '600px',
  };

  const mapStyle: React.CSSProperties = {
    width: '100%',
    height: '600px',
    border: 'none',
  };

  const contactInfoStyle: React.CSSProperties = {
    backgroundColor: '#036b45',   //Contact 섹션 색깔
    color: '#ffffff',
    padding: '80px 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const contactTitleStyle: React.CSSProperties = {
    fontSize: '56px',
    fontWeight: '700',
    marginBottom: '40px',
    letterSpacing: '2px',
  };

  const contactItemStyle: React.CSSProperties = {
    marginBottom: '32px',
    fontSize: '18px',
    lineHeight: '1.6',
    display: 'flex',
    flexDirection: 'column',
  };

  const contactLabelStyle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '8px',
    opacity: 0.8,
  };

  const contactValueStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '400',
  };

  const emailLinkStyle: React.CSSProperties = {
    color: '#ffffff',
    textDecoration: 'underline',
    fontSize: '18px',
  };

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* About Us Section */}
      <Section id="about" title="About Us">
        <div style={aboutTextStyle}>
          <p style={emphasisTextStyle}>
            건국대학교를 대표하는 재무학회로서, 자본시장에 대한 체계적 이해와 실전형 리서치 역량을 기릅니다.
          </p>
          <p style={regularTextStyle}>
            우리는 Fundamental과 Quant 접근을 함께 다루며, 팀 프로젝트·세미나·네트워킹을 통해 분석과 의사결정 능력을 쌓습니다. 
            결과물은 아카이브에 축적되어 학회 지식 자산으로 이어집니다.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '60px',
          marginTop: '60px',
          maxWidth: '1280px',  // 아이콘 사이 거리
          margin: '60px auto 0 auto',
        }}>
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Circular Icon */}
              <div style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                backgroundColor: '#0b3a5b', // 기존: #1f4849
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 style={{
                fontSize: '24px', //about us 항목
                fontWeight: '600',
                color: '#111827',
                margin: '0 0 16px 0',
                lineHeight: '1.3'
              }}>
                {card.title}
              </h3>
              
              {/* Description */}
              <p style={{
                fontSize: '16px',
                color: '#6b7280',
                lineHeight: '1.5',
                margin: 0,
                textAlign: 'center'
              }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What We Do Section */}
      <Section 
        id="curriculum" 
        title="What We Do?"
        subtitle="정규 세션은 학기당 12주 트랙으로 구성됩니다. 단계별 학습을 통해 체계적인 리서치 역량을 쌓고, 모든 결과물을 축적합니다."
        backgroundColor="#f9fafb"
      >
        <div style={{
          position: 'relative',
          maxWidth: '1280px', // what we do 섹션 가로넓이
          margin: '0 auto',
          padding: '40px 0',
        }}>
          {/* Center vertical line */}
          <motion.div
            style={{
              position: 'absolute',
              left: '50%',
              top: '40px',
              bottom: '100px',
              width: '2px',
              backgroundColor: '#0b3a5b', // 선 색깔 기존:#1f4849, 002060
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {whatWeDoItems.map((item, index) => (
            <motion.div
              key={index}
              style={{
                position: 'relative',
                marginBottom: index === whatWeDoItems.length - 1 ? 0 : '60px', //이거 뭐냐?
                display: 'flex',
                alignItems: 'center',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + (index * 0.3) }}
            >
              {/* Content container */}
              <div style={{
                width: '50%',
                textAlign: index % 2 === 0 ? 'right' : 'left',
                paddingRight: index % 2 === 0 ? '60px' : '0',
                paddingLeft: index % 2 === 1 ? '60px' : '0',
              }}>
                <h3 style={{
                  fontSize: '35px',
                  fontWeight: '700',
                  color: '#1f4849',
                  margin: '0 0 16px 0',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '17px',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {item.description}
                </p>
              </div>

              {/* Numbered circle */} 
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#0b3a5b',   // 항목 디자인
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}>
                <span style={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: '700',
                }}>
                  {item.number}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Partners Section */}
      <Section 
        id="partners" 
        title="Partners"
        subtitle="KIRA를 이끌어가는 운영진들을 소개합니다."
      >
        <div style={partnersGridStyle}>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              style={partnerCardStyle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={partner.image} alt={partner.name} style={partnerImageStyle} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', color: '#111827' }}>
                {partner.name}
              </h3>
              <p style={{ fontSize: '16px', color: '#0b3a5b', fontWeight: '600', margin: 0 }}>
                {partner.position}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Combined Contact and Footer Section */}
      <footer id="contact" style={{
        backgroundColor: '#374151', //기존: #374151
        padding: '80px 0 24px 0',
        color: '#ffffff',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr 2.1fr',
            gap: '130px',
            alignItems: 'start',
            marginBottom: '130px', // Contact + footer 세로 폭
          }}>
            {/* Logo */}
            <div>
              <img 
                src={footerLogo}
                alt="KIRA Logo" 
                style={{
                  height: '250px',
                  width: 'auto',
                  objectFit: 'contain',
                  clipPath: 'inset(25% 0 25% 0)',
                 // filter: 'brightness(0) invert(1)',
                  marginTop: '-60px',  // 위로 조금 올리기
                  marginLeft: '-60px', // 왼쪽으로 조금 붙이기
                }}
              />
            </div>
            
            {/* Navigation Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              textAlign: 'left',
            }}>
              <div>
                <h4 style={{ color: '#9ca3af', marginBottom: '8px', fontSize: '18px', fontWeight: '500' }}>사이트 바로가기</h4>
              </div>
              <div>
                <a href="#about" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', marginBottom: '1px', display: 'block' }}>About Us</a>
              </div>
              <div>
                <a href="#curriculum" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', marginBottom: '1px', display: 'block' }}>Curriculum</a>
              </div>
              <div>
                <a href="#partners" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', marginBottom: '1px', display: 'block' }}>Partners</a>
              </div>
              <div>
                <a href="/archive" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '18px', marginBottom: '1px', display: 'block' }}>Archive</a>
              </div>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 style={{ color: '#9ca3af', marginBottom: '15px', fontSize: '20px', fontWeight: '500' }}>Seoul</h4>
              <div style={{ marginBottom: '12px', fontSize: '20px', lineHeight: '1.6' }}>
                서울특별시 광진구 능동로 120, 건국대학교 경영관<br />
                (KIRA)
              </div>
              <div style={{ marginBottom: '8px', fontSize: '18px' }}>+82 0-0000-0000</div>
              <a href="mailto:contact@kira.ac.kr" style={{ 
                color: '#ffffff', 
                textDecoration: 'none', 
                fontSize: '18px' 
              }}>
                contact@kira.ac.kr
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div style={{
            borderTop: '1px solid #4b5563',
            paddingTop: '24px',
            textAlign: 'center',
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
        </div>
      </footer>
    </>
  );
};

export default Home;