/**
 * AUTO-FALLBACK EMBEDDED DATA
 * Ensures the website runs 100% reliably even if profileData.js has external loading issues
 */
if (typeof profileData === 'undefined' || !profileData || !profileData.vi || !profileData.vi.experiences) {
/**
 * PORTFOLIO DATA CONFIGURATION (Song ngá»¯: Tiáº¿ng Viá»‡t & English)
 * -------------------------------------------------------------
 * Báº¡n cÃ³ thá»ƒ dá»… dÃ ng thay Ä‘á»•i báº¥t ká»³ thÃ´ng tin nÃ o trong file nÃ y!
 * ToÃ n bá»™ website sáº½ tá»± Ä‘á»™ng cáº­p nháº­t theo dá»¯ liá»‡u táº¡i Ä‘Ã¢y.
 */

const profileData = {
    // Cáº¥u hÃ¬nh chung / General configuration
    config: {
        defaultLang: "vi", // "vi" hoáº·c "en"
        defaultTheme: "light", // "dark" hoáº·c "light"
        avatarUrl: "assets/images/avatar.png", // ÄÆ°á»ng dáº«n áº£nh Ä‘áº¡i diá»‡n (file .png, .jpg hoáº·c link online)
        email: "olwenluu@gmail.com",
        phone: "+84 908 613 416",
        location: {
            vi: "Viá»‡t Nam",
            en: "Vietnam"
        },
        socials: {
            linkedin: "https://www.linkedin.com/in/yen-luu/",
            facebook: "https://www.facebook.com/yenluu1303/",
            tiktok: "https://www.tiktok.com/@betoyen",
            email: "mailto:olwenluu@gmail.com"
        },
        cvUrl: "#contact" // ÄÆ°á»ng dáº«n táº£i CV (file PDF hoáº·c link Google Drive)
    },

    // TIáº¾NG VIá»†T
    vi: {
        nav: {
            home: "Trang chá»§",
            about: "Giá»›i thiá»‡u",
            experiences: "Kinh nghiá»‡m & Dá»± Ã¡n",
            skills: "Ká»¹ nÄƒng",
            education: "Há»c váº¥n & Chá»©ng chá»‰",
            contact: "LiÃªn há»‡",
            downloadCv: "Táº£i CV"
        },

        hero: {
            greeting: "Xin chÃ o, tÃ´i lÃ ",
            name: "Yáº¿n LÆ°u",
            typewriterPrefix: "TÃ´i lÃ  ",
            roles: [
                "Integrated Marketing & Content Specialist"
            ],
            tagline: "Káº¿t há»£p tÆ° duy SÃ¡ng táº¡o Nghá»‡ thuáº­t vÃ  PhÃ¢n tÃ­ch Sá»‘ liá»‡u (Data-driven) Ä‘á»ƒ kiáº¿n táº¡o cÃ¡c giÃ¡ trá»‹, gÃ³p pháº§n thÃºc Ä‘áº©y tÄƒng trÆ°á»Ÿng doanh thu bá»n vá»¯ng.",
            ctaProjects: "Xem Dá»± Ãn",
            ctaContact: "LiÃªn Há»‡ Ngay",
            statusAvailable: "Sáºµn sÃ ng nháº­n dá»± Ã¡n má»›i",
            experienceBadge: "3+ NÄƒm Kinh Nghiá»‡m",
            roasBadge: "Remote Job"
        },

        about: {
            sectionBadge: "Vá» báº£n thÃ¢n",
            title: "Kiáº¿n táº¡o giÃ¡ trá»‹ thÃ´ng qua Truyá»n thÃ´ng TÃ­ch há»£p & Ká»ƒ chuyá»‡n ThÆ°Æ¡ng hiá»‡u",
            subtitle: "HÃ nh trÃ¬nh káº¿t ná»‘i cáº£m xÃºc thÆ°Æ¡ng hiá»‡u vá»›i khÃ¡ch hÃ ng má»¥c tiÃªu",
            bioParagraph1: "ChÃ o báº¡n! TÃ´i lÃ  má»™t Integrated Marketing & Content Specialist <strong>Marketing</strong> vá»›i hÆ¡n 3+ nÄƒm kinh nghiá»‡m thá»±c chiáº¿n trong viá»‡c hoáº¡ch Ä‘á»‹nh chiáº¿n lÆ°á»£c ná»™i dung, triá»ƒn khai chiáº¿n dá»‹ch truyá»n thÃ´ng Ä‘a ná»n táº£ng vÃ  thÃºc Ä‘áº©y tÄƒng trÆ°á»Ÿng tá»± nhiÃªn (Organic Growth). Vá»›i kháº£ nÄƒng bao quÃ¡t tá»« khÃ¢u lÃªn ká»‹ch báº£n, sáº£n xuáº¥t visual Ä‘áº¿n váº­n hÃ nh háº­u cáº§n, tÃ´i chuyÃªn chuyá»ƒn hÃ³a thÃ´ng Ä‘iá»‡p thÆ°Æ¡ng hiá»‡u thÃ nh nhá»¯ng sáº£n pháº©m truyá»n thÃ´ng giÃ u tÃ­nh káº¿t ná»‘i vÃ  tá»‘i Æ°u Ä‘iá»ƒm cháº¡m khÃ¡ch hÃ ng.",
            bioParagraph2: "Triáº¿t lÃ½ lÃ m viá»‡c cá»§a tÃ´i: <em>'Má»i Ã½ tÆ°á»Ÿng sÃ¡ng táº¡o pháº£i Ä‘Æ°á»£c neo giá»¯ bá»Ÿi dá»¯ liá»‡u thá»±c táº¿ vÃ  Ä‘o lÆ°á»ng báº±ng káº¿t quáº£ kinh doanh'</em>. TÃ´i cÃ³ tháº¿ máº¡nh Ä‘á»“ng thá»i á»Ÿ cáº£ hai máº£ng: <strong>Branding & Storytelling</strong> (xÃ¢y dá»±ng cÃ¢u chuyá»‡n thÆ°Æ¡ng hiá»‡u truyá»n cáº£m há»©ng) vÃ  <strong>Content Operations & Performance</strong> (tá»‘i Æ°u hÃ³a quy trÃ¬nh sáº£n xuáº¥t Ä‘a phÆ°Æ¡ng tiá»‡n).",
            stats: [
                { value: "3+", label: "NÄƒm kinh nghiá»‡m", icon: "award" },
                { value: "50+", label: "Chiáº¿n dá»‹ch thá»±c thi", icon: "rocket" },
                { value: "350%", label: "TÄƒng trÆ°á»Ÿng ROAS TB", icon: "trending-up" },
                { value: "10+", label: "ThÆ°Æ¡ng hiá»‡u Ä‘á»“ng hÃ nh", icon: "briefcase" }
            ],
            quickInfo: [
                { label: "ChuyÃªn mÃ´n", value: "Marketing" },
                { label: "NÆ¡i lÃ m viá»‡c", value: "Viá»‡t Nam / Remote" },
                { label: "NgÃ´n ngá»¯", value: "Tiáº¿ng Viá»‡t, Tiáº¿ng Anh" },
                { label: "TÃ¬nh tráº¡ng", value: "Sáºµn sÃ ng há»£p tÃ¡c / Remote" }
            ],
            galleryTitle: "Nhá»¯ng khoáº£nh kháº¯c & Hoáº¡t Ä‘á»™ng thá»±c táº¿",
            gallerySubtitle: "Má»™t sá»‘ hÃ¬nh áº£nh táº¡i cÃ¡c sá»± kiá»‡n, workshop vÃ  hoáº¡t Ä‘á»™ng sÃ¡ng táº¡o thÆ°á»ng nháº­t"
        },

        experiences: {
            sectionBadge: "Kinh nghiá»‡m lÃ m viá»‡c",
            title: "HÃ nh trÃ¬nh nghá» nghiá»‡p & Dáº¥u áº¥n thá»±c chiáº¿n",
            subtitle: "Nhá»¯ng cá»™t má»‘c phÃ¡t triá»ƒn vÃ  cÃ¡c chiáº¿n dá»‹ch Marketing tiÃªu biá»ƒu Ä‘Ã£ trá»±c tiáº¿p thá»±c thi",
            timelineTitle: "Lá»‹ch sá»­ cÃ´ng tÃ¡c",
            projectsTitle: "Chiáº¿n dá»‹ch & Dá»± Ã¡n tiÃªu biá»ƒu",
            categories: {
                all: "Táº¥t cáº£",
                performance: "Performance Ads",
                branding: "Branding & Launch",
                content: "Content & SEO",
                social: "Social & Viral"
            },
            timeline: [
                {
                    period: "Hiá»‡n táº¡i",
                    role: "Deputy Director of Marketing",
                    company: "CÃ”NG TY TNHH THÃ€NH NHÃ‚N EDUCATION",
                    description: "Hoáº¡ch Ä‘á»‹nh vÃ  xÃ¢y dá»±ng cÃ¡c chiáº¿n dá»‹ch Marketing.",
                    achievements: [
                        "Chiáº¿n dá»‹ch Truyá»n thÃ´ng: Chuá»—i ná»™i dung 100% Äiá»ƒm tin Äiá»ƒm trÆ°á»ng, tiáº¿p cáº­n hiá»‡u quáº£ há»c sinh má»¥c tiÃªu mÃ¹a cao Ä‘iá»ƒm thi THPT Quá»‘c gia.",
                        "TÄƒng trÆ°á»Ÿng Tiáº¿p cáº­n: Äáº¡t má»©c tÄƒng trÆ°á»Ÿng tá»± nhiÃªn Ä‘á»™t phÃ¡ vá»›i 364,3K lÆ°á»£t xem (+500,3%), 126,2K ngÆ°á»i xem (+572,9%) vÃ  8,5K lÆ°á»£t truy cáº­p (+434,9%).",
                        "Tá»‘i Æ°u TÆ°Æ¡ng tÃ¡c: Tá»‘i Æ°u hÃ³a ná»™i dung giÃºp tÄƒng 788,8% lÆ°á»£t tÆ°Æ¡ng tÃ¡c (1,6K) vÃ  2.700% lÆ°á»£t theo dÃµi má»›i (450 followers) mÃ  khÃ´ng cáº§n cháº¡y quáº£ng cÃ¡o."
                    ],
                    tags: ["OrganicGrowth", "SocialMediaStrategy", "VisualCommunication"]
                },
                {
                    period: "2023 - 2026",
                    role: "Marketing Executive",
                    company: "CÃ”NG TY TNHH NHÃ€ HÃ€NG KHÃCH Sáº N VÃ€ DU Lá»ŠCH Háº£i Ã‚u Cáº§n ThÆ¡",
                    description: "Chá»‹u trÃ¡ch nhiá»‡m hoáº¡ch Ä‘á»‹nh vÃ  Ä‘iá»u phá»‘i chiáº¿n lÆ°á»£c tiáº¿p thá»‹ Ä‘a kÃªnh cho 3 thÆ°Æ¡ng hiá»‡u trá»±c thuá»™c CÃ´ng ty.",
                    achievements: [
                        "Sáº£n xuáº¥t ná»™i dung & Tá»‘i Æ°u hÃ³a phá»…u chuyá»ƒn Ä‘á»•i: giÃºp tÄƒng 100% lÆ°á»£t tÆ°Æ¡ng tÃ¡c.",
                        "Láº­p káº¿ hoáº¡ch vÃ  sÃ¡ng táº¡o áº¥n pháº©m Ä‘a phÆ°Æ¡ng tiá»‡n (Copywriting, thiáº¿t káº¿ qua Canva/AI/PTS, dá»±ng video báº±ng CapCut Pro).",
                        "TÃ¬m kiáº¿m Ä‘á»‘i tÃ¡c & NÃ¢ng táº§m thÆ°Æ¡ng hiá»‡u: má»Ÿ rá»™ng cÃ¡c cÆ¡ há»™i há»£p tÃ¡c chiáº¿n lÆ°á»£c, Ä‘Æ°a hÃ¬nh áº£nh thÆ°Æ¡ng hiá»‡u xuáº¥t hiá»‡n táº¡i cÃ¡c sá»± kiá»‡n vÃ  há»™i chá»£ Ä‘á»ƒ gia tÄƒng tá»‘i Ä‘a Ä‘á»™ phá»§ sÃ³ng."
                    ],
                    tags: ["Omnichannel Strategy", "Meta Ads", "Google Ads PMax", "Team Leadership"]
                },
                {
                    period: "2023",
                    role: "Content & Social Media Lead",
                    company: "CÃ”NG TY Cá»” PHáº¦N DV TM IVY",
                    description: "Äá»‹nh hÆ°á»›ng ná»™i dung sÃ¡ng táº¡o, xÃ¢y dá»±ng cá»™ng Ä‘á»“ng trÃªn Facebook vÃ  chiáº¿n lÆ°á»£c Inbound Marketing dÃ i háº¡n cho cÃ¡c thÆ°Æ¡ng hiá»‡u F&B.",
                    achievements: [
                        "Chiáº¿n lÆ°á»£c Inbound Marketing dÃ i háº¡n: Hoáº¡ch Ä‘á»‹nh vÃ  triá»ƒn khai há»‡ sinh thÃ¡i ná»™i dung Ä‘a kÃªnh cho cÃ¡c mÃ´ hÃ¬nh F&B, thÃ nh cÃ´ng thu hÃºt tá»‡p khÃ¡ch hÃ ng tiá»m nÄƒng tá»± nhiÃªn vÃ  tá»‘i Æ°u 15-20% chi phÃ­ chuyá»ƒn Ä‘á»•i.",
                        "Tá»‘i Æ°u hÃ³a KPIs & Hiá»‡u suáº¥t: Thiáº¿t láº­p há»‡ thá»‘ng Ä‘o lÆ°á»ng dá»¯ liá»‡u chiáº¿n dá»‹ch Ä‘á»‹nh ká»³, chá»§ Ä‘á»™ng Ä‘Æ°a ra cÃ¡c cáº£i tiáº¿n ná»™i dung ká»‹p thá»i, duy trÃ¬ tá»· lá»‡ Ä‘áº¡t KPIs trung bÃ¬nh 90-100% qua cÃ¡c Ä‘á»£t kÃ­ch hoáº¡t thÆ°Æ¡ng hiá»‡u.",
                        "Thiáº¿t láº­p quy trÃ¬nh há»£p tÃ¡c vá»›i hÆ¡n 20+ KOC/KOL theo mÃ´ hÃ¬nh Booking.",
                        "Dáº«n dáº¯t Ä‘á»™i ngÅ© 5 thÃ nh viÃªn phá»¥ trÃ¡ch Content, Media vÃ  Ads."
                    ],
                    tags: ["Viral Content", "KOC/KOL Booking", "Community Building"]
                },
                {
                    period: "2021 - 2022",
                    role: "Copywriting",
                    company: "CÃ”NG TY TNHH MTV TM DV MADIAD",
                    description: "Chá»‹u trÃ¡ch nhiá»‡m láº­p káº¿ hoáº¡ch, phÃ¡t triá»ƒn vÃ  quáº£n lÃ½ ná»™i dung Ä‘a kÃªnh (bÃ i PR, Website) vÃ  há»— trá»£ tá»• chá»©c sá»± kiá»‡n kÃ­ch hoáº¡t thÆ°Æ¡ng hiá»‡u trá»±c tiáº¿p.",
                    achievements: [
                        "TÄƒng trÆ°á»Ÿng tá»± nhiÃªn: ThÃºc Ä‘áº©y tÄƒng 101,5% lÆ°á»£t tiáº¿p cáº­n (Ä‘áº¡t má»©c 40.000) vÃ  259% lÆ°á»£t truy cáº­p trang (Ä‘áº¡t má»©c 4.000) nhá» chiáº¿n lÆ°á»£c tá»‘i Æ°u ná»™i dung dÃ i háº¡n mÃ  khÃ´ng phá»¥ thuá»™c vÃ o ngÃ¢n sÃ¡ch quáº£ng cÃ¡o.",
                        "BiÃªn táº­p & Ká»ƒ chuyá»‡n thÆ°Æ¡ng hiá»‡u: Äá»‹nh hÃ¬nh phong cÃ¡ch vÃ  cháº¯p bÃºt cho chuá»—i ná»™i dung 'Chuyá»‡n ngÆ°á»i tráº» khá»Ÿi nghiá»‡p', ghi nháº­n má»©c lan tá»a tá»‘t vá»›i 2.500+ lÆ°á»£t xem organic.",
                        "Äa nhiá»‡m trong tá»• chá»©c sá»± kiá»‡n: ÄÃ³ng vai trÃ² cáº§u ná»‘i giá»¯a máº£ng ná»™i dung vÃ  sá»± kiá»‡n thá»±c táº¿. Tham gia há»— trá»£ váº­n hÃ nh vÃ  trá»±c tiáº¿p ghi hÃ¬nh/sáº£n xuáº¥t tÆ° liá»‡u truyá»n thÃ´ng cho sá»± kiá»‡n ra máº¯t sáº£n pháº©m vá»›i hÆ¡n 2.000 ngÆ°á»i tham dá»±."
                    ],
                    tags: ["Copywriting", "Event Activation", "Market Research"]
                }
            ],
            projects: [
                {
                    id: 1,
                    category: "branding",
                    title: "On The Map",
                    client: "Dá»± Ã¡n cá»™ng Ä‘á»“ng & PhÃ¡t triá»ƒn bá»n vá»¯ng",
                    image: "assets/images/project-1.jpg",
                    highlight: "+120% Nháº­n diá»‡n",
                    description: "Truyá»n táº£i thÃ´ng Ä‘iá»‡p truyá»n thÃ´ng 'PhÃ¡t triá»ƒn bá»n vá»¯ng', Social Media káº¿t há»£p Dá»± Ã¡n cá»™ng Ä‘á»“ng.",
                    results: [
                        "HÆ¡n 51.000 lÆ°á»£t tiáº¿p cáº­n vÃ  63.000 lÆ°á»£t hiá»ƒn thá»‹ trÃªn fanpage",
                        "798+ lÆ°á»£t tÆ°Æ¡ng tÃ¡c toÃ n diá»‡n, thÃºc Ä‘áº©y hiá»‡u quáº£ má»©c Ä‘á»™ quan tÃ¢m bÃ i viáº¿t vÃ  Ä‘Äƒng kÃ½ sá»± kiá»‡n",
                        "Tá»‘i Æ°u hÃ³a ngÃ¢n sÃ¡ch tiáº¿p thá»‹ vá»›i CPM tiáº¿t kiá»‡m (~7.300 VNÄ) vÃ  tá»· lá»‡ CTR ná»™i dung Ä‘áº¡t má»©c cao 3.67%"
                    ],
                    tags: ["Brand Identity", "PR & Press", "Social Launch", "Storytelling"]
                },
                {
                    id: 2,
                    category: "content",
                    title: "Háº£i Ã‚u Bay",
                    image: "assets/images/project-2.jpg",
                    highlight: "+28K lÆ°á»£t xem trong 3 tuáº§n",
                    description: "XÃ¢y dá»±ng cá»¥m chá»§ Ä‘á» (Topic Clusters) vá»›i chuá»—i ná»™i dung chuyÃªn sÃ¢u vá» vÄƒn hÃ³a.",
                    results: [
                        "28.000+ lÆ°á»£t xem vÃ  400+ subscribers má»›i trÃªn YouTube vá»›i chi phÃ­ quáº£ng cÃ¡o tá»‘i Æ°u.",
                        "LÃ m chá»§ quy trÃ¬nh sáº£n xuáº¥t ná»™i dung YouTube (ká»‹ch báº£n, thu Ã¢m, Ä‘Ã¡nh giÃ¡ hiá»‡u suáº¥t).",
                        "TÄƒng thá»i gian á»Ÿ láº¡i trang (Time on Site) lÃªn 4 phÃºt 15 giÃ¢y"
                    ],
                    tags: ["Digital Storytelling", "Content Production", "Inbound Marketing"]
                },
                {
                    id: 3,
                    category: "social",
                    title: "Chiáº¿n Dá»‹ch Viral TikTok",
                    client: "ThÃ nh NhÃ¢n Education",
                    image: "assets/images/project-3.jpg",
                    highlight: "192K+ Views TikTok",
                    description: "Láº­p chiáº¿n dá»‹ch tiáº¿p cáº­n khÃ¡ch hÃ ng má»¥c tiÃªu trong thá»i gian cao Ä‘iá»ƒm (thi tá»‘t nghiá»‡p THPTQG) vá»›i chuá»—i Series Äiá»ƒm tin - Äiá»ƒm trÆ°á»ng hoÃ n toÃ n Organic.",
                    results: [
                        "Viáº¿t ká»‹ch báº£n cho chiáº¿n dá»‹ch truyá»n thÃ´ng ngáº¯n háº¡n vá»›i 50+ video TikTok.",
                        "Sá»Ÿ há»¯u video Ä‘áº¡t 192.000+ lÆ°á»£t xem tá»± nhiÃªn (Organic Views) hoÃ n toÃ n khÃ´ng tá»‘n chi phÃ­ Ads.",
                        "100% tá»•ng sá»‘ video trong chiáº¿n dá»‹ch phÃ¡ vá»¡ cá»™t má»‘c 1.000+ views."
                    ],
                    tags: ["Short-Form Content", "TikTok Strategy", "Creative Direction", "Viral Video"]
                }
            ]
        },

        skills: {
            sectionBadge: "Ká»¹ nÄƒng chuyÃªn mÃ´n",
            title: "Bá»™ cÃ´ng cá»¥ & NÄƒng lá»±c tiáº¿p thá»‹ cá»‘t lÃµi",
            subtitle: "Sá»± káº¿t há»£p giá»¯a tÆ° duy chiáº¿n lÆ°á»£c, cÃ´ng nghá»‡ phÃ¢n tÃ­ch sá»‘ liá»‡u vÃ  sá»± sÃ¡ng táº¡o khÃ´ng ngá»«ng",
            categories: [
                {
                    name: "Digital Ads & Performance",
                    icon: "target",
                    skills: [
                        { name: "Meta Ads (Facebook)", level: 95 },
                        { name: "TikTok Ads & TikTok Shop", level: 88 },
                        { name: "Re-marketing & Phá»…u chuyá»ƒn Ä‘á»•i", level: 92 }
                    ]
                },
                {
                    name: "Content & Brand Strategy",
                    icon: "feather",
                    skills: [
                        { name: "Chiáº¿n lÆ°á»£c ná»™i dung Ä‘a kÃªnh (Omnichannel)", level: 95 },
                        { name: "Copywriting & Storytelling", level: 92 },
                        { name: "SEO On-page / Topic Clusters", level: 85 },
                        { name: "KOL / KOC Booking & Influencer Relations", level: 90 }
                    ]
                },
                {
                    name: "CÃ´ng cá»¥ PhÃ¢n tÃ­ch & Thiáº¿t káº¿",
                    icon: "pie-chart",
                    skills: [
                        { name: "Google Analytics 4 (GA4) & GTM", level: 90 },
                        { name: "Looker Studio Dashboard & Data Analysis", level: 85 },
                        { name: "Canva, Photoshop & Visual Concept", level: 90 },
                        { name: "CapCut & Video Short-form Editing", level: 88 },
                    ]
                },
                {
                    name: "Ká»¹ nÄƒng má»m & Quáº£n lÃ½",
                    icon: "users",
                    skills: [
                        { name: "Hoáº¡ch Ä‘á»‹nh ngÃ¢n sÃ¡ch & Dá»± bÃ¡o KPI", level: 92 },
                        { name: "Quáº£n lÃ½ dá»± Ã¡n chiáº¿n dá»‹ch (Campaign Management)", level: 95 },
                        { name: "TÆ° duy pháº£n biá»‡n & Giáº£i quyáº¿t váº¥n Ä‘á»", level: 85 },
                        { name: "Thuyáº¿t trÃ¬nh & ÄÃ m phÃ¡n Ä‘á»‘i tÃ¡c", level: 88 }
                    ]
                }
            ]
        },

        education: {
            sectionBadge: "Há»c váº¥n & Báº±ng cáº¥p",
            title: "Ná»n táº£ng há»c thuáº­t & Chá»©ng chá»‰ chuyÃªn ngÃ nh",
            subtitle: "LiÃªn tá»¥c trau dá»“i kiáº¿n thá»©c chuáº©n quá»‘c táº¿ Ä‘á»ƒ báº¯t ká»‹p xu hÆ°á»›ng thá»‹ trÆ°á»ng",
            degreesTitle: "QuÃ¡ trÃ¬nh há»c váº¥n",
            certificationsTitle: "Chá»©ng chá»‰ chuyÃªn nghiá»‡p quá»‘c táº¿",
            degrees: [
                {
                    degree: "Cá»­ nhÃ¢n Kinh doanh quá»‘c táº¿",
                    school: "Äáº¡i há»c Cáº§n ThÆ¡ (CTU)",
                    period: "2018 - 2022",
                    details: "Äáº¡t thÃ nh tÃ­ch ná»•i báº­t táº¡i cuá»™c thi Starship - Star Awards nÄƒm 2020."
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
            sectionBadge: "Káº¿t ná»‘i ngay",
            title: "CÃ¹ng táº¡o nÃªn nhá»¯ng chiáº¿n dá»‹ch Ä‘á»™t phÃ¡",
            subtitle: "Báº¡n Ä‘ang cÃ³ Ã½ tÆ°á»Ÿng má»›i hoáº·c cáº§n tÃ¬m má»™t chuyÃªn gia Marketing Ä‘á»“ng hÃ nh? HÃ£y gá»­i tin nháº¯n cho tÃ´i ngay hÃ´m nay!",
            infoTitle: "ThÃ´ng tin liÃªn há»‡",
            formTitle: "Gá»­i tin nháº¯n trá»±c tiáº¿p",
            labels: {
                fullName: "Há» vÃ  tÃªn cá»§a báº¡n",
                email: "Äá»‹a chá»‰ Email",
                subject: "Chá»§ Ä‘á» / Dá»‹ch vá»¥ quan tÃ¢m",
                message: "Ná»™i dung tin nháº¯n",
                sendBtn: "Gá»­i tin nháº¯n ngay",
                sending: "Äang gá»­i...",
                success: "Cáº£m Æ¡n báº¡n! Tin nháº¯n Ä‘Ã£ Ä‘Æ°á»£c gá»­i thÃ nh cÃ´ng. TÃ´i sáº½ pháº£n há»“i sá»›m nháº¥t cÃ³ thá»ƒ!"
            },
            subjects: [
                "TÆ° váº¥n Chiáº¿n lÆ°á»£c Marketing Tá»•ng thá»ƒ",
                "Quáº£n lÃ½ & Tá»‘i Æ°u Quáº£ng cÃ¡o (Performance Ads)",
                "XÃ¢y dá»±ng Chiáº¿n dá»‹ch Ná»™i dung & Viral TikTok",
                "CÆ¡ há»™i Há»£p tÃ¡c / Tuyá»ƒn dá»¥ng",
                "KhÃ¡c"
            ]
        },

        footer: {
            rights: "Báº£o lÆ°u má»i quyá»n.",
            builtWith: "Thiáº¿t káº¿ vá»›i Ä‘am mÃª & sÃ¡ng táº¡o dÃ nh cho Portfolio chuyÃªn nghiá»‡p."
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
                        "Devised a long-term Inbound Marketing ecosystem across F&B business units, capturing high-intent organic leads and slashing Customer Acquisition Cost (CAC) by 15â€“20%.",
                        "Instituted rigorous KPI tracking frameworks and agile content iterations, consistently achieving a 90â€“100% KPI fulfillment rate across brand activation campaigns.",
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
                    description: "Rolled out a dedicated "School News Update" content series, effectively reaching target students during the peak National High School Graduation Exam season..",
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
    window.profileData = profileData;
}

/**
 * MAIN JAVASCRIPT - PORTFOLIO INTERACTION & BILINGUAL RENDERING
 * -------------------------------------------------------------
 */

// Application State
const state = {
    lang: localStorage.getItem('portfolio_lang') || (window.profileData && window.profileData.config && window.profileData.config.defaultLang) || 'vi',
    theme: localStorage.getItem('portfolio_theme') || (window.profileData && window.profileData.config && window.profileData.config.defaultTheme) || 'light',
    activeProjectFilter: 'all',
    lightboxIndex: 0,
    typewriterTimeout: null
};

// DOM Elements
const elements = {
    html: document.documentElement,
    langToggle: document.getElementById('lang-toggle'),
    langText: document.getElementById('lang-text'),
    themeToggle: document.getElementById('theme-toggle'),
    themeIcon: document.getElementById('theme-icon'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileMenu: document.getElementById('mobile-menu'),
    scrollProgress: document.getElementById('scroll-progress'),
    backToTopBtn: document.getElementById('back-to-top'),
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxPrev: document.getElementById('lightbox-prev'),
    lightboxNext: document.getElementById('lightbox-next'),
    contactForm: document.getElementById('contact-form'),
    toast: document.getElementById('toast-notification'),
    toastMsg: document.getElementById('toast-message'),
    typewriterText: document.getElementById('typewriter-text')
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initScrollEvents();
    initLightbox();
    initContactForm();
    initMobileMenu();
});

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initTheme() {
    if (state.theme === 'light') {
        elements.html.classList.add('light');
        updateThemeIcon('sun');
    } else {
        elements.html.classList.remove('light');
        updateThemeIcon('moon');
    }

    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    if (elements.html.classList.contains('light')) {
        elements.html.classList.remove('light');
        state.theme = 'dark';
        updateThemeIcon('moon');
    } else {
        elements.html.classList.add('light');
        state.theme = 'light';
        updateThemeIcon('sun');
    }
    localStorage.setItem('portfolio_theme', state.theme);
}

function updateThemeIcon(type) {
    if (!elements.themeIcon) return;
    elements.themeIcon.setAttribute('data-lucide', type === 'sun' ? 'sun' : 'moon');
    if (window.lucide) lucide.createIcons();
}

/* ==========================================================================
   LANGUAGE SWITCHER (VI / EN)
   ========================================================================== */
function initLanguage() {
    if (elements.langToggle) {
        elements.langToggle.addEventListener('click', toggleLanguage);
    }
    applyLanguage(state.lang);
}

function toggleLanguage() {
    state.lang = state.lang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('portfolio_lang', state.lang);
    applyLanguage(state.lang);
}

function applyLanguage(lang) {
    const data = profileData[lang] || profileData.vi;
    
    // Update language switch button text & flag
    if (elements.langText) {
        elements.langText.textContent = lang === 'vi' ? 'ðŸ‡»ðŸ‡³ VI' : 'ðŸ‡¬ðŸ‡§ EN';
    }
    elements.html.setAttribute('lang', lang);

    // Render Navigation
    renderNav(data.nav);

    // Render Hero Section
    renderHero(data.hero);

    // Render About Section
    renderAbout(data.about);

    // Render Experiences & Projects
    renderExperiences(data.experiences);

    // Render Skills
    renderSkills(data.skills);

    // Render Education & Certifications
    renderEducation(data.education);

    // Render Contact
    renderContact(data.contact);

    // Render Footer
    renderFooter(data.footer);

    // Re-initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Re-start typewriter animation with new language roles
    initTypewriter(data.hero.roles);
}

/* ==========================================================================
   SECTION RENDERERS
   ========================================================================== */

function renderNav(nav) {
    const navLinks = {
        'nav-home': nav.home,
        'nav-about': nav.about,
        'nav-experiences': nav.experiences,
        'nav-skills': nav.skills,
        'nav-education': nav.education,
        'nav-contact': nav.contact,
        'nav-cv': nav.downloadCv,
        // Mobile nav
        'm-nav-home': nav.home,
        'm-nav-about': nav.about,
        'm-nav-experiences': nav.experiences,
        'm-nav-skills': nav.skills,
        'm-nav-education': nav.education,
        'm-nav-contact': nav.contact,
        'm-nav-cv': nav.downloadCv
    };

    for (const [id, text] of Object.entries(navLinks)) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }
}

function renderHero(hero) {
    const greetingEl = document.getElementById('hero-greeting');
    const nameEl = document.getElementById('hero-name');
    const taglineEl = document.getElementById('hero-tagline');
    const ctaProjectsEl = document.getElementById('hero-cta-projects');
    const ctaContactEl = document.getElementById('hero-cta-contact');
    const statusEl = document.getElementById('hero-status');
    const expBadgeEl = document.getElementById('hero-exp-badge');
    const roasBadgeEl = document.getElementById('hero-roas-badge');
    const avatarImgEl = document.getElementById('hero-avatar-img');

    if (greetingEl) greetingEl.textContent = hero.greeting;
    if (nameEl) nameEl.textContent = hero.name;
    if (taglineEl) taglineEl.textContent = hero.tagline;
    if (ctaProjectsEl) ctaProjectsEl.textContent = hero.ctaProjects;
    if (ctaContactEl) ctaContactEl.textContent = hero.ctaContact;
    if (statusEl) statusEl.textContent = hero.statusAvailable;
    if (expBadgeEl) expBadgeEl.textContent = hero.experienceBadge;
    if (roasBadgeEl) roasBadgeEl.textContent = hero.roasBadge;
    if (avatarImgEl) {
        avatarImgEl.onerror = function() {
            if (this.src.includes('.png')) {
                this.src = 'assets/images/avatar.jpg';
            } else if (this.src.includes('.jpg')) {
                this.src = 'assets/images/avatar.png';
            }
        };
        if (profileData.config.avatarUrl) {
            avatarImgEl.src = profileData.config.avatarUrl;
        }
    }
}

function renderAbout(about) {
    const badgeEl = document.getElementById('about-badge');
    const titleEl = document.getElementById('about-title');
    const subtitleEl = document.getElementById('about-subtitle');
    const p1El = document.getElementById('about-p1');
    const p2El = document.getElementById('about-p2');
    const statsContainer = document.getElementById('about-stats');
    const quickInfoContainer = document.getElementById('about-quick-info');
    const galleryTitleEl = document.getElementById('about-gallery-title');
    const gallerySubtitleEl = document.getElementById('about-gallery-subtitle');
    const galleryContainer = document.getElementById('about-gallery-grid');

    if (badgeEl) badgeEl.textContent = about.sectionBadge;
    if (titleEl) titleEl.textContent = about.title;
    if (subtitleEl) subtitleEl.textContent = about.subtitle;
    if (p1El) p1El.innerHTML = about.bioParagraph1;
    if (p2El) p2El.innerHTML = about.bioParagraph2;
    if (galleryTitleEl) galleryTitleEl.textContent = about.galleryTitle;
    if (gallerySubtitleEl) gallerySubtitleEl.textContent = about.gallerySubtitle;

    // Render Stats
    if (statsContainer) {
        statsContainer.innerHTML = about.stats.map(stat => `
            <div class="glass-card p-5 text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-3">
                    <i data-lucide="${stat.icon}" class="w-6 h-6"></i>
                </div>
                <div class="text-3xl font-extrabold gradient-text mb-1">${stat.value}</div>
                <div class="text-sm font-medium text-slate-400 dark:text-slate-400">${stat.label}</div>
            </div>
        `).join('');
    }

    // Render Quick Info
    if (quickInfoContainer) {
        quickInfoContainer.innerHTML = about.quickInfo.map(item => `
            <div class="flex items-start gap-3 p-3 rounded-lg bg-slate-500/5 border border-slate-500/10">
                <div class="w-2 h-2 rounded-full bg-indigo-500 mt-2"></div>
                <div>
                    <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">${item.label}:</span>
                    <p class="text-sm font-medium text-slate-200 dark:text-slate-200 mt-0.5">${item.value}</p>
                </div>
            </div>
        `).join('');
    }

    // Render Gallery (Clean images without text captions)
    if (galleryContainer && profileData.gallery) {
        galleryContainer.innerHTML = profileData.gallery.map((img, idx) => `
            <div class="gallery-img-container aspect-square glass-card overflow-hidden group cursor-pointer" onclick="openLightbox(${idx})">
                <img src="${img.src}" alt="Gallery Image ${idx + 1}" class="gallery-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async">
                <div class="gallery-overlay">
                    <div class="text-white bg-black/60 backdrop-blur-md p-3 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <i data-lucide="maximize-2" class="w-5 h-5"></i>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderExperiences(exp) {
    const badgeEl = document.getElementById('exp-badge');
    const titleEl = document.getElementById('exp-title');
    const subtitleEl = document.getElementById('exp-subtitle');
    const timelineTitleEl = document.getElementById('exp-timeline-title');
    const projectsTitleEl = document.getElementById('exp-projects-title');
    const timelineContainer = document.getElementById('exp-timeline');
    const filterContainer = document.getElementById('project-filters');

    if (badgeEl) badgeEl.textContent = exp.sectionBadge;
    if (titleEl) titleEl.textContent = exp.title;
    if (subtitleEl) subtitleEl.textContent = exp.subtitle;
    if (timelineTitleEl) timelineTitleEl.textContent = exp.timelineTitle;
    if (projectsTitleEl) projectsTitleEl.textContent = exp.projectsTitle;

    // Render Timeline
    if (timelineContainer) {
        timelineContainer.innerHTML = exp.timeline.map(item => `
            <div class="timeline-item mb-10 last:mb-0">
                <div class="timeline-dot"></div>
                <div class="glass-card p-6 ml-2">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 class="text-lg font-bold text-slate-100">${item.role}</h4>
                        <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${item.period}</span>
                    </div>
                    <div class="text-sm font-semibold text-indigo-400/90 mb-3">${item.company}</div>
                    <p class="text-sm text-slate-300 mb-4">${item.description}</p>
                    <ul class="space-y-2 mb-4 text-xs text-slate-400">
                        ${item.achievements.map(ach => `
                            <li class="flex items-start gap-2">
                                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                                <span>${ach}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="flex flex-wrap gap-1.5 pt-2 border-t border-slate-700/50">
                        ${item.tags.map(tag => `
                            <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Render Project Filter Buttons
    if (filterContainer) {
        filterContainer.innerHTML = Object.entries(exp.categories).map(([key, label]) => `
            <button class="filter-btn ${state.activeProjectFilter === key ? 'active' : ''}" onclick="filterProjects('${key}')">
                ${label}
            </button>
        `).join('');
    }

    // Render Project Cards
    renderProjectsList(exp.projects);
}

function filterProjects(category) {
    state.activeProjectFilter = category;
    const data = profileData[state.lang] || profileData.vi;
    
    // Update active class on buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const currentBtn = Array.from(document.querySelectorAll('.filter-btn')).find(b => 
        b.textContent.trim() === data.experiences.categories[category]
    );
    if (currentBtn) currentBtn.classList.add('active');

    renderProjectsList(data.experiences.projects);
}

function renderProjectsList(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const filtered = state.activeProjectFilter === 'all' 
        ? projects 
        : projects.filter(p => p.category === state.activeProjectFilter);

    container.innerHTML = filtered.map(proj => `
        <div class="glass-card overflow-hidden flex flex-col group">
            <div class="relative aspect-video overflow-hidden">
                <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-3 right-3 bg-indigo-600/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    ${proj.highlight}
                </div>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div class="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">${proj.client}</div>
                    <h4 class="text-lg font-bold text-slate-100 mb-3">${proj.title}</h4>
                    <p class="text-sm text-slate-300 mb-4">${proj.description}</p>
                    <div class="space-y-1.5 mb-4 bg-slate-900/40 p-3 rounded-lg border border-slate-800">
                        <div class="text-xs font-semibold text-slate-400 uppercase">${state.lang === 'vi' ? 'Káº¿t quáº£ Ä‘áº¡t Ä‘Æ°á»£c:' : 'Key Outcomes:'}</div>
                        ${proj.results.map(r => `
                            <div class="text-xs text-slate-300 flex items-center gap-2">
                                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-indigo-400"></i>
                                <span>${r}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-700/50">
                    ${proj.tags.map(t => `
                        <span class="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${t}</span>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function renderSkills(skills) {
    const badgeEl = document.getElementById('skills-badge');
    const titleEl = document.getElementById('skills-title');
    const subtitleEl = document.getElementById('skills-subtitle');
    const container = document.getElementById('skills-grid');

    if (badgeEl) badgeEl.textContent = skills.sectionBadge;
    if (titleEl) titleEl.textContent = skills.title;
    if (subtitleEl) subtitleEl.textContent = skills.subtitle;

    if (container) {
        container.innerHTML = skills.categories.map(cat => `
            <div class="glass-card p-6">
                <div class="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700/50">
                    <div class="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                        <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
                    </div>
                    <h4 class="text-base font-bold text-slate-100">${cat.name}</h4>
                </div>
                <div class="space-y-5">
                    ${cat.skills.map(s => `
                        <div>
                            <div class="flex justify-between text-xs font-semibold mb-1.5">
                                <span class="text-slate-200">${s.name}</span>
                                <span class="text-indigo-400">${s.level}%</span>
                            </div>
                            <div class="skill-bar-bg">
                                <div class="skill-bar-fill" style="width: ${s.level}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }
}

function renderEducation(edu) {
    const badgeEl = document.getElementById('edu-badge');
    const titleEl = document.getElementById('edu-title');
    const subtitleEl = document.getElementById('edu-subtitle');
    const degreesTitleEl = document.getElementById('edu-degrees-title');
    const certsTitleEl = document.getElementById('edu-certs-title');
    const degreesContainer = document.getElementById('edu-degrees-list');
    const certsContainer = document.getElementById('edu-certs-grid');

    if (badgeEl) badgeEl.textContent = edu.sectionBadge;
    if (titleEl) titleEl.textContent = edu.title;
    if (subtitleEl) subtitleEl.textContent = edu.subtitle;
    if (degreesTitleEl) degreesTitleEl.textContent = edu.degreesTitle;
    if (certsTitleEl) certsTitleEl.textContent = edu.certificationsTitle;

    // Degrees
    if (degreesContainer) {
        degreesContainer.innerHTML = edu.degrees.map(deg => `
            <div class="glass-card p-6 relative overflow-hidden">
                <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                        <h4 class="text-lg font-bold text-slate-100">${deg.degree}</h4>
                        <div class="text-sm font-semibold text-indigo-400 mt-1">${deg.school}</div>
                    </div>
                    <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${deg.period}</span>
                </div>
                ${deg.grade ? `<div class="text-xs font-semibold text-emerald-400 mb-2">${deg.grade}</div>` : ''}
                <p class="text-xs text-slate-300 leading-relaxed">${deg.details || ''}</p>
            </div>
        `).join('');
    }

    // Certifications
    if (certsContainer) {
        certsContainer.innerHTML = edu.certifications.map(cert => `
            <div class="glass-card p-5 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-1">
                        <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">${cert.issuer}</span>
                        <span class="text-[11px] font-bold text-indigo-400">${cert.year}</span>
                    </div>
                    <h5 class="text-sm font-bold text-slate-100 mt-0.5 truncate">${cert.name}</h5>
                    <div class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                        <i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>
                        <span>${cert.code}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function renderContact(contact) {
    const badgeEl = document.getElementById('contact-badge');
    const titleEl = document.getElementById('contact-title');
    const subtitleEl = document.getElementById('contact-subtitle');
    const infoTitleEl = document.getElementById('contact-info-title');
    const formTitleEl = document.getElementById('contact-form-title');
    
    const labelName = document.getElementById('label-name');
    const labelEmail = document.getElementById('label-email');
    const labelSubject = document.getElementById('label-subject');
    const labelMessage = document.getElementById('label-message');
    const sendBtn = document.getElementById('contact-submit-btn');
    const subjectSelect = document.getElementById('contact-subject');

    if (badgeEl) badgeEl.textContent = contact.sectionBadge;
    if (titleEl) titleEl.textContent = contact.title;
    if (subtitleEl) subtitleEl.textContent = contact.subtitle;
    if (infoTitleEl) infoTitleEl.textContent = contact.infoTitle;
    if (formTitleEl) formTitleEl.textContent = contact.formTitle;

    if (labelName) labelName.textContent = contact.labels.fullName;
    if (labelEmail) labelEmail.textContent = contact.labels.email;
    if (labelSubject) labelSubject.textContent = contact.labels.subject;
    if (labelMessage) labelMessage.textContent = contact.labels.message;
    if (sendBtn) {
        sendBtn.innerHTML = `<span>${contact.labels.sendBtn}</span> <i data-lucide="send" class="w-4 h-4 ml-2"></i>`;
    }

    if (subjectSelect && contact.subjects) {
        subjectSelect.innerHTML = contact.subjects.map(s => `<option value="${s}">${s}</option>`).join('');
    }

    // Contact info items
    const emailEl = document.getElementById('contact-email-val');
    const phoneEl = document.getElementById('contact-phone-val');
    const locEl = document.getElementById('contact-loc-val');

    if (emailEl) {
        emailEl.textContent = profileData.config.email;
        const emailLink = emailEl.closest('a');
        if (emailLink) emailLink.href = `mailto:${profileData.config.email}`;
    }
    if (phoneEl) {
        phoneEl.textContent = profileData.config.phone;
        const phoneLink = phoneEl.closest('a');
        if (phoneLink) phoneLink.href = `tel:${profileData.config.phone.replace(/[\s\-\(\)]/g, '')}`;
    }
    if (locEl) {
        locEl.textContent = (profileData.config.location && profileData.config.location[state.lang]) || 'Viá»‡t Nam';
    }
}

function renderFooter(footer) {
    const rightsEl = document.getElementById('footer-rights');
    const builtEl = document.getElementById('footer-built');
    const footerBrandName = document.getElementById('footer-brand-name');
    const headerBrandName = document.getElementById('header-brand-name');
    const year = new Date().getFullYear();
    const brandName = state.lang === 'vi' ? 'YEN LUU' : 'OLWEN LUU';
    const headerName = state.lang === 'vi' ? 'Yáº¾N LÆ¯U' : 'OLWEN LUU';

    if (headerBrandName) headerBrandName.textContent = headerName;
    if (footerBrandName) footerBrandName.textContent = brandName;
    if (rightsEl) rightsEl.textContent = `Â© ${year} ${brandName}. ${footer.rights}`;
    if (builtEl) builtEl.textContent = footer.builtWith;
}

/* ==========================================================================
   DYNAMIC TYPEWRITER EFFECT
   ========================================================================== */
let typewriterCharIndex = 0;
let typewriterRoleIndex = 0;
let typewriterIsDeleting = false;

function initTypewriter(roles) {
    if (state.typewriterTimeout) {
        clearTimeout(state.typewriterTimeout);
    }
    typewriterCharIndex = 0;
    typewriterRoleIndex = 0;
    typewriterIsDeleting = false;
    typewriterTick(roles);
}

function typewriterTick(roles) {
    if (!elements.typewriterText || !roles || roles.length === 0) return;

    const currentRole = roles[typewriterRoleIndex];
    
    if (typewriterIsDeleting) {
        elements.typewriterText.textContent = currentRole.substring(0, typewriterCharIndex - 1);
        typewriterCharIndex--;
    } else {
        elements.typewriterText.textContent = currentRole.substring(0, typewriterCharIndex + 1);
        typewriterCharIndex++;
    }

    let speed = typewriterIsDeleting ? 40 : 80;

    if (!typewriterIsDeleting && typewriterCharIndex === currentRole.length) {
        speed = 2000; // Pause at end of word
        typewriterIsDeleting = true;
    } else if (typewriterIsDeleting && typewriterCharIndex === 0) {
        typewriterIsDeleting = false;
        typewriterRoleIndex = (typewriterRoleIndex + 1) % roles.length;
        speed = 500;
    }

    state.typewriterTimeout = setTimeout(() => typewriterTick(roles), speed);
}

/* ==========================================================================
   SCROLL EVENTS (PROGRESS BAR, BACK TO TOP & SCROLLSPY)
   ========================================================================== */
function initScrollEvents() {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        if (elements.scrollProgress) {
            elements.scrollProgress.style.width = `${progress}%`;
        }

        if (elements.backToTopBtn) {
            if (scrollTop > 400) {
                elements.backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
                elements.backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                elements.backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
                elements.backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }

        // ScrollSpy Active Nav Highlight
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav-link[href="#${id}"]`);

            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-indigo-400', 'font-bold'));
                if (link) link.classList.add('text-indigo-400', 'font-bold');
            }
        });
    });

    if (elements.backToTopBtn) {
        elements.backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
    if (elements.lightboxClose) {
        elements.lightboxClose.addEventListener('click', closeLightbox);
    }
    if (elements.lightboxPrev) {
        elements.lightboxPrev.addEventListener('click', () => changeLightboxImage(-1));
    }
    if (elements.lightboxNext) {
        elements.lightboxNext.addEventListener('click', () => changeLightboxImage(1));
    }

    if (elements.lightboxModal) {
        elements.lightboxModal.addEventListener('click', (e) => {
            if (e.target === elements.lightboxModal) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!elements.lightboxModal.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });
}

function openLightbox(index) {
    if (!profileData.gallery || !profileData.gallery[index]) return;
    state.lightboxIndex = index;
    updateLightboxContent();
    elements.lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    elements.lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    const total = profileData.gallery.length;
    state.lightboxIndex = (state.lightboxIndex + direction + total) % total;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = profileData.gallery[state.lightboxIndex];
    if (!item) return;
    elements.lightboxImg.src = item.src;
    if (elements.lightboxCaption) {
        const caption = state.lang === 'vi' ? item.captionVi : item.captionEn;
        if (caption) {
            elements.lightboxCaption.textContent = caption;
            elements.lightboxCaption.style.display = 'block';
        } else {
            elements.lightboxCaption.textContent = '';
            elements.lightboxCaption.style.display = 'none';
        }
    }
}

/* ==========================================================================
   CONTACT FORM & TOAST
   ========================================================================== */
function initContactForm() {
    if (!elements.contactForm) return;

    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
        const langData = profileData[state.lang] || profileData.vi;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>${langData.contact.labels.sending}</span> <i data-lucide="loader-2" class="w-4 h-4 ml-2 animate-spin"></i>`;
            if (window.lucide) lucide.createIcons();
        }

        // Simulate network submission
        setTimeout(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = `<span>${langData.contact.labels.sendBtn}</span> <i data-lucide="send" class="w-4 h-4 ml-2"></i>`;
                if (window.lucide) lucide.createIcons();
            }

            elements.contactForm.reset();
            showToast(langData.contact.labels.success);
        }, 900);
    });
}

function showToast(message) {
    if (!elements.toast || !elements.toastMsg) return;
    elements.toastMsg.textContent = message;
    elements.toast.classList.add('show');

    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 4500);
}

/* ==========================================================================
   VISUAL IN-BROWSER QUICK EDITOR (CHá»ˆNH Sá»¬A TRá»°C QUAN Má»ŒI LÃšC Má»ŒI NÆ I)
   ========================================================================== */
function initQuickEditor() {
    const editBtn = document.getElementById('open-editor-btn');
    const editorModal = document.getElementById('editor-modal');
    const closeBtn = document.getElementById('close-editor-btn');
    const savePreviewBtn = document.getElementById('editor-save-preview');
    const downloadJsBtn = document.getElementById('editor-download-js');
    const copyCodeBtn = document.getElementById('editor-copy-code');

    if (!editBtn || !editorModal) return;

    // Open Modal
    editBtn.addEventListener('click', () => {
        populateEditorFields();
        editorModal.classList.remove('hidden');
        editorModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });

    // Close Modal
    const closeModal = () => {
        editorModal.classList.add('hidden');
        editorModal.classList.remove('flex');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    editorModal.addEventListener('click', (e) => {
        if (e.target === editorModal) closeModal();
    });

    // Keyboard shortcut (Ctrl + Shift + E)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
            e.preventDefault();
            editBtn.click();
        }
    });

    // File input avatar reader
    const avatarFileInput = document.getElementById('edit-avatar-file');
    const avatarTextInput = document.getElementById('edit-avatar');
    const avatarPreviewImg = document.getElementById('edit-avatar-preview');

    if (avatarFileInput) {
        avatarFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const result = event.target.result;
                    if (avatarPreviewImg) avatarPreviewImg.src = result;
                    if (avatarTextInput) avatarTextInput.value = result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (avatarTextInput) {
        avatarTextInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (avatarPreviewImg && val) {
                avatarPreviewImg.src = val;
            }
        });
    }

    // Populate current values into form inputs
    function populateEditorFields() {
        const d = profileData;
        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el && val !== undefined) el.value = val;
        };

        const currentAvatar = d.config.avatarUrl || 'assets/images/avatar.jpg';
        setVal('edit-name', d.vi.hero.name);
        setVal('edit-avatar', currentAvatar);
        if (avatarPreviewImg) avatarPreviewImg.src = currentAvatar;
        setVal('edit-email', d.config.email);
        setVal('edit-phone', d.config.phone);
        setVal('edit-location-vi', d.config.location.vi);
        setVal('edit-location-en', d.config.location.en);
        setVal('edit-tagline-vi', d.vi.hero.tagline);
        setVal('edit-tagline-en', d.en.hero.tagline);
        setVal('edit-bio-vi', d.vi.about.bioParagraph1);
        setVal('edit-bio-en', d.en.about.bioParagraph1);
        setVal('edit-linkedin', d.config.socials && d.config.socials.linkedin);
        setVal('edit-facebook', d.config.socials && d.config.socials.facebook);
        setVal('edit-tiktok', d.config.socials && d.config.socials.tiktok);
        setVal('edit-cv-url', d.config.cvUrl);
    }

    // Apply values to memory & re-render
    function applyEditorValues() {
        const getVal = (id) => (document.getElementById(id) ? document.getElementById(id).value.trim() : '');

        const name = getVal('edit-name') || profileData.vi.hero.name;
        const avatarUrl = getVal('edit-avatar') || profileData.config.avatarUrl || 'assets/images/avatar.jpg';
        const email = getVal('edit-email') || profileData.config.email;
        const phone = getVal('edit-phone') || profileData.config.phone;
        const locVi = getVal('edit-location-vi') || (profileData.config.location && profileData.config.location.vi);
        const locEn = getVal('edit-location-en') || (profileData.config.location && profileData.config.location.en);
        const taglineVi = getVal('edit-tagline-vi') || profileData.vi.hero.tagline;
        const taglineEn = getVal('edit-tagline-en') || profileData.en.hero.tagline;
        const bioVi = getVal('edit-bio-vi') || profileData.vi.about.bioParagraph1;
        const bioEn = getVal('edit-bio-en') || profileData.en.about.bioParagraph1;
        const linkedin = getVal('edit-linkedin');
        const facebook = getVal('edit-facebook');
        const tiktok = getVal('edit-tiktok');
        const cvUrl = getVal('edit-cv-url');

        // Update profileData in memory
        profileData.vi.hero.name = name;
        profileData.en.hero.name = name;
        profileData.config.avatarUrl = avatarUrl;
        profileData.config.email = email;
        profileData.config.phone = phone;
        if (!profileData.config.location) profileData.config.location = {};
        profileData.config.location.vi = locVi;
        profileData.config.location.en = locEn;
        profileData.vi.hero.tagline = taglineVi;
        profileData.en.hero.tagline = taglineEn;
        profileData.vi.about.bioParagraph1 = bioVi;
        profileData.en.about.bioParagraph1 = bioEn;
        if (!profileData.config.socials) profileData.config.socials = {};
        profileData.config.socials.linkedin = linkedin;
        profileData.config.socials.facebook = facebook;
        profileData.config.socials.tiktok = tiktok;
        profileData.config.cvUrl = cvUrl;

        // Re-apply to current page
        applyLanguage(state.lang);
        showToast(state.lang === 'vi' ? 'ÄÃ£ cáº­p nháº­t hiá»ƒn thá»‹ xem trÆ°á»›c thÃ nh cÃ´ng!' : 'Preview updated successfully!');
    }

    // Save & Preview
    if (savePreviewBtn) {
        savePreviewBtn.addEventListener('click', () => {
            applyEditorValues();
            closeModal();
        });
    }

    // Generate Javascript Code String
    function generateJsString() {
        applyEditorValues();
        return `/**\n * PORTFOLIO DATA CONFIGURATION (Song ngá»¯: Tiáº¿ng Viá»‡t & English)\n * Tá»± Ä‘á»™ng táº¡o bá»Ÿi TrÃ¬nh Chá»‰nh Sá»­a Trá»±c Quan\n */\nconst profileData = ${JSON.stringify(profileData, null, 4)};\n`;
    }

    // Download updated profileData.js
    if (downloadJsBtn) {
        downloadJsBtn.addEventListener('click', () => {
            const content = generateJsString();
            const blob = new Blob([content], { type: 'text/javascript;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'profileData.js';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast(state.lang === 'vi' ? 'ÄÃ£ táº£i file profileData.js má»›i vá» mÃ¡y!' : 'profileData.js downloaded!');
        });
    }

    // Copy Code to Clipboard
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const content = generateJsString();
            navigator.clipboard.writeText(content).then(() => {
                showToast(state.lang === 'vi' ? 'ÄÃ£ sao chÃ©p toÃ n bá»™ mÃ£ vÃ o Clipboard!' : 'Code copied to clipboard!');
            }).catch(() => {
                alert('Vui lÃ²ng cáº¥p quyá»n sao chÃ©p trÃªn trÃ¬nh duyá»‡t');
            });
        });
    }
}

// Call initQuickEditor in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initQuickEditor();
});


