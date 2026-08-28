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
        avatarUrl: "assets/images/avatar.png", // Đường dẫn ảnh đại diện (file .png, .jpg hoặc link online)
        email: "olwenluu@gmail.com",
        phone: "+84 908 613 416",
        location: {
            vi: "Việt Nam",
            en: "Vietnam"
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/yen-luu/",
            facebook: "https://www.facebook.com/yenluu1303/",
            tiktok: "https://www.tiktok.com/@betoyen",
            email: "mailto:olwenluu@gmail.com"
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
                "Integrated Marketing & Content Specialist"
            ],
            tagline: "Kết hợp tư duy Sáng tạo Nghệ thuật và Phân tích Số liệu (Data-driven) để kiến tạo các giá trị, góp phần thúc đẩy tăng trưởng doanh thu bền vững.",
            ctaProjects: "Xem Dự Án",
            ctaContact: "Liên Hệ Ngay",
            statusAvailable: "Sẵn sàng nhận dự án mới",
            experienceBadge: "3+ Năm Kinh Nghiệm",
            roasBadge: "Remote Job"
        },

        about: {
            sectionBadge: "Về bản thân",
            title: "Kiến tạo giá trị thông qua Truyền thông Tích hợp & Kể chuyện Thương hiệu",
            subtitle: "Hành trình kết nối cảm xúc thương hiệu với khách hàng mục tiêu",
            bioParagraph1: "Chào bạn! Tôi là một Integrated Marketing & Content Specialist <strong>Marketing</strong> với hơn 3+ năm kinh nghiệm thực chiến trong việc hoạch định chiến lược nội dung, triển khai chiến dịch truyền thông đa nền tảng và thúc đẩy tăng trưởng tự nhiên (Organic Growth). Với khả năng bao quát từ khâu lên kịch bản, sản xuất visual đến vận hành hậu cần, tôi chuyên chuyển hóa thông điệp thương hiệu thành những sản phẩm truyền thông giàu tính kết nối và tối ưu điểm chạm khách hàng.",
            bioParagraph2: "Triết lý làm việc của tôi: <em>'Mọi ý tưởng sáng tạo phải được neo giữ bởi dữ liệu thực tế và đo lường bằng kết quả kinh doanh'</em>. Tôi có thế mạnh đồng thời ở cả hai mảng: <strong>Branding & Storytelling</strong> (xây dựng câu chuyện thương hiệu truyền cảm hứng) và <strong>Content Operations & Performance</strong> (tối ưu hóa quy trình sản xuất đa phương tiện).",
            stats: [
                { value: "3+", label: "Năm kinh nghiệm", icon: "award" },
                { value: "50+", label: "Chiến dịch thực thi", icon: "rocket" },
                { value: "350%", label: "Tăng trưởng ROAS TB", icon: "trending-up" },
                { value: "10+", label: "Thương hiệu đồng hành", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "Chuyên môn", value: "Marketing" },
                { label: "Nơi làm việc", value: "Việt Nam / Remote" },
                { label: "Ngôn ngữ", value: "Tiếng Việt, Tiếng Anh" },
                { label: "Tình trạng", value: "Sẵn sàng hợp tác / Remote" }
            ],
            galleryTitle: "Những khoảnh khắc & Hoạt động thực tế",
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
                    period: "Hiện tại",
                    role: "Deputy Director of Marketing",
                    company: "CÔNG TY TNHH THÀNH NHÂN EDUCATION",
                    description: "Hoạch định và xây dựng các chiến dịch Marketing.",
                    achievements: [
                        "Chiến dịch Truyền thông: Chuỗi nội dung 100% Điểm tin Điểm trường, tiếp cận hiệu quả học sinh mục tiêu mùa cao điểm thi THPT Quốc gia.",
                        "Tăng trưởng Tiếp cận: Đạt mức tăng trưởng tự nhiên đột phá với 364,3K lượt xem (+500,3%), 126,2K người xem (+572,9%) và 8,5K lượt truy cập (+434,9%).",
                        "Tối ưu Tương tác: Tối ưu hóa nội dung giúp tăng 788,8% lượt tương tác (1,6K) và 2.700% lượt theo dõi mới (450 followers) mà không cần chạy quảng cáo."
                    ],
                    tags: ["OrganicGrowth", "SocialMediaStrategy", "VisualCommunication"]
                },
                {
                    period: "2023 - 2026",
                    role: "Marketing Executive",
                    company: "CÔNG TY TNHH NHÀ HÀNG KHÁCH SẠN VÀ DU LỊCH Hải Âu Cần Thơ",
                    description: "Chịu trách nhiệm hoạch định và điều phối chiến lược tiếp thị đa kênh cho 3 thương hiệu trực thuộc Công ty.",
                    achievements: [
                        "Sản xuất nội dung & Tối ưu hóa phễu chuyển đổi: giúp tăng 100% lượt tương tác.",
                        "Lập kế hoạch và sáng tạo ấn phẩm đa phương tiện (Copywriting, thiết kế qua Canva/AI/PTS, dựng video bằng CapCut Pro).",
                        "Tìm kiếm đối tác & Nâng tầm thương hiệu: mở rộng các cơ hội hợp tác chiến lược, đưa hình ảnh thương hiệu xuất hiện tại các sự kiện và hội chợ để gia tăng tối đa độ phủ sóng."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2023",
                    role: "Content & Social Media Lead",
                    company: "CÔNG TY CỔ PHẦN DV TM IVY",
                    description: "Định hướng nội dung sáng tạo, xây dựng cộng đồng trên Facebook và chiến lược Inbound Marketing dài hạn cho các thương hiệu F&B.",
                    achievements: [
                        "Chiến lược Inbound Marketing dài hạn: Hoạch định và triển khai hệ sinh thái nội dung đa kênh cho các mô hình F&B, thành công thu hút tệp khách hàng tiềm năng tự nhiên và tối ưu 15-20% chi phí chuyển đổi.",
                        "Tối ưu hóa KPIs & Hiệu suất: Thiết lập hệ thống đo lường dữ liệu chiến dịch định kỳ, chủ động đưa ra các cải tiến nội dung kịp thời, duy trì tỷ lệ đạt KPIs trung bình 90-100% qua các đợt kích hoạt thương hiệu.",
                        "Thiết lập quy trình hợp tác với hơn 20+ KOC/KOL theo mô hình Booking.",
                        "Dẫn dắt đội ngũ 5 thành viên phụ trách Content, Media và Ads."
                    ],
                    tags: ["Viral Content", "KOC/KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Copywriting",
                    company: "CÔNG TY TNHH MTV TM DV MADIAD",
                    description: "Chịu trách nhiệm lập kế hoạch, phát triển và quản lý nội dung đa kênh (bài PR, Website) và hỗ trợ tổ chức sự kiện kích hoạt thương hiệu trực tiếp.",
                    achievements: [
                        "Tăng trưởng tự nhiên: Thúc đẩy tăng 101,5% lượt tiếp cận (đạt mức 40.000) và 259% lượt truy cập trang (đạt mức 4.000) nhờ chiến lược tối ưu nội dung dài hạn mà không phụ thuộc vào ngân sách quảng cáo.",
                        "Biên tập & Kể chuyện thương hiệu: Định hình phong cách và chắp bút cho chuỗi nội dung 'Chuyện người trẻ khởi nghiệp', ghi nhận mức lan tỏa tốt với 2.500+ lượt xem organic.",
                        "Đa nhiệm trong tổ chức sự kiện: Đóng vai trò cầu nối giữa mảng nội dung và sự kiện thực tế. Tham gia hỗ trợ vận hành và trực tiếp ghi hình/sản xuất tư liệu truyền thông cho sự kiện ra mắt sản phẩm với hơn 2.000 người tham dự."
                    ],
                    tags: ["Copywriting", "Event Activation", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "On The Map",
                    client: "Dự án cộng đồng & Phát triển bền vững",
                    image: "assets/images/project-1.jpg",
                    highlight: "+120% Nhận diện",
                    description: "Truyền tải thông điệp truyền thông 'Phát triển bền vững', Social Media kết hợp Dự án cộng đồng.",
                    results: [
                        "Hơn 51.000 lượt tiếp cận và 63.000 lượt hiển thị trên fanpage",
                        "798+ lượt tương tác toàn diện, thúc đẩy hiệu quả mức độ quan tâm bài viết và đăng ký sự kiện",
                        "Tối ưu hóa ngân sách tiếp thị với CPM tiết kiệm (~7.300 VNĐ) và tỷ lệ CTR nội dung đạt mức cao 3.67%"
                    ],
                    tags: ["Brand Identity", "PR & Press", "Social Launch", "Storytelling"]
                },
                {
                    id: 2,
                    category: "content",
                    title: "Hải Âu Bay",
                    image: "assets/images/project-2.jpg",
                    highlight: "+28K lượt xem trong 3 tuần",
                    description: "Xây dựng cụm chủ đề (Topic Clusters) với chuỗi nội dung chuyên sâu về văn hóa.",
                    results: [
                        "28.000+ lượt xem và 400+ subscribers mới trên YouTube với chi phí quảng cáo tối ưu.",
                        "Làm chủ quy trình sản xuất nội dung YouTube (kịch bản, thu âm, đánh giá hiệu suất).",
                        "Tăng thời gian ở lại trang (Time on Site) lên 4 phút 15 giây"
                    ],
                    tags: ["Digital Storytelling", "Content Production", "Inbound Marketing"]
                },
                {
                    id: 3,
                    category: "social",
                    title: "Chiến Dịch Viral TikTok",
                    client: "Thành Nhân Education",
                    image: "assets/images/project-3.jpg",
                    highlight: "192K+ Views TikTok",
                    description: "Lập chiến dịch tiếp cận khách hàng mục tiêu trong thời gian cao điểm (thi tốt nghiệp THPTQG) với chuỗi Series Điểm tin - Điểm trường hoàn toàn Organic.",
                    results: [
                        "Viết kịch bản cho chiến dịch truyền thông ngắn hạn với 50+ video TikTok.",
                        "Sở hữu video đạt 192.000+ lượt xem tự nhiên (Organic Views) hoàn toàn không tốn chi phí Ads.",
                        "100% tổng số video trong chiến dịch phá vỡ cột mốc 1.000+ views."
                    ],
                    tags: ["Short-Form Content", "TikTok Strategy", "Creative Direction", "Viral Video"]
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
                        { name: "Meta Ads (Facebook)", level: 95 },
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
                        { name: "Canva, Photoshop & Visual Concept", level: 90 },
                        { name: "CapCut & Video Short-form Editing", level: 88 },
                    ]
                },
                {
                    name: "Kỹ năng mềm & Quản lý",
                    icon: "users",
                    skills: [
                        { name: "Hoạch định ngân sách & Dự báo KPI", level: 92 },
                        { name: "Quản lý dự án chiến dịch (Campaign Management)", level: 95 },
                        { name: "Tư duy phản biện & Giải quyết vấn đề", level: 85 },
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
                    degree: "Cử nhân Kinh doanh quốc tế",
                    school: "Đại học Cần Thơ (CTU)",
                    period: "2018 - 2022",
                    details: "Đạt thành tích nổi bật tại cuộc thi Starship - Star Awards năm 2020."
                }
            ],
            certifications: [
                {
                    name: "Performance Creative Certification",
                    issuer: "GIGAN JSC",
                    year: "2025",
                    icon: "award",
                    code: "Verified Certificate"
                },
                {
                    name: "Illustrator Graphics Basic to Intermediate",
                    issuer: "Keyframe Multimedia School",
                    year: "2023",
                    icon: "award",
                    code: "Verified Certificate"
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
            name: "Yen Luu",
            typewriterPrefix: "I am an ",
            roles: [
                "Integrated Marketing & Content Specialist"
            ],
            tagline: "Bridging creative storytelling with data-driven analytics to craft high-impact marketing initiatives and drive sustainable revenue growth.",
            ctaProjects: "View Projects",
            ctaContact: "Get in Touch",
            statusAvailable: "Available for New Opportunities",
            experienceBadge: "3+ Years Experience",
            roasBadge: "Remote / Global"
        },

        about: {
            sectionBadge: "About Me",
            title: "Driving Value via Integrated Communications & Strategic Brand Storytelling",
            subtitle: "Connecting brand narratives with target consumer touchpoints seamlessly",
            bioParagraph1: "Hi there! I am an <strong>Integrated Marketing & Content Specialist</strong> with 3+ years of hands-on experience in content strategy, multi-platform campaign execution, and organic growth acceleration. Spanning creative copywriting, visual production, and event logistics, I specialize in transforming brand messages into high-converting, resonant media assets that optimize customer touchpoints.",
            bioParagraph2: "My core philosophy: <em>'Every creative concept must be anchored in empirical data and validated by measurable business results'</em>. I excel at bridging <strong>Branding & Storytelling</strong> (building emotional brand equity) with <strong>Content Operations & Performance</strong> (streamlining multimedia production workflows).",
            stats: [
                { value: "3+", label: "Years Experience", icon: "award" },
                { value: "50+", label: "Campaigns Executed", icon: "rocket" },
                { value: "350%", label: "Avg. ROAS Growth", icon: "trending-up" },
                { value: "10+", label: "Brands Partnered", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "Expertise", value: "Integrated Marketing & Content" },
                { label: "Location", value: "Vietnam / Remote Worldwide" },
                { label: "Languages", value: "Vietnamese (Native), English" },
                { label: "Availability", value: "Open for Projects / Remote" }
            ],
            galleryTitle: "Key Moments & Practical Engagements",
            gallerySubtitle: "Snapshots from creative workshops, strategic campaigns, and on-ground brand activations"
        },

        experiences: {
            sectionBadge: "Work Experience",
            title: "Professional Milestones & Proven Track Record",
            subtitle: "Key career accomplishments and signature marketing campaigns directly executed",
            timelineTitle: "Career History",
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
                    period: "Present",
                    role: "Deputy Director of Marketing",
                    company: "THANH NHAN EDUCATION CO., LTD.",
                    description: "Lead overarching marketing strategy, brand positioning, and multi-channel campaign architectures.",
                    achievements: [
                        "Spearheaded a 100% organic content series ('Campus & Exam Bulletin'), effectively engaging target high school students during the peak National Exam season.",
                        "Drove exponential organic reach, achieving 364.3K video views (+500.3%), 126.2K unique viewers (+572.9%), and 8.5K profile visits (+434.9%).",
                        "Optimized creative content to surge user engagement by +788.8% (1.6K interactions) and accelerated organic follower acquisition by +2,700% (450+ new followers) with zero ad spend."
                    ],
                    tags: ["OrganicGrowth", "SocialMediaStrategy", "VisualCommunication"]
                },
                {
                    period: "2023 - 2026",
                    role: "Marketing Executive",
                    company: "HAI AU CAN THO RESTAURANT, HOTEL & TOURISM CO., LTD.",
                    description: "Formulated and orchestrated omnichannel marketing and promotional strategies across 3 corporate subsidiary brands.",
                    achievements: [
                        "Engineered full-funnel content and conversion architectures, delivering a +100% surge in social media engagement.",
                        "Directed end-to-end multimedia asset creation (strategic copywriting, graphic design via Canva/AI/Photoshop, and video editing via CapCut Pro).",
                        "Cultivated strategic B2B partnerships and amplified brand presence across major industry expos, trade fairs, and regional networking events."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2023",
                    role: "Content & Social Media Lead",
                    company: "IVY COMMERCIAL SERVICES JSC",
                    description: "Directed creative content development, community building on Facebook, and sustainable inbound marketing funnels for F&B brands.",
                    achievements: [
                        "Devised a long-term Inbound Marketing ecosystem across F&B business units, capturing high-intent organic leads and slashing Customer Acquisition Cost (CAC) by 15–20%.",
                        "Instituted rigorous KPI tracking frameworks and agile content iterations, consistently achieving a 90–100% KPI fulfillment rate across brand activation campaigns.",
                        "Streamlined influencer onboarding and managed relationships with 20+ relevant KOCs/KOLs under performance-driven booking models.",
                        "Supervised and mentored a 5-member cross-functional team across Content Writing, Media Production, and Digital Ads."
                    ],
                    tags: ["Viral Content", "KOC/KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Copywriter & Marketing Support",
                    company: "MADIAD TRADING & SERVICE CO., LTD.",
                    description: "Planned, developed, and managed multi-channel content assets (PR articles, website copy) while supporting offline brand activation events.",
                    achievements: [
                        "Ignited organic brand visibility, generating a +101.5% surge in total reach (40,000+) and a +259% increase in page visits (4,000+) via organic content optimization without ad spend.",
                        "Penned and shaped the signature storytelling series 'Young Entrepreneurs' Stories', generating 2,500+ organic impressions and high engagement.",
                        "Bridged content strategy with live events; coordinated on-ground operations and captured media assets for a flagship product launch engaging 2,000+ attendees."
                    ],
                    tags: ["Copywriting", "Event Activation", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "On The Map",
                    client: "Community Initiative & Sustainable Development",
                    image: "assets/images/project-1.jpg",
                    highlight: "+120% Brand Awareness",
                    description: "Communicating the 'Sustainable Development' core message by integrating Social Media storytelling with grassroots community initiatives.",
                    results: [
                        "Generated 51,000+ Reach and 63,000+ Impressions on Fanpage",
                        "Captured 798+ total engagements, driving heightened article interest and event registrations",
                        "Optimized marketing budget with efficient CPM (~7,300 VND) and achieved a top-tier 3.67% content CTR"
                    ],
                    tags: ["Brand Identity", "PR & Press", "Social Launch", "Storytelling"]
                },
                {
                    id: 2,
                    category: "content",
                    title: "Hai Au Bay",
                    image: "assets/images/project-2.jpg",
                    highlight: "+28K Views in 3 Weeks",
                    description: "Constructed comprehensive topic clusters and cultural storytelling video content to establish thought leadership and attract organic audiences.",
                    results: [
                        "Garnered 28,000+ organic views and gained 400+ new YouTube subscribers with highly optimized spend.",
                        "Mastered the full-cycle YouTube production workflow (scriptwriting, voiceover recording, and performance analytics).",
                        "Elevated average on-site dwell time (Time on Site) to 4 minutes 15 seconds."
                    ],
                    tags: ["Digital Storytelling", "Content Production", "Inbound Marketing"]
                },
                {
                    id: 3,
                    category: "social",
                    title: "Viral TikTok Campaign",
                    client: "Thanh Nhan Education",
                    image: "assets/images/project-3.jpg",
                    highlight: "192K+ TikTok Views",
                    description: "Rolled out a dedicated School News Update content series, effectively reaching target students during the peak National High School Graduation Exam season..",
                    results: [
                        "Scripted and directed a high-velocity sprint of 50+ TikTok video assets.",
                        "Produced a flagship breakout video achieving 192,000+ 100% organic views with $0 ad budget.",
                        "100% of campaign videos exceeded the 1,000+ views milestone."
                    ],
                    tags: ["Short-Form Content", "TikTok Strategy", "Creative Direction", "Viral Video"]
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
                        { name: "Meta Ads (Facebook)", level: 95 },
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
                        { name: "Canva, Photoshop & Visual Concept", level: 90 },
                        { name: "CapCut & Video Short-form Editing", level: 88 }
                    ]
                },
                {
                    name: "Leadership & Management",
                    icon: "users",
                    skills: [
                        { name: "Budget Allocation & KPI Forecasting", level: 92 },
                        { name: "Campaign Management & Orchestration", level: 95 },
                        { name: "Critical Thinking & Problem Solving", level: 85 },
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
            certificationsTitle: "Professional Certifications",
            degrees: [
                {
                    degree: "Bachelor of International Business",
                    school: "Can Tho University (CTU)",
                    period: "2018 - 2022",
                    details: "Achieved outstanding distinction at the Starship - Star Awards 2020."
                }
            ],
            certifications: [
                {
                    name: "Performance Creative Certification",
                    issuer: "GIGAN JSC",
                    year: "2025",
                    icon: "award",
                    code: "Verified Certificate"
                },
                {
                    name: "Illustrator Graphics Basic to Intermediate",
                    issuer: "Keyframe Multimedia School",
                    year: "2023",
                    icon: "award",
                    code: "Verified Certificate"
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

    // Gallery images mapping (4 moments)
    gallery: [
        { src: "assets/images/gallery-1.jpg" },
        { src: "assets/images/gallery-2.jpg" },
        { src: "assets/images/gallery-3.jpg" },
        { src: "assets/images/gallery-4.jpg" }
    ]
};
