import type { UserProfile, TimelineProject, RepositoryItem, UpstreamRepo } from '../types/github';

export const userProfile: UserProfile = {
  name: "Trung Kiên (Nguyễn Tô Trung Kiên)",
  githubHandle: "tkiennt",
  subUsername: "trungkien20012005",
  email: "nguyentotrungkien@gmail.com",
  role: "Software Engineering Student & Fullstack / Mobile Developer",
  university: "Đại học FPT (FPT University)",
  location: "Hà Nội, Việt Nam",
  avatarUrl: "https://github.com/tkiennt.png",
  bio: "Sinh viên ngành Kỹ thuật Phần mềm (Software Engineering) tại Đại học FPT. Đam mê phát triển hệ thống Fullstack với C# / .NET & TypeScript/React, ứng dụng di động Flutter/Dart và dịch vụ đám mây AWS. Đã tích lũy hơn 520+ commits và 89 merged pull requests trên 34 repositories làm việc nhóm và cá nhân.",
  stats: {
    totalRepos: 34,
    totalCommits: 520,
    totalPRs: 89,
    totalIssues: 0,
    activeBranches: ["trungkien", "Kien", "KienNTT_branch", "feature/landing-page", "main"]
  },
  languages: [
    { name: "C# / .NET & Unity", percentage: 38, color: "#9B4F96" },
    { name: "TypeScript / React / Next.js", percentage: 35, color: "#3178C6" },
    { name: "Dart / Flutter Mobile", percentage: 12, color: "#00B4AB" },
    { name: "Java / Spring Boot", percentage: 10, color: "#B07219" },
    { name: "Khác (Config, Markdown, SQL)", percentage: 5, color: "#64748B" }
  ]
};

export const timelineProjects: TimelineProject[] = [
  {
    id: "blood-donation-swp391",
    title: "Blood Donation Management & Matching System (SWP391)",
    period: "Tháng 06/2025 - Tháng 08/2025 (Cập nhật 10/2026)",
    status: "Completed",
    category: "FPT Capstone & Core",
    repos: [
      {
        name: "TLBTRAM/Project_SWP391_BloodDonationSystem",
        url: "https://github.com/TLBTRAM/Project_SWP391_BloodDonationSystem",
        role: "Collaborator",
        commits: 91,
        branch: "trungkien"
      },
      {
        name: "tkiennt/Project_SWP391_BloodDonationSystem",
        url: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem",
        role: "Owner (Fork)",
        commits: 93,
        branch: "trungkien"
      }
    ],
    description: "Hệ thống quản lý và điều phối hiến máu nhân đạo với thuật toán tương thích nhóm máu và điều phối lịch hẹn theo thời gian thực (Đồ án chuyên ngành SWP391 Đại học FPT).",
    contributions: [
      "Đóng góp hơn 93 commits cá nhân (tổng lịch sử đóng góp qua các PR vượt mốc 170+ commits).",
      "Xây dựng module Manager Dashboard, cơ chế lọc lưu trữ túi máu (Blood Storage Filter) và quy trình gửi yêu cầu nhận máu (Blood Request).",
      "Cài đặt thuật toán kiểm tra tính tương thích nhóm máu (Blood Compatibility), hệ thống Notification API và đặt lịch hiến máu (Donor Scheduling)."
    ],
    techStack: ["TypeScript", "React", "Java Spring Boot", "MySQL", "REST API", "Tailwind CSS"]
  },
  {
    id: "vstep-writing-lab",
    title: "VSTEP Writing Lab & Automated AI Scoring Engine",
    period: "Tháng 01/2026 - Tháng 03/2026",
    status: "Completed",
    category: "FPT Capstone & Core",
    repos: [
      {
        name: "tkiennt/vstep-writing-lab",
        url: "https://github.com/tkiennt/vstep-writing-lab",
        role: "Owner",
        commits: 73,
        branch: "trungkien"
      },
      {
        name: "tkiennt/VSTEP_BE",
        url: "https://github.com/tkiennt/VSTEP_BE",
        role: "Owner",
        commits: 15,
        branch: "main"
      },
      {
        name: "tkiennt/VSTEP-Writing-Deploy",
        url: "https://github.com/tkiennt/VSTEP-Writing-Deploy",
        role: "Owner",
        commits: 6,
        branch: "main"
      }
    ],
    description: "Hệ thống hỗ trợ luyện thi và chấm điểm bài viết tiếng Anh chuẩn VSTEP tự động ứng dụng mô hình AI Gemini fine-tuned kết hợp cơ chế chống lỗi đứt gãy JSON streaming.",
    contributions: [
      "Frontend (73 commits): Xây dựng xác thực Authentication qua Firebase, Dashboard Giáo viên / Admin / Học viên, hiển thị lộ trình học (Roadmap) và phân tích chuyên sâu (Deep Analysis).",
      "Backend & AI Engine (15 commits): Tinh chỉnh mô hình AI chấm bài theo Rubric chuẩn VSTEP, phát triển JsonRepairHelper chống lỗi truncation JSON khi AI stream kết quả, viết Reconstitute factory cho Entity Framework.",
      "DevOps (6 commits): Cấu hình deployment CI/CD và xử lý build tối ưu trên Docker/Vercel."
    ],
    techStack: ["C# ASP.NET Core", "Next.js", "React", "TypeScript", "Firebase Auth", "Tuned AI Gemini", "Docker"]
  },
  {
    id: "skinsync",
    title: "SkinSync — Cross-Platform Skincare Ecosystem & AI Assistant",
    period: "Tháng 06/2026 - Tháng 08/2026 (Cập nhật 10/2026)",
    status: "Completed",
    category: "Mobile (Flutter)",
    repos: [
      {
        name: "vihao-chay/SkinSync",
        url: "https://github.com/vihao-chay/SkinSync",
        role: "Collaborator",
        commits: 43,
        branch: "Kien"
      },
      {
        name: "tkiennt/SkinSync",
        url: "https://github.com/tkiennt/SkinSync",
        role: "Owner (Fork)",
        commits: 44,
        branch: "Kien"
      }
    ],
    description: "Hệ sinh thái chăm sóc da đa nền tảng: Kiểm tra xung đột thành phần mỹ phẩm độc hại, đề xuất liệu trình và trợ lý ảo AI chăm sóc cá nhân hóa.",
    contributions: [
      "44 commits trên nhánh Kien: Trực tiếp xây dựng và đồng bộ giao diện ứng dụng Mobile Flutter với Backend .NET 9.",
      "Tạo và merge nhiều Pull Requests quan trọng (merge_mobile into Kien) để hợp nhất luồng trải nghiệm người dùng trên thiết bị di động.",
      "Tích hợp cổng thanh toán PayOS và quản lý cơ sở dữ liệu Supabase."
    ],
    techStack: ["Dart", "Flutter Mobile", "C# .NET 9 Backend", "React Web", "PayOS", "Supabase"]
  },
  {
    id: "fptu-swd392",
    title: "SWD392 — Service-Oriented Software Architecture",
    period: "Tháng 01/2026 - Tháng 03/2026",
    status: "Completed",
    category: "FPT Capstone & Core",
    repos: [
      {
        name: "Vinhhaphoi/fptu-swd392",
        url: "https://github.com/Vinhhaphoi/fptu-swd392",
        role: "Collaborator",
        commits: 33,
        branch: "main"
      }
    ],
    description: "Đồ án thiết kế kiến trúc phần mềm hướng dịch vụ (Service-Oriented Architecture - SOA) cho môn Kiến trúc Phần mềm SWD392 tại Đại học FPT.",
    contributions: [
      "33 commits đóng góp: Dựng khung kiến trúc Backend chuẩn phân tầng.",
      "Cấu hình cơ chế bảo mật Bearer Token Authentication, viết HintService.cs xử lý logic nghiệp vụ trung tâm.",
      "Xây dựng bộ API quản trị Admin & User, hoàn thiện tài liệu kỹ thuật Backend Architecture."
    ],
    techStack: ["C#", "ASP.NET Core", "TypeScript", "Bearer JWT Auth", "SOLID", "Clean Architecture"]
  },
  {
    id: "valorant-tower-defense",
    title: "Valorant: Defense of the Agents (Unity 2D Game)",
    period: "Tháng 03/2026 - Tháng 10/2026",
    status: "Completed",
    category: "Client & Game",
    repos: [
      {
        name: "TranNgocKhiet/valorant-tower-defense",
        url: "https://github.com/TranNgocKhiet/valorant-tower-defense",
        role: "Collaborator",
        commits: 27,
        branch: "main"
      },
      {
        name: "tkiennt/valorant-tower-defense",
        url: "https://github.com/tkiennt/valorant-tower-defense",
        role: "Owner (Fork)",
        commits: 30,
        branch: "main"
      }
    ],
    description: "Trò chơi chiến thuật thủ thành 2D chủ đề đặc vụ Valorant với đồ họa URP mượt mà kết hợp hệ thống xác thực người chơi qua đám mây AWS.",
    contributions: [
      "30 commits đóng góp: Thiết kế giao diện đăng ký tài khoản SignupScene.unity theo chuẩn thiết kế Valorant.",
      "Chuẩn hóa typography TextMesh Pro, viết module kiểm tra hợp lệ dữ liệu đầu vào (Input validation).",
      "Tích hợp hệ thống xác thực người chơi và quản lý dữ liệu lưu trữ qua AWS SDK for .NET."
    ],
    techStack: ["Unity Engine (2D URP)", "C#", "AWS SDK (.NET)", "TextMesh Pro", "Game Design"]
  },
  {
    id: "scientific-paper-reader",
    title: "Scientific Paper Reader & Smart Markdown Extractor (PRM393)",
    period: "Tháng 05/2026 - Tháng 07/2026 (Cập nhật 10/2026)",
    status: "Completed",
    category: "Mobile (Flutter)",
    repos: [
      {
        name: "LeMinhDuc192044/PRM",
        url: "https://github.com/LeMinhDuc192044/PRM",
        role: "Collaborator",
        commits: 17,
        branch: "Kien"
      },
      {
        name: "tkiennt/scientific-paper-reader",
        url: "https://github.com/tkiennt/scientific-paper-reader",
        role: "Owner (Fork)",
        commits: 11,
        branch: "trungkien"
      }
    ],
    description: "Ứng dụng di động đọc, phân tích và trích xuất tài liệu nghiên cứu khoa học thông minh với bộ bảng màu học thuật Academic Ink & Sky Palette (Môn PRM393).",
    contributions: [
      "17 commits trên repo gốc và 11 commits trên fork cá nhân: Xây dựng giao diện đọc học thuật thân thiện mắt nhìn.",
      "Tích hợp bộ xem Syncfusion PDF Viewer kết hợp trình hiển thị Flutter Markdown.",
      "Tối ưu luồng duyệt tệp cục bộ và trích xuất thông tin tác giả/trích dẫn nhanh chóng."
    ],
    techStack: ["Dart", "Flutter", "Syncfusion PDF Viewer", "Flutter Markdown", "Mobile UX"]
  },
  {
    id: "research-trend-analyzer",
    title: "Research Publication Trend Analyzer (OpenAlex API)",
    period: "Tháng 07/2026 (Cập nhật 10/2026)",
    status: "Completed",
    category: "Mobile (Flutter)",
    repos: [
      {
        name: "tkiennt/research-publication-trend-analyzer",
        url: "https://github.com/tkiennt/research-publication-trend-analyzer",
        role: "Owner (Fork)",
        commits: 12,
        branch: "Kien"
      },
      {
        name: "LeMinhDuc192044/prm393_lab2_se192044",
        url: "https://github.com/LeMinhDuc192044/prm393_lab2_se192044",
        role: "Collaborator",
        commits: 11,
        branch: "Kien"
      }
    ],
    description: "Ứng dụng di động phân tích xu hướng công bố nghiên cứu khoa học toàn cầu thông qua OpenAlex REST API với biểu đồ trực quan động.",
    contributions: [
      "12 commits trên nhánh Kien: Thiết kế màn hình tìm kiếm ấn phẩm khoa học đa tiêu chí.",
      "Tích hợp thư viện biểu đồ fl_chart trực quan hóa số lượng trích dẫn và ấn phẩm qua các năm.",
      "Quản lý trạng thái ứng dụng bằng Provider Pattern."
    ],
    techStack: ["Dart", "Flutter", "OpenAlex REST API", "fl_chart", "Provider"]
  },
  {
    id: "autowash-pro",
    title: "AutoWash Pro (AUTOBOT) — Smart Motorbike Booking & Loyalty Engine",
    period: "Tháng 07/2026 - Tháng 10/2026",
    status: "Completed",
    category: "Client & Game",
    repos: [
      {
        name: "TDuckAn/AUTOBOT",
        url: "https://github.com/TDuckAn/AUTOBOT",
        role: "Collaborator",
        commits: 4,
        branch: "KienNTT_branch"
      },
      {
        name: "tkiennt/AUTOBOT",
        url: "https://github.com/tkiennt/AUTOBOT",
        role: "Owner (Fork)",
        commits: 7,
        branch: "KienNTT_branch"
      }
    ],
    description: "Hệ thống quản lý và điều phối dịch vụ tiệm rửa xe máy thông minh với cơ chế kiểm tra giới hạn khung giờ và chương trình khách hàng thân thiết 4 hạng thành viên.",
    contributions: [
      "7 commits trên nhánh KienNTT_branch (đã merge vào main): Xây dựng tính năng xác nhận hủy lịch hẹn (Booking Cancel Confirmation).",
      "Viết logic giới hạn khung giờ đặt lịch theo hạng thành viên (Disable scheduled time exceeds booking window).",
      "Hiển thị chi tiết bảng giá dịch vụ và cập nhật danh sách nhân viên phục vụ."
    ],
    techStack: ["ASP.NET Core 9.0 Web API", "Entity Framework Core 9.0", "SQL Server", "JWT Bearer", "JavaScript"]
  },
  {
    id: "meal-prep-service",
    title: "Meal Prep Service — Smart Nutrition & Virtual Fridge Platform",
    period: "Tháng 01/2026 - Tháng 10/2026",
    status: "Completed",
    category: "Client & Game",
    repos: [
      {
        name: "tkiennt/meal-prep-service",
        url: "https://github.com/tkiennt/meal-prep-service",
        role: "Owner (Fork)",
        commits: 7,
        branch: "main"
      },
      {
        name: "TranNgocKhiet/meal-prep-service",
        url: "https://github.com/TranNgocKhiet/meal-prep-service",
        role: "Collaborator",
        commits: 5,
        branch: "main"
      }
    ],
    description: "Nền tảng lập kế hoạch bữa ăn dinh dưỡng thông minh, quản lý tủ lạnh ảo và điều phối nguyên liệu nấu ăn trực tuyến theo kiến trúc N-Layer.",
    contributions: [
      "7 commits đóng góp: Thiết kế trọn bộ Manager Dashboard UI và trải nghiệm quản lý nguyên liệu.",
      "Thiết kế hệ thống bảng màu thương hiệu (System Color Palette) hiện đại.",
      "Xây dựng module quản lý menu món ăn theo mục tiêu calo."
    ],
    techStack: ["ASP.NET Core 9.0 (N-Layer)", "React", "Vite", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "swt301-testing",
    title: "SWT301 — Automated API Testing Suite (Postman)",
    period: "Tháng 07/2025",
    status: "Completed",
    category: "Tools & Practice",
    repos: [
      {
        name: "tkiennt/SWT301_SE1851_Group6",
        url: "https://github.com/tkiennt/SWT301_SE1851_Group6",
        role: "Owner",
        commits: 8,
        branch: "master"
      }
    ],
    description: "Dự án kiểm thử tự động API cho môn Kiểm thử Phần mềm SWT301 với Postman Collections và kịch bản test JavaScript.",
    contributions: [
      "8 commits đóng góp: Thiết lập bộ Postman collections kiểm thử tự động các kịch bản kiểm thử biên (boundary test).",
      "Viết test scripts tự động kiểm tra Status Code, JSON schema và Response Time."
    ],
    techStack: ["Postman", "JavaScript Test Scripts", "API QA Automation"]
  },
  {
    id: "wpf-blood-donation",
    title: "PRN212 — Blood Donation Desktop Application (WPF / C#)",
    period: "Tháng 07/2025",
    status: "Completed",
    category: "Tools & Practice",
    repos: [
      {
        name: "HoangWorthy/BloodDonationSupportSystemWPF",
        url: "https://github.com/HoangWorthy/BloodDonationSupportSystemWPF",
        role: "Collaborator",
        commits: 2,
        branch: "main"
      },
      {
        name: "tkiennt/BloodDonationSupportSystemWPF",
        url: "https://github.com/tkiennt/BloodDonationSupportSystemWPF",
        role: "Owner (Fork)",
        commits: 2,
        branch: "main"
      }
    ],
    description: "Ứng dụng Desktop quản lý hiến máu xây dựng trên nền tảng .NET WPF và XAML.",
    contributions: [
      "Xây dựng màn hình và tính năng đăng ký sự kiện hiến máu (Event Registration) với XAML data binding."
    ],
    techStack: ["C#", "WPF", "XAML", "Entity Framework Core", "SQL Server"]
  },
  {
    id: "mln131-study",
    title: "MLN131 Review App & Git Flow Practice",
    period: "Tháng 10/2026",
    status: "Completed",
    category: "Tools & Practice",
    repos: [
      {
        name: "tkiennt/mln131-review",
        url: "https://github.com/tkiennt/mln131-review",
        role: "Owner",
        commits: 5,
        branch: "main"
      },
      {
        name: "tkiennt/StudyGitHub",
        url: "https://github.com/tkiennt/StudyGitHub",
        role: "Owner",
        commits: 9,
        branch: "main"
      }
    ],
    description: "Ứng dụng web ôn thi trắc nghiệm môn Triết học Mác - Lênin (MLN131) và các repository thực hành phân nhánh Git Flow chuyên sâu.",
    contributions: [
      "Xây dựng công cụ tương tác ôn tập ngân hàng câu hỏi trắc nghiệm nhanh chóng.",
      "Thực hành chiến lược phân nhánh (Branching Strategy), merge conflicts và rebase."
    ],
    techStack: ["JavaScript", "HTML/CSS", "Git Flow", "CLI"]
  }
];

export const allRepositoriesData: RepositoryItem[] = [
  { id: 1, name: "tkiennt/Project_SWP391_BloodDonationSystem", url: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem", role: "Owner (Fork)", isPrivate: false, language: "TypeScript", branch: "trungkien", commits: 93, subsystem: "Manager Dashboard, Blood Storage Filter, Request, Scheduling" },
  { id: 2, name: "TLBTRAM/Project_SWP391_BloodDonationSystem", url: "https://github.com/TLBTRAM/Project_SWP391_BloodDonationSystem", role: "Collaborator", isPrivate: false, language: "TypeScript", branch: "trungkien", commits: 91, subsystem: "Đóng góp gốc qua các PR nhánh tính năng SWP391 (Tổng 170+ commits)" },
  { id: 3, name: "tkiennt/vstep-writing-lab", url: "https://github.com/tkiennt/vstep-writing-lab", role: "Owner", isPrivate: false, language: "TypeScript", branch: "trungkien", commits: 73, subsystem: "FE Dashboard, AI Grading Integration, Roadmap & Analytics" },
  { id: 4, name: "tkiennt/SkinSync", url: "https://github.com/tkiennt/SkinSync", role: "Owner (Fork)", isPrivate: false, language: "C#", branch: "Kien", commits: 44, subsystem: "Mobile UI Sync, tích hợp dịch vụ da liễu & AI" },
  { id: 5, name: "vihao-chay/SkinSync", url: "https://github.com/vihao-chay/SkinSync", role: "Collaborator", isPrivate: false, language: "C#", branch: "Kien", commits: 43, subsystem: "Nhánh tính năng Kien và tích hợp ứng dụng di động" },
  { id: 6, name: "Vinhhaphoi/fptu-swd392", url: "https://github.com/Vinhhaphoi/fptu-swd392", role: "Collaborator", isPrivate: false, language: "TypeScript / C#", branch: "main", commits: 33, subsystem: "HintService.cs, Bearer Token Auth, Admin API Docs" },
  { id: 7, name: "tkiennt/valorant-tower-defense", url: "https://github.com/tkiennt/valorant-tower-defense", role: "Owner (Fork)", isPrivate: false, language: "C# / Unity", branch: "main", commits: 30, subsystem: "Unity SignUp Scene, AWS Auth, TextMesh Pro typography" },
  { id: 8, name: "TranNgocKhiet/valorant-tower-defense", url: "https://github.com/TranNgocKhiet/valorant-tower-defense", role: "Collaborator", isPrivate: false, language: "C# / Unity", branch: "main", commits: 27, subsystem: "Đóng góp gốc game thủ thành 2D Valorant URP" },
  { id: 9, name: "LeMinhDuc192044/PRM", url: "https://github.com/LeMinhDuc192044/PRM", role: "Collaborator", isPrivate: false, language: "Dart / Flutter", branch: "Kien", commits: 17, subsystem: "Đóng góp gốc môn PRM393 - Paper Reader" },
  { id: 10, name: "tkiennt/tkiennt", url: "https://github.com/tkiennt/tkiennt", role: "Owner", isPrivate: false, language: "Markdown", branch: "main", commits: 15, subsystem: "GitHub Profile README Showcase" },
  { id: 11, name: "tkiennt/VSTEP_BE", url: "https://github.com/tkiennt/VSTEP_BE", role: "Owner", isPrivate: false, language: "C#", branch: "main", commits: 15, subsystem: "Admin/User API, Tuned AI Model, JsonRepairHelper, Auth" },
  { id: 12, name: "tkiennt/research-publication-trend-analyzer", url: "https://github.com/tkiennt/research-publication-trend-analyzer", role: "Owner (Fork)", isPrivate: false, language: "Dart / Flutter", branch: "Kien", commits: 12, subsystem: "Phân tích xu hướng OpenAlex API, biểu đồ fl_chart" },
  { id: 13, name: "LeMinhDuc192044/prm393_lab2_se192044", url: "https://github.com/LeMinhDuc192044/prm393_lab2_se192044", role: "Collaborator", isPrivate: false, language: "Dart / Flutter", branch: "Kien", commits: 11, subsystem: "Lab 2 mobile PRM review trên nhánh Kien" },
  { id: 14, name: "tkiennt/scientific-paper-reader", url: "https://github.com/tkiennt/scientific-paper-reader", role: "Owner (Fork)", isPrivate: false, language: "Dart / Flutter", branch: "trungkien", commits: 11, subsystem: "Đọc tài liệu PDF, Markdown summary, Academic UI" },
  { id: 15, name: "tkiennt/StudyGitHub", url: "https://github.com/tkiennt/StudyGitHub", role: "Owner", isPrivate: true, language: "Java", branch: "main", commits: 9, subsystem: "Thực hành Git flow, Branching strategy" },
  { id: 16, name: "tkiennt/SWT301_SE1851_Group6", url: "https://github.com/tkiennt/SWT301_SE1851_Group6", role: "Owner", isPrivate: false, language: "TypeScript", branch: "master", commits: 8, subsystem: "Postman test suites, kiểm thử API tự động" },
  { id: 17, name: "tkiennt/meal-prep-service", url: "https://github.com/tkiennt/meal-prep-service", role: "Owner (Fork)", isPrivate: false, language: "C#", branch: "main", commits: 7, subsystem: "Manager Dashboard UI, App Themes, Meal Menu" },
  { id: 18, name: "tkiennt/AUTOBOT", url: "https://github.com/tkiennt/AUTOBOT", role: "Owner (Fork)", isPrivate: false, language: "JavaScript / C#", branch: "KienNTT_branch", commits: 7, subsystem: "Booking window check, cancel confirmation, UI" },
  { id: 19, name: "tkiennt/VSTEP-Writing-Deploy", url: "https://github.com/tkiennt/VSTEP-Writing-Deploy", role: "Owner", isPrivate: false, language: "C# / Docker", branch: "main", commits: 6, subsystem: "Deployment setup, Dockerfile, Cloud hosting" },
  { id: 20, name: "tkiennt/mln131-review", url: "https://github.com/tkiennt/mln131-review", role: "Owner", isPrivate: true, language: "JavaScript", branch: "main", commits: 5, subsystem: "App ôn tập trắc nghiệm Triết học MLN131" },
  { id: 21, name: "TranNgocKhiet/meal-prep-service", url: "https://github.com/TranNgocKhiet/meal-prep-service", role: "Collaborator", isPrivate: false, language: "C#", branch: "main", commits: 5, subsystem: "Đóng góp gốc dự án bữa ăn dinh dưỡng N-Layer" },
  { id: 22, name: "TDuckAn/AUTOBOT", url: "https://github.com/TDuckAn/AUTOBOT", role: "Collaborator", isPrivate: false, language: "JavaScript", branch: "KienNTT_branch", commits: 4, subsystem: "Repo gốc AutoWash Pro trên nhánh KienNTT" },
  { id: 23, name: "HoangWorthy/BloodDonationSupportSystemWPF", url: "https://github.com/HoangWorthy/BloodDonationSupportSystemWPF", role: "Collaborator", isPrivate: false, language: "C# / WPF", branch: "main", commits: 2, subsystem: "WPF Event Registration form" },
  { id: 24, name: "tkiennt/BloodDonationSupportSystemWPF", url: "https://github.com/tkiennt/BloodDonationSupportSystemWPF", role: "Owner (Fork)", isPrivate: false, language: "C# / WPF", branch: "main", commits: 2, subsystem: "Fork dự án desktop WPF" },
  { id: 25, name: "tkiennt/VSTEP-Writing-System", url: "https://github.com/tkiennt/VSTEP-Writing-System", role: "Owner", isPrivate: true, language: "C#", branch: "main", commits: 2, subsystem: "Core architecture & Entity models" },
  { id: 26, name: "tkiennt/WebAPIT", url: "https://github.com/tkiennt/WebAPIT", role: "Owner", isPrivate: true, language: "C#", branch: "main", commits: 2, subsystem: "RESTful Web API boilerplate" },
  { id: 27, name: "tkiennt/vstep-writing-lab-fe", url: "https://github.com/tkiennt/vstep-writing-lab-fe", role: "Owner", isPrivate: true, language: "TypeScript", branch: "main", commits: 1, subsystem: "Frontend mirror / backup" },
  { id: 28, name: "tkiennt/blooddonation", url: "https://github.com/tkiennt/blooddonation", role: "Owner", isPrivate: true, language: "Java", branch: "main", commits: 1, subsystem: "Backend Java Spring prototype" },
  { id: 29, name: "tkiennt/Project_SWP391_BloodDonationSystem_BE", url: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem_BE", role: "Owner", isPrivate: true, language: "Java", branch: "main", commits: 1, subsystem: "Source code API SWP391" }
];

export const upstreamReposData: UpstreamRepo[] = [
  { id: 1, forkName: "tkiennt/AUTOBOT", forkUrl: "https://github.com/tkiennt/AUTOBOT", upstreamParent: "TDuckAn/AUTOBOT", defaultBranch: "main", syncStatus: "Merged & Synced", note: "Đã merge nhánh KienNTT_branch vào main, cập nhật README chuẩn" },
  { id: 2, forkName: "tkiennt/scientific-paper-reader", forkUrl: "https://github.com/tkiennt/scientific-paper-reader", upstreamParent: "LeMinhDuc192044/PRM", defaultBranch: "main", syncStatus: "Identical", note: "Đã đổi tên chuẩn, kéo 28 commits từ upstream, cập nhật README" },
  { id: 3, forkName: "tkiennt/research-publication-trend-analyzer", forkUrl: "https://github.com/tkiennt/research-publication-trend-analyzer", upstreamParent: "LeMinhDuc192044/prm393_lab2_se192044", defaultBranch: "main", syncStatus: "Diverged", note: "Đã đổi tên chuẩn, chứa 12 commits nhánh Kien" },
  { id: 4, forkName: "tkiennt/valorant-tower-defense", forkUrl: "https://github.com/tkiennt/valorant-tower-defense", upstreamParent: "TranNgocKhiet/valorant-tower-defense", defaultBranch: "main", syncStatus: "Identical", note: "Đã cập nhật README chuẩn UTF-8" },
  { id: 5, forkName: "tkiennt/meal-prep-service", forkUrl: "https://github.com/tkiennt/meal-prep-service", upstreamParent: "TranNgocKhiet/meal-prep-service", defaultBranch: "main", syncStatus: "Identical", note: "Đã cập nhật README sản phẩm N-Layer" },
  { id: 6, forkName: "tkiennt/SkinSync", forkUrl: "https://github.com/tkiennt/SkinSync", upstreamParent: "vihao-chay/SkinSync", defaultBranch: "master", syncStatus: "Identical", note: "Đã cập nhật README hệ sinh thái AI" },
  { id: 7, forkName: "tkiennt/Project_SWP391_BloodDonationSystem", forkUrl: "https://github.com/tkiennt/Project_SWP391_BloodDonationSystem", upstreamParent: "TLBTRAM/Project_SWP391_BloodDonationSystem", defaultBranch: "main", syncStatus: "Identical", note: "Đã cập nhật README chuẩn" },
  { id: 8, forkName: "tkiennt/BloodDonationSupportSystemWPF", forkUrl: "https://github.com/tkiennt/BloodDonationSupportSystemWPF", upstreamParent: "HoangWorthy/BloodDonationSupportSystemWPF", defaultBranch: "main", syncStatus: "Identical", note: "Fork dự án desktop WPF" }
];
