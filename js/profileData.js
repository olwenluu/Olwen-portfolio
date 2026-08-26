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
            vi: "Cần Thơ / TP. Cần Thơ, Việt Nam",
            en: "CanTho / Can Tho City, Vietnam"
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/yen-luu/",
            facebook: "https://www.facebook.com/yenluu1303/",
            instagram: "https://www.instagram.com/py03/",
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
                "Content & Brand Strategist",
                "Digital Marketing Strategist",
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
            title: "Đam mê kiến tạo giá trị qua từng chiến dịch",
            subtitle: "Hành trình kết nối cảm xúc thương hiệu với khách hàng mục tiêu",
            bioParagraph1: "Chào bạn! Tôi là một chuyên viên <strong>Marketing</strong> với hơn 3+ năm kinh nghiệm thực chiến trong việc hoạch định chiến lược, triển khai chiến dịch truyền thông đa kênh (Omnichannel) và tối ưu hóa hiệu suất chuyển đổi số.",
            bioParagraph2: "Triết lý làm việc của tôi: <em>'Mọi ý tưởng sáng tạo phải được neo giữ bởi dữ liệu thực tế và đo lường bằng kết quả kinh doanh'</em>. Tôi có thế mạnh đồng thời ở cả hai mảng: <strong>Branding & Storytelling</strong> (kể câu chuyện thương hiệu chạm đến trái tim) và <strong>Performance Marketing</strong> (quản lý ngân sách quảng cáo tối ưu ROI/ROAS).",
            stats: [
                { value: "3+", label: "Năm kinh nghiệm", icon: "award" },
                { value: "50+", label: "Chiến dịch thực thi", icon: "rocket" },
                { value: "350%", label: "Tăng trưởng ROAS TB", icon: "trending-up" },
                { value: "15+", label: "Thương hiệu đồng hành", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "Chuyên môn", value: "Marketing" },
                { label: "Nơi làm việc", value: "Cần Thơ / Remote" },
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
                        "Chiến dịch Truyền thông: Triển khai chuỗi nội dung 100% Organic Điểm tin - Điểm trường, tiếp cận hiệu quả học sinh mục tiêu mùa cao điểm thi THPT Quốc gia.",
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
                    image: "assets/images/gallery-1.jpg",
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
                    title: "Hải Âu Bay",
                    image: "assets/images/gallery-3.jpg",
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
                    id: 4,
                    category: "social",
                    title: "Chiến Dịch Viral TikTok",
                    client: "Thành Nhân Education",
                    image: "assets/images/gallery-4.jpg",
                    highlight: "192K+ Views TikTok",
                    description: "Tạo trào lưu âm thanh độc quyền (Branded Sound) và hợp tác với 50 Micro-KOCs tạo nội dung thử thách ăn vặt hài hước, kích thích người dùng tự sáng tạo nội dung (UGC).",
                    results: [
                        "Sản xuất kịch bản cho chiến dịch truyền thông ngắn hạn với 50+ video TikTok.",
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
            name: "Olwen Luu",
            typewriterPrefix: "I am a ",
            roles: [
                "Content & Brand Strategist",
                "Digital Marketing Strategist",
                "Growth & Campaign Specialist",
                "Performance Ads"
            ],
            tagline: "Bridging creative storytelling and data-driven analytics to craft high-impact marketing campaigns and drive sustainable revenue growth.",
            ctaProjects: "Explore Campaigns",
            ctaContact: "Get in Touch",
            statusAvailable: "Available for new projects",
            experienceBadge: "3+ Years Experience",
            roasBadge: "350% ROAS Growth"
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
                    period: "2023 - Present",
                    role: "Marketing Executive",
                    company: "Hai Au Can Tho Restaurant, Hotel & Tourism Co., Ltd.",
                    description: "Responsible for planning and executing omnichannel marketing strategies for 3 corporate member brands.",
                    achievements: [
                        "Content production & conversion funnel optimization: Achieved a +100% boost in user engagement.",
                        "Multimedia asset planning & creation (Copywriting, graphic design via Canva/AI/PTS, video editing with CapCut Pro).",
                        "Partnership development & brand elevation: Expanded strategic partnerships, showcasing brands at events and trade fairs to maximize reach."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2023",
                    role: "Content & Social Media Lead",
                    company: "IVY Commercial Services JSC",
                    description: "Directed creative content, community growth on Facebook, and long-term Inbound Marketing strategies for F&B brands.",
                    achievements: [
                        "Long-term Inbound Strategy: Built and executed omnichannel content ecosystems for F&B models, attracting organic leads and optimizing CAC by 15-20%.",
                        "KPI & Performance Optimization: Established periodic campaign analytics dashboards, continuously improving content to maintain 90-100% KPI achievement rate.",
                        "Built influencer collaboration workflows with 20+ KOC/KOL creators under Booking models.",
                        "Led a team of 5 members covering Content, Media, and Ads."
                    ],
                    tags: ["Viral Content", "KOC/KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Copywriter & Marketing Support",
                    company: "MADIAD Trading & Service Co., Ltd.",
                    description: "Planned, developed, and managed multi-channel content (PR articles, Website) and supported offline brand activations.",
                    achievements: [
                        "Organic Growth: Accelerated reach by +101.5% (40,000+ reach) and page visits by +259% (4,000+ visits) via long-term content strategy without relying on ad budget.",
                        "Brand Storytelling: Penned the 'Young Entrepreneurs' Stories' series, achieving 2,500+ organic views and strong engagement.",
                        "Event Operations: Bridged content strategy with live events; supported filming and media production for product launches with 2,000+ attendees."
                    ],
                    tags: ["Copywriting", "Event Activation", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "On The Map",
                    client: "Community Project & Sustainable Development",
                    image: "assets/images/gallery-1.jpg",
                    highlight: "+120% Awareness",
                    description: "Communicating the 'Sustainable Development' core message via Social Media integrated with Community Initiatives.",
                    results: [
                        "51,000+ Reach and 63,000+ Impressions on Fanpage",
                        "798+ total engagements, driving interest and event registrations",
                        "Optimized marketing budget with efficient CPM (~7,300 VND) and a high 3.67% content CTR"
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
