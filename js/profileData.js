/**
 * PORTFOLIO DATA CONFIGURATION (Song ngữ: Tiếng Việt & English)
 * -------------------------------------------------------------
 * Bạn có thể dễ dàng thay đổi bất kỳ thông tin nào trong file này!
 * Toàn bộ website sẽ tự động cập nhật theo dữ liệu tại đây.
 */

const profileData = {
    // Cấu hình chung / General configuration
    config: {
        defaultLang: "vi", // "vi" hoặc "en"
        defaultTheme: "light", // "dark" hoặc "light"
        avatarUrl: "assets/images/avatar.png",
        email: "olwenluu@gmail.com",
        phone: "+84 908 613 416",
        location: {
            vi: "Cần Thơ / TP. Cần Thơ, Việt Nam",
            en: "CanTho / Can Tho City, Vietnam"
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/yen-luu/",
            facebook: "https://www.facebook.com/yenluu1303/",
            instagram: "https://www.instagram.com/py03/",
            tiktok: "https://www.tiktok.com/@betoyen",
            email: "olwenluu@gmail.com"
        },
        cvUrl: "#contact" // Đường dẫn tải CV (file PDF hoặc link Google Drive)
    },

    // TIẾNG VIỆT
    vi: {
        nav: {
            home: "Trang chủ",
            about: "Giới thiệu",
            experiences: "Kinh nghiệm & Dự án",
            skills: "Kỹ năng",
            education: "Học vấn & Chứng chỉ",
            contact: "Liên hệ",
            downloadCv: "Tải CV"
        },

        hero: {
            greeting: "Xin chào, tôi là",
            name: "Yến Lưu",
            typewriterPrefix: "Tôi là ",
            roles: [
                "Content & Brand Strategist",
                "Digital Marketing Specialist",
                "Growth & Campaign Specialist",
                "Performance Ads"
            ],
            tagline: "Kết hợp tư duy Sáng tạo Nghệ thuật và Phân tích Số liệu (Data-driven) để kiến tạo các chiến dịch tiếp thị bứt phá và thúc đẩy tăng trưởng doanh thu bền vững.",
            ctaProjects: "Xem Dự Án",
            ctaContact: "Liên Hệ Ngay",
            statusAvailable: "Sẵn sàng nhận dự án mới",
            experienceBadge: "3+ Năm Kinh Nghiệm",
            roasBadge: "Remote Job"
        },

        about: {
            sectionBadge: "Về bản thân",
            title: "Kiến tạo giá trị qua từng dự án",
            subtitle: "Kết nối cảm xúc thương hiệu với khách hàng mục tiêu",
            bioParagraph1: "Chào bạn! Tôi là một chuyên viên <strong>Marketing</strong> với hơn 3+ năm kinh nghiệm thực chiến trong việc hoạch định chiến lược, triển khai chiến dịch truyền thông đa kênh (Omnichannel) và tối ưu hóa hiệu suất chuyển đổi số.",
            bioParagraph2: "Triết lý làm việc của tôi: <em>'Mọi ý tưởng sáng tạo phải được neo giữ bởi dữ liệu thực tế và đo lường bằng kết quả kinh doanh'</em>. Tôi có thế mạnh đồng thời ở cả hai mảng: <strong>Branding & Storytelling</strong> (kể câu chuyện thương hiệu chạm đến trái tim) và <strong>Performance Marketing</strong> (quản lý ngân sách quảng cáo tối ưu ROI/ROAS).",
            stats: [
                { value: "3+", label: "Năm kinh nghiệm", icon: "award" },
                { value: "50+", label: "Chiến dịch thực thi", icon: "rocket" },
                { value: "350%", label: "Tăng trưởng ROAS TB", icon: "trending-up" },
                { value: "10+", label: "Thương hiệu đồng hành", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "Chuyên môn", value: "Social Media Marketing Specialist" },
                { label: "Nơi làm việc", value: "Cần Thơ / Remote" },
                { label: "Ngôn ngữ", value: "Tiếng Việt (Mẹ đẻ), Tiếng Anh" },
                { label: "Tình trạng", value: "Sẵn sàng hợp tác / Remote" }
            ],
            galleryTitle: "Khoảnh khắc & Hoạt động thực tế",
            gallerySubtitle: "Một số hình ảnh tại các sự kiện, workshop và hoạt động sáng tạo thường nhật"
        },

        experiences: {
            sectionBadge: "Kinh nghiệm làm việc",
            title: "Hành trình nghề nghiệp & Dấu ấn thực chiến",
            subtitle: "Những cột mốc phát triển và các chiến dịch Marketing tiêu biểu đã trực tiếp thực thi",
            timelineTitle: "Lịch sử công tác",
            projectsTitle: "Chiến dịch & Dự án tiêu biểu",
            categories: {
                all: "Tất cả",
                performance: "Performance Ads",
                branding: "Branding & Launch",
                content: "Content & SEO",
                social: "Social & Viral"
            },
            timeline: [
                {
                    period: "2023 - Hiện tại",
                    role: "Marketing Executive",
                    company: "CÔNG TY TNHH NHÀ HÀNG KHÁCH SẠN VÀ DU LỊCH Hải Âu Cần Thơ",
                    description: "Chịu trách nhiệm hoạch định và điều phối chiến lược tiếp thị đa kênh cho 3 thương hiệu trực thuộc Công ty",
                    achievements: [
                        "Sản xuất nội dung & Tối ưu hóa phễu chuyển đổi: giúp tăng 100% lượt tương tác.",
                        "Lập kế hoạch và sáng tạo ấn phẩm đa phương tiện (Copywriting,  thiết kế qua Canva/AI/PTS, dựng video bằng Capcut Pro.).",
                        "Tìm kiếm đối tác & Nâng tầm thương hiệu: mở rộng các cơ hội hợp tác chiến lược, đưa hình ảnh thương hiệu xuất hiện tại các sự kiện và hội chợ để gia tăng tối đa độ phủ sóng.",
                        "Dẫn dắt đội ngũ 5 thành viên phụ trách Content, Media và Ads."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2023",
                    role: "Content & Social Media Lead",
                    company: "CÔNG TY CỔ PHẦN DV TM IVY",
                    description: "Định hướng nội dung sáng tạo, xây dựng cộng đồng trên Facebook và chiến lược Inbound Marketing dài hạn cho các thương hiệu F&B",
                    achievements: [
                        "Đạt mốc 15 triệu+ lượt xem hữu cơ (organic views) trên TikTok qua chuỗi nội dung viral ngắn.",
                        "Tăng trưởng 150% lượng người theo dõi trung thành và tỷ lệ tương tác (ER) đạt 8.5%.",
                        "Thiết lập quy trình hợp tác với hơn 20+ KOC/KOL theo mô hình Booking."
                    ],
                    tags: ["Viral Content", "KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Copywriting",
                    company: "CÔNG TY TNHH MTV TM DV MADIAD",
                    description: "Chịu trách nhiệm lập kế hoạch, phát triển và quản lý nội dung đa kênh (bài PR, Website) và hỗ trợ tổ chức sự kiện kích hoạt thương hiệu trực tiếp.",
                    achievements: [
                        "Tăng trưởng tự nhiên: Thúc đẩy tăng 101,5% lượt tiếp cận (đạt mức 40.000) và 259% lượt truy cập trang (đạt mức 4.000) nhờ chiến lược tối ưu nội dung dài hạn mà không phụ thuộc vào ngân sách quảng cáo.",
                        "Biên tập & Kể chuyện thương hiệu: Định hình phong cách và chắp bút cho chuỗi nội dung "Chuyện người trẻ khởi nghiệp", ghi nhận mức lan tỏa tốt với 2.500+ lượt xem organic.",
                        "Đa nhiệm trong tổ chức sự kiện: Đóng vai trò cầu nối giữa mảng nội dung và sự kiện thực tế. Tham gia hỗ trợ vận hành và trực tiếp ghi hình/sản xuất tư liệu truyền thông cho sự kiện ra mắt sản phẩm với hơn 2.000 người tham dự."
                    ],
                    tags: ["Copywriting", "Event Activation", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "Chiến Dịch Tái Định Vị Thương Hiệu (Brand Relaunch)",
                    client: "EcoLife Living (Nội thất bền vững)",
                    image: "assets/images/gallery-1.jpg",
                    highlight: "+120% Nhận diện",
                    description: "Tái cấu trúc nhận diện số, thông điệp truyền thông 'Sống Xanh Tinh Tế' và kế hoạch ra mắt đa kênh trên Báo chí, Social Media kết hợp Minigame tương tác cao.",
                    results: [
                        "5.2M+ lượt tiếp cận trên các nền tảng mạng xã hội",
                        "Xuất hiện trên 12 đầu báo điện tử uy tín (VnExpress, Cafebiz, Tuổi Trẻ)",
                        "+40% lượng khách hàng mới trong quý đầu tiên"
                    ],
                    tags: ["Brand Identity", "PR & Press", "Social Launch", "Storytelling"]
                },
                {
                    id: 2,
                    category: "performance",
                    title: "Tối Ưu Phễu Quảng Cáo Tăng Trưởng (Scale Ads)",
                    client: "Aura Skincare (Dược mỹ phẩm)",
                    image: "assets/images/gallery-2.jpg",
                    highlight: "ROAS Đạt 4.8x",
                    description: "Thiết lập hệ thống chuyển đổi đa tầng: Tìm kiếm nhu cầu (Google PMax) -> Kích thích mong muốn (TikTok Ads & Reels) -> Chốt đơn & Bám đuổi (Meta Dynamic Retargeting).",
                    results: [
                        "Tăng tỷ lệ chuyển đổi website từ 1.8% lên 3.6%",
                        "Tiết kiệm 22% ngân sách quảng cáo không hiệu quả",
                        "Doanh thu tăng trưởng 220% sau 3 tháng"
                    ],
                    tags: ["Meta Ads", "Google PMax", "TikTok Shop", "A/B Testing"]
                },
                {
                    id: 3,
                    category: "content",
                    title: "Chiến Lược Content Inbound & SEO Tổng Thể",
                    client: "FinWise Education (Viện Đào tạo)",
                    image: "assets/images/gallery-3.jpg",
                    highlight: "+200K Visits/tháng",
                    description: "Xây dựng cụm chủ đề (Topic Clusters) với 150+ bài viết chuẩn SEO chuyên sâu kết hợp Ebook miễn phí làm Lead Magnet để thu thập dữ liệu khách hàng tiềm năng.",
                    results: [
                        "85+ từ khóa chiến lược lọt Top 3 Google Search",
                        "Thu thập 12.000+ leads chất lượng cao với chi phí 0đ qua Ebook",
                        "Tăng thời gian ở lại trang (Time on Site) lên 4 phút 15 giây"
                    ],
                    tags: ["SEO Strategy", "Inbound Marketing", "Lead Magnet", "Copywriting"]
                },
                {
                    id: 4,
                    category: "social",
                    title: "Chiến Dịch Viral TikTok & KOC Review Lan Tỏa",
                    client: "SnackTrend (Ngành hàng FMCG)",
                    image: "assets/images/gallery-4.jpg",
                    highlight: "18M+ Views TikTok",
                    description: "Tạo trào lưu âm thanh độc quyền (Branded Sound) và hợp tác với 50 Micro-KOCs tạo nội dung thử thách ăn vặt hài hước, kích thích người dùng tự sáng tạo nội dung (UGC).",
                    results: [
                        "Hơn 8.000 video UGC được người dùng sáng tạo",
                        "Sản phẩm 'Cháy hàng' trên kênh TikTok Shop trong 48 giờ",
                        "Chi phí trên mỗi lượt xem (CPV) siêu rẻ chỉ 8 VNĐ/view"
                    ],
                    tags: ["TikTok Challenge", "KOC Affiliate", "UGC Campaign", "Viral Video"]
                }
            ]
        },

        skills: {
            sectionBadge: "Kỹ năng chuyên môn",
            title: "Bộ công cụ & Năng lực tiếp thị cốt lõi",
            subtitle: "Sự kết hợp giữa tư duy chiến lược, công nghệ phân tích số liệu và sự sáng tạo không ngừng",
            categories: [
                {
                    name: "Digital Ads & Performance",
                    icon: "target",
                    skills: [
                        { name: "Meta Ads (Facebook & Instagram)", level: 95 },
                        { name: "Google Ads (Search, Display, PMax)", level: 90 },
                        { name: "TikTok Ads & TikTok Shop", level: 88 },
                        { name: "Re-marketing & Phễu chuyển đổi", level: 92 }
                    ]
                },
                {
                    name: "Content & Brand Strategy",
                    icon: "feather",
                    skills: [
                        { name: "Chiến lược nội dung đa kênh (Omnichannel)", level: 95 },
                        { name: "Copywriting & Storytelling", level: 92 },
                        { name: "SEO On-page / Topic Clusters", level: 85 },
                        { name: "KOL / KOC Booking & Influencer Relations", level: 90 }
                    ]
                },
                {
                    name: "Công cụ Phân tích & Thiết kế",
                    icon: "pie-chart",
                    skills: [
                        { name: "Google Analytics 4 (GA4) & GTM", level: 90 },
                        { name: "Looker Studio Dashboard & Data Analysis", level: 85 },
                        { name: "Canva, Photoshop & Visual Concept", level: 88 },
                        { name: "CapCut & Video Short-form Editing", level: 90 },
                        { name: "HubSpot CRM & Email Automation", level: 82 }
                    ]
                },
                {
                    name: "Kỹ năng mềm & Quản lý",
                    icon: "users",
                    skills: [
                        { name: "Hoạch định ngân sách & Dự báo KPI", level: 92 },
                        { name: "Quản lý dự án chiến dịch (Campaign Management)", level: 95 },
                        { name: "Tư duy phản biện & Giải quyết vấn đề", level: 90 },
                        { name: "Thuyết trình & Đàm phán đối tác", level: 88 }
                    ]
                }
            ]
        },

        education: {
            sectionBadge: "Học vấn & Bằng cấp",
            title: "Nền tảng học thuật & Chứng chỉ chuyên ngành",
            subtitle: "Liên tục trau dồi kiến thức chuẩn quốc tế để bắt kịp xu hướng thị trường",
            degreesTitle: "Quá trình học vấn",
            certificationsTitle: "Chứng chỉ chuyên nghiệp quốc tế",
            degrees: [
                {
                    degree: "Cử nhân Marketing / Quản trị Kinh doanh",
                    school: "Đại học Kinh tế Quốc dân (NEU)",
                    period: "2019 - 2023",
                    grade: "Tốt nghiệp loại Giỏi (GPA: 3.6/4.0)",
                    details: "Chuyên ngành Marketing số & Nghiên cứu hành vi người tiêu dùng. Giải Nhì Nghiên cứu khoa học sinh viên cấp Viện."
                }
            ],
            certifications: [
                {
                    name: "Google Ads Search & Measurement Certification",
                    issuer: "Google Skillshop",
                    year: "2024",
                    icon: "award",
                    code: "Verified Certificate"
                },
                {
                    name: "Meta Certified Digital Marketing Associate",
                    issuer: "Meta Blueprint",
                    year: "2024",
                    icon: "award",
                    code: "Credential ID: META-94812"
                },
                {
                    name: "HubSpot Inbound Marketing & Content Marketing",
                    issuer: "HubSpot Academy",
                    year: "2023",
                    icon: "award",
                    code: "Honors Graduate"
                },
                {
                    name: "Google Analytics 4 (GA4) Individual Qualification",
                    issuer: "Google Skillshop",
                    year: "2023",
                    icon: "award",
                    code: "Advanced Level"
                }
            ]
        },

        contact: {
            sectionBadge: "Kết nối ngay",
            title: "Cùng tạo nên những chiến dịch đột phá",
            subtitle: "Bạn đang có ý tưởng mới hoặc cần tìm một chuyên gia Marketing đồng hành? Hãy gửi tin nhắn cho tôi ngay hôm nay!",
            infoTitle: "Thông tin liên hệ",
            formTitle: "Gửi tin nhắn trực tiếp",
            labels: {
                fullName: "Họ và tên của bạn",
                email: "Địa chỉ Email",
                subject: "Chủ đề / Dịch vụ quan tâm",
                message: "Nội dung tin nhắn",
                sendBtn: "Gửi tin nhắn ngay",
                sending: "Đang gửi...",
                success: "Cảm ơn bạn! Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể!"
            },
            subjects: [
                "Tư vấn Chiến lược Marketing Tổng thể",
                "Quản lý & Tối ưu Quảng cáo (Performance Ads)",
                "Xây dựng Chiến dịch Nội dung & Viral TikTok",
                "Cơ hội Hợp tác / Tuyển dụng",
                "Khác"
            ]
        },

        footer: {
            rights: "Bảo lưu mọi quyền.",
            builtWith: "Thiết kế với đam mê & sáng tạo dành cho Portfolio chuyên nghiệp."
        }
    },

    // ENGLISH
    en: {
        nav: {
            home: "Home",
            about: "About Me",
            experiences: "Experiences & Work",
            skills: "Skills",
            education: "Education & Certs",
            contact: "Contact",
            downloadCv: "Download CV"
        },

        hero: {
            greeting: "Hello, I am",
            name: "Olwen Luu",
            typewriterPrefix: "I am a ",
            roles: [
                "Content & Brand Strategist",
                "Digital Marketing Specialist",
                "Growth & Campaign Manager",
                "Performance Ads"
            ],
            tagline: "Bridging creative storytelling and data-driven analytics to craft high-impact marketing campaigns and drive sustainable revenue growth.",
            ctaProjects: "Explore Campaigns",
            ctaContact: "Get in Touch",
            statusAvailable: "Available for new projects",
            experienceBadge: "3+ Years Experience",
            roasBadge: "Remote Job"
        },

        about: {
            sectionBadge: "About Me",
            title: "Passionate about creating value through every campaign",
            subtitle: "Connecting brand narratives with target audiences meaningfully",
            bioParagraph1: "Hi there! I am a <strong>Marketing Specialist</strong> with 3+ years of hands-on experience in omnichannel strategy, media planning, and digital conversion rate optimization.",
            bioParagraph2: "My core philosophy: <em>'Every creative concept must be anchored in data and validated by tangible business outcomes'</em>. I combine deep expertise across both <strong>Branding & Storytelling</strong> (building emotional resonance) and <strong>Performance Marketing</strong> (maximizing ROAS and CAC efficiency).",
            stats: [
                { value: "3+", label: "Years Experience", icon: "award" },
                { value: "50+", label: "Campaigns Executed", icon: "rocket" },
                { value: "350%", label: "Avg. ROAS Growth", icon: "trending-up" },
                { value: "15+", label: "Brands Partnered", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "Specialty", value: "Digital & Brand Marketing" },
                { label: "Location", value: "Hanoi / Remote" },
                { label: "Languages", value: "Vietnamese (Native), English (IELTS 7.0)" },
                { label: "Availability", value: "Open for Projects / Full-time" }
            ],
            galleryTitle: "Moments & Real-world Activities",
            gallerySubtitle: "Snapshots from events, workshops, and everyday creative work"
        },

        experiences: {
            sectionBadge: "Work Experiences",
            title: "Career Milestones & Proven Results",
            subtitle: "Key professional highlights and signature marketing campaigns successfully executed",
            timelineTitle: "Work History",
            projectsTitle: "Featured Campaigns & Case Studies",
            categories: {
                all: "All",
                performance: "Performance Ads",
                branding: "Branding & Launch",
                content: "Content & SEO",
                social: "Social & Viral"
            },
            timeline: [
                {
                    period: "2024 - Present",
                    role: "Senior Digital Marketing Specialist",
                    company: "V-Growth Media & Agency",
                    description: "Responsible for planning and executing multi-channel growth strategies for 10+ corporate clients. Managing monthly ad budgets exceeding $25,000.",
                    achievements: [
                        "Optimized full-funnel conversion rates, decreasing Customer Acquisition Cost (CAC) by 28%.",
                        "Built real-time automated dashboards (Looker Studio + GA4) to track campaign ROI instantly.",
                        "Mentored a team of 6 members covering Content, Media Production, and Paid Ads."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2022 - 2024",
                    role: "Content & Social Media Lead",
                    company: "Nova Brand Studio",
                    description: "Directed creative social media strategy, community growth across TikTok, Facebook, and long-term inbound content funnels for lifestyle and F&B brands.",
                    achievements: [
                        "Generated 15M+ organic impressions on TikTok through short-form viral storytelling.",
                        "Grew loyal brand following by +150% with an outstanding 8.5% engagement rate.",
                        "Streamlined influencer onboarding process for 100+ micro & macro creators."
                    ],
                    tags: ["TikTok Strategy", "Viral Content", "KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Marketing Executive",
                    company: "Alpha Retail Group",
                    description: "Assisted in seasonal promotional campaigns, social media management, email marketing automations, and on-ground brand activation events.",
                    achievements: [
                        "Contributed to a 35% YoY revenue surge during year-end Mega Sale via email and SMS automation.",
                        "Coordinated 5 offline product activation events engaging over 2,000 attendees."
                    ],
                    tags: ["Event Activation", "Email Marketing", "Copywriting", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "Brand Relaunch & New Product Debut Campaign",
                    client: "EcoLife Living (Sustainable Interior)",
                    image: "assets/images/gallery-1.jpg",
                    highlight: "+120% Awareness",
                    description: "Revamped digital brand identity, crafted the 'Mindful Sustainable Living' key message, and orchestrated a multi-channel launch across digital press and social interactive contests.",
                    results: [
                        "5.2M+ total impressions across social media platforms",
                        "Featured on 12 leading national press outlets",
                        "+40% new customer acquisition in the debut quarter"
                    ],
                    tags: ["Brand Identity", "PR & Press", "Social Launch", "Storytelling"]
                },
                {
                    id: 2,
                    category: "performance",
                    title: "High-Performance Ads Scale & Funnel Architecture",
                    client: "Aura Skincare (Cosmeceutical Brand)",
                    image: "assets/images/gallery-2.jpg",
                    highlight: "4.8x ROAS Achieved",
                    description: "Engineered a multi-tiered conversion funnel: Demand generation (Google PMax) -> Consideration (TikTok Ads & Reels) -> Dynamic Retargeting (Meta Ads).",
                    results: [
                        "Increased website conversion rate from 1.8% to 3.6%",
                        "Reduced ad spend waste by 22%",
                        "Boosted quarterly revenue by 220% within 3 months"
                    ],
                    tags: ["Meta Ads", "Google PMax", "TikTok Shop", "A/B Testing"]
                },
                {
                    id: 3,
                    category: "content",
                    title: "Comprehensive Inbound Content & SEO Domination",
                    client: "FinWise Education (Financial Academy)",
                    image: "assets/images/gallery-3.jpg",
                    highlight: "+200K Visits/mo",
                    description: "Constructed comprehensive topic clusters with 150+ in-depth SEO articles combined with premium free Ebooks as lead magnets.",
                    results: [
                        "85+ high-intent keywords secured Top 3 Google Search rankings",
                        "Captured 12,000+ qualified leads at zero ad cost via downloadable guides",
                        "Extended average user dwell time on site to 4m 15s"
                    ],
                    tags: ["SEO Strategy", "Inbound Marketing", "Lead Magnet", "Copywriting"]
                },
                {
                    id: 4,
                    category: "social",
                    title: "Viral TikTok Trend & KOC Review Campaign",
                    client: "SnackTrend (FMCG Snack Brand)",
                    image: "assets/images/gallery-4.jpg",
                    highlight: "18M+ Views",
                    description: "Created a branded custom audio track and mobilized 50 micro-creators in a comedic tasting challenge, sparking massive user-generated content (UGC).",
                    results: [
                        "Over 8,000 unique UGC videos submitted by organic users",
                        "Sold out product inventory on TikTok Shop within 48 hours",
                        "Ultra-efficient cost per view (CPV) under $0.0004"
                    ],
                    tags: ["TikTok Challenge", "KOC Affiliate", "UGC Campaign", "Viral Video"]
                }
            ]
        },

        skills: {
            sectionBadge: "Expertise & Skills",
            title: "Core Marketing Toolset & Capabilities",
            subtitle: "A balanced synergy of strategic planning, quantitative analytics, and relentless creativity",
            categories: [
                {
                    name: "Digital Ads & Performance",
                    icon: "target",
                    skills: [
                        { name: "Meta Ads (Facebook & Instagram)", level: 95 },
                        { name: "Google Ads (Search, Display, PMax)", level: 90 },
                        { name: "TikTok Ads & TikTok Shop", level: 88 },
                        { name: "Re-marketing & Conversion Funnel", level: 92 }
                    ]
                },
                {
                    name: "Content & Brand Strategy",
                    icon: "feather",
                    skills: [
                        { name: "Omnichannel Content Strategy", level: 95 },
                        { name: "Copywriting & Storytelling", level: 92 },
                        { name: "SEO On-page / Topic Clusters", level: 85 },
                        { name: "KOL / KOC Booking & Influencer Relations", level: 90 }
                    ]
                },
                {
                    name: "Analytics & Creative Tools",
                    icon: "pie-chart",
                    skills: [
                        { name: "Google Analytics 4 (GA4) & GTM", level: 90 },
                        { name: "Looker Studio Dashboard & Data Analysis", level: 85 },
                        { name: "Canva, Photoshop & Visual Concept", level: 88 },
                        { name: "CapCut & Short-form Video Editing", level: 90 },
                        { name: "HubSpot CRM & Email Automation", level: 82 }
                    ]
                },
                {
                    name: "Leadership & Management",
                    icon: "users",
                    skills: [
                        { name: "Budget Allocation & KPI Forecasting", level: 92 },
                        { name: "Campaign Management & Orchestration", level: 95 },
                        { name: "Critical Thinking & Problem Solving", level: 90 },
                        { name: "Pitching & Negotiation", level: 88 }
                    ]
                }
            ]
        },

        education: {
            sectionBadge: "Education & Credentials",
            title: "Academic Background & Professional Certifications",
            subtitle: "Continuously upgrading industry standards to stay ahead of marketing trends",
            degreesTitle: "Academic Degree",
            certificationsTitle: "Global Professional Certifications",
            degrees: [
                {
                    degree: "Bachelor of Business Administration / Marketing",
                    school: "National Economics University (NEU)",
                    period: "2019 - 2023",
                    grade: "Graduated with High Distinction (GPA: 3.6/4.0)",
                    details: "Specialized in Digital Marketing & Consumer Behavior Analysis. 2nd Prize in Student Scientific Research."
                }
            ],
            certifications: [
                {
                    name: "Google Ads Search & Measurement Certification",
                    issuer: "Google Skillshop",
                    year: "2024",
                    icon: "award",
                    code: "Verified Certificate"
                },
                {
                    name: "Meta Certified Digital Marketing Associate",
                    issuer: "Meta Blueprint",
                    year: "2024",
                    icon: "award",
                    code: "Credential ID: META-94812"
                },
                {
                    name: "HubSpot Inbound Marketing & Content Marketing",
                    issuer: "HubSpot Academy",
                    year: "2023",
                    icon: "award",
                    code: "Honors Graduate"
                },
                {
                    name: "Google Analytics 4 (GA4) Individual Qualification",
                    issuer: "Google Skillshop",
                    year: "2023",
                    icon: "award",
                    code: "Advanced Level"
                }
            ]
        },

        contact: {
            sectionBadge: "Get In Touch",
            title: "Let's Build Impactful Campaigns Together",
            subtitle: "Have a new vision or need a passionate marketing partner? Drop me a line anytime!",
            infoTitle: "Contact Information",
            formTitle: "Send Me a Message",
            labels: {
                fullName: "Your Full Name",
                email: "Email Address",
                subject: "Subject / Service Needed",
                message: "Your Message",
                sendBtn: "Send Message Now",
                sending: "Sending...",
                success: "Thank you! Your message has been sent successfully. I will get back to you shortly!"
            },
            subjects: [
                "Full Marketing Strategy Consultation",
                "Performance Ads & Funnel Optimization",
                "Content Marketing & Viral TikTok Campaign",
                "Partnership / Job Opportunity",
                "Other"
            ]
        },

        footer: {
            rights: "All rights reserved.",
            builtWith: "Designed with passion & creativity for modern personal branding."
        }
    },

    // Gallery images mapping
    gallery: [
        { src: "assets/images/gallery-1.jpg", captionVi: "Hoạt động workshop sáng tạo & lập kế hoạch", captionEn: "Creative workshop & strategy session" },
        { src: "assets/images/gallery-2.jpg", captionVi: "Sự kiện kích hoạt thương hiệu thực tế", captionEn: "Brand activation event" },
        { src: "assets/images/gallery-3.jpg", captionVi: "Buổi ghi hình & sản xuất nội dung media", captionEn: "Media production & photoshoot" },
        { src: "assets/images/gallery-4.jpg", captionVi: "Gặp gỡ đối tác chiến lược & khách hàng", captionEn: "Strategic partner & client meeting" },
        { src: "assets/images/gallery-5.jpg", captionVi: "Thuyết trình kế hoạch chiến dịch đa kênh", captionEn: "Omnichannel campaign pitch" },
        { src: "assets/images/gallery-6.jpg", captionVi: "Hoạt động gắn kết & văn hóa làm việc nhóm", captionEn: "Team culture & outdoor activity" }
    ]
};
